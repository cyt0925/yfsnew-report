import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { tools } from '../data/tools.js';

// 用 Canvas 2D 畫出卡片再貼成 Sprite，取代「即時把 3D 座標投影成 DOM 位置」。
// 後者需要每一幀重算螢幕座標並手動同步 DOM style，容易在鏡頭參數調整時算錯位置；
// Sprite 直接活在場景座標系裡，永遠跟著節點走，而且天生面向鏡頭，不用額外處理朝向。
function makeLabelSprite(title, subtitle, accent) {
  const width = 512;
  const height = 176;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  const pad = 18;
  const radius = 14;
  ctx.fillStyle = 'rgba(10, 10, 11, 0.82)';
  ctx.strokeStyle = accent ? '#d10f27' : 'rgba(245, 242, 238, 0.35)';
  ctx.lineWidth = 3;
  const w = width - pad * 2;
  const h = height - pad * 2;
  const x = pad;
  const y = pad;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = accent ? '#d10f27' : '#f5f2ee';
  ctx.font = '700 40px "Noto Sans TC", sans-serif';
  ctx.textBaseline = 'top';
  ctx.fillText(title, x + 24, y + 22);

  ctx.fillStyle = 'rgba(245, 242, 238, 0.62)';
  ctx.font = '400 26px "Noto Sans TC", sans-serif';
  ctx.fillText(subtitle, x + 24, y + 78);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(4.2, (4.2 * height) / width, 1);
  return sprite;
}

export default function RoadmapScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();

    const aspect = mount.clientWidth / mount.clientHeight;
    const d = 9;
    const camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 0.1, 100);
    camera.position.set(14, 12, 14);
    camera.lookAt(0, 0.5, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
    dirLight.position.set(8, 14, 6);
    scene.add(dirLight);

    // 平台大小跟著節點數量走，節點少的時候平台縮小，
    // 不會因為只有兩三個工具就在畫面裡顯得空空蕩蕩。
    const platformSize = 8 + Math.max(tools.length, 1) * 2.6;
    const platformGeo = new THREE.BoxGeometry(platformSize, 0.3, platformSize);
    const platformMat = new THREE.MeshStandardMaterial({ color: 0x111113, roughness: 0.9 });
    const platform = new THREE.Mesh(platformGeo, platformMat);
    platform.position.y = -1.6;
    group.add(platform);
    const platformEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(platformGeo),
      new THREE.LineBasicMaterial({ color: 0x333333, transparent: true, opacity: 0.5 })
    );
    platform.add(platformEdges);

    const N = Math.max(tools.length, 1);
    const nodeMat = new THREE.MeshStandardMaterial({ color: 0x222226, roughness: 0.75 });
    const accentMat = new THREE.MeshStandardMaterial({
      color: 0xd10f27,
      emissive: 0xd10f27,
      emissiveIntensity: 0.5,
      roughness: 0.35,
    });

    const nodes = [];
    const linkMat = new THREE.LineDashedMaterial({
      color: 0xd10f27,
      dashSize: 0.35,
      gapSize: 0.25,
      transparent: true,
      opacity: 0.55,
    });

    tools.forEach((tool, i) => {
      const t = N === 1 ? 0 : i / (N - 1);
      const x = -5 + t * 10;
      const z = -4 + t * 8;
      const y = -0.2 + t * 3.4;
      const isLive = tool.status === '已上線';

      const geo = new THREE.OctahedronGeometry(0.55, 0);
      const mesh = new THREE.Mesh(geo, isLive ? accentMat : nodeMat);
      mesh.position.set(x, y, z);
      group.add(mesh);

      const stemGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(x, y, z),
        new THREE.Vector3(x, -1.45, z),
      ]);
      const stem = new THREE.Line(stemGeo, new THREE.LineBasicMaterial({ color: 0x555555, transparent: true, opacity: 0.6 }));
      group.add(stem);

      const anchorGeo = new THREE.CircleGeometry(0.14, 20);
      const anchor = new THREE.Mesh(anchorGeo, new THREE.MeshBasicMaterial({ color: isLive ? 0xd10f27 : 0x888888 }));
      anchor.rotation.x = -Math.PI / 2;
      anchor.position.set(x, -1.44, z);
      group.add(anchor);

      const label = makeLabelSprite(`${tool.index} ${tool.name}`, tool.kicker, isLive);
      label.position.set(x, y + 1.15, z);
      group.add(label);

      nodes.push({ mesh, x, y, z, phase: i * 1.7 });
    });

    // 節點間的虛線連接，並在每段線上放一顆流動的小光點做出「資料在跑」的感覺
    const flowDots = [];
    for (let i = 0; i < nodes.length - 1; i++) {
      const a = nodes[i];
      const b = nodes[i + 1];
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(a.x, a.y, a.z),
        new THREE.Vector3(b.x, b.y, b.z),
      ]);
      const line = new THREE.Line(lineGeo, linkMat);
      line.computeLineDistances();
      group.add(line);

      const dotGeo = new THREE.SphereGeometry(0.08, 12, 12);
      const dotMat = new THREE.MeshBasicMaterial({ color: 0xff5a68 });
      const dot = new THREE.Mesh(dotGeo, dotMat);
      group.add(dot);
      flowDots.push({ dot, a, b, offset: i * 0.4 });
    }

    let raf;
    let time = 0;
    const clock = new THREE.Clock();

    function animate() {
      raf = requestAnimationFrame(animate);
      time += clock.getDelta();

      // 整組場景緩緩擺動，維持等距構圖的「靜物」感，同時仍然是動的
      group.rotation.y = Math.sin(time * 0.12) * 0.12;

      nodes.forEach((n) => {
        n.mesh.position.y = n.y + Math.sin(time * 1.1 + n.phase) * 0.18;
        n.mesh.rotation.y += 0.006;
      });

      flowDots.forEach((f) => {
        const t = (time * 0.35 + f.offset) % 1;
        f.dot.position.lerpVectors(
          new THREE.Vector3(f.a.x, f.a.y, f.a.z),
          new THREE.Vector3(f.b.x, f.b.y, f.b.z),
          t
        );
      });

      renderer.render(scene, camera);
    }
    animate();

    function onResize() {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      const newAspect = w / h;
      camera.left = -d * newAspect;
      camera.right = d * newAspect;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="roadmap-canvas" ref={mountRef} />;
}

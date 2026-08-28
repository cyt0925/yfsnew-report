import { CRT_FRAGMENT_SHADER, CRT_VERTEX_SHADER } from './crtShaders.js';

// 這是 @designcodeio/threeui（MIT）CRT 元件的 renderer，逐行對照原始 TypeScript
// 移植過來，渲染邏輯、生命週期、shader uniform 全部照原樣。改掉的只有三件事：
//   1. 開機日誌內容（LOG）—— 原版是駭客任務的 ZION 開機畫面，換成我們自己的
//      工具 pipeline 日誌，形式（逐行 typing、四種語意色）不變
//   2. 調色盤（COLORS）與螢幕色調 —— 原版是綠色磷光，換成品牌紅
//   3. 只保留 "terminal" 這個變體 —— 原始套件還有 cinematic / blue-screen /
//      nintendo 三種畫面，但我們的頁面固定用 terminal，那三種從沒被叫用過，
//      整套搬過來只是死重量，所以沒有一起搬（其餘四個變體共用的 crtScreens.ts
//      在原始碼裡有近 400 行，都是那三種畫面專用的繪製函式）。
//      若之後想加別的變體，可以再回頭補。

export const CRT_DEFAULTS = { speed: 1, typeSpeed: 1, motion: 1, brightness: 1, opacity: 1, hue: 0, saturation: 1 };

// terminal 這個變體原本的樣式參數（曲率、掃描線密度、雜訊量等結構性數值全部照舊，
// 只換了三個跟「顏色」有關的欄位：background、sheen、room，從綠轉紅）
const TERMINAL_STYLE = {
  curve: [0.115, 0.165],
  scanDensity: 0.44,
  scanDepth: 0.30,
  triadCss: 3.2,
  grille: 0.34,
  chroma: 1,
  bar: 0.045,
  flicker: 0.028,
  grain: 0.022,
  noise: 0,
  vignette: 0.58,
  mono: 0,
  gain: 1.34,
  halo: 0.10,
  sheen: [1.0, 0.55, 0.58],
  room: [0.058, 0.020, 0.024],
  background: '#120404',
  filtering: 'linear',
  redrawMs: 0,
};

const SCREEN_CLEAR_COLOR = '#120404';

export const crtStyle = () => TERMINAL_STYLE;

const segment = (text, color = 'p') => ({ t: text, c: color });
const dots = (count) => '·'.repeat(count);

// 我們自己的開機日誌：不是駭客任務的 ZION 開機畫面，是這個頁面在講的
// 那套「半自動化中繼平台」的 pipeline —— 卡住的地方（平台沒有 API、
// 報表得手動匯出）用琥珀色標出來，跑得動的環節用白色的 OK/READY 收尾。
// 日誌從 13 行精簡到 8 行：字級是用「容器高度 / 行數」和
// 「容器寬度 / 最長那一行的字元數」兩者取小值換算出來的，
// 行數少、行也短，兩邊的字級上限都會拉高，容器不用變大，
// 裡面的字就先大一輪——這是放大 CRT 觀感的第一步，
// 詳見 index.css 裡 .ai--terminal .ai-figure 的出血與機殼樣式。
const LOG = [
  [segment('YFS OPERATIONS AI'), segment('  v1.0', 'd')],
  [segment('Claude Code', 'd'), segment(' · HITL', 'd')],
  [],
  [segment('Platform API '), segment(`${dots(4)} `, 'd'), segment('UNAVAILABLE', 'h')],
  [segment('Match · Dedup · SKU '), segment(`${dots(2)} `, 'd'), segment('OK', 'a')],
  [segment('Console '), segment(`${dots(3)} `, 'd'), segment('READY', 'a')],
  [],
  [segment('no api required.')],
];

const COLORS = {
  p: { fill: '#ff5a68', glow: 'rgba(209,15,39,0.90)' },
  d: { fill: '#7a2530', glow: 'rgba(209,15,39,0.40)' },
  a: { fill: '#f5f2ee', glow: 'rgba(245,242,238,0.92)' },
  h: { fill: '#ffb020', glow: 'rgba(255,176,32,0.92)' },
};

const lineLength = (line) => line.reduce((total, item) => total + item.t.length, 0);
const TOTAL = LOG.reduce((total, line) => total + lineLength(line), 0);
const MAX_CHARS = Math.max(...LOG.map(lineLength));

const MAX_BUFFER_WIDTH = 1920;
const MIN_BUFFER_WIDTH = 640;
const MAX_BUFFER_PIXELS = 2_400_000;

function compile(gl, type, source) {
  const shader = gl.createShader(type);
  if (!shader) throw new Error('Unable to create CRT shader');
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader) ?? 'CRT shader compilation failed');
  }
  return shader;
}

export function createCrtRenderer(host, canvas, getOptions) {
  const gl = canvas.getContext('webgl', { antialias: false, alpha: false, depth: false, premultipliedAlpha: false });
  if (!gl) throw new Error('CRT requires WebGL');
  const textCanvas = document.createElement('canvas');
  const textContext = textCanvas.getContext('2d');
  if (!textContext) throw new Error('CRT text canvas unavailable');

  const vertex = compile(gl, gl.VERTEX_SHADER, CRT_VERTEX_SHADER);
  const fragment = compile(gl, gl.FRAGMENT_SHADER, CRT_FRAGMENT_SHADER);
  const program = gl.createProgram();
  if (!program) throw new Error('Unable to create CRT program');
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(program) ?? 'CRT link failed');
  }
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, 'aPos');
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

  const uniform = (name) => gl.getUniformLocation(program, name);
  const uTexture = uniform('uTex');
  const uResolution = uniform('uRes');
  const uTime = uniform('uTime');
  const uMotion = uniform('uMotion');
  const uCurve = uniform('uCurve');
  const uScan = uniform('uScan');
  const uScanDepth = uniform('uScanDepth');
  const uTriad = uniform('uTriad');
  const uGrille = uniform('uGrille');
  const uChroma = uniform('uChroma');
  const uBar = uniform('uBar');
  const uFlicker = uniform('uFlicker');
  const uGrain = uniform('uGrain');
  const uNoise = uniform('uNoise');
  const uVignette = uniform('uVignette');
  const uMono = uniform('uMono');
  const uGain = uniform('uGain');
  const uHalo = uniform('uHalo');
  const uSheen = uniform('uSheen');
  const uRoom = uniform('uRoom');

  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.uniform1i(uTexture, 0);

  let width = 1;
  let height = 1;
  let cssWidth = 1;
  let cssHeight = 1;
  let fontSize = 14;
  let lineHeight = 20;
  let startY = 0;
  let charWidth = 8;
  let caretX = 0;
  let caretY = 0;
  let typed = 0;
  let done = false;
  let textDirty = true;
  let lastTextAt = 0;
  let lastReveal = -1;
  let lastBlink = -1;
  const style = TERMINAL_STYLE;
  const startedAt = performance.now();

  const applyStyle = () => {
    gl.useProgram(program);
    gl.uniform2f(uCurve, style.curve[0], style.curve[1]);
    gl.uniform1f(uScanDepth, style.scanDepth);
    gl.uniform1f(uGrille, style.grille);
    gl.uniform1f(uChroma, style.chroma);
    gl.uniform1f(uBar, style.bar);
    gl.uniform1f(uFlicker, style.flicker);
    gl.uniform1f(uGrain, style.grain);
    gl.uniform1f(uNoise, style.noise);
    gl.uniform1f(uVignette, style.vignette);
    gl.uniform1f(uMono, style.mono);
    gl.uniform1f(uGain, style.gain);
    gl.uniform1f(uHalo, style.halo);
    gl.uniform3f(uSheen, style.sheen[0], style.sheen[1], style.sheen[2]);
    gl.uniform3f(uRoom, style.room[0], style.room[1], style.room[2]);
    const filter = style.filtering === 'nearest' ? gl.NEAREST : gl.LINEAR;
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
  };

  const layout = () => {
    startY = height * 0.135;
    lineHeight = (height * 0.74) / LOG.length;
    fontSize = Math.max(5, Math.min(lineHeight * 0.8, (width * 0.88) / (Math.max(MAX_CHARS, 1) * 0.62)));
    textContext.font = `600 ${fontSize.toFixed(2)}px ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace`;
    charWidth = textContext.measureText('M').width || fontSize * 0.6;
  };

  const setStyle = (key, glow) => {
    const color = COLORS[key];
    textContext.fillStyle = color.fill;
    textContext.shadowColor = glow ? color.glow : 'transparent';
    textContext.shadowBlur = glow ? fontSize * 0.38 : 0;
  };

  const drawScreen = (reveal) => {
    textContext.setTransform(1, 0, 0, 1, 0, 0);
    textContext.fillStyle = SCREEN_CLEAR_COLOR;
    textContext.fillRect(0, 0, width, height);
    textContext.textAlign = 'left';
    textContext.textBaseline = 'top';
    textContext.font = `600 ${fontSize.toFixed(2)}px ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace`;
    let remaining = reveal;
    let y = startY;
    caretX = Math.floor((width - MAX_CHARS * charWidth) / 2);
    caretY = startY;

    for (const line of LOG) {
      const length = lineLength(line);
      const visible = reveal === Infinity ? Infinity : Math.min(remaining, length);
      let x = Math.floor((width - MAX_CHARS * charWidth) / 2);
      let drawn = 0;
      for (const item of line) {
        let text = item.t;
        if (visible !== Infinity) {
          const left = visible - drawn;
          if (left <= 0) break;
          if (left < text.length) text = text.slice(0, left);
        }
        if (text.length) {
          setStyle(item.c, true);
          textContext.fillText(text, x, y);
          setStyle(item.c, false);
          textContext.fillText(text, x, y);
          x += charWidth * text.length;
        }
        drawn += item.t.length;
        if (visible !== Infinity && drawn >= visible) break;
      }
      caretX = x;
      caretY = y;
      if (visible !== Infinity) remaining -= visible;
      y += lineHeight;
      if (visible !== Infinity && remaining <= 0) break;
    }
  };

  const drawCursor = () => {
    textContext.shadowColor = COLORS.p.glow;
    textContext.shadowBlur = fontSize * 0.42;
    textContext.fillStyle = '#ffd8db';
    textContext.fillRect(caretX, caretY + fontSize * 0.06, Math.max(charWidth * 0.92, 4), fontSize * 0.96);
    textContext.shadowBlur = 0;
    textContext.fillRect(caretX, caretY + fontSize * 0.06, Math.max(charWidth * 0.92, 4), fontSize * 0.96);
  };

  const uploadTexture = () => {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textCanvas);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    textDirty = false;
  };

  const resize = () => {
    const bounds = host.getBoundingClientRect();
    cssWidth = Math.max(1, bounds.width);
    cssHeight = Math.max(1, bounds.height);
    const density = Math.min(typeof window === 'undefined' ? 1 : window.devicePixelRatio || 1, 2);
    let nextWidth = Math.max(MIN_BUFFER_WIDTH, Math.round(Math.min(cssWidth * density, MAX_BUFFER_WIDTH)));
    let nextHeight = Math.max(1, Math.round((nextWidth * cssHeight) / cssWidth));
    if (nextWidth * nextHeight > MAX_BUFFER_PIXELS) {
      const fit = Math.sqrt(MAX_BUFFER_PIXELS / (nextWidth * nextHeight));
      nextWidth = Math.round(nextWidth * fit);
      nextHeight = Math.round(nextHeight * fit);
    }

    const screenWidth = nextWidth;
    const screenHeight = Math.max(1, Math.round((screenWidth * nextHeight) / nextWidth));

    if (canvas.width !== nextWidth || canvas.height !== nextHeight) {
      canvas.width = nextWidth;
      canvas.height = nextHeight;
    }
    if (textCanvas.width !== screenWidth || textCanvas.height !== screenHeight) {
      textCanvas.width = screenWidth;
      textCanvas.height = screenHeight;
      width = screenWidth;
      height = screenHeight;
      layout();
      lastReveal = -1;
      lastBlink = -1;
      lastTextAt = 0;
      textDirty = true;
    }

    gl.useProgram(program);
    gl.viewport(0, 0, nextWidth, nextHeight);
    gl.uniform2f(uResolution, nextWidth, nextHeight);
    gl.uniform1f(uScan, Math.max(120, Math.min(cssHeight * style.scanDensity, 900)));
    gl.uniform1f(uTriad, Math.max(2, (style.triadCss * nextWidth) / cssWidth));
  };

  const maybeRedrawText = (now) => {
    const reveal = done ? Infinity : Math.floor(typed);
    const blink = Math.floor((now - startedAt) / 420) % 2 === 0 ? 1 : 0;
    const due = !done ? now - lastTextAt > 42 : blink !== lastBlink;
    if (reveal === lastReveal && blink === lastBlink && !due) return;
    if (!done && now - lastTextAt <= 42 && reveal === lastReveal && blink === lastBlink) return;
    drawScreen(reveal);
    if (blink) drawCursor();
    lastTextAt = now;
    lastReveal = reveal;
    lastBlink = blink;
    textDirty = true;
  };

  applyStyle();

  return {
    resize,
    render(now) {
      const options = getOptions();
      const seconds = (now - startedAt) * 0.001 * options.speed;
      if (!done) {
        typed += 4.4 * options.typeSpeed;
        if (typed >= TOTAL) {
          typed = TOTAL;
          done = true;
        }
      }
      maybeRedrawText(now);
      if (textDirty) uploadTexture();

      gl.useProgram(program);
      gl.uniform1f(uTime, seconds);
      gl.uniform1f(uMotion, options.motion);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    },
    dispose() {
      gl.deleteBuffer(buffer);
      gl.deleteTexture(texture);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    },
  };
}

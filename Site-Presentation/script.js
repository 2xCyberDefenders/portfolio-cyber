'use strict';
/* Moteur du site. Les textes sont dans content.js : ne modifie ce fichier que pour changer le comportement. */

const $ = s => document.querySelector(s);
const out = $('#out'), inp = $('#in'), nav = $('#nav'), ps = $('#ps');
const PROMPT = 'karinequeiros@night-city:~$';
const NAV_CMDS = ['about', 'skills', 'exp', 'formation', 'letter', 'contact', 'help'];
const ALIAS = { edu: 'formation', education: 'formation', whoami: 'about' };

let lang = (navigator.language || 'fr').toLowerCase().startsWith('fr') ? 'fr' : 'en';
let fx = !matchMedia('(prefers-reduced-motion: reduce)').matches;
let lastCmd = null;
const T = () => CONTENT[lang];

/* ---------- Affichage ---------- */
function line(cls, txt, i) {
  const d = document.createElement('div');
  if (cls) d.className = cls;
  d.textContent = txt;
  if (fx && i) d.style.setProperty('--d', Math.min(i * 0.04, 1.2) + 's');
  out.appendChild(d);
}
function print(lines) {
  lines.forEach((t, i) => {
    if (t.startsWith('# ')) line('h', '$ ' + t.slice(2), i);
    else if (t.startsWith('- ')) line('b', t.slice(2), i);
    else if (t.startsWith('! ')) line('k', t.slice(2), i);
    else line('', t, i);
  });
}
function printLetter(l) {
  line('h', '$ ' + l.title);
  line('k', l.subject, 1);
  line('', '', 2);
  line('l', l.greeting, 3);
  l.paragraphs.forEach((p, i) => { line('', '', 4 + i * 2); line('l', p, 5 + i * 2); });
  line('', '', 40);
  line('l', l.closing, 41);
  line('l', l.signature, 42);
}
function addLink(label, url) {
  const d = document.createElement('div'), a = document.createElement('a');
  a.textContent = label; a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer';
  d.append(a); out.appendChild(d);
}
function printContact() {
  line('h', '$ contact');
  const mail = CONFIG.email.join('@');          // adresse assemblée ici : jamais en clair dans le HTML
  const d = document.createElement('div'), a = document.createElement('a');
  a.href = 'mailto:' + mail; a.textContent = mail; d.append(a); out.appendChild(d);
  for (const [name, url] of Object.entries(CONFIG.links)) if (/^https:\/\//.test(url)) addLink(name, url);
  if (CONFIG.cvPdf) addLink(T().ui.cv, CONFIG.cvPdf);
}

/* ---------- Commandes ---------- */
function run(raw) {
  let c = raw.trim().toLowerCase().slice(0, 30);
  if (!c) return;
  c = ALIAS[c] || c;
  line('cmd', PROMPT + ' ' + c);
  if (c === 'clear') { out.replaceChildren(); return; }
  if (c === 'lang') { lang = lang === 'fr' ? 'en' : 'fr'; setLang(); out.replaceChildren(); lastCmd ? run(lastCmd) : line('cmd', T().ui.hint); return; }
  if (c === 'contact') printContact();
  else if (c === 'letter') printLetter(T().letter);
  else if (Array.isArray(T()[c])) print(T()[c]);
  else { line('er', T().ui.unknown + c); return; }
  if (c !== 'help') lastCmd = c;
  window.scrollTo(0, document.body.scrollHeight);
}
function setLang() {
  document.documentElement.lang = lang;
  ps.textContent = PROMPT;
  nav.replaceChildren(...NAV_CMDS.map(c => {
    const b = document.createElement('button');
    b.type = 'button'; b.textContent = c;
    b.addEventListener('click', () => run(c));
    return b;
  }));
}

/* ---------- Contrôles ---------- */
$('#lang').addEventListener('click', () => run('lang'));
$('#fx').addEventListener('click', () => { fx = !fx; applyFx(); });
inp.addEventListener('keydown', e => {
  if (e.key === 'Enter') { run(inp.value); inp.value = ''; }
  if (e.key === 'Tab') {
    e.preventDefault();
    const m = [...NAV_CMDS, 'lang', 'clear'].find(c => inp.value && c.startsWith(inp.value.toLowerCase()));
    if (m) inp.value = m;
  }
});

/* ---------- Pluie de code ---------- */
const cv = $('#rain'), cx = cv.getContext('2d');
const GLYPHS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789<>/{}[]#$%';
const COLORS = ['#fcee0a', '#00f0ff', '#ff2a6d', '#39ff14'];
let drops = [], timer = null;
function sizeRain() {
  cv.width = innerWidth; cv.height = innerHeight;
  drops = Array.from({ length: Math.ceil(innerWidth / 16) }, () => Math.random() * innerHeight / 16 | 0);
}
function stepRain() {
  cx.fillStyle = 'rgba(5,6,10,.12)'; cx.fillRect(0, 0, cv.width, cv.height);
  cx.font = '14px monospace';
  drops.forEach((y, i) => {
    cx.fillStyle = COLORS[i % COLORS.length];
    cx.fillText(GLYPHS[Math.random() * GLYPHS.length | 0], i * 16, y * 16);
    drops[i] = y * 16 > cv.height && Math.random() > .975 ? 0 : y + 1;
  });
}
function rain(on) {
  clearInterval(timer);
  if (on) { sizeRain(); timer = setInterval(stepRain, 60); } else cx.clearRect(0, 0, cv.width, cv.height);
}
function applyFx() { document.documentElement.classList.toggle('nofx', !fx); rain(fx); }
addEventListener('resize', () => fx && sizeRain());
document.addEventListener('visibilitychange', () => rain(fx && !document.hidden));

/* ---------- Démarrage ---------- */
const BOOT = ['[ OK ] init neural-link v2.077', '[ OK ] tunnel TLS 1.3 established', '[ .. ] handshake karinequeiros', '[ OK ] ICE bypassed (authorized lab)', 'ACCESS GRANTED'];
let booted = false, bootTimer = null, bootStep = 0;
function finishBoot() {
  if (booted) return;
  booted = true; clearInterval(bootTimer);
  out.replaceChildren(); line('cmd', T().ui.hint); inp.focus({ preventScroll: true });
}
setLang(); applyFx();
if (!fx) finishBoot();
else {
  bootTimer = setInterval(() => {
    if (bootStep < BOOT.length) line(bootStep === BOOT.length - 1 ? 'k' : 'ok', BOOT[bootStep++]);
    else finishBoot();
  }, 330);
  ['keydown', 'pointerdown'].forEach(ev => addEventListener(ev, finishBoot, { once: true }));
}
/* ============================================================
   PALEO MUSEUM · INSTITUTIONAL ACCESS GUARD
   Restricción de acceso ético-institucional
   Validación local via localStorage, sin servidor.
   ============================================================ */
(function () {
  'use strict';

  var TOKEN_KEY  = 'paleo_access_token';
  var VALID_CODE = 'UAM_PALEOLAB_2026';

  var authorized = localStorage.getItem(TOKEN_KEY) === VALID_CODE;

  /* ── CSS embebido (anti-flash + overlay) ───────────────────── */
  var GUARD_CSS = [
    /* Anti-flash: oculta el body mientras la clase esté activa */
    'html.paleo-locked body { visibility: hidden !important; }',

    /* El overlay y todo su contenido siempre son visibles */
    'html.paleo-locked .paleo-overlay,',
    'html.paleo-locked .paleo-overlay * { visibility: visible !important; }',

    /* ── Overlay contenedor ── */
    '.paleo-overlay {',
    '  position: fixed; inset: 0; z-index: 999999;',
    '  display: flex; align-items: center; justify-content: center;',
    '  background: #0a1628;',
    '  background-image:',
    '    linear-gradient(rgba(0,119,200,.04) 1px, transparent 1px),',
    '    linear-gradient(90deg, rgba(0,119,200,.04) 1px, transparent 1px),',
    '    radial-gradient(ellipse at 20% 30%, rgba(74,119,41,.12) 0%, transparent 55%),',
    '    radial-gradient(ellipse at 80% 70%, rgba(28,93,145,.18) 0%, transparent 55%);',
    '  background-size: 48px 48px, 48px 48px, 100% 100%, 100% 100%;',
    '  font-family: "Lexend", "Montserrat", sans-serif;',
    '  padding: 1.25rem;',
    '}',

    /* ── Tarjeta central ── */
    '.paleo-card {',
    '  background: #0f1c2e;',
    '  border: 3px solid #0077c8;',
    '  border-radius: 4px;',
    '  box-shadow: 8px 8px 0 #1c5d91, 16px 16px 0 rgba(28,93,145,.25);',
    '  padding: clamp(2rem, 5vw, 3rem);',
    '  max-width: 500px;',
    '  width: 100%;',
    '  position: relative;',
    '  overflow: hidden;',
    '}',

    /* Franja de acento superior */
    '.paleo-card::before {',
    '  content: "";',
    '  position: absolute; top: 0; left: 0; right: 0; height: 4px;',
    '  background: linear-gradient(90deg, #4a7729 0%, #0077c8 60%, #1c5d91 100%);',
    '}',

    /* Textura decorativa de fondo */
    '.paleo-card::after {',
    '  content: "";',
    '  position: absolute; top: -60px; right: -60px;',
    '  width: 180px; height: 180px;',
    '  border: 40px solid rgba(0,119,200,.06);',
    '  border-radius: 50%;',
    '  pointer-events: none;',
    '}',

    /* ── Encabezado ── */
    '.paleo-header { margin-bottom: 1.5rem; }',

    '.paleo-eyebrow {',
    '  display: flex; align-items: center; gap: .5rem;',
    '  font-family: "Montserrat", sans-serif;',
    '  font-size: .6rem; font-weight: 700; letter-spacing: .2em;',
    '  text-transform: uppercase; color: #4a7729;',
    '  margin-bottom: .75rem;',
    '}',
    '.paleo-eyebrow::before {',
    '  content: ""; display: block;',
    '  width: 22px; height: 2.5px; background: #4a7729;',
    '  flex-shrink: 0;',
    '}',

    '.paleo-title {',
    '  font-family: "Montserrat", sans-serif;',
    '  font-size: clamp(1.05rem, 3.5vw, 1.45rem);',
    '  font-weight: 900; letter-spacing: -.03em; line-height: 1.1;',
    '  color: #f0e6cc; margin-bottom: .4rem;',
    '}',

    '.paleo-subtitle {',
    '  font-family: "Lexend", sans-serif;',
    '  font-size: .68rem; font-weight: 600;',
    '  letter-spacing: .16em; text-transform: uppercase;',
    '  color: #0077c8;',
    '}',

    /* ── Divisor ── */
    '.paleo-divider {',
    '  height: 2px; margin: 1.5rem 0;',
    '  background: linear-gradient(90deg, #4a7729 0%, #0077c8 70%, transparent 100%);',
    '  opacity: .35;',
    '}',

    /* ── Texto descriptivo ── */
    '.paleo-text {',
    '  font-size: .8rem; line-height: 1.75;',
    '  color: rgba(240,230,204,.58); font-weight: 300;',
    '  margin-bottom: 1.75rem;',
    '}',

    /* ── Campo de entrada ── */
    '.paleo-label {',
    '  display: block;',
    '  font-family: "Montserrat", sans-serif;',
    '  font-size: .58rem; font-weight: 700; letter-spacing: .18em;',
    '  text-transform: uppercase; color: rgba(240,230,204,.45);',
    '  margin-bottom: .5rem;',
    '}',

    '.paleo-input {',
    '  width: 100%;',
    '  background: rgba(255,255,255,.04);',
    '  border: 2px solid rgba(0,119,200,.35);',
    '  border-radius: 2px;',
    '  color: #f0e6cc;',
    '  font-family: "Lexend", sans-serif;',
    '  font-size: .95rem; font-weight: 500; letter-spacing: .05em;',
    '  padding: .75rem 1rem;',
    '  transition: border-color .2s, box-shadow .2s;',
    '  outline: none;',
    '  margin-bottom: .5rem;',
    '}',
    '.paleo-input:focus {',
    '  border-color: #0077c8;',
    '  box-shadow: 0 0 0 3px rgba(0,119,200,.18);',
    '  background: rgba(0,119,200,.06);',
    '}',
    '.paleo-input::placeholder { color: rgba(240,230,204,.22); letter-spacing: .04em; }',

    /* ── Mensaje de error ── */
    '.paleo-error {',
    '  min-height: 1.3rem; font-size: .74rem;',
    '  color: #ff6b6b; margin-bottom: .9rem; font-weight: 400;',
    '}',

    /* ── Botón principal ── */
    '.paleo-btn {',
    '  width: 100%;',
    '  background: #0077c8; border: 3px solid #0077c8; border-radius: 2px;',
    '  color: #fff;',
    '  font-family: "Montserrat", sans-serif;',
    '  font-size: .82rem; font-weight: 800; letter-spacing: .1em;',
    '  text-transform: uppercase;',
    '  padding: .85rem 2rem;',
    '  cursor: pointer;',
    '  transition: background .15s, border-color .15s, transform .1s, box-shadow .15s;',
    '  box-shadow: 4px 4px 0 #1c5d91;',
    '  margin-bottom: 1.5rem;',
    '}',
    '.paleo-btn:hover {',
    '  background: #1c5d91; border-color: #1c5d91;',
    '  transform: translate(-2px,-2px); box-shadow: 6px 6px 0 #0d3a61;',
    '}',
    '.paleo-btn:active {',
    '  transform: translate(1px,1px); box-shadow: 2px 2px 0 #1c5d91;',
    '}',

    /* ── Texto de ayuda ── */
    '.paleo-hint {',
    '  font-size: .7rem; line-height: 1.65;',
    '  color: rgba(240,230,204,.28); font-weight: 300;',
    '  text-align: center;',
    '}',

    /* ── Animaciones ── */
    '@keyframes paleoGlow {',
    '  from { box-shadow: 0 0 4px #4a7729; }',
    '  to   { box-shadow: 0 0 14px #4a7729, 0 0 22px rgba(74,119,41,.4); }',
    '}',
    '.paleo-eyebrow::before { animation: paleoGlow 2.2s ease-in-out infinite alternate; }',

    '@keyframes paleoShake {',
    '  0%,100% { transform: translateX(0); }',
    '  20%     { transform: translateX(-7px); }',
    '  40%     { transform: translateX(7px); }',
    '  60%     { transform: translateX(-4px); }',
    '  80%     { transform: translateX(4px); }',
    '}',
    '.paleo-input.paleo-shake { animation: paleoShake .4s ease-out; }',

    /* ── Móvil ── */
    '@media (max-width:540px) {',
    '  .paleo-card { padding: 1.5rem; }',
    '  .paleo-title { font-size: 1.05rem; }',
    '  .paleo-text { font-size: .77rem; }',
    '}',

    /* ── Logout badge (páginas sin footer) ── */
    '.paleo-logout-badge {',
    '  position: fixed; bottom: .75rem; right: .75rem; z-index: 9999;',
    '  background: rgba(0,0,0,.65); color: rgba(255,255,255,.5);',
    '  font-family: "Lexend", sans-serif; font-size: .62rem;',
    '  padding: .35em .75em; border-radius: 3px;',
    '  cursor: pointer; backdrop-filter: blur(6px);',
    '  border: 1px solid rgba(255,255,255,.1);',
    '  transition: color .15s, background .15s;',
    '  text-decoration: none;',
    '}',
    '.paleo-logout-badge:hover { color: rgba(255,255,255,.8); background: rgba(0,0,0,.85); }'
  ].join('\n');

  /* ── CASO 1: YA AUTORIZADO ─────────────────────────────────── */
  if (authorized) {
    document.addEventListener('DOMContentLoaded', injectLogout);
    return;
  }

  /* ── CASO 2: NO AUTORIZADO — bloquear página ───────────────── */
  document.documentElement.classList.add('paleo-locked');

  var styleEl = document.createElement('style');
  styleEl.id  = 'paleo-guard-css';
  styleEl.textContent = GUARD_CSS;
  document.head.appendChild(styleEl);

  /* ── Construir overlay ─────────────────────────────────────── */
  function buildOverlay() {
    var overlay = document.createElement('div');
    overlay.className = 'paleo-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Acceso institucional requerido');

    overlay.innerHTML =
      '<div class="paleo-card">' +
        '<div class="paleo-header">' +
          '<p class="paleo-eyebrow">Acceso institucional</p>' +
          '<h1 class="paleo-title">Museo Virtual de Paleopatología</h1>' +
          '<p class="paleo-subtitle">Universidad Autónoma de Madrid</p>' +
        '</div>' +
        '<div class="paleo-divider"></div>' +
        '<p class="paleo-text">' +
          'Esta plataforma contiene representaciones digitales de restos humanos ' +
          'procedentes de contextos arqueológicos y colecciones osteológicas de investigación.' +
          '<br><br>' +
          'El acceso se encuentra restringido con fines docentes, científicos y de divulgación ' +
          'especializada, de acuerdo con las recomendaciones éticas para la gestión y difusión ' +
          'de restos humanos.' +
        '</p>' +
        '<label class="paleo-label" for="paleo-input">Código institucional</label>' +
        '<input class="paleo-input" id="paleo-input" type="password"' +
        '       autocomplete="off" spellcheck="false"' +
        '       placeholder="Introduce el código de acceso"' +
        '       aria-required="true" />' +
        '<p class="paleo-error" id="paleo-error" role="alert" aria-live="assertive"></p>' +
        '<button class="paleo-btn" id="paleo-btn" type="button">Acceder</button>' +
        '<p class="paleo-hint">' +
          'Si dispone de autorización para consultar la colección, introduzca el código ' +
          'facilitado por el equipo responsable.' +
        '</p>' +
      '</div>';

    document.body.appendChild(overlay);

    var input = document.getElementById('paleo-input');
    var btn   = document.getElementById('paleo-btn');
    var errEl = document.getElementById('paleo-error');

    /* Foco automático */
    setTimeout(function () { if (input) input.focus(); }, 80);

    function validate() {
      var val = (input ? input.value : '').trim();
      if (val === VALID_CODE) {
        /* Acceso concedido */
        localStorage.setItem(TOKEN_KEY, VALID_CODE);
        document.documentElement.classList.remove('paleo-locked');
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        injectLogout();
      } else {
        /* Código incorrecto */
        errEl.textContent = 'Código incorrecto. Por favor, inténtalo de nuevo.';
        if (input) {
          input.value = '';
          input.focus();
          input.classList.remove('paleo-shake');
          /* Forzar reflow para reiniciar la animación */
          void input.offsetWidth;
          input.classList.add('paleo-shake');
        }
      }
    }

    btn.addEventListener('click', validate);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') validate();
    });
    /* Limpiar error al escribir */
    input.addEventListener('input', function () { errEl.textContent = ''; });
  }

  /* Esperar a que exista <body> */
  if (document.body) {
    buildOverlay();
  } else {
    document.addEventListener('DOMContentLoaded', buildOverlay);
  }

  /* ── INYECCIÓN DE ENLACE DE CIERRE DE SESIÓN ───────────────── */
  function injectLogout() {
    var LOGOUT_TEXT = 'Acceso institucional activo · Cerrar sesión';

    function onLogout(e) {
      e.preventDefault();
      localStorage.removeItem(TOKEN_KEY);
      location.reload();
    }

    /* Páginas con footer estándar (.footer__links) */
    var added = false;
    document.querySelectorAll('.footer__links').forEach(function (nav) {
      if (nav.querySelector('.paleo-logout-link')) return;
      var a = document.createElement('a');
      a.className = 'footer__link paleo-logout-link';
      a.href = '#';
      a.textContent = LOGOUT_TEXT;
      a.setAttribute('aria-label', 'Cerrar sesión de acceso institucional');
      a.style.cssText = 'opacity:.4;font-size:.72em;cursor:pointer';
      a.addEventListener('click', onLogout);
      nav.appendChild(a);
      added = true;
    });

    /* ficha-maestra: footer con clase .fm-footer-nav */
    document.querySelectorAll('.fm-footer-nav').forEach(function (nav) {
      if (nav.querySelector('.paleo-logout-link')) return;
      var a = document.createElement('a');
      a.className = 'paleo-logout-link';
      a.href = '#';
      a.textContent = LOGOUT_TEXT;
      a.setAttribute('aria-label', 'Cerrar sesión de acceso institucional');
      a.style.cssText = [
        'font-family:"Lexend",sans-serif',
        'font-size:.62rem',
        'font-weight:400',
        'color:#6b5a43',
        'opacity:.6',
        'cursor:pointer',
        'align-self:center',
        'text-decoration:none'
      ].join(';');
      a.addEventListener('click', onLogout);
      nav.appendChild(a);
      added = true;
    });

    /* Páginas sin footer (ej. exploracion.html) — badge fijo */
    if (!added) {
      if (document.querySelector('.paleo-logout-badge')) return;
      var badge = document.createElement('a');
      badge.className = 'paleo-logout-badge';
      badge.href = '#';
      badge.textContent = LOGOUT_TEXT;
      badge.setAttribute('aria-label', 'Cerrar sesión de acceso institucional');
      badge.addEventListener('click', onLogout);
      document.body.appendChild(badge);
    }
  }

})();

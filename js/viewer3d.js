/* ============================================================
   PaleoMuseo · viewer3d.js
   Sistema centralizado de visualización 3D — v2
   Problemas resueltos:
     P1 · Pantalla completa con overlay position:fixed (100vw × 100dvh)
     P4 · Soporte de formato dual modelo3d {geometria, textura}
     P5 · Inyección de paso extra en el tutorial si hay dos modelos
   Compatibilidad: model-viewer · GSAP · Sketchfab · data.js
   ============================================================ */

(function (global) {
  'use strict';

  /* ════════════════════════════════════════════════════════════
     1. RESOLVER FORMATO modelo3d
     Acepta cualquier variante y devuelve { geometria, textura }
  ════════════════════════════════════════════════════════════ */
  function resolveModelo(modelo3d) {
    if (!modelo3d) return { geometria: null, textura: null };
    if (typeof modelo3d === 'string') return { geometria: modelo3d, textura: null };
    return {
      geometria: modelo3d.geometria || null,
      textura:   modelo3d.textura   || null
    };
  }

  /** URL activa: geometría preferida sobre textura */
  function getActiveUrl(modelo3d) {
    var m = resolveModelo(modelo3d);
    return m.geometria || m.textura || null;
  }

  /* ════════════════════════════════════════════════════════════
     2. OVERLAY DE PANTALLA COMPLETA
     position:fixed, inset:0, 100vw × 100dvh
     Un único nodo en el DOM, compartido por ambas fichas.
  ════════════════════════════════════════════════════════════ */
  var _ov      = null;   /* overlay element */
  var _ovMV    = null;   /* model-viewer inside overlay */
  var _ovClose = null;   /* close button */
  var _ovSel   = null;   /* selector bar inside overlay */
  var _ovLabel = null;   /* label span */

  function _buildOverlay() {
    if (_ov) return;

    _ov = document.createElement('div');
    _ov.id = 'mv-fs-overlay';
    _ov.setAttribute('role', 'dialog');
    _ov.setAttribute('aria-modal', 'true');
    _ov.setAttribute('aria-label', 'Visualizador 3D — pantalla completa');

    /* ── Topbar ── */
    var tb = document.createElement('div');
    tb.className = 'mv-fs-topbar';

    _ovLabel = document.createElement('span');
    _ovLabel.className = 'mv-fs-label';
    _ovLabel.textContent = 'Modelo 3D';
    tb.appendChild(_ovLabel);

    _ovSel = document.createElement('div');
    _ovSel.className = 'mv-model-selector';
    _ovSel.style.display = 'none';
    _ovSel.setAttribute('aria-label', 'Selector de modelo');
    tb.appendChild(_ovSel);

    _ovClose = document.createElement('button');
    _ovClose.className = 'mv-fs-close';
    _ovClose.setAttribute('aria-label', 'Cerrar pantalla completa (Escape)');
    _ovClose.innerHTML =
      '<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
      '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>' +
      '<span>Cerrar</span>';
    tb.appendChild(_ovClose);

    _ov.appendChild(tb);

    /* ── Model-viewer del overlay ── */
    _ovMV = document.createElement('model-viewer');
    _ovMV.id = 'mv-fs-viewer';
    _ovMV.setAttribute('camera-controls', '');
    _ovMV.setAttribute('shadow-intensity', '1.5');
    _ovMV.setAttribute('exposure', '0.85');
    _ovMV.setAttribute('environment-image', 'neutral');
    _ovMV.setAttribute('auto-rotate', '');
    _ovMV.style.cssText = 'flex:1;width:100%;min-height:0;--progress-bar-color:transparent;background:transparent';
    _ov.appendChild(_ovMV);

    document.body.appendChild(_ov);

    /* ── Eventos ── */
    _ovClose.addEventListener('click', closeFullscreen);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && _ov && _ov.classList.contains('is-active')) {
        closeFullscreen();
      }
    });
  }

  /**
   * Abre el overlay de pantalla completa.
   * @param {Element|null} inlineViewer  — el <model-viewer> inline del que copiar src
   * @param {Object|null}  modelos       — { geometria, textura } ya resueltos
   * @param {string}       label         — nombre para el topbar
   */
  function openFullscreen(inlineViewer, modelos, label) {
    if (!document.body) {
      document.addEventListener('DOMContentLoaded', function () {
        openFullscreen(inlineViewer, modelos, label);
      });
      return;
    }

    _buildOverlay();

    /* URL activa */
    var url = inlineViewer ? (inlineViewer.getAttribute('src') || null) : null;
    if (!url && modelos) url = modelos.geometria || modelos.textura;
    if (!url) return;

    /* Label */
    if (_ovLabel) _ovLabel.textContent = label || 'Modelo 3D';

    /* Selector dual si procede */
    if (_ovSel && modelos && modelos.geometria && modelos.textura) {
      _buildOvSelector(modelos, url);
    } else if (_ovSel) {
      _ovSel.innerHTML = '';
      _ovSel.style.display = 'none';
    }

    /* Copiar src y mantener auto-rotate */
    _ovMV.setAttribute('src', url);
    _ovMV.setAttribute('auto-rotate', '');

    /* Mostrar */
    _ov.classList.add('is-active');
    document.documentElement.style.overflow = 'hidden';

    requestAnimationFrame(function () { if (_ovClose) _ovClose.focus(); });
  }

  function closeFullscreen() {
    if (!_ov) return;
    _ov.classList.remove('is-active');
    document.documentElement.style.overflow = '';
    /* Liberar descarga del modelo */
    if (_ovMV) _ovMV.removeAttribute('src');
  }

  function _buildOvSelector(modelos, activeSrc) {
    _ovSel.innerHTML = '';
    _ovSel.style.display = 'flex';

    var activeType = (activeSrc === modelos.textura && activeSrc !== modelos.geometria)
      ? 'textura' : 'geometria';

    var types = [];
    if (modelos.geometria) types.push({ key: 'geometria', url: modelos.geometria, label: 'Geometría' });
    if (modelos.textura)   types.push({ key: 'textura',   url: modelos.textura,   label: 'Textura' });

    types.forEach(function (t) {
      var btn = document.createElement('button');
      btn.className = 'mv-model-btn' + (t.key === activeType ? ' is-active' : '');
      btn.setAttribute('aria-pressed', t.key === activeType ? 'true' : 'false');
      btn.textContent = t.label;
      btn.addEventListener('click', function () {
        if (_ovMV) _ovMV.setAttribute('src', t.url);
        _ovSel.querySelectorAll('.mv-model-btn').forEach(function (b) {
          var active = b === btn;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-pressed', String(active));
        });
      });
      _ovSel.appendChild(btn);
    });
  }

  /* ════════════════════════════════════════════════════════════
     3. SELECTOR INLINE (dentro del fe-viewer-wrap / fm-sticky-viewer)
     Retorna true si se creó (ambos modelos disponibles).
  ════════════════════════════════════════════════════════════ */
  function initModelSelector(viewerEl, modelos, insertBeforeEl) {
    if (!modelos || !modelos.geometria || !modelos.textura) return false;

    var parent  = insertBeforeEl ? insertBeforeEl.parentNode : viewerEl.parentNode;
    var refNode = insertBeforeEl || viewerEl;

    /* ── Barra de botones ── */
    var selectorEl = document.createElement('div');
    selectorEl.className = 'mv-model-selector mv-model-selector--inline';
    selectorEl.setAttribute('role', 'group');
    selectorEl.setAttribute('aria-label', 'Selector de modelo 3D');

    var activeType = 'geometria';

    function makeBtn(type, url) {
      var btn = document.createElement('button');
      btn.className = 'mv-model-btn' + (type === activeType ? ' is-active' : '');
      btn.setAttribute('aria-pressed', type === activeType ? 'true' : 'false');
      btn.textContent = type === 'geometria' ? 'Geometría' : 'Textura';
      btn.addEventListener('click', function () {
        activeType = type;
        viewerEl.setAttribute('src', url);
        /* Si el overlay FS está abierto, sincronizar */
        if (_ov && _ov.classList.contains('is-active') && _ovMV) {
          _ovMV.setAttribute('src', url);
        }
        selectorEl.querySelectorAll('.mv-model-btn').forEach(function (b) {
          var active = b === btn;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-pressed', String(active));
        });
      });
      return btn;
    }

    selectorEl.appendChild(makeBtn('geometria', modelos.geometria));
    selectorEl.appendChild(makeBtn('textura',   modelos.textura));

    /* ── Descripción educativa ── */
    var infoEl = document.createElement('p');
    infoEl.className = 'mv-model-info';
    infoEl.innerHTML =
      '<strong>Geometría</strong>: escaneo luz azul · precisión morfológica &nbsp;·&nbsp; ' +
      '<strong>Textura</strong>: escaneo infrarrojo · color y superficie';

    parent.insertBefore(selectorEl, refNode);
    parent.insertBefore(infoEl,     refNode);

    return true;
  }

  /* ════════════════════════════════════════════════════════════
     4. INYECCIÓN DE PASO DUAL EN EL TUTORIAL
     Solo si la pieza tiene dos modelos.
  ════════════════════════════════════════════════════════════ */
  function injectDualModelTutorialStep() {
    var stepsEl = document.querySelector('.vt-steps');
    if (!stepsEl) return;
    if (stepsEl.querySelector('.vt-step--dual')) return; /* idempotente */

    var step = document.createElement('div');
    step.className = 'vt-step vt-step--dual';
    step.innerHTML =
      '<div class="vt-icon" aria-hidden="true">' +
        '<svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">' +
          '<rect x="3" y="19" width="20" height="14" rx="2" fill="#1a1a1a" stroke="#00e5ff" stroke-width="1.5"/>' +
          '<rect x="29" y="19" width="20" height="14" rx="2" fill="#1a1a1a" stroke="#b08d55" stroke-width="1.5"/>' +
          '<line x1="23" y1="26" x2="29" y2="26" stroke="#3d3d3d" stroke-width="1.5" stroke-dasharray="2 2"/>' +
          '<text x="5"  y="30" font-size="5.5" fill="#00e5ff"  font-family="monospace" font-weight="bold">GEO</text>' +
          '<text x="31" y="30" font-size="5.5" fill="#b08d55"  font-family="monospace" font-weight="bold">TEX</text>' +
          '<polyline points="19,23 23,26 19,29" stroke="#3d3d3d" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' +
          '<polyline points="33,23 29,26 33,29" stroke="#3d3d3d" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' +
        '</svg>' +
      '</div>' +
      '<div class="vt-step__label">Modelos</div>' +
      '<div class="vt-step__title">Dos versiones</div>' +
      '<div class="vt-step__desc">Esta pieza tiene dos modelos. ' +
        'Alterna con los botones del visor entre ' +
        '<span style="color:var(--cyan);font-weight:600">Geometría</span> ' +
        '(escaneo de luz azul, máxima precisión morfológica) y ' +
        '<span style="color:var(--bone-400);font-weight:600">Textura</span> ' +
        '(infrarrojo, color y superficie real).' +
      '</div>' +
      '<span class="vt-step__badge vt-step__badge--mouse">📐 Geometría</span>' +
      '<span class="vt-step__badge vt-step__badge--touch">🎨 Textura</span>';

    stepsEl.appendChild(step);
  }

  /* ════════════════════════════════════════════════════════════
     API pública
  ════════════════════════════════════════════════════════════ */
  global.PaleoViewer = {
    resolveModelo:              resolveModelo,
    getActiveUrl:               getActiveUrl,
    openFullscreen:             openFullscreen,
    closeFullscreen:            closeFullscreen,
    initModelSelector:          initModelSelector,
    injectDualModelTutorialStep: injectDualModelTutorialStep
  };

})(window);

/* ══════════════════════════════════════════════════
   MODEL-VIEWER · Loader
   Inyecta un overlay de carga (.mv-loader) sobre cada
   <model-viewer> de la página y lo oculta con fade
   cuando el modelo termina de cargar.
══════════════════════════════════════════════════ */
(function () {

  function attachLoader(mv) {
    /* Evitar duplicados */
    if (mv.dataset.mvLoader) return;
    mv.dataset.mvLoader = '1';

    const parent = mv.parentElement;
    if (!parent) return;

    /* El padre necesita ser un bloque de contención */
    if (getComputedStyle(parent).position === 'static') {
      parent.style.position = 'relative';
    }

    /* Crear overlay */
    const loader = document.createElement('div');
    loader.className = 'mv-loader';
    loader.setAttribute('aria-hidden', 'true');
    loader.innerHTML =
      '<div class="mv-loader__spinner">'                              +
        '<div class="mv-loader__ring mv-loader__ring--slow"></div>'  +
        '<div class="mv-loader__ring"></div>'                        +
        '<div class="mv-loader__glyph">🦴</div>'                    +
      '</div>'                                                        +
      '<div class="mv-loader__progress">'                            +
        '<div class="mv-loader__fill"></div>'                        +
      '</div>'                                                        +
      '<span class="mv-loader__text">Cargando modelo 3D</span>';

    parent.appendChild(loader);

    var fill = loader.querySelector('.mv-loader__fill');

    /* Progreso de descarga */
    mv.addEventListener('progress', function (e) {
      if (fill) fill.style.width = (e.detail.totalProgress * 100) + '%';
    });

    /* Ocultar loader con fade al terminar */
    function dismiss() {
      if (fill) fill.style.width = '100%';
      setTimeout(function () {
        loader.classList.add('is-done');
        loader.addEventListener('transitionend', function () {
          if (loader.parentNode) loader.parentNode.removeChild(loader);
        }, { once: true });
      }, 120);
    }

    /* Fallback: ocultar tras 30 s si el modelo falla silenciosamente */
    var fallback = setTimeout(dismiss, 30000);

    mv.addEventListener('load', function () {
      clearTimeout(fallback);
      dismiss();
    });

    mv.addEventListener('error', function () {
      clearTimeout(fallback);
      dismiss();
    });
  }

  function initAll() {
    document.querySelectorAll('model-viewer').forEach(attachLoader);
  }

  /* Ejecutar al cargar el script (captura elementos ya en el DOM)
     y de nuevo en DOMContentLoaded (captura elementos dinámicos) */
  initAll();
  document.addEventListener('DOMContentLoaded', initAll);

})();

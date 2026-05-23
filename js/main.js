/**
 * PaleoMuseo · main.js
 * Nav scroll · Hamburger · Scroll reveal (progressive) · GSAP hero
 */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ============================================================
   PALEMUSEO · loader.js
   ============================================================ */

(function () {

  /* ── 1. Inyectar HTML del loader ── */
  const loaderHTML = `
    <div id="pm-loader" role="progressbar" aria-label="Cargando PaleoMuseo" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
      <div id="pm-loader__grid"  aria-hidden="true"></div>
      <div id="pm-loader__scan"  aria-hidden="true"></div>
      <div id="pm-loader__content">
        <div id="pm-loader__logo">
          <div id="pm-loader__icon" aria-hidden="true">
            <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Hueso estilizado -->
              <circle cx="10" cy="10" r="6" stroke="#00e5ff" stroke-width="2" fill="none"/>
              <circle cx="42" cy="10" r="6" stroke="#00e5ff" stroke-width="2" fill="none"/>
              <circle cx="10" cy="42" r="6" stroke="#00e5ff" stroke-width="2" fill="none"/>
              <circle cx="42" cy="42" r="6" stroke="#00e5ff" stroke-width="2" fill="none"/>
              <rect x="8" y="22" width="4" height="8" rx="1" fill="#00e5ff"/>
              <rect x="40" y="22" width="4" height="8" rx="1" fill="#00e5ff"/>
              <rect x="22" y="8" width="8" height="4" rx="1" fill="#00e5ff"/>
              <rect x="22" y="40" width="8" height="4" rx="1" fill="#00e5ff"/>
              <rect x="12" y="20" width="28" height="12" rx="2" fill="none" stroke="#00e5ff" stroke-width="1.5"/>
              <rect x="20" y="12" width="12" height="28" rx="2" fill="none" stroke="#00e5ff" stroke-width="1.5"/>
            </svg>
          </div>
          <div id="pm-loader__wordmark">
            <p id="pm-loader__name">Paleo<span>Museo</span></p>
            <p id="pm-loader__sub">Paleopatología · LAV · UAM</p>
          </div>
        </div>
        <div id="pm-loader__bar-wrap">
          <div id="pm-loader__label">
            <span id="pm-loader__status">Iniciando</span>
            <span id="pm-loader__pct">0%</span>
          </div>
          <div id="pm-loader__bar-track">
            <div id="pm-loader__bar-fill"></div>
          </div>
        </div>
      </div>
    </div>`;

  document.body.insertAdjacentHTML('afterbegin', loaderHTML);

  /* ── 2. Referencias ── */
  const loader  = document.getElementById('pm-loader');
  const fill    = document.getElementById('pm-loader__bar-fill');
  const pct     = document.getElementById('pm-loader__pct');
  const status  = document.getElementById('pm-loader__status');

  /* ── 3. Mensajes de estado según progreso ── */
  const MESSAGES = [
    { at:  0, text: 'Iniciando'         },
    { at: 25, text: 'Cargando recursos' },
    { at: 55, text: 'Preparando museo'  },
    { at: 80, text: 'Casi listo'        },
    { at: 95, text: 'Listo'             },
  ];

  let current = 0;

  function setProgress(value) {
    current = Math.min(value, 100);
    fill.style.width = current + '%';
    pct.textContent  = Math.round(current) + '%';
    loader.setAttribute('aria-valuenow', Math.round(current));

    /* Actualizar mensaje */
    const msg = [...MESSAGES].reverse().find(m => current >= m.at);
    if (msg) status.textContent = msg.text;
  }

  /* ── 4. Progreso simulado
     Avanza rápido al principio, luego espera al evento real ── */
  const STEPS = [
    { target: 15, delay:  80 },
    { target: 35, delay: 180 },
    { target: 60, delay: 320 },
    { target: 75, delay: 500 },
  ];

  let stepIdx = 0;
  function runStep() {
    if (stepIdx >= STEPS.length) return;
    const step = STEPS[stepIdx++];
    setTimeout(() => {
      setProgress(step.target);
      runStep();
    }, step.delay);
  }
  runStep();

  /* ── 5. Cerrar al terminar la carga real ── */
  function hide() {
    setProgress(100);
    setTimeout(() => {
      loader.classList.add('is-hiding');
      /* Eliminar del DOM tras la transición para no bloquear interacción */
      setTimeout(() => loader.remove(), 600);
    }, 280);
  }

  /* Escuchar model-viewer si existe en la página */
  function watchModelViewers() {
    const viewers = document.querySelectorAll('model-viewer');
    if (viewers.length === 0) return false;

    let loaded = 0;
    viewers.forEach(mv => {
      mv.addEventListener('load', () => {
        loaded++;
        /* Avanzar la barra proporcional al nº de modelos */
        setProgress(75 + (loaded / viewers.length) * 20);
        if (loaded >= viewers.length) hide();
      }, { once: true });

      /* Fallback: si el modelo tarda demasiado, no bloqueamos */
      setTimeout(() => {
        if (loaded < viewers.length) hide();
      }, 6000);
    });
    return true;
  }

  /* DOMContentLoaded → intentar enganchar model-viewer */
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          const hasViewers = watchModelViewers();
          /* Si no hay model-viewer, cerrar al terminar window.load */
          if (!hasViewers) {
      const MIN_TIME = 1200; // milisegundos mínimos que se ve el loader
      const startTime = Date.now();

      window.addEventListener('load', () => {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, MIN_TIME - elapsed);
        setTimeout(hide, remaining);
      }, { once: true });

      setTimeout(hide, 3000);
    }
    });
  } else {
    /* El DOM ya estaba listo */
    const hasViewers = watchModelViewers();
    if (!hasViewers) {
      window.addEventListener('load', hide, { once: true });
      setTimeout(hide, 3000);
    }
  }

})();

/* ============================================================
   NAV — Scroll sticky + hamburger
   ============================================================ */
(function initNav() {
  const header    = $('#site-header');
  const hamburger = $('#nav-hamburger');
  const drawer    = $('#nav-mobile');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  let open = false;
  const toggleDrawer = () => {
    open = !open;
    hamburger?.classList.toggle('open', open);
    drawer?.classList.toggle('open', open);
    hamburger?.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };

  hamburger?.addEventListener('click', toggleDrawer);
  $$('.nav__mobile .nav__link').forEach(l => l.addEventListener('click', () => { if (open) toggleDrawer(); }));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && open) toggleDrawer(); });

  const path = window.location.pathname.split('/').pop() || 'index.html';
  $$('.nav__link').forEach(link => {
    const href = (link.getAttribute('href') || '').split('/').pop().split('?')[0];
    if (href === path || (path === '' && href === 'index.html')) link.classList.add('active');
  });
})();

/* ============================================================
   SCROLL REVEAL — Progressive enhancement
   Marks elements with will-animate FIRST so if JS fails,
   content stays visible (no opacity:0 in CSS default state).
   ============================================================ */
(function initReveal() {
  const els = $$('[data-reveal]');
  if (!els.length || !('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach(el => {
    el.classList.add('will-animate');
    io.observe(el);
  });
})();

/* ============================================================
   GSAP HERO — purely decorative layer on top of CSS reveal
   ============================================================ */
window.addEventListener('load', () => {
  if (typeof gsap === 'undefined') return;

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  gsap.from('.hero__grid-bg', { opacity: 0, duration: 1.2, ease: 'power2.out' });
  gsap.from('.hero__float-tag', {
    opacity: 0, scale: 0.75, stagger: 0.25, delay: 0.8, duration: 0.6,
    ease: 'back.out(2)'
  });

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.from('.module-card', {
      scrollTrigger: {
        trigger: '.modules__grid',
        start: 'top 85%',
        once: true,
      },
      y: 50, opacity: 0, stagger: 0.12, duration: 0.65, ease: 'power2.out',
      immediateRender: false,
    });

    gsap.from('.about__obj', {
      scrollTrigger: { trigger: '.about__objectives', start: 'top 82%' },
      x: -25, opacity: 0, stagger: 0.1, duration: 0.55, ease: 'power2.out'
    });
    gsap.from('.secondary-module', {
      scrollTrigger: { trigger: '.secondary-modules', start: 'top 85%' },
      y: 30, opacity: 0, stagger: 0.15, duration: 0.5, ease: 'power2.out'
    });
  }
});

/* ============================================================
   SMOOTH SCROLL
   ============================================================ */
$$('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const headerH = $('#site-header')?.offsetHeight || 70;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - headerH - 16, behavior: 'smooth' });
  });
});
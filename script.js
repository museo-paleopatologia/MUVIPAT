/**
 * PaleoMuseo · main.js
 * Nav scroll behaviour · Hamburger menu · Scroll reveal · GSAP hero
 */

/* ============================================================
   HELPERS
   ============================================================ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ============================================================
   NAV — Scroll sticky + hamburger
   ============================================================ */
(function initNav() {
  const header    = $('#site-header');
  const hamburger = $('#nav-hamburger');
  const drawer    = $('#nav-mobile');
  if (!header) return;

  // Sticky scroll
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // Hamburger toggle
  let open = false;
  const toggleDrawer = () => {
    open = !open;
    hamburger?.classList.toggle('open', open);
    drawer?.classList.toggle('open', open);
    hamburger?.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };

  hamburger?.addEventListener('click', toggleDrawer);

  // Close on mobile link click
  $$('.nav__mobile .nav__link').forEach(link => {
    link.addEventListener('click', () => {
      if (open) toggleDrawer();
    });
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && open) toggleDrawer();
  });

  // Mark active link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  $$('.nav__link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ============================================================
   SCROLL REVEAL — IntersectionObserver
   ============================================================ */
(function initReveal() {
  const els = $$('[data-reveal]');
  if (!els.length) return;

  const io = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  els.forEach(el => io.observe(el));
})();

/* ============================================================
   GSAP HERO ANIMATIONS (loads after GSAP deferred)
   ============================================================ */
window.addEventListener('load', () => {
  if (typeof gsap === 'undefined') return;

  // Register ScrollTrigger if available
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Hero entrance sequence
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from('.hero__eyebrow', { y: 20, opacity: 0, duration: 0.6 })
    .from('.hero__title',    { y: 40, opacity: 0, duration: 0.7 }, '-=0.3')
    .from('.hero__subtitle', { y: 25, opacity: 0, duration: 0.6 }, '-=0.4')
    .from('.hero__actions',  { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
    .from('.hero__stats',    { y: 15, opacity: 0, duration: 0.5 }, '-=0.2')
    .from('.hero__viewer',   { x: 40, opacity: 0, duration: 0.8 }, '-=0.9');

  // Floating tags stagger
  gsap.from('.hero__float-tag', {
    opacity: 0, scale: 0.8, stagger: 0.2, delay: 1.2, duration: 0.5,
    ease: 'back.out(2)'
  });

  // Module cards stagger on scroll
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.from('.module-card', {
      scrollTrigger: {
        trigger: '.modules__grid',
        start: 'top 80%',
      },
      y: 60, opacity: 0, stagger: 0.15, duration: 0.7,
      ease: 'power2.out'
    });

    gsap.from('.about__obj', {
      scrollTrigger: {
        trigger: '.about__objectives',
        start: 'top 80%',
      },
      x: -30, opacity: 0, stagger: 0.12, duration: 0.6,
      ease: 'power2.out'
    });
  }
});

/* ============================================================
   SMOOTH SCROLL for anchor links
   ============================================================ */
$$('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const headerH = $('#site-header')?.offsetHeight || 70;
    const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/**
 * PaleoMuseo · main.js
 * Nav scroll · Hamburger · Scroll reveal (progressive) · GSAP hero
 */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

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
      scrollTrigger: { trigger: '.modules__grid', start: 'top 82%' },
      y: 50, opacity: 0, stagger: 0.12, duration: 0.65, ease: 'power2.out'
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
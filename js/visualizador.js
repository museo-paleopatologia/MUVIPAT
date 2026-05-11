/**
 * PaleoMuseo · visualizador.js
 * Filtrado OR dentro de categoría, AND entre categorías
 * Row-injection con GSAP · Slider independiente por fila
 */

/* ══════════════════════════════════════════════════
   DATOS: 8 patologías en array ordenado 4×2
   Fila 1 (idx 0-3): trauma, infecciosa, especifica, metabolica
   Fila 2 (idx 4-7): endocrino, tumor, degenerativa, congenita
══════════════════════════════════════════════════ */
const PATOLOGIA_INFO = [
  { key: 'trauma',       icon: '🦴', name: 'Traumatismos',     count: '4 piezas', color: '#FF4D6D',
    eyebrow: 'Categoría · Traumatismos',
    body: 'Son la segunda condición más prevalente en el registro paleopatológico. Comprenden cualquier evento extrínseco que altere la integridad o morfología ósea. Su análisis permite diferenciar entre accidentes, violencia o intervenciones quirúrgicas (trepanaciones) registrando así riesgos ambientales y comportamientos culturales.' },
  { key: 'infecciosa',   icon: '🦠', name: 'Infecciones',       count: '4 piezas', color: '#00B8CC',
    eyebrow: 'Categoría · Enfermedades infecciosas',
    body: 'Procesos inflamatorios crónicos derivados de la invasión de patógenos en el tejido esquelético. Dado que el hueso solo registra infecciones de larga duración, las lesiones visibles testimonian una respuesta inmune prolongada. Cada resto infectado documenta la evolución de la patogenicidad y la resiliencia biológica.' },
  { key: 'especifica',   icon: '🔬', name: 'Enf. específicas',  count: '—',        color: '#7B00CC',
    eyebrow: 'Categoría · Tuberculosis · Lepra · Treponematosis',
    body: 'Procesos granulomatosos con patrones de diagnóstico distintivos, centrados en la tuberculosis, la lepra y la treponematosis (sífilis). Alteran el tejido mediante focos destructivos o proliferativos característicos, como la caries sicca craneal o el colapso vertebral (Mal de Pott), permitiendo rastrear la coevolución entre humanos y patógenos específicos.' },
  { key: 'metabolica',   icon: '🧬', name: 'Deficiencias',      count: '2 piezas', color: '#8FA800',
    eyebrow: 'Categoría · Escorbuto · Raquitismo · Osteomalacia',
    body: 'Trastornos sistémicos derivados de dietas inadecuadas o fallos metabólicos que alteran la mineralización ósea. Incluye el escorbuto (déficit de Vit. C) y el raquitismo (déficit de Vit. D), manifestándose en deformaciones plásticas o porosidad. Estos restos actúan como bioindicadores cruciales de estrés biológico y de la ecología dietética de la población.' },
  { key: 'endocrino',    icon: '⚗️', name: 'T. endocrinos',    count: '—',        color: '#C87800',
    eyebrow: 'Categoría · Sistema endocrino',
    body: 'Alteraciones esqueléticas derivadas de disfunciones en las glándulas pituitaria y tiroides, responsables de regular el crecimiento y la maduración ósea. El hiperpituitarismo se manifiesta como gigantismo o acromegalia, mientras que el hipotiroidismo resulta en diversas formas de enanismo. Documentan fallos en la homeostasis hormonal y su impacto en el desarrollo morfológico del individuo.' },
  { key: 'tumor',        icon: '🔴', name: 'Tumores y quistes', count: '—',        color: '#CC4400',
    eyebrow: 'Categoría · Neoplasias óseas',
    body: 'Proliferaciones anómalas de los componentes del tejido óseo, clasificadas en benignas y malignas. Los tumores primarios suelen manifestarse en periodos de crecimiento, mientras que las metástasis predominan en individuos de edad avanzada. Permiten documentar la antigüedad de los procesos neoplásicos en relación con la longevidad y la exposición ambiental.' },
  { key: 'degenerativa', icon: '🦷', name: 'Enf. articulares',  count: '2 piezas', color: '#8A6800',
    eyebrow: 'Categoría · Artrosis · Artritis',
    body: 'Alteraciones morfológicas resultantes de desequilibrio mecánico y fisiológico en superficies de contacto óseo, con la osteoartritis como condición más frecuente. Mediante la identificación de eburnación y osteofitos, permiten reconstruir patrones de estrés físico, especialización laboral y longevidad en las poblaciones del pasado.' },
  { key: 'congenita',    icon: '🧩', name: 'An. desarrollo',    count: '2 piezas', color: '#AA0060',
    eyebrow: 'Categoría · Anomalías congénitas y del desarrollo',
    body: 'Desviaciones estructurales derivadas de fallos genéticos o ambientales durante la embriogénesis y el crecimiento. Incluyen desde displasias sistémicas como la acondroplasia hasta malformaciones como la espina bífida o craneosinostosis. Su presencia documenta la variabilidad biológica y, a menudo, la capacidad de cuidado y cohesión social hacia individuos con discapacidades.' }
];

/* ══════════════════════════════════════════════════
   ESTADO GLOBAL
══════════════════════════════════════════════════ */
const state = {
  view: 'anatomia',
  filters: {
    region:    new Set(),
    patologia: new Set(),
    sexo:      new Set(),
    epoca:     new Set(),
    query:     ''
  }
};

/* Estado de los paneles inyectados por fila */
const rowState = {
  1: { keys: [], current: 0 },
  2: { keys: [], current: 0 }
};

/* ResizeObserver: recalcula slides si el contenedor cambia de ancho */
if (typeof ResizeObserver !== 'undefined') {
  const ro = new ResizeObserver(() => {
    [1, 2].forEach(row => {
      if (rowState[row].keys.length > 0) {
        const wrap  = document.getElementById(`row-wrap-${row}`);
        const track = document.getElementById(`rp-track-${row}`);
        if (!wrap || !track) return;
        const wrapW  = wrap.offsetWidth;
        const slides = wrap.querySelectorAll('.rp-slide');
        slides.forEach(s => { s.style.width = wrapW + 'px'; });
        track.style.width = (wrapW * rowState[row].keys.length) + 'px';
        /* Reposicionar sin animación */
        gsapReady(() => applyRowSlide(row, rowState[row].current, false));
      }
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const center = document.querySelector('.expl-center');
    if (center) ro.observe(center);
  });
}

/* ══════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  readURLParams();
  bindViewToggle();
  bindFilters();
  bindSearchBox();
  bindSkeletonSVG();
  renderView();
  renderResults();
  updateActiveFiltersBar();
});

/* ══════════════════════════════════════════════════
   DEEP LINKING
══════════════════════════════════════════════════ */
function readURLParams() {
  const params = new URLSearchParams(window.location.search);
  const v = params.get('vista') || params.get('view');
  state.view = (v === 'patologica' || v === 'patologia') ? 'patologia' : 'anatomia';
  const r = params.get('region');
  if (r && VOCABULARIO?.region?.[r]) state.filters.region.add(r);
}

/* ══════════════════════════════════════════════════
   TOGGLE VISTA
══════════════════════════════════════════════════ */
function bindViewToggle() {
  document.querySelectorAll('[data-view-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.view = btn.dataset.viewBtn;
      renderView();
      updateViewBtns();
      renderResults();
    });
  });
}

function updateViewBtns() {
  document.querySelectorAll('[data-view-btn]').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.viewBtn === state.view);
  });
}

function renderView() {
  const paneA = document.getElementById('view-anatomy');
  const paneB = document.getElementById('view-pathology');
  if (!paneA || !paneB) return;

  if (state.view === 'anatomia') {
    paneA.classList.add('is-visible');
    paneB.classList.remove('is-visible');
    highlightSkeletonRegions(state.filters.region);
  } else {
    paneB.classList.add('is-visible');
    paneA.classList.remove('is-visible');
    renderPatologyGrid();
  }
  updateViewBtns();
}

/* ══════════════════════════════════════════════════
   SKELETON SVG
══════════════════════════════════════════════════ */
function bindSkeletonSVG() {
  document.querySelectorAll('[data-region]').forEach(el => {
    el.addEventListener('click', () => {
      const r = el.dataset.region;
      if (state.filters.region.has(r)) {
        state.filters.region.delete(r);
      } else {
        state.filters.region.add(r);
      }
      highlightSkeletonRegions(state.filters.region);
      syncFilterUI();
      renderResults();
      updateActiveFiltersBar();
    });

    el.addEventListener('mouseenter', e => {
      if (VOCABULARIO?.region) showSVGTooltip(e, VOCABULARIO.region[el.dataset.region]?.label);
    });
    el.addEventListener('mouseleave', hideSVGTooltip);
  });
}

function highlightSkeletonRegions(regionSet) {
  const hasActive = regionSet.size > 0;
  document.querySelectorAll('[data-region]').forEach(el => {
    const key = el.dataset.region;
    el.classList.toggle('region--active', regionSet.has(key));
    el.classList.toggle('region--dim', hasActive && !regionSet.has(key));
  });
}

let tooltipEl = null;
function showSVGTooltip(e, text) {
  if (!text) return;
  if (!tooltipEl) {
    tooltipEl = document.getElementById('svg-tooltip');
    if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.className = 'svg-tooltip';
      document.body.appendChild(tooltipEl);
    }
  }
  tooltipEl.textContent = text;
  tooltipEl.classList.add('visible');
  moveSVGTooltip(e);
  document.addEventListener('mousemove', moveSVGTooltip);
}
function moveSVGTooltip(e) {
  if (!tooltipEl) return;
  tooltipEl.style.left = (e.clientX + 14) + 'px';
  tooltipEl.style.top  = (e.clientY - 10) + 'px';
}
function hideSVGTooltip() {
  if (tooltipEl) tooltipEl.classList.remove('visible');
  document.removeEventListener('mousemove', moveSVGTooltip);
}

/* ══════════════════════════════════════════════════
   GRID PATOLOGÍAS — estructura fija en el HTML:
     #patology-grid-row-1  (cards 0-3)
     #row-wrap-1           (panel info fila 1 — GSAP height)
     #patology-grid-row-2  (cards 4-7)
     #row-wrap-2           (panel info fila 2 — GSAP height)

   renderPatologyGrid SOLO puebla los contenedores de fila.
   Los wrappers de panel ya existen en el DOM (HTML estático).
══════════════════════════════════════════════════ */
function renderPatologyGrid() {
  const row1El = document.getElementById('patology-grid-row-1');
  const row2El = document.getElementById('patology-grid-row-2');
  if (!row1El || !row2El) return;

  /* Mostrar las filas (empiezan con display:none en el HTML) */
  row1El.style.display = '';
  row2El.style.display = '';

  /* Poblar fila 1 (índices 0-3) */
  row1El.innerHTML = '';
  PATOLOGIA_INFO.slice(0, 4).forEach(info => {
    row1El.appendChild(buildPatologyCard(info, 1));
  });

  /* Poblar fila 2 (índices 4-7) */
  row2El.innerHTML = '';
  PATOLOGIA_INFO.slice(4, 8).forEach(info => {
    row2El.appendChild(buildPatologyCard(info, 2));
  
  /*══════════════════════════════════════════════════
    MAPA DE NOMBRES: Sincroniza los badges de las 
    cards de resultado con los nombres del grid de 
    patologías
  ══════════════════════════════════════════════════ */
  const PAT_DISPLAY = Object.fromEntries(
    PATOLOGIA_INFO.map(p =>[p.key, { name: p.name, icon: p.icon, color: p.color }])
  );

}

/* Construye una card de patología para la fila indicada */
function buildPatologyCard(info, row) {
  const card = document.createElement('div');
  card.className = 'patology-card' + (state.filters.patologia.has(info.key) ? ' is-active' : '');
  card.setAttribute('role', 'listitem');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', info.name);
  card.setAttribute('data-pat-key', info.key);
  card.style.setProperty('--pat-color', info.color);

  card.innerHTML = `
    <div class="pat-card__icon">${info.icon}</div>
    <div class="pat-card__name">${info.name}</div>
    <div class="pat-card__count">${info.count}</div>
  `;

  card.addEventListener('click',   () => onPatologyCardClick(info, row, card));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
  });
  return card;
}

/* ══════════════════════════════════════════════════
   CLICK EN CARD DE PATOLOGÍA
   row ya viene calculado desde buildPatologyCard.
══════════════════════════════════════════════════ */
function onPatologyCardClick(info, row, card) {
  const rs     = rowState[row];
  const active = card.classList.contains('is-active');

  if (active) {
    card.classList.remove('is-active');
    rs.keys    = rs.keys.filter(k => k !== info.key);
    rs.current = Math.min(rs.current, Math.max(0, rs.keys.length - 1));
    state.filters.patologia.delete(info.key);
  } else {
    card.classList.add('is-active');
    if (!rs.keys.includes(info.key)) {
      rs.keys.push(info.key);
      rs.current = rs.keys.length - 1;
    }
    state.filters.patologia.add(info.key);
  }

  gsapReady(() => updateRowPanel(row));
  updateSidebarChips();
  syncFilterUI();
  renderResults();
  updateActiveFiltersBar();
}

/* ══════════════════════════════════════════════════
   GSAP SAFETY WRAPPER
   Si GSAP aún no cargó (defer), diferir hasta load.
══════════════════════════════════════════════════ */
function gsapReady(fn) {
  if (typeof gsap !== 'undefined') {
    fn();
  } else {
    window.addEventListener('load', fn, { once: true });
  }
}

/* ══════════════════════════════════════════════════
   ROW-PANEL: GSAP BLIND ANIMATION
   Estructura:
     .row-panel-wrap  ← GSAP anima height (persiana)
       .row-panel     ← contenido
         .rp-slider-viewport  ← overflow:hidden, ancho 100%
           .rp-slider-track   ← display:flex, ancho = N * 100vw_wrap px
             .rp-slide × N    ← flex: 0 0 [wrapPx]px, overflow:hidden
         .row-panel__nav      ← flechas FUERA del texto
══════════════════════════════════════════════════ */
function updateRowPanel(row) {
  const rs   = rowState[row];
  const wrap = document.getElementById(`row-wrap-${row}`);
  if (!wrap) return;

  /* ── Sin selección: colapsar ── */
  if (rs.keys.length === 0) {
    gsap.to(wrap, {
      height: 0, opacity: 0, duration: 0.3, ease: 'power2.in',
      onComplete: () => {
        wrap.innerHTML  = '';
        wrap.style.cssText = 'height:0;overflow:hidden;';
      }
    });
    return;
  }

  const isNew       = !wrap.querySelector('.row-panel');
  const firstInfo   = PATOLOGIA_INFO.find(p => p.key === rs.keys[0]);
  const accentColor = firstInfo?.color || '#00E5FF';
  const showNav     = rs.keys.length > 1;

  rs.current = Math.min(rs.current, rs.keys.length - 1);

  /* ── Construir HTML del panel ── */
  wrap.innerHTML = `
    <div class="row-panel" id="row-panel-${row}">
      <div class="row-panel__accent-bar" style="background:${accentColor}"></div>
      <button class="row-panel__close" aria-label="Cerrar panel">✕</button>

      <!-- VIEWPORT: clip para el slider -->
      <div class="rp-slider-viewport" id="rp-viewport-${row}">
        <!-- TRACK: flex, ancho calculado por JS post-render -->
        <div class="rp-slider-track" id="rp-track-${row}">
          ${rs.keys.map(key => {
            const info = PATOLOGIA_INFO.find(p => p.key === key);
            return `
            <div class="rp-slide" style="--rp-accent:${info.color}">
              <div class="rp-slide__inner">
                <p class="row-slide__eyebrow">${info.eyebrow}</p>
                <h3 class="row-slide__title">${info.title}</h3>
                <p class="row-slide__body">${info.body}</p>
              </div>
            </div>`;
          }).join('')}
        </div>
      </div>

      <!-- NAV: siempre presente, arrows se ocultan si es 1 slide -->
      <div class="row-panel__nav" ${!showNav ? 'style="display:none"' : ''}>
        <button class="row-panel__arrow" id="rp-prev-${row}"
                aria-label="Anterior" ${rs.current === 0 ? 'disabled' : ''}>&#8592;</button>
        <span class="row-panel__counter" id="rp-counter-${row}">
          <strong>${rs.current + 1}</strong>&thinsp;/&thinsp;${rs.keys.length}
        </span>
        <button class="row-panel__arrow" id="rp-next-${row}"
                aria-label="Siguiente" ${rs.current === rs.keys.length - 1 ? 'disabled' : ''}>&#8594;</button>
      </div>
    </div>
  `;

  /* ── Calcular dimensiones post-render ── */
  /* Necesitamos que el wrap tenga ancho visible para medir.
     Si es nuevo, forzamos temporalmente height:auto para leer offsetWidth. */
  const tempReveal = isNew;
  if (tempReveal) {
    wrap.style.height   = 'auto';
    wrap.style.overflow = 'visible';
    wrap.style.opacity  = '0';
  }

  const viewport  = wrap.querySelector(`#rp-viewport-${row}`);
  const track     = wrap.querySelector(`#rp-track-${row}`);
  const slides    = wrap.querySelectorAll('.rp-slide');
  const wrapW     = wrap.offsetWidth || 600; /* fallback si aún no pintado */

  /* Cada slide = exactamente el ancho del viewport */
  slides.forEach(s => { s.style.width = wrapW + 'px'; });
  track.style.width = (wrapW * rs.keys.length) + 'px';

  /* Posicionar sin animación en el slide correcto */
  track.style.transform = `translateX(${-(rs.current * wrapW)}px)`;

  /* Calcular altura real del panel tras render */
  const panelEl   = wrap.querySelector('.row-panel');
  const panelH    = panelEl ? panelEl.offsetHeight + 8 : 280; /* +8 gap */

  /* ── Eventos ── */
  wrap.querySelector('.row-panel__close')
      .addEventListener('click', () => closeRowPanel(row));

  if (showNav) {
    document.getElementById(`rp-prev-${row}`)
      ?.addEventListener('click', () => goRowSlide(row, rs.current - 1));
    document.getElementById(`rp-next-${row}`)
      ?.addEventListener('click', () => goRowSlide(row, rs.current + 1));
  }

  /* ── Animación persiana GSAP ── */
  if (isNew) {
    /* Restaurar estado oculto antes de animar */
    wrap.style.height   = '0';
    wrap.style.overflow = 'hidden';
    wrap.style.opacity  = '0';

    gsap.fromTo(wrap,
      { height: 0, opacity: 0 },
      {
        height: panelH, opacity: 1, duration: 0.42, ease: 'power3.out',
        onComplete: () => {
          wrap.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    );
  } else {
    /* Panel ya existe — ajustar altura si cambió (e.g. nav apareció/desapareció) */
    gsap.to(wrap, { height: panelH, opacity: 1, duration: 0.24, ease: 'power2.out' });
  }
}

/* ══════════════════════════════════════════════════
   SLIDER: translateX en píxeles absolutos
   Cada .rp-slide tiene width exacto = wrap.offsetWidth
   → cero overflow entre slides.
══════════════════════════════════════════════════ */
function applyRowSlide(row, idx, animate = true) {
  const wrap  = document.getElementById(`row-wrap-${row}`);
  const track = document.getElementById(`rp-track-${row}`);
  if (!wrap || !track) return;

  const total  = rowState[row].keys.length;
  const slideW = wrap.offsetWidth || parseInt(track.style.width, 10) / total || 600;
  const tx     = -(idx * slideW);

  if (animate) {
    gsap.to(track, { x: tx, duration: 0.36, ease: 'power3.inOut' });
  } else {
    gsap.set(track, { x: tx });
  }

  /* Counter */
  const counter = document.getElementById(`rp-counter-${row}`);
  if (counter) counter.innerHTML = `<strong>${idx + 1}</strong>&thinsp;/&thinsp;${total}`;

  /* Arrows */
  const prev = document.getElementById(`rp-prev-${row}`);
  const next = document.getElementById(`rp-next-${row}`);
  if (prev) prev.disabled = idx === 0;
  if (next) next.disabled = idx === total - 1;
}

function goRowSlide(row, idx) {
  const rs = rowState[row];
  if (idx < 0 || idx >= rs.keys.length) return;
  rs.current = idx;
  applyRowSlide(row, idx, true);
}

/* ══════════════════════════════════════════════════
   CERRAR PANEL DE FILA (con persiana inversa)
   Deselecciona todas las cards de esa fila.
   Si se elimina un filtro desde el topbar o sidebar,
   llamar a esta función también sincroniza las cards.
══════════════════════════════════════════════════ */
function closeRowPanel(row) {
  const wrap  = document.getElementById(`row-wrap-${row}`);
  const start = (row - 1) * 4;

  /* Deseleccionar cards */
  PATOLOGIA_INFO.slice(start, start + 4).forEach(info => {
    document.querySelector(`[data-pat-key="${info.key}"]`)?.classList.remove('is-active');
    document.querySelectorAll(`[data-filter="patologia"][value="${info.key}"]`)
      .forEach(cb => { cb.checked = false; });
    state.filters.patologia.delete(info.key);
  });
  rowState[row] = { keys: [], current: 0 };

  /* Persiana de cierre */
  if (wrap && wrap.children.length > 0) {
    gsap.to(wrap, {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        wrap.innerHTML = '';
        wrap.style.height = '0';
        wrap.style.opacity = '';
      }
    });
  }

  renderResults();
  updateActiveFiltersBar();
  updateSidebarChips();
}

/* ══════════════════════════════════════════════════
   SINCRONIZACIÓN AUTO-CLOSE desde chips / sidebar
   Cuando se elimina un filtro de patología, verifica
   si la fila ya no tiene selecciones y cierra el panel.
══════════════════════════════════════════════════ */
function syncRowPanelsAfterFilterChange() {
  [1, 2].forEach(row => {
    const start    = (row - 1) * 4;
    const keysInRow = PATOLOGIA_INFO.slice(start, start + 4).map(p => p.key);

    /* Filtrar keys que siguen activas en state.filters.patologia */
    const newKeys = rowState[row].keys.filter(k => state.filters.patologia.has(k));

    /* Actualizar estado visual de las cards */
    keysInRow.forEach(key => {
      document.querySelector(`[data-pat-key="${key}"]`)
        ?.classList.toggle('is-active', state.filters.patologia.has(key));
    });

    if (newKeys.length !== rowState[row].keys.length) {
      rowState[row].keys    = newKeys;
      rowState[row].current = Math.min(rowState[row].current, Math.max(0, newKeys.length - 1));
      gsapReady(() => updateRowPanel(row));
    }
  });
}

/* ══════════════════════════════════════════════════
   CHIPS DE FILTROS ACTIVOS EN SIDEBAR (mobile)
══════════════════════════════════════════════════ */
function updateSidebarChips() {
  const container = document.getElementById('sidebar-active-chips');
  if (!container) return;
  container.innerHTML = '';

  const allActive = [...rowState[1].keys, ...rowState[2].keys];
  if (!allActive.length) return;

  const title = document.createElement('p');
  title.className   = 'filter-section__title';
  title.textContent = 'Filtros activos';
  container.appendChild(title);

  allActive.forEach(key => {
    const info = PATOLOGIA_INFO.find(p => p.key === key);
    if (!info) return;
    const chip = document.createElement('button');
    chip.className = 'active-filter-chip';
    chip.style.cssText = 'width:100%;justify-content:space-between;';
    chip.innerHTML = `<span>${info.icon} ${info.name}</span><span style="opacity:.4">✕</span>`;
    chip.addEventListener('click', () => {
      document.querySelector(`[data-pat-key="${key}"]`)?.click();
    });
    container.appendChild(chip);
  });
}

/* ══════════════════════════════════════════════════
   FILTROS LATERALES
══════════════════════════════════════════════════ */
function bindFilters() {
  document.querySelectorAll('[data-filter]').forEach(el => {
    el.addEventListener('change', () => {
      const cat = el.dataset.filter;
      const val = el.value;
      if (el.checked) {
        state.filters[cat].add(val);
      } else {
        state.filters[cat].delete(val);
      }
      renderResults();
      updateActiveFiltersBar();
      if (cat === 'region')    highlightSkeletonRegions(state.filters.region);
      if (cat === 'patologia') {
        syncRowPanelsAfterFilterChange();
        updateSidebarChips();
        if (state.view === 'patologia') {
          /* Re-renderizar solo los estados visuales de las cards */
          document.querySelectorAll('[data-pat-key]').forEach(card => {
            card.classList.toggle('is-active', state.filters.patologia.has(card.dataset.patKey));
          });
        }
      }
    });
  });
}

function syncFilterUI() {
  ['region', 'patologia', 'sexo', 'epoca'].forEach(cat => {
    document.querySelectorAll(`[data-filter="${cat}"]`).forEach(el => {
      el.checked = state.filters[cat].has(el.value);
    });
  });
}

/* ══════════════════════════════════════════════════
   BUSCADOR
══════════════════════════════════════════════════ */
function bindSearchBox() {
  const input = document.getElementById('search-input');
  if (!input) return;
  input.addEventListener('input', () => {
    state.filters.query = input.value.toLowerCase().trim();
    renderResults();
    updateActiveFiltersBar();
  });
}

/* ══════════════════════════════════════════════════
   FILTRADO — OR dentro de categoría, AND entre
══════════════════════════════════════════════════ */
function getFilteredPieces() {
  if (typeof PIEZAS === 'undefined') return [];
  const { region, patologia, sexo, epoca, query } = state.filters;
  return PIEZAS.filter(p => {
    if (region.size    > 0 && !region.has(p.region))       return false;
    if (patologia.size > 0 && !patologia.has(p.patologia))  return false;
    if (sexo.size      > 0 && !sexo.has(p.sexo))            return false;
    if (epoca.size     > 0 && !epoca.has(p.epoca))          return false;
    if (query) {
      const hay = `${p.id} ${p.nombre} ${p.descripcion} ${p.yacimiento}`.toLowerCase();
      if (!hay.includes(query)) return false;
    }
    return true;
  });
}

/* ══════════════════════════════════════════════════
   RENDER RESULTADOS
══════════════════════════════════════════════════ */
function renderResults() {
  const container = document.getElementById('results-list');
  const countEl   = document.getElementById('results-count');
  if (!container) return;

  const results = getFilteredPieces();
  /* Escribir SOLO el número — la palabra "piezas" ya está en el HTML del topbar */
  if (countEl) countEl.textContent = results.length;

  if (results.length === 0) {
    container.innerHTML = `
      <div class="results-empty">
        <strong>0</strong>
        <p>Sin resultados para esta combinación.</p>
        <button onclick="clearAllFilters()"
          style="margin-top:.75rem;padding:.4em .9em;font-family:var(--font-ui);font-size:.7rem;
                 font-weight:700;background:var(--dark);color:var(--ivory);border:none;
                 border-radius:var(--r-sm);cursor:pointer;">
          Limpiar filtros
        </button>
      </div>`;
    return;
  }

  container.innerHTML = '';
  results.forEach((pieza, i) => container.appendChild(buildResultCard(pieza, i)));
}

/* ══════════════════════════════════════════════════
   BUILD RESULT CARD
══════════════════════════════════════════════════ */
function buildResultCard(pieza, index) {
  if (typeof VOCABULARIO === 'undefined') return document.createElement('div');

  const regMeta  = VOCABULARIO.region?.[pieza.pat]   || { icon: '', label: pieza.region };
  const patDisplay = PAT_DISPLAY[pieza.patologia];
  const patMeta    = {
    icon:  patDisplay?.icon  ?? VOCABULARIO.patologia?.[pieza.patologia]?.icon  ?? '',
    label: patDisplay?.name  ?? VOCABULARIO.patologia?.[pieza.patologia]?.label ?? pieza.patologia,
    color: patDisplay?.color ?? VOCABULARIO.patologia?.[pieza.patologia]?.color ?? '#ccc'
  };
  if (patDisplay?.color) card.style.setProperty('--pat-color', patDisplay.color);
  const sexMeta  = VOCABULARIO.sexo?.[pieza.sexo]        || { icon: '', label: pieza.sexo };
  const epocMeta = VOCABULARIO.epoca?.[pieza.epoca]      || { icon: '', label: pieza.epoca };

  const card = document.createElement('article');
  card.className = 'result-card';
  card.style.animationDelay = `${index * 0.04}s`;
  /* Garantizar que la card no desborde su contenedor */
  card.style.display    = 'block';
  card.style.width      = '100%';
  card.style.boxSizing  = 'border-box';

  card.innerHTML = `
    <div class="result-card__num">${pieza.id} · ${epocMeta.label}</div>
    <h3 class="result-card__title">${pieza.nombre}</h3>
    <p class="result-card__desc">${pieza.descripcion}</p>
    <div class="result-card__meta">
      <span class="result-tag" data-clickable data-filter-type="region"   data-filter-val="${pieza.region}">${regMeta.icon} ${regMeta.label}</span>
      <span class="result-tag" data-clickable data-filter-type="patologia" data-filter-val="${pieza.patologia}">${patMeta.icon} ${patMeta.label}</span>
      <span class="result-tag">${sexMeta.icon} ${sexMeta.label}</span>
    </div>
    <a href="${pieza.ficha || '#'}" class="result-card__link">
      Ver ficha completa
      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
      </svg>
    </a>
  `;

  card.querySelectorAll('[data-clickable]').forEach(tag => {
    tag.addEventListener('click', () => {
      const cat = tag.dataset.filterType;
      const val = tag.dataset.filterVal;
      if (state.filters[cat].has(val)) {
        state.filters[cat].delete(val);
      } else {
        state.filters[cat].add(val);
      }
      syncFilterUI();
      renderResults();
      updateActiveFiltersBar();
      if (cat === 'region')    highlightSkeletonRegions(state.filters.region);
      if (cat === 'patologia') {
        syncRowPanelsAfterFilterChange();
        updateSidebarChips();
      }
    });
  });

  return card;
}

/* ══════════════════════════════════════════════════
   BARRA DE FILTROS ACTIVOS (topbar desktop)
══════════════════════════════════════════════════ */
function updateActiveFiltersBar() {
  const bar = document.getElementById('active-filters-bar');
  if (!bar) return;

  const chips = [];

  if (typeof VOCABULARIO !== 'undefined') {
    state.filters.region.forEach(v => {
      const m = VOCABULARIO.region?.[v];
      if (m) chips.push({ cat: 'region', val: v, label: m.label, icon: m.icon });
    });
    state.filters.patologia.forEach(v => {
      const m = VOCABULARIO.patologia?.[v] || PATOLOGIA_INFO.find(p => p.key === v);
      if (m) chips.push({ cat: 'patologia', val: v, label: m.label || m.name, icon: m.icon });
    });
    state.filters.sexo.forEach(v => {
      const m = VOCABULARIO.sexo?.[v];
      if (m) chips.push({ cat: 'sexo', val: v, label: m.label, icon: m.icon });
    });
    state.filters.epoca.forEach(v => {
      const m = VOCABULARIO.epoca?.[v];
      if (m) chips.push({ cat: 'epoca', val: v, label: m.label, icon: '📅' });
    });
  }
  if (state.filters.query) chips.push({ cat: 'query', val: '', label: `"${state.filters.query}"`, icon: '🔍' });

  bar.innerHTML = '';

  if (chips.length === 0) {
    bar.innerHTML = '<span class="active-filter-hint">Sin filtros · mostrando todo</span>';
    return;
  }

  chips.forEach(chip => {
    const el = document.createElement('button');
    el.className = 'active-filter-chip';
    el.innerHTML = `${chip.icon} ${chip.label} <span style="opacity:.5">×</span>`;
    el.title = `Quitar "${chip.label}"`;
    el.addEventListener('click', () => {
      if (chip.cat === 'query') {
        state.filters.query = '';
        ['search-input', 'search-input-mob'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.value = '';
        });
      } else {
        state.filters[chip.cat].delete(chip.val);
      }
      syncFilterUI();
      renderResults();
      updateActiveFiltersBar();
      if (chip.cat === 'region')    highlightSkeletonRegions(state.filters.region);
      if (chip.cat === 'patologia') {
        syncRowPanelsAfterFilterChange();
        updateSidebarChips();
      }
    });
    bar.appendChild(el);
  });

  const clearBtn = document.createElement('button');
  clearBtn.className = 'active-filter-chip active-filter-chip--clear';
  clearBtn.textContent = 'Limpiar todo';
  clearBtn.addEventListener('click', clearAllFilters);
  bar.appendChild(clearBtn);
}

/* ══════════════════════════════════════════════════
   RESET GLOBAL
══════════════════════════════════════════════════ */
function clearAllFilters() {
  state.filters.region    = new Set();
  state.filters.patologia = new Set();
  state.filters.sexo      = new Set();
  state.filters.epoca     = new Set();
  state.filters.query     = '';
  syncFilterUI();
  highlightSkeletonRegions(new Set());
  ['search-input', 'search-input-mob'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });

  /* Cerrar todos los paneles y limpiar rowState */
  gsapReady(() => {
    [1, 2].forEach(row => {
      rowState[row] = { keys: [], current: 0 };
      const wrap = document.getElementById(`row-wrap-${row}`);
      if (wrap && wrap.children.length > 0) {
        gsap.to(wrap, {
          height: 0, opacity: 0, duration: 0.25, ease: 'power2.in',
          onComplete: () => {
            wrap.innerHTML   = '';
            wrap.style.height  = '0';
            wrap.style.opacity = '';
          }
        });
      }
    });
  });

  /* Deseleccionar cards visuales en ambas filas */
  document.querySelectorAll('.patology-card.is-active').forEach(c => c.classList.remove('is-active'));

  renderResults();
  updateActiveFiltersBar();
  updateSidebarChips();
  if (state.view === 'patologia') renderPatologyGrid();
}

function clearFilterCat(cat) {
  state.filters[cat] = new Set();
  syncFilterUI();
  if (cat === 'region') highlightSkeletonRegions(new Set());
  if (cat === 'patologia') {
    syncRowPanelsAfterFilterChange();
    updateSidebarChips();
  }
  renderResults();
  updateActiveFiltersBar();
}
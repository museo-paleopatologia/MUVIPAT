/**
 * MUVIPAT · visualizador.js
 * Filtrado OR dentro de categoría, AND entre categorías
 * Row-injection con GSAP · Slider independiente por fila
 */

/* ══════════════════════════════════════════════════
   DATOS: 7 patologías en array ordenado 4×3
   Fila 1 (idx 0-3): trauma, infecciosa, congenita, degenerativa
   Fila 2 (idx 4-6): metabolica, tumor, estudio
══════════════════════════════════════════════════ */
const PATOLOGIA_INFO = [
  { key: 'trauma',
    icon: '⚡', name: 'Traumatismos', count: '2 piezas', color: '#FF4D6D',
    body: 'Lesiones que alteran la integridad estructural del hueso como resultado de un impacto mecánico directo o indirecto. Comprenden fracturas, luxaciones y heridas inciso-contusas. Su estudio permite identificar episodios de violencia interpersonal, accidentes laborales o actividades de riesgo, así como intervenciones quirúrgicas como las trepanaciones.' },

  { key: 'infecciosa',
    icon: '🦠', name: 'Enfermedades Infecciosas', count: '1 pieza', color: '#00B8CC',
    body: 'Procesos patológicos causados por microorganismos —bacterias, hongos o parásitos— que invaden el tejido óseo. Dado que el esqueleto solo registra infecciones de larga evolución, las lesiones observadas evidencian respuestas inflamatorias crónicas. Incluyen la tuberculosis ósea (Mal de Pott), la lepra o la treponematosis, permitiendo rastrear la historia evolutiva de estas enfermedades.' },

  { key: 'congenita',
    icon: '🧬', name: 'Alteraciones Congénitas y del Desarrollo', count: '1 pieza', color: '#AA0060',
    body: 'Desviaciones de la morfología normal debidas a alteraciones genéticas o perturbaciones ocurridas durante el desarrollo prenatal o postnatal. Abarcan desde malformaciones estructurales como la craneosinostosis hasta displasias sistémicas como la acondroplasia. Su registro documenta la variabilidad biológica y, en ocasiones, las capacidades de cuidado y cohesión social del grupo.' },

  { key: 'degenerativa',
    icon: '⚙️', name: 'Artropatías y Enfermedades Degenerativas', count: '1 pieza', color: '#FFB300',
    body: 'Alteraciones del cartílago y las superficies articulares derivadas del desequilibrio mecánico acumulado a lo largo de la vida. La osteoartritis es la condición más frecuente, caracterizada por eburnación, osteofitosis y reordenamiento subcondral. Su análisis permite reconstruir patrones de actividad física, especialización laboral y longevidad en las poblaciones del pasado.' },

  { key: 'metabolica',
    icon: '🔬', name: 'Alteraciones Metabólicas y Marcadores de Estrés', count: '1 pieza', color: '#C6E800',
    body: 'Modificaciones del tejido óseo derivadas de déficits nutricionales, enfermedades sistémicas o episodios repetidos de estrés fisiológico durante el crecimiento. Incluyen el escorbuto, el raquitismo o la hipoplasia de esmalte dental. Actúan como indicadores sensibles de las condiciones de vida, la calidad de la dieta y los episodios de crisis en la población estudiada.' },

  { key: 'tumor',
    icon: '🔴', name: 'Tumores y Proliferaciones Óseas', count: '1 pieza', color: '#CC4400',
    body: 'Crecimientos anómalos del tejido óseo, clasificados en benignos y malignos según su comportamiento biológico. Los tumores primarios del hueso suelen afectar a individuos jóvenes, mientras que las metástasis óseas predominan en edades avanzadas. Su identificación en el registro arqueológico amplía el conocimiento sobre la antigüedad de los procesos neoplásicos y su prevalencia histórica.' },

  { key: 'estudio',
    icon: '🔍', name: 'Patologías en Estudio', count: '—', color: '#7B00CC',
    body: 'Agrupa piezas cuyo diagnóstico paleopatológico está pendiente de confirmación o requiere análisis complementarios, así como lesiones que no encajan claramente en las categorías establecidas. Refleja los límites del diagnóstico macroscópico y la necesidad de metodologías como el análisis de ADN antiguo, la histología o la fluorescencia de rayos X para su caracterización definitiva.' }
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
  });
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
  /* El color de la barra refleja el slide ACTUALMENTE visible, no el primero */
  const currentInfo = PATOLOGIA_INFO.find(p => p.key === rs.keys[rs.current]);
  const accentColor = currentInfo?.color || '#00E5FF';
  const showNav     = rs.keys.length > 1;

  rs.current = Math.min(rs.current, rs.keys.length - 1);

  /* ── Construir HTML del panel ── */
  wrap.innerHTML = `
    <div class="row-panel" id="row-panel-${row}">
      <div class="row-panel__accent-bar" id="rp-accent-${row}" style="background:${accentColor}"></div>
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
                <h3 class="row-slide__title">${info.name}</h3>
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
   SLIDER: translateX en píxeles + actualiza barra de acento
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

  /* Actualizar color de la barra superior con el color del slide activo */
  const currentKey  = rowState[row].keys[idx];
  const currentInfo = PATOLOGIA_INFO.find(p => p.key === currentKey);
  if (currentInfo) {
    const accentBar = document.getElementById(`rp-accent-${row}`);
    if (accentBar) accentBar.style.background = currentInfo.color;
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
          /* Re-renderizar estados visuales de las cards — usar el selector correcto */
          document.querySelectorAll('[data-pat-key]').forEach(card => {
            card.classList.toggle('is-active', state.filters.patologia.has(card.getAttribute('data-pat-key')));
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
  /* PIEZAS y VOCABULARIO se definen en data.js que carga antes */
  if (typeof PIEZAS === 'undefined' || !Array.isArray(PIEZAS)) return [];

  const { region, patologia, sexo, epoca, query } = state.filters;
  return PIEZAS.filter(p => {
    if (region.size    > 0 && !region.has(p.region))       return false;
    if (patologia.size > 0) {
      const pats = Array.isArray(p.patologia) ? p.patologia : [p.patologia];
      if (!pats.some(k => patologia.has(k))) return false;
    }
    if (sexo.size      > 0 && !sexo.has(p.sexo))            return false;
    if (epoca.size     > 0 && !epoca.has(p.epoca))          return false;
    if (query) {
      const hay = `${p.id ?? ''} ${p.nombre ?? ''} ${p.descripcion ?? ''} ${p.yacimiento ?? ''}`.toLowerCase();
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

  const regMeta  = VOCABULARIO.region?.[pieza.region]   || { icon: '', label: pieza.region };
  const patKeys  = Array.isArray(pieza.patologia) ? pieza.patologia : [pieza.patologia];
  const patMeta  = VOCABULARIO.patologia?.[patKeys[0]] || { icon: '', label: patKeys[0], color: '#ccc' };
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
      <span class="result-tag" data-clickable data-filter-type="region" data-filter-val="${pieza.region}">${regMeta.icon} ${regMeta.label}</span>
      ${patKeys.map(k => {
        const m = VOCABULARIO.patologia?.[k] || { icon: '', label: k };
        return `<span class="result-tag" data-clickable data-filter-type="patologia" data-filter-val="${k}">${m.icon} ${m.label}</span>`;
      }).join('')}
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
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
    title: 'Huellas de violencia, accidente y cirugía en el registro óseo',
    body: 'Después del desgaste degenerativo, los traumatismos representan la condición patológica más prevalente en el registro paleopatológico. Esta categoría comprende cualquier evento extrínseco que altere la continuidad o morfología ósea. El análisis de traumatismos permite identificar comportamientos culturales y riesgos ambientales, pudiendo diferenciar entre accidentes, actos de violencia o intervenciones quirúrgicas.' },
  { key: 'infecciosa',   icon: '🦠', name: 'Infecciones',       count: '4 piezas', color: '#00B8CC',
    eyebrow: 'Categoría · Enfermedades infecciosas',
    title: 'Cuando el esqueleto documenta la batalla contra el patógeno',
    body: 'Las infecciones representaban históricamente la principal amenaza para la supervivencia humana, afectando a casi la mitad de la población antes de alcanzar la madurez. Se manifiestan como procesos inflamatorios crónicos derivados de la introducción de bacterias, virus o parásitos en el tejido esquelético. Las lesiones visibles testimonian una respuesta inmune: cada hueso infectado documenta la evolución de la patogenicidad y la resiliencia biológica.' },
  { key: 'especifica',   icon: '🔬', name: 'Enf. específicas',  count: '—',        color: '#7B00CC',
    eyebrow: 'Categoría · Tuberculosis · Lepra · Treponematosis',
    title: 'Granulomas, focos destructivos y patrones diagnósticos distintivos',
    body: 'Procesos granulomatosos con patrones de diagnóstico característicos, centrados en la tuberculosis, la lepra y las treponematosis (sífilis y yaws). Estas afecciones alteran el tejido óseo mediante focos destructivos o blásticos reconocibles, como la caries sicca craneal o el colapso vertebral. Su identificación paleopatológica permite reconstruir la distribución geográfica e histórica de estas enfermedades.' },
  { key: 'metabolica',   icon: '🧬', name: 'Deficiencias',      count: '2 piezas', color: '#8FA800',
    eyebrow: 'Categoría · Escorbuto · Raquitismo · Osteomalacia',
    title: 'Dieta, mineralización y estrés biológico inscritos en el hueso',
    body: 'Trastornos sistémicos derivados de dietas inadecuadas o procesos metabólicos defectuosos que alteran la mineralización ósea. Incluye el escorbuto por déficit de vitamina C, caracterizado por hemorragias subperiósticas, y el raquitismo u osteomalacia por falta de vitamina D, que produce deformaciones plásticas. Estos restos son indicadores cruciales de estrés biológico y de ecología dietética en poblaciones pasadas.' },
  { key: 'endocrino',    icon: '⚗️', name: 'T. endocrinos',    count: '—',        color: '#C87800',
    eyebrow: 'Categoría · Sistema endocrino',
    title: 'Alteraciones hormonales reflejadas en la morfología esquelética',
    body: 'Los trastornos endocrinos producen alteraciones reconocibles en el crecimiento y la remodelación ósea. Condiciones como el hipotiroidismo, el gigantismo hipofisario o la acromegalia dejan evidencias morfológicas características: modificaciones en la densidad trabecular, cambios en las proporciones esqueléticas o alteraciones en los patrones de crecimiento. Su análisis aporta información sobre la función hormonal en poblaciones históricas.' },
  { key: 'tumor',        icon: '🔴', name: 'Tumores y quistes', count: '—',        color: '#CC4400',
    eyebrow: 'Categoría · Neoplasias óseas',
    title: 'Neoplasias benignas y malignas en el registro paleopatológico',
    body: 'Las neoplasias óseas —tanto primarias como metastásicas— dejan huellas diagnósticas reconocibles: lesiones líticas o blásticas con bordes bien o mal definidos, reacción periostal y remodelación cortical. Su identificación en restos arqueológicos es infrecuente pero de gran valor, ya que permite explorar la prevalencia del cáncer en poblaciones sin exposición a los factores de riesgo modernos.' },
  { key: 'degenerativa', icon: '🦷', name: 'Enf. articulares',  count: '2 piezas', color: '#8A6800',
    eyebrow: 'Categoría · Artrosis · Artritis',
    title: 'Desgaste, uso y envejecimiento articular en el esqueleto',
    body: 'Las enfermedades articulares, encabezadas por la osteoartrosis, constituyen el conjunto paleopatológico más frecuente en el registro arqueológico. Se manifiestan como remodelación de superficies articulares, formación de osteofitos, eburnación y porosidad subcondral. Su distribución y patrón aportan información directa sobre los patrones de actividad física, la división del trabajo y el envejecimiento de las poblaciones estudiadas.' },
  { key: 'congenita',    icon: '🧩', name: 'An. desarrollo',    count: '2 piezas', color: '#AA0060',
    eyebrow: 'Categoría · Anomalías congénitas y del desarrollo',
    title: 'Variaciones morfológicas y malformaciones de origen genético o prenatal',
    body: 'Las anomalías del desarrollo engloban un amplio espectro de variaciones esqueléticas con origen genético, epigenético o en alteraciones del desarrollo fetal. Incluyen desde variantes menores sin impacto funcional hasta malformaciones graves que condicionaron la supervivencia del individuo. Su estudio es relevante para comprender la diversidad morfológica poblacional y los determinantes genéticos de la salud en el pasado.' }
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

/* Dimensiones del panel (deben coincidir con las CSS vars) */
const SLIDE_H   = 200;  /* px — var(--slide-h) */
const NAV_BAR_H = 44;   /* px — var(--nav-bar-h) */
const ACCENT_H  = 4;    /* px — accent bar */

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
   GRID PATOLOGÍAS + ROW-INJECTION DOM
   Estructura generada en #view-pathology:
     #patology-grid  (el grid 4×2)
     #row-wrap-1     (.row-panel-wrap — GSAP anima height)
     #row-wrap-2     (.row-panel-wrap — GSAP anima height)
══════════════════════════════════════════════════ */
function renderPatologyGrid() {
  const vp = document.getElementById('view-pathology');
  if (!vp) return;

  /* Crear o reutilizar el grid */
  let grid = document.getElementById('patology-grid');
  if (!grid) {
    grid = document.createElement('div');
    grid.id = 'patology-grid';
    grid.setAttribute('role', 'list');
    grid.setAttribute('aria-label', 'Categorías patológicas');
    vp.appendChild(grid);
  }
  grid.innerHTML = '';

  /* Crear o reutilizar los wrappers de los paneles */
  let wrap1 = document.getElementById('row-wrap-1');
  let wrap2 = document.getElementById('row-wrap-2');

  if (!wrap1) {
    wrap1 = document.createElement('div');
    wrap1.id = 'row-wrap-1';
    wrap1.className = 'row-panel-wrap';
    vp.appendChild(wrap1);
  }
  if (!wrap2) {
    wrap2 = document.createElement('div');
    wrap2.id = 'row-wrap-2';
    wrap2.className = 'row-panel-wrap';
    vp.appendChild(wrap2);
  }

  /* Orden DOM: grid → wrap1 → wrap2 */
  vp.insertBefore(grid,  vp.firstChild);
  vp.insertBefore(wrap1, wrap2);

  /* Renderizar las 8 cards */
  PATOLOGIA_INFO.forEach((info, idx) => {
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

    card.addEventListener('click',   () => onPatologyCardClick(info, idx, card));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
    });

    grid.appendChild(card);
  });
}

/* ══════════════════════════════════════════════════
   CLICK EN CARD DE PATOLOGÍA
══════════════════════════════════════════════════ */
function onPatologyCardClick(info, idx, card) {
  const row    = idx < 4 ? 1 : 2;
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
   .row-panel-wrap  ← GSAP anima height (persiana)
     .row-panel     ← contenido (border, bg)
══════════════════════════════════════════════════ */
function updateRowPanel(row) {
  const rs   = rowState[row];
  const wrap = document.getElementById(`row-wrap-${row}`);
  if (!wrap) return;

  /* Sin selección → colapsar persiana */
  if (rs.keys.length === 0) {
    gsap.to(wrap, {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        wrap.innerHTML = '';
        gsap.set(wrap, { clearProps: 'height,opacity' });
        wrap.style.height = '0';
      }
    });
    return;
  }

  const firstInfo   = PATOLOGIA_INFO.find(p => p.key === rs.keys[0]);
  const accentColor = firstInfo?.color || '#00E5FF';
  const showNav     = rs.keys.length > 1;
  const totalH      = ACCENT_H + SLIDE_H + (showNav ? NAV_BAR_H : 0) + 12; /* +12 = margin-top panel */

  /* Es un panel nuevo o ya existente */
  const isNew = !wrap.querySelector('.row-panel');

  rs.current = Math.min(rs.current, rs.keys.length - 1);

  /* Construir el HTML del panel */
  wrap.innerHTML = `
    <div class="row-panel" id="row-panel-${row}">
      <div class="row-panel__accent-bar" style="background:${accentColor}"></div>
      <button class="row-panel__close" aria-label="Cerrar panel">✕</button>
      <div class="row-panel__slider-wrap">
        <div class="row-panel__track"
             id="rp-track-${row}"
             style="width:${rs.keys.length * 100}%">
          ${rs.keys.map(key => {
            const info = PATOLOGIA_INFO.find(p => p.key === key);
            return `<div class="row-panel__slide" style="--rp-accent:${info.color}">
                      <p class="row-slide__eyebrow">${info.eyebrow}</p>
                      <h3 class="row-slide__title">${info.title}</h3>
                      <p class="row-slide__body">${info.body}</p>
                    </div>`;
          }).join('')}
        </div>
      </div>
      ${showNav ? `
      <div class="row-panel__nav">
        <button class="row-panel__arrow" id="rp-prev-${row}" aria-label="Anterior" ${rs.current === 0 ? 'disabled' : ''}>&#8592;</button>
        <span class="row-panel__counter" id="rp-counter-${row}">
          <strong>${rs.current + 1}</strong> / ${rs.keys.length}
        </span>
        <button class="row-panel__arrow" id="rp-next-${row}" aria-label="Siguiente" ${rs.current === rs.keys.length - 1 ? 'disabled' : ''}>&#8594;</button>
      </div>` : ''}
    </div>
  `;

  /* Posicionar el track en el slide correcto (sin animación) */
  applyRowSlide(row, rs.current, false);

  /* Eventos del panel */
  wrap.querySelector('.row-panel__close').addEventListener('click', () => closeRowPanel(row));

  if (showNav) {
    document.getElementById(`rp-prev-${row}`)?.addEventListener('click', () => goRowSlide(row, rs.current - 1));
    document.getElementById(`rp-next-${row}`)?.addEventListener('click', () => goRowSlide(row, rs.current + 1));
  }

  /* Animación persiana: height 0 → totalH (apertura) */
  if (isNew) {
    gsap.fromTo(wrap,
      { height: 0, opacity: 0 },
      {
        height: totalH,
        opacity: 1,
        duration: 0.4,
        ease: 'power3.out',
        onComplete: () => {
          /* Scroll suave al panel una vez abierto */
          wrap.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    );
  } else {
    /* Panel ya existe — actualizar altura (puede haber cambiado si se añadió/quitó nav) */
    gsap.to(wrap, { height: totalH, duration: 0.22, ease: 'power2.out' });
  }
}

/* ══════════════════════════════════════════════════
   SLIDER GSAP — translateX en el track
   Cada slide es flex: 0 0 100%, ancho fijo.
   No hay overflow de texto entre slides.
══════════════════════════════════════════════════ */
function applyRowSlide(row, idx, animate = true) {
  const track = document.getElementById(`rp-track-${row}`);
  if (!track) return;

  const total = rowState[row].keys.length;
  /* El track tiene width = total * 100% del wrap.
     Cada slide ocupa 100/total del track = 100% del wrap.
     Para mostrar el slide idx movemos xPercent = -(idx * 100/total) */
  const pct = -(idx * (100 / total));

  if (animate) {
    gsap.to(track, { xPercent: pct, duration: 0.32, ease: 'power3.inOut' });
  } else {
    gsap.set(track, { xPercent: pct });
  }

  /* Actualizar counter */
  const counter = document.getElementById(`rp-counter-${row}`);
  if (counter) {
    counter.innerHTML = `<strong>${idx + 1}</strong> / ${total}`;
  }

  /* Actualizar estado de flechas */
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
   Cuando se elimina un filtro de patología desde el
   topbar o sidebar, verificar si la fila ya no tiene
   selecciones y cerrar el panel.
══════════════════════════════════════════════════ */
function syncRowPanelsAfterFilterChange() {
  [1, 2].forEach(row => {
    const start = (row - 1) * 4;
    const keysInRow = PATOLOGIA_INFO.slice(start, start + 4).map(p => p.key);

    /* Filtrar rowState.keys para quitar las que ya no están en state.filters.patologia */
    const newKeys = rowState[row].keys.filter(k => state.filters.patologia.has(k));

    /* Actualizar cards visuales */
    keysInRow.forEach(key => {
      const card = document.querySelector(`[data-pat-key="${key}"]`);
      if (card) card.classList.toggle('is-active', state.filters.patologia.has(key));
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
  if (countEl) countEl.textContent = `${results.length} pieza${results.length !== 1 ? 's' : ''}`;

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
  const patMeta  = VOCABULARIO.patologia?.[pieza.patologia] || { icon: '', label: pieza.patologia, color: '#ccc' };
  const sexMeta  = VOCABULARIO.sexo?.[pieza.sexo]        || { icon: '', label: pieza.sexo };
  const epocMeta = VOCABULARIO.epoca?.[pieza.epoca]      || { icon: '', label: pieza.epoca };

  const card = document.createElement('article');
  card.className = 'result-card';
  card.style.animationDelay = `${index * 0.04}s`;

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

  /* Deseleccionar cards visuales */
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
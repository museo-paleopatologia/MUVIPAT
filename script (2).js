/* =============================================
   MUSEO VIRTUAL DE PALEOPATOLOGÍA – UAM
   script.js
   ============================================= */

'use strict';

/* ─── DATA ───────────────────────────────────── */
const SPECIMENS = [
  {
    id: 'UAM-001',
    name: 'Cráneo con trepanación',
    region: 'Cráneo',
    pathology: 'Traumática',
    dating: 'Bronce Medio (c. 1600–1200 a.C.)',
    icon: '💀',
    desc_macro: 'Cráneo adulto con orificio circular de 32 mm de diámetro en el parietal derecho, bordes redondeados y cicatrizados. Señales de supervivencia post-quirúrgica evidentes.',
    diagnosis: 'Trepanación intencional con recuperación del individuo, posiblemente de carácter terapéutico o ritual. Los márgenes osificados indican supervivencia prolongada.',
    references: ['Aufderheide & Rodríguez-Martín 1998', 'Walker 2001'],
    related: ['UAM-002', 'UAM-007']
  },
  {
    id: 'UAM-002',
    name: 'Fémur con fractura consolidada',
    region: 'Extremidades Inferiores',
    pathology: 'Traumática',
    dating: 'Hierro I (c. 950–750 a.C.)',
    icon: '🦴',
    desc_macro: 'Fémur derecho adulto con callo óseo hipertrófico en el tercio medio diafisario. Acortamiento de 18 mm y angulación leve en varo. Superficie perióstica reactiva.',
    diagnosis: 'Fractura diafisaria consolidada con desplazamiento secundario. El callo exuberante y la angulación sugieren ausencia de reducción formal.',
    references: ['Roberts & Manchester 2005', 'Mays 1998'],
    related: ['UAM-001', 'UAM-008']
  },
  {
    id: 'UAM-003',
    name: 'Vértebra con espondilitis tuberculosa',
    region: 'Tórax',
    pathology: 'Infecciosa',
    dating: 'Romano tardío (s. III–IV d.C.)',
    icon: '🦴',
    desc_macro: 'Vértebra torácica (T8) con colapso del cuerpo vertebral en cuña anterior, destrucción del disco intervertebral y fusión con T9. Patrón en «joroba» angular característico.',
    diagnosis: 'Mal de Pott (espondilitis tuberculosa). La deformación en cifosis angular y la afectación multi-vertebral son patognomónicas de infección por Mycobacterium tuberculosis.',
    references: ['Aufderheide & Rodríguez-Martín 1998', 'Ortner 2003'],
    related: ['UAM-005', 'UAM-006']
  },
  {
    id: 'UAM-004',
    name: 'Coxal con artrosis avanzada',
    region: 'Extremidades Inferiores',
    pathology: 'Degenerativa',
    dating: 'Medieval (s. X–XII d.C.)',
    icon: '🦴',
    desc_macro: 'Coxal izquierdo con eburnación extensa del acetábulo, formación de osteofitos marginales de hasta 6 mm y remodelación de la superficie articular con áreas de esclerosis.',
    diagnosis: 'Osteoartrosis coxofemoral severa (grado IV). La eburnación bilateral y la remodelación articular indican una enfermedad de larga evolución con marcada limitación funcional.',
    references: ['Rogers & Waldron 1995', 'Jurmain 1999'],
    related: ['UAM-002', 'UAM-009']
  },
  {
    id: 'UAM-005',
    name: 'Tibia con periostitis',
    region: 'Extremidades Inferiores',
    pathology: 'Infecciosa',
    dating: 'Calcolítico (c. 2800–2200 a.C.)',
    icon: '🦴',
    desc_macro: 'Tibia derecha con depósito perióstico laminar en toda la diáfisis, superficie rugosa con estrías longitudinales y engrosamiento cortical. Coloración blanquecina en hueso nuevo.',
    diagnosis: 'Periostitis activa de origen infeccioso inespecífico, probablemente asociada a infección sistémica. El patrón bilateral sugerido es compatible con treponematosis u osteomielitis hematógena.',
    references: ['Roberts & Manchester 2005', 'Schultz 2001'],
    related: ['UAM-003', 'UAM-006']
  },
  {
    id: 'UAM-006',
    name: 'Maxilar con absceso dental',
    region: 'Cráneo',
    pathology: 'Dental',
    dating: 'Bronce Final (c. 1200–800 a.C.)',
    icon: '💀',
    desc_macro: 'Hemimaxilar derecho con perforación circular de 8 mm en la tabla ósea vestibular a nivel de M1 superior, bordes irregulares y porosos. Pérdida dental ante-mortem adyacente.',
    diagnosis: 'Absceso periapical crónico con fistulización. La reabsorción alveolar severa y la PDAM del diente adyacente indican enfermedad periodontal concomitante avanzada.',
    references: ['Hillson 2001', 'Alt et al. 1998'],
    related: ['UAM-001', 'UAM-010']
  },
  {
    id: 'UAM-007',
    name: 'Radio con hiperostosis',
    region: 'Extremidades Superiores',
    pathology: 'Metabólica',
    dating: 'Romano (s. I–II d.C.)',
    icon: '🦴',
    desc_macro: 'Radio derecho con engrosamiento cortical simétrico, textura densa y homogénea, sin diferenciación córtico-medular clara. Longitud normal sin deformidades angulares.',
    diagnosis: 'Hiperostosis cortical compatible con hipervitaminosis A crónica o intoxicación por flúor. El patrón simétrico y la homogeneidad cortical son criterios diagnósticos relevantes.',
    references: ['Ortner 2003', 'Stuart-Macadam 1989'],
    related: ['UAM-007', 'UAM-004']
  },
  {
    id: 'UAM-008',
    name: 'Cráneo infantil con cribra orbitalia',
    region: 'Cráneo',
    pathology: 'Metabólica',
    dating: 'Visigodo (s. V–VII d.C.)',
    icon: '💀',
    desc_macro: 'Cráneo inmaduro (5–8 años estimados) con lesiones poróticas bilaterales en ambas órbitas. Aspecto «criboso» con múltiples fenestraciones de 0.5–2 mm sobre el techo orbitario.',
    diagnosis: 'Cribra orbitalia activa, indicadora de anemia ferropénica o deficiencia de vitamina B12. Hallazgo frecuente en poblaciones infantiles con déficit nutricional crónico.',
    references: ['Stuart-Macadam 1989', 'Walker et al. 2009'],
    related: ['UAM-006', 'UAM-003']
  },
  {
    id: 'UAM-009',
    name: 'Costilla con lesión neoplásica',
    region: 'Tórax',
    pathology: 'Neoplásica',
    dating: 'Medieval tardío (s. XIII–XV d.C.)',
    icon: '🦴',
    desc_macro: 'Fragmento de 3ª costilla derecha con masa osteolítica irregular de 25×18 mm, bordes mal definidos, destrucción trabecular y ruptura de la cortical. Sin márgenes escleróticos.',
    diagnosis: 'Lesión osteolítica agresiva compatible con metástasis ósea de carcinoma primario desconocido, o mieloma múltiple. Los bordes apolillados y la ausencia de esclerosis apuntan a lesión de alta malignidad.',
    references: ['Strouhal 1991', 'Ortner 2003'],
    related: ['UAM-005', 'UAM-010']
  },
  {
    id: 'UAM-010',
    name: 'Húmero con displasia congénita',
    region: 'Extremidades Superiores',
    pathology: 'Congénita',
    dating: 'Edad del Hierro (c. 800–400 a.C.)',
    icon: '🦴',
    desc_macro: 'Húmero izquierdo con acortamiento del 40% respecto al contralateral, diáfisis fusiforme, cabeza humeral hipoplásica y troquíter rudimentario. Superficie articular irregular con remodelación adaptativa.',
    diagnosis: 'Focomelia parcial o hipoplasia humeral severa de origen congénito. La remodelación articular adaptativa indica sobrevida y uso funcional compensatorio del miembro.',
    references: ['Barnes 1994', 'Aufderheide & Rodríguez-Martín 1998'],
    related: ['UAM-007', 'UAM-002']
  }
];

const PATHOLOGIES = [
  { id: 'Traumática', name: 'Traumática', icon: '⚡', count: 2, color: '#C8860A',
    desc: 'Lesiones derivadas de impactos mecánicos, fracturas y heridas. Incluyen trepanaciones, fracturas consolidadas y marcas de violencia interpersonal.',
    examples: ['Trepanaciones', 'Fracturas', 'Luxaciones', 'Marcas de corte'] },
  { id: 'Infecciosa', name: 'Infecciosa', icon: '🦠', count: 2, color: '#8B3A2A',
    desc: 'Enfermedades causadas por agentes microbiológicos que dejan huella en el esqueleto. Tuberculosis, treponematosis y osteomielitis.',
    examples: ['Tuberculosis', 'Periostitis', 'Osteomielitis', 'Treponematosis'] },
  { id: 'Degenerativa', name: 'Degenerativa', icon: '🔄', count: 1, color: '#6A8B7A',
    desc: 'Cambios articulares y vertebrales por desgaste progresivo. Reflejan actividad física, edad y condiciones de vida.',
    examples: ['Osteoartrosis', 'Osteofitosis', 'Espondilosis', 'Eburnación'] },
  { id: 'Metabólica', name: 'Metabólica', icon: '⚗️', count: 2, color: '#4A6B5A',
    desc: 'Alteraciones por déficits nutricionales o desequilibrios metabólicos. Evidencian condiciones socioeconómicas y dieta de las poblaciones.',
    examples: ['Cribra orbitalia', 'Raquitismo', 'Escorbuto', 'Hiperostosis'] },
  { id: 'Neoplásica', name: 'Neoplásica', icon: '🔬', count: 1, color: '#718096',
    desc: 'Tumores óseos primarios y secundarios. Permiten rastrear la historia del cáncer en poblaciones pasadas.',
    examples: ['Osteoma', 'Metástasis', 'Mieloma', 'Osteosarcoma'] },
  { id: 'Dental', name: 'Dental', icon: '🦷', count: 1, color: '#B04A38',
    desc: 'Patologías de los dientes y alvéolos: caries, abscesos, hipoplasias del esmalte y enfermedad periodontal.',
    examples: ['Caries', 'Abscesos', 'Hipoplasia', 'PDAM'] },
  { id: 'Congénita', name: 'Congénita', icon: '🧬', count: 1, color: '#C8860A',
    desc: 'Anomalías estructurales presentes desde el nacimiento, reflejando variaciones del desarrollo esquelético.',
    examples: ['Displasia', 'Focomelia', 'Espina bífida', 'Sinostosis'] }
];

const CONCEPTS = [
  { icon: '🏛️', name: 'Paleopatología', text: 'La paleopatología es la disciplina que estudia las enfermedades y condiciones patológicas en restos biológicos de poblaciones del pasado. Integra conocimientos de medicina, biología, arqueología y antropología para reconstruir el estado de salud y enfermedad de comunidades extintas.' },
  { icon: '🔍', name: 'Metodología', text: 'El análisis macroscópico, la radiología convencional, la tomografía computerizada y la histología ósea constituyen las principales herramientas del paleopatólogo. Cada hallazgo debe contextualizarse arqueológicamente y compararse con series de referencia modernas.' },
  { icon: '🦴', name: 'Osteología Humana', text: 'El esqueleto humano adulto comprende 206 huesos divididos en esqueleto axial (cráneo, columna, costillas y esternón) y esqueleto apendicular (cinturas y extremidades). Cada hueso presenta una morfología característica que permite su identificación, lateralización y estimación de edad y sexo.' },
  { icon: '🔬', name: 'Diagnóstico Diferencial', text: 'El diagnóstico en paleopatología sigue un proceso hipotético-deductivo: descripción macroscópica, clasificación de la lesión (lítica, proliferativa, mixta), distribución esquelética y comparación con patrones de referencia. La ambigüedad diagnóstica es inherente al registro arqueológico.' },
  { icon: '📊', name: 'Indicadores de Salud', text: 'Los marcadores de estrés óseo —cribra orbitalia, hipoplasias del esmalte, periostitis— permiten evaluar las condiciones de vida de una población: nutrición, exposición a enfermedades infecciosas y carga de trabajo físico. Son indicadores indirectos de bienestar biocultural.' }
];

const BIBLIOGRAPHY = [
  { category: 'Manuales Fundamentales', entries: [
    { authors: 'Aufderheide, A.C. y Rodríguez-Martín, C.', year: '1998', title: 'The Cambridge Encyclopedia of Human Paleopathology', place: 'Cambridge University Press' },
    { authors: 'Ortner, D.J.', year: '2003', title: 'Identification of Pathological Conditions in Human Skeletal Remains', place: 'Academic Press, San Diego' },
    { authors: 'Roberts, C. y Manchester, K.', year: '2005', title: 'The Archaeology of Disease', place: 'Sutton Publishing, Stroud' }
  ]},
  { category: 'Osteología y Metodología', entries: [
    { authors: 'Buikstra, J.E. y Ubelaker, D.H.', year: '1994', title: 'Standards for Data Collection from Human Skeletal Remains', place: 'Arkansas Archaeological Survey' },
    { authors: 'White, T.D. y Folkens, P.A.', year: '2005', title: 'The Human Bone Manual', place: 'Elsevier Academic Press' },
    { authors: 'Mays, S.', year: '1998', title: 'The Archaeology of Human Bones', place: 'Routledge, Londres' }
  ]},
  { category: 'Artículos Especializados', entries: [
    { authors: 'Walker, P.L.', year: '2001', title: 'A bioarchaeological perspective on the history of violence in prehistoric societies', place: 'Annual Review of Anthropology, 30: 573–596' },
    { authors: 'Stuart-Macadam, P.', year: '1989', title: 'Porotic hyperostosis: relationship between orbital and vault lesions', place: 'American Journal of Physical Anthropology, 80: 187–193' },
    { authors: 'Walker, P.L. et al.', year: '2009', title: 'The causes of porotic hyperostosis and cribra orbitalia: a reappraisal', place: 'American Journal of Physical Anthropology, 139: 109–125' }
  ]}
];

const QUIZ_QUESTIONS = [
  { q: '¿Qué disciplina estudia las enfermedades en restos óseos arqueológicos?', opts: ['Osteometría', 'Paleopatología', 'Arqueozoología', 'Tafonomía'], correct: 1, explanation: 'La paleopatología es la disciplina que estudia las enfermedades y condiciones patológicas en restos biológicos de poblaciones del pasado.' },
  { q: '¿Cómo se denomina la lesión porótica en el techo de las órbitas oculares?', opts: ['Hiperostosis', 'Cribra orbitalia', 'Periostitis', 'Eburnación'], correct: 1, explanation: 'La cribra orbitalia es una lesión porótica del techo orbitario asociada a anemias nutricionales, especialmente déficit de hierro.' },
  { q: '¿Cuál es el término para describir la pulición de la superficie articular por contacto hueso-hueso?', opts: ['Osteofitosis', 'Esclerosis', 'Eburnación', 'Lisis'], correct: 2, explanation: 'La eburnación es el aspecto brillante y pulido que adquiere la superficie articular cuando el cartílago se destruye y los huesos contactan directamente.' },
  { q: '¿Qué nombre recibe la cirugía craneal practicada en épocas prehistóricas?', opts: ['Craneotomía', 'Lobotomía', 'Trepanación', 'Craneoplastia'], correct: 2, explanation: 'La trepanación es la perforación intencional del cráneo. Es una de las intervenciones quirúrgicas más antiguas conocidas, con evidencias desde el Neolítico.' },
  { q: '¿Qué infección provoca el "Mal de Pott"?', opts: ['Treponema pallidum', 'Mycobacterium tuberculosis', 'Staphylococcus aureus', 'Brucella spp.'], correct: 1, explanation: 'El Mal de Pott es la espondilitis tuberculosa causada por Mycobacterium tuberculosis. Afecta preferentemente a vértebras torácicas bajas y lumbares.' }
];

const NEWS_DATA = [
  { date: 'Marzo 2024', title: 'Nuevos hallazgos en el yacimiento de La Paloma (Asturias)', excerpt: 'El equipo del LAPP-UAM documenta lesiones traumáticas inéditas en individuos del Solutrense, abriendo nuevos interrogantes sobre violencia en el Paleolítico Superior ibérico.', tags: ['LAPP', 'Paleolítico', 'Traumatismo'], icon: '🏔️' },
  { date: 'Enero 2024', title: 'Publicación en el Journal of Archaeological Science', excerpt: 'Investigadores del Departamento de Antropología publican un estudio sobre indicadores de estrés metabólico en poblaciones medievales castellanas basado en 340 individuos.', tags: ['Publicación', 'Medieval', 'Nutrición'], icon: '📄' },
  { date: 'Noviembre 2023', title: 'Exposición temporal: "Huellas de vida"', excerpt: 'El Museo de Ciencias Naturales de Madrid acoge una muestra itinerante con réplicas 3D de las piezas más destacadas de la colección paleopatológica de la UAM.', tags: ['Exposición', 'Divulgación', '3D'], icon: '🏛️' },
  { date: 'Octubre 2023', title: 'Colaboración internacional con la Universidad de Durham', excerpt: 'Se formaliza un convenio de investigación conjunta para el estudio comparativo de tuberculosis en poblaciones romano-medievales de la Península Ibérica y Gran Bretaña.', tags: ['Internacional', 'Tuberculosis', 'Romano'], icon: '🤝' }
];

/* ─── APP STATE ──────────────────────────────── */
let state = {
  currentPage: 'home',
  filters: { region: null, pathology: null },
  currentBone: null,
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: false,
  classroomTab: 'concepts',
  sliderDragging: false
};

/* ─── NAVIGATION ─────────────────────────────── */
function navigate(page, params = {}) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  
  // Update state
  state.currentPage = page;
  if (params.bone) state.currentBone = params.bone;
  if (params.region !== undefined) state.filters.region = params.region;
  if (params.pathology !== undefined) state.filters.pathology = params.pathology;
  
  // Show target page
  const target = document.getElementById(`page-${page}`);
  if (target) {
    target.classList.add('active');
    if (page === 'home') document.getElementById('hero')?.classList.add('active');
  } else if (page === 'home') {
    document.getElementById('hero').classList.add('active');
    document.getElementById('home-modules').classList.add('active');
    document.getElementById('site-footer').classList.add('active');
  }
  
  // Update nav active state
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === page);
  });
  
  // Render page content
  switch(page) {
    case 'home':       renderHome(); break;
    case 'anatomy':    renderAnatomy(params.region); break;
    case 'pathology':  renderPathology(); break;
    case 'collection': renderCollection(); break;
    case 'classroom':  renderClassroom(); break;
    case 'news':       renderNews(); break;
    case 'bone-detail': renderBoneDetail(params.bone); break;
  }
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ─── HOME ───────────────────────────────────── */
function renderHome() {
  // Ensure hero and home sections visible
  const hero = document.getElementById('hero');
  const mods = document.getElementById('home-modules');
  const footer = document.getElementById('site-footer');
  if (hero) hero.style.display = 'flex';
  if (mods) mods.style.display = 'block';
  if (footer) footer.style.display = 'block';
}

/* ─── ANATOMY ────────────────────────────────── */
function renderAnatomy(activeRegion) {
  const page = document.getElementById('page-anatomy');
  const regions = [...new Set(SPECIMENS.map(s => s.region))];
  const regionCounts = {};
  regions.forEach(r => { regionCounts[r] = SPECIMENS.filter(s => s.region === r).length; });

  const regionIcons = { 'Cráneo': '💀', 'Tórax': '🫁', 'Extremidades Superiores': '💪', 'Extremidades Inferiores': '🦵' };

  page.querySelector('.anatomy-regions').innerHTML = regions.map(r => `
    <button class="region-btn ${activeRegion === r ? 'active' : ''}" onclick="navigate('collection',{region:'${r}'})">
      <span class="region-btn-icon">${regionIcons[r] || '🦴'}</span>
      <span class="region-btn-text">
        <span class="region-btn-name">${r}</span>
        <span class="region-btn-count">${regionCounts[r]} piezas</span>
      </span>
      <span class="region-btn-arrow">→</span>
    </button>
  `).join('');

  // Update skeleton hotspots
  document.querySelectorAll('.hotspot').forEach(h => {
    h.classList.toggle('active', h.dataset.region === activeRegion);
  });
}

/* ─── PATHOLOGY ──────────────────────────────── */
function renderPathology() {
  const grid = document.getElementById('pathology-grid');
  if (!grid) return;
  grid.innerHTML = PATHOLOGIES.map(p => `
    <div class="path-card" style="--card-accent: ${p.color}" onclick="navigate('collection',{pathology:'${p.id}'})">
      <div class="path-card-header">
        <span class="path-icon">${p.icon}</span>
        <span class="path-count-badge">${p.count} piezas</span>
      </div>
      <div class="path-name">${p.name}</div>
      <div class="path-desc">${p.desc}</div>
      <div class="path-examples">
        ${p.examples.map(e => `<span class="path-example-tag">${e}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ─── COLLECTION ─────────────────────────────── */
function renderCollection() {
  renderFilterBar();
  renderSpecimens();
}

function renderFilterBar() {
  const regions = [...new Set(SPECIMENS.map(s => s.region))];
  const paths = [...new Set(SPECIMENS.map(s => s.pathology))];

  const regionChips = regions.map(r => `
    <button class="filter-chip ${state.filters.region === r ? 'active' : ''}" 
      onclick="toggleFilter('region','${r}')">${r}</button>
  `).join('');

  const pathChips = paths.map(p => `
    <button class="filter-chip ${state.filters.pathology === p ? 'active' : ''}" 
      onclick="toggleFilter('pathology','${p}')">${p}</button>
  `).join('');

  const filtered = getFilteredSpecimens();

  const bar = document.getElementById('filter-bar-inner');
  if (bar) {
    bar.innerHTML = `
      <span class="filter-label">Región</span>
      ${regionChips}
      <span class="filter-sep"></span>
      <span class="filter-label">Patología</span>
      ${pathChips}
      ${(state.filters.region || state.filters.pathology) ? '<button class="filter-clear" onclick="clearFilters()">✕ Limpiar</button>' : ''}
      <span class="filter-results">${filtered.length} resultado${filtered.length !== 1 ? 's' : ''}</span>
    `;
  }
}

function toggleFilter(type, value) {
  if (state.filters[type] === value) {
    state.filters[type] = null;
  } else {
    state.filters[type] = value;
  }
  renderFilterBar();
  renderSpecimens();
}

function clearFilters() {
  state.filters.region = null;
  state.filters.pathology = null;
  renderFilterBar();
  renderSpecimens();
}

function getFilteredSpecimens() {
  return SPECIMENS.filter(s => {
    if (state.filters.region && s.region !== state.filters.region) return false;
    if (state.filters.pathology && s.pathology !== state.filters.pathology) return false;
    return true;
  });
}

function renderSpecimens() {
  const grid = document.getElementById('specimens-grid');
  if (!grid) return;
  const filtered = getFilteredSpecimens();

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-results" style="grid-column:1/-1">
      <div class="no-results-icon">🔍</div>
      <p>No se encontraron piezas con los filtros seleccionados.</p>
      <button class="btn btn-outline" style="margin-top:1rem" onclick="clearFilters()">Limpiar filtros</button>
    </div>`;
    return;
  }

  grid.innerHTML = filtered.map(s => `
    <div class="specimen-card" onclick="navigate('bone-detail',{bone:'${s.id}'})">
      <div class="specimen-card-media">
        ${s.icon}
        <span class="specimen-card-region">${s.region}</span>
      </div>
      <div class="specimen-card-body">
        <div class="specimen-card-id">${s.id}</div>
        <div class="specimen-card-name">${s.name}</div>
        <div class="specimen-card-tags">
          <span class="spec-tag spec-tag-region" onclick="event.stopPropagation();navigate('collection',{region:'${s.region}'})">${s.region}</span>
          <span class="spec-tag spec-tag-path" onclick="event.stopPropagation();navigate('collection',{pathology:'${s.pathology}'})">${s.pathology}</span>
        </div>
        <div class="specimen-card-footer">
          <span>${s.dating}</span>
          <span>Ver detalle →</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* ─── BONE DETAIL ────────────────────────────── */
function renderBoneDetail(boneId) {
  const bone = SPECIMENS.find(s => s.id === boneId);
  if (!bone) return;
  state.currentBone = boneId;

  const page = document.getElementById('page-bone-detail');
  
  // Breadcrumb
  page.querySelector('.bone-breadcrumb').innerHTML = `
    <span class="breadcrumb-link" onclick="navigate('home')">Inicio</span>
    <span class="breadcrumb-sep">/</span>
    <span class="breadcrumb-link" onclick="navigate('collection')">Colección</span>
    <span class="breadcrumb-sep">/</span>
    <span class="breadcrumb-current">${bone.name}</span>
  `;

  // Info table
  page.querySelector('.bone-info-table').innerHTML = `
    <div class="bone-info-row">
      <div class="bone-info-label">Región</div>
      <div class="bone-info-value"><a onclick="navigate('collection',{region:'${bone.region}'})">${bone.region}</a></div>
    </div>
    <div class="bone-info-row">
      <div class="bone-info-label">Patología</div>
      <div class="bone-info-value"><a onclick="navigate('collection',{pathology:'${bone.pathology}'})">${bone.pathology}</a></div>
    </div>
    <div class="bone-info-row">
      <div class="bone-info-label">Datación</div>
      <div class="bone-info-value">${bone.dating}</div>
    </div>
    <div class="bone-info-row">
      <div class="bone-info-label">Código</div>
      <div class="bone-info-value">${bone.id}</div>
    </div>
  `;

  // Main content
  page.querySelector('.bone-header').innerHTML = `
    <div class="bone-id">${bone.id} · Colección UAM</div>
    <div class="bone-title">${bone.name}</div>
    <div class="bone-tags-row">
      <span class="spec-tag spec-tag-region" style="cursor:pointer" onclick="navigate('collection',{region:'${bone.region}'})">${bone.region}</span>
      <span class="spec-tag spec-tag-path" style="cursor:pointer" onclick="navigate('collection',{pathology:'${bone.pathology}'})">${bone.pathology}</span>
    </div>
  `;

  page.querySelector('#bone-sections').innerHTML = `
    <div class="bone-section">
      <div class="bone-section-title"><span>🔎</span> Descripción Macroscópica</div>
      <p class="bone-text">${bone.desc_macro}</p>
    </div>
    <div class="bone-section">
      <div class="bone-section-title"><span>📋</span> Diagnóstico</div>
      <p class="bone-text">${bone.diagnosis}</p>
    </div>
    <div class="bone-section">
      <div class="bone-section-title"><span>📐</span> Diagrama 2D / Localización</div>
      <div style="background:rgba(200,134,10,0.05);border-radius:8px;height:200px;display:flex;align-items:center;justify-content:center;color:var(--clr-slate-light);font-size:0.875rem;gap:0.5rem;border:1px dashed rgba(200,134,10,0.2)">
        <span style="font-size:2rem">${bone.icon}</span>
        <div><div style="font-weight:600;color:var(--clr-bone-dark)">Diagrama anotado</div><div>Localización de la lesión en el esqueleto</div></div>
      </div>
    </div>
    <div class="bone-section">
      <div class="bone-section-title"><span>↔️</span> Comparativa: Normal vs. Patológico</div>
      <div class="comparison-slider-wrapper" id="comparison-slider">
        <div class="comparison-panel comparison-before">
          <span style="font-size:1.5rem">🦴</span>
          <span style="font-size:0.875rem;color:var(--clr-bone-dark)">Hueso sano</span>
        </div>
        <div class="comparison-panel comparison-after" id="comp-after">
          <span style="font-size:1.5rem">${bone.icon}</span>
          <span style="font-size:0.875rem;color:var(--clr-bone-dark)">${bone.pathology}</span>
        </div>
        <div class="comparison-handle" id="comp-handle"></div>
        <span class="comparison-label comparison-label-before">Normal</span>
        <span class="comparison-label comparison-label-after">Patológico</span>
      </div>
      <p style="font-size:0.75rem;color:var(--clr-slate-light);margin-top:0.5rem;text-align:center">Arrastra para comparar</p>
    </div>
    <div class="bone-section">
      <div class="bone-section-title"><span>📚</span> Referencias Científicas</div>
      <div style="display:flex;flex-direction:column;gap:0.5rem">
        ${bone.references.map(r => `
          <div style="display:flex;align-items:center;gap:0.75rem;padding:0.75rem;background:rgba(232,220,200,0.03);border-radius:8px;border-left:2px solid rgba(200,134,10,0.3)">
            <span style="font-size:0.875rem;color:var(--clr-bone-dark)">${r}</span>
            <button class="btn btn-ghost" style="margin-left:auto;font-size:0.75rem" onclick="navigate('classroom');setClassroomTab('bibliography')">Ver →</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Related bones
  const related = SPECIMENS.filter(s => bone.related.includes(s.id));
  page.querySelector('#related-bones').innerHTML = related.map(s => `
    <div class="specimen-card" onclick="navigate('bone-detail',{bone:'${s.id}'})">
      <div class="specimen-card-media">
        ${s.icon}
        <span class="specimen-card-region">${s.region}</span>
      </div>
      <div class="specimen-card-body">
        <div class="specimen-card-id">${s.id}</div>
        <div class="specimen-card-name">${s.name}</div>
        <div class="specimen-card-tags">
          <span class="spec-tag spec-tag-path">${s.pathology}</span>
        </div>
      </div>
    </div>
  `).join('');

  // Init comparison slider
  initComparisonSlider();
}

function initComparisonSlider() {
  const wrapper = document.getElementById('comparison-slider');
  const after = document.getElementById('comp-after');
  const handle = document.getElementById('comp-handle');
  if (!wrapper || !after || !handle) return;

  let dragging = false;
  const updateSlider = (x) => {
    const rect = wrapper.getBoundingClientRect();
    const pct = Math.min(Math.max((x - rect.left) / rect.width * 100, 0), 100);
    after.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    handle.style.left = pct + '%';
  };

  wrapper.addEventListener('mousedown', e => { dragging = true; updateSlider(e.clientX); });
  wrapper.addEventListener('touchstart', e => { dragging = true; updateSlider(e.touches[0].clientX); });
  document.addEventListener('mousemove', e => { if (dragging) updateSlider(e.clientX); });
  document.addEventListener('touchmove', e => { if (dragging) updateSlider(e.touches[0].clientX); });
  document.addEventListener('mouseup', () => { dragging = false; });
  document.addEventListener('touchend', () => { dragging = false; });
}

/* ─── CLASSROOM ──────────────────────────────── */
function renderClassroom() {
  setClassroomTab(state.classroomTab);
}

function setClassroomTab(tab) {
  state.classroomTab = tab;
  document.querySelectorAll('.classroom-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  document.querySelectorAll('.classroom-panel').forEach(p => p.classList.toggle('active', p.id === `panel-${tab}`));

  if (tab === 'concepts') renderConcepts();
  if (tab === 'bibliography') renderBibliography();
  if (tab === 'resources') renderResources();
  if (tab === 'quiz') initQuiz();
}

function renderConcepts() {
  const el = document.getElementById('panel-concepts');
  if (!el) return;
  el.innerHTML = `
    <div class="container">
      ${CONCEPTS.map(c => `
        <div class="concept-card">
          <div class="concept-card-header">
            <span class="concept-icon">${c.icon}</span>
            <span class="concept-name">${c.name}</span>
          </div>
          <p class="concept-text">${c.text}</p>
        </div>
      `).join('')}
    </div>
  `;
}

function renderBibliography() {
  const el = document.getElementById('panel-bibliography');
  if (!el) return;
  el.innerHTML = `<div class="container">${
    BIBLIOGRAPHY.map(cat => `
      <div class="bib-section">
        <div class="bib-category">${cat.category}</div>
        ${cat.entries.map(e => `
          <div class="bib-entry">
            <span class="bib-authors">${e.authors}</span> (<span class="bib-year">${e.year}</span>).
            <span class="bib-title">${e.title}</span>. ${e.place}.
          </div>
        `).join('')}
      </div>
    `).join('')}
  </div>`;
}

function renderResources() {
  const el = document.getElementById('panel-resources');
  if (!el) return;
  const resources = [
    { type: '🎮 Quiz interactivo', title: 'Pon a prueba tus conocimientos', desc: 'Test de 5 preguntas sobre conceptos fundamentales de paleopatología.', action: "setClassroomTab('quiz')" },
    { type: '📄 Material descargable', title: 'Guía de reconocimiento óseo', desc: 'PDF con fichas de identificación de los principales huesos y sus patologías más frecuentes.', action: 'alert("Recurso en preparación")' },
    { type: '🗂️ Fichas didácticas', title: 'Glosario de paleopatología', desc: 'Más de 80 términos esenciales con definición, imagen de referencia y ejemplos de la colección.', action: 'alert("Recurso en preparación")' },
    { type: '🎬 Vídeo-documental', title: 'Un día en el laboratorio', desc: 'Reportaje audiovisual sobre el proceso de análisis de restos óseos en el LAPP-UAM.', action: 'alert("Próximamente disponible")' }
  ];
  el.innerHTML = `<div class="container"><div class="resources-grid">${
    resources.map(r => `
      <div class="resource-card" onclick="${r.action}">
        <div class="resource-type">${r.type}</div>
        <div class="resource-title">${r.title}</div>
        <div class="resource-desc">${r.desc}</div>
      </div>
    `).join('')}
  </div></div>`;
}

function initQuiz() {
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnswered = false;
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const el = document.getElementById('panel-quiz');
  if (!el) return;
  const q = QUIZ_QUESTIONS[state.quizIndex];
  const letters = ['A','B','C','D'];

  el.innerHTML = `<div class="container">
    <div class="quiz-wrapper">
      <div class="quiz-progress">
        <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${(state.quizIndex / QUIZ_QUESTIONS.length * 100)}%"></div></div>
        <span class="quiz-progress-text">Pregunta ${state.quizIndex + 1} / ${QUIZ_QUESTIONS.length}</span>
      </div>
      <div class="quiz-question">${q.q}</div>
      <div class="quiz-options">
        ${q.opts.map((o, i) => `
          <button class="quiz-option" id="opt-${i}" onclick="answerQuiz(${i})">
            <span class="quiz-option-letter">${letters[i]}</span>
            ${o}
          </button>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="quiz-feedback"></div>
      <button class="btn btn-primary" id="quiz-next" style="display:none" onclick="nextQuizQuestion()">
        ${state.quizIndex < QUIZ_QUESTIONS.length - 1 ? 'Siguiente pregunta →' : 'Ver resultado'}
      </button>
    </div>
  </div>`;
}

function answerQuiz(selectedIndex) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;

  const q = QUIZ_QUESTIONS[state.quizIndex];
  const opts = document.querySelectorAll('.quiz-option');
  const feedback = document.getElementById('quiz-feedback');
  const nextBtn = document.getElementById('quiz-next');

  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === q.correct) o.classList.add('correct');
    if (i === selectedIndex && i !== q.correct) o.classList.add('incorrect');
  });

  const isCorrect = selectedIndex === q.correct;
  if (isCorrect) state.quizScore++;

  feedback.textContent = isCorrect ? `✅ Correcto. ${q.explanation}` : `❌ Incorrecto. ${q.explanation}`;
  feedback.className = `quiz-feedback show ${isCorrect ? 'correct' : 'incorrect'}`;
  if (nextBtn) nextBtn.style.display = 'inline-flex';
}

function nextQuizQuestion() {
  state.quizIndex++;
  state.quizAnswered = false;

  if (state.quizIndex >= QUIZ_QUESTIONS.length) {
    showQuizResult();
  } else {
    renderQuizQuestion();
  }
}

function showQuizResult() {
  const el = document.getElementById('panel-quiz');
  if (!el) return;
  const pct = Math.round(state.quizScore / QUIZ_QUESTIONS.length * 100);
  const msg = pct >= 80 ? '¡Excelente! Dominas los fundamentos de la paleopatología.' : pct >= 60 ? 'Buen resultado. Repasa los conceptos básicos.' : 'Sigue estudiando. La colección virtual puede ayudarte.';

  el.innerHTML = `<div class="container"><div class="quiz-wrapper">
    <div class="quiz-result">
      <div class="quiz-result-score">${state.quizScore}/${QUIZ_QUESTIONS.length}</div>
      <div style="font-size:1.5rem;color:var(--clr-amber);margin:1rem 0">${pct}% de aciertos</div>
      <p style="color:var(--clr-bone-dark);margin-bottom:2rem">${msg}</p>
      <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-primary" onclick="initQuiz()">Repetir quiz</button>
        <button class="btn btn-outline" onclick="navigate('collection')">Explorar colección</button>
      </div>
    </div>
  </div></div>`;
}

/* ─── NEWS ───────────────────────────────────── */
function renderNews() {
  const list = document.getElementById('news-list');
  if (!list) return;
  list.innerHTML = NEWS_DATA.map(n => `
    <div class="news-card">
      <div class="news-card-media">${n.icon}</div>
      <div class="news-card-body">
        <div class="news-date">${n.date}</div>
        <div class="news-title">${n.title}</div>
        <div class="news-excerpt">${n.excerpt}</div>
        <div class="news-tags">${n.tags.map(t => `<span class="news-tag">${t}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');
}

/* ─── SEARCH ─────────────────────────────────── */
function openSearch() {
  document.getElementById('search-overlay').classList.add('open');
  document.getElementById('search-input').focus();
}
function closeSearch() { document.getElementById('search-overlay').classList.remove('open'); }

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeSearch();
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
});

/* ─── MOBILE MENU ────────────────────────────── */
function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

/* ─── INIT ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Wire up nav clicks
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', () => {
      navigate(el.dataset.page);
      document.getElementById('mobile-menu')?.classList.remove('open');
    });
  });

  // Wire skeleton hotspots
  document.querySelectorAll('.hotspot').forEach(h => {
    h.addEventListener('click', () => {
      navigate('collection', { region: h.dataset.region });
    });
  });

  // Wire module cards
  document.querySelectorAll('[data-module]').forEach(el => {
    el.addEventListener('click', () => navigate(el.dataset.module));
  });

  // Wire classroom tabs
  document.querySelectorAll('.classroom-tab').forEach(t => {
    t.addEventListener('click', () => setClassroomTab(t.dataset.tab));
  });

  // Hero scroll hint
  document.getElementById('hero-scroll-hint')?.addEventListener('click', () => {
    document.getElementById('home-modules')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Initial render
  navigate('home');
});

/**
 * PaleoMuseo · data.js
 * Base de datos central: PIEZAS, VOCABULARIO, GLOSARIO
 */

/* ═══════════════════════════════════════════════════════
   PIEZAS — colección paleopatológica
═══════════════════════════════════════════════════════ */
const PIEZAS = [
  {
    id: 'OV-001',
    nombre: 'Cráneo con trepanación curada',
    region: 'craneo',
    patologia: 'trauma',
    sexo: 'masculino',
    epoca: 'prehistoria',
    yacimiento: 'Cueva de los Murciélagos, Granada',
    descripcion: 'Trepanación circular de 35 mm en el parietal derecho con bordes completamente remodelados. Evidencia de supervivencia prolongada post-intervención.',
    imagen: null,
    ficha: '/prueba-museo/ficha-maestra.html?id=OV-001'
  },
  {
    id: 'OV-002',
    nombre: 'Fémur con fractura consolidada',
    region: 'miembro-inferior',
    patologia: 'trauma',
    sexo: 'femenino',
    epoca: 'medieval',
    yacimiento: 'Necrópolis de San Nicolás, Murcia',
    descripcion: 'Fractura diafisaria del fémur derecho con callo óseo exuberante y acortamiento de 2,3 cm. Posible deformidad funcional residual.',
    imagen: null,
    ficha: '/prueba-museo/ficha-estandar.html?id=OV-002'
  },
  {
    id: 'OV-003',
    nombre: 'Cribra orbitalia bilateral',
    region: 'craneo',
    patologia: 'metabolica',
    sexo: 'indeterminado',
    epoca: 'romano',
    yacimiento: 'Isturgi, Jaén',
    descripcion: 'Hiperostosis porótica en techo de ambas órbitas. Grado III según criterios de Steckel. Indicador de anemia ferropénica en edad infantil.',
    imagen: null,
    ficha: '/prueba-museo/ficha-estandar.html?id=OV-003'
  },
  {
    id: 'OV-004',
    nombre: 'Vértebra con espondilitis tuberculosa',
    region: 'columna',
    patologia: 'infecciosa',
    sexo: 'masculino',
    epoca: 'medieval',
    yacimiento: 'Monasterio de Suso, La Rioja',
    descripcion: 'Colapso del cuerpo vertebral T8-T9 con fusión angular (giba). Destrucción del disco intervertebral y formación de absceso paravertebral. Mal de Pott confirmado.',
    imagen: null,
    ficha: '/prueba-museo/ficha-maestra.html?id=OV-004'
  },
  {
    id: 'OV-005',
    nombre: 'Pelvis con sacralización de L5',
    region: 'pelvis',
    patologia: 'congenita',
    sexo: 'masculino',
    epoca: 'moderno',
    yacimiento: 'Cementerio de Poblet, Tarragona',
    descripcion: 'Fusión unilateral de L5 al sacro con esclerosis de la articulación sacroilíaca ipsilateral. Variante anatómica con posible correlato doloroso.',
    imagen: null,
    ficha: '/prueba-museo/ficha-estandar.html?id=OV-005'
  },
  {
    id: 'OV-006',
    nombre: 'Húmero con entesopatía severa',
    region: 'miembro-superior',
    patologia: 'marcador',
    sexo: 'masculino',
    epoca: 'romano',
    yacimiento: 'Barcino, Barcelona',
    descripcion: 'Robustez cortical extrema y proliferación ósea en inserción del deltoides. Compatible con actividad física intensa y repetitiva. Posible remero o trabajador portuario.',
    imagen: null,
    ficha: '/prueba-museo/ficha-estandar.html?id=OV-006'
  },
  {
    id: 'OV-007',
    nombre: 'Costillas con lesiones periósticas',
    region: 'torax',
    patologia: 'infecciosa',
    sexo: 'femenino',
    epoca: 'medieval',
    yacimiento: 'La Olmeda, Palencia',
    descripcion: 'Formación de hueso nuevo laminar en la cara visceral de costillas 4-7 bilaterales. Probable tuberculosis pulmonar o pleuritis crónica.',
    imagen: null,
    ficha: '/prueba-museo/ficha-estandar.html?id=OV-007'
  },
  {
    id: 'OV-008',
    nombre: 'Rótula con osteoartritis avanzada',
    region: 'miembro-inferior',
    patologia: 'degenerativa',
    sexo: 'femenino',
    epoca: 'moderno',
    yacimiento: 'San Millán de la Cogolla, La Rioja',
    descripcion: 'Erosión del cartílago articular con eburnación, osteofitosis marginal y quistes subcondrales. Estadio 4 de Kellgren-Lawrence. Individuo >55 años.',
    imagen: null,
    ficha: '/prueba-museo/ficha-estandar.html?id=OV-008'
  },
  {
    id: 'OV-009',
    nombre: 'Mandíbula con absceso alveolar',
    region: 'craneo',
    patologia: 'infecciosa',
    sexo: 'indeterminado',
    epoca: 'prehistoria',
    yacimiento: 'Los Millares, Almería',
    descripcion: 'Orificio de drenaje en el alveolo del primer molar inferior. Reabsorción ósea periapical intensa con pérdida de diente en vida. Evidencia de enfermedad periodontal.',
    imagen: null,
    ficha: '/prueba-museo/ficha-estandar.html?id=OV-009'
  },
  {
    id: 'OV-010',
    nombre: 'Radio con fractura de Colles',
    region: 'miembro-superior',
    patologia: 'trauma',
    sexo: 'femenino',
    epoca: 'moderno',
    yacimiento: 'Cementerio de San Isidro, Madrid',
    descripcion: 'Fractura distal del radio en patrón de Colles con desplazamiento dorsal. Consolidación en posición viciosa con limitación funcional de la muñeca.',
    imagen: null,
    ficha: '/prueba-museo/ficha-estandar.html?id=OV-010'
  },
  {
    id: 'OV-011',
    nombre: 'Columna lumbar con escoliosis',
    region: 'columna',
    patologia: 'congenita',
    sexo: 'femenino',
    epoca: 'medieval',
    yacimiento: 'Necrópolis de Recópolis, Guadalajara',
    descripcion: 'Curvatura lateral del raquis lumbar con cuña vertebral en L3. Rotación axial de los cuerpos vertebrales. Ángulo de Cobb estimado en 35°.',
    imagen: null,
    ficha: '/prueba-museo/ficha-estandar.html?id=OV-011'
  },
  {
    id: 'OV-012',
    nombre: 'Húmero con osteomielitis hematógena',
    region: 'miembro-superior',
    patologia: 'infecciosa',
    sexo: 'masculino',
    epoca: 'romano',
    yacimiento: 'Caesaraugusta, Zaragoza',
    descripcion: 'Involucro óseo periférico con secuestro central y fistulación cloacal. Proceso infeccioso crónico de Staphylococcus sp. compatible. Reacción perióstica extensa.',
    imagen: null,
    ficha: '/prueba-museo/ficha-maestra.html?id=OV-012'
  },
  {
    id: 'OV-013',
    nombre: 'Escápula con nódulos de Schmörl',
    region: 'torax',
    patologia: 'degenerativa',
    sexo: 'masculino',
    epoca: 'prehistoria',
    yacimiento: 'El Argar, Almería',
    descripcion: 'Hernias discales calcificadas en platillos vertebrales T6-T10. Indicador de cargas axiales repetidas sobre la columna dorsal. Patrón compatible con trabajo agrícola.',
    imagen: null,
    ficha: '/prueba-museo/ficha-estandar.html?id=OV-013'
  },
  {
    id: 'OV-014',
    nombre: 'Tibia con raquitismo',
    region: 'miembro-inferior',
    patologia: 'metabolica',
    sexo: 'indeterminado',
    epoca: 'medieval',
    yacimiento: 'Toledo, casco histórico',
    descripcion: 'Incurvación anterior y medial de la diáfisis tibial (tibia en sable). Porosidad cortical generalizada. Hipovitaminosis D severa en la infancia. Individuo subadulto.',
    imagen: null,
    ficha: '/prueba-museo/ficha-estandar.html?id=OV-014'
  },
  {
    id: 'OV-015',
    nombre: 'Pelvis con artritis séptica',
    region: 'pelvis',
    patologia: 'infecciosa',
    sexo: 'masculino',
    epoca: 'romano',
    yacimiento: 'Emerita Augusta, Mérida',
    descripcion: 'Destrucción de la articulación coxofemoral izquierda con anquilosis fibrosa. Superficie articular del acetábulo completamente erosionada. Posible complicación de herida de guerra.',
    imagen: null,
    ficha: '/prueba-museo/ficha-maestra.html?id=OV-015'
  },
  {
    id: 'OV-016',
    nombre: 'Cráneo con trauma contuso perimortem',
    region: 'craneo',
    patologia: 'trauma',
    sexo: 'masculino',
    epoca: 'medieval',
    yacimiento: 'Batalla de Nájera, La Rioja',
    descripcion: 'Fractura deprimida en el parietal izquierdo con patrón radial. Ausencia de remodelación ósea. Lesión perimortem por objeto contundente. Contexto de violencia interpersonal.',
    imagen: null,
    ficha: '/prueba-museo/ficha-maestra.html?id=OV-016'
  }
];

/* ═══════════════════════════════════════════════════════
   VOCABULARIO — labels e iconos para la UI del explorador
═══════════════════════════════════════════════════════ */
const VOCABULARIO = {
  region: {
    craneo:             { label: 'Cráneo',            icon: '💀' },
    columna:            { label: 'Columna vertebral',  icon: '🦴' },
    torax:              { label: 'Tórax / Costillas',  icon: '🫁' },
    'miembro-superior': { label: 'Miembro superior',   icon: '💪' },
    pelvis:             { label: 'Pelvis',              icon: '🦵' },
    'miembro-inferior': { label: 'Miembro inferior',   icon: '🦿' }
  },
  patologia: {
    trauma:       { label: 'Traumatismos',            icon: '⚡', color: '#FF4D6D' },
    infecciosa:   { label: 'Infecciosas',             icon: '🦠', color: '#00E5FF' },
    metabolica:   { label: 'Metabólicas',             icon: '🔬', color: '#C6E800' },
    degenerativa: { label: 'Degenerativas',           icon: '⚙️', color: '#FFB300' },
    congenita:    { label: 'Congénitas',              icon: '🧬', color: '#FF6EB4' },
    marcador:     { label: 'Marcadores de actividad', icon: '💪', color: '#3D5AFE' }
  },
  sexo: {
    masculino:     { label: 'Masculino',     icon: '♂' },
    femenino:      { label: 'Femenino',      icon: '♀' },
    indeterminado: { label: 'Indeterminado', icon: '◎' }
  },
  epoca: {
    prehistoria: { label: 'Prehistoria',   range: '—3000 a.C.' },
    romano:      { label: 'Época romana',  range: 'I–V d.C.' },
    medieval:    { label: 'Edad Media',    range: 'V–XV d.C.' },
    moderno:     { label: 'Época moderna', range: 'XVI–XIX d.C.' }
  }
};

/* ═══════════════════════════════════════════════════════
   GLOSARIO — 35 términos paleopatológicos
   Campos:
     term  → nombre del término (usado para anclas y búsqueda)
     slug  → versión URL-friendly para anclas (#trepanacion)
     cat   → categoría: 'anatomia' | 'patologia' | 'metodo' | 'cronologia'
     def   → definición completa
═══════════════════════════════════════════════════════ */
const GLOSARIO = [
  { term: 'Paleopatología',       slug: 'paleopatologia',      cat: 'metodo',     def: 'Disciplina científica que estudia las enfermedades y lesiones en restos esqueléticos y momias de poblaciones del pasado.' },
  { term: 'Trepanación',          slug: 'trepanacion',         cat: 'patologia',  def: 'Intervención quirúrgica que consiste en la perforación del cráneo mediante raspado, corte o taladro. Es la cirugía más antigua documentada arqueológicamente.' },
  { term: 'Cribra orbitalia',     slug: 'cribra-orbitalia',    cat: 'patologia',  def: 'Lesión hipervascular en forma de porosidad en el techo de las órbitas oculares, indicador de anemia ferropénica o déficit vitamínico durante la infancia.' },
  { term: 'Hiperostosis porótica',slug: 'hiperostosis-porotica',cat: 'patologia', def: 'Engrosamiento y porosidad de los huesos de la bóveda craneal, asociado a anemias hemolíticas, déficit nutricional o infecciones crónicas.' },
  { term: 'Periostitis',          slug: 'periostitis',         cat: 'patologia',  def: 'Inflamación del periostio que genera formación de hueso nuevo en la superficie cortical. Puede ser reactiva a infecciones, traumatismos o escorbuto.' },
  { term: 'Osteomielitis',        slug: 'osteomielitis',       cat: 'patologia',  def: 'Infección bacteriana del tejido óseo que provoca necrosis, formación de secuestro y cloaca de drenaje. Frecuentemente causada por Staphylococcus.' },
  { term: 'Espondilitis',         slug: 'espondilitis',        cat: 'patologia',  def: 'Inflamación de los cuerpos vertebrales. La espondilitis tuberculosa o Mal de Pott produce colapso vertebral con formación de giba angular.' },
  { term: 'Osteoartritis',        slug: 'osteoartritis',       cat: 'patologia',  def: 'Enfermedad degenerativa articular caracterizada por erosión del cartílago, eburnación, osteofitosis y quistes subcondrales. Indicador de edad avanzada y actividad física.' },
  { term: 'Entesopatía',          slug: 'entesopatia',        cat: 'patologia',  def: 'Alteración ósea en el punto de inserción de tendones o ligamentos. Usada como marcador de actividad ocupacional o deportiva intensa y repetitiva.' },
  { term: 'Raquitismo',           slug: 'raquitismo',          cat: 'patologia',  def: 'Alteración metabólica por déficit de vitamina D que produce reblandecimiento óseo, deformidades en huesos largos y porosidad generalizada. Afecta principalmente a individuos subadultos.' },
  { term: 'Norma faciei',         slug: 'norma-faciei',        cat: 'anatomia',   def: 'Vista frontal del cráneo utilizada para el análisis morfológico de la cara, órbitas, abertura nasal y arcos cigomáticos.' },
  { term: 'Norma verticalis',     slug: 'norma-verticalis',    cat: 'anatomia',   def: 'Vista superior del cráneo que permite apreciar la forma de la bóveda craneal, el índice cefálico y las suturas craneales.' },
  { term: 'Norma occipitalis',    slug: 'norma-occipitalis',   cat: 'anatomia',   def: 'Vista posterior del cráneo. Permite analizar el occipital, la protuberancia occipital externa y la anchura máxima del neurocráneo.' },
  { term: 'Índice cefálico',      slug: 'indice-cefalico',     cat: 'metodo',     def: 'Razón entre la anchura máxima y la longitud máxima del cráneo, multiplicada por 100. Clasifica los cráneos en dolicocéfalos (<75), mesocéfalos (75–80) y braquicéfalos (>80).' },
  { term: 'Dolicocéfalo',         slug: 'dolicocefalico',      cat: 'anatomia',   def: 'Morfología craneal con índice cefálico inferior a 75, caracterizada por una forma alargada anteroposterior.' },
  { term: 'Braquicéfalo',         slug: 'braquicefalico',      cat: 'anatomia',   def: 'Morfología craneal con índice cefálico superior a 80, caracterizada por una forma redondeada o ancha transversalmente.' },
  { term: 'Eburnación',           slug: 'eburnacion',          cat: 'patologia',  def: 'Pulido patológico de la superficie articular tras la destrucción total del cartílago. Produce un aspecto brillante y duro característico de la osteoartritis avanzada.' },
  { term: 'Osteofito',            slug: 'osteofito',           cat: 'patologia',  def: 'Proliferación ósea de neoformación en los márgenes articulares o en la superficie de los cuerpos vertebrales. Signo de degeneración articular.' },
  { term: 'Callo óseo',           slug: 'callo-oseo',          cat: 'patologia',  def: 'Tejido óseo de reparación que se forma durante la consolidación de una fractura. Su morfología permite estimar el tiempo transcurrido desde la lesión.' },
  { term: 'Fractura perimortem',  slug: 'fractura-perimortem', cat: 'patologia',  def: 'Fractura producida en el momento de la muerte o inmediatamente antes, cuando el hueso conserva aún sus propiedades biomecánicas de tejido vivo.' },
  { term: 'Fotogrametría',        slug: 'fotogrametria',       cat: 'metodo',     def: 'Técnica de digitalización 3D basada en la captura de múltiples fotografías desde distintos ángulos para reconstruir la geometría tridimensional del objeto.' },
  { term: 'Escáner de luz estructurada', slug: 'escaner-luz-estructurada', cat: 'metodo', def: 'Sistema de digitalización 3D que proyecta patrones de luz sobre la superficie del objeto y mide las deformaciones para calcular su geometría con alta precisión.' },
  { term: 'Sinostosis',           slug: 'sinostosis',          cat: 'anatomia',   def: 'Fusión ósea completa de estructuras que normalmente permanecen separadas, como las suturas craneales. Indicador de edad avanzada.' },
  { term: 'Marcador de actividad',slug: 'marcador-actividad',  cat: 'patologia',  def: 'Alteración ósea —entesopatía, asimetría, hipertrofia cortical— que refleja patrones de esfuerzo físico repetitivo y permite inferir actividades ocupacionales.' },
  { term: 'Sutura sagital',       slug: 'sutura-sagital',      cat: 'anatomia',   def: 'Sutura craneal que une los dos huesos parietales en la línea media. Su grado de fusión se usa para estimar la edad biológica.' },
  { term: 'Absceso alveolar',     slug: 'absceso-alveolar',    cat: 'patologia',  def: 'Acumulación de pus en el alveolo dentario por infección periapical. Genera un orificio de drenaje en el hueso mandibular o maxilar.' },
  { term: 'Neolítico',            slug: 'neolitico',           cat: 'cronologia', def: 'Período prehistórico caracterizado por la aparición de la agricultura, la ganadería y los asentamientos permanentes. En la Península Ibérica: c. 5500–2200 a.C.' },
  { term: 'Bioarqueología',       slug: 'bioarqueologia',      cat: 'metodo',     def: 'Disciplina que integra el análisis de restos humanos con el contexto arqueológico para reconstruir las condiciones de vida, salud y comportamiento de las poblaciones del pasado.' },
  { term: 'Sexo biológico',       slug: 'sexo-biologico',      cat: 'metodo',     def: 'Determinación del sexo de un individuo a partir de caracteres morfológicos del esqueleto, principalmente pelvis y cráneo. Se expresa como masculino, femenino o indeterminado.' },
  { term: 'Edad biológica',       slug: 'edad-biologica',      cat: 'metodo',     def: 'Estimación de la edad al fallecimiento a partir de indicadores esqueléticos: fusión epifisaria, desgaste dental, sinostosis craneal y degeneración articular.' },
  { term: 'Sacralización',        slug: 'sacralizacion',       cat: 'patologia',  def: 'Variante anatómica en la que la última vértebra lumbar se fusiona parcial o totalmente al sacro, alterando la mecánica de la columna.' },
  { term: 'Escoliosis',           slug: 'escoliosis',          cat: 'patologia',  def: 'Desviación lateral del raquis con rotación axial de los cuerpos vertebrales. Puede ser congénita, idiopática o adquirida.' },
  { term: 'Índice de Kellgren-Lawrence', slug: 'kellgren-lawrence', cat: 'metodo', def: 'Escala radiológica de 0 a 4 que gradúa la severidad de la osteoartritis. El grado 4 implica pérdida severa del espacio articular con esclerosis y osteofitosis importantes.' },
  { term: 'Yacimiento',           slug: 'yacimiento',          cat: 'cronologia', def: 'Lugar donde se conservan restos arqueológicos. En contexto paleopatológico, determina la cronología, el grupo poblacional y las condiciones tafonómicas del material óseo.' },
  { term: 'Tafonomía',            slug: 'tafonomia',           cat: 'metodo',     def: 'Estudio de los procesos que afectan a los restos orgánicos desde la muerte hasta su excavación, incluyendo meteorización, fragmentación, tinción y dispersión.' },
];

/**
 * glosarioLink(texto) — utilidad compartida
 * Recorre el texto y envuelve los términos del glosario
 * en enlaces hacia aula.html#<slug>
 * Uso: elemento.innerHTML = glosarioLink(texto)
 */
function glosarioLink(texto) {
  if (!texto) return texto;
  let result = texto;
  // Ordenar por longitud descendente para evitar reemplazos parciales
  const sorted = [...GLOSARIO].sort((a, b) => b.term.length - a.term.length);
  sorted.forEach(entry => {
    // Evitar reemplazar dentro de un enlace ya existente
    const regex = new RegExp(`(?<!<[^>]*)\\b(${entry.term})\\b`, 'gi');
    result = result.replace(regex, (match) =>
      `<a href="/prueba-museo/aula.html#${entry.slug}" class="glos-link" title="${entry.def.slice(0, 80)}…">${match}</a>`
    );
  });
  return result;
}
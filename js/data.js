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
    trauma:       { label: 'Traumatismos',            icon: '⚡',  color: '#FF4D6D' },
    infecciosa:   { label: 'Infecciosas',             icon: '🦠',  color: '#00E5FF' },
    metabolica:   { label: 'Metabólicas',             icon: '🔬',  color: '#C6E800' },
    degenerativa: { label: 'Degenerativas',           icon: '⚙️', color: '#FFB300' },
    congenita:    { label: 'Congénitas',              icon: '🧬',  color: '#FF6EB4' },
    marcador:     { label: 'Marcadores de actividad', icon: '💪',  color: '#3D5AFE' }
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
   GLOSARIO
   Categorías:
     'orientacion' → Planos y Orientación Anatómica
     'anatomia'    → Anatomía y Estructura Ósea
     'proceso'     → Procesos de Dinámica Ósea
     'patologia'   → Categorías de Clasificación Paleopatológica
     'metodo'      → Metodología
     'cronologia'  → Cronología
   Campos:
     term   → nombre del término
     slug   → ancla URL (#slug)
     cat    → categoría (ver arriba)
     def    → definición completa
     fuente → (opcional) { label, url }
═══════════════════════════════════════════════════════ */
const GLOSARIO = [

  // ════════════════════════════════════════════════════
  // PLANOS Y ORIENTACIÓN ANATÓMICA
  // ════════════════════════════════════════════════════
  {
    term: 'Proximal', slug: 'proximal', cat: 'orientacion',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Próximo al punto de origen o inserción de una extremidad, de un vaso sanguíneo, de un vaso linfático o de un nervio. Generalmente por contraposición a distal.'
  },
  {
    term: 'Distal', slug: 'distal', cat: 'orientacion',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Alejado del punto de origen o inserción de una extremidad, de un vaso sanguíneo, de un vaso linfático o de un nervio. Generalmente por contraposición a proximal.'
  },
  {
    term: 'Medial', slug: 'medial', cat: 'orientacion',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Situado cerca de la línea media o del plano sagital medio. Sin.: interno. Generalmente por contraposición a lateral.'
  },
  {
    term: 'Lateral', slug: 'lateral', cat: 'orientacion',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Situado lejos de la línea media o del plano sagital medio. Sin.: externo. Generalmente por contraposición a medial.'
  },
  {
    term: 'Anterior', slug: 'anterior', cat: 'orientacion',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Situado en la parte anterior del cuerpo, por delante del plano coronal o frontal, o delante de otra estructura corporal. Sin.: frontal, ventral. En la cabeza se usa también con este sentido "rostral".'
  },
  {
    term: 'Posterior', slug: 'posterior', cat: 'orientacion',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Situado en la parte dorsal del cuerpo, es decir, por detrás del plano coronal o frontal, o detrás de otra estructura corporal. Sin.: dorsal.'
  },
  {
    term: 'Plano Sagital', slug: 'plano-sagital', cat: 'orientacion',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Plano de simetría longitudinal que pasa por la sutura sagital y divide el cuerpo en una mitad derecha y otra izquierda. Sin.: plano mediano, plano medio, plano mediosagital, plano sagital medio. Por extensión, cualquiera de los planos longitudinales paralelos al plano sagital medio. Sin.: plano paramediano, plano parasagital.'
  },
  {
    term: 'Plano Coronal', slug: 'plano-coronal', cat: 'orientacion',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Plano vertical perpendicular al plano sagital que atraviesa el cuerpo, en posición anatómica, de la cabeza a los pies y de derecha a izquierda, dividiendo el cuerpo en una parte anterior o facial y otra posterior o dorsal. Sin.: plano frontal.'
  },
  {
    term: 'Plano Transversal', slug: 'plano-transversal', cat: 'orientacion',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Plano perpendicular al eje longitudinal del cuerpo o de un segmento anatómico que lo divide en una parte superior y otra inferior. Sin.: plano axial, plano horizontal. Generalmente por contraposición a longitudinal.'
  },

  // ════════════════════════════════════════════════════
  // ANATOMÍA Y ESTRUCTURA ÓSEA
  // ════════════════════════════════════════════════════
  {
    term: 'Epífisis', slug: 'epifisis', cat: 'anatomia',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Extremidad articular de un hueso largo, nacida de un centro secundario de osificación y unida a la diáfisis. Hasta el final de la pubertad queda separada de la diáfisis por el cartílago de crecimiento.'
  },
  {
    term: 'Diáfisis', slug: 'diafisis', cat: 'anatomia',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Cuerpo o tallo de un hueso largo, desarrollado a partir de un centro de osificación primario y comprendido entre sus extremos o epífisis.'
  },
  {
    term: 'Metáfisis', slug: 'metafisis', cat: 'anatomia',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Zona de crecimiento de los huesos largos, adyacente al cartílago de crecimiento, situada entre la epífisis y la diáfisis. Sus límites se borran al alcanzar la vida adulta.'
  },
  {
    term: 'Apófisis', slug: 'apofisis', cat: 'anatomia',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Prominencia, saliente o eminencia natural de un hueso. Es lugar habitual de inserción muscular. Sin.: proceso.'
  },
  {
    term: 'Entesis', slug: 'entesis', cat: 'anatomia',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Conjunto de la inserción de tendones, ligamentos, fascias y cápsulas articulares en un hueso y de la zona ósea en que se insertan. Dos tipos: fibrosas (metáfisis y diáfisis) y fibrocartilaginosas (apófisis y epífisis). Funciones: anclaje de tejidos blandos, distribución de tensiones mecánicas y promoción del crecimiento óseo.'
  },
  {
    term: 'Foramen Nutricio', slug: 'foramen-nutricio', cat: 'anatomia',
    fuente: { label: 'IMAIOS', url: 'https://www.imaios.com/es/e-anatomy' },
    def: 'Pequeño orificio situado en la superficie de los huesos a través del cual pasan los vasos sanguíneos que nutren el tejido óseo. Las arterias nutricias penetran en el hueso compacto para suministrar nutrientes y oxígeno a la médula ósea y al propio hueso.'
  },
  {
    term: 'Periostio', slug: 'periostio', cat: 'anatomia',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Capa de tejido conjuntivo fibroelástico denso que constituye la capa más externa de los huesos, salvo en las superficies articulares. Consta de dos capas: una externa fibrosa y vascularizada, y una interna con células osteoprogenitoras que permiten la reparación de fracturas y el aumento de grosor óseo. Adherida al hueso por las fibras de Sharpey.'
  },
  {
    term: 'Endostio', slug: 'endostio', cat: 'anatomia',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Membrana de tejido conjuntivo que tapiza la cavidad medular de los huesos largos, la superficie de las trabéculas del tejido esponjoso y los conductos vasculares (Havers y Volkmann) del tejido compacto. Dotada de células osteoprogenitoras y osteoclastos. Sin.: periostio interno.'
  },
  {
    term: 'Hueso Cortical', slug: 'hueso-cortical', cat: 'anatomia',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Región de un hueso cuya estructura histológica está formada por tejido óseo compacto laminar. Predomina en la diáfisis de los huesos largos del adulto y en la periferia de los huesos planos. Sin.: hueso compacto, capa cortical, sustancia compacta, tejido óseo compacto.'
  },
  {
    term: 'Hueso Trabecular', slug: 'hueso-trabecular', cat: 'anatomia',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Tejido óseo formado por una trama tridimensional de trabéculas óseas que delimita espacios ocupados por la médula ósea. Sin.: hueso esponjoso.'
  },
  {
    term: 'Cavidad Medular', slug: 'cavidad-medular', cat: 'anatomia',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Cavidad diafisaria de los huesos largos que contiene la médula ósea y está revestida por el endostio. Sin.: canal medular.'
  },

  // ════════════════════════════════════════════════════
  // PROCESOS DE DINÁMICA ÓSEA
  // ════════════════════════════════════════════════════
  {
    term: 'Reacción Perióstica', slug: 'reaccion-periostica', cat: 'proceso',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Formación de nuevo hueso en la superficie cortical como respuesta a un daño, infección, traumatismo u otro estímulo del periostio. Su morfología —laminar, espiculada o en "piel de cebolla"— orienta hacia la causa subyacente y el estadio evolutivo del proceso.'
  },
  {
    term: 'Osteólisis', slug: 'osteolisis', cat: 'proceso',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Lesión ósea elemental que consiste en la desaparición de una porción de tejido óseo sin que queden vestigios del mismo. Se observa en osteomielitis, tumores óseos primarios, metástasis óseas, artropatías neuropáticas y artritis reumatoide, entre otros procesos.'
  },
  {
    term: 'Osteoesclerosis', slug: 'osteoesclerosis', cat: 'proceso',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Lesión anatómica elemental del tejido óseo consistente en la condensación de los conductos de Havers y de los espacios medulares. Macroscópicamente el hueso presenta aspecto de marfil y es muy duro. Puede ser localizada (osteomielitis crónica, tumores osteoblásticos, enfermedad de Paget) o generalizada (osteopetrosis). Sin.: condensación ósea, esclerosis ósea, osteocondensación.'
  },
  {
    term: 'Entesopatía', slug: 'entesopatia', cat: 'proceso',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Cualquier trastorno o enfermedad que afecta a las entesis. En paleopatología se emplea como marcador de actividad física repetitiva al identificarse proliferaciones óseas, erosiones o calcificaciones en los puntos de inserción tendinosa y ligamentosa.'
  },
  {
    term: 'Osteoblástica', slug: 'osteoblastica', cat: 'proceso',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'De los osteoblastos o relacionado con ellos. Aplicado a una lesión: que forma o produce tejido óseo. Sin.: esqueletógeno, osteógeno.'
  },
  {
    term: 'Osteoclástica', slug: 'osteoclastica', cat: 'proceso',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'De los osteoclastos o relacionado con ellos. Aplicado a una lesión ósea: que presenta reabsorción osteoclástica.'
  },
  {
    term: 'Porosidad', slug: 'porosidad', cat: 'proceso',
    def: 'Presencia de poros o cavidades en la superficie o estructura del tejido óseo. En paleopatología se valora su distribución, densidad y tamaño como indicador de procesos patológicos como anemia, infección o déficit nutricional.'
  },
  {
    term: 'Nódulos de Schmörl', slug: 'nodulos-schmorl', cat: 'proceso',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Hernia del núcleo pulposo del disco intervertebral a través de una solución de continuidad en la placa de cubierta o de base del cuerpo vertebral adyacente. Puede ser única o múltiple y asienta preferentemente en las seis últimas vértebras dorsales y las dos primeras lumbares. Sin.: hernia discal intraesponjosa, hernia de Schmörl.'
  },
  {
    term: 'Osteofito', slug: 'osteofito', cat: 'proceso',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Excrecencia o protuberancia en la superficie de un hueso, generalmente de origen periostal, que se desarrolla en las proximidades de una articulación, sobre todo en el curso de una artrosis. Suele englobar la inserción de un ligamento o de la cápsula articular.'
  },

  // ════════════════════════════════════════════════════
  // CATEGORÍAS DE CLASIFICACIÓN PALEOPATOLÓGICA
  // ════════════════════════════════════════════════════
  {
    term: 'Congénita', slug: 'congenita', cat: 'patologia',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Presente ya en el momento del nacimiento. En paleopatología designa anomalías o malformaciones óseas de origen prenatal, distinguibles de las adquiridas por la ausencia de signos de remodelación reactiva. Sin.: connatal, innato.'
  },
  {
    term: 'Traumatismo', slug: 'traumatismo', cat: 'patologia',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Lesión interna o externa debida a la acción violenta de un agente externo (mecánico, térmico, químico, eléctrico, etc.). En paleopatología se clasifican según su cronología respecto a la muerte en antemortem, perimortem y postmortem. Sin.: lesión traumática, trauma.'
  },
  {
    term: 'Enfermedad Infecciosa', slug: 'enfermedad-infecciosa', cat: 'patologia',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Enfermedad causada por microorganismos patógenos —bacterias, virus, hongos o protozoos— que puede permanecer localizada o hacerse sistémica. En el registro óseo se manifiesta con reacciones periósticas, osteólisis, formación de secuestros y fistulación. Sin.: infección.'
  },
  {
    term: 'Neoplasia', slug: 'neoplasia', cat: 'patologia',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Proliferación autónoma e independiente de células de un tejido con alteraciones en su morfología, estructura y funcionamiento. Puede ser benigna o maligna. En paleopatología se identifica por lesiones líticas o blásticas en el hueso. Sin.: tumor, tumoración, neoplasma, blastoma.'
  },
  {
    term: 'Metabolopatía', slug: 'metabolopatia', cat: 'patologia',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Enfermedad congénita o adquirida causada por la alteración de uno o más procesos metabólicos. En el esqueleto se manifiesta con porosidad generalizada, deformidades en huesos largos o cambios en densidad ósea, como en el raquitismo o la osteoporosis. Sin.: enfermedad metabólica.'
  },
  {
    term: 'Antemortem', slug: 'antemortem', cat: 'patologia',
    def: 'Ocurrido antes de la muerte del individuo. En paleopatología, una lesión antemortem presenta signos de remodelación ósea —reabsorción de bordes, formación de callo o nueva cortical— que evidencian la supervivencia del individuo tras el traumatismo o proceso patológico.'
  },
  {
    term: 'Perimortem', slug: 'perimortem', cat: 'patologia',
    def: 'Ocurrido en el momento de la muerte o inmediatamente antes, cuando el hueso conserva aún sus propiedades biomecánicas. Las fracturas perimortem presentan bordes lisos, biselados y esquirlas, sin signos de curación, lo que las distingue de las antemortem y de las postmortem.'
  },
  {
    term: 'Postmortem', slug: 'postmortem', cat: 'patologia',
    def: 'Ocurrido tras la muerte del individuo, cuando el hueso ha perdido sus propiedades biomecánicas. Las alteraciones postmortem son de naturaleza tafonómica: fracturas de bordes irregulares y angulosos, pérdida de tejido esponjoso, tinción diferencial o meteorización. Son pseudopatológicas y deben diferenciarse de lesiones reales.'
  },

  // ════════════════════════════════════════════════════
  // METODOLOGÍA (términos previos sin fuente definida
  // en el nuevo documento — se mantienen del glosario original)
  // ════════════════════════════════════════════════════
  { term: 'Paleopatología',              slug: 'paleopatologia',           cat: 'metodo',     def: 'Disciplina científica que estudia las enfermedades y lesiones en restos esqueléticos y momias de poblaciones del pasado.' },
  { term: 'Trepanación',                 slug: 'trepanacion',              cat: 'metodo',     def: 'Intervención quirúrgica que consiste en la perforación del cráneo mediante raspado, corte o taladro. Es la cirugía más antigua documentada arqueológicamente.' },
  { term: 'Fotogrametría',               slug: 'fotogrametria',            cat: 'metodo',     def: 'Técnica de digitalización 3D basada en la captura de múltiples fotografías desde distintos ángulos para reconstruir la geometría tridimensional del objeto.' },
  { term: 'Escáner de luz estructurada', slug: 'escaner-luz-estructurada', cat: 'metodo',     def: 'Sistema de digitalización 3D que proyecta patrones de luz sobre la superficie del objeto y mide las deformaciones para calcular su geometría con alta precisión.' },
  { term: 'Bioarqueología',              slug: 'bioarqueologia',           cat: 'metodo',     def: 'Disciplina que integra el análisis de restos humanos con el contexto arqueológico para reconstruir las condiciones de vida, salud y comportamiento de las poblaciones del pasado.' },
  { term: 'Sexo biológico',              slug: 'sexo-biologico',           cat: 'metodo',     def: 'Determinación del sexo de un individuo a partir de caracteres morfológicos del esqueleto, principalmente pelvis y cráneo. Se expresa como masculino, femenino o indeterminado.' },
  { term: 'Edad biológica',              slug: 'edad-biologica',           cat: 'metodo',     def: 'Estimación de la edad al fallecimiento a partir de indicadores esqueléticos: fusión epifisaria, desgaste dental, sinostosis craneal y degeneración articular.' },
  { term: 'Índice cefálico',             slug: 'indice-cefalico',          cat: 'metodo',     def: 'Razón entre la anchura máxima y la longitud máxima del cráneo, multiplicada por 100. Clasifica los cráneos en dolicocéfalos (<75), mesocéfalos (75–80) y braquicéfalos (>80).' },
  { term: 'Índice de Kellgren-Lawrence', slug: 'kellgren-lawrence',        cat: 'metodo',     def: 'Escala radiológica de 0 a 4 que gradúa la severidad de la osteoartritis. El grado 4 implica pérdida severa del espacio articular con esclerosis y osteofitosis importantes.' },
  { term: 'Tafonomía',                   slug: 'tafonomia',                cat: 'metodo',     def: 'Estudio de los procesos que afectan a los restos orgánicos desde la muerte hasta su excavación, incluyendo meteorización, fragmentación, tinción y dispersión.' },
  { term: 'Marcador de actividad',       slug: 'marcador-actividad',       cat: 'metodo',     def: 'Alteración ósea —entesopatía, asimetría, hipertrofia cortical— que refleja patrones de esfuerzo físico repetitivo y permite inferir actividades ocupacionales.' },

  // ════════════════════════════════════════════════════
  // ANATOMÍA — términos morfológicos craneales
  // ════════════════════════════════════════════════════
  { term: 'Norma faciei',     slug: 'norma-faciei',     cat: 'anatomia', def: 'Vista frontal del cráneo utilizada para el análisis morfológico de la cara, órbitas, abertura nasal y arcos cigomáticos.' },
  { term: 'Norma verticalis', slug: 'norma-verticalis', cat: 'anatomia', def: 'Vista superior del cráneo que permite apreciar la forma de la bóveda craneal, el índice cefálico y las suturas craneales.' },
  { term: 'Norma occipitalis',slug: 'norma-occipitalis',cat: 'anatomia', def: 'Vista posterior del cráneo. Permite analizar el occipital, la protuberancia occipital externa y la anchura máxima del neurocráneo.' },
  { term: 'Dolicocéfalo',     slug: 'dolicocefalico',   cat: 'anatomia', def: 'Morfología craneal con índice cefálico inferior a 75, caracterizada por una forma alargada anteroposterior.' },
  { term: 'Braquicéfalo',     slug: 'braquicefalico',   cat: 'anatomia', def: 'Morfología craneal con índice cefálico superior a 80, caracterizada por una forma redondeada o ancha transversalmente.' },
  { term: 'Sinostosis',       slug: 'sinostosis',       cat: 'anatomia', def: 'Fusión ósea completa de estructuras que normalmente permanecen separadas, como las suturas craneales. Indicador de edad avanzada.' },
  { term: 'Sutura sagital',   slug: 'sutura-sagital',   cat: 'anatomia', def: 'Sutura craneal que une los dos huesos parietales en la línea media. Su grado de fusión se usa para estimar la edad biológica.' },

  // ════════════════════════════════════════════════════
  // PATOLOGÍA — términos específicos de lesiones
  // ════════════════════════════════════════════════════
  { term: 'Cribra orbitalia',      slug: 'cribra-orbitalia',      cat: 'patologia', def: 'Lesión hipervascular en forma de porosidad en el techo de las órbitas oculares, indicador de anemia ferropénica o déficit vitamínico durante la infancia.' },
  { term: 'Hiperostosis porótica', slug: 'hiperostosis-porotica',  cat: 'patologia', def: 'Engrosamiento y porosidad de los huesos de la bóveda craneal, asociado a anemias hemolíticas, déficit nutricional o infecciones crónicas.' },
  { term: 'Periostitis',           slug: 'periostitis',            cat: 'patologia', def: 'Inflamación del periostio que genera formación de hueso nuevo en la superficie cortical. Puede ser reactiva a infecciones, traumatismos o escorbuto.' },
  { term: 'Osteomielitis',         slug: 'osteomielitis',          cat: 'patologia', def: 'Infección bacteriana del tejido óseo que provoca necrosis, formación de secuestro y cloaca de drenaje. Frecuentemente causada por Staphylococcus.' },
  { term: 'Espondilitis',          slug: 'espondilitis',           cat: 'patologia', def: 'Inflamación de los cuerpos vertebrales. La espondilitis tuberculosa o Mal de Pott produce colapso vertebral con formación de giba angular.' },
  { term: 'Osteoartritis',         slug: 'osteoartritis',          cat: 'patologia', def: 'Enfermedad degenerativa articular caracterizada por erosión del cartílago, eburnación, osteofitosis y quistes subcondrales. Indicador de edad avanzada y actividad física.' },
  { term: 'Raquitismo',            slug: 'raquitismo',             cat: 'patologia', def: 'Alteración metabólica por déficit de vitamina D que produce reblandecimiento óseo, deformidades en huesos largos y porosidad generalizada. Afecta principalmente a individuos subadultos.' },
  { term: 'Eburnación',            slug: 'eburnacion',             cat: 'patologia', def: 'Pulido patológico de la superficie articular tras la destrucción total del cartílago. Produce un aspecto brillante y duro característico de la osteoartritis avanzada.' },
  { term: 'Callo óseo',            slug: 'callo-oseo',             cat: 'patologia', def: 'Tejido óseo de reparación que se forma durante la consolidación de una fractura. Su morfología permite estimar el tiempo transcurrido desde la lesión.' },
  { term: 'Fractura perimortem',   slug: 'fractura-perimortem',    cat: 'patologia', def: 'Fractura producida en el momento de la muerte o inmediatamente antes, cuando el hueso conserva aún sus propiedades biomecánicas de tejido vivo.' },
  { term: 'Absceso alveolar',      slug: 'absceso-alveolar',       cat: 'patologia', def: 'Acumulación de pus en el alveolo dentario por infección periapical. Genera un orificio de drenaje en el hueso mandibular o maxilar.' },
  { term: 'Sacralización',         slug: 'sacralizacion',          cat: 'patologia', def: 'Variante anatómica en la que la última vértebra lumbar se fusiona parcial o totalmente al sacro, alterando la mecánica de la columna.' },
  { term: 'Escoliosis',            slug: 'escoliosis',             cat: 'patologia', def: 'Desviación lateral del raquis con rotación axial de los cuerpos vertebrales. Puede ser congénita, idiopática o adquirida.' },

  // ════════════════════════════════════════════════════
  // CRONOLOGÍA
  // ════════════════════════════════════════════════════
  { term: 'Neolítico',   slug: 'neolitico',   cat: 'cronologia', def: 'Período prehistórico caracterizado por la aparición de la agricultura, la ganadería y los asentamientos permanentes. En la Península Ibérica: c. 5500–2200 a.C.' },
  { term: 'Yacimiento',  slug: 'yacimiento',  cat: 'cronologia', def: 'Lugar donde se conservan restos arqueológicos. En contexto paleopatológico, determina la cronología, el grupo poblacional y las condiciones tafonómicas del material óseo.' },
];

/* ═══════════════════════════════════════════════════════
   glosarioLink — utilidad compartida
═══════════════════════════════════════════════════════ */
function glosarioLink(texto) {
  if (!texto) return texto;
  let result = texto;
  const sorted = [...GLOSARIO].sort((a, b) => b.term.length - a.term.length);
  sorted.forEach(entry => {
    const regex = new RegExp(`(?<!<[^>]*)\\b(${entry.term})\\b`, 'gi');
    result = result.replace(regex, (match) =>
      `<a href="/prueba-museo/aula.html#${entry.slug}" class="glos-link" title="${entry.def.slice(0, 80)}…">${match}</a>`
    );
  });
  return result;
}
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

/**
 * GLOSARIO 
 * ─────────────────────────────────────────────────────
 *
 * Estructura de cada entrada:
 *   term   → nombre del término (para búsqueda y enlace)
 *   slug   → versión URL-friendly para ancla (#slug)
 *   cat    → 'anatomia' | 'proceso' | 'patologia' | 'metodo' | 'cronologia'
 *   def    → definición completa
 *   fuente → { label, url } — se muestra como recuadro con enlace al pie
 *

// ── TÉRMINOS DE ORIENTACIÓN ANATÓMICA ─────────────────────────────────────────

  {
    term: 'Proximal',
    slug: 'proximal',
    cat: 'anatomia',
    def: 'Próximo al punto de origen o inserción de una extremidad, de un vaso sanguíneo, de un vaso linfático o de un nervio. Generalmente por contraposición a distal.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },
  {
    term: 'Distal',
    slug: 'distal',
    cat: 'anatomia',
    def: 'Alejado del punto de origen o inserción de una extremidad, de un vaso sanguíneo, de un vaso linfático o de un nervio. Generalmente por contraposición a proximal.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },
  {
    term: 'Medial',
    slug: 'medial',
    cat: 'anatomia',
    def: 'Situado cerca de la línea media o del plano sagital medio. Sin.: interno. Generalmente por contraposición a lateral.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },
  {
    term: 'Lateral',
    slug: 'lateral',
    cat: 'anatomia',
    def: 'Situado lejos de la línea media o del plano sagital medio. Sin.: externo. Generalmente por contraposición a medial.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },
  {
    term: 'Anterior',
    slug: 'anterior',
    cat: 'anatomia',
    def: 'Situado en la parte anterior del cuerpo, por delante del plano coronal o frontal, o delante de otra estructura corporal. Sin.: frontal, ventral. En la cabeza se usa también con este sentido "rostral".',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },
  {
    term: 'Posterior',
    slug: 'posterior',
    cat: 'anatomia',
    def: 'Situado en la parte dorsal del cuerpo, es decir, por detrás del plano coronal o frontal, o detrás de otra estructura corporal. Sin.: dorsal.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },
  {
    term: 'Plano Sagital',
    slug: 'plano-sagital',
    cat: 'anatomia',
    def: 'Plano de simetría longitudinal que pasa por la sutura sagital y divide el cuerpo en una mitad derecha y otra izquierda. Sin.: plano mediano, plano medio, plano mediosagital. Por extensión, cualquiera de los planos longitudinales paralelos al plano sagital medio.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },
  {
    term: 'Plano Coronal',
    slug: 'plano-coronal',
    cat: 'anatomia',
    def: 'Plano vertical perpendicular al plano sagital que divide el cuerpo, en posición anatómica, en una parte anterior o facial y otra posterior o dorsal. Sin.: plano frontal.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },
  {
    term: 'Plano Transversal',
    slug: 'plano-transversal',
    cat: 'anatomia',
    def: 'Plano perpendicular al eje longitudinal del cuerpo o de un segmento anatómico, que lo divide en una parte superior y otra inferior. Sin.: plano axial, plano horizontal.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },

// ── TÉRMINOS ESTRUCTURALES DEL HUESO ──────────────────────────────────────────

  {
    term: 'Epífisis',
    slug: 'epifisis',
    cat: 'anatomia',
    def: 'Extremidad articular de un hueso largo, nacida de un centro secundario de osificación y unida a la diáfisis. Hasta el final de la pubertad queda separada de la diáfisis por el cartílago de crecimiento.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },
  {
    term: 'Diáfisis',
    slug: 'diafisis',
    cat: 'anatomia',
    def: 'Cuerpo o tallo de un hueso largo, desarrollado a partir de un centro de osificación primario y comprendido entre sus extremos o epífisis.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },
  {
    term: 'Metáfisis',
    slug: 'metafisis',
    cat: 'anatomia',
    def: 'Zona de crecimiento de los huesos largos, adyacente al cartílago de crecimiento, situada entre la epífisis y la diáfisis. Sus límites se borran al alcanzar la vida adulta.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },
  {
    term: 'Apófisis',
    slug: 'apofisis',
    cat: 'anatomia',
    def: 'Prominencia, saliente o eminencia natural de un hueso. Es lugar habitual de inserción muscular. Sin.: proceso.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },
  {
    term: 'Entesis',
    slug: 'entesis',
    cat: 'anatomia',
    def: 'Conjunto de la inserción de tendones, ligamentos, fascias y cápsulas articulares en un hueso y de la zona ósea en que se insertan. Existen dos tipos: fibrosas (en metáfisis y diáfisis) y fibrocartilaginosas (en apófisis y epífisis). Sus funciones son proporcionar anclaje de tejidos blandos, distribuir tensiones mecánicas y promover el crecimiento óseo.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },
  {
    term: 'Foramen Nutricio',
    slug: 'foramen-nutricio',
    cat: 'anatomia',
    def: 'Pequeño orificio situado en la superficie de los huesos a través del cual pasan las arterias nutricias, vasos sanguíneos que penetran en el hueso compacto para suministrar nutrientes y oxígeno a la médula ósea y al propio tejido óseo.',
    fuente: { label: 'IMAIOS', url: 'https://www.imaios.com/es/e-anatomy' }
  },
  {
    term: 'Periostio',
    slug: 'periostio',
    cat: 'anatomia',
    def: 'Capa de tejido conjuntivo fibroelástico denso que constituye la capa más externa de los huesos, salvo en las superficies articulares. Consta de dos capas: una externa fibrosa y vascularizada, y una interna con células osteoprogenitoras que permiten la reparación de fracturas y el aumento de grosor óseo durante el crecimiento. Está adherida al hueso por las fibras de Sharpey.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },
  {
    term: 'Endostio',
    slug: 'endostio',
    cat: 'anatomia',
    def: 'Membrana de tejido conjuntivo, similar al periostio pero mucho más delgada, que tapiza la cavidad medular de los huesos largos, la superficie de las trabéculas del tejido esponjoso y los conductos vasculares del tejido compacto. Está dotada de células osteoprogenitoras y osteoclastos. Sin.: periostio interno.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },
  {
    term: 'Hueso Cortical',
    slug: 'hueso-cortical',
    cat: 'anatomia',
    def: 'Región de un hueso cuya estructura histológica está formada por tejido óseo compacto laminar. El carácter compacto viene determinado por el elevado volumen de masa ósea en relación con el calibre de los espacios vasculares. Predomina en la diáfisis de los huesos largos y en la periferia de los huesos planos. Sin.: hueso compacto, capa cortical, sustancia compacta.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },
  {
    term: 'Hueso Trabecular',
    slug: 'hueso-trabecular',
    cat: 'anatomia',
    def: 'Tejido óseo formado por una trama tridimensional de trabéculas óseas que delimita espacios ocupados por la médula ósea. Se localiza en el interior de los huesos planos y en las epífisis de los huesos largos. Sin.: hueso esponjoso.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },
  {
    term: 'Cavidad Medular',
    slug: 'cavidad-medular',
    cat: 'anatomia',
    def: 'Cavidad diafisaria de los huesos largos que contiene la médula ósea y está revestida por el endostio. Sin.: canal medular.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },

// ── PROCESOS GENERALES ────────────────────────────────────────────────────────

  {
    term: 'Reacción Perióstica',
    slug: 'reaccion-periostica',
    cat: 'proceso',
    def: 'Formación de hueso nuevo en la superficie cortical como respuesta a un daño, infección, traumatismo u otro estímulo del periostio. Su morfología —laminar, espiculada o en "piel de cebolla"— orienta hacia la causa subyacente y el estadio evolutivo del proceso.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },
  {
    term: 'Osteólisis',
    slug: 'osteolisis',
    cat: 'proceso',
    def: 'Lesión ósea elemental que consiste en la desaparición de una porción de tejido óseo sin que queden vestigios del mismo. Puede encontrarse en numerosos procesos patológicos: osteomielitis, tumores óseos primarios, metástasis óseas, artropatías neuropáticas o artritis reumatoide, entre otros.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },
  {
    term: 'Osteoesclerosis',
    slug: 'osteoesclerosis',
    cat: 'proceso',
    def: 'Lesión anatómica elemental del tejido óseo que consiste en la condensación de los conductos de Havers y de los espacios medulares. Macroscópicamente el hueso presenta aspecto de marfil y es muy duro. Puede ser localizada (osteomielitis crónica, tumores osteoblásticos) o generalizada (osteopetrosis, enfermedad de Paget). Sin.: condensación ósea, eburnación, esclerosis ósea.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },
  {
    term: 'Entesopatía',
    slug: 'entesopatia',
    cat: 'proceso',
    def: 'Cualquier trastorno o enfermedad que afecta a las entesis. En paleopatología se utiliza como marcador de actividad física repetitiva al identificarse proliferaciones óseas, erosiones o calcificaciones en los puntos de inserción tendinosa y ligamentosa.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },

// ── CATEGORÍAS DE CLASIFICACIÓN ───────────────────────────────────────────────

  {
    term: 'Congénita',
    slug: 'congenita',
    cat: 'patologia',
    def: 'Presente ya en el momento del nacimiento. En paleopatología hace referencia a anomalías o malformaciones óseas de origen prenatal, distinguibles de las adquiridas por la ausencia de signos de remodelación reactiva. Sin.: connatal, innato.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },
  {
    term: 'Traumatismo',
    slug: 'traumatismo',
    cat: 'patologia',
    def: 'Lesión interna o externa debida a la acción violenta de un agente externo. Los agentes vulnerantes son de naturaleza mecánica, térmica, química, eléctrica o por radiaciones. Según su cronología respecto a la muerte se clasifican en antemortem (con signos de curación), perimortem (sin remodelación) y postmortem (con características tafonómicas). Sin.: lesión traumática, trauma.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },
  {
    term: 'Enfermedad Infecciosa',
    slug: 'enfermedad-infecciosa',
    cat: 'patologia',
    def: 'Enfermedad causada por microbios patógenos —bacterias, virus, hongos o protozoos— que puede permanecer localizada o hacerse sistémica. En el registro óseo se manifiesta típicamente mediante reacciones periósticas, osteólisis, formación de secuestros y fistulación. Sin.: infección.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },
  {
    term: 'Neoplasia',
    slug: 'neoplasia',
    cat: 'patologia',
    def: 'Proliferación autónoma e independiente de células de un tejido como consecuencia de alteraciones en su morfología, estructura y funcionamiento. Puede mostrar comportamiento benigno o maligno. En paleopatología se identifican por lesiones líticas o blásticas en el hueso. Sin.: neoplasma, tumor, tumoración.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },
  {
    term: 'Metabolopatía',
    slug: 'metabolopatia',
    cat: 'patologia',
    def: 'Cualquier enfermedad, congénita o adquirida, causada por la alteración de uno o más procesos metabólicos. En el esqueleto se manifiestan con porosidad generalizada, deformidades en huesos largos o cambios en la densidad ósea, como ocurre en el raquitismo o la osteoporosis. Sin.: enfermedad metabólica.',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' }
  },
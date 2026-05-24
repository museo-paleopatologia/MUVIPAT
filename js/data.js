/**
 * PaleoMuseo · data.js
 * ─────────────────────────────────────────────────────────────────
 * FUENTE ÚNICA DE VERDAD de todo el contenido del museo.
 *
 * ESTRUCTURA:
 *   PIEZAS[]          → todo el contenido de cada pieza
 *   ETIQUETAS_CAMPOS  → labels legibles para cada campo de pieza
 *   FICHAS_MAESTRAS{} → instrucciones de scrollytelling (solo refs a PIEZAS)
 *   VOCABULARIO{}     → metadatos de regiones, patologías, sexo, época
 *   GLOSARIO[]        → diccionario de términos
 *
 * REGLA DE ORO:
 *   - ¿Es un dato de la pieza?             → va en PIEZAS
 *   - ¿Es cómo mostrarlo en scrollytelling? → va en FICHAS_MAESTRAS
 *   - ¿Es su etiqueta legible?              → va en ETIQUETAS_CAMPOS
 *   - ¿Es estructura visual o renderizado?  → va en ficha-maestra.html
 *
 * CAMPOS DE PIEZAS:
 *   Básicos (todas):
 *     id, nombre, region, patologia, sexo, epoca,
 *     yacimiento, descripcion, imagen, ficha
 *
 *   Extendidos (fichas completas):
 *     edad, cronologia, conservacion, diagnostico_principal, modelo3d,
 *     descripcion_osteologica  → string[]
 *     hallazgos                → [ { titulo, items: [ { texto, refs? } ] } ]
 *     referencias              → [ { id, autores, anio, titulo, editorial, doi? } ]
 *     imagenes                 → [ { src, caption } ]
 *
 *   Datos patológicos específicos (usados en grids de ficha maestra):
 *     Se añaden como campos propios de la pieza. Cada campo nuevo
 *     necesita su etiqueta en ETIQUETAS_CAMPOS.
 */


/* ══════════════════════════════════════════════════════════════════
   PIEZAS
══════════════════════════════════════════════════════════════════ */
const PIEZAS = [

  /* ── OV-001 ─────────────────────────────────────────────────── */
  {
    /* Básicos */
    id:          'OV-001',
    nombre:      'Cráneo con trepanación curada',
    region:      'craneo',
    patologia:   'trauma',
    sexo:        'masculino',
    epoca:       'prehistoria',
    yacimiento:  'Cueva de los Murciélagos, Granada',
    coords: [849, 1044],
    descripcion: 'Trepanación circular de 35 mm en el parietal derecho con bordes completamente remodelados. Evidencia de supervivencia prolongada post-intervención.',
    imagen:      null,
    ficha:       '/prueba-museo/ficha-maestra.html?id=OV-001',
    modelo3d:    '/prueba-museo/assets/models/avas_skull.glb',

    /* Identificación extendida */
    edad:        '35–45 años',
    cronologia:  '~3200 a.C.',
    epoca_label: 'Neolítico Final',
    conservacion:'Muy buena',

    /* Datos morfológicos */
    indice_cefalico:   '76.4 — Mesocéfalo',
    indice_nasal:      '42.1 — Leptorrino',
    capacidad_craneal: '1.380 cc',
    forma_craneal:     'Ovoide',
    sutura_sagital:    'Sinostosis total',

    /* Datos patológicos */
    diametro_lesion:     '35 mm',
    localizacion_lesion: 'Parietal derecho',
    tecnica_quirurgica:  'Raspado abrasivo',
    supervivencia:       '6–8 años post-op.',
    bisel_interno:       'Estrías concéntricas',
    remodelacion:        'Completa / lamelar',
    senal_infeccion:     'Ausente',
    inion:               'Marcado — robustez',
    suturas_lambdoideas: 'Permeables',
    patologia_adicional: 'No detectada',

    /* Diagnóstico */
    diagnostico_principal: 'Trepanación circular por raspado abrasivo con supervivencia confirmada',

    /* Descripción osteológica (ficha estándar) */
    descripcion_osteologica: [
      'El espécimen presenta una <strong>morfología craneal robusta</strong>, típica de individuos masculinos del Neolítico peninsular. La normocrania general está bien preservada, con pérdida mínima de material óseo post-depositacional. El índice cefálico calculado es de 76,4 (mesocéfalo).',
      'La <strong>capacidad craneal estimada</strong> mediante el método de Pearson es de 1.380 cc, dentro del rango normal para la especie. La sutura sagital muestra fusión completa en el tramo posterior (sinostosis senil).'
    ],

    /*
     * hallazgos[] — fuente de texto para la ficha maestra.
     * El índice de cada entrada se corresponde con hallazgoIndex
     * en FICHAS_MAESTRAS['OV-001']:
     *   [0] Vista general
     *   [1] Norma faciei
     *   [2] Trepanación
     *   [3] Detalle bisel
     *   [4] Norma occipitalis
     */
    hallazgos: [
      {
        titulo: 'Vista general',
        items: [
          { texto: 'Morfología craneal robusta típica de individuos masculinos del Neolítico peninsular. Normocrania bien preservada con pérdida mínima de material óseo post-depositacional. Índice cefálico de 76,4 (mesocéfalo).' },
          { texto: 'Capacidad craneal estimada de 1.380 cc mediante el método de Pearson. Sutura sagital con fusión completa en el tramo posterior (sinostosis senil).' }
        ]
      },
      {
        titulo: 'Norma faciei',
        items: [
          { texto: 'Frente moderadamente inclinada con <strong>arcos superciliares</strong> marcados. Arcos cigomáticos prominentes y bien desarrollados, coherentes con una musculatura masticatoria robusta.' },
          { texto: '<strong>Órbitas</strong> de morfología cuadrangular con bordes superiores agudos. Ligera asimetría facial izquierda, posiblemente de origen funcional. Abertura piriforme estrecha, de tipo leptorrino (índice nasal = 42,1).' }
        ]
      },
      {
        titulo: 'Trepanación — Parietal derecho',
        items: [
          { texto: '<strong>Trepanación circular</strong> de 35 mm de diámetro localizada en el tercio posterior del parietal derecho. Técnica de <strong>raspado por abrasión</strong>, identificable por las estrías concéntricas en el bisel interno.' },
          { texto: 'Bordes con <strong>remodelación ósea completa</strong> y formación de tejido compacto lamelar. Supervivencia mínima de 6–8 años post-intervención, convirtiéndolo en uno de los casos más documentados de cirugía prehistórica exitosa en la Península Ibérica.' }
        ]
      },
      {
        titulo: 'Detalle del bisel',
        items: [
          { texto: 'Bisel interno con <strong>estrías concéntricas</strong> que revelan el movimiento rotatorio del instrumento de abrasión, posiblemente un sílex o herramienta de hueso.' },
          { texto: '<strong>Remodelación perilesional</strong> activa: tejido óseo compacto claramente distinto al hueso original. Ausencia total de signos de infección perilesional.' }
        ]
      },
      {
        titulo: 'Norma occipitalis',
        items: [
          { texto: 'Inión marcado, coherente con el perfil de robustez del individuo. <strong>Suturas lambdoideas</strong> permeables, sin evidencias de sinostosis prematura ni alteraciones morfológicas adicionales.' },
          { texto: 'Estado de conservación muy bueno en el segmento posterior. Mínima fragmentación y ausencia de pérdida de sustancia ósea post-depositacional en esta región.' }
        ]
      }
    ],

    referencias: [
      { id:1, autores:'Ortner DJ', anio:2003, titulo:'Identification of Pathological Conditions in Human Skeletal Remains', editorial:'Academic Press, San Diego' },
      { id:2, autores:'Roberts C, Manchester K', anio:2005, titulo:'The Archaeology of Disease', editorial:'Sutton Publishing, Stroud' }
    ]
  },

  /* ── OV-002 al OV-016 — campos básicos ──────────────────────── */
  { id:'OV-002', nombre:'Fémur con fractura consolidada',
    region:'miembro-inferior', patologia:'trauma', sexo:'femenino', epoca:'medieval',
    yacimiento:'Necrópolis de San Nicolás, Murcia',
    coords: [1069, 886],
    descripcion:'Fractura diafisaria del fémur derecho con callo óseo exuberante y acortamiento de 2,3 cm. Posible deformidad funcional residual.',
    imagen:null, ficha:'/prueba-museo/ficha-estandar.html?id=OV-002',
    modelo3d:'/prueba-museo/assets/models/craneo-def.glb' },

  { id:'OV-003', nombre:'Cribra orbitalia bilateral',
    region:'craneo', patologia:'metabolica', sexo:'indeterminado', epoca:'romano',
    yacimiento:'Isturgi, Jaén',
    coords: [731, 877],
    descripcion:'Hiperostosis porótica en techo de ambas órbitas. Grado III según criterios de Steckel. Indicador de anemia ferropénica en edad infantil.',
    imagen:null, ficha:'/prueba-museo/ficha-estandar.html?id=OV-003',
    modelo3d:'/prueba-museo/assets/models/al-03-1897.glb' },

  { id:'OV-004', nombre:'Vértebra con espondilitis tuberculosa',
    region:'columna', patologia:'infecciosa', sexo:'masculino', epoca:'medieval',
    yacimiento:'Monasterio de Suso, La Rioja',
    coords: [867, 336],
    descripcion:'Colapso del cuerpo vertebral T8-T9 con fusión angular (giba). Destrucción del disco intervertebral y formación de absceso paravertebral. Mal de Pott confirmado.',
    imagen:null, ficha:'/prueba-museo/ficha-maestra.html?id=OV-004',
    modelo3d:'/prueba-museo/assets/models/femur_a.glb' },

  { id:'OV-005', nombre:'Pelvis con sacralización de L5',
    region:'pelvis', patologia:'congenita', sexo:'masculino', epoca:'moderno',
    yacimiento:'Cementerio de Poblet, Tarragona',
    coords: [1323, 456],
    descripcion:'Fusión unilateral de L5 al sacro con esclerosis de la articulación sacroilíaca ipsilateral. Variante anatómica con posible correlato doloroso.',
    imagen:null, ficha:'/prueba-museo/ficha-estandar.html?id=OV-005' },

  { id:'OV-006', nombre:'Húmero con entesopatía severa',
    region:'miembro-superior', patologia:'congenita', sexo:'masculino', epoca:'romano',
    yacimiento:'Barcino, Barcelona',
    descripcion:'Robustez cortical extrema y proliferación ósea en inserción del deltoides. Compatible con actividad física intensa y repetitiva. Posible remero o trabajador portuario.',
    imagen:null, ficha:'/prueba-museo/ficha-estandar.html?id=OV-006' },

  { id:'OV-007', nombre:'Costillas con lesiones periósticas',
    region:'torax', patologia:'infecciosa', sexo:'femenino', epoca:'medieval',
    yacimiento:'La Olmeda, Palencia',
    descripcion:'Formación de hueso nuevo laminar en la cara visceral de costillas 4-7 bilaterales. Probable tuberculosis pulmonar o pleuritis crónica.',
    imagen:null, ficha:'/prueba-museo/ficha-estandar.html?id=OV-007' },

  { id:'OV-008', nombre:'Rótula con osteoartritis avanzada',
    region:'miembro-inferior', patologia:'degenerativa', sexo:'femenino', epoca:'moderno',
    yacimiento:'San Millán de la Cogolla, La Rioja',
    descripcion:'Erosión del cartílago articular con eburnación, osteofitosis marginal y quistes subcondrales. Estadio 4 de Kellgren-Lawrence. Individuo >55 años.',
    imagen:null, ficha:'/prueba-museo/ficha-estandar.html?id=OV-008' },

  { id:'OV-009', nombre:'Mandíbula con absceso alveolar',
    region:'craneo', patologia:'infecciosa', sexo:'indeterminado', epoca:'prehistoria',
    yacimiento:'Los Millares, Almería',
    descripcion:'Orificio de drenaje en el alveolo del primer molar inferior. Reabsorción ósea periapical intensa con pérdida de diente en vida. Evidencia de enfermedad periodontal.',
    imagen:null, ficha:'/prueba-museo/ficha-estandar.html?id=OV-009' },

  { id:'OV-010', nombre:'Radio con fractura de Colles',
    region:'miembro-superior', patologia:'trauma', sexo:'femenino', epoca:'moderno',
    yacimiento:'Cementerio de San Isidro, Madrid',
    descripcion:'Fractura distal del radio en patrón de Colles con desplazamiento dorsal. Consolidación en posición viciosa con limitación funcional de la muñeca.',
    imagen:null, ficha:'/prueba-museo/ficha-estandar.html?id=OV-010' },

  { id:'OV-011', nombre:'Columna lumbar con escoliosis',
    region:'columna', patologia:'congenita', sexo:'femenino', epoca:'medieval',
    yacimiento:'Necrópolis de Recópolis, Guadalajara',
    descripcion:'Curvatura lateral del raquis lumbar con cuña vertebral en L3. Rotación axial de los cuerpos vertebrales. Ángulo de Cobb estimado en 35°.',
    imagen:null, ficha:'/prueba-museo/ficha-estandar.html?id=OV-011' },

  { id:'OV-012', nombre:'Húmero con osteomielitis hematógena',
    region:'miembro-superior', patologia:'infecciosa', sexo:'masculino', epoca:'romano',
    yacimiento:'Caesaraugusta, Zaragoza',
    descripcion:'Involucro óseo periférico con secuestro central y fistulación cloacal. Proceso infeccioso crónico de Staphylococcus sp. compatible. Reacción perióstica extensa.',
    imagen:null, ficha:'/prueba-museo/ficha-maestra.html?id=OV-012' },

  { id:'OV-013', nombre:'Escápula con nódulos de Schmörl',
    region:'torax', patologia:'degenerativa', sexo:'masculino', epoca:'prehistoria',
    yacimiento:'El Argar, Almería',
    descripcion:'Hernias discales calcificadas en platillos vertebrales T6-T10. Indicador de cargas axiales repetidas sobre la columna dorsal. Patrón compatible con trabajo agrícola.',
    imagen:null, ficha:'/prueba-museo/ficha-estandar.html?id=OV-013' },

  { id:'OV-014', nombre:'Tibia con raquitismo',
    region:'miembro-inferior', patologia:'metabolica', sexo:'indeterminado', epoca:'medieval',
    yacimiento:'Toledo, casco histórico',
    descripcion:'Incurvación anterior y medial de la diáfisis tibial (tibia en sable). Porosidad cortical generalizada. Hipovitaminosis D severa en la infancia. Individuo subadulto.',
    imagen:null, ficha:'/prueba-museo/ficha-estandar.html?id=OV-014' },

  { id:'OV-015', nombre:'Pelvis con artritis séptica',
    region:'pelvis', patologia:'infecciosa', sexo:'masculino', epoca:'romano',
    yacimiento:'Emerita Augusta, Mérida',
    descripcion:'Destrucción de la articulación coxofemoral izquierda con anquilosis fibrosa. Superficie articular del acetábulo completamente erosionada. Posible complicación de herida de guerra.',
    imagen:null, ficha:'/prueba-museo/ficha-maestra.html?id=OV-015' },

  { id:'OV-016', nombre:'Cráneo con trauma contuso perimortem',
    region:'craneo', patologia:'trauma', sexo:'masculino', epoca:'medieval',
    yacimiento:'Batalla de Nájera, La Rioja',
    descripcion:'Fractura deprimida en el parietal izquierdo con patrón radial. Ausencia de remodelación ósea. Lesión perimortem por objeto contundente. Contexto de violencia interpersonal.',
    imagen:null, ficha:'/prueba-museo/ficha-maestra.html?id=OV-016' },


  /* ══════════════════════════════════════════
     PIEZAS HISTÓRICAS
  ══════════════════════════════════════════ */
  {
    id:'H001', nombre:'Ötzi, el Hombre de Hielo',
    region:'individuo-completo', patologia:'trauma', sexo:'masculino', epoca:'prehistoria',
    yacimiento:'Tisenjoch Pass (Hauslabjoch), Alpes de Ötzal, Tirol del Sur (Italia)',
    descripcion:'Momia calcolítica de excepcional conservación por congelación natural. Presenta traumatismo perimortem por proyectil lítico como causa probable de muerte. Conservada en el South Tyrol Museum of Archaeology, Bolzano.',
    imagen:'/prueba-museo/assets/img/H001/H001_cuerpo_completo.png',
    ficha:'/prueba-museo/ficha-estandar.html?id=H001',
    historica:true,
    modelo3d:'/prueba-museo/assets/models/H001.glb',
    cronologia:'ca. 3350–3105 cal BC (Calcolítico / Edad del Cobre)',
    edad:'45–46 años',
    conservacion:'South Tyrol Museum of Archaeology, Bolzano (Italia)',
    diagnostico_principal:'Probable muerte por hemorragia masiva secundaria a traumatismo penetrante por proyectil lítico (punta de flecha) alojada en el hemitórax izquierdo con afectación de la arteria subclavia.',
    descripcion_osteologica: [
      'Ötzi es un individuo adulto masculino de Homo sapiens, excepcionalmente conservado mediante momificación natural por congelación<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. Presenta un esqueleto complejo asociado a preservación significativa de tejidos blandos<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. Esta pieza se encuentra en el South Tyrol Museum of Archaeology en Bolzano.',
      'Morfológicamente, es un individuo de constitución ágil, con una estatura aproximada de 1,58–1,60 m y edad estimada en torno a los 46 años<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>. Se observan variaciones anatómicas como la presencia de una costilla derecha vestigial asociada a la duodécima vértebra torácica<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a> y una vértebra lumbosacra transicional (L5), con posición inferior respecto al borde pélvico y morfología alterada por integración parcial con el sacro<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>.',
      'A nivel craneal, se describen foveolas granulares prominentes en el hueso frontal, compatibles con variantes anatómicas no patológicas<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(3)">³</a>. La cavidad oral presenta desgaste dentario notable, diastema entre los incisivos superiores y pérdida de soporte alveolar<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. Ausencia de terceros molares. Los estudios de isótopos en el esmalte dentario han permitido reconstruir su área de residencia en la infancia.',
      'Se observan además alteraciones traumáticas en la región escapular izquierda y en la mano derecha<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(4)">⁴</a>, así como múltiples modificaciones postmortem derivadas de procesos tafonómicos y de la extracción del cuerpo<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(4)">⁴</a>. Los estudios radiológicos evidencian desgaste articular significativo en caderas, hombros, rodillas y columna<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>. Se documentó además la ausencia congénita del duodécimo par costal bilateral, considerada una variante anatómica infrecuente<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>.',
    ],
    hallazgos: [
      { titulo:'Traumatismos', items:[
        { texto:'Herida penetrante perimortem en región escapulotorácica izquierda compatible con impacto de proyectil.', refs:[4] },
        { texto:'Punta lítica alojada en el hemitórax izquierdo (pulmón) con probable afectación vascular.', refs:[4] },
        { texto:'Lesión incisa en mano derecha compatible con traumatismo por arma cortante perimortem.', refs:[4] },
        { texto:'Posible traumatismo craneal asociado al evento perimortem.', refs:[1] }
      ]},
      { titulo:'Patologías degenerativas', items:[
        { texto:'Cambios osteoarticulares compatibles con osteoartritis en caderas, hombros, rodillas y columna vertebral.', refs:[2] },
        { texto:'Desgaste dentario avanzado con pérdida de soporte alveolar y diastema entre incisivos superiores.', refs:[2] }
      ]},
      { titulo:'Patologías cardiovasculares', items:[
        { texto:'Calcificaciones vasculares compatibles con enfermedad aterosclerótica, documentadas mediante tomografía computarizada.', refs:[1] }
      ]},
      { titulo:'Patologías infecciosas y parasitarias', items:[
        { texto:'Evidencia molecular de infección por Borrelia burgdorferi (enfermedad de Lyme).', refs:[1] },
        { texto:'Presencia de Helicobacter pylori en el contenido gástrico.', refs:[1] },
        { texto:'Huevos de Trichuris trichiura identificados en el tracto intestinal.', refs:[1] }
      ]},
      { titulo:'Patología oral', items:[
        { texto:'Enfermedad periodontal avanzada con pérdida de soporte alveolar generalizada.', refs:[1] },
        { texto:'Caries múltiples y desgaste oclusal severo compatible con dieta rica en carbohidratos.', refs:[2] }
      ]}
    ],
    referencias: [
      { id:1, autores:'Garrido Pena, R.', anio:'2020', titulo:'Ötzi, el hombre del hielo en el MAN', editorial:'Museo Arqueológico Nacional' },
      { id:2, autores:'Kean, W.F. et al.', anio:'2013', titulo:'The musculoskeletal abnormalities of the Similaun Iceman', editorial:'SAGE Open Medicine', doi:'https://doi.org/10.1177/2050312112475428' },
      { id:3, autores:'Murphy, W.A. et al.', anio:'2025', titulo:"New insights on Ötzi's injuries from a clinical perspective", editorial:'Journal of Archaeological Science' },
      { id:4, autores:'Wierer, U. et al.', anio:'2018', titulo:"Ötzi, the Iceman: Lyme Disease, Androgenetic Alopecia and Dark Skin", editorial:'PLOS ONE', doi:'https://doi.org/10.1371/journal.pone.0195705' },
      { id:5, autores:'kaoruiscool', anio:'2026', titulo:'Modelo 3D "Ötzi the Iceman", CC BY 4.0. https://skfb.ly/pGpTT' }
    ],
    imagenes: [
      { src:'/prueba-museo/assets/img/H001/H001_cuerpo_completo.png', caption:'Figura 1. Vista anterior y posterior del cuerpo momificado de Ötzi, mostrando su excepcional estado de conservación y la distribución anatómica de sus tatuajes documentados. Tomada de Garrido Pena (2020).' },
      { src:'/prueba-museo/assets/img/H001/H001_costilla_vestigial.png', caption:'Figura 2. Radiografía toracolumbar que muestra variantes anatómicas esqueléticas descritas en Ötzi, incluyendo una costilla derecha vestigial y alteraciones en la transición lumbosacra. Tomada de Kean et al. (2013).' },
      { src:'/prueba-museo/assets/img/H001/H001_herida_mano.png', caption:'Figura 3. Detalle de la lesión traumática presente en la mano derecha de Ötzi, compatible con una herida perimortem por arma cortante. Tomada de Murphy et al. (2025).' },
      { src:'/prueba-museo/assets/img/H001/H001_toolkit.png', caption:'Figura 4. Proceso de uso, fractura y reacondicionamiento de una punta de flecha perteneciente al conjunto de armas asociado a Ötzi. Una similar a la representada habría sido la causa de su muerte. Tomada de Wierer et al. (2018).' }
    ],
    layoutMode:'tall'
  },

  {
    id:'H002', nombre:'Ricardo III de Inglaterra',
    region:'individuo-completo', patologia:'congenita', sexo:'masculino', epoca:'medieval',
    yacimiento:'Grey Friars, Leicester, Inglaterra',
    descripcion:'Individuo adulto masculino identificado como Ricardo III de Inglaterra mediante análisis de ADN y análisis osteológico. Presenta escoliosis idiopática adolescente severa y múltiples traumatismos perimortem compatibles con muerte violenta en combate. Recuperado en excavaciones arqueológicas bajo un aparcamiento de Leicester en 2012.',
    imagen:'/prueba-museo/assets/img/H002/tumba.png',
    ficha:'/prueba-museo/ficha-estandar.html?id=H002',
    historica:true,
    modelo3d:null,
    sketchfab_embed:'https://sketchfab.com/models/00d23c7defd0476db1a36c08728fa60f/embed?autostart=1&camera=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_theme=dark',
    sketchfab_title:"King Richard III's grave · Archaeological Services (ULAS)",
    cronologia:'s. XV (fallecido en la batalla de Bosworth Field, 1485)',
    edad:'30–34 años',
    conservacion:'Leicester Cathedral, Leicester (Reino Unido)',
    diagnostico_principal:'Traumatismo craneal severo perimortem compatible con muerte violenta en combate, asociado a escoliosis idiopática adolescente severa como patología de base.',
    descripcion_osteologica: [
      'El esqueleto corresponde a un individuo adulto masculino de constitución grácil identificado como Richard III<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. Presenta una marcada deformidad vertebral compatible con una curvatura escoliótica severa localizada en la región torácica, extendiéndose aproximadamente desde T6 hasta T11, con una angulación estimada en vida de entre 70 y 90° según el ángulo de Cobb<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>.',
      'La curvatura presenta un patrón equilibrado, con alineación compensatoria en las regiones cervical y lumbar, lo que sugiere una deformidad corporal poco visible y no incapacitante<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>.',
      'No se observan anomalías estructurales vertebrales mayores como hemivértebras o barras unilaterales<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>.',
      'Se documentan hasta 11 lesiones perimortem, principalmente localizadas en el cráneo, así como alteraciones postmortem compatibles con procesos tafonómicos, incluyendo fractura mandibular y otras heridas faciales<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>.',
    ],
    hallazgos: [
      { titulo:'Escoliosis idiopática adolescente severa', items:[
        { texto:'Columna torácica con curvatura lateral severa hacia la derecha.', refs:[2] },
        { texto:'Ángulo de Cobb estimado entre 70° y 90°.', refs:[2] },
        { texto:'Inicio probable en la adolescencia temprana (~10 años).', refs:[2] }
      ]},
      { titulo:'Traumatismos craneales', items:[
        { texto:'9 heridas perimortem. Traumatismos múltiples por fuerza cortante y penetrante, compatibles con un asalto sostenido por varios atacantes.', refs:[1] },
        { texto:'<strong>Occipital derecho:</strong> gran herida por fuerza cortante (65 mm × 50 mm) causada por un arma de hoja grande (espada o alabarda).', refs:[1] },
        { texto:'<strong>Occipital izquierdo:</strong> herida penetrante de 32 mm cerca del foramen magnum; el arma atravesó el cerebro hasta impactar la tabla interna opuesta.', refs:[1] },
        { texto:'<strong>Maxilar derecho:</strong> herida penetrante de 10 mm compatible con una daga rondel de sección cuadrada.', refs:[1] }
      ]},
      { titulo:'Traumatismos postcraneales', items:[
        { texto:'10.ª costilla derecha: marca de herramienta por fuerza cortante a 70 mm de la cabeza de la costilla; el impacto fue desde atrás y no penetró la cavidad torácica.', refs:[1] },
        { texto:'Pelvis: herida incisa de 30 mm que atraviesa la rama púbica superior. La trayectoria indica que el arma entró por la nalga derecha.', refs:[1] },
        { texto:'Se considera probable que estas lesiones fueran infligidas post-mortem, dada la protección que ofrecía la armadura medieval en estas zonas.', refs:[1] }
      ]}
    ],
    referencias: [
      { id:1, autores:'Appleby J, Mitchell P, Robinson C, Brough A, Rutty G, Harris R, et al.', anio:'2015', titulo:'Perimortem trauma in King Richard III: a skeletal analysis', editorial:'Lancet', doi:'https://doi.org/10.1016/S0140-6736(14)60804-7' },
      { id:2, autores:'Halsey T, Hutton T, Carr A, Appleby J.', anio:'2014', titulo:'The scoliosis of Richard III, last Plantagenet King of England: diagnosis and clinical significance', editorial:'Lancet', doi:'https://doi.org/10.1016/S0140-6736(14)60762-5' },
      { id:3, autores:'Wikimedia Commons.', anio:'2026', titulo:'Portrait of King Richard III [Internet]. Wikimedia Foundation; [cited 2026 May 14]', editorial:'Wikimedia Foundation', doi:'https://commons.wikimedia.org' },
      { id:4, autores:'University of Leicester.', anio:'2026', titulo:'Richard III: scientific investigation and skeletal analysis [Internet]. [cited 2026 May 14]', editorial:'University of Leicester', doi:'https://www.le.ac.uk/richardiii' },
      { id:5, autores:'OpenAI.', anio:'2026', titulo:'ChatGPT [Internet]. [cited 2026 May 14]', editorial:'OpenAI, San Francisco (CA)', doi:'https://chat.openai.com' }
    ],
    imagenes: [
      { src:'/prueba-museo/assets/img/H002/rey_ricardo.jpg', caption:'Figura 1. Retrato histórico de Richard III. Imagen obtenida de Wikipedia Commons.' },
      { src:'/prueba-museo/assets/img/H002/heridas_craneales_real.jpg', caption:'Figura 2. Vista inferior del cráneo de Richard III mostrando dos traumatismos craneales perimortem potencialmente letales: 5) extensa lesión cortante occipital y 6) herida penetrante en la base izquierda del cráneo compatible con arma blanca medieval. Imagen: University of Leicester.' },
      { src:'/prueba-museo/assets/img/H002/heridas_craneales.png', caption:'Figura 3. Reconstrucción de las principales lesiones craneales perimortem de Richard III: 1) gran lesión occipital, 2) herida penetrante en la base izquierda del cráneo, 3) corte lineal en la mandíbula derecha, 4) perforación en el maxilar derecho y 5) múltiples marcas de cortes superficiales. Ilustración generada con ChatGPT (OpenAI) a partir de evidencia paleopatológica publicada.' },
      { src:'/prueba-museo/assets/img/H002/heridas_postcraneales.png', caption:'Figura 4. Reconstrucción de las principales lesiones postcraneales y craneales adicionales de Richard III: 1) lesión cortante en la décima costilla, 2) herida incisa en la pelvis y 3) traumatismos superficiales compatibles con agresiones peri- o postmortem. Ilustración generada con ChatGPT (OpenAI) a partir de evidencia paleopatológica publicada.' }
    ],
    layoutMode:'default'
  }

]; /* fin PIEZAS */


/* ══════════════════════════════════════════════════════════════════
   ETIQUETAS_CAMPOS
   ──────────────────────────────────────────────────────────────────
   Mapea cada clave de campo de PIEZAS a su etiqueta legible para
   los grids de datos de la ficha maestra.
   Añade aquí cualquier campo nuevo que uses en datosKeys[].
══════════════════════════════════════════════════════════════════ */
const ETIQUETAS_CAMPOS = {
  /* Identificación */
  yacimiento:           'Yacimiento',
  cronologia:           'Cronología',
  sexo:                 'Sexo biológico',
  edad:                 'Edad estimada',
  conservacion:         'Conservación',
  diagnostico_principal:'Diagnóstico',

  /* Morfología craneal */
  indice_cefalico:      'Índice cefálico',
  indice_nasal:         'Índice nasal',
  capacidad_craneal:    'Capacidad craneal',
  forma_craneal:        'Forma craneal',
  sutura_sagital:       'Sutura sagital',

  /* Datos patológicos */
  diametro_lesion:      'Diámetro lesión',
  localizacion_lesion:  'Localización',
  tecnica_quirurgica:   'Técnica',
  supervivencia:        'Supervivencia',
  bisel_interno:        'Bisel interno',
  remodelacion:         'Remodelación',
  senal_infeccion:      'Señal infección',
  inion:                'Inión',
  suturas_lambdoideas:  'Sut. lambdoideas',
  patologia_adicional:  'Pat. adicional'
};


/* ══════════════════════════════════════════════════════════════════
   FICHAS MAESTRAS
   ──────────────────────────────────────────────────────────────────
   Solo instrucciones de scrollytelling. Cero datos, cero textos.
   Todo el contenido viene de PIEZAS[id].

   Cada step:
     hallazgoIndex → pieza.hallazgos[N] (fuente del texto)
     datosKeys[]   → campos de la pieza a mostrar en la grid
                     (las etiquetas vienen de ETIQUETAS_CAMPOS)
     accentColor   → color CSS de la barra superior de la card
     alerta        → aviso específico del step (null si no hay)
     tags          → array de { texto, color, borderColor }
                     (null si no hay)
     camara{}      → instrucciones para model-viewer

   SISTEMA DE CÁMARA:
     orbit  = "azimuth elevation zoom"
       azimuth:    0deg=frente  90deg=derecha  180deg=espalda  -90deg=izquierda
       elevation: 90deg=ecuador  0deg=cenital  180deg=inferior
       zoom:     100%=base  80%=cerca  60%=muy cerca  120%=lejos
     target = "Xm Ym Zm"  (desplaza el pivote del modelo)
       Y positivo → sube (hacia el techo del cráneo)
       X positivo → desplaza a la derecha del modelo

   CALIBRACIÓN MANUAL:
     1. Añade camera-controls al #main-viewer en ficha-maestra.html
     2. Navega al ángulo deseado en el navegador
     3. DevTools consola:
          document.querySelector('#main-viewer').cameraOrbit
          document.querySelector('#main-viewer').cameraTarget
     4. Copia los valores aquí y quita camera-controls
══════════════════════════════════════════════════════════════════ */
const FICHAS_MAESTRAS = {

  /* ── OV-001 · Cráneo con trepanación ──────────────────────── */
  'OV-001': [

    /* STEP 0 — Vista general / rotación automática */
    {
      hallazgoIndex: 0,
      datosKeys:    ['yacimiento', 'cronologia', 'sexo', 'edad'],
      accentColor:  'var(--fm-cyan)',
      alerta:       null,
      tags: [
        { texto:'💀 Cráneo',      color:'#00a8bf', borderColor:'#00e5ff' },
        { texto:'⚡ Traumatismo', color:'#c0003c', borderColor:'#c0003c' },
        { texto:'📅 Neolítico',   color:'#b08d55', borderColor:'#b08d55' }
      ],
      camara: {
        orbit:      '0deg 80deg 100%',
        target:     '0m 0m 0m',
        label:      'Vista general',
        autorotate: true,
        zoomLabel:  'zoom ×1',
        hint:       'Vista rotativa — el modelo gira automáticamente'
      }
    },

    /* STEP 1 — Norma faciei
       Cambio vs anterior: zoom +28%, pivote sube hacia región orbital */
    {
      hallazgoIndex: 1,
      datosKeys:    ['indice_cefalico', 'indice_nasal', 'capacidad_craneal', 'forma_craneal'],
      accentColor:  'var(--fm-crimson)',
      alerta:       null,
      tags:         null,
      camara: {
        orbit:      '0deg 78deg 72%',
        target:     '0m 0.04m 0.01m',
        label:      'Vista frontal — norma faciei',
        autorotate: false,
        zoomLabel:  'zoom ×1.4',
        hint:       'Acercamiento frontal — norma faciei (zoom ×1.4)'
      }
    },

    /* STEP 2 — Trepanación parietal derecho
       Cambio vs anterior: giro 55° + casi cenital + zoom ×1.8
       ⚠ Si la lesión queda fuera: incrementar target Y (0.10, 0.12...)
               o ajustar azimuth a 65–75deg si está más atrás */
    {
      hallazgoIndex: 2,
      datosKeys:    ['diametro_lesion', 'localizacion_lesion', 'tecnica_quirurgica', 'supervivencia'],
      accentColor:  'var(--fm-crimson)',
      alerta:       'Hallazgo principal — trepanación circular de 35 mm en el tercio posterior del parietal derecho.',
      tags:         null,
      camara: {
        orbit:      '55deg 35deg 55%',
        target:     '0.02m 0.09m 0m',
        label:      'Parietal derecho — localización',
        autorotate: false,
        zoomLabel:  'zoom ×1.8',
        hint:       'Vista superior-derecha — parietal derecho (zoom ×1.8)'
      }
    },

    /* STEP 3 — Detalle del bisel
       Cambio vs anterior: casi cenital + zoom ×2.4 (máximo)
       ⚠ Si el modelo se recorta: subir zoom a 48–50% */
    {
      hallazgoIndex: 3,
      datosKeys:    ['bisel_interno', 'remodelacion', 'senal_infeccion', 'supervivencia'],
      accentColor:  'var(--fm-sulfur)',
      alerta:       null,
      tags:         null,
      camara: {
        orbit:      '60deg 20deg 42%',
        target:     '0.025m 0.1m -0.01m',
        label:      'Detalle máximo — bisel de trepanación',
        autorotate: false,
        zoomLabel:  'zoom ×2.4',
        hint:       'Vista cenital — norma verticalis, máximo detalle (zoom ×2.4)'
      }
    },

    /* STEP 4 — Norma occipitalis
       Cambio vs anterior: giro 180° al reverso + zoom out */
    {
      hallazgoIndex: 4,
      datosKeys:    ['inion', 'suturas_lambdoideas', 'conservacion', 'patologia_adicional'],
      accentColor:  'var(--fm-cyan)',
      alerta:       null,
      tags: [
        { texto:'Pieza destacada',         color:'#8a9200', borderColor:'#d4e60a' },
        { texto:'Ficha maestra',            color:'#00a8bf', borderColor:'#00e5ff' },
        { texto:'Supervivencia confirmada', color:'#c0003c', borderColor:'#c0003c' }
      ],
      camara: {
        orbit:      '180deg 85deg 90%',
        target:     '0m 0.02m 0m',
        label:      'Vista posterior — norma occipitalis',
        autorotate: false,
        zoomLabel:  'zoom ×1.1',
        hint:       'Vista posterior — norma occipitalis (giro 180° respecto al frente)'
      }
    }

  ], /* fin OV-001 */

  /*
   * PLANTILLA PARA NUEVA FICHA MAESTRA
   * ─────────────────────────────────────────────────────────────
   * 1. Añade los campos de datos a la pieza en PIEZAS
   *    (ej: diametro_lesion, tecnica_quirurgica...)
   * 2. Añade sus etiquetas en ETIQUETAS_CAMPOS
   * 3. Añade los hallazgos[] a la pieza (uno por step)
   * 4. Crea su entrada aquí:
   *
   * 'OV-001': [
   *   {
   *     hallazgoIndex: 0,
   *     datosKeys: ['yacimiento', 'cronologia', 'edad', 'sexo'],
   *     accentColor: 'var(--fm-cyan)',
   *     alerta: null,
   *     tags: null,
   *     camara: {
   *       orbit: '0deg 80deg 100%', target: '0m 0m 0m',
   *       label: 'Vista general', autorotate: true,
   *       zoomLabel: 'zoom ×1', hint: '...'
   *     }
   *   },
   *   { hallazgoIndex: 1, datosKeys: [...], camara: {...} },
   * ]
   */

}; /* fin FICHAS_MAESTRAS */


/* ══════════════════════════════════════════
   VOCABULARIO
══════════════════════════════════════════ */
const VOCABULARIO = {
  region: {
    craneo:               { label:'Cráneo',             icon:'💀' },
    columna:              { label:'Columna vertebral',  icon:'🦴' },
    torax:                { label:'Tórax / Costillas',  icon:'🫁' },
    'miembro-superior':   { label:'Miembro superior',   icon:'💪' },
    pelvis:               { label:'Pelvis',              icon:'🦵' },
    'miembro-inferior':   { label:'Miembro inferior',   icon:'🦿' },
    'individuo-completo': { label:'Individuo completo', icon:'🧍🏼' }
  },
  patologia: {
    trauma:       { label:'Traumatismos',            icon:'⚡',  color:'#FF4D6D' },
    infecciosa:   { label:'Infecciosas',             icon:'🦠',  color:'#00E5FF' },
    especifica:   { label:'Enf. específicas',        icon:'🔬',  color:'#7B00CC' },
    metabolica:   { label:'Metabólicas',             icon:'🧬',  color:'#C6E800' },
    endocrino:    { label:'T. endocrinos',           icon:'⚗️', color:'#C87800' },
    tumor:        { label:'Tumores y quistes',       icon:'🔴',  color:'#CC4400' },  
    degenerativa: { label:'Degenerativas',           icon:'⚙️', color:'#FFB300' },
    congenita:    { label:'Congénitas',              icon:'🧬',  color:'#FF6EB4' },
  }, 
sexo: {
    masculino:     { label:'Masculino',     icon:'♂' },
    femenino:      { label:'Femenino',      icon:'♀' },
    indeterminado: { label:'Indeterminado', icon:'◎' }
  },
  epoca: {
    prehistoria: { label:'Prehistoria',   range:'—3000 a.C.'   },
    romano:      { label:'Época romana',  range:'I–V d.C.'     },
    medieval:    { label:'Edad Media',    range:'V–XV d.C.'    },
    moderno:     { label:'Época moderna', range:'XVI–XIX d.C.' }
  }
};


/* ══════════════════════════════════════════
   GLOSARIO
══════════════════════════════════════════ */
const GLOSARIO = [

  // ── ORIENTACIÓN ──────────────────────────────────────────────────────────
  {
    termino: "Proximal",
    categoria: "ORIENTACIÓN",
    acepciones: [
      "adj. Próximo al punto de origen o inserción de una extremidad, de un vaso sanguíneo, de un vaso linfático o de un nervio."
    ],
    sinonimos: [],
    obs: "Generalmente por contraposición a distal.",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Distal",
    categoria: "ORIENTACIÓN",
    acepciones: [
      "adj. Alejado del punto de origen o inserción de una extremidad, de un vaso sanguíneo, de un vaso linfático o de un nervio."
    ],
    sinonimos: [],
    obs: "Generalmente por contraposición a proximal.",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Medial",
    categoria: "ORIENTACIÓN",
    acepciones: [
      "adj. Situado cerca de la línea media o del plano sagital medio."
    ],
    sinonimos: ["Interno"],
    obs: "Generalmente por contraposición a lateral.",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Lateral",
    categoria: "ORIENTACIÓN",
    acepciones: [
      "adj. Situado lejos de la línea media o del plano sagital medio."
    ],
    sinonimos: ["externo"],
    obs: "Generalmente por contraposición a medial.",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Anterior o Ventral",
    categoria: "ORIENTACIÓN",
    acepciones: [
      "adj. Situado en la parte anterior del cuerpo, por delante del plano coronal o frontal, o delante de otra estructura corporal."
    ],
    sinonimos: ["frontal", "ventral"],
    obs: "En la cabeza se usa también con este sentido \"rostral\".",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Posterior o Dorsal",
    categoria: "ORIENTACIÓN",
    acepciones: [
      "adj. Situado en la parte dorsal del cuerpo, es decir, por detrás del plano coronal o frontal, o detrás de otra estructura corporal."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Plano Sagital",
    categoria: "ORIENTACIÓN",
    acepciones: [
      "s.m. Plano de simetría longitudinal que pasa por la sutura sagital y divide el cuerpo en una mitad derecha y otra izquierda.",
      "s.m. Cualquiera de los planos longitudinales que discurren paralelos al plano sagital medio."
    ],
    sinonimos: ["plano mediano", "plano medio", "plano mediosagital", "plano sagital medio", "plano paramediano", "plano parasagital"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Plano Coronal o Frontal",
    categoria: "ORIENTACIÓN",
    acepciones: [
      "s.m. Cualquier plano vertical, perpendicular al plano del suelo, que atraviesa el cuerpo situado en posición anatómica de la cabeza a los pies y de derecha a izquierda, que pasa por el eje del cuerpo o es paralelo al mismo, formando un ángulo recto con el plano medio o sagital, dividiendo el cuerpo, de forma imaginaria, en una parte anterior o facial y otra posterior o dorsal."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Plano Transversal o Axial",
    categoria: "ORIENTACIÓN",
    acepciones: [
      "s.m. Que atraviesa de un costado a otro del cuerpo, un órgano, otra estructura anatómica o un objeto, y es perpendicular al eje longitudinal del segmento atravesado."
    ],
    sinonimos: [],
    obs: "Generalmente por contraposición a longitudinal.",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Rostral",
    categoria: "ORIENTACIÓN",
    acepciones: [],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Caudal",
    categoria: "ORIENTACIÓN",
    acepciones: [
      "adj. De la cola o relacionado con ella."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },

  // ── ANATOMÍA ─────────────────────────────────────────────────────────────
  {
    termino: "Epífisis",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.f. Extremidad articular de un hueso largo, nacida de un centro secundario de osificación y unida a la diáfisis; hasta el final de la pubertad, queda separada de la diáfisis por el cartílago de crecimiento."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Diáfisis",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.f. Cuerpo o tallo de un hueso largo, desarrollado a partir de un centro de osificación primario y comprendido entre sus extremos o epífisis."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Metáfisis",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.f. Zona de crecimiento de los huesos largos, adyacente al cartílago de crecimiento, situada entre la epífisis y la diáfisis y cuyos límites se borran al alcanzar la vida adulta."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Apófisis",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.f. Prominencia, saliente o eminencia natural de un hueso. Es lugar habitual de inserción muscular."
    ],
    sinonimos: ["proceso"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Entesis",
    categoria: "ANATOMÍA",
    acepciones: [
      "Conjunto de la inserción de tendones, ligamentos, fascias y cápsulas articulares en un hueso y de la zona de hueso en que se insertan. Son de dos tipos: fibrosas, que corresponden a las inserciones en las metáfisis y en las diáfisis de los huesos largos, formadas por tejido conjuntivo denso similar al de la estructura insertada, y fibrocartilaginosas, que corresponden a las inserciones en las apófisis y epífisis de los huesos largos, en los huesos cortos de las manos y de los pies y a ligamentos de la columna vertebral, cuya estructura es bastante más compleja y está formada por cuatro capas sucesivas: tejido fibroso denso, fibrocartílago no calcificado, fibrocartílago calcificado y hueso subcondral. Sus funciones son: proporcionar anclaje de tejidos blandos a los huesos, distribuir las tensiones mecánicas sobre la superficie de inserción y promover el crecimiento de los huesos."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Foramen Nutricio",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.m. Pequeño orificio situado en la superficie de los huesos a través del cual pasan los vasos sanguíneos que nutren el tejido óseo. Estos vasos, conocidos como arterias nutricias, penetran en el hueso compacto para suministrar nutrientes y oxígeno a la médula ósea y al propio hueso."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "IMAIOS", url: "https://www.imaios.com/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Periostio",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.m. Capa de tejido conjuntivo fibroelástico denso que constituye la capa más externa de los huesos, salvo en las superficies articulares, en las que es reemplazado por cartílago hialino, y que establece la unión con las partes blandas perióseas y las estructuras tendinosas y ligamentosas, fusionándose con el pericondrio y el peritenio en los puntos de inserción de cartílagos y tendones, respectivamente. Consta de dos capas, especialmente visibles en los huesos jóvenes. La externa es un estrato fibroso denso irrigado por una red vascular; la interna consiste en una malla más laxa de tejido conjuntivo fibroelástico en el que existen células fusiformes con potencial osteoblástico, lo que permite al periostio intervenir en el proceso de reparación de fracturas y en el aumento de grosor óseo durante el crecimiento. Esta capa está íntimamente adherida a la superficie ósea por las fibras de Sharpey."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Endostio",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.m. Membrana de tejido conjuntivo, similar al periostio pero mucho más delgada, que tapiza la cavidad medular de los huesos largos, la superficie de las trabéculas óseas del tejido esponjoso y los conductos vasculares (conductos de Havers y de Volkmann) del tejido óseo compacto. Se continúa con la capa interna del periostio en los orificios vasculares que perforan el hueso. Está dotada de células osteoprogenitoras y de osteoclastos."
    ],
    sinonimos: ["periostio interno"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Capa Cortical o Hueso Compacto",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.f./s.m. Región de un hueso cuya estructura histológica está formada por tejido óseo compacto laminar o no laminar. El carácter compacto viene determinado por el volumen de masa ósea en relación con el calibre de las cavidades o espacios vasculares, los cuales no son observables macroscópicamente. Existe hueso compacto formado por tejido óseo no laminar en la diáfisis de los huesos largos en desarrollo y hueso compacto formado por tejido óseo laminar en la diáfisis de los huesos largos del adulto y en la periferia de los huesos planos."
    ],
    sinonimos: ["sustancia compacta", "tejido compacto", "tejido óseo compacto"],
    obs: "Los términos \"hueso compacto\" y \"hueso cortical\" se usan con frecuencia de forma intercambiable.",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Hueso Trabecular o Esponjoso",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.m. Tejido óseo formado por una trama tridimensional de trabéculas óseas que delimita espacios ocupados por la médula ósea."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Cavidad Medular",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.f. Cavidad diafisaria de los huesos largos, que contiene la médula ósea y está revestida por el endostio."
    ],
    sinonimos: ["canal medular"],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Cóndilo",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.m. Prominencia redondeada o ensanchamiento en la extremidad de un hueso, generalmente con función articular."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Tuberosidad",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.f. Protuberancia o eminencia irregulares en la superficie de una estructura anatómica, en particular la de algunos huesos donde se insertan músculos o ligamentos."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Tubérculo",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.m. Protuberancia natural y, por lo general, redonda en la superficie de un hueso u otra estructura anatómica.",
      "s.m. Granuloma inmunitario, característico de la infección por Mycobacterium tuberculosis, compuesto por células epitelioides rodeadas de fibroblastos, linfocitos, histiocitos y, en ocasiones, células gigantes de Langhans; a diferencia de otros granulomas, es característica la presencia de necrosis caseosa central."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Cresta ósea",
    categoria: "ANATOMÍA",
    acepciones: [],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Fosa",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.f. Excavación, cavidad, hueco, depresión o área hundida en una estructura anatómica."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Surco",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.m. Depresión lineal o hendidura."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Escotadura",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.f. incisura."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Incisura",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.f. Hendidura, indentación o depresión en un hueso, una víscera u otra estructura anatómica."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Faceta articular",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.f. carilla articular.",
      "s.f. Superficie ósea pequeña, lisa y revestida de cartílago que se articula con otra, como las carillas articulares de las apófisis articulares superiores e inferiores de las vértebras."
    ],
    sinonimos: ["carilla articular"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Platillo vertebral",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.m. Cara superior (placa de cubierta) e inferior (placa de base) del cuerpo vertebral. Existe un platillo vertebral óseo y otro cartilaginoso. El primero corresponde al tejido óseo compacto que rodea el tejido esponjoso del cuerpo vertebral. El platillo cartilaginoso o epífisis vertebral, que cubre el platillo óseo, es el cartílago de crecimiento del cuerpo vertebral hasta que se alcanza la madurez esquelética; al llegar este momento, los 2 o 3 mm periféricos se calcifican y se fusionan con el borde del cuerpo vertebral (rodete marginal), en tanto que su porción central persiste durante toda la vida (placa terminal) con un grosor de 1 mm aproximadamente, y es considerada como parte integrante del disco intervertebral. Está constituido por cartílago hialino, que predomina en el niño y está en contacto con el platillo óseo, y por fibrocartílago, más abundante en el adulto y en contacto con el núcleo pulposo."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Sutura craneal",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.f. Cada una de las sinartrosis que unen los huesos del cráneo."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Trabécula",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.f. Unidad estructural en forma de banda que, procedente de la pared o de la cápsula de un órgano, separa el interior de este en distintas áreas o regiones."
    ],
    sinonimos: ["séptulo (infrecuente)"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Médula Ósea",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.f. Tejido blando que ocupa las cavidades de los huesos (preferentemente la pelvis, el esternón y la columna vertebral) y que desempeña la función hematopoyética en los adultos."
    ],
    sinonimos: ["médula", "tuétano (coloquial)"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Cartílago articular",
    categoria: "ANATOMÍA",
    acepciones: [],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Fibra de Sharpey",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.f. Haz de fibras de colágeno que penetra en el hueso desde la capa fibrosa del periostio hasta el sistema circunferencial externo y, en ocasiones, alcanza las brechas o laminillas intersticiales. Las fibras de colágeno del haz no están cubiertas de material cálcico y su función consiste en asegurar la fijación del periostio al hueso.",
      "s.f. Haz de fibras de colágeno del desmodonto o ligamento periodontal cuyos extremos se insertan, respectivamente, en el hueso alveolar y en el cemento."
    ],
    sinonimos: ["fibra perforante"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Sinartrosis",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.f. Articulación de los extremos óseos por medio de un tejido fibroso o cartilaginoso que los inmoviliza; comprende las sindesmosis, las sincondrosis y las suturas."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Sindesmosis",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.f. Sinartrosis caracterizada por superficies articulares amplias unidas mediante un robusto ligamento o membrana interóseos, como la radiocubital."
    ],
    sinonimos: ["articulación sindesmótica", "sínfisis fibrosa"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Sincondrosis",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.f. Sinartrosis de los extremos óseos por medio de tejido cartilaginoso o fibrocartilaginoso."
    ],
    sinonimos: ["articulación sincondrótica (infrecuente)"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Sutura",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.f. Sinartrosis con unión íntima de los extremos óseos mediante tejido fibroso.",
      "s.f. sutura craneal.",
      "s.f. Acción de suturar.",
      "s.f. Unión quirúrgica, mediante hilos o grapas, de los bordes de una herida o de una solución de continuidad en cualquier órgano o tejido."
    ],
    sinonimos: ["sinfibrosis", "sutura anatómica", "comisura (infrecuente)", "saturación", "síntesis", "sutura quirúrgica"],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Osteona",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.f. Unidad estructural y funcional del hueso compacto, de forma cilíndrica, formada por un tejido óseo laminar cuyas laminillas se disponen concéntricamente alrededor de un canal central, denominado canal de Havers. La osteona tiene un diámetro de entre 100 y 500 μm y una longitud de varios centímetros, con orientación longitudinal en la configuración estructural del hueso, aunque muestre algunas ramificaciones. El número de laminillas en cada osteona oscila entre 4 y 25. La orientación de las fibras de colágeno es idéntica en cada laminilla, pero difiere de una laminilla a otra. Entre las laminillas se disponen los osteoceles u osteoplasmas, que contienen el cuerpo celular de los osteocitos. De los osteoceles nacen los canalículos o conductos calcóforos internos, externos, circunferenciales y axiales ascendentes y descendentes, que contienen las prolongaciones citoplasmáticas de los osteocitos. La limitante externa de la osteona se denomina línea de cemento de Ebner."
    ],
    sinonimos: ["ostión", "sistema de Havers", "sistema haversiano", "sistema laminar de Havers (infrecuente)"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },

  // ── LESIONES ─────────────────────────────────────────────────────────────
  {
    termino: "Osteoclástica",
    categoria: "LESIONES",
    acepciones: [
      "adj. De los osteoclastos o relacionado con ellos.",
      "adj. Aplicado a una lesión ósea: que presenta reabsorción osteoclástica."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Reparación de Fractura",
    categoria: "LESIONES",
    acepciones: [
      "El aporte sanguíneo se altera, causando la muerte inmediata del hueso adyacente a la fractura. Simultáneamente, la sangre se coagula en los tejidos circundantes.",
      "Se forma un callo de fractura en torno a la zona de lesión, que une las partes separadas y proporciona soporte mientras se reemplaza el hueso permanente. Este callo comienza a desarrollarse unos 16 días después de la fractura y se termina de formar sobre los 30 días.",
      "El callo se convierte lentamente en hueso permanente por un proceso de remodelado. Se requieren años para restaurar la apariencia original."
    ],
    sinonimos: [],
    obs: "Varía con la complejidad de la fractura, la constitución del individuo y otros diversos factores.",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Reacción Perióstica",
    categoria: "LESIONES",
    acepciones: [
      "s.f. Formación de nuevo hueso en respuesta a un daño u otro estímulo del periostio que rodea el hueso. A menudo es identificado con rayos X."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "Wikipedia", url: "https://es.wikipedia.org/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Remodelado Óseo",
    categoria: "LESIONES",
    acepciones: [],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Osteólisis",
    categoria: "LESIONES",
    acepciones: [
      "s.f. Lesión ósea elemental que consiste en la desaparición de una porción de tejido óseo o de uno o varios huesos contiguos completos sin que queden vestigios de tejido óseo, aunque puedan observarse algunos restos de tejido conjuntivo. Puede encontrarse esta lesión en numerosos procesos patológicos: osteomielitis, tumores óseos primarios, metástasis óseas, artropatías neuropáticas (tabética, siringomielia, lepra nerviosa, artropatía ulceromutilante de Thévenard), artritis reumatoide y osteólisis esencial, con sus dos formas: osteólisis masiva idiopática (enfermedad de Gorham) y acroosteólisis idiopática."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Osteoesclerosis",
    categoria: "LESIONES",
    acepciones: [
      "s.f. Lesión anatómica elemental del tejido óseo que consiste en la condensación de los conductos de Havers y de los espacios medulares; pueden aparecer zonas de necrosis por compromiso vascular intraóseo secundario. En el examen macroscópico, el hueso presenta aspecto de marfil y es muy duro, aunque puede ser frágil si hay alteración concomitante de la configuración de las trabéculas. La lesión puede ser localizada (osteomielitis crónicas, tumores óseos osteoblásticos, osteopoiquilia punteada o estriada, melorreostosis, enfermedad de Paget) o generalizada (osteopetrosis, picnodisostosis, mastocitosis, intoxicación crónica por flúor, anemia osteoesclerótica)."
    ],
    sinonimos: ["condensación ósea", "eburnación", "esclerosis ósea", "osteocondensación"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Osteoblástica",
    categoria: "LESIONES",
    acepciones: [
      "adj. De los osteoblastos o relacionado con ellos.",
      "adj. Que forma o produce tejido óseo."
    ],
    sinonimos: ["esqueletógeno", "osteógeno"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Neoformación Ósea",
    categoria: "LESIONES",
    acepciones: [],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Destrucción Cortical",
    categoria: "LESIONES",
    acepciones: [],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Callo Óseo",
    categoria: "LESIONES",
    acepciones: [
      "s.m. Tejido óseo esponjoso inmaduro que, de modo temporal, inmoviliza los fragmentos de una fractura y asegura la continuidad del hueso fracturado mientras se restablece la continuidad de los sistemas de Havers de los fragmentos. El callo de fractura se subdivide en callo óseo interno, constituido por un tejido óseo esponjoso inmaduro formado por osificación intramembranosa, y callo óseo externo, constituido por un tejido óseo esponjoso inmaduro formado por osificación intramembranosa y endocondral. Una vez establecida la continuidad del tejido óseo, cesa la necesidad de un callo de fijación y ambos callos, interno y externo, se reabsorben."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Fractura",
    categoria: "LESIONES",
    acepciones: [
      "s.f. Alteración de la estructura normal de un hueso, normalmente resultante de un traumatismo. Esta alteración puede limitarse a una parte cortical o puede romper el hueso completamente. En cualquier caso, las fracturas suelen acompañarse de laceración de los tejidos blandos adyacentes y vasos sanguíneos. La infección es una complicación frecuente en el proceso de reparación. Además, la falta de aporte sanguíneo puede conducir a la necrosis (muerte fisiológica) de todo o parte del tejido óseo en torno a la fractura."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "Enterramientos Humanos: Excavación, Análisis, Interpretación (AEP)", url: "" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Osteofito",
    categoria: "LESIONES",
    acepciones: [
      "s.m. Excrecencia o protuberancia en la superficie de un hueso, generalmente de origen periostio, que se desarrolla en las proximidades de una articulación, sobre todo en el curso de una artrosis. Suele englobar la inserción de un ligamento o de la cápsula articular."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Nódulos de Schmorl",
    categoria: "LESIONES",
    acepciones: [
      "s.m. Hernia del núcleo pulposo del disco intervertebral, a través de una solución de continuidad en la placa de cubierta o de base del cuerpo vertebral adyacente. Puede ser única o múltiple y la mayoría asienta en los dos tercios posteriores del platillo vertebral, con más frecuencia, superior, de las seis últimas vértebras dorsales y de las dos primeras lumbares. En el examen radiológico, aparece como una lesión radiotransparente rodeada de un casquete de hueso esclerótico."
    ],
    sinonimos: ["hernia discal intraesponjosa", "hernia de Schmorl"],
    obs: "Con frecuencia en plural.",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Criba Orbitalia",
    categoria: "LESIONES",
    acepciones: [],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Hiperostosis",
    categoria: "LESIONES",
    acepciones: [
      "s.f. Incremento anormal de la osificación del sistema esquelético distinta al crecimiento reactivo a una carga. Esta neoformación puede ser localizada o difusa. Es típica la hiperostosis esternoclavicular o la hiperostosis perióstica asociada a la hipervitaminosis A; también se describen la hiperostosis cortical infantil, la hiperostosis frontal interna y la hiperostosis esquelética idiopática difusa (enfermedad de Forestier-Rotés Querol). Asimismo, se puede encontrar en huesos maxilares; en la mandíbula recibe el nombre de torus mandibular y suele ser simétrico y afectar a la región lingual y maxilar inferior."
    ],
    sinonimos: ["hiperosteogénesis (infrecuente)", "hiperosteogenia (infrecuente)"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Entesopatía",
    categoria: "LESIONES",
    acepciones: [
      "s.f. Cualquier trastorno o enfermedad que afecta a las entesis."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Hipoplasia de Esmalte Dental",
    categoria: "LESIONES",
    acepciones: [],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Marcadores de Estrés Musculoesquelético (MEM)",
    categoria: "LESIONES",
    acepciones: [],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Fractura Deprimida",
    categoria: "LESIONES",
    acepciones: [],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Fractura conminuta",
    categoria: "LESIONES",
    acepciones: [
      "s.f. Fractura con múltiples fragmentos."
    ],
    sinonimos: ["fractura con conminución", "sintripsis (infrecuente)"],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Seudoartrosis",
    categoria: "LESIONES",
    acepciones: [
      "s.f. Falta definitiva de consolidación entre los extremos óseos de una fractura o los resultantes de una resección ósea extensa. Se debe a la persistencia de movimientos anormales en el foco de fractura, sobre todo de deslizamiento, rotación y cizallamiento, a causa de una inmovilización inadecuada o insuficientemente prolongada en el tiempo. Otro factor importante es la falta de continuidad del hematoma fractuario por interposición de partes blandas en los extremos óseos. Existen tres tipos anatomopatológicos: flotante o libre, sin contacto entre los extremos óseos; fibrosa, la más frecuente, con unión de los extremos óseos por tejido fibroso; y fibrosinovial, en la que los extremos óseos están revestidos de fibrocartílago y unidos por una cápsula fibrosa periférica revestida de sinovial en su cara interna. Se distinguen además dos tipos principales: seudoartrosis atrófica, con extremos óseos afilados o redondeados y distanciados entre sí; y seudoartrosis hipertrófica, con extremos anchos y abultados, separados por una línea fina e irregular. Generalmente requieren tratamiento quirúrgico."
    ],
    sinonimos: ["falsa articulación", "pseudoarticulación", "pseudoartrosis", "seudoarticulación"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Luxación",
    categoria: "LESIONES",
    acepciones: [
      "s.f. Acción o efecto de luxar o luxarse.",
      "s.f. Desplazamiento permanente de los huesos de una articulación, de modo que las superficies articulares pierden sus relaciones anatómicas normales.",
      "Luxación completa: luxación en la que las superficies articulares pierden totalmente el contacto."
    ],
    sinonimos: ["abarticulación (infrecuente)", "desarticulación (infrecuente)", "dislocación", "lujación", "zafadura (coloquial)"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Trepanación",
    categoria: "LESIONES",
    acepciones: [
      "s.f. Acción o efecto de trepanar.",
      "s.f. Operación quirúrgica practicada mediante trepanación.",
      "s.f. Orificio practicado con ayuda de un trépano."
    ],
    sinonimos: ["perforación", "transformación (infrecuente)", "tresis (infrecuente)", "tripesis (infrecuente)", "trefinación (desaconsejado)"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Anquilosis",
    categoria: "LESIONES",
    acepciones: [
      "s.f. Rigidez o inmovilidad anormal, total o parcial, de una articulación como consecuencia de la unión directa de los huesos, la proliferación de tejido fibroso o una intervención quirúrgica."
    ],
    sinonimos: ["acampsia (infrecuente)", "artroclisis (infrecuente)"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Caries",
    categoria: "LESIONES",
    acepciones: [
      "s.f. Enfermedad transmisible de los dientes, causada por bacterias bucales acidógenas y fermentadoras de azúcares, sobre todo Streptococcus mutans, que producen desmineralización del esmalte, y con posterioridad, erosión de la dentina y pulpitis dolorosa. Es el motivo más frecuente de pérdida dental antes de los 35 años de edad.",
      "s.f. Lesión en una pieza dental producida por caries."
    ],
    sinonimos: ["caries dental", "caries dentaria", "saprodoncia (infrecuente)", "picadura (coloquial)"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Absceso dental",
    categoria: "LESIONES",
    acepciones: [],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Erosión Dental",
    categoria: "LESIONES",
    acepciones: [
      "s.f. Desgaste de los dientes por fuerzas mecánicas ejercidas por un elemento extraño, fundamentalmente cepillos, dentífricos, hilo dental o aparatos extraíbles; los dientes más afectados son los premolares y los caninos."
    ],
    sinonimos: ["abrasión", "abrasión dental", "abrasión dentaria", "atrición dental", "atrición dentaria", "desgaste dental", "desgaste dentario", "erosión dentaria"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Sarro",
    categoria: "LESIONES",
    acepciones: [
      "s.m. Formación mineral y orgánica alrededor del diente, de color variable (por lo general, blanquecina, amarillenta o parduzca), que se produce por acumulación de sedimento sobre una placa dentaria no eliminada a tiempo."
    ],
    sinonimos: ["cálculo dental", "cálculo dentario", "odontolito", "sarro dental", "sarro dentario", "tártaro", "tártaro dental", "tártaro dentario", "toba (infrecuente)"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Pérdida antemortem dental",
    categoria: "LESIONES",
    acepciones: [],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Aplastamiento Vertebral",
    categoria: "LESIONES",
    acepciones: [
      "Fractura de una vértebra provocada por un mecanismo de fuerza axial o de compresión (y, en menor medida, de flexión). Afecta al cuerpo vertebral, pues compromete la pared anterior y el ligamento longitudinal anterior, lo que, en ocasiones, da lugar a una imagen característica en cuña fácilmente detectable en las proyecciones radiográficas laterales. A diferencia de las fracturas por estallido, el aplastamiento vertebral no afecta a la pared posterior del cuerpo vertebral. Entre el 60 % y el 75 % de las fracturas ocurren en el segmento toracolumbar (T12-L2). En personas de edad avanzada es la fractura por fragilidad más frecuente y su causa más común es la osteoporosis, mientras que en personas más jóvenes suele ocurrir después de un accidente de tráfico o una caída. Generalmente se considera una fractura estable y es infrecuente la afectación neurológica, por lo que el tratamiento debe ser conservador mediante ortesis durante un período variable de 4 a 12 semanas."
    ],
    sinonimos: ["acuñamiento", "acuñamiento del cuerpo vertebral", "acuñamiento vertebral", "aplastamiento del cuerpo vertebral", "colapso del cuerpo vertebral", "colapso vertebral", "compresión del cuerpo vertebral", "compresión vertebral"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },

  // ── ENFERMEDADES ─────────────────────────────────────────────────────────
  {
    termino: "Anemia Osteoesclerótica",
    categoria: "ENFERMEDADES",
    acepciones: [],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Enfermedad de Paget",
    categoria: "ENFERMEDADES",
    acepciones: [
      "s.f. Enfermedad ósea generalizada de causa desconocida, que cursa con un aumento de reabsorción y la neoformación óseas y en la que el tejido óseo adquiere una típica estructura de mosaico. El proceso origina un engrosamiento de los huesos y una incurvación de los huesos de carga. En algunos pacientes tiene carácter familiar. Se trata de una enfermedad genéticamente heterogénea en la que se han descrito mutaciones en diversos genes como TNFRSF11B (18q31), SQSTM1 (5q35), ZNF687 (1q21) y PFN1 (17p13). El gen TNFRSF11B, que codifica la proteína osteoprotegerina, es responsable de la enfermedad de Paget juvenil, caracterizada por una diferenciación osteoclástica y reabsorción ósea incontroladas."
    ],
    sinonimos: ["enfermedad ósea de Paget", "osteítis deformante", "osteopatía de Paget", "escleromalacia múltiple (infrecuente)", "osteítis deformante hipertrófica (infrecuente)", "osteodistrofia deformante (infrecuente)", "osteopatía pagética (infrecuente)", "osteosis pagética (infrecuente)", "síndrome de Paget (infrecuente)"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Osteomielitis",
    categoria: "ENFERMEDADES",
    acepciones: [
      "s.f. Inflamación simultánea del hueso y de la médula ósea debida generalmente a microorganismos piógenos, aunque puede ser originada por otros microbios patógenos. En épocas anteriores se producía generalmente por vía hematógena, por microorganismos procedentes de un foco séptico, pero ahora son más frecuentes las producidas por contagio directo, bien sea en el caso de las fracturas abiertas, bien después de intervenciones quirúrgicas sobre huesos realizadas sin las debidas garantías de asepsia o que, mal tratadas después de la intervención, son asiento de una complicación postoperatoria. Con escasa frecuencia se deben a la propagación por continuidad de una lesión séptica de las partes blandas vecinas. Según el curso evolutivo, se clasifican en agudas y crónicas."
    ],
    sinonimos: ["mielitis (infrecuente)"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Tumor Osteoblástico",
    categoria: "ENFERMEDADES",
    acepciones: [],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Osteopoiquilosis",
    categoria: "ENFERMEDADES",
    acepciones: [
      "s.f. Displasia esquelética rara, asintomática y hereditaria, que se transmite con carácter autosómico dominante por mutación de un gen del cromosoma 12 (12q14). En la radiografía se muestran numerosos focos de condensación ósea, de forma redondeada o alargada, de pequeño tamaño, localizados en las epífisis y las metáfisis de los huesos largos, en los huesos de las manos y los pies y en la pelvis; corresponden a nódulos de tejido óseo compacto incluidos en el tejido esponjoso. Con el tiempo, el número y tamaño de los nódulos puede aumentar o disminuir e, incluso, desaparecer. No requiere tratamiento. En algunos casos se asocia a exostosis múltiples, hiperqueratosis palmoplantar, espina bífida o diversas alteraciones dérmicas (nevos, quistes sebáceos, hipertricosis, etc.)."
    ],
    sinonimos: ["osteopatía condensante diseminada", "osteopoiquilia", "enfermedad de los huesos manchados (coloquial)", "huesos manchados (coloquial)"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Melorreostosis",
    categoria: "ENFERMEDADES",
    acepciones: [
      "s.f. Enfermedad ósea no hereditaria caracterizada por osteoesclerosis e hiperostosis en forma de reguero que salta de unos huesos a otros de una misma extremidad (formas poliostóticas) o, más raramente, se localiza en un solo hueso (formas monostóticas), pero, en cualquier caso, afecta casi siempre a un solo miembro. La hiperostosis puede ser lineal, irregular o arrosariada y excepcionalmente se localiza fuera de los huesos de los miembros; por ejemplo, en la columna vertebral o en las costillas."
    ],
    sinonimos: ["melorreosteosis", "enfermedad de Léri (infrecuente)", "hiperostosis monomélica (infrecuente)", "osteosis eburneizante monomélica (infrecuente)", "síndrome de Léri (infrecuente)", "síndrome de Léri-Joanny (infrecuente)"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Osteopetrosis",
    categoria: "ENFERMEDADES",
    acepciones: [
      "s.f. Cada una de las displasias óseas raras consecutivas a una defectuosa reabsorción del tejido óseo. Se distinguen dos formas: a) forma grave, autosómica recesiva, que se descubre precozmente debido a sus manifestaciones clínicas (anemia importante, hepatoesplenomegalia, ceguera, sordera y macrocefalia); suele acompañarse de retraso en el desarrollo físico y psicomotor y los pacientes mueren precozmente; y b) forma dominante, tardía y benigna, que se manifiesta en la infancia ya avanzada o en la adolescencia por anemia discreta, fracturas y, a menudo, alteraciones de los pares craneales y anomalías dentales. En el examen radiológico es muy típica la elevada densidad ósea, difusa, con desaparición de la cortical y de la cavidad medular; la radiografía lateral de columna muestra una serie de bandas alternativas de densidad alta y baja."
    ],
    sinonimos: ["enfermedad de Albers-Schönberg", "enfermedad marmórea de los huesos", "enfermedad de los huesos de marfil (coloquial)", "enfermedad de los huesos de mármol (coloquial)", "huesos de marfil (coloquial)", "huesos de mármol (coloquial)", "osteoesclerosis congénita generalizada (infrecuente)"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Picnodisostosis",
    categoria: "ENFERMEDADES",
    acepciones: [
      "s.f. Displasia esquelética poco frecuente, hereditaria, que se transmite con carácter autosómico recesivo por mutación del gen CTSK (1q21), que codifica la catepsina K. Cursa con una disminución moderada de la talla, dismorfia craneofacial con macrocefalia e hipoplasia de la cara, protrusión ocular, paladar ojival, doble hilera de dientes (no se caen los temporales al salir los definitivos) y aplasia del extremo externo de la clavícula. Las fracturas de los huesos largos, sobre todo del fémur, son frecuentes. Los hallazgos radiográficos son parecidos a los de la osteopetrosis, con condensación generalizada de grado moderado de los huesos; en el cráneo, se observan líneas de sutura muy anchas con huesos wormianos, permanecen abiertas las fontanelas y las suturas en la edad adulta. El pronóstico vital es bueno."
    ],
    sinonimos: ["osteopetrosis acroosteolítica (infrecuente)", "síndrome de Toulouse-Lautrec (infrecuente)"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Mastocitosis",
    categoria: "ENFERMEDADES",
    acepciones: [
      "s.f. Cada una de las enfermedades caracterizadas por una hiperplasia de los mastocitos en la médula ósea, el hígado, el bazo, los ganglios linfáticos, el tubo digestivo y la piel, que pueden aparecer a cualquier edad y a menudo se acompañan de una activación de los mastocitos con aparición de prurito, rubefacción, urticaria, náuseas, vómitos, diarrea, dolor abdominal, dolores óseos, labilidad vascular, cefalea y alteraciones neuropsiquiátricas. Atendiendo a su presentación clínica, los hallazgos anatomopatológicos y el pronóstico, la OMS las clasifica en: mastocitosis cutánea, mastocitosis sistémica indolente, mastocitosis sistémica con enfermedad hematológica clonal no mastocitaria, mastocitosis sistémica agresiva, leucemia de mastocitos, sarcoma de mastocitos y mastocitoma extracutáneo."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Espondilosis",
    categoria: "ENFERMEDADES",
    acepciones: [
      "s.f. espondilopatía: cualquier enfermedad de las vértebras o de la columna vertebral. Puede tener orígenes variados (inflamatorio, infeccioso, traumático…) y bajo esta denominación se incluyen enfermedades muy diversas, como la espondilitis anquilosante, la entesopatía vertebral, algunos tipos de sacroilitis, la osteomielitis vertebral, discitis, espondilosis…",
      "s.f. espondiloartrosis: artrosis de la columna vertebral, caracterizada por una degeneración inicial del disco intervertebral, que puede acompañarse o no de protrusión discal y de una reacción osteofitaria marginal. La deshidratación y la pérdida de elasticidad del disco intervertebral debidas a la involución hacen a este más frágil y vulnerable y facilitan el desgarro del anillo fibroso, sobre todo en las regiones de mayor sobrecarga mecánica, como la región lumbar, o funcional, como la región cervical. El desgarro completo puede originar una hernia discal y un pinzamiento del espacio intervertebral correspondiente. La pérdida de altura del disco origina una modificación en la disposición normal de las carillas articulares de las articulaciones interapofisarias y una sobrecarga funcional de estas, con aparición de fenómenos degenerativos."
    ],
    sinonimos: ["artrosis discal", "artrosis raquídea", "artrosis vertebral", "discartrosis", "discoartrosis", "discopatía degenerativa", "enfermedad degenerativa discal", "enfermedad discal degenerativa", "espondilartrosis", "espondilodiscartrosis", "espondilodiscoartrosis"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Artrosis / Osteoartrosis",
    categoria: "ENFERMEDADES",
    acepciones: [
      "s.f. Enfermedad articular degenerativa caracterizada por la destrucción progresiva del cartílago articular y afectación del resto de los componentes de la articulación con esclerosis subcondral, osteofitos marginales, dolor y limitación funcional."
    ],
    sinonimos: ["artritis deformante", "artropatía deformante", "artropatía degenerativa", "artrosis deformante", "osteoartrosis", "reumatismo articular degenerativo (infrecuente)", "artritis degenerativa"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Traumatismo",
    categoria: "ENFERMEDADES",
    acepciones: [
      "s.m. Lesión interna o externa debida a la acción violenta de un agente externo. Los agentes vulnerantes son de naturaleza muy variada: mecánicos, térmicos, químicos, eléctricos, radiaciones ionizantes, energía lumínica, onda expansiva, variaciones de presión y de velocidad. Actúan por diferentes mecanismos y producen alteraciones generales (respuesta endocrinometabólica a la agresión, choque circulatorio, parada cardiorrespiratoria, hipotermia, electrocución, fulguración, insolación, etc.) y locales (contusión, herida, quemaduras térmicas, eléctricas o químicas, congelación, radiodermitis, etc.). Según la localización topográfica de las lesiones, los traumatismos se clasifican en traumatismos del cráneo, de la cara, del cuello, del tórax, del abdomen, de la columna vertebral y de las extremidades."
    ],
    sinonimos: ["lesión traumática", "trauma"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Congénita",
    categoria: "ENFERMEDADES",
    acepciones: [
      "adj. Presente ya en el momento del nacimiento."
    ],
    sinonimos: ["connatal", "ingénito", "innato", "nativo"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Traumática",
    categoria: "ENFERMEDADES",
    acepciones: [
      "adj. De un traumatismo o relacionado con él.",
      "adj. Que produce o es capaz de producir un traumatismo."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Enfermedad Infecciosa",
    categoria: "ENFERMEDADES",
    acepciones: [
      "s.f. Enfermedad causada por microbios patógenos, ya sean bacterias, virus, hongos o protozoos. Puede permanecer localizada o hacerse regional o sistémica si los microbios alcanzan el sistema vascular. Según su curso clínico, se califica como aguda, subaguda o crónica."
    ],
    sinonimos: ["enfermedad infectocontagiosa", "infección"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Infecciosa",
    categoria: "ENFERMEDADES",
    acepciones: [
      "adj. Que causa o puede causar una infección.",
      "adj. Causada por una infección.",
      "adj. Que padece una enfermedad infecciosa."
    ],
    sinonimos: ["séptico"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Neoplasia",
    categoria: "ENFERMEDADES",
    acepciones: [
      "s.f. Proliferación autónoma e independiente de las células de un tejido como consecuencia de una alteración significativa en su morfología, estructura y funcionamiento.",
      "s.f. Masa de células que proliferan de forma autónoma e independiente y que han experimentado alteraciones significativas previas en su morfología, estructura y funcionamiento. Puede mostrar un comportamiento benigno, con un curso indolente, o maligno, en cuyo caso se denomina cáncer."
    ],
    sinonimos: ["neoformación", "neoplasma", "tumor", "tumoración", "blastoma", "oncoma"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Neoplásica",
    categoria: "ENFERMEDADES",
    acepciones: [
      "adj. De la neoplasia o relacionado con ella."
    ],
    sinonimos: ["tumoral", "oncótico"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Metabolismo",
    categoria: "ENFERMEDADES",
    acepciones: [
      "s.m. Conjunto de procesos químicos que tienen lugar en un organismo vivo y cuya finalidad es proporcionar energía para su funcionamiento, generar los elementos estructurales que lo constituyen y facilitar la eliminación de productos endógenos de desecho o de xenobióticos. Consta de dos fases: una de síntesis o anabolismo, y otra de destrucción o catabolismo."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Metabólica",
    categoria: "ENFERMEDADES",
    acepciones: [
      "adj. Del metabolismo o relacionado con él."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Metabolopatía",
    categoria: "ENFERMEDADES",
    acepciones: [
      "s.f. Cualquier enfermedad, congénita o adquirida, causada por alteración de uno o más procesos metabólicos."
    ],
    sinonimos: ["enfermedad metabólica"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: ""
  }

];


/* ══════════════════════════════════════════
   glosarioLink — utilidad compartida
══════════════════════════════════════════ */
function slugify(str) {
  return str.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function glosarioLink(texto) {
  if (!texto) return texto;
  let result = texto;
  const sorted = [...GLOSARIO].sort((a, b) => b.termino.length - a.termino.length);
  sorted.forEach(entry => {
    const regex = new RegExp(`(?<!<[^>]*)\\b(${entry.termino})\\b`, 'gi');
    result = result.replace(regex, match =>
      `<a href="/prueba-museo/aula.html?glos=${slugify(entry.termino)}" class="glos-link" title="${(entry.acepciones[0] || '').slice(0,80)}…">${match}</a>`
    );
  });
  return result;
}


/* ══════════════════════════════════════════
   Auto-indexación del glosario
══════════════════════════════════════════ */
(function autoIndexGlosario() {
  if (typeof PIEZAS === 'undefined') return;
  GLOSARIO.forEach(entry => {
    if (!entry.termino) return;
    const regex = new RegExp(`\\b${entry.termino}\\b`, 'gi');
    PIEZAS.forEach(pieza => {
      const textos = [
        pieza.descripcion,
        pieza.diagnostico_principal,
        ...(Array.isArray(pieza.descripcion_osteologica)
          ? pieza.descripcion_osteologica
          : [pieza.descripcion_osteologica || '']),
        ...(pieza.hallazgos || []).flatMap(g => g.items.map(i => i.texto))
      ].filter(Boolean).join(' ');
      if (regex.test(textos) && !entry._piezasAuto) entry._piezasAuto = [];
      if (regex.test(textos)) entry._piezasAuto.push(pieza.id);
    });
  });
})();
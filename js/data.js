/**
 * PaleoMuseo · data.js
 *
 * Campos básicos (todas las piezas):
 *   id, nombre, region, patologia, sexo, epoca, yacimiento,
 *   descripcion, imagen, ficha, historica?
 *
 * Campos extendidos (ficha completa — opcionales, solo se muestran si existen):
 *   edad, cronologia, conservacion, digitalizacion (solo OV),
 *   descripcion_osteologica, diagnostico_principal,
 *   hallazgos   → [ { titulo, items: [ { texto, refs:[1,2] } ] } ]
 *   referencias → [ { id, autores, anio, titulo, editorial, doi? } ]
 *   imagenes    → [ { src, caption } ]  ← galería clicable con pies de foto
 *   modelo3d    → ruta al .glb
 */

const PIEZAS = [

  /* ══════════════════════════════════════════
     COLECCIÓN OV — campos básicos
     (los extendidos se añadirán cuando tengas
      el texto de cada pieza)
  ══════════════════════════════════════════ */
  { id:'OV-001', nombre:'Cráneo con trepanación curada',
    region:'craneo', patologia:'trauma', sexo:'masculino', epoca:'prehistoria',
    yacimiento:'Cueva de los Murciélagos, Granada',
    descripcion:'Trepanación circular de 35 mm en el parietal derecho con bordes completamente remodelados. Evidencia de supervivencia prolongada post-intervención.',
    imagen:null, ficha:'/prueba-museo/ficha-maestra.html?id=OV-001' },

  { id:'OV-002', nombre:'Fémur con fractura consolidada',
    region:'miembro-inferior', patologia:'trauma', sexo:'femenino', epoca:'medieval',
    yacimiento:'Necrópolis de San Nicolás, Murcia',
    descripcion:'Fractura diafisaria del fémur derecho con callo óseo exuberante y acortamiento de 2,3 cm. Posible deformidad funcional residual.',
    imagen:null, ficha:'/prueba-museo/ficha-estandar.html?id=OV-002' },

  { id:'OV-003', nombre:'Cribra orbitalia bilateral',
    region:'craneo', patologia:'metabolica', sexo:'indeterminado', epoca:'romano',
    yacimiento:'Isturgi, Jaén',
    descripcion:'Hiperostosis porótica en techo de ambas órbitas. Grado III según criterios de Steckel. Indicador de anemia ferropénica en edad infantil.',
    imagen:null, ficha:'/prueba-museo/ficha-estandar.html?id=OV-003' },

  { id:'OV-004', nombre:'Vértebra con espondilitis tuberculosa',
    region:'columna', patologia:'infecciosa', sexo:'masculino', epoca:'medieval',
    yacimiento:'Monasterio de Suso, La Rioja',
    descripcion:'Colapso del cuerpo vertebral T8-T9 con fusión angular (giba). Destrucción del disco intervertebral y formación de absceso paravertebral. Mal de Pott confirmado.',
    imagen:null, ficha:'/prueba-museo/ficha-maestra.html?id=OV-004' },

  { id:'OV-005', nombre:'Pelvis con sacralización de L5',
    region:'pelvis', patologia:'congenita', sexo:'masculino', epoca:'moderno',
    yacimiento:'Cementerio de Poblet, Tarragona',
    descripcion:'Fusión unilateral de L5 al sacro con esclerosis de la articulación sacroilíaca ipsilateral. Variante anatómica con posible correlato doloroso.',
    imagen:null, ficha:'/prueba-museo/ficha-estandar.html?id=OV-005' },

  { id:'OV-006', nombre:'Húmero con entesopatía severa',
    region:'miembro-superior', patologia:'marcador', sexo:'masculino', epoca:'romano',
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
    id:          'H001',
    nombre:      'Ötzi, el Hombre de Hielo',
    region:      'individuo-completo',
    patologia:   'trauma',
    sexo:        'masculino',
    epoca:       'prehistoria',
    yacimiento:  'Tisenjoch Pass (Hauslabjoch), Alpes de Ötzal, Tirol del Sur (Italia)',
    descripcion: 'Momia calcolítica de excepcional conservación por congelación natural. Presenta traumatismo perimortem por proyectil lítico como causa probable de muerte. Conservada en el South Tyrol Museum of Archaeology, Bolzano.',
    imagen:      '/prueba-museo/assets/img/H001/H001_cuerpo_completo.png',
    ficha:       '/prueba-museo/ficha-estandar.html?id=H001',
    historica:   true,
    modelo3d:    '/prueba-museo/assets/models/H001.glb',

    /* ── Identificación extendida ── */
    cronologia:   'ca. 3350–3105 cal BC (Calcolítico / Edad del Cobre)',
    edad:         '45–46 años',
    conservacion: 'South Tyrol Museum of Archaeology, Bolzano (Italia)',

    /* ── Descripción osteológica ── */
    descripcion_osteologica: [
      'Ötzi es un individuo adulto masculino de Homo sapiens, excepcionalmente conservado mediante momificación natural por congelación<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. Presenta un esqueleto complejo asociado a preservación significativa de tejidos blandos<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. Esta pieza se encuentra en el South Tyrol Museum of Archaeology en Bolzano.',
      'Morfológicamente, es un individuo de constitución ágil, con una estatura aproximada de 1,58–1,60 m y edad estimada en torno a los 46 años<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>. Se observan variaciones anatómicas como la presencia de una costilla derecha vestigial asociada a la duodécima vértebra torácica<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a> y una vértebra lumbosacra transicional (L5), con posición inferior respecto al borde pélvico y morfología alterada por integración parcial con el sacro<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>.',
      'A nivel craneal, se describen foveolas granulares prominentes en el hueso frontal, compatibles con variantes anatómicas no patológicas<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(3)">³</a>. La cavidad oral presenta desgaste dentario notable, diastema entre los incisivos superiores y pérdida de soporte alveolar<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. Ausencia de terceros molares. Los estudios de isótopos en el esmalte dentario han permitido reconstruir su área de residencia en la infancia.',
      'Se observan además alteraciones traumáticas en la región escapular izquierda y en la mano derecha<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(4)">⁴</a>, así como múltiples modificaciones postmortem derivadas de procesos tafonómicos y de la extracción del cuerpo<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(4)">⁴</a>. Los estudios radiológicos evidencian desgaste articular significativo en caderas, hombros, rodillas y columna<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>. Se documentó además la ausencia congénita del duodécimo par costal bilateral, considerada una variante anatómica infrecuente<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>.',
    ],
    /* ── Diagnóstico diferencial ── */
    diagnostico_principal: 'Probable muerte por hemorragia masiva secundaria a traumatismo penetrante por proyectil lítico (punta de flecha) alojada en el hemitórax izquierdo con afectación de la arteria subclavia.',

    hallazgos: [
      {
        titulo: 'Traumatismos',
        items: [
          { texto: 'Herida penetrante perimortem en región escapulotorácica izquierda compatible con impacto de proyectil.', refs: [4] },
          { texto: 'Punta lítica alojada en el hemitórax izquierdo (pulmón) con probable afectación vascular.', refs: [4] },
          { texto: 'Lesión incisa en mano derecha compatible con traumatismo por arma cortante perimortem.', refs: [4] },
          { texto: 'Posible traumatismo craneal asociado al evento perimortem.', refs: [1] }
        ]
      },
      {
        titulo: 'Patologías degenerativas',
        items: [
          { texto: 'Cambios osteoarticulares compatibles con osteoartritis en caderas, hombros, rodillas y columna vertebral.', refs: [2] },
          { texto: 'Desgaste dentario avanzado con pérdida de soporte alveolar y diastema entre incisivos superiores.', refs: [2] }
        ]
      },
      {
        titulo: 'Patologías cardiovasculares',
        items: [
          { texto: 'Calcificaciones vasculares compatibles con enfermedad aterosclerótica, documentadas mediante tomografía computarizada.', refs: [1] }
        ]
      },
      {
        titulo: 'Patologías infecciosas y parasitarias',
        items: [
          { texto: 'Evidencia molecular de infección por Borrelia burgdorferi (enfermedad de Lyme).', refs: [1] },
          { texto: 'Presencia de Helicobacter pylori en el contenido gástrico.', refs: [1] },
          { texto: 'Huevos de Trichuris trichiura identificados en el tracto intestinal.', refs: [1] }
        ]
      },
      {
        titulo: 'Patología oral',
        items: [
          { texto: 'Enfermedad periodontal avanzada con pérdida de soporte alveolar generalizada.', refs: [1] },
          { texto: 'Caries múltiples y desgaste oclusal severo compatible con dieta rica en carbohidratos.', refs: [2] }
        ]
      }
    ],

    /* ── Referencias bibliográficas ── */
    referencias: [
      {
        id: 1,
        autores: 'Garrido Pena, R.',
        anio: '2020',
        titulo: 'Ötzi, el hombre del hielo en el MAN',
        editorial: 'Museo Arqueológico Nacional'
      },
      {
        id: 2,
        autores: 'Kean, W.F. et al.',
        anio: '2013',
        titulo: 'The musculoskeletal abnormalities of the Similaun Iceman',
        editorial: 'SAGE Open Medicine',
        doi: 'https://doi.org/10.1177/2050312112475428'
      },
      {
        id: 3,
        autores: 'Murphy, W.A. et al.',
        anio: '2025',
        titulo: "New insights on Ötzi's injuries from a clinical perspective",
        editorial: 'Journal of Archaeological Science'
      },
      {
        id: 4,
        autores: 'Wierer, U. et al.',
        anio: '2018',
        titulo: "Ötzi, the Iceman: Lyme Disease, Androgenetic Alopecia and Dark Skin",
        editorial: 'PLOS ONE',
        doi: 'https://doi.org/10.1371/journal.pone.0195705'
      },
      {
        id: 5,
        autores: 'kaoruiscool',
        anio: '2026',
        titulo: "Modelo 3D “Ötzi the Iceman”, utilizado bajo licencia Creative Commons Attribution 4.0 International (CC BY 4.0). Disponible en: https://skfb.ly/pGpTT"
      }
    ],

    /* ── Galería de imágenes ── */
    imagenes: [
      {
        src:     '/prueba-museo/assets/img/H001/H001_cuerpo_completo.png',
        caption: 'Figura 1. Vista anterior y posterior del cuerpo momificado de Ötzi, mostrando su excepcional estado de conservación y la distribución anatómica de sus tatuajes documentados. Tomada de Garrido Pena (2020).'
      },
      {
        src:     '/prueba-museo/assets/img/H001/H001_costilla_vestigial.png',
        caption: 'Figura 2. Radiografía toracolumbar que muestra variantes anatómicas esqueléticas descritas en Ötzi, incluyendo una costilla derecha vestigial y alteraciones en la transición lumbosacra. Tomada de Kean et al. (2013).'
      },
      {
        src:     '/prueba-museo/assets/img/H001/H001_herida_mano.png',
        caption: 'Figura 3. Detalle de la lesión traumática presente en la mano derecha de Ötzi, compatible con una herida perimortem por arma cortante. Tomada de Murphy et al. (2025).'
      },
      {
        src:     '/prueba-museo/assets/img/H001/H001_toolkit.png',
        caption: 'Figura 4. Proceso de uso, fractura y reacondicionamiento de una punta de flecha perteneciente al conjunto de armas asociado a Ötzi. Una similar a la representada habría sido la causa de su muerte. Tomada de Wierer et al. (2018).'
      }
    ],
    layoutMode: 'tall',
  },

{
    id:          'H002',
    nombre:      'Ricardo III de Inglaterra',
    region:      'individuo-completo',
    patologia:   'congenita',
    sexo:        'masculino',
    epoca:       'medieval',
    yacimiento:  'Grey Friars, Leicester, Inglaterra',
    descripcion: 'Individuo adulto masculino identificado como Ricardo III de Inglaterra mediante análisis de ADN y análisis osteológico. Presenta escoliosis idiopática adolescente severa y múltiples traumatismos perimortem compatibles con muerte violenta en combate. Recuperado en excavaciones arqueológicas bajo un aparcamiento de Leicester en 2012.',
    imagen:      '/prueba-museo/assets/img/H002/tumba.png',
    ficha:       '/prueba-museo/ficha-estandar.html?id=H002',
    historica:   true,
    modelo3d:    null,
    sketchfab_embed: 'https://sketchfab.com/models/00d23c7defd0476db1a36c08728fa60f/embed?autostart=1&camera=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_theme=dark',
    sketchfab_title: "King Richard III's grave · Archaeological Services (ULAS)",

    /* ── Identificación extendida ── */
    cronologia:   's. XV (fallecido en la batalla de Bosworth Field, 1485)',
    edad:         '30–34 años',
    conservacion: 'Leicester Cathedral, Leicester (Reino Unido)',

    /* ── Descripción osteológica ── */
    `Se observan las siguientes alteraciones:<ul><li>Primera.</li><li>Segunda.</li></ul>`
    descripcion_osteologica: [
      'El esqueleto corresponde a un individuo adulto masculino de constitución grácil identificado como Richard III<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. Presenta una marcada deformidad vertebral compatible con una curvatura escoliótica severa localizada en la región torácica, extendiéndose aproximadamente desde T6 hasta T11, con una angulación estimada en vida de entre 70 y 90° según el ángulo de Cobb<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>.',
      'La curvatura presenta un patrón equilibrado, con alineación compensatoria en las regiones cervical y lumbar, lo que sugiere una deformidad corporal poco visible y no incapacitante<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>.',
      'No se observan anomalías estructurales vertebrales mayores como hemivértebras o barras unilaterales<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>.',
      'Se documentan hasta 11 lesiones perimortem, principalmente localizadas en el cráneo, así como alteraciones postmortem compatibles con procesos tafonómicos, incluyendo fractura mandibular y otras heridas faciales<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. Los traumatismos craneales principales son:',
      <ul>
        <li><strong>Occipital derecho:</strong>gran herida por fuerza cortante (65 mm × 50 mm) causada por un arma de hoja grande (espada o alabarda)<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a></li>
        <li><strong>Occipital izquierdo:</strong> herida penetrante de 32 mm cerca del foramen magnum — el arma atravesó el cerebro hasta impactar la tabla interna opuesta<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a></li>
        <li><strong>Maxilar derecho:</strong> herida penetrante (10 mm) compatible con una daga rondel de sección cuadrada<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a></li>
      </ul>
    ],

    /* ── Diagnóstico diferencial ── */
    diagnostico_principal: 'Traumatismo craneal severo perimortem compatible con muerte violenta en combate, asociado a escoliosis idiopática adolescente severa como patología de base.',

    hallazgos: [
      {
        titulo: 'Escoliosis idiopática adolescente severa',
        items: [
          { texto: 'Columna torácica con curvatura lateral severa hacia la derecha.', refs: [2] },
          { texto: 'Ángulo de Cobb estimado entre 70° y 90°.', refs: [2] },
          { texto: 'Inicio probable en la adolescencia temprana (~10 años).', refs: [2] },
        ]
      },
      {
        titulo: 'Traumatismos craneales',
        items: [
          { texto: '9 heridas perimortem. Traumatismos múltiples por fuerza cortante y penetrante, compatibles con un asalto sostenido por varios atacantes.', refs: [1] },
          { texto: '<strong>Occipital derecho:</strong> gran herida por fuerza cortante (65 mm × 50 mm) causada por un arma de hoja grande (espada o alabarda).', refs: [1] },
          { texto: '<strong>Occipital izquierdo:</strong> herida penetrante de 32 mm cerca del foramen magnum; el arma atravesó el cerebro hasta impactar la tabla interna opuesta.', refs: [1] },
          { texto: '<strong>Maxilar derecho:</strong> herida penetrante de 10 mm compatible con una daga rondel de sección cuadrada.', refs: [1] },
        ]
      },
      {
        titulo: 'Traumatismos postcraneales',
        items: [
          { texto: '10.ª costilla derecha: marca de herramienta por fuerza cortante a 70 mm de la cabeza de la costilla; el impacto fue desde atrás y no penetró la cavidad torácica.', refs: [1] },
          { texto: 'Pelvis: herida incisa de 30 mm que atraviesa la rama púbica superior. La trayectoria indica que el arma entró por la nalga derecha.', refs: [1] },
          { texto: 'Se considera probable que estas lesiones fueran infligidas post-mortem, dada la protección que ofrecía la armadura medieval en estas zonas.', refs: [1] },
        ]
      },
    ],

    /* ── Referencias bibliográficas ── */
    referencias: [
      {
        id: 1,
        autores: 'Appleby J, Mitchell P, Robinson C, Brough A, Rutty G, Harris R, et al.',
        anio: '2015',
        titulo: 'Perimortem trauma in King Richard III: a skeletal analysis',
        editorial: 'Lancet',
        doi: 'https://doi.org/10.1016/S0140-6736(14)60804-7'
      },
      {
        id: 2,
        autores: 'Halsey T, Hutton T, Carr A, Appleby J.',
        anio: '2014',
        titulo: 'The scoliosis of Richard III, last Plantagenet King of England: diagnosis and clinical significance',
        editorial: 'Lancet',
        doi: 'https://doi.org/10.1016/S0140-6736(14)60762-5'
      },
      {
        id: 3,
        autores: 'Wikimedia Commons.',
        anio: '2026',
        titulo: 'Portrait of King Richard III [Internet]. Wikimedia Foundation; [cited 2026 May 14]',
        editorial: 'Wikimedia Foundation',
        doi: 'https://commons.wikimedia.org'
      },
      {
        id: 4,
        autores: 'University of Leicester.',
        anio: '2026',
        titulo: 'Richard III: scientific investigation and skeletal analysis [Internet]. [cited 2026 May 14]',
        editorial: 'University of Leicester',
        doi: 'https://www.le.ac.uk/richardiii'
      },
      {
        id: 5,
        autores: 'OpenAI.',
        anio: '2026',
        titulo: 'ChatGPT [Internet]. [cited 2026 May 14]',
        editorial: 'OpenAI, San Francisco (CA)',
        doi: 'https://chat.openai.com'
      },
    ],

    /* ── Galería de imágenes ── */
    imagenes: [
      {
        src:     '/prueba-museo/assets/img/H002/rey_ricardo.jpg',
        caption: 'Figura 1. Retrato histórico de Richard III. Imagen obtenida de Wikipedia Commons.'
      },
      {
        src:     '/prueba-museo/assets/img/H002/heridas_craneales_reales.jpg',
        caption: 'Figura 2. Vista inferior del cráneo de Richard III mostrando dos traumatismos craneales perimortem potencialmente letales: 5) extensa lesión cortante occipital y 6) herida penetrante en la base izquierda del cráneo compatible con arma blanca medieval. Imagen: University of Leicester.'
      },
      {
        src:     '/prueba-museo/assets/img/H002/heridas_craneales.png',
        caption: 'Figura 3. Reconstrucción de las principales lesiones craneales perimortem de Richard III: 1) gran lesión occipital, 2) herida penetrante en la base izquierda del cráneo, 3) corte lineal en la mandíbula derecha, 4) perforación en el maxilar derecho y 5) múltiples marcas de cortes superficiales. Ilustración generada con ChatGPT (OpenAI) a partir de evidencia paleopatológica publicada.'
      },
      {
        src:     '/prueba-museo/assets/img/H002/heridas_postcraneales.png',
        caption: 'Figura 4. Reconstrucción de las principales lesiones postcraneales y craneales adicionales de Richard III: 1) lesión cortante en la décima costilla, 2) herida incisa en la pelvis y 3) traumatismos superficiales compatibles con agresiones peri- o postmortem. Ilustración generada con ChatGPT (OpenAI) a partir de evidencia paleopatológica publicada.'
      },
    ],
    layoutMode: 'default',
  },
]; /* fin PIEZAS */

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
    'individuo-completo': { label:'Individuo completo', icon:'🏛️' }
  },
  patologia: {
    trauma:       { label:'Traumatismos',            icon:'⚡',  color:'#FF4D6D' },
    infecciosa:   { label:'Infecciosas',             icon:'🦠',  color:'#00E5FF' },
    metabolica:   { label:'Metabólicas',             icon:'🔬',  color:'#C6E800' },
    degenerativa: { label:'Degenerativas',           icon:'⚙️', color:'#FFB300' },
    congenita:    { label:'Congénitas',              icon:'🧬',  color:'#FF6EB4' },
    marcador:     { label:'Marcadores de actividad', icon:'💪',  color:'#3D5AFE' }
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
  { term:'Proximal', slug:'proximal', cat:'orientacion', def:'Próximo al punto de origen o inserción de una extremidad.', sinonimos:[], obs:'Por contraposición a distal.', contexto:'En el análisis paleopatológico, la localización proximal o distal de una lesión es determinante para el diagnóstico diferencial. Las fracturas proximales del fémur se asocian a osteoporosis, mientras que las lesiones infecciosas hematógenas tienden a asentar en las metáfisis proximales de los huesos largos durante el periodo de crecimiento.', piezas:['OV-002','OV-012'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Distal', slug:'distal', cat:'orientacion', def:'Alejado del punto de origen o inserción de una extremidad.', sinonimos:[], obs:'Por contraposición a proximal.', contexto:'La región distal de los huesos largos es especialmente relevante en traumatología paleopatológica. La fractura de Colles afecta al tercio distal del radio y es uno de los patrones traumáticos más reconocibles en el registro arqueológico.', piezas:['OV-010'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Medial', slug:'medial', cat:'orientacion', def:'Situado cerca de la línea media o del plano sagital medio.', sinonimos:['interno'], obs:'Por contraposición a lateral.', contexto:'La posición medial o lateral de una lesión ósea es clave para describir su distribución y orientar el diagnóstico.', piezas:['OV-011'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Lateral', slug:'lateral', cat:'orientacion', def:'Situado lejos de la línea media o del plano sagital medio.', sinonimos:['externo'], obs:'Por contraposición a medial.', contexto:'La descripción de la lateralidad de las lesiones es fundamental para documentar bilateralidad o unilateralidad. La bilateralidad sugiere causas sistémicas; la unilateralidad orienta hacia traumatismos o infecciones locales.', piezas:['OV-003','OV-006'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Anterior', slug:'anterior', cat:'orientacion', def:'Situado en la parte anterior del cuerpo.', sinonimos:['frontal','ventral'], obs:'En la cabeza se usa también "rostral".', contexto:'La cara anterior de los cuerpos vertebrales es la zona preferente de colapso en la espondilitis tuberculosa (Mal de Pott).', piezas:['OV-004','OV-014'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Posterior', slug:'posterior', cat:'orientacion', def:'Situado en la parte dorsal del cuerpo.', sinonimos:['dorsal'], obs:null, contexto:'La cara posterior de los cuerpos vertebrales alberga el canal medular. La extensión posterior del Mal de Pott puede producir compresión medular.', piezas:['OV-004'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Plano Sagital', slug:'plano-sagital', cat:'orientacion', def:'Plano de simetría longitudinal que divide el cuerpo en mitad derecha e izquierda.', sinonimos:['plano mediano','plano medio'], obs:null, contexto:'El plano sagital es la referencia fundamental para describir desviaciones axiales del raquis. La escoliosis implica una curvatura fuera del plano sagital.', piezas:['OV-011'], widget:'planos-anatomicos', imagen:'/prueba-museo/assets/img/ov-001/gemini_generated_image_htsgxkhtsgxkhtsg-removebg-preview.jpg', hotspots:[{x:60.99,y:90.99,label:'Plano Sagital',desc:'Divide el cuerpo en partes derecha e izquierda.',color:'#ff6d00'},{x:12.72,y:52.09,label:'Plano Transversal',desc:'Divide el cuerpo en parte superior e inferior.',color:'#ff6d00'},{x:26.51,y:90.08,label:'Plano Coronal',desc:'Divide el cuerpo en partes anterior y posterior.',color:'#ff6d00'}], fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Plano Coronal', slug:'plano-coronal', cat:'orientacion', def:'Plano vertical perpendicular al sagital que divide el cuerpo en parte anterior y posterior.', sinonimos:['plano frontal'], obs:null, contexto:'El plano coronal es esencial para describir la distribución anteroposterior de las lesiones.', piezas:['OV-001','OV-016'], widget:'planos-anatomicos', imagen:'/prueba-museo/assets/img/ov-001/gemini_generated_image_htsgxkhtsgxkhtsg-removebg-preview.jpg', hotspots:[{x:60.99,y:90.99,label:'Plano Sagital',desc:'Divide el cuerpo en partes derecha e izquierda.',color:'#ff6d00'},{x:12.72,y:52.09,label:'Plano Transversal',desc:'Divide el cuerpo en parte superior e inferior.',color:'#ff6d00'},{x:26.51,y:90.08,label:'Plano Coronal',desc:'Divide el cuerpo en partes anterior y posterior.',color:'#ff6d00'}], fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Plano Transversal', slug:'plano-transversal', cat:'orientacion', def:'Plano perpendicular al eje longitudinal que divide el cuerpo en parte superior e inferior.', sinonimos:['plano axial','plano horizontal'], obs:'Por contraposición a longitudinal.', contexto:'El plano transversal es la referencia para las secciones tomográficas (TC) utilizadas en paleopatología moderna.', piezas:[], widget:'planos-anatomicos', imagen:'/prueba-museo/assets/img/ov-001/gemini_generated_image_htsgxkhtsgxkhtsg-removebg-preview.jpg', hotspots:[{x:60.99,y:90.99,label:'Plano Sagital',desc:'Divide el cuerpo en partes derecha e izquierda.',color:'#ff6d00'},{x:12.72,y:52.09,label:'Plano Transversal',desc:'Divide el cuerpo en parte superior e inferior.',color:'#ff6d00'},{x:26.51,y:90.08,label:'Plano Coronal',desc:'Divide el cuerpo en partes anterior y posterior.',color:'#ff6d00'}], fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Epífisis', slug:'epifisis', cat:'anatomia', def:'Extremidad articular de un hueso largo, nacida de un centro secundario de osificación.', sinonimos:[], obs:'Hasta el final de la pubertad queda separada de la diáfisis por el cartílago de crecimiento.', contexto:'La fusión epifisaria es uno de los indicadores primarios para la estimación de la edad biológica en individuos subadultos.', piezas:['OV-002','OV-014'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Diáfisis', slug:'diafisis', cat:'anatomia', def:'Cuerpo o tallo de un hueso largo, comprendido entre sus extremos o epífisis.', sinonimos:[], obs:null, contexto:'La distribución de la reacción perióstica a lo largo de la diáfisis es un criterio diagnóstico importante.', piezas:['OV-002','OV-007','OV-012','OV-014'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Metáfisis', slug:'metafisis', cat:'anatomia', def:'Zona de crecimiento de los huesos largos, entre la epífisis y la diáfisis.', sinonimos:[], obs:'Sus límites se borran al alcanzar la vida adulta.', contexto:'La metáfisis es la zona más vulnerable a la osteomielitis hematógena en individuos subadultos por su alta vascularización.', piezas:['OV-012'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Apófisis', slug:'apofisis', cat:'anatomia', def:'Prominencia natural de un hueso. Lugar habitual de inserción muscular.', sinonimos:['proceso'], obs:null, contexto:'Las apófisis son los puntos de anclaje de tendones y ligamentos donde se desarrollan las entesopatías.', piezas:['OV-006'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Entesis', slug:'entesis', cat:'anatomia', def:'Inserción de tendones, ligamentos, fascias y cápsulas articulares en un hueso.', sinonimos:[], obs:'Dos tipos: fibrosas y fibrocartilaginosas.', contexto:'El estudio de las entesis como marcadores de actividad es uno de los campos más activos de la paleopatología.', piezas:['OV-006'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Periostio', slug:'periostio', cat:'anatomia', def:'Capa de tejido conjuntivo que constituye la capa más externa de los huesos.', sinonimos:[], obs:'Adherido al hueso por las fibras de Sharpey.', contexto:'El periostio es el tejido diana de múltiples procesos patológicos. La morfología de la reacción perióstica orienta hacia la naturaleza del proceso causal.', piezas:['OV-007','OV-012'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Hueso Cortical', slug:'hueso-cortical', cat:'anatomia', def:'Región de un hueso formada por tejido óseo compacto que forma la capa externa.', sinonimos:['hueso compacto','capa cortical'], obs:'Los términos compacto y cortical se usan con frecuencia de forma intercambiable.', contexto:'El grosor y la densidad de la cortical son indicadores del estado metabólico y del nivel de actividad física del individuo.', piezas:['OV-006','OV-014'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Hueso Trabecular', slug:'hueso-trabecular', cat:'anatomia', def:'Tejido óseo formado por una trama tridimensional de trabéculas que delimita espacios con médula ósea.', sinonimos:['hueso esponjoso'], obs:null, contexto:'El hueso trabecular tiene mayor sensibilidad metabólica que el cortical y es el primero en reflejar alteraciones del metabolismo óseo.', piezas:[], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Reacción Perióstica', slug:'reaccion-periostica', cat:'proceso', def:'Formación de nuevo hueso en la superficie cortical como respuesta a un daño del periostio.', sinonimos:[], obs:null, contexto:'La morfología de la reacción perióstica es el principal criterio para orientar su etiología: laminar en procesos lentos, espiculada en procesos rápidos.', piezas:['OV-007','OV-012'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Osteólisis', slug:'osteolisis', cat:'proceso', def:'Lesión ósea elemental que consiste en la desaparición de una porción de tejido óseo.', sinonimos:[], obs:null, contexto:'La osteólisis es uno de los signos más informativos del registro paleopatológico. Su morfología orienta hacia distintas etiologías.', piezas:['OV-008','OV-009','OV-015'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Osteoesclerosis', slug:'osteoesclerosis', cat:'proceso', def:'Lesión anatómica elemental del tejido óseo consistente en la condensación de los conductos de Havers.', sinonimos:['condensación ósea','esclerosis ósea'], obs:'El hueso presenta aspecto de marfil y es muy duro.', contexto:'La osteoesclerosis se observa frecuentemente como respuesta del hueso sano adyacente a una lesión crónica.', piezas:['OV-005','OV-008','OV-013'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Entesopatía', slug:'entesopatia', cat:'proceso', def:'Cualquier trastorno o enfermedad que afecta a las entesis.', sinonimos:[], obs:null, contexto:'En paleopatología, las entesopatías se emplean como marcadores de actividad musculoesquelética.', piezas:['OV-006'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Porosidad', slug:'porosidad', cat:'proceso', def:'Presencia de poros o cavidades en la superficie o estructura del tejido óseo.', sinonimos:[], obs:null, contexto:'La porosidad ósea es un signo inespecífico que puede reflejar procesos muy distintos según su localización y morfología.', piezas:['OV-003','OV-014'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Nódulos de Schmörl', slug:'nodulos-schmorl', cat:'proceso', def:'Hernia del núcleo pulposo del disco intervertebral a través del platillo vertebral adyacente.', sinonimos:['hernia discal intraesponjosa'], obs:'Con frecuencia en plural.', contexto:'Los nódulos de Schmörl son indicadores de cargas axiales intensas y repetidas sobre la columna vertebral.', piezas:['OV-013'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Osteofito', slug:'osteofito', cat:'proceso', def:'Excrecencia en la superficie de un hueso que se desarrolla en las proximidades de una articulación.', sinonimos:[], obs:null, contexto:'Los osteofitos son el signo más reconocible de la osteoartritis. Su formación intenta estabilizar la articulación degenerada.', piezas:['OV-008','OV-013'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Traumatismo', slug:'traumatismo', cat:'patologia', def:'Lesión interna o externa debida a la acción violenta de un agente externo.', sinonimos:['lesión traumática','trauma'], obs:null, contexto:'El análisis de los traumatismos permite reconstruir accidentes cotidianos y episodios de violencia interpersonal de las poblaciones del pasado.', piezas:['OV-001','OV-002','OV-010','OV-016'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Enfermedad Infecciosa', slug:'enfermedad-infecciosa', cat:'patologia', def:'Enfermedad causada por microorganismos patógenos que puede permanecer localizada o hacerse sistémica.', sinonimos:['infección'], obs:null, contexto:'Las enfermedades infecciosas son las causas más frecuentes de reacción perióstica en el registro paleopatológico.', piezas:['OV-004','OV-007','OV-009','OV-012','OV-015'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Congénita', slug:'congenita', cat:'patologia', def:'Presente ya en el momento del nacimiento.', sinonimos:['innato','ingénito'], obs:null, contexto:'Las patologías congénitas deben distinguirse de las adquiridas durante la vida. Su identificación requiere demostrar que la alteración existía desde el desarrollo embrionario.', piezas:['OV-005','OV-011', 'H001'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Antemortem', slug:'antemortem', cat:'patologia', def:'Ocurrido antes de la muerte del individuo.', sinonimos:[], obs:null, contexto:'Las lesiones antemortem son las más informativas porque demuestran que el individuo sobrevivió al evento patológico. La remodelación ósea confirma la cronicidad antemortem.', piezas:['OV-001','OV-002','OV-004','OV-006','OV-008'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Perimortem', slug:'perimortem', cat:'patologia', def:'Ocurrido en el momento de la muerte o inmediatamente antes, cuando el hueso conserva sus propiedades biomecánicas.', sinonimos:[], obs:null, contexto:'La identificación de lesiones perimortem es fundamental en contextos de violencia arqueológica. El hueso fresco produce fracturas con bordes lisos y biselados.', piezas:['OV-016'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Postmortem', slug:'postmortem', cat:'patologia', def:'Ocurrido tras la muerte del individuo, cuando el hueso ha perdido sus propiedades biomecánicas.', sinonimos:['tafonómico'], obs:null, contexto:'Las alteraciones postmortem o pseudopatologías son uno de los principales obstáculos del diagnóstico paleopatológico.', piezas:['H001'], imagen:null, fuente:{ label:'RANME', url:'https://dtme.ranm.es' } },
  { term:'Cribra orbitalia', slug:'cribra-orbitalia', cat:'patologia', def:'Lesión hipervascular en forma de porosidad en el techo de las órbitas, indicador de anemia o déficit vitamínico.', sinonimos:[], obs:null, contexto:'La cribra orbitalia es una de las lesiones paleopatológicas más frecuentes. Su etiología es multifactorial: anemia ferropénica, escorbuto y anemia megaloblástica.', piezas:['OV-003'], imagen:null, fuente:null },
  { term:'Periostitis', slug:'periostitis', cat:'patologia', def:'Inflamación del periostio que genera formación de hueso nuevo en la superficie cortical.', sinonimos:[], obs:null, contexto:'La periostitis es el signo óseo más inespecífico del repertorio paleopatológico, resultado de infecciones, traumatismos, escorbuto o tumores.', piezas:['OV-007','OV-012'], imagen:null, fuente:null },
  { term:'Osteomielitis', slug:'osteomielitis', cat:'patologia', def:'Infección bacteriana del tejido óseo que provoca necrosis, formación de secuestro y cloaca de drenaje.', sinonimos:[], obs:null, contexto:'La osteomielitis hematógena crónica produce involucro óseo, secuestro central y fistulación cloacal. Este patrón es el más claramente diagnóstico en paleopatología.', piezas:['OV-012'], imagen:null, fuente:null },
  { term:'Espondilitis', slug:'espondilitis', cat:'patologia', def:'Inflamación de los cuerpos vertebrales. La forma tuberculosa o Mal de Pott produce colapso vertebral con giba angular.', sinonimos:[], obs:null, contexto:'El Mal de Pott es la forma más frecuente de tuberculosis ósea en el registro paleopatológico. Afecta preferentemente a vértebras dorsales bajas y lumbares altas.', piezas:['OV-004'], imagen:null, fuente:null },
  { term:'Osteoartritis', slug:'osteoartritis', cat:'patologia', def:'Enfermedad degenerativa articular caracterizada por erosión del cartílago, eburnación, osteofitosis y quistes subcondrales.', sinonimos:['artrosis'], obs:null, contexto:'La osteoartritis es la patología más frecuente en el registro paleopatológico de poblaciones adultas y ancianas.', piezas:['OV-008'], imagen:null, fuente:null },
  { term:'Eburnación', slug:'eburnacion', cat:'patologia', def:'Pulido patológico de la superficie articular tras la destrucción total del cartílago.', sinonimos:[], obs:null, contexto:'La eburnación es el signo patognomónico de la osteoartritis avanzada y uno de los más fácilmente reconocibles en el registro paleopatológico.', piezas:['OV-008'], imagen:null, fuente:null },
  { term:'Callo óseo', slug:'callo-oseo', cat:'patologia', def:'Tejido óseo de reparación que se forma durante la consolidación de una fractura.', sinonimos:[], obs:null, contexto:'La morfología del callo permite estimar el tiempo transcurrido desde la fractura y la calidad de la inmovilización.', piezas:['OV-002'], imagen:null, fuente:null },
  { term:'Paleopatología', slug:'paleopatologia', cat:'metodo', def:'Disciplina científica que estudia las enfermedades y lesiones en restos esqueléticos y momias de poblaciones del pasado.', sinonimos:[], obs:null, contexto:'Definida por Marc Armand Ruffer en 1910, la paleopatología ha evolucionado hacia una perspectiva biocultural que integra ADN antiguo, isótopos estables y tomografía computarizada.', piezas:[], imagen:null, fuente:null },
  { term:'Trepanación', slug:'trepanacion', cat:'metodo', def:'Intervención quirúrgica que consiste en la perforación intencional del cráneo.', sinonimos:[], obs:null, contexto:'La trepanación es la cirugía documentada más antigua de la humanidad, con evidencias que superan los 8.000 años.', piezas:['OV-001'], imagen:null, fuente:null },
  { term:'Fotogrametría', slug:'fotogrametria', cat:'metodo', def:'Técnica de digitalización 3D basada en la captura de múltiples fotografías para reconstruir la geometría tridimensional del objeto.', sinonimos:[], obs:null, contexto:'La fotogrametría SfM permite generar modelos 3D de alta resolución a bajo coste. Es el método principal de digitalización de la colección.', piezas:[], imagen:null, fuente:null },
  { term:'Marcador de actividad', slug:'marcador-actividad', cat:'metodo', def:'Alteración ósea que refleja patrones de esfuerzo físico repetitivo y permite inferir actividades ocupacionales.', sinonimos:['MEM','MAM'], obs:null, contexto:'El análisis de los marcadores de actividad permite reconstruir la división del trabajo en poblaciones del pasado.', piezas:['OV-006'], imagen:null, fuente:null },
  { term:'Tafonomía', slug:'tafonomia', cat:'metodo', def:'Estudio de los procesos que afectan a los restos orgánicos desde la muerte hasta su excavación.', sinonimos:[], obs:null, contexto:'El conocimiento tafonómico es imprescindible para identificar pseudopatologías — alteraciones postmortem que pueden confundirse con lesiones patológicas reales.', piezas:[], imagen:null, fuente:null }
];

/* ══════════════════════════════════════════
   glosarioLink — utilidad compartida
══════════════════════════════════════════ */
function glosarioLink(texto) {
  if (!texto) return texto;
  let result = texto;
  const sorted = [...GLOSARIO].sort((a, b) => b.term.length - a.term.length);
  sorted.forEach(entry => {
    const regex = new RegExp(`(?<!<[^>]*)\\b(${entry.term})\\b`, 'gi');
    result = result.replace(regex, match =>
      `<a href="/prueba-museo/aula.html?glos=${entry.slug}" class="glos-link" title="${entry.def.slice(0,80)}…">${match}</a>`
    );
  });
  return result;
}

/* ══════════════════════════════════════════
   Auto-indexación: añade a cada término del
   glosario las piezas que lo mencionan en
   su descripcion_osteologica o diagnostico_principal
══════════════════════════════════════════ */
(function autoIndexGlosario() {
  GLOSARIO.forEach(entry => {
    const regex = new RegExp(`\\b${entry.term}\\b`, 'gi');

    PIEZAS.forEach(pieza => {
      if (entry.piezas.includes(pieza.id)) return; // ya está indexada

      const textos = [
        pieza.descripcion,
        pieza.diagnostico_principal,
        ...(Array.isArray(pieza.descripcion_osteologica)
          ? pieza.descripcion_osteologica
          : [pieza.descripcion_osteologica || '']),
        ...(pieza.hallazgos || []).flatMap(g =>
          g.items.map(i => i.texto)
        )
      ].filter(Boolean).join(' ');

      if (regex.test(textos)) {
        entry.piezas.push(pieza.id);
      }
    });
  });
})();
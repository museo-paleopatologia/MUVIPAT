/**
 * PaleoMuseo · data.js
 * Base de datos central: PIEZAS, VOCABULARIO, GLOSARIO
 *
 * Estructura ampliada del GLOSARIO para modal:
 *   term      → nombre del término
 *   slug      → ancla URL (#slug)
 *   cat       → categoría
 *   def       → definición breve (tarjeta)
 *   sinonimos → array de sinónimos (de RANME: Sin.:)
 *   obs       → observación/nota gramatical (de RANME: Obs.:)
 *   contexto  → texto ampliado paleopatológico (para el modal)
 *   piezas    → array de IDs de piezas relacionadas
 *   imagen    → ruta a imagen ilustrativa o null
 *   fuente    → { label, url } — referencia al pie
 */

/* ═══════════════════════════════════════════════════════
   PIEZAS — colección paleopatológica
═══════════════════════════════════════════════════════ */
const PIEZAS = [
  { id:'OV-001', nombre:'Cráneo con trepanación curada',        region:'craneo',           patologia:'trauma',       sexo:'masculino',     epoca:'prehistoria', yacimiento:'Cueva de los Murciélagos, Granada',    descripcion:'Trepanación circular de 35 mm en el parietal derecho con bordes completamente remodelados. Evidencia de supervivencia prolongada post-intervención.',                                                              imagen:null, ficha:'/prueba-museo/ficha-maestra.html?id=OV-001' },
  { id:'OV-002', nombre:'Fémur con fractura consolidada',        region:'miembro-inferior', patologia:'trauma',       sexo:'femenino',      epoca:'medieval',    yacimiento:'Necrópolis de San Nicolás, Murcia',    descripcion:'Fractura diafisaria del fémur derecho con callo óseo exuberante y acortamiento de 2,3 cm. Posible deformidad funcional residual.',                                                                                     imagen:null, ficha:'/prueba-museo/ficha-estandar.html?id=OV-002' },
  { id:'OV-003', nombre:'Cribra orbitalia bilateral',            region:'craneo',           patologia:'metabolica',   sexo:'indeterminado', epoca:'romano',      yacimiento:'Isturgi, Jaén',                        descripcion:'Hiperostosis porótica en techo de ambas órbitas. Grado III según criterios de Steckel. Indicador de anemia ferropénica en edad infantil.',                                                                            imagen:null, ficha:'/prueba-museo/ficha-estandar.html?id=OV-003' },
  { id:'OV-004', nombre:'Vértebra con espondilitis tuberculosa', region:'columna',          patologia:'infecciosa',   sexo:'masculino',     epoca:'medieval',    yacimiento:'Monasterio de Suso, La Rioja',         descripcion:'Colapso del cuerpo vertebral T8-T9 con fusión angular (giba). Destrucción del disco intervertebral y formación de absceso paravertebral. Mal de Pott confirmado.',                                                   imagen:null, ficha:'/prueba-museo/ficha-maestra.html?id=OV-004' },
  { id:'OV-005', nombre:'Pelvis con sacralización de L5',        region:'pelvis',           patologia:'congenita',    sexo:'masculino',     epoca:'moderno',     yacimiento:'Cementerio de Poblet, Tarragona',      descripcion:'Fusión unilateral de L5 al sacro con esclerosis de la articulación sacroilíaca ipsilateral. Variante anatómica con posible correlato doloroso.',                                                                      imagen:null, ficha:'/prueba-museo/ficha-estandar.html?id=OV-005' },
  { id:'OV-006', nombre:'Húmero con entesopatía severa',         region:'miembro-superior', patologia:'marcador',     sexo:'masculino',     epoca:'romano',      yacimiento:'Barcino, Barcelona',                   descripcion:'Robustez cortical extrema y proliferación ósea en inserción del deltoides. Compatible con actividad física intensa y repetitiva. Posible remero o trabajador portuario.',                                          imagen:null, ficha:'/prueba-museo/ficha-estandar.html?id=OV-006' },
  { id:'OV-007', nombre:'Costillas con lesiones periósticas',    region:'torax',            patologia:'infecciosa',   sexo:'femenino',      epoca:'medieval',    yacimiento:'La Olmeda, Palencia',                  descripcion:'Formación de hueso nuevo laminar en la cara visceral de costillas 4-7 bilaterales. Probable tuberculosis pulmonar o pleuritis crónica.',                                                                               imagen:null, ficha:'/prueba-museo/ficha-estandar.html?id=OV-007' },
  { id:'OV-008', nombre:'Rótula con osteoartritis avanzada',     region:'miembro-inferior', patologia:'degenerativa', sexo:'femenino',      epoca:'moderno',     yacimiento:'San Millán de la Cogolla, La Rioja',   descripcion:'Erosión del cartílago articular con eburnación, osteofitosis marginal y quistes subcondrales. Estadio 4 de Kellgren-Lawrence. Individuo >55 años.',                                                               imagen:null, ficha:'/prueba-museo/ficha-estandar.html?id=OV-008' },
  { id:'OV-009', nombre:'Mandíbula con absceso alveolar',        region:'craneo',           patologia:'infecciosa',   sexo:'indeterminado', epoca:'prehistoria', yacimiento:'Los Millares, Almería',                descripcion:'Orificio de drenaje en el alveolo del primer molar inferior. Reabsorción ósea periapical intensa con pérdida de diente en vida. Evidencia de enfermedad periodontal.',                                              imagen:null, ficha:'/prueba-museo/ficha-estandar.html?id=OV-009' },
  { id:'OV-010', nombre:'Radio con fractura de Colles',          region:'miembro-superior', patologia:'trauma',       sexo:'femenino',      epoca:'moderno',     yacimiento:'Cementerio de San Isidro, Madrid',     descripcion:'Fractura distal del radio en patrón de Colles con desplazamiento dorsal. Consolidación en posición viciosa con limitación funcional de la muñeca.',                                                              imagen:null, ficha:'/prueba-museo/ficha-estandar.html?id=OV-010' },
  { id:'OV-011', nombre:'Columna lumbar con escoliosis',         region:'columna',          patologia:'congenita',    sexo:'femenino',      epoca:'medieval',    yacimiento:'Necrópolis de Recópolis, Guadalajara', descripcion:'Curvatura lateral del raquis lumbar con cuña vertebral en L3. Rotación axial de los cuerpos vertebrales. Ángulo de Cobb estimado en 35°.',                                                                     imagen:null, ficha:'/prueba-museo/ficha-estandar.html?id=OV-011' },
  { id:'OV-012', nombre:'Húmero con osteomielitis hematógena',   region:'miembro-superior', patologia:'infecciosa',   sexo:'masculino',     epoca:'romano',      yacimiento:'Caesaraugusta, Zaragoza',              descripcion:'Involucro óseo periférico con secuestro central y fistulación cloacal. Proceso infeccioso crónico de Staphylococcus sp. compatible. Reacción perióstica extensa.',                                                imagen:null, ficha:'/prueba-museo/ficha-maestra.html?id=OV-012' },
  { id:'OV-013', nombre:'Escápula con nódulos de Schmörl',       region:'torax',            patologia:'degenerativa', sexo:'masculino',     epoca:'prehistoria', yacimiento:'El Argar, Almería',                    descripcion:'Hernias discales calcificadas en platillos vertebrales T6-T10. Indicador de cargas axiales repetadas sobre la columna dorsal. Patrón compatible con trabajo agrícola.',                                              imagen:null, ficha:'/prueba-museo/ficha-estandar.html?id=OV-013' },
  { id:'OV-014', nombre:'Tibia con raquitismo',                  region:'miembro-inferior', patologia:'metabolica',   sexo:'indeterminado', epoca:'medieval',    yacimiento:'Toledo, casco histórico',              descripcion:'Incurvación anterior y medial de la diáfisis tibial (tibia en sable). Porosidad cortical generalizada. Hipovitaminosis D severa en la infancia. Individuo subadulto.',                                          imagen:null, ficha:'/prueba-museo/ficha-estandar.html?id=OV-014' },
  { id:'OV-015', nombre:'Pelvis con artritis séptica',           region:'pelvis',           patologia:'infecciosa',   sexo:'masculino',     epoca:'romano',      yacimiento:'Emerita Augusta, Mérida',              descripcion:'Destrucción de la articulación coxofemoral izquierda con anquilosis fibrosa. Superficie articular del acetábulo completamente erosionada. Posible complicación de herida de guerra.',                              imagen:null, ficha:'/prueba-museo/ficha-maestra.html?id=OV-015' },
  { id:'OV-016', nombre:'Cráneo con trauma contuso perimortem',  region:'craneo',           patologia:'trauma',       sexo:'masculino',     epoca:'medieval',    yacimiento:'Batalla de Nájera, La Rioja',          descripcion:'Fractura deprimida en el parietal izquierdo con patrón radial. Ausencia de remodelación ósea. Lesión perimortem por objeto contundente. Contexto de violencia interpersonal.',                                    imagen:null, ficha:'/prueba-museo/ficha-maestra.html?id=OV-016' },
];

/* ═══════════════════════════════════════════════════════
   VOCABULARIO
═══════════════════════════════════════════════════════ */
const VOCABULARIO = {
  region: {
    craneo:             { label:'Cráneo',            icon:'💀' },
    columna:            { label:'Columna vertebral',  icon:'🦴' },
    torax:              { label:'Tórax / Costillas',  icon:'🫁' },
    'miembro-superior': { label:'Miembro superior',   icon:'💪' },
    pelvis:             { label:'Pelvis',              icon:'🦵' },
    'miembro-inferior': { label:'Miembro inferior',   icon:'🦿' }
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
    prehistoria: { label:'Prehistoria',   range:'—3000 a.C.' },
    romano:      { label:'Época romana',  range:'I–V d.C.' },
    medieval:    { label:'Edad Media',    range:'V–XV d.C.' },
    moderno:     { label:'Época moderna', range:'XVI–XIX d.C.' }
  }
};

/* ═══════════════════════════════════════════════════════
   GLOSARIO — estructura ampliada con modal
═══════════════════════════════════════════════════════ */
const GLOSARIO = [

  // ════════════════════════════════════════════════════
  // PLANOS Y ORIENTACIÓN ANATÓMICA
  // ════════════════════════════════════════════════════
  {
    term:'Proximal', slug:'proximal', cat:'orientacion',
    def:'Próximo al punto de origen o inserción de una extremidad, de un vaso sanguíneo, de un vaso linfático o de un nervio.',
    sinonimos:[], obs:'Generalmente por contraposición a distal.',
    contexto:'En el análisis paleopatológico, la localización proximal o distal de una lesión es determinante para el diagnóstico diferencial. Las fracturas proximales del fémur, por ejemplo, son frecuentes en individuos de edad avanzada y se asocian a osteoporosis, mientras que las lesiones infecciosas hematógenas tienden a asentar en las metáfisis proximales de los huesos largos durante el periodo de crecimiento, por la alta vascularización de esta zona.',
    piezas:['OV-002','OV-012'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Distal', slug:'distal', cat:'orientacion',
    def:'Alejado del punto de origen o inserción de una extremidad, de un vaso sanguíneo, de un vaso linfático o de un nervio.',
    sinonimos:[], obs:'Generalmente por contraposición a proximal.',
    contexto:'La región distal de los huesos largos es especialmente relevante en traumatología paleopatológica. La fractura de Colles afecta al tercio distal del radio y es uno de los patrones traumáticos más reconocibles en el registro arqueológico, frecuentemente interpretada como consecuencia de una caída con el brazo extendido. La localización distal de lesiones degenerativas también orienta hacia determinados patrones de actividad ocupacional.',
    piezas:['OV-010'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Medial', slug:'medial', cat:'orientacion',
    def:'Situado cerca de la línea media o del plano sagital medio.',
    sinonimos:['interno'], obs:'Generalmente por contraposición a lateral.',
    contexto:'La posición medial o lateral de una lesión ósea es clave para describir su distribución y orientar el diagnóstico. En escoliosis, la cuña vertebral y la rotación axial producen una asimetría mediolateral característica. En las articulaciones, las lesiones degenerativas del compartimento medial de la rodilla son las más frecuentes por la mayor carga biomecánica que soporta.',
    piezas:['OV-011'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Lateral', slug:'lateral', cat:'orientacion',
    def:'Situado lejos de la línea media o del plano sagital medio.',
    sinonimos:['externo'], obs:'Generalmente por contraposición a medial.',
    contexto:'La descripción de la lateralidad de las lesiones es fundamental en paleopatología para documentar la bilateralidad o unilateralidad de los procesos patológicos. La bilateralidad de una lesión sugiere causas sistémicas (metabólicas, infecciosas hematógenas), mientras que la unilateralidad orienta hacia traumatismos, infecciones por contigüidad o asimetrías funcionales por dominancia manual.',
    piezas:['OV-003','OV-006'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Anterior', slug:'anterior', cat:'orientacion',
    def:'Situado en la parte anterior del cuerpo, por delante del plano coronal o frontal, o delante de otra estructura corporal.',
    sinonimos:['frontal','ventral'], obs:'En la cabeza se usa también con este sentido "rostral".',
    contexto:'La cara anterior de los cuerpos vertebrales es la zona preferente de colapso en la espondilitis tuberculosa (Mal de Pott), donde la destrucción del cuerpo vertebral produce una giba angular característica. En los huesos largos, la cara anterior de la diáfisis tibial es la más expuesta a periostitis reactiva en infecciones como la treponematosis.',
    piezas:['OV-004','OV-014'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Posterior', slug:'posterior', cat:'orientacion',
    def:'Situado en la parte dorsal del cuerpo, es decir, por detrás del plano coronal o frontal, o detrás de otra estructura corporal.',
    sinonimos:['dorsal'], obs:null,
    contexto:'La cara posterior de los cuerpos vertebrales alberga el canal medular. En procesos destructivos como el Mal de Pott, la extensión posterior de la lesión puede producir compresión medular con consecuencias neurológicas graves, evidenciadas en el registro paleopatológico por la deformidad angular posterior del raquis.',
    piezas:['OV-004'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },

  {
    term: 'Plano Sagital', slug: 'plano-sagital', cat: 'orientacion',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Plano de simetría longitudinal que pasa por la sutura sagital y divide el cuerpo en una mitad derecha y otra izquierda.',
    sinonimos: ['plano mediano','plano medio','plano mediosagital','plano sagital medio','plano paramediano','plano parasagital'],
    obs: null,
    contexto: 'El plano sagital es la referencia fundamental para describir desviaciones axiales del raquis. La escoliosis implica una curvatura fuera del plano sagital, mientras que la cifosis y la lordosis son alteraciones dentro de él. En craneometría, el plano sagital medio es la referencia para medir el índice cefálico y describir la asimetría craneal (plagiocefalia).',
    piezas: ['OV-011'],
    widget: 'planos-anatomicos',
    imagen: '/prueba-museo/assets/img/ov-001/gemini_generated_image_htsgxkhtsgxkhtsg-removebg-preview.jpg',
    hotspots: [
      { x: 60.99, y: 90.99, label: 'Plano Sagital',           desc: 'Siendo perpendicular al suelo, pasa por la mitad del cuerpo, dividiéndolo en dos partes iguales derecha e izquierda.', color: '#ff6d00' },
      { x: 12.72, y: 52.09, label: 'Plano Transversal',       desc: 'Siendo perpendicular al eje longitudinal del cuerpo, divide el cuerpo humano en parte superior e inferior.', color: '#ff6d00' },
      { x: 26.51, y: 90.08, label: 'Plano Coronal (Frontal)', desc: 'Siendo perpendicular al suelo, pasa por la mitad del cuerpo, dividiéndolo en dos partes iguales ventral y dorsal (anterior y posterior).', color: '#ff6d00' }
    ]
  },
  {
    term: 'Plano Coronal', slug: 'plano-coronal', cat: 'orientacion',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Plano vertical perpendicular al plano sagital que divide el cuerpo, en posición anatómica, en una parte anterior o facial y otra posterior o dorsal.',
    sinonimos: ['plano frontal'],
    obs: null,
    contexto: 'El plano coronal es esencial para describir la distribución anteroposterior de las lesiones. En fracturas del cráneo, se usa para localizar con precisión la posición del impacto. En el análisis de la morfología craneal, las vistas en norma frontalis y norma occipitalis corresponden a proyecciones sobre el plano coronal.',
    piezas: ['OV-001','OV-016'],
    widget: 'planos-anatomicos',
    imagen: '/prueba-museo/assets/img/ov-001/gemini_generated_image_htsgxkhtsgxkhtsg-removebg-preview.jpg',
    hotspots: [
      { x: 60.99, y: 90.99, label: 'Plano Sagital',           desc: 'Siendo perpendicular al suelo, pasa por la mitad del cuerpo, dividiéndolo en dos partes iguales derecha e izquierda.', color: '#ff6d00' },
      { x: 12.72, y: 52.09, label: 'Plano Transversal',       desc: 'Siendo perpendicular al eje longitudinal del cuerpo, divide el cuerpo humano en parte superior e inferior.', color: '#ff6d00' },
      { x: 26.51, y: 90.08, label: 'Plano Coronal (Frontal)', desc: 'Siendo perpendicular al suelo, pasa por la mitad del cuerpo, dividiéndolo en dos partes iguales ventral y dorsal (anterior y posterior).', color: '#ff6d00' }
    ]
  },
  {
    term: 'Plano Transversal', slug: 'plano-transversal', cat: 'orientacion',
    fuente: { label: 'RANME', url: 'https://dtme.ranm.es' },
    def: 'Plano perpendicular al eje longitudinal del cuerpo o de un segmento anatómico que lo divide en una parte superior y otra inferior.',
    sinonimos: ['plano axial','plano horizontal'],
    obs: 'Generalmente por contraposición a longitudinal.',
    contexto: 'El plano transversal es la referencia para las secciones tomográficas (TC) utilizadas en paleopatología moderna para el análisis no destructivo de momias y restos óseos. Permite visualizar la estructura interna del hueso cortical y trabecular, detectar lesiones endocraniales, y analizar el canal medular sin dañar la pieza.',
    piezas: [],
    widget: 'planos-anatomicos',
    imagen: '/prueba-museo/assets/img/ov-001/gemini_generated_image_htsgxkhtsgxkhtsg-removebg-preview.jpg',
    hotspots: [
      { x: 60.99, y: 90.99, label: 'Plano Sagital',           desc: 'Siendo perpendicular al suelo, pasa por la mitad del cuerpo, dividiéndolo en dos partes iguales derecha e izquierda.', color: '#ff6d00' },
      { x: 12.72, y: 52.09, label: 'Plano Transversal',       desc: 'Siendo perpendicular al eje longitudinal del cuerpo, divide el cuerpo humano en parte superior e inferior.', color: '#ff6d00' },
      { x: 26.51, y: 90.08, label: 'Plano Coronal (Frontal)', desc: 'Siendo perpendicular al suelo, pasa por la mitad del cuerpo, dividiéndolo en dos partes iguales ventral y dorsal (anterior y posterior).', color: '#ff6d00' }
    ]
  },

  // ════════════════════════════════════════════════════
  // ANATOMÍA Y ESTRUCTURA ÓSEA
  // ════════════════════════════════════════════════════
  {
    term:'Epífisis', slug:'epifisis', cat:'anatomia',
    def:'Extremidad articular de un hueso largo, nacida de un centro secundario de osificación y unida a la diáfisis.',
    sinonimos:[], obs:'Hasta el final de la pubertad, queda separada de la diáfisis por el cartílago de crecimiento.',
    contexto:'La fusión epifisaria es uno de los indicadores primarios para la estimación de la edad biológica en individuos subadultos. El grado de unión entre epífisis y diáfisis sigue una secuencia cronológica conocida para cada hueso. Las lesiones epifisarias en individuos inmaduros pueden producir alteraciones en el crecimiento longitudinal del hueso, con acortamientos o deformidades angulares detectables en el registro paleopatológico.',
    piezas:['OV-002','OV-014'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Diáfisis', slug:'diafisis', cat:'anatomia',
    def:'Cuerpo o tallo de un hueso largo, desarrollado a partir de un centro de osificación primario y comprendido entre sus extremos o epífisis.',
    sinonimos:[], obs:null,
    contexto:'La diáfisis es la región del hueso largo con mayor proporción de hueso cortical y es la zona donde más frecuentemente se producen fracturas por traumatismo directo. La distribución de la reacción perióstica a lo largo de la diáfisis es un criterio diagnóstico importante: una periostitis diafisaria extensa y bilateral sugiere etiología infecciosa sistémica (treponematosis, tuberculosis), mientras que la localizada orienta hacia traumatismo o infección por contigüidad.',
    piezas:['OV-002','OV-007','OV-012','OV-014'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Metáfisis', slug:'metafisis', cat:'anatomia',
    def:'Zona de crecimiento de los huesos largos, adyacente al cartílago de crecimiento, situada entre la epífisis y la diáfisis.',
    sinonimos:[], obs:'Sus límites se borran al alcanzar la vida adulta.',
    contexto:'La metáfisis es la zona de mayor actividad osteogénica durante el crecimiento y, por ello, la región más vulnerable a la osteomielitis hematógena en individuos subadultos. La alta vascularización de los sinusoides metafisarios favorece el depósito de bacterias circulantes. En el registro paleopatológico, las lesiones metafisarias con secuestro y cloaca son altamente diagnósticas de osteomielitis crónica.',
    piezas:['OV-012'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Apófisis', slug:'apofisis', cat:'anatomia',
    def:'Prominencia, saliente o eminencia natural de un hueso. Es lugar habitual de inserción muscular.',
    sinonimos:['proceso'], obs:null,
    contexto:'Las apófisis son los puntos de anclaje de tendones y ligamentos, y por tanto los lugares donde se desarrollan las entesopatías. La proliferación ósea en la apófisis deltoidea del húmero, como en la pieza OV-006, es un marcador clásico de actividad física intensa. La morfología y el grado de desarrollo de las apófisis también se usan para la determinación del sexo biológico, ya que en los individuos masculinos son generalmente más robustas.',
    piezas:['OV-006'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Entesis', slug:'entesis', cat:'anatomia',
    def:'Conjunto de la inserción de tendones, ligamentos, fascias y cápsulas articulares en un hueso y de la zona ósea en que se insertan.',
    sinonimos:[], obs:'Dos tipos: fibrosas (metáfisis y diáfisis) y fibrocartilaginosas (apófisis y epífisis).',
    contexto:'El estudio sistemático de las entesis como marcadores de actividad es uno de los campos más activos de la paleopatología contemporánea. Los sistemas de puntuación como el método de Mariotti et al. permiten cuantificar el grado de cambio entesopático y, combinados con el análisis del contexto arqueológico, reconstruir las actividades laborales de las poblaciones del pasado. Las entesis fibrocartilaginosas son más sensibles a la sobrecarga mecánica y las más utilizadas en estos estudios.',
    piezas:['OV-006'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Foramen Nutricio', slug:'foramen-nutricio', cat:'anatomia',
    def:'Pequeño orificio situado en la superficie de los huesos a través del cual pasan los vasos sanguíneos que nutren el tejido óseo.',
    sinonimos:[], obs:null,
    contexto:'El foramen nutricio puede confundirse con lesiones osteolíticas de pequeño tamaño en el análisis macroscópico, constituyendo una de las pseudopatologías más frecuentes en paleopatología. Su localización constante en cada hueso (cara anterior de la diáfisis tibial, cara interna del húmero, etc.) y sus bordes lisos y regulares permiten diferenciarlo de lesiones patológicas reales. El diagnóstico diferencial con abscesos de pequeño tamaño o lesiones tumorales requiere experiencia.',
    piezas:[], imagen:null,
    fuente:{ label:'IMAIOS', url:'https://www.imaios.com/es/e-anatomy' }
  },
  {
    term:'Periostio', slug:'periostio', cat:'anatomia',
    def:'Capa de tejido conjuntivo fibroelástico denso que constituye la capa más externa de los huesos, salvo en las superficies articulares.',
    sinonimos:[], obs:'Adherido al hueso por las fibras de Sharpey.',
    contexto:'El periostio es el tejido diana de múltiples procesos patológicos que el paleopatólogo puede identificar en el registro óseo. Ante cualquier agresión —infecciosa, traumática, tumoral o metabólica—, las células osteoprogenitoras de la capa interna del periostio responden formando hueso nuevo (reacción perióstica). La morfología de esta reacción —laminar, espiculada, en "piel de cebolla"— y su extensión orientan hacia la naturaleza y el estadio del proceso causal.',
    piezas:['OV-007','OV-012'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Endostio', slug:'endostio', cat:'anatomia',
    def:'Membrana de tejido conjuntivo que tapiza la cavidad medular de los huesos largos, las trabéculas del tejido esponjoso y los conductos vasculares del tejido compacto.',
    sinonimos:['periostio interno'], obs:'Dotado de células osteoprogenitoras y osteoclastos.',
    contexto:'En paleopatología, las alteraciones del endostio se manifiestan como cambios en la morfología de la cavidad medular visibles en secciones transversales o mediante TC. La expansión de la cavidad medular con adelgazamiento cortical es característica de la anemia crónica y de algunas neoplasias. La obliteración parcial de la cavidad medular por hueso de neoformación endóstica orienta hacia procesos infecciosos crónicos o tumores osteoblásticos.',
    piezas:[], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Hueso Cortical', slug:'hueso-cortical', cat:'anatomia',
    def:'Región de un hueso cuya estructura histológica está formada por tejido óseo compacto laminar que forma la capa externa de los huesos.',
    sinonimos:['hueso compacto','capa cortical','sustancia compacta','tejido óseo compacto'], obs:'Los términos "hueso compacto" y "hueso cortical" se usan con frecuencia de forma intercambiable.',
    contexto:'El grosor y la densidad de la cortical son indicadores del estado metabólico del individuo y de su nivel de actividad física. La hiperostosis cortical generalizada puede indicar anemia hemolítica crónica; el adelgazamiento cortical, osteoporosis. En los marcadores de actividad, la robustez cortical —especialmente la del húmero dominante— refleja el esfuerzo mecánico acumulado a lo largo de la vida. La porosidad cortical aumentada es un signo de remodelación ósea acelerada por enfermedad o crecimiento.',
    piezas:['OV-006','OV-014'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Hueso Trabecular', slug:'hueso-trabecular', cat:'anatomia',
    def:'Tejido óseo formado por una trama tridimensional de trabéculas óseas que delimita espacios ocupados por la médula ósea.',
    sinonimos:['hueso esponjoso'], obs:null,
    contexto:'El hueso trabecular tiene mayor sensibilidad metabólica que el cortical y es el primero en reflejar alteraciones del metabolismo óseo. En la osteoporosis, el adelgazamiento y la pérdida de trabéculas reduce la resistencia mecánica del hueso, predisponiendo a fracturas por compresión vertebral y fracturas de cadera. En las neoplasias, la destrucción o el refuerzo del patrón trabecular son signos diagnósticos clave visibles macroscópicamente y en imagen.',
    piezas:[], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Cavidad Medular', slug:'cavidad-medular', cat:'anatomia',
    def:'Cavidad diafisaria de los huesos largos que contiene la médula ósea y está revestida por el endostio.',
    sinonimos:['canal medular'], obs:null,
    contexto:'En osteomielitis crónica, la cavidad medular puede quedar ocupada parcialmente por tejido de granulación, pus y secuestros óseos necróticos. La formación de un involucro óseo periférico que rodea al secuestro es patognomónica de osteomielitis crónica hematógena y es perfectamente identificable en el registro paleopatológico, como en el caso OV-012.',
    piezas:['OV-012'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },

  // ════════════════════════════════════════════════════
  // PROCESOS DE DINÁMICA ÓSEA
  // ════════════════════════════════════════════════════
  {
    term:'Reacción Perióstica', slug:'reaccion-periostica', cat:'proceso',
    def:'Formación de nuevo hueso en la superficie cortical como respuesta a un daño u otro estímulo del periostio.',
    sinonimos:[], obs:null,
    contexto:'La morfología de la reacción perióstica es el principal criterio para orientar su etiología. Una reacción laminar paralela a la cortical, organizada y con límites bien definidos, sugiere un proceso de curso lento (tuberculosis, treponematosis). Una reacción espiculada, perpendicular a la cortical ("en rayos de sol"), orienta hacia procesos de rápida evolución como tumores malignos o infecciones agudas. La reacción "en piel de cebolla" (múltiples láminas concéntricas) es típica del sarcoma de Ewing. Su identificación en el registro óseo requiere descartar pseudopatologías tafonómicas.',
    piezas:['OV-007','OV-012'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Osteólisis', slug:'osteolisis', cat:'proceso',
    def:'Lesión ósea elemental que consiste en la desaparición de una porción de tejido óseo sin que queden vestigios del mismo.',
    sinonimos:[], obs:null,
    contexto:'La osteólisis es uno de los signos más informativos del registro paleopatológico. Su morfología —bordes geográficos bien delimitados, apolillados o permeativo— orienta hacia distintas etiologías. Los bordes escleróticos alrededor de una zona lítica indican un proceso de evolución lenta con respuesta del hueso sano. La osteólisis en la superficie articular, combinada con eburnación, es característica de la osteoartritis. En las lesiones infecciosas, la destrucción lítica puede ir acompañada de formación de secuestro.',
    piezas:['OV-008','OV-009','OV-015'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Osteoesclerosis', slug:'osteoesclerosis', cat:'proceso',
    def:'Lesión anatómica elemental del tejido óseo consistente en la condensación de los conductos de Havers y de los espacios medulares.',
    sinonimos:['condensación ósea','esclerosis ósea','osteocondensación'], obs:'En el examen macroscópico, el hueso presenta aspecto de marfil y es muy duro, aunque puede ser frágil si hay alteración concomitante de la configuración de las trabéculas.',
    contexto:'La osteoesclerosis se observa frecuentemente como respuesta del hueso sano adyacente a una lesión crónica. El halo esclerótico alrededor de un nódulo de Schmörl o de un absceso óseo crónico (absceso de Brodie) representa esta respuesta defensiva. La esclerosis subcondral es un hallazgo constante en la osteoartritis avanzada. A nivel generalizado, la osteopetrosis produce una esclerosis difusa que paradójicamente fragiliza el hueso al eliminar el espacio medular.',
    piezas:['OV-005','OV-008','OV-013'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Entesopatía', slug:'entesopatia', cat:'proceso',
    def:'Cualquier trastorno o enfermedad que afecta a las entesis.',
    sinonimos:[], obs:null,
    contexto:'En paleopatología, las entesopatías se emplean como marcadores de actividad musculoesquelética (MAM o MEM). Su presencia y severidad se cuantifica mediante sistemas estandarizados (Mariotti et al. 2007) que valoran la porosidad, la formación de hueso nuevo y las erosiones en los puntos de inserción. La interpretación requiere precaución: la entesopatía también puede ser resultado de enfermedades sistémicas (espondiloartropatías seronegativas) o del envejecimiento. El análisis de la distribución bilateral y el contexto arqueológico son imprescindibles para la interpretación funcional.',
    piezas:['OV-006'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Osteoblástica', slug:'osteoblastica', cat:'proceso',
    def:'De los osteoblastos o relacionado con ellos. Aplicado a una lesión: que forma o produce tejido óseo.',
    sinonimos:['esqueletógeno','osteógeno'], obs:null,
    contexto:'Las lesiones osteoblásticas se caracterizan por un aumento de densidad ósea visible macroscópicamente como zonas de esclerosis. Son típicas de las metástasis de carcinoma de próstata y mama, de la enfermedad de Paget y de algunos tumores óseos primarios benignos (osteoma, osteoblastoma). En paleopatología, la identificación de lesiones osteoblásticas múltiples debe plantear el diagnóstico diferencial con enfermedad de Paget, metástasis y displasias fibrosas.',
    piezas:[], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Osteoclástica', slug:'osteoclastica', cat:'proceso',
    def:'De los osteoclastos o relacionado con ellos. Aplicado a una lesión ósea: que presenta reabsorción osteoclástica.',
    sinonimos:[], obs:null,
    contexto:'La actividad osteoclástica aumentada es la base de la osteólisis patológica. En las metástasis osteolíticas (pulmón, riñón, tiroides), en el mieloma múltiple y en las infecciones crónicas, los osteoclastos son activados por mediadores inflamatorios y citocinas tumorales, produciendo la destrucción del tejido óseo. En paleopatología, el desequilibrio entre actividad osteoblástica y osteoclástica puede inferirse de la morfología macroscópica de las lesiones, aunque su confirmación requiere histología.',
    piezas:[], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Porosidad', slug:'porosidad', cat:'proceso',
    def:'Presencia de poros o cavidades en la superficie o estructura del tejido óseo.',
    sinonimos:[], obs:null,
    contexto:'La porosidad ósea es un signo inespecífico que puede reflejar procesos muy distintos: hiperostosis porótica por anemia crónica, cribra orbitalia por déficit nutricional, porosidad cortical por remodelación ósea acelerada en el crecimiento o en la osteoporosis, o reacción perióstica porosa por infección. Su interpretación diagnóstica exige analizar su distribución anatómica, el tamaño de los poros, su profundidad y el contexto paleodemográfico del individuo.',
    piezas:['OV-003','OV-014'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Nódulos de Schmörl', slug:'nodulos-schmorl', cat:'proceso',
    def:'Hernia del núcleo pulposo del disco intervertebral a través del platillo vertebral adyacente.',
    sinonimos:['hernia discal intraesponjosa','hernia de Schmörl'], obs:'Con frecuencia en plural.',
    contexto:'Los nódulos de Schmörl son indicadores de cargas axiales intensas y repetidas sobre la columna vertebral, y se interpretan frecuentemente como marcadores de actividad laboral en paleopatología. Su distribución preferente en los platillos vertebrales de las últimas vértebras dorsales y las primeras lumbares refleja las zonas de mayor estrés mecánico. Se observan con mayor frecuencia en individuos jóvenes adultos masculinos, lo que, en contexto arqueológico, orienta hacia actividades de carga pesada.',
    piezas:['OV-013'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Osteofito', slug:'osteofito', cat:'proceso',
    def:'Excrecencia o protuberancia en la superficie de un hueso, de origen periostal, que se desarrolla en las proximidades de una articulación o en los márgenes de los cuerpos vertebrales.',
    sinonimos:[], obs:null,
    contexto:'Los osteofitos son el signo radiológico y macroscópico más reconocible de la osteoartritis y de la espondiloartrosis. Su formación representa un intento del organismo de estabilizar la articulación degenerada ampliando la superficie de carga. En paleopatología, los osteofitos vertebrales (sindesmofitos) permiten estimar el grado de degeneración discal y son utilizados como indicadores de edad y de carga mecánica. La fusión de osteofitos adyacentes puede producir anquilosis vertebral, que debe diferenciarse de la espondilitis anquilosante.',
    piezas:['OV-008','OV-013'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },

  // ════════════════════════════════════════════════════
  // CATEGORÍAS DE CLASIFICACIÓN PALEOPATOLÓGICA
  // ════════════════════════════════════════════════════
  {
    term:'Congénita', slug:'congenita', cat:'patologia',
    def:'Presente ya en el momento del nacimiento.',
    sinonimos:['connatal','innato','ingénito','nativo'], obs:null,
    contexto:'Las patologías congénitas en paleopatología representan un reto diagnóstico porque deben distinguirse de las adquiridas durante la vida. Su identificación requiere demostrar que la alteración morfológica existía desde el desarrollo embrionario o fetal, lo que se infiere por la ausencia de signos de remodelación reactiva y la morfología característica de cada condición. Algunas variantes anatómicas congénitas, como la sacralización de L5, pueden ser asintomáticas pero predisponer a patología degenerativa precoz.',
    piezas:['OV-005','OV-011'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Traumatismo', slug:'traumatismo', cat:'patologia',
    def:'Lesión interna o externa debida a la acción violenta de un agente externo.',
    sinonimos:['lesión traumática','trauma'], obs:null,
    contexto:'El análisis de los traumatismos en paleopatología permite reconstruir tanto los accidentes cotidianos como los episodios de violencia interpersonal de las poblaciones del pasado. La cronología de la lesión respecto a la muerte —antemortem, perimortem, postmortem— es determinante para su interpretación. Las fracturas curadas demuestran supervivencia y, en algunos casos, atención médica o cuidado comunitario. Las lesiones perimortem, en cambio, pueden indicar la causa de la muerte y el tipo de agresión sufrida.',
    piezas:['OV-001','OV-002','OV-010','OV-016'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Enfermedad Infecciosa', slug:'enfermedad-infecciosa', cat:'patologia',
    def:'Enfermedad causada por microorganismos patógenos —bacterias, virus, hongos o protozoos— que puede permanecer localizada o hacerse sistémica.',
    sinonimos:['infección','enfermedad infectocontagiosa'], obs:null,
    contexto:'Las enfermedades infecciosas son las causas más frecuentes de reacción perióstica en el registro paleopatológico. La tuberculosis y la treponematosis son las infecciones óseas más documentadas en poblaciones históricas. El diagnóstico diferencial entre ambas y con otras infecciones requiere analizar la distribución de las lesiones, su morfología y el contexto epidemiológico. Las técnicas de ADN antiguo han permitido confirmar diagnósticos que antes solo podían plantearse macroscópicamente.',
    piezas:['OV-004','OV-007','OV-009','OV-012','OV-015'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Neoplasia', slug:'neoplasia', cat:'patologia',
    def:'Proliferación autónoma e independiente de células de un tejido con alteraciones en su morfología, estructura y funcionamiento.',
    sinonimos:['tumor','tumoración','neoplasma','blastoma','oncoma','neoformación'], obs:null,
    contexto:'Las neoplasias óseas son raras en el registro paleopatológico, en parte porque muchos tumores afectan a tejidos blandos que no se conservan. Los tumores óseos primarios más frecuentemente identificados son el osteoma, el hemangioma vertebral y el condrosarcoma. Las metástasis óseas son más comunes que los tumores primarios y suelen afectar al esqueleto axial. Su identificación requiere un diagnóstico diferencial exhaustivo con infecciones, lesiones traumáticas y pseudopatologías tafonómicas.',
    piezas:[], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Metabolopatía', slug:'metabolopatia', cat:'patologia',
    def:'Enfermedad congénita o adquirida causada por la alteración de uno o más procesos metabólicos.',
    sinonimos:['enfermedad metabólica'], obs:null,
    contexto:'Las metabolopatías óseas más relevantes en paleopatología son el raquitismo (déficit de vitamina D), el escorbuto (déficit de vitamina C) y las anemias crónicas (ferropénica, drepanocítica, talasemia). Cada una produce un patrón de alteraciones óseas relativamente específico: el raquitismo afecta principalmente a los huesos largos en crecimiento; el escorbuto produce hemorragias subperiósticas; las anemias producen hiperostosis porótica de la bóveda craneal y cribra orbitalia. Su diagnóstico se apoya en la edad, el sexo y el contexto biocultural del individuo.',
    piezas:['OV-003','OV-014'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Antemortem', slug:'antemortem', cat:'patologia',
    def:'Ocurrido antes de la muerte del individuo.',
    sinonimos:[], obs:null,
    contexto:'Las lesiones antemortem son las más informativas desde el punto de vista paleopatológico porque demuestran que el individuo sobrevivió al evento patológico durante un tiempo suficiente para que el hueso respondiera. La presencia de callo óseo en una fractura, la remodelación de los bordes de una trepanación o la esclerosis reactiva alrededor de una lesión infecciosa son signos de cronicidad antemortem. La ausencia de curación diferencia las lesiones perimortem de las antemortem.',
    piezas:['OV-001','OV-002','OV-004','OV-006','OV-008'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Perimortem', slug:'perimortem', cat:'patologia',
    def:'Ocurrido en el momento de la muerte o inmediatamente antes, cuando el hueso conserva sus propiedades biomecánicas.',
    sinonimos:[], obs:null,
    contexto:'La identificación de lesiones perimortem es fundamental en contextos forenses y de violencia arqueológica. El hueso fresco (perimortem) se comporta mecánicamente de forma diferente al hueso seco (postmortem): produce fracturas con bordes lisos, biselados, espirales o con esquirlas, en lugar de las fracturas rectilíneas y quebradizas del hueso seco. La coloración de los bordes de fractura (similar al hueso circundante) ayuda también a confirmar la cronología perimortem. Las lesiones perimortem son potencialmente la causa de muerte del individuo.',
    piezas:['OV-016'], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },
  {
    term:'Postmortem', slug:'postmortem', cat:'patologia',
    def:'Ocurrido tras la muerte del individuo, cuando el hueso ha perdido sus propiedades biomecánicas.',
    sinonimos:['tafonómico'], obs:null,
    contexto:'Las alteraciones postmortem —pseudopatologías— son uno de los principales obstáculos del diagnóstico paleopatológico. Los procesos tafonómicos (compresión del sedimento, bioturbación, meteorización, acción de raíces) pueden producir fracturas, erosiones, depósitos minerales y decoloraciones que imitan lesiones patológicas. La diferenciación requiere analizar el contexto estratigráfico, la coloración diferencial de las superficies de fractura, la textura de los bordes y la coherencia con el patrón deposicional del yacimiento.',
    piezas:[], imagen:null,
    fuente:{ label:'RANME', url:'https://dtme.ranm.es' }
  },

  // ════════════════════════════════════════════════════
  // METODOLOGÍA
  // ════════════════════════════════════════════════════
  {
    term:'Paleopatología', slug:'paleopatologia', cat:'metodo',
    def:'Disciplina científica que estudia las enfermedades y lesiones en restos esqueléticos y momias de poblaciones del pasado.',
    sinonimos:[], obs:null,
    contexto:'Definida por primera vez por Sir Marc Armand Ruffer en 1910, la paleopatología ha evolucionado desde un enfoque puramente anatómico hacia una perspectiva biocultural. En la actualidad integra técnicas de ADN antiguo, isótopos estables, tomografía computarizada, histología ósea y análisis estadístico de poblaciones para reconstruir no solo las enfermedades individuales, sino las condiciones de salud de comunidades enteras del pasado y los factores ambientales, dietéticos y sociales que las determinaron.',
    piezas:[], imagen:null,
    fuente:null
  },
  {
    term:'Trepanación', slug:'trepanacion', cat:'metodo',
    def:'Intervención quirúrgica que consiste en la perforación intencional del cráneo mediante raspado, corte o taladro.',
    sinonimos:[], obs:null,
    contexto:'La trepanación es la cirugía documentada más antigua de la humanidad, con evidencias que superan los 8.000 años. Los cuatro métodos técnicos identificados en el registro arqueológico son: el raspado, el corte lineal, el barrenado circular y la combinación de incisiones. La evidencia de supervivencia —bordes completamente remodelados con tejido lamelar— demuestra que muchos individuos sobrevivieron a la intervención semanas, meses o incluso años. Las razones pueden ser médicas (fracturas craneales, epilepsia) o rituales.',
    piezas:['OV-001'], imagen:null,
    fuente:null
  },
  {
    term:'Fotogrametría', slug:'fotogrametria', cat:'metodo',
    def:'Técnica de digitalización 3D basada en la captura de múltiples fotografías desde distintos ángulos para reconstruir la geometría tridimensional del objeto.',
    sinonimos:[], obs:null,
    contexto:'La fotogrametría de estructura de movimiento (SfM) permite generar modelos 3D de alta resolución a partir de series fotográficas solapadas procesadas mediante software especializado (Agisoft Metashape, RealityCapture). Su principal ventaja es el bajo coste del equipamiento necesario. En paleopatología, permite documentar con precisión la morfología de las lesiones, compartir los datos con la comunidad científica y realizar análisis morfométricos sin acceso físico a la pieza. La calidad del modelo depende de las condiciones de iluminación y de la cobertura fotográfica.',
    piezas:[], imagen:null,
    fuente:null
  },
  {
    term:'Escáner de luz estructurada', slug:'escaner-luz-estructurada', cat:'metodo',
    def:'Sistema de digitalización 3D que proyecta patrones de luz codificada sobre la superficie del objeto y mide las deformaciones para calcular su geometría.',
    sinonimos:[], obs:null,
    contexto:'Los escáneres de luz estructurada ofrecen mayor precisión geométrica que la fotogrametría, especialmente en superficies con texturas uniformes o poco diferenciadas, características de muchas piezas óseas de colección. Sistemas como el Artec Eva o el Shining3D EinScan permiten capturas de alta resolución en tiempos reducidos. Los modelos obtenidos en formato .glb o .obj son directamente utilizables en plataformas de visualización web como model-viewer, lo que facilita su integración en museos virtuales como este.',
    piezas:[], imagen:null,
    fuente:null
  },
  {
    term:'Bioarqueología', slug:'bioarqueologia', cat:'metodo',
    def:'Disciplina que integra el análisis de restos humanos con el contexto arqueológico para reconstruir las condiciones de vida, salud y comportamiento de las poblaciones del pasado.',
    sinonimos:[], obs:null,
    contexto:'La bioarqueología, término acuñado por Jane Buikstra en 1977, supone un salto cualitativo respecto a la osteología descriptiva tradicional al incorporar el contexto arqueológico como variable analítica fundamental. La distribución espacial de las tumbas, el ajuar funerario, las marcas de corte, los patrones de inhumación y los isótopos estables del colágeno óseo son datos que, combinados con el análisis paleopatológico, permiten reconstruir la organización social, la dieta, la movilidad y las condiciones de vida de comunidades prehistóricas e históricas.',
    piezas:[], imagen:null,
    fuente:null
  },
  {
    term:'Sexo biológico', slug:'sexo-biologico', cat:'metodo',
    def:'Determinación del sexo de un individuo a partir de caracteres morfológicos del esqueleto, principalmente pelvis y cráneo.',
    sinonimos:[], obs:null,
    contexto:'La determinación del sexo biológico en restos esqueléticos adultos alcanza una fiabilidad del 90-95% cuando se dispone de la pelvis completa, cuya morfología está directamente condicionada por la función reproductiva. Los métodos más utilizados son los de Phenice (1969) para la pelvis y los criterios craneales de Acsádi y Nemeskéri. En subadultos, la determinación es mucho menos fiable porque las diferencias sexuales no se expresan plenamente hasta la pubertad. Las técnicas de ADN antiguo permiten la determinación molecular del sexo cromosómico independientemente de la preservación esquelética.',
    piezas:[], imagen:null,
    fuente:null
  },
  {
    term:'Edad biológica', slug:'edad-biologica', cat:'metodo',
    def:'Estimación de la edad al fallecimiento a partir de indicadores esqueléticos: fusión epifisaria, desgaste dental, sinostosis craneal y degeneración articular.',
    sinonimos:[], obs:null,
    contexto:'La estimación de la edad biológica utiliza indicadores diferentes según el grupo de edad. En subadultos, la secuencia de erupción y calcificación dental y la fusión epifisaria ofrecen estimaciones precisas (±1-2 años). En adultos, los indicadores disponibles —sinostosis de suturas craneales, cambios en la superficie auricular del ilion, metamorfosis de la sínfisis del pubis, desgaste dental— son menos fiables y producen intervalos más amplios. La combinación de múltiples métodos mejora la precisión de la estimación.',
    piezas:[], imagen:null,
    fuente:null
  },
  {
    term:'Índice cefálico', slug:'indice-cefalico', cat:'metodo',
    def:'Razón entre la anchura máxima y la longitud máxima del cráneo, multiplicada por 100.',
    sinonimos:[], obs:null,
    contexto:'El índice cefálico fue ampliamente utilizado en la antropología física del siglo XIX y principios del XX como indicador de diferencias raciales, uso que ha sido completamente rechazado por la ciencia moderna. En la actualidad se usa exclusivamente como descriptor morfológico en estudios de variabilidad poblacional y biodistancia. Los valores inferiores a 75 (dolicocéfalo), entre 75 y 80 (mesocéfalo) y superiores a 80 (braquicéfalo) describen la forma general de la bóveda craneal sin ninguna implicación adaptativa o racial.',
    piezas:[], imagen:null,
    fuente:null
  },
  {
    term:'Índice de Kellgren-Lawrence', slug:'kellgren-lawrence', cat:'metodo',
    def:'Escala radiológica de 0 a 4 que gradúa la severidad de la osteoartritis.',
    sinonimos:[], obs:null,
    contexto:'La escala de Kellgren-Lawrence (1957) es el sistema de gradación de osteoartritis más utilizado en medicina clínica y ha sido adaptado para su uso en paleopatología. En el registro óseo, los grados se determinan macroscópicamente valorando la presencia y extensión de eburnación, osteofitosis marginal, quistes subcondrales y pérdida de espacio articular. El grado 4 implica destrucción articular avanzada con eburnación extensa y osteofitosis marcada, compatible con discapacidad funcional severa en vida.',
    piezas:['OV-008'], imagen:null,
    fuente:null
  },
  {
    term:'Tafonomía', slug:'tafonomia', cat:'metodo',
    def:'Estudio de los procesos que afectan a los restos orgánicos desde la muerte hasta su excavación.',
    sinonimos:[], obs:null,
    contexto:'El conocimiento tafonómico es imprescindible para el paleopatólogo, porque permite identificar las pseudopatologías —alteraciones postmortem que pueden confundirse con lesiones patológicas reales. La meteorización, la acción de raíces, los procesos diagenéticos, la compresión del sedimento y la bioturbación por animales producen cambios en la coloración, textura y morfología del hueso que deben ser reconocidos y descartados antes de establecer cualquier diagnóstico paleopatológico.',
    piezas:[], imagen:null,
    fuente:null
  },
  {
    term:'Marcador de actividad', slug:'marcador-actividad', cat:'metodo',
    def:'Alteración ósea —entesopatía, asimetría, hipertrofia cortical— que refleja patrones de esfuerzo físico repetitivo y permite inferir actividades ocupacionales.',
    sinonimos:['marcador de estrés musculoesquelético','MEM','MAM'], obs:null,
    contexto:'El análisis de los marcadores de actividad permite reconstruir la división del trabajo en poblaciones del pasado. La comparación sistemática entre individuos de diferentes grupos de edad, sexo y contexto arqueológico permite identificar patrones ocupacionales colectivos. Sin embargo, la interpretación es compleja: la entesopatía también puede resultar del envejecimiento o de enfermedades sistémicas, y la actividad física raramente se traduce en un patrón único y reconocible. La combinación con datos isotópicos y arqueológicos mejora la robustez de las inferencias.',
    piezas:['OV-006'], imagen:null,
    fuente:null
  },

  // ════════════════════════════════════════════════════
  // ANATOMÍA — morfología craneal
  // ════════════════════════════════════════════════════
  {
    term:'Norma faciei', slug:'norma-faciei', cat:'anatomia',
    def:'Vista frontal del cráneo utilizada para el análisis morfológico de la cara, órbitas, abertura nasal y arcos cigomáticos.',
    sinonimos:[], obs:null,
    contexto:'La norma faciei permite evaluar la anchura facial, la morfología orbitaria y la apertura nasal, utilizados en estudios de variabilidad morfológica poblacional. En paleopatología es fundamental para identificar lesiones frontales del cráneo, la cribra orbitalia en el techo de las órbitas, y deformidades faciales congénitas o adquiridas.',
    piezas:['OV-001','OV-003'], imagen:null,
    fuente:null
  },
  {
    term:'Norma verticalis', slug:'norma-verticalis', cat:'anatomia',
    def:'Vista superior del cráneo que permite apreciar la forma de la bóveda craneal, el índice cefálico y las suturas craneales.',
    sinonimos:[], obs:null,
    contexto:'La norma verticalis es la vista de referencia para calcular el índice cefálico y para evaluar el grado de sinostosis de las suturas craneales como indicador de edad biológica. También permite detectar asimetrías de la bóveda (plagiocefalia) debidas a deformación craneal artificial o a cierre prematuro de una sutura (craneosinostosis).',
    piezas:['OV-001'], imagen:null,
    fuente:null
  },
  {
    term:'Norma occipitalis', slug:'norma-occipitalis', cat:'anatomia',
    def:'Vista posterior del cráneo. Permite analizar el occipital, la protuberancia occipital externa y la anchura máxima del neurocráneo.',
    sinonimos:[], obs:null,
    contexto:'La norma occipitalis permite evaluar la protuberancia occipital externa (inion), cuyo desarrollo es un indicador de la robustez muscular cervical y, secundariamente, del sexo biológico. La deformación craneal artificial intencional, practicada en numerosas culturas, es especialmente visible en esta vista. Las fracturas del occipital son también evaluadas desde esta perspectiva.',
    piezas:['OV-001'], imagen:null,
    fuente:null
  },
  {
    term:'Dolicocéfalo', slug:'dolicocefalico', cat:'anatomia',
    def:'Morfología craneal con índice cefálico inferior a 75, caracterizada por una forma alargada anteroposterior.',
    sinonimos:[], obs:null,
    contexto:'La dolicocefalia es la morfología craneal predominante en las poblaciones del Paleolítico y Mesolítico europeos, así como en muchas poblaciones africanas y australianas actuales. Su distribución geográfica y temporal es objeto de estudio en biodistancia y en el análisis de las migraciones humanas prehistóricas. No tiene ninguna implicación funcional o adaptativa demostrada.',
    piezas:[], imagen:null,
    fuente:null
  },
  {
    term:'Braquicéfalo', slug:'braquicefalico', cat:'anatomia',
    def:'Morfología craneal con índice cefálico superior a 80, caracterizada por una forma redondeada o ancha transversalmente.',
    sinonimos:[], obs:null,
    contexto:'La braquicefalia se asocia frecuentemente con poblaciones del este de Asia y Europa Central. En el registro arqueológico europeo, un aumento de la braquicefalia a partir del Neolítico se ha interpretado como indicador de cambios poblacionales por migración. La braquicefalia extrema (turricefalia) puede ser patológica si resulta de una craneosinostosis precoz.',
    piezas:[], imagen:null,
    fuente:null
  },
  {
    term:'Sinostosis', slug:'sinostosis', cat:'anatomia',
    def:'Fusión ósea completa de estructuras que normalmente permanecen separadas, como las suturas craneales.',
    sinonimos:[], obs:null,
    contexto:'La sinostosis craneal fisiológica sigue una secuencia conocida que permite estimar la edad biológica en adultos mayores. Sin embargo, el cierre de las suturas es altamente variable entre individuos y su fiabilidad como indicador de edad es limitada (especialmente la sutura sagital). La sinostosis prematura patológica (craneosinostosis) produce deformidades características según la sutura afectada. En el esqueleto postcraneal, la sinostosis articular (anquilosis ósea) es secuela de artritis séptica o espondilitis tuberculosa.',
    piezas:['OV-004','OV-015'], imagen:null,
    fuente:null
  },
  {
    term:'Sutura sagital', slug:'sutura-sagital', cat:'anatomia',
    def:'Sutura craneal que une los dos huesos parietales en la línea media.',
    sinonimos:[], obs:null,
    contexto:'La sutura sagital es la primera sutura craneal en comenzar a obliterarse, generalmente a partir de los 22 años en su extremo posterior (lambda). Su cierre completo puede producirse entre los 26 y los 60 años, lo que la convierte en un indicador de edad con amplio margen de error. La sinostosis precoz de la sutura sagital (escafocefalia) produce un cráneo alargado y estrecho que no debe confundirse con la dolicocefalia normal.',
    piezas:[], imagen:null,
    fuente:null
  },

  // ════════════════════════════════════════════════════
  // PATOLOGÍA — términos específicos de lesiones
  // ════════════════════════════════════════════════════
  {
    term:'Cribra orbitalia', slug:'cribra-orbitalia', cat:'patologia',
    def:'Lesión hipervascular en forma de porosidad en el techo de las órbitas oculares, indicador de anemia ferropénica o déficit vitamínico durante la infancia.',
    sinonimos:[], obs:null,
    contexto:'La cribra orbitalia es una de las lesiones paleopatológicas más frecuentemente registradas y debatidas. Aunque clásicamente interpretada como indicador de anemia ferropénica, investigaciones recientes apuntan a una etiología multifactorial que incluye el escorbuto (déficit de vitamina C) y la anemia megaloblástica (déficit de vitamina B12 y folato). Su grado de severidad se cuantifica mediante la escala de Steckel et al. (2006). Su presencia en individuos infantiles es especialmente informativa sobre las condiciones nutricionales de la primera infancia.',
    piezas:['OV-003'], imagen:null,
    fuente:null
  },
  {
    term:'Hiperostosis porótica', slug:'hiperostosis-porotica', cat:'patologia',
    def:'Engrosamiento y porosidad de los huesos de la bóveda craneal, asociado a anemias hemolíticas, déficit nutricional o infecciones crónicas.',
    sinonimos:[], obs:null,
    contexto:'La hiperostosis porótica y la cribra orbitalia son manifestaciones del mismo proceso fisiopatológico: la hiperplasia de la médula ósea roja en respuesta a una anemia crónica. El engrosamiento de la diploe y la porosidad de la tabla externa reflejan la expansión medular. Su presencia combinada con otros indicadores de estrés nutricional (hipoplasia del esmalte dental, retraso en el desarrollo) permite una interpretación más robusta del estado de salud poblacional.',
    piezas:['OV-003'], imagen:null,
    fuente:null
  },
  {
    term:'Periostitis', slug:'periostitis', cat:'patologia',
    def:'Inflamación del periostio que genera formación de hueso nuevo en la superficie cortical.',
    sinonimos:[], obs:null,
    contexto:'La periostitis es el signo óseo más inespecífico del repertorio paleopatológico, ya que puede ser consecuencia de infecciones bacterianas (tuberculosis, treponematosis, osteomielitis), traumatismos, escorbuto o tumores. Su distribución bilateral en costillas, como en OV-007, es altamente sugestiva de tuberculosis pulmonar o pleuritis crónica. El diagnóstico diferencial requiere analizar la morfología (activa vs. remodelada), la extensión y el contexto esquelético global.',
    piezas:['OV-007','OV-012'], imagen:null,
    fuente:null
  },
  {
    term:'Osteomielitis', slug:'osteomielitis', cat:'patologia',
    def:'Infección bacteriana del tejido óseo que provoca necrosis, formación de secuestro y cloaca de drenaje.',
    sinonimos:[], obs:null,
    contexto:'La osteomielitis hematógena crónica produce un cuadro radiológico y macroscópico característico: involucro óseo de neoformación periférico, secuestro central necrótico y fistulación cloacal. Este patrón es el más claramente diagnóstico en paleopatología. La forma aguda raramente deja evidencia en el hueso. El agente causal más frecuente, Staphylococcus aureus, puede confirmarse mediante análisis de ADN antiguo. La afectación preferente de la diáfisis de huesos largos en individuos jóvenes es característica de la vía hematógena.',
    piezas:['OV-012'], imagen:null,
    fuente:null
  },
  {
    term:'Espondilitis', slug:'espondilitis', cat:'patologia',
    def:'Inflamación de los cuerpos vertebrales. La espondilitis tuberculosa o Mal de Pott produce colapso vertebral con formación de giba angular.',
    sinonimos:[], obs:null,
    contexto:'El Mal de Pott, descrito por Sir Percivall Pott en 1779, es la forma más frecuente de tuberculosis ósea en el registro paleopatológico. La infección afecta preferentemente a los cuerpos vertebrales dorsales bajos y lumbares altos, produciendo destrucción del disco intervertebral y colapso en cuña de los cuerpos adyacentes. La formación de abscesos paravertebrales ("abscesos fríos") y su posible calcificación son hallazgos adicionales patognomónicos. La confirmación mediante ADN antiguo de Mycobacterium tuberculosis ha sido posible en múltiples casos arqueológicos.',
    piezas:['OV-004'], imagen:null,
    fuente:null
  },
  {
    term:'Osteoartritis', slug:'osteoartritis', cat:'patologia',
    def:'Enfermedad degenerativa articular caracterizada por erosión del cartílago, eburnación, osteofitosis y quistes subcondrales.',
    sinonimos:['artrosis'], obs:null,
    contexto:'La osteoartritis es la patología más frecuente en el registro paleopatológico de poblaciones adultas y ancianas. Su distribución articular y severidad son indicativas de edad, sexo y nivel de actividad física. La afectación de articulaciones que soportan poco peso (muñecas, hombros) sugiere sobrecarga ocupacional, mientras que la afectación de rodillas y caderas puede ser resultado del envejecimiento o de la obesidad. La escala de Kellgren-Lawrence permite cuantificar su severidad de forma estandarizada.',
    piezas:['OV-008'], imagen:null,
    fuente:null
  },
  {
    term:'Raquitismo', slug:'raquitismo', cat:'patologia',
    def:'Alteración metabólica por déficit de vitamina D que produce reblandecimiento óseo, deformidades en huesos largos y porosidad generalizada.',
    sinonimos:[], obs:null,
    contexto:'El raquitismo afecta exclusivamente a individuos en periodo de crecimiento. La vitamina D es imprescindible para la mineralización de la matriz ósea; su déficit produce la acumulación de osteoide no mineralizado que el hueso no puede soportar mecánicamente, dando lugar a deformidades características: genu varum (piernas en arco), rosario raquítico costal, craniotabes y, en la tibia, la curvación anterior en "sable". En el registro arqueológico es más frecuente en poblaciones con poca exposición solar o dieta pobre en vitamina D.',
    piezas:['OV-014'], imagen:null,
    fuente:null
  },
  {
    term:'Eburnación', slug:'eburnacion', cat:'patologia',
    def:'Pulido patológico de la superficie articular tras la destrucción total del cartílago.',
    sinonimos:[], obs:null,
    contexto:'La eburnación es el signo patognomónico de la osteoartritis avanzada y uno de los más fácilmente reconocibles en el registro paleopatológico. El contacto hueso-hueso produce un pulido brillante de la superficie articular con estrías de dirección paralela al movimiento articular. Su presencia implica que el cartílago articular estaba completamente destruido en vida, lo que conlleva dolor crónico intenso y limitación funcional grave. La eburnación es criterio suficiente para el diagnóstico de osteoartritis grado 4 de Kellgren-Lawrence.',
    piezas:['OV-008'], imagen:null,
    fuente:null
  },
  {
    term:'Callo óseo', slug:'callo-oseo', cat:'patologia',
    def:'Tejido óseo de reparación que se forma durante la consolidación de una fractura.',
    sinonimos:[], obs:null,
    contexto:'La formación del callo óseo sigue una secuencia biológica precisa: callo blando fibrocartilaginoso (2-3 semanas), callo duro (mineralización progresiva, semanas a meses) y remodelación hacia hueso lamelar (meses a años). En paleopatología, la morfología del callo permite estimar el tiempo transcurrido desde la fractura y la calidad de la inmovilización: un callo exuberante con angulación indica mala alineación de los fragmentos, sugiriendo reducción incorrecta o ausencia de tratamiento.',
    piezas:['OV-002'], imagen:null,
    fuente:null
  },
  {
    term:'Fractura perimortem', slug:'fractura-perimortem', cat:'patologia',
    def:'Fractura producida en el momento de la muerte o inmediatamente antes, cuando el hueso conserva sus propiedades biomecánicas de tejido vivo.',
    sinonimos:[], obs:null,
    contexto:'El diagnóstico de fractura perimortem es uno de los más delicados de la paleopatología porque tiene implicaciones directas sobre la causa de muerte y sobre la presencia de violencia. Los criterios diagnósticos incluyen: bordes de fractura lisos o con biseles, mismo color que el resto del hueso, presencia de esquirlas de impacto y ausencia total de remodelación ósea. En contextos bélicos o de sacrificio ritual, las fracturas perimortem se concentran en zonas vulnerables (cráneo, costillas, vértebras) y muestran patrones compatibles con armas específicas.',
    piezas:['OV-016'], imagen:null,
    fuente:null
  },
  {
    term:'Absceso alveolar', slug:'absceso-alveolar', cat:'patologia',
    def:'Acumulación de pus en el alveolo dentario por infección periapical. Genera un orificio de drenaje en el hueso mandibular o maxilar.',
    sinonimos:[], obs:null,
    contexto:'Los abscesos alveolares son una de las evidencias más frecuentes de patología dental en el registro arqueológico. Su presencia implica que el individuo sufrió una infección activa y probablemente crónica con dolor intenso. El orificio de drenaje en el hueso alveolar (cloaca) permite que el pus drene hacia la cavidad oral. Su frecuencia en una población es un indicador de salud bucodental relacionado con la dieta (especialmente el consumo de carbohidratos fermentables) y la higiene oral.',
    piezas:['OV-009'], imagen:null,
    fuente:null
  },
  {
    term:'Sacralización', slug:'sacralizacion', cat:'patologia',
    def:'Variante anatómica en la que la última vértebra lumbar se fusiona parcial o totalmente al sacro, alterando la mecánica de la columna.',
    sinonimos:[], obs:null,
    contexto:'La sacralización de L5 es una variante de transición lumbosacra que altera la distribución de cargas en la columna lumbar, pudiendo generar sobrecarga en las articulaciones intervertebrales adyacentes y dolor crónico. Su identificación en el registro arqueológico es relevante porque puede explicar hallazgos de degeneración asimétrica en la columna lumbar. La sacralización unilateral, como en OV-005, produce una asimetría de la pelvis con esclerosis ipsilateral de la articulación sacroilíaca.',
    piezas:['OV-005'], imagen:null,
    fuente:null
  },
  {
    term:'Escoliosis', slug:'escoliosis', cat:'patologia',
    def:'Desviación lateral del raquis con rotación axial de los cuerpos vertebrales.',
    sinonimos:[], obs:null,
    contexto:'La escoliosis idiopática es la forma más frecuente y su etiología sigue sin estar completamente esclarecida. En paleopatología, la escoliosis estructural se identifica por la cuña vertebral, la rotación de los cuerpos vertebrales y los cambios degenerativos secundarios asimétricos. El ángulo de Cobb, calculado a partir de las vértebras límite de la curva, permite cuantificar su severidad. Curvas superiores a 40° producen repercusiones cardiorrespiratorias en vida y son visibles en el registro esquelético.',
    piezas:['OV-011'], imagen:null,
    fuente:null
  },

  // ════════════════════════════════════════════════════
  // CRONOLOGÍA
  // ════════════════════════════════════════════════════
  {
    term:'Neolítico', slug:'neolitico', cat:'cronologia',
    def:'Período prehistórico caracterizado por la aparición de la agricultura, la ganadería y los asentamientos permanentes.',
    sinonimos:[], obs:null,
    contexto:'La transición al Neolítico supone uno de los cambios más profundos en la salud de las poblaciones humanas documentados en el registro paleopatológico. La sedentarización, el hacinamiento y el contacto con animales domésticos favorecieron la transmisión de enfermedades infecciosas; la dieta rica en carbohidratos aumentó la caries dental; y la carga de trabajo intensivo agrícola produjo un aumento de las entesopatías y la degeneración articular precoz. En la Península Ibérica, el Neolítico se sitúa aproximadamente entre el 5500 y el 2200 a.C.',
    piezas:[], imagen:null,
    fuente:null
  },
  {
    term:'Yacimiento', slug:'yacimiento', cat:'cronologia',
    def:'Lugar donde se conservan restos arqueológicos.',
    sinonimos:[], obs:null,
    contexto:'El contexto del yacimiento es determinante para la interpretación paleopatológica. Las condiciones de deposición, el tipo de suelo, la humedad y el pH afectan a la preservación de los restos óseos (tafonomía). La cronología del yacimiento acota el diagnóstico diferencial de las enfermedades identificadas. El tipo de yacimiento —necrópolis, poblado, contexto de batalla— condiciona la representatividad de la muestra y los sesgos de mortalidad que deben considerarse en la interpretación.',
    piezas:[], imagen:null,
    fuente:null
  },
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
      `<a href="/prueba-museo/aula.html?glos=${entry.slug}" class="glos-link" title="${entry.def.slice(0,80)}…">${match}</a>`
    );
  });
  return result;
}
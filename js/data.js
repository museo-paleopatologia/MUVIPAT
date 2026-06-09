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

  /* ══════════════════════════════════════════
     COLECCIÓN
  ══════════════════════════════════════════ */
  {
    id: 'CH-21',
    nombre: 'Craneosinostosis sagital',
    region: 'craneo',
    patologia: 'congenita',
    sexo: 'masculino',
    epoca: 'medieval',
    yacimiento: 'Necrópolis sefardí "Cuesta de los Hoyos", Segovia, España',
    coords: [1307.62, 602.52],
    descripcion: 'Cráneo masculino adulto con escafocefalia derivada de craneosinostosis sagital. El individuo alcanzó entre 35 y 50 años de edad pese a la alteración congénita, en contexto de necrópolis judía medieval segoviana.',
    imagen: '/prueba-museo/assets/img/CH-21/superior.png',
    ficha: '/prueba-museo/ficha-estandar.html?id=CH-21',
    modelo3d: './assets/models/CH-21-textura.glb',

    cronologia: 'Siglos IX-XI',
    edad: '35-50 años',
    estatura: '165-175 cm',
    conservacion: null,

    diagnostico_principal: 'Craneosinostosis sagital que deriva en escafocefalia. La fusión prematura de la sutura sagital explica el alargamiento anteroposterior de la bóveda craneal y la presencia de una quilla sagital pronunciada.',

    relevancia: 'Caso excepcional de <strong>craneosinostosis sagital</strong> documentado en contexto arqueológico medieval hispano-judío. El individuo alcanzó una edad estimada de entre 35 y 50 años<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>, lo que demuestra una supervivencia prolongada pese a la alteración congénita. El excelente estado de conservación ha permitido una reconstrucción prácticamente completa del esqueleto<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>, aportando información sobre las consecuencias de esta patología en las condiciones de vida del individuo. Por su singularidad, fue presentado en el V Congreso Nacional de Paleopatología como ejemplo de craneosinostosis sagital en poblaciones históricas<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>.',

    contexto_arqueologico: [
      'La pieza procede del yacimiento arqueológico de la "Cuesta de los Hoyos", también llamado "El Pinarillo", situado frente al antiguo barrio judío de Segovia<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>. Se trata de uno de los pocos ejemplos de cementerios judíos medievales documentados arqueológicamente en la Península Ibérica<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>.',
      'Destaca por dos tipos de enterramiento: las cámaras hipogeas y los sepulcros en fosa<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>. Las cámaras hipogeas son estructuras talladas en roca con un <em>dromos</em> (pasillo) exterior de acceso que lleva a una cámara<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>. Las fosas antropomorfas reflejan ritos funerarios sencillos sin ajuares ostentosos<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>.',
      'Estudios antropológicos realizados en la población exhumada han revelado una alta mortalidad infantil y signos de presiones ambientales como raquitismo y anemias<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>, aportando información sobre las condiciones de vida de la comunidad hebrea medieval segoviana.',
    ],

    descripcion_osteologica: [
      'La pieza a detallar es el cráneo, relevante por su morfología atípica correspondiente a una escafocefalia causada por el cierre prematuro (craneosinostosis) de la sutura sagital. Esta condición genera una forma exageradamente larga en sentido anteroposterior con una quilla sagital pronunciada<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>.',
      'El hueso occipital es muy prominente, contribuyendo así a la longitud total del cráneo<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. La observación macroscópica revela que la sutura sagital se cerró posiblemente durante la infancia del individuo<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>.',
      'El resto del esqueleto presenta pequeñas exóstosis vertebrales, rebordes artrósicos en la rótula izquierda y modificaciones óseas en las tuberosidades tibiales<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>.',
      'La dentición tiene un estado de conservación excepcional, sin evidencias de caries ni pérdidas dentales <em>antemortem</em>. El desgaste dental es reducido para la edad estimada del individuo y se observan líneas de hipoplasia de esmalte compatibles con episodios de estrés fisiológico entre los 3 y 5 años de edad<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. Este carácter, junto con la presencia de cambios óseos relacionados con la actividad física, permite plantear que el individuo mantuvo una calidad de vida relativamente favorable a pesar de la alteración congénita.',
    ],

    hallazgos: [
      {
        titulo: 'Hidrocefalia — Descartado',
        items: [
          { texto: 'La hidrocefalia suele producir una expansión generalizada de la bóveda craneal y una morfología globulosa. En este caso, la deformación se concentra en el eje anteroposterior y se acompaña de una quilla sagital, lo que es incompatible con hidrocefalia.' }
        ]
      },
      {
        titulo: 'Acondroplasia — Descartado',
        items: [
          { texto: 'La acondroplasia suele asociarse a macrocefalia con frente prominente, depresión del puente nasal y talla reducida. Ninguna de estas características se observa en el individuo, cuya estatura estimada se sitúa entre 165 y 175 cm.' }
        ]
      },
      {
        titulo: 'Deformación cefálica intencional — Descartado',
        items: [
          { texto: 'La fusión completa de la sutura sagital, observada tanto en la superficie ectocraneal como en la endocraneal, indica un origen patológico. Las deformaciones cefálicas culturales no provocan el cierre de las suturas ni la formación de una quilla sagital ósea.' }
        ]
      }
    ],

    referencias: [
      {
        id: 1,
        autores: 'Robles FJ, Campo M, González A.',
        anio: '1999',
        titulo: 'Craniostenosis sagital',
        editorial: 'En: Sánchez Sánchez JA, editor. Actas V Congreso Nacional de Paleopatología; 1999; Alcalá la Real (Jaén). Jaén: Asociación Española de Paleopatología'
      },
      {
        id: 2,
        autores: 'Fernández Esteban S.',
        anio: '1999',
        titulo: 'Análisis de las estructuras funerarias de la Cuesta de los Hoyos, Segovia, un ejemplo de necrópolis medieval hebrea',
        editorial: 'En: XXIV Congreso Nacional de Arqueología; oct 1997; Cartagena. Cartagena: Universidad de Murcia; 1999. p. 225-32'
      }
    ],

    imagenes: [
      { src: '/prueba-museo/assets/img/CH-21/superior.png',    caption: 'Figura 1. Vista superior del cráneo CH-21. Se aprecia el alargamiento anteroposterior de la bóveda craneal característico de la escafocefalia, así como la fusión de la sutura sagital.' },
      { src: '/prueba-museo/assets/img/CH-21/lateral-izq.png', caption: 'Figura 2. Vista lateral izquierda del cráneo CH-21. Se observa el alargamiento anteroposterior y la prominencia occipital.' },
      { src: '/prueba-museo/assets/img/CH-21/frontal.png',     caption: 'Figura 3. Vista frontal del cráneo CH-21. La fusión de la sutura sagital produjo una modificación de la forma de la bóveda craneal, mientras que el esqueleto facial mantiene una morfología sin alteraciones significativas.' },
      { src: '/prueba-museo/assets/img/CH-21/inferior.png',    caption: 'Figura 4. Vista inferior del cráneo CH-21. Muestra la morfología general de la base craneal y la elongación anteroposterior del individuo.' }
    ],

    layoutMode: 'default'
  },

  {
    id: 'M-16-0906',
    nombre: 'Cráneo con traumatismo por arma blanca',
    region: 'craneo',
    patologia: 'trauma',
    sexo: 'masculino',
    epoca: 'medieval',
    yacimiento: 'Necrópolis hispanomusulmana (maqbara) de San Nicolás, Murcia, España',
    coords: [1729.55, 1112.15],
    descripcion: 'Cráneo masculino adulto joven procedente de la maqbara islámica de San Nicolás (Murcia, ss. XI-XII). Presenta una lesión traumática frontal de morfología elipsoidal compatible con herida por instrumento de filo cortante, con signos de remodelación ósea parcial que evidencian supervivencia inicial al traumatismo.',
    imagen: '/prueba-museo/assets/img/M-16-0906/traumatismo.png',
    ficha: '/prueba-museo/ficha-estandar.html?id=M-16-0906',
    modelo3d: null,

    cronologia: 'ss. XI-XII',
    edad: 'Adulto joven',
    estatura: '175-180 cm',
    conservacion: null,

    diagnostico_principal: 'Traumatismo por instrumento o arma de filo cortante. Lesión craneal frontal de morfología elipsoidal (66 × 40,2 mm) con remodelación parcial del margen izquierdo, compatible con herida perimortem producida por un instrumento cortante y supervivencia inicial al traumatismo.',

    relevancia: 'Este cráneo representa un <strong>testimonio directo de violencia interpersonal</strong> documentado en la <em>maqbara</em> de San Nicolás. La morfología de la lesión y la robustez del individuo sugieren un contexto de enfrentamiento bélico, aportando datos sobre la supervivencia a traumatismos en el periodo hispanomusulmán<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>.',

    contexto_arqueologico: [
      'La pieza procede de la <em>maqbara</em> islámica de San Nicolás, situada en el sector central de la ciudad de Murcia<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. Este espacio funerario está asociado a la población hispanomusulmana de la ciudad entre los siglos XI y XIII<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>.',
      'Las inhumaciones se realizan en fosas estrechas excavadas en tierra, en decúbito lateral derecho, con el cráneo orientado hacia el suroeste y el rostro hacia el sureste<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>, características funerarias propias de la práctica islámica.',
      'La necrópolis se estableció sobre un antiguo alfar de los siglos X y XI y, como consecuencia del crecimiento demográfico del siglo XII, llegó a presentar una gran densidad de enterramientos superpuestos<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>.',
    ],

    descripcion_osteologica: [
      'La pieza corresponde a un cráneo incompleto acompañado de un fragmento óseo aislado. Presenta una lesión traumática de morfología elipsoidal localizada en la región frontal, extendiéndose desde la cresta superciliar hasta una posición próxima a la sutura coronal<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>. La lesión alcanza 66 mm de longitud y 40,2 mm de anchura máxima<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>.',
      'Los márgenes de la lesión muestran diferencias relevantes: el derecho presenta un aspecto irregular y carece de evidencias de reparación ósea, mientras que el izquierdo muestra adelgazamiento cortical y signos de remodelación, indicando una respuesta biológica posterior al traumatismo y una supervivencia inicial<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>.',
      'El individuo presenta además hipoplasias de esmalte dental, cálculo dental, caries en caninos y premolares, rebordes artrósicos, nódulos de Schmörl, calcificación del ligamento amarillo y diversas entesopatías, compatibles con elevados niveles de actividad física en vida<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>.',
    ],

    hallazgos: [
      {
        titulo: 'Trepanación craneal — Poco compatible',
        items: [
          { texto: 'Poco compatible por morfología irregular de la lesión y patrón traumático. La trepanación produce bordes regulares y biselados, ausentes en este caso.', refs: [2] }
        ]
      },
      {
        titulo: 'Traumatismo accidental — Menos probable',
        items: [
          { texto: 'Morfología dirigida y patrón lesional más compatible con una agresión interpersonal que con un traumatismo accidental.', refs: [2] }
        ]
      },
      {
        titulo: 'Alteración tafonómica — Descartada',
        items: [
          { texto: 'Descartada por la remodelación observada, que confirma una respuesta biológica en vida y descarta un origen postmortem.', refs: [2] }
        ]
      }
    ],

    referencias: [
      {
        id: 1,
        autores: 'Navarro Palazón J.',
        anio: '1986',
        titulo: 'El cementerio islámico de San Nicolás de Murcia. Memoria preliminar',
        editorial: 'En: Actas del I Congreso de Arqueología Medieval Española; 1986; Zaragoza. p. 7-37'
      },
      {
        id: 2,
        autores: 'Pimentel de Francisco G, Rodríguez González AI, González Martín A, Campo Martín M, Robles Rodríguez FJ, Arzoz del Val L.',
        anio: '2001',
        titulo: 'Evidencia de violencia en la población hispanomusulmana de San Nicolás (Murcia, s XI a s XIII)',
        editorial: 'En: Actas del VI Congreso Nacional de Paleopatología; 2001. p. 542-544'
      }
    ],

    imagenes: [
      { src: '/prueba-museo/assets/img/M-16-0906/traumatismo.png', caption: 'Figura 1. Detalle de la lesión craneal atribuida a un traumatismo por instrumento cortante. Se observa la remodelación del margen izquierdo. Imagen tomada de Pimentel de Francisco et al. (2001).' },
      { src: '/prueba-museo/assets/img/M-16-0906/traumatismo-completo.png', caption: 'Figura 2. Cráneo con reposición del fragmento óseo recuperado en el enterramiento. Imagen tomada de Pimentel de Francisco et al. (2001).' }
    ],

    layoutMode: 'default'
  },

  {
    id: 'SN-MAND-01',
    nombre: 'Mandíbula con hipoplasia de esmalte dental',
    region: 'craneo',
    patologia: 'metabolica',
    sexo: 'indeterminado',
    epoca: 'medieval',
    yacimiento: 'Necrópolis hispanomusulmana (maqbara) de San Nicolás, Murcia, España',
    coords: [1729.55, 1112.15],
    descripcion: 'Mandíbula procedente de la maqbara islámica de San Nicolás (Murcia, ss. XI-XIII). Presenta defectos lineales horizontales en el esmalte dental compatibles con hipoplasia de esmalte, indicador de episodios de estrés biológico ocurridos durante el desarrollo infantil.',
    imagen: '/prueba-museo/assets/img/mandibula/vista-frontal.png',
    ficha: '/prueba-museo/ficha-estandar.html?id=SN-MAND-01',
    modelo3d: null,

    cronologia: 'ss. XI-XIII',
    edad: null,
    conservacion: null,

    diagnostico_principal: 'Hipoplasia del esmalte dental. Defectos lineales horizontales en múltiples piezas dentales compatibles con interrupciones temporales de la amelogénesis, asociadas a episodios de estrés biológico (nutricional, infeccioso o metabólico) durante el desarrollo infantil, principalmente entre los 3 y 6 años de edad.',

    relevancia: 'Esta pieza documenta alteraciones en la formación del esmalte compatibles con interrupciones temporales de la amelogénesis, proporcionando información sobre las condiciones de salud y desarrollo de la población hispanomusulmana de la necrópolis de San Nicolás. Estudios en esta <em>maqbara</em> relacionan la elevada frecuencia de hipoplasia de esmalte (HE) con episodios de estrés biológico ocurridos principalmente entre los 3 y 6 años de edad, coincidiendo con el destete y la exposición a agentes infecciosos<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>.',

    contexto_arqueologico: [
      'La pieza procede de la <em>maqbara</em> islámica de San Nicolás, situada en el sector central de la ciudad de Murcia<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>. Este espacio funerario está asociado a la población hispanomusulmana de la ciudad entre los siglos XI y XIII<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>.',
      'Las inhumaciones se realizan en fosas estrechas excavadas en tierra, en decúbito lateral derecho, con el cráneo orientado hacia el suroeste y el rostro hacia el sureste<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>, características funerarias propias de la práctica islámica.',
      'La necrópolis se estableció sobre un antiguo alfar de los siglos X y XI y, como consecuencia del crecimiento demográfico del siglo XII, llegó a presentar una gran densidad de enterramientos superpuestos<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>.',
    ],

    descripcion_osteologica: [
      'La pieza corresponde a una mandíbula con defectos lineales horizontales en la superficie del esmalte dental, visibles como surcos en la cara labial de las coronas. Estas alteraciones son compatibles con episodios de interrupción temporal de la amelogénesis<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>, proceso responsable de la formación del esmalte dental.',
      'Estudios realizados sobre la población de San Nicolás indican que la aparición de estos defectos se concentra principalmente entre los 3 y 6 años de edad, intervalo que coincide con períodos de mayor vulnerabilidad biológica en la infancia<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>.',
      'La HE presenta una elevada frecuencia dentro de la población estudiada y muestra una asociación con otros indicadores, especialmente la cribra orbitalia<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. En conjunto, estos marcadores sugieren la exposición a condiciones adversas durante el crecimiento, relacionadas con alteraciones nutricionales, procesos infecciosos o episodios de estrés metabólico, con posible influencia de episodios de inestabilidad social y crisis de alimentos en el contexto histórico medieval de Murcia<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>.',
    ],

    hallazgos: [
      {
        titulo: 'Desgaste dental post-eruptivo — Descartado',
        items: [
          { texto: 'Los procesos de desgaste modifican progresivamente superficies dentales expuestas al uso, pero no generan surcos horizontales lineales en la cara labial de las coronas.' }
        ]
      },
      {
        titulo: 'Traumatismo dental localizado — Descartado',
        items: [
          { texto: 'Los traumatismos suelen afectar de forma aislada a una o pocas piezas. La presencia de alteraciones similares en varias piezas indica un origen sistémico.', refs: [1] }
        ]
      },
      {
        titulo: 'Alteraciones congénitas del esmalte — Menos probable',
        items: [
          { texto: 'Las patologías hereditarias del esmalte como la amelogénesis imperfecta son posibles, pero el patrón de distribución de los defectos y el contexto poblacional favorecen la hipótesis de la hipoplasia de origen sistémico.', refs: [1] }
        ]
      }
    ],

    referencias: [
      {
        id: 1,
        autores: 'Robles FJ, González A, García C.',
        anio: '1996',
        titulo: 'Indicadores de estrés en la población hispano-musulmana de San Nicolás (Murcia, s. XI a XIII)',
        editorial: 'En: Pérez-Pérez A, editor. Salud, enfermedad y muerte en el pasado. Barcelona: Fundación Uriach 1838; 1996. p. 109-119'
      },
      {
        id: 2,
        autores: 'Navarro Palazón J.',
        anio: '1986',
        titulo: 'El cementerio islámico de San Nicolás de Murcia. Memoria preliminar',
        editorial: 'En: Actas del I Congreso de Arqueología Medieval Española; 1986; Zaragoza. p. 7-37'
      }
    ],

    imagenes: [
      { src: '/prueba-museo/assets/img/mandibula/vista-frontal.png', caption: 'Figura 1. Vista frontal de la mandíbula, donde se aprecian las líneas de hipoplasia de esmalte presentes en la dentición anterior. Imagen tomada de Robles et al. (1996).' },
      { src: '/prueba-museo/assets/img/mandibula/detalle-he.png', caption: 'Figura 2. Detalle de la dentición anterior de la mandíbula, donde se pueden observar los surcos horizontales lineales de HE descritos en la ficha. Imagen tomada de Robles et al. (1996).' }
    ],

    layoutMode: 'default'
  },

  {
    id: 'MARB-09-T160-T180',
    nombre: 'Tumbas 160 y 180: Mal de Pott y metástasis osteolíticas',
    region: 'columna',
    patologia: ['infecciosa', 'tumor'],
    sexo: 'femenino',
    epoca: 'romano',
    yacimiento: 'Basílica Paleocristiana de Marialba de la Ribera, Villaturiel, León',
    coords: [1096.65, 295.66],
    descripcion: 'Dos individuos femeninos adultos procedentes de la necrópolis tardoantigua de Marialba de la Ribera (León, ss. IV-VII). El individuo T.180 presenta destrucción vertebral, colapso de D8 y cifosis patológica compatible con Mal de Pott. El individuo T.160 muestra lesiones osteolíticas multifocales cuya distribución orienta el diagnóstico hacia metástasis osteolíticas.',
    imagen: '/prueba-museo/assets/img/T.160-180/enterramientos.png',
    ficha: '/prueba-museo/ficha-estandar.html?id=MARB-09-T160-T180',
    modelo3d: null,

    cronologia: 'Antigüedad Tardía (ss. IV-VII d.C.)',
    edad: 'Adulto maduro',
    conservacion: null,

    diagnostico_principal: 'T.180: Mal de Pott (tuberculosis vertebral) — destrucción de D8, colapso vertebral y cifosis patológica con predominio destructivo y conservación de los arcos. T.160: Metástasis osteolíticas — lesiones multifocales de bordes suaves en múltiples regiones anatómicas, sin colapso vertebral, con afectación de arcos y pérdida generalizada de masa ósea.',

    relevancia: 'El estudio de los individuos de la Tumba 180 y la Tumba 160 es una contribución esencial al registro de la <strong>tuberculosis</strong> en la Antigüedad Tardía en el noroeste de la Península Ibérica. El individuo T.180 es especialmente importante por presentar lesiones óseas suficientes para diagnosticar <strong>Mal de Pott</strong><a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. La comparación con el individuo T.160, cuyo patrón de distribución y ausencia de destrucción vertebral orientan el diagnóstico hacia lesiones metastásicas<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>, permite comprender las dificultades diagnósticas del estudio paleopatológico de enfermedades de alta relevancia histórica.',

    contexto_arqueologico: [
      'Ambos individuos proceden de la necrópolis asociada a la Basílica Paleocristiana de Marialba de la Ribera, cuya historia funcional se inicia en el siglo IV d.C.<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>. El edificio original se proyectó como un mausoleo vinculado a las élites militares de la <em>legio VII Gemina</em>; este proyecto quedó inacabado pero a mediados del siglo IV fue transformado en un <em>martyrium</em> con cámaras funerarias destinadas al culto e inhumación de personajes destacados<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>.',
      'Al convertir este espacio en sagrado se generó una densa área cementerial activa desde la Antigüedad Tardía hasta la Baja Edad Media<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>. Las piezas corresponden a la fase tardoantigua de la basílica<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>, caracterizada por la reutilización del espacio y la superposición de enterramientos<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>.',
    ],

    descripcion_osteologica: [
      '<strong>Individuo T.180.</strong> Presenta una destrucción completa del cuerpo de la octava vértebra dorsal (D8) que provocó su colapso vertebral<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. Como consecuencia desarrolló una marcada cifosis patológica identificada durante la excavación<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. Se observa además una anquilosis vertebral que afecta probablemente a las vértebras D7-D9 y una fusión costal en el lado izquierdo del tórax<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. El patrón lesional muestra gran predominio de procesos destructivos frente a la formación de nuevo hueso, aunque mantiene la arquitectura de los arcos vertebrales<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>.',
      '<strong>Individuo T.160.</strong> Presenta múltiples lesiones osteolíticas distribuidas por diferentes regiones: cóndilo mandibular derecho, costillas, manubrio y cuerpo del esternón, ala ilíaca derecha y columna vertebral<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. Las lesiones son cavidades de bordes suaves y bien delimitados, con formas circulares, ovaladas o coalescentes, de diámetros inferiores a 5 mm en la mayoría de los casos —excepto la del manubrio esternal—<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>.',
      'A diferencia de T.180, las lesiones vertebrales de T.160 afectan tanto a los cuerpos como a los arcos vertebrales sin provocar colapso vertebral<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. El esqueleto presenta además una pérdida generalizada de masa ósea<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>.',
    ],

    hallazgos: [
      {
        titulo: 'T.180 · Osteomielitis purulenta — Descartada',
        items: [
          { texto: 'La osteomielitis suele presentar formación de hueso nuevo (reacción perióstica) y secuestros óseos. En T.180 existe un claro predominio de la destrucción frente a la neoformación, lo que descarta este diagnóstico.', refs: [1] }
        ]
      },
      {
        titulo: 'T.180 · Procesos traumáticos o neoplásicos — Descartados',
        items: [
          { texto: 'Se excluyen por la conservación de la estructura de los arcos vertebrales y la especificidad del colapso vertebral con cifosis, características del Mal de Pott.', refs: [1] }
        ]
      },
      {
        titulo: 'T.160 · Tuberculosis vertebral — Descartada',
        items: [
          { texto: 'T.160 no presenta destrucción completa de ningún cuerpo vertebral y las lesiones afectan también a los arcos vertebrales. El diámetro de la mayoría de las lesiones es inferior a 5 mm (salvo en el esternón), patrón incompatible con tuberculosis vertebral.', refs: [1] }
        ]
      },
      {
        titulo: 'T.160 · Sarcoidosis — Menos probable',
        items: [
          { texto: 'La morfología de las cavidades, su distribución multifocal y la pérdida de masa ósea generalizada resultan más compatibles con un proceso metastásico osteolítico que con sarcoidosis.', refs: [1] }
        ]
      }
    ],

    referencias: [
      {
        id: 1,
        autores: 'Cambra-Moo O, Campo Martín M, Vega Bermúdez R, Elvira Martín A, San Román Fernández F, González Martín A.',
        anio: '2013',
        titulo: '¿Dos posibles casos de tuberculosis entre las inhumaciones tardoantiguas de la necrópolis de Marialba de la Ribera (Villaturiel, León)?',
        editorial: 'En: Malgosa Morera A, Isidro Llorens A, Ibáñez Gimeno P, Prats-Muñoz G, editores. Vetera corpora morbo afflicta: Actas del XI Congreso Nacional de Paleopatología. Barcelona; 2013. p. 135-140'
      },
      {
        id: 2,
        autores: 'Gutiérrez González JA.',
        anio: '2021',
        titulo: 'Los oscuros orígenes de un monumento funerario y cultual: Marialba de la Ribera (León). De mausoleum-martyrium a basílica bautismal',
        editorial: 'Gerión. 2021;39(2):567-600'
      }
    ],

    imagenes: [
      { src: '/prueba-museo/assets/img/T.160-180/enterramientos.png', caption: 'Figura 1. Fotografía de campo de los dos enterramientos estudiados. Se puede observar la cifosis patológica en T.180. Imagen tomada de Cambra-Moo et al. (2013).' },
      { src: '/prueba-museo/assets/img/T.160-180/cifosis-180.png', caption: 'Figura 2. Detalle de la cifosis del individuo T.180. Imagen tomada de Cambra-Moo et al. (2013).' },
      { src: '/prueba-museo/assets/img/T.160-180/costilla-180.png', caption: 'Figura 3. Detalle de las lesiones en la costilla del individuo T.180. Imagen tomada de Cambra-Moo et al. (2013).' },
      { src: '/prueba-museo/assets/img/T.160-180/dorsales-160.png', caption: 'Figura 4. Detalle de las lesiones en las vértebras dorsales del individuo T.160 (vistas ventral y dorsal). Imagen tomada de Cambra-Moo et al. (2013).' },
      { src: '/prueba-museo/assets/img/T.160-180/manubrio-160.png', caption: 'Figura 5. Detalle de las lesiones en el manubrio del esternón del individuo T.160 (vistas ventral y dorsal). Imagen tomada de Cambra-Moo et al. (2013).' }
    ],

    layoutMode: 'default'
  },

  /* ══════════════════════════════════════════
     ANQUILOSIS DE RODILLA EN ALMANSA
  ══════════════════════════════════════════ */
  {
    id: 'ALM-ANQR-01',
    nombre: 'Anquilosis de rodilla en Almansa',
    region: 'miembro-inferior',
    patologia: 'degenerativa',
    sexo: 'masculino',
    epoca: 'moderno',
    yacimiento: 'Osario de Santa María de la Soledad, Almansa, Albacete',
    coords: [1729.55, 966.92],
    descripcion: 'Bloque óseo fusionado que integra el fémur, la tibia y la rótula derecha de un individuo masculino adulto, con un ángulo de flexión de 117,5°. Procede del osario de Almansa (ss. XIII-XVIII). La anquilosis total evidencia una inmovilización prolongada de la articulación compatible con traumatismo severo o tuberculosis osteoarticular.',
    imagen: '/prueba-museo/assets/img/anquilosis/anquilosis-lateral.png',
    ficha: '/prueba-museo/ficha-estandar.html?id=ALM-ANQR-01',
    modelo3d: './assets/models/anquilosis-web.glb',

    cronologia: 's. XIII-XVIII',
    edad: 'Adulta',
    conservacion: null,

    diagnostico_principal: 'Anquilosis total de la articulación de la rodilla derecha con fusión completa de fémur, tibia y rótula en posición de flexión de 117,5°. Diagnóstico principal: traumatismo severo o tuberculosis osteoarticular como causa de la inmovilización irreversible de la articulación.',

    relevancia: 'En esta pieza se puede ver una <strong>fusión ósea completa</strong> entre fémur, tibia y rótula con un ángulo de flexión de 117,5º, lo que sugiere una inmovilización prolongada del individuo. Esta anquilosis permite plantear diagnósticos diferenciales entre traumatismos mal curados e infecciones bacterianas como la tuberculosis<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>, además de ser clave para la reconstrucción de las condiciones de vida de la población de Almansa entre los siglos XIII y XVIII<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>.',

    contexto_arqueologico: [
      'El conjunto de restos óseos, datado entre los siglos XIII y XVIII, fue descubierto en 2008 durante la demolición de una vivienda en el casco histórico de la ciudad de Almansa<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. El solar reveló restos humanos vinculados a la antigua iglesia de Santa María de la Soledad, el templo medieval más documentado en Almansa<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>.',
      'Se considera un depósito secundario ya que los restos se hallaron sin conexión anatómica y en gran acumulación<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. Su formación probablemente corresponda a las <em>mondas</em>, procesos en los que se vaciaban las sepulturas de las iglesias para liberar suelo sagrado y reutilizarlo, trasladando los cuerpos a criptas o grandes osarios<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>. Aunque no está confirmado, este traslado masivo podría estar relacionado con hambrunas, epidemias o eventos bélicos como la Batalla de Almansa (1707)<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>.',
      'El estudio se realizó sobre una muestra de 50 conjuntos (de un total de 200), identificando 14.100 restos postcraneales y estimando un Número Mínimo de Individuos (NMI) de 159.',
    ],

    descripcion_osteologica: [
      'Esta pieza consiste en un bloque óseo fusionado que integra el fémur, la tibia y la rótula derecha de un individuo adulto. Muestra una anquilosis total por la soldadura por osificación de la extremidad ósea de la rótula, fémur y tibia. El análisis macroscópico revela una alteración severa de la anatomía funcional de la rodilla.',
      '<strong>Fusión y puentes óseos:</strong> se observa la formación de puentes óseos en la cara lateral de la pieza, los cuales han generado la fusión permanente del conjunto óseo.',
      '<strong>Desplazamiento anatómico:</strong> tanto la tibia como la rótula se encuentran desplazadas lateralmente respecto a su eje anatómico original.',
      '<strong>Alteraciones del tejido óseo:</strong> el individuo muestra evidencia de osteólisis localizada en el cóndilo lateral del fémur. Asimismo, se han identificado procesos concurrentes de osteopenia y osteogénesis, signos indicativos de una respuesta biológica activa ante procesos infecciosos o traumáticos.',
      '<strong>Análisis métrico:</strong> el estudio radiológico ha determinado que la articulación quedó inmovilizada en un ángulo de flexión de 117,5º. Es significativo que, a pesar de la gravedad de la patología articular, tanto la zona proximal del fémur como el extremo distal de la tibia conservan una morfología normal sin alteraciones patológicas.',
    ],

    hallazgos: [
      {
        titulo: 'Traumatismo severo — Diagnóstico principal',
        items: [
          { texto: 'Un traumatismo se considera diagnóstico principal porque si no es tratado adecuadamente puede desencadenar procesos degenerativos que culminen en la fusión completa de la articulación. Si la fractura afectó a la articulación o hubo dislocación, el hemartros resultante aumenta el riesgo de osificación y anquilosis.' }
        ]
      },
      {
        titulo: 'Tuberculosis osteoarticular — Diagnóstico principal alternativo',
        items: [
          { texto: 'El 90% de las lesiones esqueléticas por tuberculosis afectan a una articulación, siendo la rodilla una de las más frecuentes. El proceso observado de osteólisis inicial en el cóndilo lateral del fémur, seguido de osteogénesis y osteopenia, coincide con el curso clínico de la infección por <em>Mycobacterium tuberculosis</em> en el tejido óseo.' }
        ]
      },
      {
        titulo: 'Artritis reumatoide o espondiloartropatías — Menos probable',
        items: [
          { texto: 'Aunque estas patologías pueden causar anquilosis, la pieza no presenta el patrón de morbilidad sistémico ni las erosiones marginales típicas de las artropatías inflamatorias. Además, la conservación de la zona proximal del fémur y distal de la tibia sugiere un proceso localizado.' }
        ]
      },
      {
        titulo: 'Artritis séptica — Menos probable',
        items: [
          { texto: 'Las infecciones piógenas agudas como la artritis séptica pueden causar destrucción rápida y posterior anquilosis, pero suelen presentar reacción perióstica más extensa y signos de involucro (secuestros) que no se describen en este caso.' }
        ]
      },
      {
        titulo: 'Inmovilización simple — Descartada',
        items: [
          { texto: 'La inmovilización por sí sola puede causar atrofia o rigidez, pero la presencia de puentes óseos robustos, desplazamiento anatómico de tibia y rótula y zonas de osteólisis activa confirman la existencia de una afección previa (traumática o infecciosa) y no solo falta de uso.' }
        ]
      }
    ],

    referencias: [
      {
        id: 1,
        autores: 'Nacarino Meneses C, García Gil O, Aguilar Lazagabaster I, Pérez Pachón L, Lanseros M.',
        anio: '2013',
        titulo: 'Un caso de anquilosis de la articulación de la rodilla perteneciente a una población de Almansa (Albacete)',
        editorial: 'En: Malgosa A, Isidro A, Ibáñez-Gimeno P, Prats-Muñoz G, editores. Vetera corpora morbo afflicta: Actas del XI Congreso Nacional de Paleopatología; 2013. p. 459-464'
      },
      {
        id: 2,
        autores: 'Aguilar Lazagabaster I.',
        anio: '2011',
        titulo: 'El conocimiento de las poblaciones del pasado a través de los restos óseos: estudio del osario de la iglesia de Santa María de la Soledad, Almansa (Albacete, s.XIII–XVIII). Creación de un catálogo digital mediante una base de datos relacional en red',
        editorial: 'Proyecto Fin de Carrera. Madrid: Facultad de Ciencias, Universidad Autónoma de Madrid; 2011'
      }
    ],

    imagenes: [
      { src: '/prueba-museo/assets/img/anquilosis/anquilosis-lateral.png', caption: 'Figura 1. Vista lateral de la anquilosis de la articulación de la rodilla en un individuo de la población de Almansa (Albacete).' },
      { src: '/prueba-museo/assets/img/anquilosis/anquilosis-frontal.png', caption: 'Figura 2. Vista frontal de la anquilosis de la articulación de la rodilla en un individuo de la población de Almansa (Albacete).' },
      { src: '/prueba-museo/assets/img/anquilosis/anquilosis-radio.png',   caption: 'Figura 3. Radiografía de la anquilosis de la articulación de la rodilla en un individuo de la población de Almansa (Albacete).' }
    ],

    layoutMode: 'default'
  },

  /* ══════════════════════════════════════════
     CRÁNEO CON TRAUMATISMO EN ASTERION
  ══════════════════════════════════════════ */
  {
    id: 'ALM-ASTER-01',
    nombre: 'Cráneo con traumatismo en asterión',
    region: 'craneo',
    patologia: 'trauma',
    sexo: 'indeterminado',
    epoca: 'moderno',
    yacimiento: 'Osario de Santa María de la Soledad, Almansa, Albacete',
    coords: [1729.55, 966.92],
    descripcion: 'Cráneo adulto de sexo indeterminado procedente del osario de Almansa (ss. XIII-XVIII) que presenta una lesión inciso-contusa en el asterión derecho. El orificio de ~20 mm con bordes angulosos y afilados, sin remodelación ósea, y un fragmento óseo desplazado al interior del cráneo permiten diagnosticar un traumatismo perimortem.',
    imagen: '/prueba-museo/assets/img/asterion/asterion-lateral.png',
    ficha: '/prueba-museo/ficha-estandar.html?id=ALM-ASTER-01',
    modelo3d: './assets/models/asterion-web.glb',

    cronologia: 's. XII-XVIII',
    edad: 'Adulta',
    conservacion: null,

    diagnostico_principal: 'Traumatismo craneal directo de tipo inciso-contuso en el asterión derecho. La lesión perimortem presenta bordes afilados y angulosos (componente inciso), patrón de fractura con línea que asciende al parietal derecho (componente contuso) y fragmento óseo desplazado al interior craneal, sin signos de remodelación que evidencien supervivencia posterior.',

    relevancia: 'Esta pieza destaca por una <strong>lesión de tipo inciso-contuso</strong> localizada en el asterión derecho, con un patrón de fractura lineal y desprendimiento de un fragmento óseo hacia el interior de la cavidad craneal, lo que constituye una prueba sólida de su carácter perimortem<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>. Es fundamental la correcta diferenciación de estas lesiones frente a pseudopatologías por su similitud, ya que permite reconstruir aspectos sobre la morbilidad y el comportamiento humano en poblaciones históricas.',

    contexto_arqueologico: [
      'El conjunto de restos óseos, datado entre los siglos XII y XVIII, fue descubierto en 2008 durante la demolición de una vivienda en el casco histórico de la ciudad de Almansa<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. El solar reveló restos humanos vinculados a la antigua iglesia de Santa María de la Soledad, el templo medieval más documentado en Almansa<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>.',
      'Se considera un depósito secundario ya que los restos se hallaron sin conexión anatómica y en gran acumulación<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. Su formación probablemente corresponda a las <em>mondas</em>, procesos en los que se vaciaban las sepulturas de las iglesias para liberar suelo sagrado y reutilizarlo, trasladando los cuerpos a criptas o grandes osarios. Aunque no está confirmado, este traslado masivo podría estar relacionado con hambrunas, epidemias o eventos bélicos como la Batalla de Almansa (1707)<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>.',
      'El estudio se realizó sobre una muestra de 50 conjuntos (de un total de 200), identificando 14.100 restos postcraneales y estimando un Número Mínimo de Individuos (NMI) de 159.',
    ],

    descripcion_osteologica: [
      'Esta pieza corresponde a un cráneo de un individuo adulto con buen estado de conservación<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>. Por su procedencia de un osario, no ha sido posible determinar el sexo ni la edad precisa del sujeto<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>.',
      'La pieza muestra una pérdida de continuidad ósea en la región del asterión derecho. El impacto generó un orificio de aproximadamente 20 mm de anchura<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>, caracterizado por contornos angulosos y bordes afilados que no muestran signos biológicos de remodelación o formación de callo óseo<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>. A partir de esta lesión se desarrolla una línea de fractura que asciende por el hueso parietal derecho hasta alcanzar la sutura sagital.',
      'En el interior del cráneo se localizó un fragmento óseo plano de 43,8 × 43,55 mm que conserva parte de la lámina externa original<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(2)">²</a>. Su morfología coincide con el orificio del asterión, confirmando que es material óseo desplazado hacia el interior por el impacto. Su permanencia en el interior craneal indica que, tras el impacto, debió quedar retenido por el tejido blando hasta su descomposición.',
    ],

    hallazgos: [
      {
        titulo: 'Traumatismo craneal directo de tipo inciso-contuso — Diagnóstico principal',
        items: [
          { texto: 'Los bordes afilados y angulosos del orificio sugieren un objeto con capacidad de corte (componente inciso), mientras que el patrón de fractura y el desprendimiento interior indican aplicación de fuerza considerable (componente contuso). La lesión se determina perimortem por la elasticidad del hueso al fracturarse y la ausencia de signos de remodelación, indicando que no hubo cicatrización en vida.' }
        ]
      },
      {
        titulo: 'Lesiones antemortem — Descartadas',
        items: [
          { texto: 'Se descartan por la ausencia de procesos de reparación ósea. Cualquier lesión sufrida en vida habría dejado señales de remodelado, formación de callo o reacción perióstica que no se observan en esta pieza.' }
        ]
      },
      {
        titulo: 'Pseudopatologías / Alteraciones postmortem — Descartadas',
        items: [
          { texto: 'Las fracturas postmortem en hueso seco suelen ser irregulares con bordes frescos o patinados uniformes y no conservan fragmentos en posición anatómica ni en el interior del cráneo, como ocurre en este caso.' }
        ]
      },
      {
        titulo: 'Trepanación — Descartada',
        items: [
          { texto: 'Aunque la ubicación y el tamaño de la lesión podrían recordar a una intervención quirúrgica intencionada, la existencia de una fractura lineal que se extiende hasta la sutura sagital y el desprendimiento óseo interior invalidan esta interpretación.', refs: [2] }
        ]
      }
    ],

    referencias: [
      {
        id: 1,
        autores: 'Aguilar Lazagabaster I.',
        anio: '2011',
        titulo: 'El conocimiento de las poblaciones del pasado a través de los restos óseos: estudio del osario de la iglesia de Santa María de la Soledad, Almansa (Albacete, s.XIII–XVIII). Creación de un catálogo digital mediante una base de datos relacional en red',
        editorial: 'Proyecto Fin de Carrera. Madrid: Facultad de Ciencias, Universidad Autónoma de Madrid; 2011'
      },
      {
        id: 2,
        autores: 'Lanseros M, Nacarino Meneses C, García Gil O, Aguilar Lazagabaster I, Pérez Pachón L.',
        anio: '2013',
        titulo: 'Un caso de traumatismo craneal perteneciente a una colección de Almansa (Albacete)',
        editorial: 'En: Malgosa A, Isidro A, Ibáñez-Gimeno P, Prats-Muñoz G, editores. Vetera corpora morbo afflicta. Actas del XI Congreso Nacional de Paleopatología; 2011 sep; Andorra la Vella. Madrid: Sociedad Española de Paleopatología; 2013. p. 389-94'
      }
    ],

    imagenes: [
      { src: '/prueba-museo/assets/img/asterion/asterion-lateral.png', caption: 'Figura 1. Vista lateral del cráneo con la lesión en el asterión derecho.' },
      { src: '/prueba-museo/assets/img/asterion/asterion-detalle.png', caption: 'Figura 2. A. Detalle del fragmento óseo encontrado en el interior craneal. B. Detalle de la fractura en el asterión.' }
    ],

    layoutMode: 'default'
  },

  /* ══════════════════════════════════════════
     ARQUEAMIENTO FEMORAL BILATERAL
     layout: comparison · dos visores en paralelo
  ══════════════════════════════════════════ */
  {
    id: 'ALM-FEM-BIL-01',
    nombre: 'Deformidad bilateral de fémures',
    region: 'miembro-inferior',
    patologia: 'estudio',
    sexo: 'indeterminado',
    epoca: 'moderno',
    yacimiento: 'Osario de Santa María de la Soledad, Almansa, Albacete',
    coords: [1729.55, 966.92],
    descripcion: 'Dos fémures completos procedentes del osario de Almansa (ss. XIII–XVIII) que presentan una alteración morfológica en el eje longitudinal de la diáfisis. La deformidad, más pronunciada en uno de los elementos, afecta a gran parte del cuerpo femoral sin evidencia de fractura consolidada ni callo óseo.',
    imagen: null,
    ficha: '/prueba-museo/ficha-estandar.html?id=ALM-FEM-BIL-01',
    modelo3d: null,

    cronologia: null,
    edad: null,
    conservacion: null,
    diagnostico_principal: null,
    relevancia: null,
    contexto_arqueologico: null,

    descripcion_osteologica: [
      'Se conservan dos fémures completos que presentan una alteración morfológica en el eje longitudinal de la diáfisis. La deformidad es más evidente en una de las piezas del conjunto, donde se observa una curvatura más pronunciada que afecta a gran parte del cuerpo femoral.',
      'No se aprecian signos claros de fractura consolidada con formación de callo óseo. Las superficies articulares tanto distal como proximal se conservan bien definidas aunque la alteración modifique la alineación anatómica normal del hueso.'
    ],

    hallazgos: null,
    referencias: null,
    imagenes: null,

    layoutMode: 'comparison',
    modelos_comparacion: [
      {
        src: './assets/models/femur-a.glb',
        titulo: 'Fémur A',
        badge: 'Elemento A'
      },
      {
        src: './assets/models/femur-b.glb',
        titulo: 'Fémur B',
        badge: 'Elemento B'
      }
    ]
  },

  /* ══════════════════════════════════════════
     CONJUNTO VERTEBRAL CON OSIFICACIÓN DEL LIGAMENTO AMARILLO (DISH)
     layout: progression · tres visores con grados de severidad
  ══════════════════════════════════════════ */
  {
    id: 'ALM-VERT-DISH-01',
    nombre: 'Conjunto vertebral con osificación del ligamento amarillo',
    region: 'columna',
    patologia: 'degenerativa',
    sexo: 'indeterminado',
    epoca: 'moderno',
    yacimiento: 'Osario de Santa María de la Soledad, Almansa, Albacete',
    coords: [1729.55, 966.92],
    descripcion: 'Tres conjuntos vertebrales de un individuo adulto procedentes del osario de Almansa (ss. XII–XVIII). Presentan osificación del ligamento amarillo con puentes óseos entre elementos vertebrales adyacentes en distintos grados de severidad, compatibles con Hiperostosis Idiopática Difusa (DISH).',
    imagen: null,
    ficha: '/prueba-museo/ficha-estandar.html?id=ALM-VERT-DISH-01',
    modelo3d: null,

    cronologia: 's. XII–XVIII',
    edad: 'Adulta',
    conservacion: null,

    diagnostico_principal: 'Hiperostosis idiopática difusa (DISH). Osificación del ligamento amarillo con puentes óseos longitudinales entre vértebras adyacentes, rebordes óseos en los cuerpos vertebrales y ausencia de anquilosis.',

    relevancia: 'Esta pieza es un ejemplo de osificación ligamentosa asociada a hiperostosis esquelética idiopática difusa (DISH) en distintos grados. Esta patología permite estudiar procesos degenerativos que afectan a la movilidad de la columna vertebral y está normalmente asociada a individuos adultos de edad avanzada.',

    contexto_arqueologico: [
      'El conjunto de restos óseos, datado entre los siglos XIII y XVIII, fue descubierto en 2008 durante la demolición de una vivienda en el casco histórico de la ciudad de Almansa<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. El solar reveló restos humanos vinculados a la antigua iglesia de Santa María de la Soledad, el templo medieval más documentado en Almansa<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>.',
      'Se considera un depósito secundario ya que los restos se hallaron sin conexión anatómica y en gran acumulación<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. Su formación probablemente corresponda a las <em>mondas</em>, procesos en los que se vaciaban las sepulturas de las iglesias para liberar suelo sagrado y reutilizarlo, trasladando los cuerpos a criptas o grandes osarios<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>. Aunque no está confirmado, este traslado masivo podría estar relacionado con hambrunas, epidemias o eventos bélicos como la Batalla de Almansa (1707)<a class="fe-ref-link" href="javascript:void(0)" onclick="scrollToRef(1)">¹</a>.',
      'El estudio se realizó sobre una muestra de 50 conjuntos (de un total de 200), identificando 14 100 restos postcraneales y estimando un Número Mínimo de Individuos (NMI) de 159.'
    ],

    descripcion_osteologica: [
      'La pieza está formada por tres conjuntos vertebrales pertenecientes a un individuo adulto. En la cara lateral derecha de las vértebras se observa una osificación del ligamento amarillo que genera puentes óseos entre elementos vertebrales adyacentes. Además, los cuerpos vertebrales presentan rebordes óseos marginales compatibles con procesos de neoformación ósea.',
      'Los puentes óseos están dispuestos longitudinalmente siguiendo la dirección del ligamento afectado. No se identifican signos de anquilosis.'
    ],

    hallazgos: [
      {
        titulo: 'Espondilitis anquilosante — Menos probable',
        items: [
          { texto: 'Esta enfermedad puede producir puentes óseos vertebrales y disminución de la movilidad de la columna. No obstante, en la pieza no se han observado signos de anquilosis ni el patrón de fusión continua normalmente asociado a esta patología.' }
        ]
      },
      {
        titulo: 'Osteoartrosis de la columna — Diagnóstico diferencial',
        items: [
          { texto: 'La formación de osteofitos en los márgenes de los cuerpos vertebrales es característica tanto de la osteoartrosis como de la DISH. Sin embargo, la fusión completa de estos osteofitos, la distribución longitudinal y la ausencia de pinzamiento discal significativo son mucho más típicos de la DISH.' }
        ]
      }
    ],

    referencias: [
      {
        id: 1,
        autores: 'Aguilar Lazagabaster I.',
        anio: '2011',
        titulo: 'El conocimiento de las poblaciones del pasado a través de los restos óseos: estudio del osario de la iglesia de Santa María de la Soledad, Almansa (Albacete, s.XIII – XVIII). Creación de un catálogo digital mediante una base de datos relacional en red',
        editorial: 'Proyecto Fin de Carrera. Madrid: Facultad de Ciencias, Universidad Autónoma de Madrid; 2011'
      }
    ],

    imagenes: null,

    layoutMode: 'progression',
    modelos_progresion: [
      {
        titulo: 'Conjunto 1',
        badge:       'Leve',
        badge_color: 'leve',
        geometria:   './assets/models/vertebra1-web-blue.glb',
        textura:     './assets/models/vertebra1-web.glb'
      },
      {
        titulo: 'Conjunto 2',
        badge:       'Moderado',
        badge_color: 'moderado',
        geometria:   './assets/models/vertebra2-web-blue.glb',
        textura:     './assets/models/vertebra2-web.glb'
      },
      {
        titulo: 'Conjunto 3',
        badge:       'Severo',
        badge_color: 'severo',
        geometria:   './assets/models/vertebra3-web-blue.glb',
        textura:     './assets/models/vertebra3-web.glb'
      }
    ]
  },

  /* ══════════════════════════════════════════
     PELVIS CON ANQUILOSIS
  ══════════════════════════════════════════ */
  {
    id: 'ALM-PELV-ANQ-01',
    nombre: 'Pelvis con anquilosis',
    region: 'miembro-inferior',
    patologia: 'degenerativa',
    sexo: 'indeterminado',
    epoca: 'moderno',
    yacimiento: null,
    coords: null,
    descripcion: null,
    imagen: null,
    ficha: '/prueba-museo/ficha-estandar.html?id=ALM-PELV-ANQ-01',
    modelo3d: './assets/models/pelvis-web.glb',

    cronologia: null,
    edad: null,
    conservacion: null,
    diagnostico_principal: null,
    relevancia: null,
    contexto_arqueologico: null,
    descripcion_osteologica: null,
    hallazgos: null,
    referencias: null,
    imagenes: null,

    layoutMode: 'default'
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
    trauma:       { label:'Traumatismos',                                   icon:'⚡',  color:'#FF4D6D' },
    infecciosa:   { label:'Enfermedades Infecciosas',                       icon:'🦠',  color:'#00B8CC' },
    congenita:    { label:'Alteraciones Congénitas y del Desarrollo',       icon:'🧬',  color:'#AA0060' },
    degenerativa: { label:'Artropatías y Enfermedades Degenerativas',       icon:'⚙️', color:'#FFB300' },
    metabolica:   { label:'Alteraciones Metabólicas y Marcadores de Estrés', icon:'🔬', color:'#C6E800' },
    tumor:        { label:'Tumores y Proliferaciones Óseas',                icon:'🔴',  color:'#CC4400' },
    estudio:      { label:'Patologías en Estudio',                          icon:'🔍',  color:'#7B00CC' },
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
    contextoPaleopatologico: "Por su desarrollo y vascularización, las epífisis muestran indicadores patológicos específicos: - Barrera cartilaginosa: Durante el crecimiento, el cartílago aísla la epífisis y realiza función protectora frenando el avance de infecciones como la osteomielitis o tumores destructivos originados en el resto del hueso. - Tumores exclusivos: A pesar de su protección es la región preferente de algunos tumores como el condroblastoma (tumor benigno) o el tumor de células gigantes. - Necrosis aséptica: Esta región es muy sensible a cortes de riego sanguíneo por traumas o estrés. Esto causa necrosis localizada en el hueso sin infección, provocando desprendimientos o colapsos en la articulación (como la osteocondritis disecante) que derivan en artrosis. - Marcador de escorbuto: Ante un déficit de vitamina C en la infancia, el borde de la epífisis reacciona creando una capa de cartílago denso. En radiografías esto se detecta como una línea blanca llamada \"anillo de Wimberger\"."
  },
  {
    termino: "Diáfisis",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.f. Cuerpo o tallo de un hueso largo, desarrollado a partir de un centro de osificación primario y comprendido entre sus extremos o epífisis."
    ],
    sinonimos: ["tallo óseo"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: "La diáfisis es una de las regiones más estudiadas del esqueleto por su gruesa corteza compacta con registro de infecciones, trastornos circulatorios y estrés: - Osteomielitis: Cuando la infección destruye el hueso desde dentro, un segmento de la diáfisis muere formando el secuestro y el cuerpo intenta aislarlo rodeándolo con una gruesa capa de hueso nuevo llamado involucro. - Sífilis: La periostitis crónica hace que se depositen gruesas capas de tejido nuevo. En la tibia, esto deforma y curva la diáfisis hacia delante. - Osteoartropatía hipertrófica: Problemas pulmonares graves o cánceres pueden provocar una reacción en todo el cuerpo que deposita una costra de hueso rugoso simétrico en la zona media de las diáfisis de las piernas y brazos."
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
    contextoPaleopatologico: "Al ser la zona de mayor actividad de formación y remodelado óseo durante el crecimiento, la metáfisis es una región central de numerosas lesiones: - Infecciones: En niños y adolescentes, casi todas las infecciones transmitidas por sangre comienzan en la metáfisis por su gran vascularización. Desde aquí, el pus perfora la corteza y se expande bajo el periostio. - Raquitismo y Escorbuto: Por deficiencias nutricionales, la metáfisis altera su forma. En el raquitismo, la incapacidad de mineralizar el hueso nuevo hace que la metáfisis se ensanche y deforme adoptando una forma de cáliz. En el escorbuto severo, la metáfisis se vuelve tan frágil que el hueso colapsa, dislocando la articulación. - Tumores y Displasias: Por su ritmo de multiplicación celular durante el crecimiento, la metáfisis es un lugar común de origen de tumores óseos malignos (osteosarcoma o condrosarcoma) y benignos (osteocondromas). Además, fallos genéticos en su desarrollo (displasia metafisiaria o enfermedad de Pyle) pueden impedir su estrechamiento normal, dejando una deformidad permanente."
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
    contextoPaleopatologico: "En la investigación paleopatológica, el análisis de las apófisis tiene una triple relevancia para investigadores: 1. Indicador de desarrollo y madurez Las apófisis son centros de crecimiento secundario y se terminan fusionando con el hueso principal a edades específicas por lo que observar si una apófisis está abierta o soldada permite calcular con precisión la edad de muerte en niños y adolescentes. 2. Huellas de estrés mecánico Son zonas de anclaje que soportan mucha tensión mecánica. Un desarrollo muy marcado o presencia de microtraumatismos revela que el individuo estuvo sometido a exigencia física o estrés biomecánico durante el crecimiento. 3. Diagnóstico diferencial de tumores Localizar una lesión en una apófisis es un marcador para identificar patologías específicas en el hueso. Por ejemplo, el condroblastoma (tumor óseo benigno poco frecuente) es el único tumor óseo que siempre surge y a menudo se limita solo a una epífisis o una apófisis, lo cual es muy relevante para el diagnóstico paleopatológico."
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
    contextoPaleopatologico: "Estas regiones son buenos indicadores ya que aquí el hueso es mucho más plástico y responde a estímulos de la vida diaria como: - Entesopatías: El uso intenso y repetitivo de un músculo a lo largo del tiempo genera microtraumatismos constantes en la entesis. El hueso responde a esta tensión creando proyecciones óseas denominadas entesopatías o entesofitos. Esto permite reconstruir patrones de actividad física. - Enfermedades Sistémicas: Ayuda a identificar espondiloartropatías y diferenciarlas de otras afecciones como la artritis reumatoide por la creación descontrolada de tejido en esta zona que pueden generar anquilosis."
  },
  {
    termino: "Foramen Nutricio",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.m. Pequeño orificio situado en la superficie de los huesos a través del cual pasan los vasos sanguíneos que nutren el tejido óseo. Estos vasos, conocidos como arterias nutricias, penetran en el hueso compacto para suministrar nutrientes y oxígeno a la médula ósea y al propio hueso."
    ],
    sinonimos: ["agujero nutricio", "canal nutricio"],
    obs: "",
    fuentes: [
      { nombre: "IMAIOS", url: "https://www.imaios.com/" }
    ],
    contextoPaleopatologico: "Es un elemento relevante en el diagnóstico de enfermedades destructivas relacionadas al riego sanguíneo dentro del hueso: - Diseminación hematógena: Además de nutrientes, el foramen nutricio es la principal vía de entrada física para agentes infecciosos (como estafilococos o estreptococos) que viajan por el torrente sanguíneo. Al ingresar a través de las arterias nutricias, estas bacterias logran invadir la médula y las metáfisis, provocando el inicio de infecciones severas como la osteomielitis hematógena. - Necrosis isquémica: Las arterias y vasos que entran por el foramen nutricio tienen paredes muy finas y discurren por un compartimento óseo rígido y totalmente inextensible. Si una infección genera acumulación de pus en el interior del hueso, la presión interna aumenta dramáticamente, comprimiendo y colapsando los vasos nutricios. Al perder su suministro de sangre por compresión vascular, el tejido óseo necrosa, dando lugar a un secuestro."
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
    contextoPaleopatologico: "Debido a su importante vascularización, el periostio es un tejido responsable de muchas lesiones óseas observadas en restos arqueológicos ya que cualquier estímulo que genera inflamación o irritación puede activar los osteoblastos para depositar nuevo hueso sobre la superficie cortical original. Esto se manifiesta como periostitis, que no es una enfermedad en sí misma, sino un indicador inespecífico de una respuesta patológica."
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
    contextoPaleopatologico: "Al igual que el periostio, el endostio es una membrana viva y activa cuyas células dejan un registro en los huesos. El comportamiento de esta membrana interna revela dos procesos opuestos: - Osteoporosis: Con el envejecimiento o ante problemas metabólicos, los osteoclastos del endostio comienzan a reabsorber mucho más hueso del que se produce. Como resultado, la cavidad medular se ensancha eliminando capa cortical dura desde dentro, lo que vuelve al hueso más frágil. - Endostosis: Cuando el cuerpo sufre una infección profunda o crónica, los osteoblastos depositan capas de hueso nuevo sobre la superficie interna de la cavidad medular. Este proceso es la endostosis. En restos gravemente afectados, se observa que esta reacción llega a bloquear por completo el canal medular hueco, rellenándolo de hueso esclerótico."
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
    contextoPaleopatologico: "Esta capa cortical es un archivo de vida y enfermedades de los individuos, especialmente de dos procesos: - Osteopenia y Osteoporosis: La renovación en esta capa es mucho más lenta que en el tejido esponjoso interior, por lo que tarda más en mostrar los efectos del envejecimiento. Con la edad o malnutrición, el cuerpo va reabsorbiendo esta capa cortical desde su interior (ensanchando la cavidad medular hueca) y sus canales vasculares se agrandan. Como resultado, con el paso del tiempo este hueso se vuelve más frágil y con aspecto poroso. - Mineralización: Como el hueso compacto está completamente mineralizado, denso y duro, no tiene espacio para alojar tejido nuevo en su interior. Cuando el cuerpo sufre una infección severa (como osteomielitis o sífilis) o un trauma crónico, la defensa del hueso es depositar capas nuevas de hueso sobre su superficie original. Por ello, un hueso cortical anormalmente engrosado o deformado externamente es la pista de que el individuo sufrió y resistió un proceso inflamatorio o infeccioso prolongado."
  },
  {
    termino: "Hueso Trabecular o Esponjoso",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.m. Tejido óseo formado por una trama tridimensional de trabéculas óseas que delimita espacios ocupados por la médula ósea."
    ],
    sinonimos: ["hueso trabecular", "tejido esponjoso", "tejido trabecular"],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: "Como alberga la médula ósea, el hueso esponjoso tiene una tasa de remodelado entre 5 y 10 veces más rápida que el compacto, lo que lo convierte en el primer tejido en registrar desequilibrios metabólicos y sistémicos: - Osteoporosis y Osteomalacia: Por su alta actividad fisiológica, los tejidos ricos en hueso esponjoso (vértebras, costillas o pelvis) son los más afectados por osteoporosis. - Tuberculosis: Por contener la médula roja hematopoyética (muy vascularizada), el tejido esponjoso es el establecimiento principal de bacterias con diseminación hematógena. En enfermedades como la tuberculosis, el bacilo anida en estas áreas destruyendo la trama de trabéculas y generando cavidades líticas. - Anemias Crónicas: Ante anemias severas, el cuerpo necesita producir más glóbulos rojos y la médula de los espacios trabeculares se hipertrofia. En el cráneo, esta expansión del tejido esponjoso reduce el número de trabéculas y las reorganiza de forma radial, empujando y destruyendo la capa cortical exterior."
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
    contextoPaleopatologico: "Los cóndilos de las rodillas (formados por los del fémur y la tibia) son estructuras sometidas a gran carga mecánica y de peso, por lo que son grandes indicadores de estrés físico y diversas enfermedades: - Artrosis: Los cóndilos sufren gran desgaste por lo que en casos de artrosis severa, la pérdida de cartílago provoca que el hueso roce directamente. En articulaciones bisagra como la rodilla o el codo, esta fricción genera eburnación con surcos paralelos a la dirección del movimiento. - Osteocondritis disecante: Por traumatismos repetidos o problemas vasculares, un pequeño fragmento de hueso y cartílago en la superficie del cóndilo necrosa y se desprende hacia el interior de la articulación. Esto en un yacimiento deja una depresión o cráter en la superficie lisa del cóndilo. - Condroblastoma: Existe un tumor benigno óseo, el condroblastoma, que tiene la peculiaridad de que casi siempre surge y se confina a las epífisis o apófisis que en muchos casos coincide con los cóndilos."
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
    contextoPaleopatologico: "Este tipo de estructuras sirve como marcador de la relación entre el sistema musculoesquelético y el entorno: - Marcadores de Actividad (Entesis): Las tuberosidades son sitios de inserción para músculos y ligamentos. El tamaño y rugosidad de estas protuberancias dependen de la ley de Wolff (el hueso se fortalece y se remodela allí donde hay mayor tracción mecánica). Por lo tanto, el análisis de tuberosidades permite reconstruir patrones de actividad física o trabajos repetitivos. - Entesopatías: Cuando una tuberosidad presenta además entesofitos o una porosidad inusual puede indicar una entesopatía. Esto ocurre cuando el estrés mecánico excesivo o procesos inflamatorios crónicos desequilibran la acción de células óseas, provocando que el hueso crezca de forma irregular en el punto de inserción. Es importante la distinción entre una tuberosidad prominente normal (por uso intenso) y una alterada por enfermedades sistémicas."
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
    contextoPaleopatologico: "El tubérculo como estructura anatómica sirve como punto de anclaje para músculos y ligamentos. Su desarrollo refleja uso muscular continuo en vida. En el contexto de enfermedades, el tubérculo es la unidad biológica fundamental de la tuberculosis. Este sirve para encerrar a las bacterias y está compuesto por células especializadas que rodean un centro de necrosis caseosa. Si el sistema inmunitario no logra contener la infección en los pulmones, las bacterias viajan por la sangre y forman nuevos tubérculos en el tejido óseo, especialmente en áreas con médula roja como las vértebras. Ya extendida produce una destrucción localizada (caries ósea) con muy poca reacción defensiva (rasgo característico para el diagnóstico de tuberculosis)."
  },
  {
    termino: "Cresta ósea",
    categoria: "ANATOMÍA",
    acepciones: [
      "loc. nom. Prominencia, reborde o elevación lineal presente en la superficie o márgenes de un hueso, cuya función principal es servir como área de inserción de músculos, tendones o ligamentos. Un ejemplo característico es la cresta ilíaca."
    ],
    sinonimos: ["reborde óseo", "prominencia de inserción"],
    obs: "",
    fuentes: [
      { nombre: "Ortner & Turner-Walker (2003)", url: "" }
    ],
    contextoPaleopatologico: "Al ser zonas de anclaje de músculos y ligamentos, soportan gran tensión mecánica. Un uso intensivo de un músculo a lo largo del tiempo genera microtraumatismos en la cresta. Para compensarlo, el cuerpo desarrolla proyecciones óseas anormales o hipertróficas llamadas entesopatías, las cuales permiten deducir que la persona estuvo sometida a exigencia física. Además, las crestas óseas son centros de osificación y crecimiento que se fusionan al resto del hueso a edades específicas. Por ejemplo, en la pelvis, los centros de crecimiento de la cresta ilíaca son de los últimos en fusionarse por completo, alrededor de los 25 años de edad. Observar la fusión de estas crestas es muy útil para estimar la fecha de muerte en adultos jóvenes."
  },
  {
    termino: "Fosa",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.f. Excavación, cavidad, hueco, depresión o área hundida en una estructura anatómica."
    ],
    sinonimos: ["cavidad", "depresión"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: "Las fosas óseas, especialmente aquellas que forman parte de articulaciones, son indicadores para evaluar procesos degenerativos y mecánicos: - Relleno por artrosis severa: En articulaciones de bisagra como el codo, la artrosis avanzada no solo erosiona el cartílago, sino que provoca la formación de hueso hipertrófico que llega a rellenar de forma parcial o total fosas. Este relleno permite deducir una limitación de movimiento de flexión y extensión del individuo en vida. - Porosidad por estrés articular: Las superficies de las fosas articulares son susceptibles a desgaste mecánico, mostrando lesiones porótias y erosión en las áreas donde hay mayor presión. - Espacio de invasión tumoral: Las fosas del cráneo pueden verse alteradas por procesos neoplásicos. Algunos tumores benignos del tejido óseo denso (osteomas) pueden crecer y proyectarse ocupando el espacio de cavidades como los senos paranasales o la fosa craneal anterior."
  },
  {
    termino: "Surco",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.m. Depresión lineal o hendidura en la superficie del hueso."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: "El análisis de un surco en paleopatología se centra en la patogénesis (el origen que lo generó): - Dinámica Celular: La formación o alteración de un surco es el resultado de la perturbación entre osteoclastos y osteoblastos. - Diagnóstico Cronológico: Para determinar que ha sido un proceso antemortem se establece que los surcos deben tener bordes suaves, redondeados o lisos indicando remodelación ósea. Por el contrario, para lesiones postmortem los bordes deben ser afilados, irregulares o dentados evidenciando su formación por factores del entorno y confirmando ser una pseudopatología. - Patologías: En el cráneo, la alteración de surcos que alojan vasos sanguíneos puede indicar irritaciones crónicas o enfermedades como la anemia y el escorbuto. Además, los surcos también pueden formarse por la presión constante de crecimientos lentos (quistes o tumores), obligando su remodelación."
  },
  {
    termino: "Escotadura",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.f. Incisura, hendidura o depresión, generalmente en el borde de un hueso u órgano."
    ],
    sinonimos: [],
    obs: "En anatomía osteológica se usa indistintamente escotadura e incisura para referirse a los mismos accidentes óseos.",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: "Estas estructuras articulares no suelen ser focos primarios de enfermedad sino herramientas para conocer la demografía del individuo. Para determinar el sexo del individuo (característica esencial para diagnosticar patologías específicas), las variaciones en la pelvis aportan la información más fiable. Por adaptaciones en el canal del parto, la escotadura ciática mayor adopta un ángulo mucho más amplio y abierto en las mujeres mientras que en hombres es más cerrada."
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
    contextoPaleopatologico: "Estos son elementos clave para el diagnóstico diferencial de patologías de la columna vertebral: - Desgaste y artrosis: En el hueso seco, la artrosis de estas facetas se identifica por la aparición de porosidad, pulido por fricción intensa (eburnación) y, especialmente, por el desarrollo de rebordes óseos patológicos (labiación o formación de osteofitos marginales). - Fusión y Enfermedades Autoinmunes: El estado de las carillas articulares es la pista para diferenciar enfermedades que fusionan la columna. En la espondilitis anquilosante (enfermedad autoinmune grave), la inflamación crónica destruye el cartílago de las facetas y provoca una anquilosis ósea uniéndose una vértebra con otra a través de sus carillas. En la hiperostosis esquelética idiopática difusa (DISH), aunque los cuerpos vertebrales queden soldados, las carillas articulares permanecen intactas y sin fusionar."
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
    contextoPaleopatologico: "La integridad de los platillos vertebrales es fundamental para el diagnóstico de enfermedades degenerativas e infecciosas de la columna. Como es la zona de contacto entre el cuerpo vertebral y el disco intervertebral, refleja procesos de estrés biomecánico y patológico. Las manifestaciones más comunes son: - Nódulos de Schmorl: Depresiones en el platillo vertebral causadas por herniación del núcleo pulposo a través del cartílago hacia el tejido esponjoso del cuerpo vertebral. - Osteoartritis y Osteofitosis: El desgaste del disco intervertebral provoca una reacción ósea en los márgenes de los platillos provocando la formación de osteofitos. - Infecciones (Tuberculosis/Pott): El platillo vertebral es frecuentemente el sitio inicial de destrucción en la tuberculosis de la columna (Mal de Pott)."
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
    contextoPaleopatologico: "Estas suturas en concreto son las que permiten el crecimiento de la bóveda craneal sincronizado con el desarrollo cerebral en la infancia. El momento de cierre y transformación a hueso sólido de estas suturas es un indicador de salud. Un cierre prematuro puede provocar deformidades y un aumento de la presión intracraneal."
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
    contextoPaleopatologico: "Además de separar cavidades, las trabéculas son muy sensibles a la salud interna del individuo. Se ha visto que las trabéculas se organizan siguiendo las líneas de estrés físico (Ley de Wolff). En una persona sana forman una red suficiente para soportar peso; sin embargo, cuando el cuerpo sufre enfermedades metabólicas, esta red es la primera en ser sacrificada para liberar minerales al torrente sanguíneo. Tienen mucha relación con la osteoporosis. En esta condición las trabéculas se vuelven más delgadas y escasas, aumentando el riesgo de fracturas por compresión, especialmente en la columna vertebral."
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
    contextoPaleopatologico: "Por ser el tejido encargado de la producción de sangre y estar muy vascularizado, la médula ósea es el epicentro de muchas patologías que alteran la estructura del hueso: - Hiperplasia: Ante enfermedades como las anemias crónicas severas (talasemia, anemia falciforme), el cuerpo requiere la producción de más glóbulos rojos y la médula hematopoyética responde expandiéndose. Esta hiperplasia ensancha la cavidad medular y adelgaza las paredes del hueso cortical. En el cráneo, la expansión de la médula empuja y destruye la capa externa, provocando hiperostosis porótica o criba craneal. - Osteomielitis hematógena: Por su vascularización, la médula ósea es la zona donde se alojan bacterias que se transportan por el torrente sanguíneo. Las infecciones profundas comienzan en esta región, generando pus que incrementa la presión interna, destruye el hueso desde dentro y colapsa los vasos, lo que acaba necrosando al tejido óseo subyacente y generando un secuestro. - Tumores y Metástasis: Esta región es el lugar de origen de neoplasias malignas primarias, como la leucemia en la infancia o el mieloma múltiple en adultos. Además, las células de carcinomas de otros órganos que se diseminan por la sangre tienden a colonizar preferentemente las zonas de médula hematopoyética activa, como la columna vertebral, la pelvis o el esternón."
  },
  {
    termino: "Cartílago articular",
    categoria: "ANATOMÍA",
    acepciones: [
      "loc. nom. Capa especializada de cartílago hialino que recubre las superficies de deslizamiento de todas las articulaciones verdaderas. Está compuesto por células y una matriz intercelular organizada en densas capas de fibrillas de colágeno. Se caracteriza por estar pobremente vascularizado, por lo que depende del líquido sinovial para recibir nutrientes y eliminar los metabolitos resultantes de su actividad celular."
    ],
    sinonimos: ["cartílago hialino articular"],
    obs: "",
    fuentes: [
      { nombre: "Ortner & Turner-Walker (2003)", url: "" }
    ],
    contextoPaleopatologico: "Este tejido rara vez se conserva en contextos arqueológicos pero sus alteraciones dejan en el hueso seco marcadores de esfuerzo. Por su escaso riego sanguíneo, cuando este cartílago se desgasta o daña en un adulto, prácticamente no tiene capacidad para repararse a sí mismo. Por ello, cuando el estrés mecánico o enfermedades como la artrosis destruyen este cartílago, los huesos están expuestos y empiezan a rozar entre sí. Esta fricción pule la superficie del hueso (eburnación). Encontrar un hueso pulido es prueba de que el individuo sufría artrosis severa."
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
    contextoPaleopatologico: "A nivel microscópico son un elemento diagnóstico relevante para identificar la naturaleza de ciertas formaciones óseas: - Miositis Osificante: Las zonas de inserción muscular a menudo presentan superficies rugosas o la formación de espolones óseos (exostosis). Mediante microscopía se puede conocer si fueron causadas por estrés físico excesivo o un traumatismo directo (miositis osificante). - Reacciones Meníngeas: En la lámina endocraneal, especialmente en subadultos, se pueden encontrar reacciones meníngeas inflamatorias o hemorrágicas. Estas nuevas capas de hueso son muy ricas en fibras de Sharpey y tienen un aspecto blanquecino y mate."
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
    contextoPaleopatologico: "Estas articulaciones son fundamentales para evaluar el desarrollo biológico y la respuesta al estrés mecánico o patológico, ya que su estado de fusión es un indicador clave de edad y salud. Son interesantes en paleopatología cuando presentan anomalías como una sinostosis prematura. Esta patología consiste en una sinartrosis (específicamente una sutura craneal) que se cierra y convierte en hueso antes de tiempo. Esta condición deforma el cráneo por la presión del cerebro en crecimiento."
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
    contextoPaleopatologico: "Al ser una articulación donde los huesos están unidos por ligamentos o membranas interóseas, cualquier trauma o estrés persistente puede desencadenar una respuesta de formación ósea anormal. Para estas articulaciones destacan los siguientes fenómenos: - Osificación Postraumática: Las lesiones en los ligamentos de la sindesmosis pueden provocar la formación de puentes óseos (sinostosis) entre los dos huesos involucrados. - Reacciones Periósticas: Las infecciones cercanas o traumatismos en zonas de inserción de la membrana interósea pueden estimular la capa interna para depositar hueso reactivo, lo que puede detectarse en los restos óseos."
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
    contextoPaleopatologico: "La sincondrosis es una articulación temporal clave que actúa como un centro de osificación primario. Su relevancia se centra en: - Estimación de la Edad Biológica por su estado de fusión. Muy útil en individuos subadultos. - Marcador de Estrés y Displasias: Las anomalías en el desarrollo de la sincondrosis pueden indicar trastornos metabólicos o genéticos. Por ejemplo, el cierre prematuro de las sincondrosis de la base del cráneo puede provocar deformaciones craneofaciales severas, mientras que su retraso puede estar vinculado a deficiencias nutricionales o enfermedades del crecimiento."
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
    contextoPaleopatologico: "Las suturas son indicadoras del desarrollo porque permiten el crecimiento del cráneo durante la infancia hasta que se cierran mediante sinostosis. El análisis de estas es muy útil para distinguir procesos normales de patologías sistémicas. Ciertas patologías metabólicas o inflamatorias pueden afectar a la integridad de estas uniones, permitiendo identificar carencias nutricionales o respuestas de infecciones crónicas en poblaciones antiguas."
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
    contextoPaleopatologico: "A nivel microscópico, el proceso de remodelado osteonal (renovación) registra fielmente la edad, el estrés metabólico y diversas enfermedades: - Reloj Biológico: A lo largo de la vida, el hueso compacto renueva sus osteonas constantemente. Por ello, son útiles en un recuento histológico que compare osteonas intactas, fragmentos antiguos y canales no remodelados para determinar la edad del individuo. - Osteoporosis: Con el envejecimiento, el ritmo de relleno de los osteoblastos disminuye. El resultado es que las paredes de la osteona se vuelven más delgadas y el canal central de Havers queda agrandado, provocando una mayor fragilidad del hueso compacto. - Enfermedad de Paget: En esta enfermedad que acelera la destrucción y formación ósea, la estructura de la osteona se distorsiona y se vuelve irregular. - Marcadores Tumorales: Las variaciones en la morfología osteonal también ayudan al diagnóstico oncológico en huesos secos."
  },

  {
    termino: "Arco Vertebral",
    categoria: "ANATOMÍA",
    acepciones: [
      "loc. nom. Arco óseo que constituye la porción posterior de la vértebra y cuya cara anterior delimita, en combinación con la cara posterior del cuerpo vertebral, el agujero vertebral. La porción anterior (pedículo vertebral) de cada mitad izquierda y derecha del arco vertebral se une a la cara posterior correspondiente del cuerpo vertebral. La porción posterior (lámina vertebral) de cada mitad del arco vertebral confluye con la otra en la zona central posterior del arco, de la cual nace una apófisis espinosa única. En la cara lateral de cada mitad izquierda y derecha del arco vertebral se originan la apófisis transversa y las apófisis articulares superior e inferior de la vértebra."
    ],
    sinonimos: ["arco neural"],
    obs: "",
    fuentes: [
      { nombre: "Ortner & Putschar (1981)", url: "" }
    ],
    contextoPaleopatologico: "Para investigadores el arco vertebral es importante para identificar dos problemas de espalda muy comunes en el pasado: - Falta de fusión (Espina bífida): Durante el desarrollo las distintas partes de este arco no llegan a unirse por completo. En su forma leve (espina bífida oculta), es una anomalía que dejaba el canal medular expuesto, pero que normalmente no causaba problemas graves al individuo en vida. - Fracturas por Sobreesfuerzo (Espondilólisis): Una parte importante del arco neural se separa del resto de la vértebra por pequeñas fracturas por fatiga o estrés físico constante en la zona baja de la espalda. Esta marca ayuda a descubrir si un grupo humano estaba sometido a exigencia biomecánica."
  },
  {
    termino: "Asterion",
    categoria: "ANATOMÍA",
    acepciones: [
      "s.m. Punto anatómico de referencia en la cara lateral del cráneo, formado por la confluencia de tres huesos: el occipital, el temporal y el parietal. En ese punto convergen también tres suturas: la lambdoidea, la occipitomastoidea y la parietomastoidea. Internamente se relaciona con los senos transverso y sigmoideo y marca el sitio de la fontanela mastoidea cerrada."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "National Library of Medicine", url: "https://www.ncbi.nlm.nih.gov/books/" },
      { nombre: "Ortner & Putschar (1981)", url: "" }
    ],
    contextoPaleopatologico: "Su importancia es triple: - Sirve como referencia en mediciones radiológicas y antropológicas del cráneo. Este tipo de marcas es muy importante para identificar anomalías en el tamaño o forma del hueso, ayudándonos a distinguir entre un desarrollo normal y procesos patológicos. - Es el extremo posterior de la sutura parietotemporal (conexión de los huesos laterales y superiores del cráneo), cuyo extremo anterior es el pterion. - Resulta relevante en cirugía ya que la anatomía sutural del asterion guía los abordajes hacia la fosa posterior del cráneo, protegiendo estructuras vulnerables."
  },
  {
    termino: "Cabeza de la Mandíbula",
    categoria: "ANATOMÍA",
    acepciones: [
      "loc. nom. Eminencia redondeada posterosuperior de la rama mandibular, en el extremo de la apófisis condilar, que se articula con la fosa mandibular del hueso temporal."
    ],
    sinonimos: ["cóndilo mandibular", "cóndilo de la mandíbula"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: "Esta región anatómica destaca principalmente en la identificación de dos tipos de alteraciones: - Desgaste por la masticación (Artrosis): Esta zona soporta un estrés biomecánico constante al masticar. En esta zona la artrosis severa no es tan común como en otras zonas y rara vez desarrolla osteofitos típicos de otras articulaciones. Cuando está afectada se observa una superficie porosa, un pulido anormal por la eburnación y un engrosamiento de la zona. - Acromegalia: El cartílago de la cabeza de la mandíbula es un centro de crecimiento. Si un individuo adulto desarrolla un tumor pituitario que genera exceso de la hormona del crecimiento (acromegalia), el cartílago de este cóndilo se reactiva y vuelve a crecer de forma anormal. En hueso seco se observa un alargamiento de la mandíbula inferior que hace que sobresalga hacia delante (prognatismo severo) y provoca que los dientes superiores e inferiores dejen de encajar."
  },
  {
    termino: "Manubrio Esternal",
    categoria: "ANATOMÍA",
    acepciones: [
      "loc. nom. Porción superior, cuadrangular y robusta del esternón, que se articula con las clavículas y con las dos primeras costillas de cada lado y presenta una escotadura media en su borde craneal, la escotadura yugular."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
    contextoPaleopatologico: "Aunque el esternón en conjunto sufre menos enfermedades que las costillas, el manubrio es la zona que concentra las lesiones cuando estas ocurren, siendo un elemento clave para el diagnóstico diferencial de ciertas patologías destructivas: - Aneurisma aórtico: La porción ascendente del arco de la aorta se sitúa detrás del manubrio esternal. Si el individuo desarrolla un gran aneurisma (dilatación anormal de la arteria, muchas veces de origen sifilítico), la presión constante contra el hueso provoca erosión profunda en la superficie posterior del manubrio. - Tuberculosis: Las infecciones por tuberculosis que alcanzan el esternón también tienen predilección por el manubrio. Esta enfermedad genera lesiones líticas que pueden perforar tanto la corteza anterior como la posterior y, a menudo, se extienden a los lados hasta invadir la articulación esternoclavicular y la porción medial de las clavículas."
  },

  // ── LESIONES ─────────────────────────────────────────────────────────────
  {
    termino: "Osteoclástica",
    categoria: "LESIONES",
    acepciones: [
      "adj. De los osteoclastos o relacionado con ellos.",
      "adj. Aplicado a una lesión ósea: que presenta reabsorción osteoclástica.",
      "adj. Alteración morfológica caracterizada por destrucción localizada o pérdida anormal de tejido óseo, resultante de un aumento en la actividad de los osteoclastos (células responsables de la resorción del hueso) que supera a la formación de los osteoblastos como respuesta a un proceso mórbido o enfermedad."
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
    contextoPaleopatologico: "A nivel microscópico, la evidencia de que existió actividad osteoclástica activa en vida es la identificación de las lagunas de Howship, que son depresiones cóncavas en la superficie del hueso dejadas por la acción de estas células. A nivel macroscópico, una lesión osteoclástica sirve para indicar la velocidad y agresividad de la enfermedad. Si la destrucción fue lenta o se detuvo, el hueso reacciona o aísla la lesión con hueso compacto y denso (reacción esclerótica). Si la enfermedad avanza con mayor velocidad, se observan bordes líticos afilados y definidos, sin tiempo para que se forme un anillo de hueso esclerótico alrededor. Por último, si el proceso fue muy rápido y agresivo no hay márgenes definidos y en su lugar se observa un gradiente de destrucción ósea. Esto sirve para distinguir enfermedades agudas de las crónicas y evaluar el nivel de resistencia o fragilidad del individuo frente a la enfermedad antes de su muerte."
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
    termino: "Secuestro Óseo",
    categoria: "LESIONES",
    acepciones: [
      "loc. nom. Fragmento o porción de tejido óseo necrosado, de formas y tamaños variados, de color blanco nacarado, que conserva su grado de calcificación y puede reabsorberse o revitalizarse como un injerto, o más frecuentemente transformarse en un cuerpo extraño que origina una supuración que tiende a abrirse camino hacia el exterior a través de fístulas dérmicas y que no cesa hasta que se elimina, espontánea o quirúrgicamente, el secuestro. También el periostio que lo rodea sufre una reacción inflamatoria y se forma una especie de cápsula de hueso neoformado, llamado involucro, que aloja el secuestro. En el examen radiográfico, el secuestro presenta mayor densidad que el hueso vecino, que está descalcificado por el proceso hiperémico."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" }
    ],
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
    termino: "Brucelosis",
    categoria: "ENFERMEDADES",
    acepciones: [
      "s.f. Cualquier enfermedad infecciosa causada por brucelas tras el contacto directo con animales infectados, el consumo de sus productos o la inhalación de sus aerosoles. El período de incubación dura entre 2 y 4 semanas, y las manifestaciones clínicas, heterogéneas, se corresponden de ordinario con un síndrome febril sin focalidad aparente. Las infecciones por B. melitensis suelen ser más graves que las producidas por B. abortus y B. suis. Las formas focales son variadas: osteoarticular (la más común), genitourinaria, neurobrucelosis, endocarditis, etc. El término \"brucelosis crónica\" debe reservarse para la enfermedad de más de 6 meses de duración."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" },
      { nombre: "Ortner & Turner-Walker (2003)", url: "" }
    ],
    contextoPaleopatologico: "La brucelosis es una de las enfermedades infecciosas más relevantes en el estudio de poblaciones antiguas practicantes de ganadería. Su análisis se centra en las siguientes características óseas: - Afección Osteoarticular: Es la complicación más frecuente y se manifiesta principalmente en la columna vertebral (espondilitis brucelar), prefiriendo la región lumbar. - Lesiones Vertebrales: A diferencia de la tuberculosis, la brucelosis tiende a ser menos destructiva. Las lesiones suelen ser pequeñas, focales y se localizan en los ángulos anteriores de los cuerpos vertebrales. Un rasgo distintivo es la formación de osteofitos y la curación con esclerosis ósea. Es crucial distinguirla de la tuberculosis vertebral (Mal de Pott). Mientras que la tuberculosis suele causar colapso vertebral severo (cifosis o giba) y grandes abscesos, la brucelosis presenta una destrucción ósea más limitada y una capacidad de formación de hueso reactivo."
  },
  {
    termino: "Cifosis",
    categoria: "ENFERMEDADES",
    acepciones: [
      "s.f. Curvatura normal de convexidad posterior en el plano sagital de las regiones torácica y sacra de la columna vertebral."
    ],
    sinonimos: ["giba", "gibosidad", "cifosis angular"],
    obs: "",
    fuentes: [
      { nombre: "RANME", url: "https://dptm.es/" },
      { nombre: "Ortner & Turner-Walker (2003)", url: "" }
    ],
    contextoPaleopatologico: "La cifosis es un indicador morfológico de diversas condiciones que modifican la integridad estructural de la columna: - Tuberculosis Vertebral (Mal de Pott): Es la causa más conocida de la cifosis severa en restos óseos. La infección destruye la porción anterior de los cuerpos vertebrales, provocando un colapso que resulta en una angulación conocida como giba. - Enfermedad de Paget: En casos avanzados de Paget multióseos, la columna puede mostrar cifoescoliosis por fracturas de compresión causadas por la debilidad del hueso remodelado por la patología. - Fracturas por Compresión: La cifosis también puede ser resultado de traumas u osteoporosis, donde las vértebras pierden densidad trabecular y colapsan bajo el peso del cuerpo, alterando la alineación sagital."
  },
  {
    termino: "Craneosinostosis",
    categoria: "ENFERMEDADES",
    acepciones: [
      "s.f. Cierre prematuro de las suturas craneales. Existen varios tipos: escafocefalia, braquicefalia, trigonocefalia, plagiocefalia, acrocefalia y otras."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Escafocefalia",
    categoria: "ENFERMEDADES",
    acepciones: [
      "s.f. Configuración anómala del cráneo consistente en un alargamiento de su diámetro anteroposterior y estrechamiento del transversal, asociados a grandes abombamientos frontal y occipital. Está producida por una sinostosis precoz de la sutura sagital."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Hiperostosis Idiopática Difusa",
    categoria: "ENFERMEDADES",
    acepciones: [
      "loc. nom. Enfermedad hiperostótica del aparato locomotor, de carácter no inflamatorio, caracterizada por la osificación del ligamento longitudinal anterior vertebral y de las inserciones de tendones y cápsulas en la cara anterolateral de los cuerpos vertebrales. Se manifiesta principalmente por la formación de masas óseas en al menos cuatro vértebras contiguas, comúnmente en la región dorsal o cervical, sin afectar el espacio intervertebral ni las articulaciones sacroilíacas. Puede provocar síntomas mecánicos como disfagia o, raramente, compromiso respiratorio debido a la protrusión de las masas óseas en la faringe."
    ],
    sinonimos: ["enfermedad de Forestier-Rotes Querol", "hiperostosis anquilosante senil de la columna vertebral"],
    obs: "",
    fuentes: [
      { nombre: "Sánchez González et al. (2006)", url: "" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Mal de Pott",
    categoria: "ENFERMEDADES",
    acepciones: [
      "loc. nom. Infección tuberculosa de la columna vertebral por la llegada por vía hematógena de Mycobacterium tuberculosis, procedente de otro foco tuberculoso (generalmente pulmonar), al cuerpo vertebral, con posterior afectación del disco intervertebral y frecuente formación de abscesos osifluentes, que a veces emigran a gran distancia del foco siguiendo los caminos de menor resistencia. Se localiza con más frecuencia en las últimas vértebras torácicas y en las primeras lumbares. Cursa con dolor, rigidez muscular y limitación de movimientos; más adelante, la destrucción vertebral puede originar una angulación de la columna vertebral (cifosis, escoliosis, cifoescoliosis)."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Patognomónico, -ca",
    categoria: "ENFERMEDADES",
    acepciones: [
      "adj. Aplicado a un signo o un síntoma: característico y específico de una enfermedad determinada, suficiente por sí solo para identificarla y diagnosticarla."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Sarcoidosis",
    categoria: "ENFERMEDADES",
    acepciones: [
      "s.f. Enfermedad multisistémica de causa desconocida, caracterizada por la presencia de granulomas no caseificantes en los órganos afectados: pulmón, ganglios linfáticos, sistema nervioso, piel, glándulas exocrinas y endocrinas, globo ocular, músculo esquelético, corazón, vasos, tubo digestivo, riñón, sistema reticuloendotelial, etc. En los niños se manifiesta particularmente por fatiga, anorexia, pérdida de peso, dolores óseos, anemia, exantema eritematoso maculopapuloso, uveítis y artritis. No hay un test específico para el diagnóstico; la biopsia de los tejidos afectados mostrará lesiones granulomatosas y, para afirmar el diagnóstico, se deben excluir otras causas conocidas de enfermedades granulomatosas."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
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
    contextoPaleopatologico: "Esta es la condición patológica más frecuente encontrada en restos arqueológicos. Su análisis se basa en tres variables: - Eburnación (Pulido): Es el rasgo patognomónico de la artrosis severa en restos óseos. El cartílago desaparece por completo y el contacto de hueso con hueso genera una superficie pulida, similar a la porcelana. - Reacción Ósea (Esclerosis y Porosidad): El hueso subcondral reacciona al estrés mecánico aumentando su densidad (esclerosis). Además se produce porosidad en la superficie articular, que puede deberse a la penetración del tejido vascular a través del hueso expuesto. - Osteofitos: Crecimientos óseos reactivos en los márgenes de la articulación. Pueden ser también respuesta funcional a estrés, no siempre indican una enfermedad. La prevalencia de esta enfermedad aumenta con la edad, afectando comúnmente a rodillas, manos, cadera y columna vertebral. El patrón de distribución puede inferir patrones de actividad física."
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
    contextoPaleopatologico: "Las anomalías congénitas más graves suelen deberse a fallos en el cierre de hendiduras fetales o la supresión de partes del mesénquima esqueletogénico. Algunos ejemplos fatales comunes son la anencefalia (falta de desarrollo de la bóveda craneal) y la craneorraquisquisis (cierre defectuoso del tubo neural). Otras malformaciones son menos severas, como el labio leporino o el paladar hendido, compatibles con la vida hasta la madurez, aunque en la antigüedad presentaban un alto riesgo de mortalidad infantil por dificultades en la lactancia. Entre las enfermedades congénitas más reportadas en restos arqueológicos se encuentran la hidrocefalia (agrandamiento de la bóveda craneal por acumulación de líquido cefalorraquídeo), herniaciones congénitas de las meninges y defectos en el desarrollo maxilar."
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
  },
  {
    termino: "Pseudopatología",
    categoria: "PALEOPATOLOGÍA",
    acepciones: [
      "s.f. Alteración o daño en el tejido óseo de restos arqueológicos que presenta una apariencia anormal similar a la de una enfermedad o trauma, pero que en realidad no es el resultado de un proceso biológico en vida (antemortem), sino producto de la destrucción física del hueso ocurrida después de la muerte."
    ],
    sinonimos: ["alteración tafonómica"],
    obs: "",
    fuentes: [
      { nombre: "Ortner & Putschar (1981)", url: "" }
    ],
    contextoPaleopatologico: "Las pseudopatologías son el resultado del entorno de entierro (acción de microorganismos, componentes químicos de la tierra o fauna) y el uso de técnicas de excavación descuidadas. Distinguir una pseudopatología de una patología real no es sencillo. Por ejemplo, un daño causado por una pala durante la excavación puede confundirse con un trauma antemortem. Por otro lado, se debe ser cuidadoso al clasificar un daño ambiental como pseudopatología, puesto que muchas enfermedades reales debilitan el hueso en vida, haciéndolo más susceptible a deteriorarse rápidamente en la tierra tras el entierro.",
    imagen: "./assets/img/glosario/pseudopatologia.png",
    imagenCaption: "Diferencias macroscópicas entre lesión patológica y pseudopatología."
  },
  {
    termino: "Alofiso",
    categoria: "PALEOPATOLOGÍA",
    acepciones: [
      "adj. Dicho del individuo cuyos restos no permiten determinar su sexo debido al mal estado de conservación en que se encuentran o porque los caracteres indicadores no son evidentes."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "TERMCAT", url: "https://www.termcat.cat/" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Antropología física",
    categoria: "PALEOPATOLOGÍA",
    acepciones: [
      "loc. nom. Disciplina científica que estudia las características biológicas y conductuales de los seres humanos, así como de sus parientes más cercanos (los primates no humanos) y sus ancestros, con el objetivo de comprender la evolución humana y qué significa ser humano.",
      "loc. nom. Subdisciplina de la antropología que investiga la biología humana desde una perspectiva evolutiva, centrándose en el estudio de la variación biológica (genética y fenotípica) entre las poblaciones y los mecanismos de adaptación fisiológica frente al estrés del entorno a lo largo del tiempo."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "Jurmain et al. (2012)", url: "" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Bioarqueología",
    categoria: "PALEOPATOLOGÍA",
    acepciones: [],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Diagnóstico Diferencial",
    categoria: "PALEOPATOLOGÍA",
    acepciones: [
      "loc. nom. Conjunto de opciones diagnósticas probables (tales como traumatismos, enfermedades infecciosas, displasias, neoplasias o trastornos metabólicos) que se proponen y justifican a partir de las evidencias físicas, morfológicas y celulares previas encontradas en los restos esqueléticos del individuo.",
      "loc. nom. Proceso metodológico utilizado en las ciencias clínicas y en la paleopatología, que permite distinguir e identificar la enfermedad específica causante de una lesión mediante comparación, evaluación y exclusión sistemática de otras afecciones patológicas que producen respuestas óseas o alteraciones idénticas o similares."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "Ortner & Putschar (1981)", url: "" }
    ],
    contextoPaleopatologico: "Es un gran desafío para los paleopatólogos cuando examinan únicamente el hueso. Esto se debe a la baja especificidad de la mayoría de las lesiones esqueléticas que hace que el diagnóstico exacto sea a veces imposible. Para realizar un diagnóstico diferencial adecuado el investigador debe tener en cuenta además de las lesiones otras variables como la edad, el sexo, su distribución geográfica, la paleoepidemiología, el entorno cultural y análisis bioquímicos de los restos."
  },
  {
    termino: "Estrés fisiológico",
    categoria: "PALEOPATOLOGÍA",
    acepciones: [],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Heterogeneidad Oculta",
    categoria: "PALEOPATOLOGÍA",
    acepciones: [
      "Toda población está compuesta por una mezcla de individuos que varía en su susceptibilidad a enfermar y morir. Esta variación hace casi imposible interpretar qué riesgos reales corría un individuo en el pasado. Por esto, en el estudio de la salud en el registro paleoantropológico surge la contraintuitiva de que \"una mejor salud produce peores esqueletos\"."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Marcador inespecífico de estrés",
    categoria: "PALEOPATOLOGÍA",
    acepciones: [],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Mortalidad Selectiva",
    categoria: "PALEOPATOLOGÍA",
    acepciones: [
      "Los esqueletos nunca son una muestra representativa de todos los individuos que estaban en riesgo a una edad determinada, sino solamente de aquellos que murieron a esa edad. Por ello, los individuos muertos son una muestra sesgada que tiende a sobreestimar la prevalencia de condiciones patológicas con respecto a la población viva."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Mortalidad vs. Fecundidad",
    categoria: "PALEOPATOLOGÍA",
    acepciones: [
      "Las estadísticas a menudo reflejan fluctuaciones en la fertilidad de la población más que en la mortalidad. Si en un yacimiento la edad media de los restos es muy baja no significa que esa población tuviera una salud mala sino que en la mayoría de los casos esto indica que la población estaba creciendo y había gran número de nacimientos (que siempre tienen una alta mortalidad natural)."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Paleodemografía",
    categoria: "PALEOPATOLOGÍA",
    acepciones: [],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Paradoja Osteológica",
    categoria: "PALEOPATOLOGÍA",
    acepciones: [
      "loc. nom. Concepto teórico y metodológico de paleopatología que advierte que una mayor prevalencia de lesiones óseas en una muestra arqueológica no equivale automáticamente a un peor estado de salud en la población original; por el contrario, la presencia de lesiones evidencia la resistencia fisiológica del individuo para sobrevivir al estrés o a la enfermedad en el tiempo suficiente como para que el tejido óseo reaccione.",
      "loc. nom. Conjunto de sesgos interpretativos que surgen al intentar inferir la salud prehistórica a partir de series esqueléticas, derivados del hecho de que los restos óseos son muestras compuestas exclusivamente por individuos muertos, lo cual distorsiona las estimaciones reales de riesgo y morbilidad de la población viva."
    ],
    sinonimos: [],
    obs: "Articulado por James W. Wood y colaboradores en 1992, esta paradoja desafía el pensamiento tradicional de que ciertos indicadores como la frecuencia de lesiones esqueléticas o la edad media de muerte reflejan de forma directa la salud de las poblaciones del pasado.",
    fuentes: [
      { nombre: "Wood et al. (1992)", url: "" }
    ],
    contextoPaleopatologico: ""
  },
  {
    termino: "Perspectiva biocultural",
    categoria: "PALEOPATOLOGÍA",
    acepciones: [],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },

  // ── TAFONOMÍA ────────────────────────────────────────────────────────────
  {
    termino: "Tafonomía",
    categoria: "TAFONOMÍA",
    acepciones: [
      "s.f. Disciplina científica que estudia los procesos mediante los cuales los huesos y otros materiales orgánicos llegan a ser enterrados en la tierra y logran preservarse como fósiles a lo largo del tiempo."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "Jurmain et al. (2012)", url: "" }
    ],
    contextoPaleopatologico: "En la investigación de restos óseos, los tafónomos intentan comprender y reconstruir los sucesos que afectaron al cuerpo postmortem. Entre sus temas claves se encuentran la sedimentación, propiedades de preservación del propio hueso y factores de perturbación causados por animales carnívoros u otros agentes ambientales. Este control es esencial en paleopatología para poder distinguir las lesiones producidas por enfermedad de aquellas pseudopatológicas causadas por el entorno de enterramiento. Gracias a tecnologías de digitalización del patrimonio, la disciplina se ha ampliado hacia lo virtual combinando los registros de los restos humanos con datos tridimensionales de la superficie de excavación e integrándolos para documentar y estudiar de manera más precisa los cambios tafonómicos que ha sufrido el resto óseo."
  },
  {
    termino: "Alteración Tafonómica",
    categoria: "TAFONOMÍA",
    acepciones: [],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Concreción",
    categoria: "TAFONOMÍA",
    acepciones: [
      "s.f. Acumulación o compactación de partículas que se agregan para formar una masa sólida.",
      "s.f. Masa sólida formada por acumulación y compactación de partículas, por lo general, en circunstancias patológicas."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Erosión",
    categoria: "TAFONOMÍA",
    acepciones: [
      "s.f. Desgaste, alteración o destrucción física que sufren los restos orgánicos, huesos, fósiles o superficies terrestres a lo largo del tiempo, provocada por la acción continua de fuerzas ambientales como el viento, el agua, las corrientes o las heladas.",
      "s.f. Tipo de osteólisis o destrucción ósea localizada que se produce de forma específica y en un área limitada sobre la superficie externa de un hueso vivo como consecuencia de una enfermedad. Si esta destrucción es más extensa, se prefiere utilizar el término \"caries\"."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "Ortner & Putschar (1981)", url: "" }
    ],
    contextoPaleopatologico: "Desde la perspectiva de la tafonomía, la erosión es un proceso postmortem que afecta a la preservación del hueso y está condicionado por el entorno. Esta erosión tafonómica es una de las principales causas de pseudopatologías, ya que este desgaste físico puede imitar el daño de un trauma o enfermedad real. Se debe ser cuidadoso en la interpretación de estas alteraciones. No todo deterioro ambiental debe descartarse como un daño tafonómico, ya que muchas patologías debilitan el hueso durante la vida del individuo, dejándolo más vulnerable a sufrir una rápida erosión en la tierra."
  },
  {
    termino: "Meteorización",
    categoria: "TAFONOMÍA",
    acepciones: [
      "s.f. Proceso de degradación y alteración física que experimentan los restos óseos o carcasas biológicas al quedar expuestos a los agentes atmosféricos e intemperie. Actúa como una presión selectiva que determina qué partes de una comunidad viva lograrán preservarse en el registro arqueológico y cuáles serán destruidas."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "Behrensmeyer & Hill (1980)", url: "" }
    ],
    contextoPaleopatologico: "La meteorización (weathering) no se entiende como un daño aislado al hueso, sino como un proceso para comprender la formación de los yacimientos. El estudio de la descomposición de carcasas y su exposición al clima ha demostrado que no existe una correspondencia directa entre una comunidad viva y la muestra ósea que acaba preservándose. Los especímenes que sobreviven son el resultado de varias presiones. Por tanto, evaluar el grado de meteorización de huesos permite evaluar los patrones espaciales del yacimiento (cómo se depositó el material) y deducir qué información ha quedado fuera de la muestra por su destrucción."
  },
  {
    termino: "Mineralización",
    categoria: "TAFONOMÍA",
    acepciones: [
      "s.f. Proceso fisiológico en el cual la matriz proteica u orgánica (como el osteoide o el cartílago) se impregna de componentes minerales, principalmente hidroxiapatita (calcio y fosfato), para endurecerse y formar tejido óseo o dental funcional.",
      "s.f. Proceso de fosilización mediante el cual las partes biológicas de animales o plantas se transforman en estructuras similares a la piedra a lo largo del tiempo.",
      "s.f. Deposición o impregnación mineral anormal en tejidos que en vida no deberían estar osificados, como ocurre en el cartílago y los discos intervertebrales frente a ciertas afecciones."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [
      { nombre: "Ortner & Putschar (1981)", url: "" },
      { nombre: "Jurmain et al. (2012)", url: "" }
    ],
    contextoPaleopatologico: "La mineralización es el mecanismo central que preserva los restos fósiles. Este proceso ocurre de manera lenta cuando el agua subterránea que transporta minerales se filtra y penetra en los espacios del hueso. En cuanto a patologías, el estudio de la mineralización biológica de los huesos permite detectar desórdenes en la salud antigua. Si el proceso de mineralización de la matriz ósea fracasa, los huesos permanecen blandos dando lugar a patologías como el raquitismo en niños o la osteomalacia en adultos. Por el contrario, la mineralización excesiva en los discos intervertebrales puede sugerir el diagnóstico de enfermedades raras como la ocronosis."
  },
  {
    termino: "Postmortem o Tafonómico",
    categoria: "TAFONOMÍA",
    acepciones: [],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Preservación diferencial",
    categoria: "TAFONOMÍA",
    acepciones: [],
    sinonimos: [],
    obs: "",
    fuentes: [],
    contextoPaleopatologico: ""
  },
  {
    termino: "Raíces / daño radicular",
    categoria: "TAFONOMÍA",
    acepciones: [
      "Daño de excavación."
    ],
    sinonimos: [],
    obs: "",
    fuentes: [],
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
   CRONOLOGÍA HISTÓRICA
   Fuente única de verdad para la timeline.
   Independiente de las piezas: define todos
   los periodos aunque no haya piezas aún.
══════════════════════════════════════════ */
const CRONOLOGIA_HISTORICA = [
  {
    bloque: 'Prehistoria', bloqueId: 'prehistoria', color: '#c0003c',
    periodos: [
      { id: 'paleolitico',  nombre: 'Paleolítico',               rango: '2,5 Ma – 10.000 a.C.' },
      { id: 'mesolitico',   nombre: 'Mesolítico / Epipaleolítico', rango: '10.000 – 7.000 a.C.' },
      { id: 'neolitico',    nombre: 'Neolítico',                  rango: '7.000 – 3.300 a.C.' },
      { id: 'calcolítico',  nombre: 'Calcolítico',                rango: '3.300 – 2.200 a.C.' },
      { id: 'bronce',       nombre: 'Edad del Bronce',            rango: '2.200 – 750 a.C.' },
      { id: 'hierro',       nombre: 'Edad del Hierro',            rango: '750 – 218 a.C.' }
    ]
  },
  {
    bloque: 'Antigüedad', bloqueId: 'antiguedad', color: '#d4e60a',
    periodos: [
      { id: 'romano',       nombre: 'Período Romano',    rango: '218 a.C. – s. III d.C.' },
      { id: 'tardoantiguo', nombre: 'Tardoantigüedad',   rango: 'ss. III–VII d.C.' }
    ]
  },
  {
    bloque: 'Edad Media', bloqueId: 'medieval', color: '#00e5ff',
    periodos: [
      { id: 'altamedieval',  nombre: 'Alta Edad Media',   rango: 'ss. V–X d.C.' },
      { id: 'plenamedieval', nombre: 'Plena Edad Media',  rango: 'ss. XI–XIII d.C.' },
      { id: 'bajamedieval',  nombre: 'Baja Edad Media',   rango: 'ss. XIV–XV d.C.' }
    ]
  },
  {
    bloque: 'Edad Moderna', bloqueId: 'moderno', color: '#00e676',
    periodos: [
      { id: 'moderno', nombre: 'Edad Moderna', rango: 'ss. XVI–XVIII d.C.' }
    ]
  },
  {
    bloque: 'Época Contemporánea', bloqueId: 'contemporaneo', color: '#ff4081',
    periodos: [
      { id: 'contemporaneo', nombre: 'Época Contemporánea', rango: 'ss. XIX–XXI d.C.' }
    ]
  }
];


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
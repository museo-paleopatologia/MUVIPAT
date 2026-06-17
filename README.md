[README_MUVIPAT.md](https://github.com/user-attachments/files/29069122/README_MUVIPAT.md)
<div align="center">

# MUVIPAT

### Museo Virtual de Paleopatología

**Plataforma web para la exploración, divulgación y docencia de una colección paleopatológica mediante modelos tridimensionales interactivos.**

![Estado](https://img.shields.io/badge/estado-prototipo%20funcional-4a7729)
![Proyecto](https://img.shields.io/badge/proyecto-TFG-1c5d91)
![Tecnologías](https://img.shields.io/badge/HTML-CSS-JavaScript-0077c8)

[Acceder al museo](URL_DE_GITHUB_PAGES) · [Consultar el repositorio](URL_DEL_REPOSITORIO)

</div>

---

## Descripción

**MUVIPAT** es un prototipo funcional de museo virtual de paleopatología desarrollado para facilitar el acceso, la divulgación y el uso docente de la colección paleopatológica vinculada al Departamento de Antropología de la Universidad Autónoma de Madrid.

La plataforma combina fichas científicas, modelos 3D de piezas osteológicas, navegación anatómica y patológica, recursos educativos y contenidos de actualidad. Su diseño busca acercar la paleopatología tanto a estudiantes y profesionales como a personas sin formación previa en la disciplina.

El proyecto se ha desarrollado como **Trabajo Fin de Grado del Grado en Biología de la Universidad Autónoma de Madrid**, durante el curso académico 2025–2026.

> MUVIPAT no sustituye el estudio directo de las piezas originales ni la evaluación de especialistas. Se plantea como un recurso complementario de acceso, documentación, divulgación y aprendizaje.

---

## Objetivos

El objetivo principal del proyecto es desarrollar un museo virtual de paleopatología que amplíe el alcance científico, divulgativo y educativo de una colección osteológica mediante tecnologías web y modelos tridimensionales.

Sus objetivos específicos son:

- **Democratizar el acceso** a materiales osteológicos habitualmente restringidos a colecciones físicas y académicas.
- **Digitalizar piezas paleopatológicas** seleccionadas por su interés científico, técnico y docente.
- **Facilitar el análisis morfológico** mediante modelos 3D interactivos, imágenes y fichas descriptivas.
- **Organizar la colección** mediante sistemas de exploración anatómica, patológica, cronológica y textual.
- **Desarrollar recursos educativos** que favorezcan el aprendizaje autónomo y la comprensión del diagnóstico paleopatológico.
- **Contribuir a la conservación digital** y reducir la manipulación innecesaria de piezas originales.

---

## Funcionalidades principales

### Página de inicio

Presenta el proyecto, sus objetivos, los principales módulos del museo y un mapa interactivo de los yacimientos representados en la colección.

### Exploración dual

La colección puede consultarse mediante dos vías complementarias:

- **Exploración anatómica:** selección de piezas según la región del esqueleto.
- **Exploración patológica:** navegación por categorías de alteraciones y enfermedades.

El sistema incorpora filtros combinables por región anatómica, categoría patológica, sexo, cronología y texto libre. Los filtros activos se reflejan en la URL mediante `URLSearchParams`, lo que permite compartir búsquedas concretas mediante enlaces directos.

### Catálogo de colección

Reúne las piezas del museo en un catálogo filtrable e incluye diferentes niveles de consulta:

- fichas maestras con recorridos guiados;
- piezas históricas de referencia;
- catálogo completo de la colección;
- búsqueda por nombre, yacimiento, época o patología.

### Fichas dinámicas

Las fichas se generan a partir de una estructura de datos centralizada, evitando crear un documento HTML independiente para cada pieza.

Actualmente se contemplan dos formatos principales:

- **Ficha estándar:** consulta técnica, osteológica y paleopatológica.
- **Ficha maestra:** recorrido narrativo mediante *scrollytelling*, con cambios automáticos de cámara sobre el modelo 3D.

Las fichas estándar pueden adoptar disposiciones específicas, como visualización simple, comparación entre piezas o presentación de diferentes grados de progresión de una alteración.

### Visualización tridimensional

Los modelos se integran mediante el componente web [`<model-viewer>`](https://modelviewer.dev/), que permite:

- rotación libre;
- zoom y reencuadre;
- visualización a pantalla completa;
- alternancia entre modelos de geometría y textura cuando ambos están disponibles;
- recorridos guiados y cambios de cámara en fichas maestras.

### Aula virtual

El módulo educativo reúne:

- glosario científico vinculado con las piezas;
- bibliografía temática;
- cuestionarios de distintos niveles;
- actividades de verdadero o falso, respuesta múltiple y relación de conceptos;
- propuesta de simulador de diagnóstico diferencial paleopatológico.

### Actualidad científica

El módulo de actualidad combina noticias institucionales con consultas a fuentes bibliográficas externas para mostrar publicaciones recientes relacionadas con paleopatología, bioarqueología y antropología biológica.

---

## Clasificación patológica

Las piezas se organizan en ocho grandes categorías:

1. Traumatismos.
2. Enfermedades infecciosas.
3. Enfermedades específicas.
4. Alteraciones metabólicas y marcadores de estrés.
5. Trastornos endocrinos.
6. Tumores y proliferaciones óseas.
7. Artropatías y enfermedades degenerativas.
8. Alteraciones congénitas y del desarrollo.

Esta clasificación funciona como herramienta de navegación y no elimina la necesidad de realizar un diagnóstico diferencial individualizado.

---

## Tecnologías utilizadas

| Tecnología o herramienta | Aplicación en el proyecto |
|---|---|
| HTML5 | Estructura semántica de las páginas |
| CSS3 | Diseño visual, sistema responsive y componentes de interfaz |
| JavaScript nativo | Renderizado dinámico, filtros, navegación e interacción |
| `<model-viewer>` | Visualización de modelos 3D en formato GLB |
| GSAP y ScrollTrigger | Scrollytelling y control narrativo de la cámara |
| URLSearchParams API | Persistencia y compartición de filtros mediante la URL |
| Draco | Compresión geométrica de los modelos tridimensionales |
| WebP | Optimización de texturas e imágenes |
| Git y GitHub | Control de versiones, documentación y despliegue |
| GitHub Pages | Publicación de la plataforma web |
| Creality Scan | Captura y procesamiento inicial de los escaneos |
| Blender | Revisión, alineación, texturizado y preparación de modelos |
| glTF-Transform | Optimización y compresión de archivos GLB |

---

## Arquitectura del proyecto

MUVIPAT utiliza una arquitectura multipágina o **Multi-Page Application (MPA)**. Cada módulo dispone de su propia página HTML, mientras que los datos de las piezas y buena parte de la lógica se gestionan de forma centralizada.

```text
MUVIPAT/
├── index.html                 # Página de inicio
├── exploracion.html           # Exploración anatómica y patológica
├── coleccion.html             # Catálogo completo
├── ficha-estandar.html        # Plantilla dinámica de ficha estándar
├── ficha-maestra.html         # Plantilla dinámica con scrollytelling
├── aula.html                  # Recursos educativos
├── actualidad.html            # Noticias y publicaciones
├── assets/
│   ├── css/                   # Hojas de estilo
│   ├── js/                    # Lógica de la aplicación
│   ├── img/                   # Imágenes, iconos y logotipos
│   └── models/                # Modelos tridimensionales en formato GLB
├── data.js                    # Datos centralizados de la colección
└── README.md
```

> La estructura anterior debe ajustarse si la ubicación real de `data.js`, los estilos o los scripts es diferente en la versión final del repositorio.

---

## Estructura de los datos

Cada pieza se define como un objeto dentro del archivo central de datos. Los campos pueden variar según el nivel de detalle de la ficha, pero siguen una estructura común.

```js
{
  id: 'IDENTIFICADOR',
  nombre: 'Nombre de la pieza',
  regionAnatomica: 'craneo',
  elementoAnatomico: 'Hueso o conjunto anatómico',
  tipoPatologico: 'traumatismos',
  patologia: 'Diagnóstico o alteración principal',
  sexo: 'masculino',
  edad: 'adulto joven',
  periodo: 'medieval',
  cronologia: 'siglos XI-XIII',
  yacimiento: 'Nombre y localización del yacimiento',
  coordenadas: [0, 0],
  descripcion: 'Resumen de la pieza',
  relevancia: 'Interés científico o docente',
  diagnosticoDiferencial: [],
  referencias: [],
  imagenes: [],
  modelos: {
    geometria: 'assets/models/modelo-blue.glb',
    textura: 'assets/models/modelo-textura.glb'
  }
}
```

La centralización de los datos permite reutilizar la misma información en el catálogo, los filtros, las fichas, el mapa, el glosario y futuras ampliaciones del proyecto.

---

## Modelos 3D y flujo de digitalización

Las piezas se digitalizaron mediante un escáner **Creality CR-Scan Raptor**, utilizando diferentes modos de captura en función de las características de la superficie y de la necesidad de registrar geometría o textura.

El flujo general de trabajo fue:

1. selección y preparación de la pieza;
2. captura desde distintas orientaciones;
3. alineación y fusión de los escaneos;
4. generación y limpieza de la malla;
5. revisión y, cuando fue necesario, alineación o edición en Blender;
6. exportación a formato GLB;
7. optimización de geometría y texturas;
8. compresión Draco y comprobación en `<model-viewer>`;
9. integración en la ficha correspondiente.

Los modelos incluidos en el repositorio están optimizados para su visualización web. La reducción de tamaño busca mantener un equilibrio entre fidelidad morfológica, calidad de textura y tiempo de carga.

---

## Ejecución local

El proyecto no requiere un proceso de compilación. Sin embargo, por las restricciones de los navegadores al cargar módulos, recursos y modelos 3D, se recomienda ejecutarlo mediante un servidor local.

### Con Python

```bash
python3 -m http.server 8000
```

Después, abre:

```text
http://localhost:8000
```

### Con Visual Studio Code

También puede utilizarse la extensión **Live Server** y abrir `index.html` mediante la opción **Open with Live Server**.

---

## Despliegue en GitHub Pages

1. Accede a **Settings** dentro del repositorio.
2. Abre el apartado **Pages**.
3. Selecciona la rama principal del proyecto.
4. Elige la carpeta raíz como origen de publicación.
5. Guarda los cambios.
6. Añade la URL generada al encabezado de este README.

---

## Diseño responsive y accesibilidad

La interfaz se ha diseñado para adaptarse a ordenadores, tabletas y dispositivos móviles mediante unidades CSS relativas y puntos de ruptura específicos.

Entre las medidas aplicadas se encuentran:

- reorganización de columnas en pantallas estrechas;
- escalado tipográfico mediante `clamp()`;
- controles táctiles compatibles con dispositivos móviles;
- textos alternativos en imágenes cuando están disponibles;
- navegación coherente entre módulos;
- reducción de elementos no esenciales en vistas pequeñas;
- indicaciones de uso para los visores tridimensionales.

La accesibilidad del proyecto continúa siendo una línea de mejora, especialmente en la navegación mediante teclado, la descripción detallada de modelos 3D y la creación futura de recursos táctiles mediante impresión tridimensional.

---

## Consideraciones científicas y éticas

Este repositorio contiene representaciones digitales e información asociada a restos humanos arqueológicos. Su tratamiento debe realizarse con respeto, evitando usos sensacionalistas, descontextualizados o contrarios a la finalidad científica, docente y patrimonial del proyecto.

Los diagnósticos paleopatológicos incluidos en la plataforma:

- se basan en la observación morfológica, la documentación disponible y el diagnóstico diferencial;
- pueden estar sujetos a revisión conforme se incorporen nuevos datos;
- no deben interpretarse como diagnósticos clínicos aplicables a personas vivas;
- deben citarse junto con su contexto arqueológico y bibliográfico.

La publicación digital de un modelo no implica necesariamente autorización para descargarlo, modificarlo, imprimirlo, redistribuirlo o utilizarlo con fines comerciales.

---

## Uso de inteligencia artificial

Durante el desarrollo se utilizaron herramientas de inteligencia artificial generativa como apoyo para:

- traducir requisitos funcionales a propuestas de código;
- detectar y corregir errores de programación;
- reorganizar componentes y estructuras de datos;
- revisar claridad, consistencia y estilo de determinados textos;
- plantear alternativas de diseño e interacción.

La selección de piezas, la digitalización, el procesamiento de los modelos, la definición científica de los contenidos, la comprobación de fuentes, las decisiones de diseño y la revisión final fueron realizadas y supervisadas por la autora del proyecto.

---

## Estado del proyecto

MUVIPAT se encuentra en fase de **prototipo funcional**. Las principales funcionalidades están implementadas, aunque el museo está diseñado como una plataforma ampliable.

Líneas de desarrollo futuro:

- incorporación de nuevas piezas y yacimientos;
- ampliación del simulador de diagnóstico diferencial;
- mejora de accesibilidad mediante teclado y lectores de pantalla;
- traducción completa al inglés;
- incorporación de metadatos normalizados y criterios FAIR;
- integración de modelos descargables cuando los permisos lo permitan;
- creación de réplicas táctiles mediante impresión 3D;
- evaluación de usabilidad con estudiantes y especialistas.

---

## Capturas de pantalla

<!-- Sustituye estas rutas por las capturas definitivas del repositorio. -->

| Inicio | Exploración dual |
|---|---|
| ![Página de inicio](docs/screenshots/inicio.png) | ![Exploración anatómica y patológica](docs/screenshots/exploracion.png) |

| Ficha estándar | Ficha maestra |
|---|---|
| ![Ficha estándar](docs/screenshots/ficha-estandar.png) | ![Ficha maestra](docs/screenshots/ficha-maestra.png) |

| Aula virtual | Colección |
|---|---|
| ![Aula virtual](docs/screenshots/aula.png) | ![Catálogo de colección](docs/screenshots/coleccion.png) |

---

## Autoría y contexto académico

**Autora:** Clara Martínez Menchero  
**Titulación:** Grado en Biología  
**Institución:** Universidad Autónoma de Madrid  
**Curso académico:** 2025–2026  
**Proyecto:** Trabajo Fin de Grado  
**Ámbito:** Antropología biológica, paleopatología, patrimonio digital y educación científica

**Tutorización:**  
- Armando González Martín  
- Cecilia García Campos

El proyecto se vincula con el **Laboratorio de Antropología Virtual (LAV)** y el **Laboratorio de Poblaciones del Pasado (LAPP)** de la Universidad Autónoma de Madrid.

---

## Cita del proyecto

Para citar el repositorio o la plataforma, puede utilizarse provisionalmente el siguiente formato:

```text
Martínez Menchero, C. (2026). MUVIPAT: Museo Virtual de Paleopatología basado en modelos tridimensionales de piezas patológicas [Trabajo Fin de Grado y repositorio de software]. Universidad Autónoma de Madrid. URL_DEL_REPOSITORIO
```

Sustituye la URL y adapta el formato al estilo bibliográfico requerido. Si se publica una versión estable, se recomienda crear una *release* y archivarla en Zenodo para obtener un DOI.

---

## Licencia y reutilización

<!-- Es importante acordar este apartado con los tutores y con la institución antes de publicar el repositorio definitivamente. -->

El código, los textos, las imágenes y los modelos 3D pueden estar sujetos a condiciones de uso diferentes.

Hasta que se incluya una licencia explícita:

- el repositorio no concede automáticamente permiso para reutilizar o redistribuir sus contenidos;
- los modelos 3D y las imágenes de restos humanos no deben descargarse, modificarse, imprimirse ni difundirse sin autorización;
- cualquier reutilización académica debe reconocer la autoría, la institución y el contexto arqueológico de las piezas.

Se recomienda incorporar posteriormente:

- una licencia específica para el código fuente;
- condiciones independientes para textos y documentación;
- una declaración institucional para imágenes y modelos 3D.

---

## Agradecimientos

A los tutores del proyecto, al personal del Departamento de Antropología, al Laboratorio de Antropología Virtual, al Laboratorio de Poblaciones del Pasado y a todas las personas e instituciones que han contribuido a la documentación, conservación y estudio de las colecciones empleadas.

---

<div align="center">

**MUVIPAT · Museo Virtual de Paleopatología**  
Universidad Autónoma de Madrid · 2026

</div>

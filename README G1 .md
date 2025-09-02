<h1 align="center" >UNIVERSIDAD NACIONAL DEL CENTRO DEL PERÚ<h1>
<h1  align="center">
 Facultad de Ingeniería de Sistemas  
 </h1>
<p align="center">
 <img src="https://github.com/user-attachments/assets/af8d9db0-d1be-4c02-891c-5791bc5f07ea">
</p>
 <h1 align=center>HTML: Fundamentos Teóricos y Prácticos del Desarrollo Web</h1>

 <h2> <b>Integrantes : </b></h2>
<h3 >  -Chamorro Ninamango Ricardo Manuel</h3>
<h3 >  -Hinostroza Meza Miguel Angel </h3>
<h3 >  -Huallullo Morales Daysy Johana </h3>
<h3 >  -Ramos Roca Frank  </h3>
 
<h3 align=center > Huancayo – Perú </h3>
<h3 align=center > 2025  </h3>
 
--------------------------------------------------------------------------------------
# ÍNDICE

## HTML BÁSICO 
1. Introducción al HTML y estructura básica de un documento  
2. Etiquetas principales `<html>, <head>, <body>`  
3. Formateo de texto: `<p>, <h1> a <h6>, <strong>, <em>, <br>, <hr>`  
4. Listas: `<ul>, <ol>, <li>`  
5. Imágenes: `<img>` y atributos principales como src y alt  
6. Enlaces: `<a>` y sus atributos como href y target  
7. Tablas: `<table>, <tr>, <td>, <th>` y atributos relacionados  
8. Formularios básicos: `<form>, <input>, <label>`  
9. Comentarios en HTML `<!-- -->`  
10. Estructura semántica básica: `<header>, <footer>, <main>, <section>, <article>`  

---

## HTML AVANZADO
1. Elementos y atributos globales (data-*, id, class, style, title)  
2. Uso de `<template>` y `<slot>` para contenido dinámico  
3. Elementos multimedia: `<audio>, <video>` y atributos principales  
4. Integración de SVG y Canvas para gráficos  
5. Formularios avanzados: validación y tipos de entrada (`email`, `date`, `number`, etc.)  
6. API de HTML5: Drag and Drop, **GeoLocation**, **Web Storage (LocalStorage y SessionStorage)**  
7. Microdatos y marcado semántico avanzado  
8. Integración con JavaScript: eventos y manipulación del DOM  
9. Técnicas de accesibilidad y etiquetado (`aria-*`)  
10. Buenas prácticas de SEO en HTML  


------------------------------------------------------
# *INTRODUCCIÓN*

## Presentación del tema  
El lenguaje *HTML (HyperText Markup Language)* constituye la base para la creación de páginas web, ya que define la estructura y el contenido de los documentos en la World Wide Web. Su importancia radica en que, a pesar de los avances tecnológicos y la aparición de nuevas herramientas, HTML continúa siendo el estándar fundamental que garantiza la interoperabilidad y accesibilidad de la información en internet[1].  

# OBJETIVO GENERAL Y ESPECÍFICOS  
*Objetivo general:*  
Analizar los fundamentos básicos y avanzados del lenguaje HTML, destacando su importancia en el desarrollo de aplicaciones y páginas web modernas.  

*Objetivos específicos:*  
1. Identificar la estructura básica de un documento HTML y sus etiquetas principales.  
2. Describir el uso de elementos avanzados y atributos globales en la construcción de interfaces web.  
3. Explicar la integración de HTML con tecnologías relacionadas como JavaScript, CSS y APIs de HTML5.  

# JUSTIFICACIÓN  
La elección de este tema se justifica porque el dominio de HTML constituye una competencia esencial para estudiantes y profesionales de informática y tecnología. Comprender su estructura, etiquetas y evolución permite desarrollar soluciones web adaptables a distintos contextos y dispositivos. Además, el estudio de HTML favorece la formación académica y profesional, ya que actúa como base para aprender otros lenguajes, marcos y herramientas de programación.  

# METODOLOGÍA
La metodología empleada se basa en la *revisión bibliográfica y documental* de fuentes académicas y técnicas, complementada con la *sistematización de ejemplos prácticos* que permiten ilustrar el uso de HTML en contextos reales de desarrollo web.  

# DESARROLLO 
# HTML BÁSICO 
## 1. Introducción al HTML
###Definición:
- HTML (HyperText Markup Language) es el lenguaje de marcado que define la estructura de una página web[1].
- No es un lenguaje de programación, sino de marcado → organiza contenido en títulos, párrafos, imágenes, etc[2].

---
## 2. Estructura mínima de un archivo HTML y etiquetas principales 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>

```
- `<!DOCTYPE html>` → Indica que es HTML5.
- `<html>`: Encierra todo el documento.
- `<head>`: Contiene metadatos, título, enlaces a CSS/JS.
```html
**<head>**
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi primera página</title>
  <link rel="stylesheet" href="estilos.css"> <!-- enlazar CSS -->
  <script src="script.js"></script> <!-- enlazar JS -->
**</head>**

```
- `<body>`: Todo el contenido visible.
```html
<body>
  <h1>Bienvenidos a mi página</h1>
  <p>Este es un párrafo de ejemplo.</p>
  <img src="logo.png" alt="Logo de la página">
  <ul>
    <li>Pan</li>
    <li>Leche</li>
  </ul>
  <form>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre">
    <button type="submit">Enviar</button>
  </form>
</body>

```

<img width="350" height="400" alt="image" src="https://github.com/user-attachments/assets/acf7d4fc-b199-4864-a1c1-00a71e9c70d5" />


 ----
## 3. Formateo de texto
- `<p>`: párrafo.
- `<h1>` a `<h6>`: títulos (jerarquía).
- `<strong>`: texto en negrita (con importancia).
- `<em>`: texto en cursiva (énfasis).
- `<br>`: salto de línea.
- `<hr>`: línea horizontal.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejemplo de Formateo de Texto</title>
</head>
<body>

    <h1>3. Formateo de Texto</h1>

    <p>Este es un <b>texto en negrita con &lt;b&gt;</b></p>
    <p>Este es un <strong>texto importante con &lt;strong&gt;</strong></p>
    <p>Este es un <i>texto en cursiva con &lt;i&gt;</i></p>
    <p>Este es un <u>texto subrayado con &lt;u&gt;</u></p>
    <p>Este es un <mark>texto resaltado con &lt;mark&gt;</mark></p>
    <p>Este es un <small>texto pequeño con &lt;small&gt;</small></p>
    <p>Ejemplo de <sub>subíndice (H<sub>2</sub>O)</sub></p>
    <p>Ejemplo de <sup>superíndice (X<sup>2</sup>)</sup></p>
    

</body>
</html>

```
<img width="350" height="400" alt="Captura de pantalla 2025-09-01 075408" src="https://github.com/user-attachments/assets/0db9726d-a101-45d9-8e65-a92acc79fc33" />

---
## 4. Listas 
- No ordenada(`<ul>`):viñetas.
- Ordenada(`<ol>`):números
- `<li>`:cada elemento.
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title> Listas en HTML</title>
</head>
<body>
  <h1>Estructura de un Trabajo de Investigación</h1>

  <h2>Lista ordenada (secciones principales)</h2>
  <ol>
    <li>Portada</li>
    <li>Índice</li>
    <li>Introducción</li>
    <li>Marco teórico
      <ol>
        <li>Antecedentes</li>
        <li>Base teórica</li>
        <li>Definiciones conceptuales</li>
      </ol>
    </li>
    <li>Metodología
      <ol>
        <li>Enfoque de investigación</li>
        <li>Población y muestra</li>
        <li>Técnicas de recolección de datos</li>
      </ol>
    </li>
    <li>Resultados</li>
    <li>Conclusiones y recomendaciones</li>
    <li>Bibliografía</li>
    <li>Anexos</li>
  </ol>

  <h2>Lista no ordenada (fuentes de información utilizadas)</h2>
  <ul>
    <li>Libros académicos</li>
    <li>Artículos científicos</li>
    <li>Tesis universitarias</li>
    <li>Revistas especializadas</li>
    <li>Páginas web confiables</li>
  </ul>
</body>
</html>


```

<img width="437" height="415" alt="Captura de pantalla 2025-09-01 100942" src="https://github.com/user-attachments/assets/3cc9f43a-2af0-44ea-9acd-8dcd1e9004b6" />


## 5. Imagenes
- Se insertan con la etiqueta `<img>`.
- Atributos principales:
 -  src: ruta de la imagen.
 -  alt: texto alternativo (muy importante para accesibilidad y SEO).


```html

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo Imagen</title>
</head>
<body>
  <h1>Mi mascota</h1>
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg" 
       alt="Gatito" width="150">
</body>
</html>

```

<img width="183" height="203" alt="Captura de pantalla 2025-09-01 101909" src="https://github.com/user-attachments/assets/d887dab0-9b06-4d3f-aaf2-13ec73039ee7" />

## 6. Enlaces: `<a>`

### Definición técnica
La etiqueta `<a>` crea hipervínculos a documentos, páginas, secciones o archivos[2].  
Atributos principales:  
- **href**: dirección de destino.  
- **target**: modo de apertura (`_blank`, `_self`, `_parent`, `_top`).  
- **title**: muestra información adicional al pasar el cursor.  

### Ejemplos de código
```html
<a href="pagina.html">Ir a otra página</a>
<a href="https://google.com" target="_blank">Abrir Google en nueva pestaña</a>
<a href="#seccion1">Ir a la sección 1</a>
<a href="documentos/manual.pdf" download>Descargar manual</a>
```

### Ejemplo de código completo
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo de enlaces</title>
</head>
<body>
  <h1>Enlaces útiles</h1>
  <p><a href="https://www.wikipedia.org" target="_blank">Wikipedia</a></p>
  <p><a href="contacto.html">Ir a la página de contacto</a></p>
  <p><a href="#pie">Ir al pie de página</a></p>

  <footer id="pie">
    <p>© 2025 Ejemplo</p>
  </footer>
</body>
</html>
```
<p><a href="https://www.wikipedia.org" target="_blank">Wikipedia</a></p>

### Más información
- `target="_blank"` requiere atributo `rel="noopener noreferrer"` para seguridad.  
- Se pueden usar enlaces internos para navegación en la misma página.  

---

## 7. Tablas: `<table>`, `<tr>`, `<td>`, `<th>`

### Definición técnica
Las tablas organizan información en filas y columnas[3].  
Etiquetas:  
- **`<table>`**: tabla.  
- **`<tr>`**: fila.  
- **`<td>`**: celda estándar.  
- **`<th>`**: celda de encabezado.  
Atributos: **border**, **rowspan**, **colspan**.  

### Ejemplos de código
```html
<table border="1">
  <tr><th>Nombre</th><th>Edad</th></tr>
  <tr><td>Ana</td><td>22</td></tr>
  <tr><td>Luis</td><td>30</td></tr>
</table>

<table border="1">
  <tr><th>Producto</th><th colspan="2">Detalles</th></tr>
  <tr><td rowspan="2">Laptop</td><td>Marca</td><td>HP</td></tr>
  <tr><td>Precio</td><td>$800</td></tr>
</table>
```

### Ejemplo de código completo
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo de tabla</title>
</head>
<body>
  <h1>Lista de estudiantes</h1>
  <table border="1">
    <tr>
      <th>Nombre</th>
      <th>Edad</th>
      <th>Carrera</th>
    </tr>
    <tr>
      <td>María</td>
      <td>25</td>
      <td>Ingeniería</td>
    </tr>
    <tr>
      <td>Carlos</td>
      <td>27</td>
      <td>Medicina</td>
    </tr>
  </table>
</body>
</html>
```

<h1>Lista de estudiantes</h1>
  <table border="1">
    <tr>
      <th>Nombre</th>
      <th>Edad</th>
      <th>Carrera</th>
    </tr>
    <tr>
      <td>María</td>
      <td>25</td>
      <td>Ingeniería</td>
    </tr>
    <tr>
      <td>Carlos</td>
      <td>27</td>
      <td>Medicina</td>
    </tr>
  </table>
### Más información
- Evitar usar `border` directamente, mejor con CSS.  
- Usar `<thead>`, `<tbody>` y `<tfoot>` para mayor semántica.  

---

## 8. Formularios: `<form>`, `<input>`, `<label>`

### Definición técnica
Los formularios permiten al usuario ingresar y enviar datos[1].  
- **`<form>`**: contenedor.  
- **`<input>`**: campo de datos (texto, correo, contraseña, checkbox, radio, submit).  
- **`<label>`**: describe un campo, mejora accesibilidad.  

### Ejemplos de código
```html
<form action="/procesar" method="post">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre">
  <input type="submit" value="Enviar">
</form>

<form>
  <input type="email" placeholder="Correo">
  <input type="password" placeholder="Contraseña">
  <input type="checkbox" id="acepto">
  <label for="acepto">Acepto términos</label>
</form>
```

### Ejemplo de código completo
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo de formulario</title>
</head>
<body>
  <h1>Registro de usuario</h1>
  <form action="/registro" method="post">
    <label for="usuario">Usuario:</label>
    <input type="text" id="usuario" name="usuario" required><br><br>

    <label for="email">Correo:</label>
    <input type="email" id="email" name="email" required><br><br>

    <label for="clave">Contraseña:</label>
    <input type="password" id="clave" name="clave"><br><br>

    <input type="submit" value="Registrar">
  </form>
</body>
</html>
```

  
### Más información
- Usar `required`, `placeholder`, `pattern` para validación.  
- Se pueden incluir botones, selectores, áreas de texto.  

---

## 9. Comentarios en HTML

### Definición técnica
Los comentarios permiten documentar el código sin que aparezca en la página[3].  
Sintaxis: `<!-- comentario -->`  

### Ejemplos de código
```html
<!-- Este es un comentario -->
<p>Texto visible</p>

<!-- Comentario de
     varias líneas -->
```

### Ejemplo de código completo
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo de comentarios</title>
</head>
<body>
  <!-- Encabezado principal -->
  <h1>Página de prueba</h1>

  <p>Contenido visible</p>

  <!-- Este es el pie de página -->
  <footer>© 2025</footer>
</body>
</html>
```

### Más información
- Útiles para explicar secciones del código.  
- No deben usarse para ocultar datos sensibles.  

---

## 10. Estructura semántica básica

### Definición técnica
HTML5 introdujo etiquetas semánticas para dar significado al contenido:  
- **`<header>`**: encabezado.  
- **`<footer>`**: pie de página.  
- **`<main>`**: contenido principal.  
- **`<section>`**: agrupación de contenido.  
- **`<article>`**: bloque independiente.  

### Ejemplos de código
```html
<header><h1>Mi Sitio</h1></header>
<main>
  <section>
    <article>
      <h2>Artículo 1</h2>
      <p>Contenido...</p>
    </article>
  </section>
</main>
<footer>© 2025</footer>
```

### Ejemplo de código completo
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo de estructura semántica</title>
</head>
<body>
  <header>
    <h1>Blog de tecnología</h1>
  </header>

  <main>
    <section>
      <article>
        <h2>Noticia 1</h2>
        <p>Detalles de la noticia...</p>
      </article>
      <article>
        <h2>Noticia 2</h2>
        <p>Detalles de la segunda noticia...</p>
      </article>
    </section>
  </main>

  <footer>
    <p>© 2025 BlogTech</p>
  </footer>
</body>
</html>
```

### Más información
- Ayuda a la accesibilidad y SEO.  
- Reemplaza estructuras antiguas con `<div>` genéricos.  

------------------------------------------------------------------------------------
# HTML Avanzado – Desarrollo Web

## 1. Elementos y Atributos Globales
Los atributos globales pueden aplicarse a la mayoría de elementos HTML[1].  
Algunos de los más importantes son:

- **id**: identificador único para un elemento.  
- **class**: agrupa elementos con un mismo estilo o comportamiento.  
- **style**: añade estilos CSS en línea.  
- **title**: muestra información al pasar el cursor.  
- **data-***: permite almacenar datos personalizados.  

**Ejemplo:**
```html
<p id="parrafo1" class="texto" style="color:blue;" title="Información extra" data-info="dato">
  Hola Mundo
</p>
```
## 2. Uso de `<template>` y `<slot>` para Contenido Dinámico
Los elementos `<template>` y `<slot>` permiten manejar contenido dinámico en HTML.  

- **template**: define un fragmento de contenido HTML que no se renderiza de inmediato en la página, sino que puede ser activado o clonado mediante JavaScript.  
- **slot**: se utiliza dentro de componentes web (Web Components) para permitir la inserción de contenido dinámico desde el exterior hacia el interior del componente.  

**Ejemplo con `<template>`:**
```html
<template id="miTemplate">
  <p>Texto desde el template</p>
</template>
```
## 3. Elementos Multimedia

HTML incluye soporte nativo para reproducir contenido multimedia como **audio** y **video**[3].  
Estos elementos ofrecen atributos que permiten controlar su comportamiento:

- **controls**: muestra botones de control como reproducir, pausar o volumen.  
- **autoplay**: inicia la reproducción automáticamente al cargar la página (con restricciones en navegadores).  
- **loop**: repite el contenido indefinidamente.  
- **muted**: comienza la reproducción en silencio.  

#### Ejemplo:

```html
<video controls>
  <source src="video.mp4" type="video/mp4">
</video>
```
## 4. Integración de SVG y Canvas

HTML proporciona dos formas principales de trabajar con gráficos:

- **SVG (Scalable Vector Graphics)**:  
  Es un lenguaje basado en **XML** que permite definir gráficos vectoriales escalables, ideales para logotipos, iconos e ilustraciones.

- **Canvas**:  
  Es un lienzo en el que se pueden dibujar gráficos dinámicos mediante **JavaScript**, útil para animaciones, videojuegos o visualización de datos.

#### Ejemplo con SVG:

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="blue" stroke-width="2" fill="lightblue" />
</svg>
```
##  5. Formularios Avanzados

Con **HTML5**, los formularios se volvieron más potentes gracias a nuevos tipos de entrada y validaciones integradas.  
Esto mejora la experiencia del usuario y reduce la necesidad de validaciones complejas con **JavaScript**[1].

## Características principales

- **email**: valida automáticamente que el valor ingresado tenga formato de correo.  
- **number**: permite introducir solo números, con límites opcionales de mínimo y máximo.  
- **date**: muestra un calendario para elegir una fecha.  
- **required**: marca un campo como obligatorio antes de enviar el formulario.  
- **pattern**: permite usar expresiones regulares para validar datos específicos.  

## Ejemplo 5:

```html
<form>
  <label for="correo">Correo electrónico:</label>
  <input type="email" id="correo" required>

  <label for="edad">Edad:</label>
  <input type="number" id="edad" min="18" max="99">

  <label for="fecha">Fecha de cita:</label>
  <input type="date" id="fecha" required>

  <button type="submit">Enviar</button>
</form>
```
## 6. API de HTML5: Drag and Drop, GeoLocation, Web Storage (LocalStorage ySessionStorage).:
### API
Una **API** en programación significa **Application Programming Interface** (Interfaz de Programación de Aplicaciones)[1].

En palabras simples, es un **conjunto de reglas, funciones y protocolos** que permiten que diferentes programas, aplicaciones o sistemas se comuniquen entre sí[2].

---
### Definición técnica:

Una API define **cómo un software puede interactuar con otro** especificando qué operaciones están disponibles, qué parámetros deben usarse y qué resultados se esperan. Es como un contrato que indica qué puede hacer un programa con otro, sin necesidad de conocer su funcionamiento interno[1].

![image.png](image.png)

![image.png](image%201.png)

## API Drag and Drop en HTML5

La **API de Arrastrar y Soltar (Drag and Drop)** permite a los usuarios mover elementos dentro de la interfaz de una página web.

Se basa en tres pilares:

1. **El atributo `draggable`** → Indica si un elemento puede arrastrarse.
2. **El objeto `DataTransfer`** → Transporta los datos del elemento arrastrado.
3. **Eventos de arrastre y soltado** → Controlan el ciclo de interacción.

![image.png](image%202.png)

---

## 1. Hacer un elemento arrastrable (`draggable`)

- Por defecto, **imágenes, enlaces y texto seleccionado** son arrastrables.
- Para otros elementos (como `<div>`, `<p>`, `<span>`), se debe añadir `draggable="true"`.

### Ejemplo

```html
<p id="dragItem" draggable="true" style="cursor: grab;">
  Arrástrame con el mouse
</p>
```

## 2. Eventos principales del ciclo de arrastre

La API define **eventos** en dos fases:

### En el elemento arrastrado

- `dragstart` → Cuando comienza el arrastre (aquí se configuran los datos con `DataTransfer`).
- `drag` → Mientras el objeto se arrastra.
- `dragend` → Cuando termina el arrastre (soltado exitoso o no).

### En el elemento destino

- `dragenter` → Cuando el objeto entra al área destino.
- `dragover` → Mientras está sobre el área destino ( necesario para permitir el `drop`).
- `dragleave` → Cuando sale del área destino.
- `drop` → Cuando se suelta el objeto en el área destino.

---

## 3. Objeto `DataTransfer`

- `setData(format, data)` → Guarda información (ejemplo: `"text/plain"`).
- `getData(format)` → Recupera la información en el `drop`.
- `effectAllowed` → Tipo de acción permitida (`copy`, `move`, `link`, `all`).
- `dropEffect` → Define la acción real que se realizará en el `drop`.

---

## 4. Ejemplo completo (explicado paso a paso)

Aquí integramos todo: un elemento arrastrable, una zona de soltado, eventos, estilos dinámicos y uso de `DataTransfer`.

### Código HTML + JS:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo Drag and Drop</title>
  <style>
    #dragItem {
      width: 100px;
      padding: 10px;
      background: #88c;
      color: white;
      text-align: center;
      cursor: grab;
      border-radius: 5px;
    }
    #dropZone {
      width: 200px;
      height: 150px;
      border: 2px dashed #555;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      transition: 0.3s;
    }
  </style>
</head>
<body>
  <h2>API Drag and Drop en HTML5</h2>

  <p id="dragItem" draggable="true">
    Arrástrame
  </p>

  <div id="dropZone">
    Zona de Drop
  </div>

  <script>
    const dragItem = document.getElementById("dragItem");
    const dropZone = document.getElementById("dropZone");

 
    dragItem.addEventListener("dragstart", (e) => {
  
      e.dataTransfer.setData("text/plain", e.target.id);
      e.dataTransfer.effectAllowed = "move"; 
      e.target.style.opacity = "0.5"; 
    });

    dragItem.addEventListener("dragend", (e) => {
      e.target.style.opacity = "1"; 
    });

   
    dropZone.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move"; 
      dropZone.style.background = "#dfd"; 
    });

    dropZone.addEventListener("dragenter", () => {
      dropZone.style.borderColor = "green";
    });

    dropZone.addEventListener("dragleave", () => {
      dropZone.style.background = "";
      dropZone.style.borderColor = "#555";
    });

    dropZone.addEventListener("drop", (e) => {
      e.preventDefault();
      const id = e.dataTransfer.getData("text"); 
      const draggedElement = document.getElementById(id);
      dropZone.appendChild(draggedElement); 
      dropZone.style.background = "";
      dropZone.style.borderColor = "#555";
    });
  </script>
</body>
</html>

```

## API de Geolocalización en HTML5

La **Geolocation API** permite a las aplicaciones web obtener la **ubicación geográfica del usuario** (latitud, longitud, altitud, velocidad, etc.) siempre que el usuario otorgue permiso[1].

Características clave:

1. Se accede a través de **`navigator.geolocation`**.
2. Solo funciona en **contextos seguros (HTTPS o localhost)**.
3. Requiere **consentimiento del usuario** (por motivos de privacidad).
4. Métodos principales:
    - `getCurrentPosition()` → Obtiene la posición actual una vez.
    - `watchPosition()` → Rastrea la posición continuamente (ej. apps de delivery).
    - `clearWatch()` → Detiene un rastreo iniciado con `watchPosition()`.

---

## 1. Métodos principales

### `getCurrentPosition(success, error, options)`

- Recupera la ubicación **una sola vez**.
- Parámetros:
    - `success` → Función ejecutada si se obtiene la posición.
    - `error` → Función ejecutada si ocurre un error (opcional).
    - `options` → Configuración extra (ej. `enableHighAccuracy`, `timeout`, `maximumAge`).

### `watchPosition(success, error, options)`

- Recupera la ubicación **de manera continua**.
- Devuelve un **ID numérico** que se puede usar en `clearWatch(id)`.

### `clearWatch(id)`

- Cancela un seguimiento iniciado con `watchPosition()`.

---

## 2. Objeto `Position`

Cuando se obtiene la posición, se devuelve un objeto con:

- `coords.latitude` → Latitud.
- `coords.longitude` → Longitud.
- `coords.accuracy` → Precisión en metros.
- `coords.altitude` → Altitud (si está disponible).
- `coords.speed` → Velocidad en m/s (si está disponible).
- `timestamp` → Marca de tiempo de la medición.

---

## 3. Ejemplo completo funcional

Aquí te dejo un ejemplo con **HTML + JS**, mostrando la posición en pantalla y en consola.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo Geolocalización</title>
</head>
<body>
  <h2>📍 API de Geolocalización en HTML5</h2>
  <button id="btnUbicacion">Obtener mi ubicación</button>
  <p id="salida"></p>

  <script>
    const salida = document.getElementById("salida");
    const boton = document.getElementById("btnUbicacion");

    function mostrarUbicacion(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const precision = position.coords.accuracy;

      salida.textContent = `Latitud: ${lat}, Longitud: ${lon} (Precisión: ${precision}m)`;
      console.log("Ubicación obtenida:", position);
    }

    function mostrarError(error) {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          salida.textContent = "El usuario denegó el permiso de geolocalización.";
          break;
        case error.POSITION_UNAVAILABLE:
          salida.textContent = "La información de ubicación no está disponible.";
          break;
        case error.TIMEOUT:
          salida.textContent = "La solicitud de ubicación expiró.";
          break;
        default:
          salida.textContent = "Ocurrió un error desconocido.";
          break;
      }
      console.error("Error de geolocalización:", error.message);
    }

    boton.addEventListener("click", () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          mostrarUbicacion,  
          mostrarError,     
          { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 } // opciones
        );
      } else {
        salida.textContent = "La geolocalización no es soportada en este navegador.";
      }
    });
  </script>
</body>
</html>

```

---

## 🔹 4. Ejemplo con seguimiento en tiempo real (`watchPosition`)

```html
<button id="btnSeguir">Seguir mi ubicación</button>
<button id="btnDetener">Detener seguimiento</button>
<p id="seguimiento"></p>

<script>
  const salidaSeguimiento = document.getElementById("seguimiento");
  const btnSeguir = document.getElementById("btnSeguir");
  const btnDetener = document.getElementById("btnDetener");
  let watchId; 

  btnSeguir.addEventListener("click", () => {
    if ("geolocation" in navigator) {
      watchId = navigator.geolocation.watchPosition(
        pos => {
          salidaSeguimiento.textContent =
            `Lat: ${pos.coords.latitude}, Lon: ${pos.coords.longitude}`;
        },
        err => {
          salidaSeguimiento.textContent = "Error: " + err.message;
        },
        { enableHighAccuracy: true }
      );
    } else {
      salidaSeguimiento.textContent = "Geolocalización no soportada.";
    }
  });

  btnDetener.addEventListener("click", () => {
    if (watchId) {
      navigator.geolocation.clearWatch(watchId);
      salidaSeguimiento.textContent = "Seguimiento detenido.";
    }
  });
</script>

```

# Almacenamiento Web (Web Storage API)

La **Web Storage API** proporciona un mecanismo para que las aplicaciones web almacenen datos de forma estructurada en el navegador mediante **pares clave/valor**. A diferencia de las cookies, no se envían automáticamente en cada petición HTTP, lo que reduce sobrecarga en el tráfico y mejora el rendimiento de la aplicación [1].

Existen dos mecanismos principales de almacenamiento:

- **localStorage** → datos persistentes.
- **sessionStorage** → datos temporales por sesión/pestaña.

Ambos exponen un objeto del tipo `Storage` accesible desde `window.localStorage` y `window.sessionStorage`. Estos objetos ofrecen métodos estándar:

| Método | Descripción |
| --- | --- |
| `setItem(clave, valor)` | Almacena un par clave/valor. |
| `getItem(clave)` | Devuelve el valor asociado a la clave. |
| `removeItem(clave)` | Elimina un par clave/valor. |
| `clear()` | Elimina **todos** los datos del almacenamiento. |
| `key(index)` | Retorna la clave en la posición indicada. |
| `length` | Devuelve el número de elementos almacenados. |

> Los valores se almacenan como cadenas de texto. Para guardar objetos u otros tipos de datos, es necesario usar JSON.stringify al guardar y JSON.parse al recuperar.
> 

---

## LocalStorage

El objeto **localStorage** mantiene los datos **sin fecha de expiración**. Esto significa que la información persiste incluso si el navegador se cierra y se vuelve a abrir, siempre y cuando no se eliminen manualmente o con `localStorage.clear()`.

Características clave:

- Persistente por **origen** (protocolo + host + puerto).
- Accesible por **todas las pestañas** o ventanas del mismo origen.
- Útil para configuraciones del usuario, historial o cacheo de datos de la aplicación.

### Ejemplo práctico

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo LocalStorage</title>
</head>
<body>
  <h2>Ejemplo con localStorage</h2>
  <input id="nombre" placeholder="Escribe tu nombre">
  <button onclick="guardarNombre()">Guardar en localStorage</button>
  <button onclick="mostrarNombre()">Mostrar nombre</button>
  <button onclick="borrarNombre()">Borrar nombre</button>
  
  <p id="resultado"></p>

  <script>
    function guardarNombre() {
      const nombre = document.getElementById("nombre").value;
      localStorage.setItem("usuario", nombre);
      alert("Nombre guardado en localStorage");
    }

    function mostrarNombre() {
      const nombre = localStorage.getItem("usuario");
      document.getElementById("resultado").textContent = 
        nombre ? `Nombre guardado: ${nombre}` : "No hay datos en localStorage";
    }

    function borrarNombre() {
      localStorage.removeItem("usuario");
      alert("Nombre eliminado de localStorage");
    }
  </script>
</body>
</html>

```

---

## SessionStorage

El objeto **sessionStorage** guarda datos **únicamente mientras dure la sesión del navegador**. Cuando se cierra la pestaña o ventana, toda la información almacenada se elimina automáticamente[2].

Características clave:

- Se mantiene **solo en la pestaña actual**.
- Cada pestaña/ventana tiene su propio `sessionStorage`.
- Útil para información temporal como: estado de formularios, pasos de un proceso o indicadores de sesión.

### Ejemplo práctico

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo SessionStorage</title>
</head>
<body>
  <h2>Ejemplo con sessionStorage</h2>
  <input id="color" placeholder="Escribe tu color favorito">
  <button onclick="guardarColor()">Guardar en sessionStorage</button>
  <button onclick="mostrarColor()">Mostrar color</button>
  <button onclick="borrarColor()">Borrar color</button>
  
  <p id="resultado"></p>

  <script>
    function guardarColor() {
      const color = document.getElementById("color").value;
      sessionStorage.setItem("colorFavorito", color);
      alert("Color guardado en sessionStorage");
    }

    function mostrarColor() {
      const color = sessionStorage.getItem("colorFavorito");
      document.getElementById("resultado").textContent = 
        color ? `Color guardado en esta pestaña: ${color}` : "No hay datos en sessionStorage";
    }

    function borrarColor() {
      sessionStorage.removeItem("colorFavorito");
      alert("Color eliminado de sessionStorage");
    }
  </script>
</body>
</html>

```

---

## Comparativa LocalStorage vs SessionStorage

| Característica | localStorage | sessionStorage |
| --- | --- | --- |
| Persistencia | Permanente hasta ser borrado | Solo durante la sesión/pestaña |
| Alcance | Todas las pestañas del mismo origen | Solo la pestaña actual |
| Capacidad aprox. | 5-10 MB (dependiendo navegador) | 5 MB aprox. |
| Uso recomendado | Preferencias, configuraciones, datos cacheados | Estados temporales, sesiones ligeras |

---

# 7. Microdatos y marcado semántico avanzado

## ¿Qué son los **Microdatos**?

Los **microdatos** son un estándar de HTML que permite incrustar **metadatos legibles por máquinas** directamente en el marcado[1].

Se usan junto con vocabularios como [**schema.org**](https://schema.org/?utm_source=chatgpt.com), que definen tipos (`Product`, `Person`, `Event`, `Article`, etc.) y sus propiedades[3].

Los atributos principales son:

- **`itemscope`** → indica que un elemento es un “ítem”.
- **`itemtype`** → especifica el tipo de ítem (ej. `https://schema.org/Product`).
- **`itemprop`** → define propiedades de ese ítem (ej. `name`, `description`, `price`).

Beneficios:

- Mejoran el **SEO**: los buscadores entienden mejor el contenido.
- Permiten **rich snippets** en resultados de Google (ej. reseñas, precios, eventos).
- Hacen que la información sea más **accesible y estructurada**.

---

## ¿Qué es el **marcado semántico avanzado**?

El **HTML semántico** significa usar etiquetas que **describen el propósito del contenido**, no solo su apariencia[1].

Ejemplos de etiquetas semánticas en HTML5:

- **`<header>`** → Encabezado de una página o sección.
- **`<nav>`** → Menú de navegación.
- **`<main>`** → Contenido principal del documento.
- **`<article>`** → Un contenido independiente (ej. noticia, post).
- **`<section>`** → Agrupa un tema dentro de un artículo o página.
- **`<aside>`** → Contenido complementario (ej. barra lateral, publicidad).
- **`<footer>`** → Pie de página.

Beneficios:

- Mejora la **accesibilidad** (lectores de pantalla reconocen mejor el contenido).
- Favorece el **SEO** porque los buscadores entienden mejor la jerarquía.
- Aporta un código más **legible y mantenible**.

---

# Ejemplos

## 1. Ejemplo con **Microdatos (Producto en una tienda online)**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo Microdatos</title>
</head>
<body>
  <div itemscope itemtype="https://schema.org/Product">
   
    <h2 itemprop="name">Camisa Clásica</h2>

    <p itemprop="description">
      Camisa de algodón 100% de alta calidad, ideal para uso diario.
    </p>

    <p>Marca: <span itemprop="brand">ModaPlus</span></p>

    <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
      <p>
        Precio: $<span itemprop="price">29.99</span>
        <meta itemprop="priceCurrency" content="USD" />
      </p>
      <p>Disponibilidad:
        <link itemprop="availability" href="https://schema.org/InStock" />
        En stock
      </p>
    </div>
  </div>
</body>
</html>

```

## 2. Ejemplo con **Estructura semántica avanzada (Blog de noticias)**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo Semántico</title>
</head>
<body>
  
  <header>
    <h1>Mi Blog de Tecnología</h1>
   
    <nav>
      <ul>
        <li><a href="#articulos">Artículos</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  </header>

  
  <main>
   
    <article>
      <header>
        <h2>La inteligencia artificial en 2025</h2>
        <p><time datetime="2025-08-31">31 de agosto de 2025</time></p>
      </header>

      <section>
        <p>
          La IA ha avanzado de forma sorprendente, impactando en medicina, educación y transporte.
        </p>
      </section>

      <footer>
        <p>Escrito por <strong>Juan Pérez</strong></p>
      </footer>
    </article>

  
    <article>
      <header>
        <h2>Las energías renovables en el futuro</h2>
        <p><time datetime="2025-07-15">15 de julio de 2025</time></p>
      </header>

      <section>
        <p>
          La energía solar y eólica están en auge y se espera que lideren la transición energética.
        </p>
      </section>

      <footer>
        <p>Escrito por <strong>Ana Gómez</strong></p>
      </footer>
    </article>
  </main>

 
  <aside>
    <h3>Publicidad</h3>
    <p>Compra los mejores gadgets aquí.</p>
  </aside>

  <footer>
    <p>&copy; 2025 Mi Blog - Todos los derechos reservados.</p>
  </footer>
</body>
</html>

```

Este ejemplo usa **estructura semántica completa**:

- `<header>` con logo y navegación.
- `<main>` con varios `<article>`.
- `<aside>` con información complementaria.
- `<footer>` con derechos de autor.

# 8.  Eventos y Manipulación del DOM con JavaScript

En el desarrollo web, **JavaScript** es la pieza clave para dotar a una página de **interactividad**[1].

Esto se logra principalmente mediante:

1. **Eventos** → permiten responder a las acciones del usuario (clics, teclas, envíos de formularios, etc.).
2. **Manipulación del DOM (Document Object Model)** → permite modificar la estructura, contenido y estilos de la página en tiempo real.

---

## ¿Qué es un evento?

Un **evento** es una señal que el navegador genera cuando ocurre algo en la página[3].

Ejemplos de eventos:

- **Ratón:** `click`, `dblclick`, `mouseover`, `mouseout`.
- **Teclado:** `keydown`, `keyup`.
- **Formulario:** `submit`, `change`, `input`.
- **Documento/ventana:** `load`, `resize`, `scroll`.

Para manejar eventos se usa:

```jsx
element.addEventListener("nombreEvento", funcionManejadora);

```

## Ejemplo

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo Eventos</title>
</head>
<body>
  <button id="btn">Haz clic</button>
  <div id="msg">Texto inicial</div>

  <script>
    const btn = document.getElementById('btn');
    const msg = document.getElementById('msg');

    btn.addEventListener('click', () => {
      msg.textContent = '¡Texto actualizado con JavaScript!';
    });
  </script>
</body>
</html>

```

Explicación:

- Se seleccionan elementos con `getElementById`.
- Al hacer clic, se ejecuta la función que cambia el contenido del `<div>`.

---

## Manipulación del DOM

El **DOM** es la estructura en memoria que representa el HTML[1].

JavaScript puede:

- **Leer** elementos: `querySelector()`, `getElementById()`.
- **Crear** nodos: `createElement()`.
- **Modificar** contenido: `textContent`, `innerHTML`.
- **Cambiar** estilos: `element.style`.
- **Eliminar** nodos: `removeChild()`.

---

## Ejemplo 2: Crear y eliminar elementos dinámicamente

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Manipulación DOM</title>
</head>
<body>
  <button id="add">Agregar párrafo</button>
  <button id="remove">Eliminar último párrafo</button>
  <div id="container"></div>

  <script>
    const container = document.getElementById('container');
    const addBtn = document.getElementById('add');
    const removeBtn = document.getElementById('remove');

    
    addBtn.addEventListener('click', () => {
      const p = document.createElement('p');
      p.textContent = 'Soy un párrafo agregado dinámicamente.';
      container.appendChild(p);
    });

  
    removeBtn.addEventListener('click', () => {
      if (container.lastChild) {
        container.removeChild(container.lastChild);
      }
    });
  </script>
</body>
</html>

```

Explicación:

- `createElement()` genera un nuevo nodo `<p>`.
- `appendChild()` lo inserta en el contenedor.
- `removeChild()` elimina el último nodo hijo.

---

## Ejemplo 3: Manipulación de estilos con eventos

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Estilos dinámicos</title>
</head>
<body>
  <button id="colorBtn">Cambiar color</button>
  <div id="caja" style="width:150px; height:150px; background:lightblue; margin-top:10px;"></div>

  <script>
    const caja = document.getElementById('caja');
    const colorBtn = document.getElementById('colorBtn');

    colorBtn.addEventListener('click', () => {
      caja.style.backgroundColor = caja.style.backgroundColor === 'lightblue' ? 'tomato' : 'lightblue';
    });
  </script>
</body>
</html>

```

Explicación:

- Se accede a la propiedad `style` del elemento.
- Se alterna el color de fondo cada vez que se hace clic en el botón.

# 9. Accesibilidad Web: ARIA y Etiquetado

La accesibilidad web busca que todas las personas, incluidas aquellas con **discapacidad visual, auditiva, cognitiva o motora**, puedan **navegar, entender e interactuar** con las aplicaciones web. Dentro de este campo, las **WAI-ARIA (Accessible Rich Internet Applications)** son un conjunto de **atributos HTML** que permiten describir **roles, estados y propiedades** de elementos de la interfaz, especialmente en aplicaciones dinámicas y ricas en interacción[3].

## ¿Qué es ARIA y por qué se usa?

- ARIA extiende la semántica de HTML, agregando información adicional que los **lectores de pantalla** y otras tecnologías asistivas pueden interpretar[2].
- Su objetivo principal es **complementar** a HTML, no reemplazarlo. La recomendación siempre es:
    
    👉 *“Primero usa etiquetas semánticas nativas, y solo si no existen, aplica ARIA”*.
    

Ejemplo:

- Un `<button>` ya es reconocido como botón por un lector de pantalla → **NO necesita `role="button"`**.
- Un `<div>` que actúa como botón → requiere `role="button"` y atributos adicionales (`tabindex="0"`, `aria-pressed="true/false"`, etc.) para ser accesible.

---

## Principales categorías de ARIA

1. **Roles**
    
    Indican la función de un elemento. Ejemplo:
    
    - `role="navigation"` → zona de navegación.
    - `role="dialog"` → ventana modal.
    - `role="progressbar"` → barra de progreso.
2. **Propiedades (atributos `aria-`)**
    
    Definen características adicionales del elemento:
    
    - `aria-label="Cerrar"` → etiqueta textual invisible para lectores de pantalla.
    - `aria-labelledby="idEtiqueta"` → referencia a otro elemento como etiqueta.
    - `aria-describedby="idDescripcion"` → agrega información descriptiva adicional.
3. **Estados dinámicos**
    
    Expresan cambios en la interfaz que deben ser anunciados:
    
    - `aria-expanded="true/false"` → indica si un menú está desplegado.
    - `aria-checked="true/false/mixed"` → estado de un checkbox.
    - `aria-hidden="true/false"` → controla si un elemento debe ser ignorado por lectores de pantalla.

---

## Reglas de oro en el uso de ARIA

Usar **HTML semántico nativo** antes que ARIA (`<button>`, `<nav>`, `<main>`, `<form>`).

Asegurar que los elementos interactivos sean **alcanzables por teclado** (`tabindex`, eventos de teclado).

Probar en **lectores de pantalla** (NVDA, JAWS, VoiceOver) y navegadores.

Evitar la **duplicación de roles** en elementos con semántica implícita.

ARIA **no agrega interactividad por sí sola**: si marcas un `<div role="button">`, debes programar también la interacción con teclado y mouse en JavaScript.

---

## Ejemplo funcional: Barra de progreso accesible

```html
<div role="progressbar"
     aria-valuemin="0"
     aria-valuemax="100"
     aria-valuenow="60"
     aria-label="Carga de archivo">
  60% completado
</div>

```

## Ejemplo funcional: Botón con solo ícono

```html
<button aria-label="Cerrar ventana">
  ❌
</button>

```

## Ejemplo funcional: Menú expandible

```html
<button aria-expanded="false" aria-controls="submenu" id="btnMenu">
  Opciones
</button>
<ul id="submenu" hidden>
  <li><a href="#">Perfil</a></li>
  <li><a href="#">Configuración</a></li>
</ul>

<script>
  const btn = document.getElementById("btnMenu");
  const submenu = document.getElementById("submenu");

  btn.addEventListener("click", () => {
    const abierto = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !abierto);
    submenu.hidden = abierto;
  });
</script>

```

- `aria-expanded` comunica al lector de pantalla si el menú está abierto o cerrado.
- `aria-controls="submenu"` indica qué elemento controla el botón.
- El script asegura que los estados cambien dinámicamente.

# 10. Buenas prácticas de SEO en HTML

El SEO (*Search Engine Optimization*) en HTML consiste en aplicar técnicas de marcado que permitan a los buscadores **entender, indexar y mostrar mejor el contenido de una página web**[3].

### Puntos clave para un HTML optimizado para SEO:

1. **Título (`<title>`) y meta descripción (`<meta name="description">`)**
    - El `<title>` define el tema de la página y aparece como enlace en los resultados de búsqueda.
    - La `<meta description>` no influye en el ranking, pero sí en el CTR (*click-through rate*), ya que suele mostrarse como el resumen en Google.
2. **Estructura semántica y encabezados jerárquicos**
    - Un solo `<h1>` por página, representando el tema principal.
    - Subtemas con `<h2>`, `<h3>`, etc.
    - Uso de elementos semánticos como `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`.
3. **Accesibilidad y atributos importantes**
    - Imágenes con `alt` descriptivo → mejora accesibilidad y SEO de imágenes.
    - Atributo `lang` en `<html>` → indica idioma del documento.
4. **URLs limpias y etiquetas meta**
    - `<link rel="canonical">` para evitar problemas con contenido duplicado.
    - `<meta name="viewport">` para adaptar la web a móviles.
5. **Buenas prácticas extra**
    - HTML válido (W3C/Lighthouse).
    - Carga rápida y diseño responsivo.
    - Uso de listas `<ul>`, `<ol>`, enlaces con texto significativo y no genérico como “clic aquí”.

---

# Ejemplo práctico – HTML con buenas prácticas SEO

Este código integra todo lo anterior y se puede abrir en el navegador para ver cómo funciona en la práctica.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Zapatos deportivos para correr - Tienda Online</title>
  <meta name="description" content="Compra zapatos deportivos para correr de alta calidad. Envíos rápidos, ofertas exclusivas y asesoría para elegir el calzado ideal.">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="canonical" href="https://www.ejemplo.com/productos/zapatos-deportivos">
</head>
<body>
  <header>
    <h1>Zapatos deportivos para correr</h1>
    <nav>
      <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="productos.html">Productos</a></li>
        <li><a href="contacto.html">Contacto</a></li>
      </ul>
    </nav>
  </header>

  <main>
   
    <article>
      <h2>Características de nuestros zapatos deportivos</h2>
      <p>En nuestra tienda encontrarás zapatos diseñados para maximizar el confort, con suelas ligeras y transpirables, ideales para corredores profesionales y aficionados.</p>

      
      <figure>
        <img src="imagenes/zapatos-correr.jpg" alt="Zapatos deportivos de color azul para correr">
        <figcaption>Zapatos deportivos para correr modelo 2025.</figcaption>
      </figure>

      <section>
        <h3>Beneficios principales</h3>
        <ul>
          <li>Ligereza y comodidad en cada pisada</li>
          <li>Diseño ergonómico adaptado a tu pie</li>
          <li>Materiales resistentes y transpirables</li>
        </ul>
      </section>
    </article>

  
    <section>
      <h2>Opiniones de nuestros clientes</h2>
      <blockquote>
        “Los mejores zapatos que he comprado, perfectos para entrenar a diario.” – <cite>Laura G.</cite>
      </blockquote>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 Tienda de Zapatos Deportivos | <a href="politica-privacidad.html">Política de privacidad</a></p>
  </footer>
</body>
</html>

```
# CONCLUSIÓN 
 - El análisis realizado permite comprender que *HTML es el pilar fundamental del desarrollo web*, pues establece la estructura lógica de las páginas y facilita la integración con otras tecnologías como CSS y JavaScript. 

- Se identificó la relevancia de las etiquetas semánticas para la accesibilidad y el posicionamiento en buscadores, así como la utilidad de los formularios, tablas y listas en la organización del contenido. Además, se destacó la importancia de las APIs de HTML5 para extender la funcionalidad de las aplicaciones web modernas y la necesidad de aplicar buenas prácticas de accesibilidad y SEO en el diseño de interfaces digitales.  

<div style="border: 2px solid black; padding: 40px; margin: 20px auto; width: 21cm; height: 29.7cm; box-sizing: border-box; position: relative;">

# *Referencias bibliográficas*

A continuación, se presentan las fuentes consultadas empleando el formato de citación IEEE:

[1] “HTML: HyperText Markup Language,” MDN Web Docs, último acceso: 2025-09-01. [En línea]. Disponible en: https://developer.mozilla.org/en-US/docs/Web/HTML

[2] WHATWG, “HTML Standard (Living Standard),” WHATWG HTML Spec, última actualización: 5 agosto 2025. [En línea]. Disponible en: https://html.spec.whatwg.org/multipage/

[3] W3C, “HTML5 – W3C Recommendation 28 October 2014,” World Wide Web Consortium, 2014. [En línea]. Disponible en: https://www.w3.org/TR/2014/REC-html5-20141028/

</div>



































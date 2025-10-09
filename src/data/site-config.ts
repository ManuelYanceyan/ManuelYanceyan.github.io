export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type WeekContent = {
    title: string;
    summary: string;
    keyConcepts: string[];
    lab: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;  // Aseguramos que el title sea obligatorio
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
    weeks: WeekContent[];
};

const siteConfig: SiteConfig = {
    website: 'https://ManuelYanceyan.github.io',
    title: '',  // Asegúrate de que 'title' esté definido
    description: 'Tema Astro.js y Tailwind CSS para blog y portafolio creado por justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js y Tailwind CSS theme'
    },
    headerNavLinks: [
        { text: 'Inicio', href: '/' },
        { text: 'Proyectos', href: '/projects' },
        { text: 'Semanas', href: '/semanas' },
        { text: 'Github', href: 'https://github.com/ManuelYanceyan' }
    ],
    footerNavLinks: [
        { text: 'Sobre mi', href: '/about' },
        /*{ text: 'Contacto', href: '/contact' },*/
        /* { text: 'Términos', href: '/terms' }*/
    ],
    socialLinks: [
        { text: 'Linkedin', href: 'https://www.linkedin.com/in/manuel-yanceyan-quincho-ayala-a092a3235' },
        { text: 'Instagram', href: 'https://instagram.com/' },
        { text: 'X/Twitter', href: 'https://twitter.com/' }
    ],
    hero: {
        image: {
            src: 'https://www.todopapas.com/images/cms_2011/tpp/semanas/sem01.gif',
            alt: 'Estudiante frente a una computadora'
        },
        actions: [
            {
                text: 'Ver Semanas',
                href: '#semanas'
            }
        ]
    },
    subscribe: {
        title: '',
        text: 'Una actualización por semana. Todas las últimas publicaciones directamente en tu correo.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8,
    weeks: [
        {
            title: "Semana 1: Fundamentos de Desarrollo Web y expocion de silabo",
            summary: "HTML, o HyperText Markup Language, es el lenguaje fundamental para la creación de páginas web, ya que permite estructurar el contenido de manera organizada y comprensible tanto para navegadores como para usuarios. Todo documento HTML comienza con la etiqueta <html> que indica que se trata de un archivo HTML, y dentro de esta se encuentra el <head>, donde se incluyen metadatos, como el título de la página (<title>), enlaces a hojas de estilo (<link>) y scripts (<script>), y el <body>, que contiene todo el contenido visible, como textos, imágenes, enlaces y elementos interactivos. Para formatear texto, HTML ofrece etiquetas como <p> para párrafos, <h1> a <h6> para encabezados de mayor a menor importancia, <strong> para resaltar en negrita, <em> para enfatizar en cursiva, <br> para saltos de línea y <hr> para separar secciones con líneas horizontales. Para organizar elementos en forma de listas se utilizan <ul> para listas no ordenadas y <ol> para listas numeradas, con cada elemento definido dentro de <li>. Las imágenes se agregan con <img> y sus atributos principales, src para indicar la ruta del archivo y alt para proporcionar un texto alternativo que mejora la accesibilidad. Los enlaces se crean con <a> y atributos como href para la URL de destino y target para determinar si se abre en la misma pestaña o en una nueva. HTML también permite estructurar información tabular usando <table>, con filas <tr>, celdas <td> y encabezados <th>, pudiendo agregar atributos que definen bordes, alineación y tamaño. Para la interacción con usuarios, se usan formularios básicos mediante <form>, con campos de entrada <input> y etiquetas <label> que describen cada campo. Además, los comentarios <!-- --> permiten dejar notas dentro del código sin que se muestren en la página, ayudando a la organización y comprensión del código. Finalmente, HTML moderno promueve una estructura semántica que mejora la accesibilidad y la optimización para buscadores, con elementos como <header> para encabezados, <footer> para pies de página, <main> para el contenido principal, <section> para secciones temáticas y <article> para artículos o bloques de contenido independientes, creando páginas más claras, organizadas y fáciles de mantener.",
            keyConcepts: [
                "El desarrollo de software debe contribuir al proceso de toma de decisiones...",
                "La competencia en el área incluye desarrollar software según los requerimientos específicos del cliente..."
            ],
            lab: "En la primera semana del curso, se introdujo el enfoque sistémico para el desarrollo de software, destacando que todo proyecto debe responder a los requerimientos específicos del cliente y considerar principios de calidad, ética y profesionalismo. Se presentó la estructura del curso, dividida en dos partes: las primeras ocho semanas enfocadas en desarrollo Web Frontend y las siguientes ocho en Backend, con énfasis en metodologías como TDD y buenas prácticas de código funcional y seguro. Se definieron políticas de participación, asistencia y honestidad académica, indicando que el uso de código de repositorios es permitido solo si se comprende y adapta correctamente. Se abordaron los fundamentos de tecnologías web, HTML, XML, CSS3, DOM, diseño responsivo, optimización SEO y compatibilidad entre navegadores, así como la utilización de herramientas y componentes prediseñados para facilitar el desarrollo. También se explicaron los laboratorios iniciales, centrados en interfaces de usuario, Flexbox y diseño fluido, y se anticiparon contenidos posteriores como React, uso de APIs, desarrollo full-stack, PHP y frameworks relacionados, integración de proyectos y despliegue en servidores, junto con la preparación para evaluaciones importantes como la Evaluación LOBO y la entrega del portafolio, subrayando la importancia de la participación activa, la responsabilidad y la aplicación práctica de los conocimientos en beneficio de la comunidad"
        },
        {
            title: "Semana 2: Temas de HTML avanzado",
            summary: "En el estudio de HTML avanzado, se profundiza en una variedad de temas clave para el desarrollo web moderno. Primero, se abordan los elementos y atributos globales como data-*, id, class, style y title, que permiten personalizar y manejar la información de los elementos de manera flexible y estructurada. Se introduce el uso de template y slot para la creación de contenido dinámico, lo que facilita la reutilización de componentes y la manipulación de la interfaz según la interacción del usuario. Los elementos multimedia, como <audio> y <video>, se estudian con sus atributos específicos para controlar la reproducción, accesibilidad y compatibilidad, mientras que la integración de SVG y Canvas permite crear gráficos vectoriales y renderizar imágenes dinámicas directamente en la web. En cuanto a formularios avanzados, se enfatiza la validación de datos y el uso de distintos tipos de entrada (email, number, date, entre otros) para mejorar la experiencia del usuario y la precisión de la información recibida. La API de HTML5 ofrece herramientas como Drag and Drop para arrastrar y soltar elementos, GeoLocation para obtener la ubicación del usuario y Web Storage (LocalStorage y SessionStorage) para almacenar datos de manera local y temporal. También se estudian microdatos y marcado semántico avanzado para enriquecer la información que los motores de búsqueda interpretan, así como la integración con JavaScript mediante eventos y manipulación del DOM, que permite crear interfaces interactivas y dinámicas. Finalmente, se destacan técnicas de accesibilidad mediante atributos aria-* y el etiquetado adecuado para garantizar que los sitios web sean inclusivos, junto con buenas prácticas de SEO en HTML que optimizan la visibilidad y el posicionamiento en buscadores, asegurando que los contenidos sean accesibles, comprensibles y relevantes para los usuarios.",
            keyConcepts: [
                "Un concepto clave en HTML avanzado es el uso de atributos y elementos globales, como id, class, style, title y data-*. Estos permiten personalizar y controlar cualquier elemento HTML de manera flexible, facilitando la identificación, el estilo y el almacenamiento de información adicional que puede ser utilizada por JavaScript o CSS para mejorar la interactividad y la apariencia de una página web.",
                "Otro concepto importante es el contenido dinámico y multimedia, que incluye el uso de template y slot para insertar contenido dinámico según las necesidades del usuario, así como la integración de elementos <audio> y <video> para reproducir medios, y el uso de SVG y Canvas para crear gráficos e ilustraciones interactivas directamente en la página web. Estas herramientas permiten construir interfaces ricas y visualmente atractivas.",
                "Finalmente, las APIs y la accesibilidad representan un pilar fundamental del HTML avanzado. Esto abarca el uso de APIs de HTML5 como Drag and Drop, GeoLocation y Web Storage (LocalStorage y SessionStorage), la manipulación del DOM mediante JavaScript para crear experiencias interactivas, y la implementación de etiquetas aria-* para garantizar que las páginas sean accesibles para todos los usuarios. Además, estas prácticas contribuyen a un mejor SEO, asegurando que el contenido sea entendido y valorado correctamente por los motores de búsqueda."
            ],
            lab: "Temas de HTML avanzado"
        },
        {
            title: "Semana 3: CSS BASICO Y ABANZADO",
            summary: "En CSS básico, uno de los conceptos más importantes es el modelo de caja (Box Model), que es fundamental para comprender cómo se construyen y disponen los elementos en una página web. Cada elemento HTML se compone de contenido, padding, borde y margen, y dominar este modelo permite controlar con precisión el tamaño, el espacio y la disposición de los elementos, evitando problemas de diseño y superposición. Junto a esto, el posicionamiento de los elementos (static, relative, absolute, fixed, sticky) y el uso de unidades de medida como px, %, em, rem, vh y vw son esenciales para colocar los elementos correctamente dentro de la página y adaptarlos a distintos tamaños de pantalla y dispositivos. Además, los selectores simples y compuestos, así como las pseudo-clases y pseudo-elementos, son herramientas clave para aplicar estilos de manera específica y eficiente, permitiendo cambiar la apariencia de los elementos según su estado, posición o relación con otros elementos, lo que hace que los diseños sean más dinámicos y precisos. Otro aspecto relevante en CSS básico son las propiedades de texto y fuentes, los colores y fondos, y el uso de Flexbox y Grid Layout de manera inicial, que permiten organizar los elementos de forma flexible y estructurada, sentando las bases para un diseño web consistente y estéticamente agradable   \N\N En CSS avanzado, los conceptos se vuelven más complejos y potentes. Las variables CSS y custom properties, junto con funciones como calc(), clamp(), min() y max(), permiten crear estilos dinámicos y consistentes a lo largo de toda la hoja de estilos, facilitando la adaptación de diseños a distintas resoluciones y situaciones sin necesidad de duplicar código. El diseño responsivo se potencia con técnicas avanzadas de Grid y Flexbox, incluyendo el uso de áreas de grid, auto-fit, auto-fill y alineaciones dinámicas, lo que asegura que el contenido se distribuya de manera óptima en cualquier tamaño de pantalla o dispositivo. Además, las técnicas de scroll, clipping, masking y container queries permiten controlar la visibilidad, el enfoque y la interacción del usuario con los elementos de manera más sofisticada, creando experiencias visuales atractivas y profesionales. Finalmente, el rendimiento y la optimización en CSS son fundamentales: aplicar filtros y efectos visuales avanzados sin comprometer la velocidad de carga, así como estructurar correctamente los contenedores y aprovechar las propiedades modernas de CSS, asegura que las páginas web sean no solo bellas, sino también rápidas y accesibles para todos los usuarios, integrando estética, funcionalidad y eficiencia en el desarrollo web moderno.",
            keyConcepts: [
                "Modelo de Caja (Box Model): Es fundamental para entender cómo se construyen y disponen los elementos en una página web, controlando el tamaño, el espacio y la disposición mediante contenido, padding, borde y margen.",
                "Diseño Responsivo con Flexbox y Grid Avanzado: Permite que los elementos se adapten dinámicamente a distintos tamaños de pantalla, utilizando técnicas como áreas de grid, auto-fit, auto-fill y alineaciones flexibles, asegurando un diseño eficiente y adaptable"
            ],
            lab: "Laboratorio 3"
        },
        {
            title: "Semana 4: Tailwind CSS Y Bootstrap ",
            summary: "Bootstrap y Tailwind CSS son herramientas esenciales para el desarrollo web moderno, cada una con su enfoque particular. Bootstrap se centra en ofrecer un sistema de grid responsivo, que permite organizar el contenido en columnas adaptables según el tamaño de pantalla, junto con una amplia gama de componentes predefinidos como botones, tarjetas, modales y alertas que facilitan la creación rápida de interfaces. Además, incluye tipografía personalizable, formularios con validaciones integradas, clases de utilidad para espaciado, alineación y visibilidad, animaciones y transiciones, así como integración con JavaScript para funcionalidades como tooltips, dropdowns y carousels. Su estructura facilita el diseño responsivo avanzado mediante media queries y permite personalización a través de variables CSS y SASS  \N\N Por otro lado, Tailwind CSS adopta un enfoque basado en clases utilitarias, también llamado Atomic CSS, que permite construir interfaces directamente con clases rápidas para espaciado, tipografía, bordes, flexbox y grid. Su diseño responsivo se gestiona con prefijos como sm, md, lg y xl, y ofrece fácil personalización de colores y estilos mediante el archivo de configuración tailwind.config.js. Tailwind también soporta dark mode, variantes de estado como hover o focus, animaciones y efectos visuales mediante clases de transición y transformación, y optimiza el rendimiento con PurgeCSS eliminando estilos no usados. Además, permite componentización con @apply y se integra fácilmente con frameworks modernos como React, Vue y Next.js, ofreciendo un control muy granular sobre el diseño y la consistencia visual de las aplicaciones web.",
            keyConcepts: [
                "Sistema de Grid y Diseño Responsivo: Tanto en Bootstrap como en Tailwind CSS, la capacidad de organizar el contenido en columnas adaptables según el tamaño de pantalla permite crear interfaces flexibles y optimizadas para cualquier dispositivo.",
                "Clases Utilitarias y Componentes Predefinidos: Bootstrap ofrece componentes listos para usar como botones, modales y alertas, mientras que Tailwind CSS utiliza clases utilitarias para controlar espaciado, tipografía, colores y layouts, lo que permite construir diseños precisos y consistentes de manera rápida"
            ],
            lab: "Laboratorio 3"
        },
        {
            title: "Semana 5: JavaScript Básico Y Abanzado",
            summary: "JavaScript es un lenguaje de programación esencial para el desarrollo web moderno, ya que permite dotar a las páginas de internet de interactividad, dinamismo y funcionalidades avanzadas que van más allá del contenido estático. En su nivel básico, JavaScript se centra en aspectos fundamentales como la introducción al lenguaje y su ejecución en navegadores, la comprensión y manejo de variables y tipos de datos (String, Number, Boolean, Arrays, Objects), así como la utilización de operadores aritméticos, lógicos y de comparación para construir operaciones y decisiones dentro de la aplicación. Además, permite controlar el flujo del programa mediante condicionales (if, else, switch) y bucles (for, while, do while), desarrollar funciones declaradas o expresadas que reciben parámetros y retornan valores, manipular el DOM seleccionando y modificando elementos del HTML, y responder a eventos a través de manejadores como addEventListener o onclick. También es posible almacenar información localmente mediante JSON, localStorage o sessionStorage, y depurar el código usando console.log o debugger para identificar y corregir errores de manera eficiente \n\n En un nivel más avanzado, JavaScript permite crear aplicaciones web interactivas y dinámicas con funcionalidades complejas. Esto incluye el uso de Canvas para dibujar gráficos y animaciones, la programación orientada a objetos mediante clases, prototipos y el manejo del contexto this, y la manipulación avanzada del DOM mediante la creación de elementos dinámicos, modificación de atributos, estilos y contenido en tiempo real. La asincronía se gestiona mediante promesas y async/await, lo que permite realizar operaciones que toman tiempo, como consultas a servidores, sin bloquear la ejecución de la página. Además, se pueden consumir APIs externas utilizando Fetch API o AJAX, establecer comunicaciones en tiempo real con WebSockets, y manejar closures y scopes para entender y controlar el contexto de ejecución de funciones. La gestión de errores se realiza mediante try, catch y throw, lo que aumenta la robustez de las aplicaciones, mientras que técnicas de optimización como Web Workers permiten ejecutar procesos en segundo plano y mejorar el rendimiento. En conjunto, estos conocimientos permiten desarrollar aplicaciones web modernas, interactivas y eficientes, que combinan la manipulación de elementos, la interacción con el usuario, el consumo de datos externos y la optimización de recursos de manera integral, convirtiendo a JavaScript en un pilar indispensable para cualquier desarrollador web que busque crear experiencias completas y funcionales en la web.",
            keyConcepts: [
                "Uno de los conceptos clave en JavaScript es closures. Un closure ocurre cuando una función recuerda el contexto en el que fue creada, lo que le permite acceder a variables externas incluso después de que la función que las definió haya terminado su ejecución. Esto es fundamental para crear funciones privadas, mantener estados y manejar ámbitos de manera controlada, evitando conflictos de variables en programas grandes.",
                "Otro concepto importante es promesas y async/await. Las promesas permiten manejar operaciones asincrónicas de manera más ordenada que los callbacks tradicionales, indicando qué hacer cuando una operación se cumple o falla. El uso de async/await simplifica aún más esta gestión, permitiendo escribir código asincrónico que se lee casi como código síncrono, lo que mejora la legibilidad y facilita el manejo de errores en procesos como llamadas a APIs o temporizadores."
            ],
            lab: "Laboratorio 3"
        },
        {
            title: "Semana 6: Componetes en reac",
            summary: "React es una librería de JavaScript que permite crear interfaces de usuario interactivas y dinámicas a través del uso de componentes reutilizables, los cuales son las unidades fundamentales de las aplicaciones construidas con esta herramienta. Los componentes pueden ser de clase o de función, siendo estos últimos más fáciles de escribir y entender debido a que requieren menos código. Cada componente en React se crea dentro de archivos con extensiones como .js, .jsx, .ts, o .tsx, y su nombre debe comenzar con una letra mayúscula para ser reconocido correctamente por React. La estructura de un componente se divide principalmente en tres partes esenciales: el código HTML (o JSX), el código JavaScript y el código CSS para los estilos. JSX es una extensión que permite escribir código HTML dentro de JavaScript, lo que facilita la creación de interfaces de usuario más legibles y estructuradas. Sin embargo, el navegador no puede entender JSX de forma nativa, por lo que es necesario usar herramientas como Babel para convertir este código en JavaScript estándar. En cuanto a la renderización de los componentes, React utiliza ReactDOM.render() para modificar el DOM real de la página web. La librería compara el DOM virtual generado con el anterior, y solo actualiza aquellas partes del DOM real que han sufrido cambios, lo que mejora significativamente el rendimiento de las aplicaciones \n\n  En React, el manejo de datos entre los componentes se realiza principalmente a través de props (propiedades), que permiten pasar información a los componentes hijos desde los padres, y children, que permiten incluir contenido dentro de los componentes. Esto facilita la creación de aplicaciones modulares y reutilizables, donde los componentes pueden interactuar entre sí de manera flexible. Además, React permite trabajar con diferentes enfoques para gestionar los estilos en los componentes, tales como hojas de estilo CSS tradicionales, módulos CSS (que permiten un alcance local de los estilos para evitar conflictos entre componentes) y estilos en línea, lo que da flexibilidad al desarrollo. La integración con librerías como TailwindCSS también ayuda a crear diseños responsivos y adaptables a diferentes dispositivos como móviles, tabletas y PC. Además, React es compatible con TypeScript, un superset de JavaScript que agrega tipado estático opcional, lo que mejora la calidad del código y reduce los errores durante el desarrollo al permitir la detección temprana de fallos antes de la ejecución. En resumen, React es una herramienta muy poderosa que permite crear aplicaciones web rápidas, eficientes y altamente interactivas, gracias a su enfoque en la reutilización de componentes, la optimización del rendimiento mediante el DOM virtual, y la flexibilidad en cuanto a la integración con diversas tecnologías y herramientas.",
            keyConcepts: [
                "Los componentes son la base de cualquier aplicación en React. Son unidades reutilizables de código que pueden ser de dos tipos: componentes de clase o componentes de función. Los componentes se encargan de la lógica y la presentación de la interfaz de usuario. En React, los componentes se componen de tres partes: código HTML (usualmente escrito en JSX), JavaScript para la lógica y CSS para los estilos. Estos componentes pueden recibir datos a través de las propiedades (props) y también pueden tener estados internos (state), lo que les permite ser dinámicos y responder a las interacciones del usuario.",
                "JSX es una extensión de sintaxis de JavaScript que permite escribir código HTML dentro de JavaScript. Este formato hace que la escritura de componentes en React sea más fácil y legible, ya que combina la estructura de HTML con la funcionalidad de JavaScript. Sin embargo, JSX no es entendido de forma nativa por los navegadores, por lo que debe ser transpilado a JavaScript puro mediante herramientas como Babel. JSX permite incluir expresiones de JavaScript dentro de las etiquetas HTML, lo que hace posible que los componentes React sean dinámicos y rendericen datos de manera eficiente."
            ],
            lab: "Laboratorio 3"
        }
    ]
};

export default siteConfig;

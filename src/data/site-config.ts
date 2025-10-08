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
    title: string;
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
    weeks: WeekContent[]; // Este es el array donde agregamos las semanas
};

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    title: 'Bienvenido a mi portafolio de manuel',
    subtitle: 'Este es mi portafolio para reporte de aprendizaje de clases de DESARROLLO DE APLICACIONES WEB',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Proyectos',
            href: '/projects'
        },
        {
            text: 'Semanas',
            href: '/semanas'  // Enlaza dentro de la misma página
        },
        {
            text: 'Github',
            href: 'https://github.com/ManuelYanceyan'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/manuel-yanceyan-quincho-ayala-a092a3235'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Blog de aprendizaje - Curso de DESARROLLO DE APLICACIONES WEB',
        text: 'Haz clic en "Semanas" para ver el reporte detallado por semana.',
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
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8,

    // Definir el contenido de las semanas aquí
    weeks: [
        {
            title: "Semana 1: Fundamentos de Desarrollo Web",
            summary: "El enfoque sistémico es fundamental para determinar las características de los sistemas de líneas...",
            keyConcepts: [
                "El desarrollo de software debe contribuir al proceso de toma de decisiones...",
                "La competencia en el área incluye desarrollar software según los requerimientos específicos del cliente..."
            ],
            lab: "Laboratorio 1: Introducción a HTML y CSS."
        },
        {
            title: "Semana 2: Estructura del Curso",
            summary: "El curso está dividido en dos partes principales: Frontend y Backend...",
            keyConcepts: [
                "Frontend: desarrollo de aplicaciones web con HTML, CSS y JavaScript...",
                "Backend: desarrollo de aplicaciones con Node.js y bases de datos..."
            ],
            lab: "Laboratorio 2: Diseño con Flexbox y CSS Responsivo."
        },
        {
            title: "Semana 3: Introducción a JavaScript",
            summary: "La semana 3 está dedicada a aprender los fundamentos de JavaScript...",
            keyConcepts: [
                "Variables y tipos de datos en JavaScript...",
                "Estructuras de control (condicionales, loops)..."
            ],
            lab: "Laboratorio 3: Introducción a la sintaxis de JavaScript y ejecución de scripts simples."
        },
        {
            title: "Semana 4: DOM y Eventos en JavaScript",
            summary: "La manipulación del DOM (Document Object Model) es una habilidad clave para desarrollar aplicaciones web dinámicas.",
            keyConcepts: [
                "Cómo interactuar con el DOM utilizando JavaScript...",
                "Manejo de eventos como clics, teclas y otros eventos del navegador..."
            ],
            lab: "Laboratorio 4: Creación de una página web interactiva usando el DOM y eventos en JavaScript."
        },
        {
            title: "Semana 5: Introducción a React",
            summary: "React es una librería para la construcción de interfaces de usuario interactivas.",
            keyConcepts: [
                "Componentes, props y estado en React...",
                "Renderizado condicional y manejo de eventos en React..."
            ],
            lab: "Laboratorio 5: Creación de un componente funcional básico en React."
        },
        {
            title: "Semana 6: Uso de APIs y Fetch en JavaScript",
            summary: "En esta semana, aprendemos a interactuar con APIs utilizando Fetch y otros métodos.",
            keyConcepts: [
                "Consumo de APIs REST usando Fetch...",
                "Manejo de promesas y async/await..."
            ],
            lab: "Laboratorio 6: Conexión con una API pública y visualización de datos en una interfaz React."
        },
        // Continúa agregando las semanas restantes hasta la semana 16
    ]
};

export default siteConfig;

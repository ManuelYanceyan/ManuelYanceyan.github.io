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
    title?: string;
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
    website: 'https://example.com',
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
        { text: 'Contacto', href: '/contact' },
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
        title: 'Suscríbete al boletín de Dante',
        text: 'Una actualización por semana. Todas las últimas publicaciones directamente en tu correo.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8,
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
        }
    ]
};

export default siteConfig;

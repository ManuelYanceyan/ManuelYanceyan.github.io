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
};

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    title: 'Manuel Yanceyan Quincho Ayala',
    subtitle: 'Este es mi portafoilio para reporte de aprendisaje de clases de DESARROLLO DE APLICACIONES WEB',
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
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
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
            href: 'www.linkedin.com/in/manuel-yanceyan-quincho-ayala-a092a3235'
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
    title: 'Blog de aprendizaje - Curso de DESARROLLO DE APLICACIONES WEB (Semana 01)',
    text: `
🚀 <strong>Curso Desarrollo de Aplicaciones Web</strong><br>
Estoy iniciando este curso para aprender a crear software funcional y seguro, trabajando tanto en Frontend como en Backend. ✨<br><br>

🗂️ <strong>Estructura del Curso:</strong><br>
- Durante las primeras 8 semanas estaré enfocándome en el desarrollo Frontend (HTML, CSS3, JavaScript) 💻<br>
- En las siguientes 8 semanas aprenderé sobre Backend y APIs 🔧<br>
- Además, estoy conociendo metodologías modernas como <em>TDD</em> ✅<br><br>

📚 <strong>Contenido Clave:</strong><br>
- Fundamentos de tecnologías web: HTML, XML, CSS3 ✔️<br>
- Diseño responsivo con Flexbox, Grid y principios de SEO 🖥️📱<br>
- Compatibilidad multiplataforma en navegadores 🌓🌞<br>
- Uso de frameworks CSS como Bootstrap y Tailwind 🛠️<br>
- Manipulación del DOM y renderizado eficiente para mejorar la performance ⚡<br><br>

📝 <strong>Evaluaciones y Proyectos:</strong><br>
- La evaluación LOBO representa el 50% de la nota 🏆<br>
- Laboratorios prácticos valen el 25% 🧪<br>
- El portafolio y la investigación otro 25% 📂<br>
- Y la participación activa es clave para lograr el éxito 🎤<br><br>

📋 <strong>Normas y Recomendaciones que debo seguir:</strong><br>
- La asistencia es obligatoria y la puntualidad se valora ⏰<br>
- Puedo justificar inasistencias en un plazo de 3 días hábiles 🗓️<br>
- Debo usar de manera responsable el código en repositorios como GitHub o GitLab 🔗<br>
- Está prohibido copiar trabajos; todo lo que haga debo comprenderlo y modificarlo 🛡️<br>
- Tengo que actualizar mi portafolio cada semana 📈<br><br>

💡 <strong>Competencias que estoy desarrollando:</strong><br>
Estoy aprendiendo a diseñar software a la medida, considerando la ética y la calidad profesional. También estoy desarrollando habilidades para gestionar información y servicios tecnológicos que ayuden a mejorar la eficiencia en las organizaciones. 👩‍💻👨‍💻<br><br>

📅 <strong>Próximos pasos:</strong><br>
- Formaré grupos de trabajo para monografías y presentaciones 👥<br>
- Crearé y alimentaré mi portafolio electrónico cada semana 📒<br>
- Me prepararé para las evaluaciones de octubre y diciembre 📆<br>
- Y procuraré participar activamente en cada clase 🎯<br><br>

<i>"Para mí, el desarrollo de software es un arte que une tecnología y creatividad para transformar el mundo." 🌍✨</i>
    `,
    image: {
        src: 'https://www.todopapas.com/images/cms_2011/tpp/semanas/sem01.gif',
        alt: 'Estudiante frente a una computadora'
    },
    actions: [
        {
            text: 'Get in Touch',
            href: '/contact'
        }
    ]
},

    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;

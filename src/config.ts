export const siteConfig = {
  name: "Jonathan Navarro",
  fullName: "Jonathan Arturo Navarro Macurí",
  title: "Productor Audiovisual & Game Designer",
  description: "Portfolio de Jonathan Navarro - Productor Audiovisual, Fotógrafo y Game Designer en Lima, Perú",
  
  // B&W Cinematographic palette
  accentColor: "#000000",
  colors: {
    primary: "#000000",
    secondary: "#FFFFFF", 
    accent: "#333333",
    muted: "#666666",
    bg: "#0a0a0a",
    bgLight: "#1a1a1a",
  },

  social: {
    email: "j.navarro.macuri@gmail.com",
    phone: "+51 913036471",
    linkedin: "https://linkedin.com/in/jonathan-navarro-macurí",
    itch: "https://jonathan-navarro.itch.io",
  },

  aboutMe:
    "Bachiller en Comunicación Audiovisual por la PUCP con experiencia en producción audiovisual, fotografía y desarrollo de videojuegos. Mi cortometraje 'Réquiem' fue proyectado en Cineplanet a nivel nacional y nominado en el Festival Render. He liderado equipos en Lima Game Jam desarrollando videojuegos en 48 horas.",

  // === TRABAJOS ===
  trabajos: {
    cortometrajes: [
      {
        nombre: "Réquiem",
        descripcion: "Cortometraje de ficción proyectado en Cineplanet (Lima, Puno, Cusco, Ica, Ayacucho, Lambayeque). Nominado en Festival Render. Seleccionado en Competencia Perú Emergente - Festival de Cine Al Este.",
        rol: "Producción",
        videoUrl: "https://drive.google.com/file/d/12e9Nm551_d3V3aWZVPTQcxElu5SuBFqe/preview",
        thumbnail: "/requiem-thumb.jpg",
      },
    ],

    fotografias: {
      enabled: true,
      images: [
        // Se llenarán después de descargar del folder
      ],
    },

    edicion: {
      enabled: true,
      items: [
        // Se llenarán después de descargar del folder
      ],
    },

    videojuegos: [
      {
        nombre: "Bubbles Up",
        url: "https://democrates-n.itch.io/bubbles-up",
        rol: "Producción y Game Design",
        imagen: "/bubbles-up.png",
      },
      {
        nombre: "Biofusion",
        url: "https://dreamer-p6.itch.io/biofusion",
        rol: "Producción y Game Design",
        imagen: "/biofusion.png",
      },
    ],
  },

  // === CRÍTICAS (blog sections) ===
  criticas: {
    videojuegos: {
      enabled: true,
      titulo: "Crítica de Videojuegos",
      posts: [], // Se pueden agregar después
    },
    cine: {
      enabled: true,
      titulo: "Crítica de Cine",
      posts: [], // Se pueden agregar después
    },
  },

  skills: [
    "Producción Audiovisual",
    "Adobe Premiere Pro",
    "Fotografía",
    "CapCut",
    "Photoshop",
    "Illustrator",
    "Game Design",
    "Community Management",
    "Marketing Digital",
  ],

  experience: [
    {
      company: "Consultoría Macuri & Asociados",
      title: "Asistente de Marketing y Comunicaciones",
      dateRange: "Enero 2024 - Presente",
      bullets: [
        "Gestión de redes sociales con incremento de 15% en alcance mensual",
        "Diseño de campañas digitales con aumento de 20% en tasa de clics",
        "Elaboración de presentaciones estratégicas mensuales",
      ],
    },
    {
      company: "Game Devs PUCP",
      title: "Voluntario - Marketing, Eventos, RRHH",
      dateRange: "Marzo 2025 - Presente",
      bullets: [
        "Fotografía de eventos de videojuegos en Ministerio de Cultura",
        "Cobertura de eventos OPEN PUCP",
        "Gestión de recursos humanos del voluntariado",
      ],
    },
    {
      company: "NintendoPe",
      title: "Creador de Contenido",
      dateRange: "Marzo 2025 - Junio 2025",
      bullets: [
        "Creación de contenido para medio informativo sobre Nintendo",
      ],
    },
  ],

  education: [
    {
      school: "Pontificia Universidad Católica del Perú (PUCP)",
      degree: "Bachiller en Comunicación Audiovisual",
      dateRange: "2018 - 2024",
      achievements: [
        "Cortometraje Réquiem nominado en Festival Render",
        "Líder de equipo en Lima Game Jam",
        "Proyecto Haus Labs publicado en PubliPUCP",
      ],
    },
  ],

  certifications: [
    {
      name: "Community Management",
      institution: "Instituto Peruano de Publicidad",
      date: "Septiembre 2025",
    },
    {
      name: "Plan Estratégico de Marketing Digital",
      institution: "ESAN",
      date: "Octubre 2024",
    },
    {
      name: "Videomarketing",
      institution: "Centro Digital de Marketing",
      date: "Septiembre 2024",
    },
  ],
};

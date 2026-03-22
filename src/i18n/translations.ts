// src/i18n/translations.ts
export const translations = {
  es: {
    nav: {
      about:      'sobre mí',
      skills:     'skills',
      projects:   'proyectos',
      experience: 'experiencia',
      contact:    'contacto',
    },
    hero: {
      greeting:   'Hola, soy',
      status:     'disponible para trabajo',
      bio:        'Graduado en Ingeniería Informática, apasionado por el desarrollo mobile, backend y la ciberseguridad. Construyo apps que escalan y código que se entiende.',
      cta_primary:'Ver proyectos',
      cta_ghost:  'Contactar',
      typing: [
        'Ingeniero Informático',
        'Backend Developer · Java & Spring',
        'Mobile Developer · Flutter',
        'CTO en MiSintaxis',
        'Open to work 🚀',
      ],
    },
    about: {
      label:  '01 · sobre mí',
      title1: 'Un poco de',
      title2: 'contexto',
      p1:     'Graduado en Ingeniería Informática con más de 2 años de experiencia desarrollando soluciones de software tanto en backend como en mobile. Me especializo en sistemas distribuidos, APIs RESTful y desarrollo Flutter; aunque también me encanta el mundo de la ciberseguridad y de la IA.',
      p2:     'Me interesa especialmente la intersección entre rendimiento, escalabilidad y experiencia de usuario. Actualmente explorando oportunidades en empresas que apuesten por la ingeniería de calidad.',
      tags:   ['📍 Madrid/Murcia, España', '🎓 Ing. Informática', '🌐 ES / EN', '🚀 Open to work'],
      facts:  ['años de experiencia', 'proyectos completados', 'tecnologías principales', 'ganas de aprender'],
    },
    skills: {
      label:   '02 · skills',
      title1:  'Stack',
      title2:  'técnico',
      data:    'Datos & Infra',
      tools:   'Herramientas',
    },
    projects: {
      label:  '03 · proyectos',
      title1: 'Lo que',
      title2: 'he construido',
      items: [
        {
          title: 'MiSintaxis',
          desc:  'App mobile (iOS/Android) con toda la teoría y ejercicios de sintaxis española. Desarrollada en Flutter con Firebase, Google Auth, servidor Python/SQL y control de versiones en GitLab.',
        },
        {
          title: 'MiSintaxis Teacher Web',
          desc:  'Plataforma educativa fullstack en Flutter conectada en tiempo real con la app móvil. Los profesores envían tests, ejercicios y teoría; los alumnos reciben notificaciones vía Firebase Cloud Messaging.',
        },
        {
          title: 'TimesLearning',
          desc:  'App Android en Flutter para enseñar a leer el reloj, orientada a personas con discapacidad intelectual. Diseño accesible e intuitivo con recursos visuales adaptativos.',
        },
        {
          title: 'GymEx',
          desc:  'App móvil de seguimiento de entrenamiento con Flutter y Firebase. Autenticación Google, registro de ejercicios, progreso y estadísticas en tiempo real.',
        },
      ],
    },
    experience: {
      label:   '04 · experiencia',
      title1:  'Trayectoria',
      title2:  'profesional',
      present: 'Actualidad',
      intern:  'Parcial',
      items: [
        {
          date:    '2024 — Actualidad',
          role:    'Backend Software Engineer · Proyecto Factoring',
          company: 'CaixaBank Tech · Madrid (Híbrido)',
          bullets: [
            'Diseño y mantenimiento de microservicios en Java con Spring Boot en entorno financiero de alta criticidad',
            'Liderazgo dentro del proyecto, combinando gestión y desarrollo práctico',
            'Uso de SQL, Docker, OpenAPI/Swagger y programación batch',
          ],
        },
        {
          date:    '2020 — Actualidad',
          role:    'CTO & Software Engineer',
          company: 'Startup MiSintaxis · Murcia',
          bullets: [
            'Desarrollo de app Flutter multiplataforma (iOS/Android) y plataforma web para profesores',
            'Integración con Firebase Auth, Firestore, Cloud Messaging, Storage y Hosting',
            'Liderazgo técnico y metodología Gitflow con prototipado previo (Mockup-driven)',
          ],
        },
        {
          date:    '2023 — 2024',
          role:    'Graduate Researcher',
          company: 'Cybersecurity & Data Science Lab · Universidad de Murcia',
          bullets: [
            'Investigación sobre ataques de desinformación en redes sociales usando el DisArm Framework',
            'Creación de un framework propio basado en DisArm con web de soporte',
            'Participación activa en el proyecto europeo EU4INT',
          ],
        },
        {
          date:    '2022 — 2022',
          role:    'Prácticas Curriculares',
          company: 'Colegio Santa María de la Paz · Murcia',
          bullets: [
            'Desarrollo de software educativo para profesor-alumno con cuestionarios en tiempo real',
            'Cálculo automático de nota y notificación al profesor usando Java Swing',
          ],
        },
      ],
      edu_title:       'Formación',
      edu_degree:      'Grado en Ingeniería Informática · Especialidad en Tecnologías de la Información',
      edu_school:      'Universidad de Murcia',
      bach_edu_degree: 'Bachillerato de Ciencias · Especialidad en Tecnología',
      bach_edu_school: 'Colegio Santa María de la Paz - Jesuitinas',
    },
    contact: {
      label:       '06 · contacto',
      title1:      'Hablemos',
      title2:      '¿trabajamos juntos?',
      text:        'Estoy abierto a nuevas oportunidades o simplemente una charla técnica. Si tienes algo interesante en mente, no dudes en escribirme.',
      label_name:  'nombre',
      label_email: 'email',
      label_msg:   'mensaje',
      ph_name:     'Tu nombre',
      ph_msg:      'Cuéntame en qué puedo ayudarte...',
      submit:      'Enviar mensaje →',
      sent:        '✓ Mensaje enviado',
    },
    footer: {
      copy: '© 2025 Gonzalo · Hecho con Astro',
    },
  },

  en: {
    nav: {
      about:      'about',
      skills:     'skills',
      projects:   'projects',
      experience: 'experience',
      contact:    'contact',
    },
    hero: {
      greeting:    "Hi, I'm",
      status:      'available for work',
      bio:         'Computer Engineering graduate passionate about mobile development, backend systems and cybersecurity. I build apps that scale and code that lasts.',
      cta_primary: 'View projects',
      cta_ghost:   'Get in touch',
      typing: [
        'Computer Engineer',
        'Backend Developer · Java & Spring',
        'Mobile Developer · Flutter',
        'CTO at MiSintaxis',
        'Open to work 🚀',
      ],
    },
    about: {
      label:  '01 · about me',
      title1: 'A bit of',
      title2: 'context',
      p1:     'Computer Engineering graduate with 2+ years of professional experience building backend and mobile software. I specialise in RESTful APIs, Flutter development and distributed systems — with a growing interest in cybersecurity and AI.',
      p2:     "I'm particularly interested in the intersection of performance, scalability and user experience. Currently exploring opportunities at companies that bet on engineering quality.",
      tags:   ['📍 Madrid/Murcia, Spain', '🎓 Computer Engineering', '🌐 ES / EN', '🚀 Open to work'],
      facts:  ['years of experience', 'projects completed', 'core technologies', 'eagerness to learn'],
    },
    skills: {
      label:  '02 · skills',
      title1: 'Tech',
      title2: 'stack',
      data:   'Data & Infra',
      tools:  'Tools',
    },
    projects: {
      label:  '03 · projects',
      title1: 'Things',
      title2: "I've built",
      items: [
        {
          title: 'MiSintaxis',
          desc:  'Cross-platform mobile app (iOS/Android) covering Spanish syntax theory and exercises. Built with Flutter, Firebase, Google Auth and a Python/SQL backend. Version-controlled on GitLab.',
        },
        {
          title: 'MiSintaxis Teacher Web',
          desc:  'Full-stack educational platform in Flutter connected in real time to the mobile app. Teachers send tests, exercises and theory; students receive push notifications via Firebase Cloud Messaging.',
        },
        {
          title: 'TimesLearning',
          desc:  'Android app built with Flutter to teach clock reading, aimed at people with intellectual disabilities. Accessible, intuitive design with adaptive visual resources.',
        },
        {
          title: 'GymEx',
          desc:  'Workout tracking mobile app with Flutter and Firebase. Google authentication, exercise logging, progress tracking and real-time statistics.',
        },
      ],
    },
    experience: {
      label:   '04 · experience',
      title1:  'Professional',
      title2:  'journey',
      present: 'Present',
      intern:  'Part-time',
      items: [
        {
          date:    '2024 — Present',
          role:    'Backend Software Engineer · Factoring Project',
          company: 'CaixaBank Tech · Madrid (Hybrid)',
          bullets: [
            'Design and maintenance of Java Spring Boot microservices in a high-criticality financial environment',
            'Technical leadership on the project, combining people management with hands-on development',
            'Working with SQL, Docker, OpenAPI/Swagger and batch processing',
          ],
        },
        {
          date:    '2020 — Present',
          role:    'CTO & Software Engineer',
          company: 'MiSintaxis Startup · Murcia',
          bullets: [
            'Built a cross-platform Flutter app (iOS/Android) and a real-time teacher web platform',
            'Firebase integration: Auth, Firestore, Cloud Messaging, Storage and Hosting',
            'Technical leadership applying Gitflow and Mockup-driven development',
          ],
        },
        {
          date:    '2023 — 2024',
          role:    'Graduate Researcher',
          company: 'Cybersecurity & Data Science Lab · University of Murcia',
          bullets: [
            'Research on disinformation attacks in social networks using the DisArm Framework',
            'Built a custom framework based on DisArm with a supporting web interface',
            'Active participation in the EU4INT European project',
          ],
        },
        {
          date:    '2022 — 2022',
          role:    'Curricular Internship',
          company: 'Colegio Santa María de la Paz · Murcia',
          bullets: [
            'Developed educational software for real-time teacher–student quizzes',
            'Automatic grade calculation and teacher notifications using Java Swing',
          ],
        },
      ],
      edu_title:       'Education',
      edu_degree:      'BSc Computer Engineering · Information Technologies',
      edu_school:      'Universidad de Murcia',
      bach_edu_degree: 'Science A-levels · Technology specialisation',
      bach_edu_school: 'Colegio Santa María de la Paz - Jesuitinas',
    },
    contact: {
      label:       '06 · contact',
      title1:      "Let's talk",
      title2:      'shall we work together?',
      text:        "I'm open to new opportunities or just a good technical chat. If you have something interesting in mind, feel free to reach out.",
      label_name:  'name',
      label_email: 'email',
      label_msg:   'message',
      ph_name:     'Your name',
      ph_msg:      'Tell me how I can help...',
      submit:      'Send message →',
      sent:        '✓ Message sent',
    },
    footer: {
      copy: '© 2025 Gonzalo · Built with Astro',
    },
  },
} as const;

export type Lang = keyof typeof translations;
export type T = typeof translations.es;

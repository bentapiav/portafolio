# Portafolio Personal

Aplicación web de tipo *Single Page Application* con mi portafolio personal: quién soy, experiencia laboral, estudios, proyectos y formulario de contacto.

## Tecnologías

- React 19 + Vite
- Tailwind CSS (librería de estilos usada en toda la aplicación)
- Vitest + React Testing Library (pruebas automatizadas)
- Arquitectura Atomic Design

## Requisitos

- Node.js 18 o superior (https://nodejs.org)
- npm (se instala junto con Node.js)

## Instalación y ejecución local

```bash
git clone https://github.com/bentapiav/portafolio.git
cd portafolio
npm install
npm run dev
```

Luego abre en el navegador la dirección que muestra la terminal (normalmente http://localhost:5173).

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Levanta el proyecto en modo desarrollo |
| `npm test` | Ejecuta las pruebas automatizadas |
| `npm run build` | Genera la versión de producción |
| `npm run lint` | Revisa el código con ESLint |

## Estructura del proyecto (Atomic Design)

```
src/
├── components/
│   ├── atoms/        Button, Input, Textarea, Label, Heading, Avatar, ExternalLink, Section
│   ├── molecules/    FormField, ExperienceItem, EducationItem, ProjectCard, SocialLinks
│   ├── organisms/    Navbar, HeroSection, ExperienceSection, EducationSection,
│   │                 ProjectsSection, ContactSection, Footer
│   └── templates/    PortfolioTemplate
├── pages/            HomePage
├── hooks/            useContactForm, useProjects
└── data/             portfolio.js (contenido del portafolio)
```

## Hooks utilizados

- `useState`: controla los campos, errores y estado de envío del formulario de contacto.
- `useEffect`: carga la lista de proyectos con limpieza del temporizador, y se usa renderizado condicional (cargando / lista).

## Pruebas

Se validan el renderizado de los organismos principales y el comportamiento del formulario de contacto (errores de validación, correo inválido y envío exitoso).

```bash
npm test
```

## Autor

Benjamin Tapia Valdés
- GitHub: https://github.com/bentapiav
- LinkedIn: https://www.linkedin.com/in/benjamin-tapia-vald%C3%A9s-b80a66344/

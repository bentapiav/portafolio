const links = [
  { label: 'Inicio', href: '#personal' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Estudios', href: '#estudios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
]

const Navbar = ({ name }) => (
  <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
    <nav
      aria-label="Principal"
      className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-6 py-3"
    >
      <span className="font-bold text-indigo-600">{name}</span>
      <ul className="flex flex-wrap gap-4 text-sm font-medium text-slate-700">
        {links.map(({ label, href }) => (
          <li key={href}>
            <a href={href} className="hover:text-indigo-600">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)

export default Navbar

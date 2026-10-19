import { render, screen } from '@testing-library/react'
import HeroSection from './HeroSection'
import ExperienceSection from './ExperienceSection'
import EducationSection from './EducationSection'
import ProjectsSection from './ProjectsSection'
import Footer from './Footer'

describe('HeroSection', () => {
  it('muestra nombre, cargo, descripción y foto', () => {
    render(
      <HeroSection
        name="Ana Pérez"
        title="Desarrolladora"
        description="Descripción de prueba"
        avatar="avatar.png"
      />,
    )

    expect(screen.getByRole('heading', { level: 1, name: 'Ana Pérez' })).toBeInTheDocument()
    expect(screen.getByText('Desarrolladora')).toBeInTheDocument()
    expect(screen.getByText('Descripción de prueba')).toBeInTheDocument()
    expect(screen.getByAltText('Foto de Ana Pérez')).toBeInTheDocument()
  })
})

describe('ExperienceSection', () => {
  it('muestra empresa, cargo y fechas de cada experiencia', () => {
    const experiences = [
      { id: 1, company: 'Empresa X', role: 'Desarrollador', startDate: '2024', endDate: '2025' },
    ]
    render(<ExperienceSection experiences={experiences} />)

    expect(screen.getByText('Empresa X')).toBeInTheDocument()
    expect(screen.getByText('Desarrollador')).toBeInTheDocument()
    expect(screen.getByText('2024 - 2025')).toBeInTheDocument()
  })

  it('muestra un mensaje cuando no hay experiencias', () => {
    render(<ExperienceSection experiences={[]} />)

    expect(screen.getByText(/Aún no tengo experiencia/i)).toBeInTheDocument()
  })
})

describe('EducationSection', () => {
  it('muestra institución, título y año', () => {
    const education = [{ id: 1, institution: 'Instituto X', title: 'Técnico', year: '2024' }]
    render(<EducationSection education={education} />)

    expect(screen.getByText('Instituto X')).toBeInTheDocument()
    expect(screen.getByText('Técnico')).toBeInTheDocument()
    expect(screen.getByText('2024')).toBeInTheDocument()
  })
})

describe('ProjectsSection', () => {
  it('muestra un mensaje de carga mientras los proyectos cargan', () => {
    render(<ProjectsSection projects={[]} isLoading />)

    expect(screen.getByRole('status')).toHaveTextContent('Cargando proyectos')
  })

  it('muestra cada proyecto con su enlace al repositorio', () => {
    const projects = [
      { id: 1, title: 'Mi Proyecto', image: '', repoUrl: 'https://github.com/test/repo' },
    ]
    render(<ProjectsSection projects={projects} />)

    expect(screen.getByText('Mi Proyecto')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Ver repositorio' })).toHaveAttribute(
      'href',
      'https://github.com/test/repo',
    )
  })
})

describe('Footer', () => {
  it('muestra el año actual, los derechos y la información de contacto', () => {
    const year = new Date().getFullYear()
    render(<Footer name="Ana Pérez" email="ana@correo.com" country="Chile" />)

    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument()
    expect(screen.getByText(/Todos los derechos reservados/i)).toBeInTheDocument()
    expect(screen.getByText(/ana@correo.com/)).toBeInTheDocument()
  })
})

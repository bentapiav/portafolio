import Heading from '../atoms/Heading'
import Section from '../atoms/Section'
import ProjectCard from '../molecules/ProjectCard'

const ProjectsSection = ({ projects, isLoading = false }) => (
  <Section id="proyectos">
    <Heading level={2}>Desarrollos y proyectos</Heading>
    {isLoading ? (
      <p role="status" className="mt-6 text-slate-600">
        Cargando proyectos...
      </p>
    ) : (
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ id, ...project }) => (
          <ProjectCard key={id} {...project} />
        ))}
      </div>
    )}
  </Section>
)

export default ProjectsSection

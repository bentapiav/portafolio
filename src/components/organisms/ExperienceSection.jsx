import Heading from '../atoms/Heading'
import Section from '../atoms/Section'
import ExperienceItem from '../molecules/ExperienceItem'

const ExperienceSection = ({ experiences }) => (
  <Section id="experiencia">
    <Heading level={2}>Experiencia laboral</Heading>
    {experiences.length === 0 ? (
      <p className="mt-6 text-slate-600">Aún no tengo experiencia laboral registrada.</p>
    ) : (
      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {experiences.map(({ id, ...item }) => (
          <ExperienceItem key={id} {...item} />
        ))}
      </ul>
    )}
  </Section>
)

export default ExperienceSection

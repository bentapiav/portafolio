import Heading from '../atoms/Heading'
import Section from '../atoms/Section'
import EducationItem from '../molecules/EducationItem'

const EducationSection = ({ education }) => (
  <Section id="estudios">
    <Heading level={2}>Estudios</Heading>
    <ul className="mt-6 grid gap-4 md:grid-cols-2">
      {education.map(({ id, ...item }) => (
        <EducationItem key={id} {...item} />
      ))}
    </ul>
  </Section>
)

export default EducationSection

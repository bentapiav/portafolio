import Avatar from '../atoms/Avatar'
import Heading from '../atoms/Heading'
import Section from '../atoms/Section'

const HeroSection = ({ name, title, description, avatar }) => (
  <Section id="personal">
    <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
      <Avatar src={avatar} alt={`Foto de ${name}`} />
      <div className="space-y-3">
        <Heading level={1}>{name}</Heading>
        <p className="text-xl font-medium text-indigo-600">{title}</p>
        <p className="max-w-xl text-slate-600">{description}</p>
      </div>
    </div>
  </Section>
)

export default HeroSection

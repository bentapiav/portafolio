import Heading from '../atoms/Heading'
import ExternalLink from '../atoms/ExternalLink'

const ProjectCard = ({ title, image, repoUrl }) => (
  <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
    {image ? (
      <img src={image} alt={`Vista previa de ${title}`} className="h-44 w-full object-cover" />
    ) : (
      <div
        role="img"
        aria-label={`Vista previa de ${title}`}
        className="flex h-44 w-full items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500 text-5xl text-white"
      >
        {'</>'}
      </div>
    )}
    <div className="p-5">
      <Heading level={3}>{title}</Heading>
      <div className="mt-3">
        <ExternalLink href={repoUrl}>Ver repositorio</ExternalLink>
      </div>
    </div>
  </article>
)

export default ProjectCard

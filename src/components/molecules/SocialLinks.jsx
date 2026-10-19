import ExternalLink from '../atoms/ExternalLink'

const SocialLinks = ({ links }) => (
  <ul className="flex flex-wrap gap-4">
    {links.map(({ label, href }) => (
      <li key={label}>
        <ExternalLink href={href}>{label}</ExternalLink>
      </li>
    ))}
  </ul>
)

export default SocialLinks
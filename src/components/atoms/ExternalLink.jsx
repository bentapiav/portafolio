const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-indigo-600 hover:underline"
  >
    {children}
  </a>
)

export default ExternalLink

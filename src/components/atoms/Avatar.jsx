const Avatar = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="h-40 w-40 rounded-full object-cover ring-4 ring-indigo-200"
  />
)

export default Avatar

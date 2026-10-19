const styles = {
  1: 'text-4xl font-bold',
  2: 'text-3xl font-bold',
  3: 'text-xl font-semibold',
}

const Heading = ({ children, level = 2 }) => {
  const Tag = `h${level}`
  return <Tag className={`${styles[level]} text-slate-900`}>{children}</Tag>
}

export default Heading

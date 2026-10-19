import Heading from '../atoms/Heading'

const EducationItem = ({ institution, title, year }) => (
  <li className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <Heading level={3}>{title}</Heading>
    <p className="font-medium text-indigo-600">{institution}</p>
    {year && <p className="text-sm text-slate-500">{year}</p>}
  </li>
)

export default EducationItem

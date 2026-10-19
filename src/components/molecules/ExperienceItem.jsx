import Heading from '../atoms/Heading'

const ExperienceItem = ({ company, role, startDate, endDate }) => (
  <li className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <Heading level={3}>{role}</Heading>
    <p className="font-medium text-indigo-600">{company}</p>
    <p className="text-sm text-slate-500">
      {startDate} - {endDate}
    </p>
  </li>
)

export default ExperienceItem

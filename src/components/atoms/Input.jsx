const Input = ({ id, name, type = 'text', value, onChange, placeholder, hasError = false }) => (
  <input
    id={id}
    name={name}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    aria-invalid={hasError}
    className={`w-full rounded-lg border bg-white px-4 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-indigo-500 ${hasError ? 'border-red-500' : 'border-slate-300'}`}
  />
)

export default Input

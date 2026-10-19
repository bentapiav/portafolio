import Label from '../atoms/Label'
import Input from '../atoms/Input'
import Textarea from '../atoms/Textarea'

const FormField = ({ id, name, label, type = 'text', value, onChange, error, multiline = false }) => {
  const Field = multiline ? Textarea : Input

  return (
    <div className="mb-4">
      <Label htmlFor={id}>{label}</Label>
      <Field
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        hasError={Boolean(error)}
      />
      {error && (
        <p role="alert" className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

export default FormField

import { useState } from 'react'

const initialValues = { name: '', email: '', message: '' }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const validate = ({ name, email, message }) => {
  const errors = {}
  if (name.trim().length < 2) errors.name = 'Ingresa tu nombre (mínimo 2 caracteres).'
  if (!emailPattern.test(email.trim())) errors.email = 'Ingresa un correo válido.'
  if (message.trim().length < 10) errors.message = 'El mensaje debe tener al menos 10 caracteres.'
  return errors
}

const useContactForm = () => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = ({ target: { name, value } }) => {
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    setIsSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true)
      setValues(initialValues)
    }
  }

  return { values, errors, isSubmitted, handleChange, handleSubmit }
}

export default useContactForm

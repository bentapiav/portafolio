import Button from '../atoms/Button'
import Heading from '../atoms/Heading'
import Section from '../atoms/Section'
import FormField from '../molecules/FormField'
import SocialLinks from '../molecules/SocialLinks'
import useContactForm from '../../hooks/useContactForm'

const ContactSection = ({ socialLinks }) => {
  const { values, errors, isSubmitted, handleChange, handleSubmit } = useContactForm()

  return (
    <Section id="contacto">
      <Heading level={2}>Contacto</Heading>
      <div className="mt-6 space-y-6">
        <SocialLinks links={socialLinks} />
        <form
          onSubmit={handleSubmit}
          noValidate
          aria-label="Formulario de contacto"
          className="max-w-xl"
        >
          <FormField
            id="name"
            name="name"
            label="Nombre"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
          />
          <FormField
            id="email"
            name="email"
            type="email"
            label="Correo"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
          />
          <FormField
            id="message"
            name="message"
            label="Mensaje"
            multiline
            value={values.message}
            onChange={handleChange}
            error={errors.message}
          />
          <Button type="submit">Enviar mensaje</Button>
          {isSubmitted && (
            <p role="status" className="mt-4 font-medium text-green-600">
              ¡Gracias! Tu mensaje fue enviado correctamente.
            </p>
          )}
        </form>
      </div>
    </Section>
  )
}

export default ContactSection

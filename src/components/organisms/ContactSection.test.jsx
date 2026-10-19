import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactSection from './ContactSection'

const socialLinks = [{ label: 'GitHub', href: 'https://github.com/test' }]

const fillForm = async (user, { name, email, message }) => {
  await user.type(screen.getByLabelText('Nombre'), name)
  await user.type(screen.getByLabelText('Correo'), email)
  await user.type(screen.getByLabelText('Mensaje'), message)
}

describe('ContactSection', () => {
  it('muestra los enlaces a redes sociales', () => {
    render(<ContactSection socialLinks={socialLinks} />)

    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/test',
    )
  })

  it('muestra errores de validación si se envía el formulario vacío', async () => {
    const user = userEvent.setup()
    render(<ContactSection socialLinks={socialLinks} />)

    await user.click(screen.getByRole('button', { name: 'Enviar mensaje' }))

    expect(screen.getAllByRole('alert')).toHaveLength(3)
  })

  it('muestra un error si el correo no es válido', async () => {
    const user = userEvent.setup()
    render(<ContactSection socialLinks={socialLinks} />)

    await fillForm(user, { name: 'Ana', email: 'correo-malo', message: 'Mensaje de prueba largo' })
    await user.click(screen.getByRole('button', { name: 'Enviar mensaje' }))

    expect(screen.getByText('Ingresa un correo válido.')).toBeInTheDocument()
  })

  it('confirma el envío y limpia los campos cuando los datos son válidos', async () => {
    const user = userEvent.setup()
    render(<ContactSection socialLinks={socialLinks} />)

    await fillForm(user, {
      name: 'Ana',
      email: 'ana@correo.com',
      message: 'Mensaje de prueba largo',
    })
    await user.click(screen.getByRole('button', { name: 'Enviar mensaje' }))

    expect(screen.getByRole('status')).toHaveTextContent('enviado correctamente')
    expect(screen.getByLabelText('Nombre')).toHaveValue('')
  })
})


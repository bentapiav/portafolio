import { describe, it, expect } from 'vitest'
import { validate } from './useContactForm'

describe('validate', () => {
  it('devuelve errores para todos los campos vacíos', () => {
    const errors = validate({ name: '', email: '', message: '' })

    expect(Object.keys(errors)).toEqual(['name', 'email', 'message'])
  })

  it('no devuelve errores cuando los datos son válidos', () => {
    const errors = validate({
      name: 'Ana',
      email: 'ana@correo.com',
      message: 'Mensaje de prueba largo',
    })

    expect(errors).toEqual({})
  })
})


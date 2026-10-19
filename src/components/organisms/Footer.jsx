const Footer = ({ name, email, country }) => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-600">
      <p>
        © {year} {name}. Todos los derechos reservados.
      </p>
      <p className="mt-1">
        {email} · {country}
      </p>
    </footer>
  )
}

export default Footer

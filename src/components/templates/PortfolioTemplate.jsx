const PortfolioTemplate = ({ header, footer, children }) => (
  <div className="min-h-screen bg-slate-50 text-slate-800">
    {header}
    <main>{children}</main>
    {footer}
  </div>
)

export default PortfolioTemplate

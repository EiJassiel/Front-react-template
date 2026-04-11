import env from '../config/env'

function MainSection() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h2 className="hero-title">Bienvenido a tu Plantilla React</h2>
        <p className="hero-subtitle">Ágil, moderna y lista para personalizar</p>
        
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => window.open(env.useTemplateUrl, '_blank')}>
            Utilizar plantilla
          </button>
          <button className="btn btn-secondary" onClick={() => window.open(env.codespaceUrl, '_blank')}>
            Abrir en Codespaces
          </button>
        </div>
      </div>

      <div className="hero-decoration">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </div>
  )
}

export default MainSection
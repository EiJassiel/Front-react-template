import { useState } from 'react'
import env from '../config/env'

function MainSection() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [message, setMessage] = useState('')


  const handleExplore = () => {
    const target = document.getElementById('documentacion')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    setMessage('La documentacion esta lista para revisarse en la misma pagina.')
    setTimeout(() => setMessage(''), 2200)
  }

  return (
    <section className={`hero ${isDarkMode ? 'dark' : 'dark'}`}>

      <div className="hero-content">
        <span className="hero-kicker">Plantilla base</span>
        <h2 className="hero-title">Bienvenido a tu Plantilla React</h2>
        <p className="hero-subtitle">
          Una portada simple y profesional para presentar tu proyecto antes de entrar a la
          documentacion.
        </p>

        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => window.open(env.useTemplateUrl, '_blank')}>
            Utilizar plantilla
          </button>
          <button className="btn btn-secondary" onClick={() => window.open(env.codespaceUrl, '_blank')}>
            Abrir en Codespaces
          </button>
          <button className="btn btn-secondary" onClick={handleExplore}>
            Ver documentacion
          </button>
        </div>

        {message && <p className="message info">{message}</p>}
      </div>
    </section>
  )
}

export default MainSection

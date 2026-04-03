import { useState } from 'react'
import env from '../config/env'

function MainSection() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle('dark-mode')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setMessage(`¡Gracias ${email}! Nos pondremos en contacto pronto.`)
      setEmail('')
      setTimeout(() => {
        setSubmitted(false)
        setMessage('')
      }, 3000)
    }
  }

  const handleExplore = () => {
    setMessage('¡Comienza a explorar la plantilla!')
    setTimeout(() => setMessage(''), 2000)
  }

  return (
    <div className={`hero ${isDarkMode ? 'dark' : 'light'}`}>
      <button 
        className="theme-toggle" 
        onClick={handleToggleTheme}
        title="Cambiar tema"
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>

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


        {message && (
          <p className={`message ${submitted ? 'success' : 'info'}`}>
            {message}
          </p>
        )}
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

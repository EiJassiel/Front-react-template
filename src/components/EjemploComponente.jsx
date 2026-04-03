import { useState } from 'react'
import utpLogo from '../assets/utp.png'
import '../styles/EjemploComponente.css'

export default function EjemploComponente() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setCount((currentCount) => currentCount + 1)
  }

  return (
    <div className="DivComponentePrueba">
      <h1>Ejemplo de Componente</h1>
      <img src={utpLogo} alt="UTP Logo" id="ImagenLogoUtp" />
      <p>Count: {count}</p>
      <button onClick={handleClick} id="ButtunCount">
        Prueba de UI
      </button>
      <input
        id="InputText"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Escribe tu nombre"
      />
      <p>Nombre: {name}</p>
      <button onClick={() => setIsActive((currentValue) => !currentValue)} id="ButtonToggle">
        {isActive ? 'Desactivar' : 'Activar'}
      </button>
      <p>Estado: {isActive ? 'Activo' : 'Inactivo'}</p>
    </div>
  )
}

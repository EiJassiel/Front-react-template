import { useState } from 'react'

function DemoEjemplos() {
  const [mostrar, setMostrar] = useState(false)
  
  // Ejemplo 1: Contador
  const [contador, setContador] = useState(0)
  
  // Ejemplo 2: Input
  const [nombre, setNombre] = useState('')
  
  // Ejemplo 3: Lista dinámica
  const [nuevaTech, setNuevaTech] = useState('')
  const [tecnologias, setTecnologias] = useState(['React', 'Vite', 'Bun'])

  const agregarTecnologia = () => {
    if (nuevaTech.trim()) {
      if (!tecnologias.includes(nuevaTech.trim())) {
        setTecnologias([...tecnologias, nuevaTech.trim()])
        setNuevaTech('')
      } else {
        alert(' Esa tecnología ya existe en la lista ')
      }
    }
  }

  const eliminarTecnologia = (index) => {
    setTecnologias(tecnologias.filter((_, i) => i !== index))
  }

  return (
    <div className="demo-ejemplos">
      <button 
        className="btn btn-secondary" 
        onClick={() => setMostrar(!mostrar)}
      >
        {mostrar ? 'Ocultar ejemplos' : 'Mostrar ejemplos'}
      </button>

      {mostrar && (
        <div className="ejemplos-contenido">
          
          {/* Ejemplo 1: Contador con useState */}
          <div className="ejemplo-item">
            <h3>1. Contador (useState)</h3>
            <p className="contador-valor">{contador}</p>
            <button 
              className="btn btn-primary"
              onClick={() => setContador(contador + 1)}
            >
              Incrementar
            </button>
          </div>

          {/* Ejemplo 2: Input con two-way binding */}
          <div className="ejemplo-item">
            <h3>2. Input (two-way binding)</h3>
            <div className="input-centered">
              <input
                type="text"
                className="form-input"
                placeholder="Escribe tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <p className="input-result">Hola, {nombre || 'estudiante'} 👋</p>
          </div>

          {/* Ejemplo 3: Lista dinámica con .map() */}
          <div className="ejemplo-item">
            <h3>3. Lista dinámica</h3>
            <div className="lista-add-row">
              <input
                type="text"
                className="form-input"
                placeholder="Nueva tecnología"
                value={nuevaTech}
                onChange={(e) => setNuevaTech(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && agregarTecnologia()}
              />
              <button 
                className="btn btn-primary"
                onClick={agregarTecnologia}
              >
                Agregar
              </button>
            </div>
            <ul className="lista-tech">
              {tecnologias.map((tech, index) => (
                <li key={index}>
                  {tech}
                  <button 
                    className="btn-eliminar"
                    onClick={() => eliminarTecnologia(index)}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>
      )}
    </div>
  )
}

export default DemoEjemplos
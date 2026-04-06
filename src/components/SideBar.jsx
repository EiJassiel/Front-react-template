import React, { useState, useContext } from 'react'
import { DocumentationContext } from '../context/DocumentationContext'
import styles from '../styles/SideBar.module.css'

export default function SideBar() {
  const [expandedSection, setExpandedSection] = useState('quick-start')
  const { setSelectedSection, setSelectedItem } = useContext(DocumentationContext)

  const sections = {
    'quick-start': {
      title: 'Inicio rapido',
      items: [
        { label: 'Instalacion', id: 'instalacion' },
        { label: 'Ejecutar en desarrollo', id: 'ejecutar' },
      ],
    },
    'structure': {
      title: 'Estructura',
      items: [
        { label: 'Carpetas del proyecto', id: 'carpetas' },
        { label: 'Componentes', id: 'componentes' },
        { label: 'Flujo de la app', id: 'flujo' },
      ],
    },
    'config': {
      title: 'Configuracion',
      items: [
        { label: 'Variables de entorno', id: 'env' },
        { label: 'Temas', id: 'temas' },
        { label: 'CSS Modules', id: 'css-modules' },
      ],
    },
    'development': {
      title: 'Desarrollo',
      items: [
        { label: 'Crear componentes', id: 'crear-comp' },
        { label: 'Agregar estilos', id: 'estilos' },
        { label: 'Agregar paginas', id: 'paginas' },
      ],
    },
    'deploy': {
      title: 'Deploy',
      items: [
        { label: 'Build de produccion', id: 'build' },
        { label: 'Desplegar', id: 'desplegar' },
        { label: 'GitHub Pages', id: 'gh-pages' },
      ],
    },
  }

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
    setSelectedSection(section)
    const firstItem = sections[section]?.items[0]?.id
    if (firstItem) setSelectedItem(firstItem)
  }

  const handleItemClick = (sectionKey, itemId) => {
    setSelectedSection(sectionKey)
    setSelectedItem(itemId)
  }

  return (
    <aside className={styles.sideBar}>
      <a className={styles.homeLink} href="#center">
        Bienvenido a tu Plantilla React
      </a>
      <h3 className={styles.title}>Documentacion</h3>

      <nav className={styles.nav}>
        {Object.entries(sections).map(([key, section]) => (
          <div key={key} className={styles.section}>
            <button className={styles.sectionBtn} onClick={() => toggleSection(key)}>
              {section.title}
              <span className={`${styles.arrow} ${expandedSection === key ? styles.open : ''}`}>
                ▸
              </span>
            </button>

            {expandedSection === key && (
              <ul className={styles.itemsList}>
                {section.items.map((item) => (
                  <li key={item.id}>
                    <button
                      className={styles.link}
                      onClick={() => handleItemClick(key, item.id)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}

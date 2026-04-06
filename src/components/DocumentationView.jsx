import React, { useContext, useEffect } from 'react'
import { DocumentationContext } from '../context/DocumentationContext'
import { documentationContent } from '../data/documentationData'
import styles from '../styles/Documentation.module.css'

export default function DocumentationView() {
  const { selectedSection, selectedItem } = useContext(DocumentationContext)
  const section = documentationContent[selectedSection]

  useEffect(() => {
    if (!selectedItem) return

    const target = document.getElementById(`doc-${selectedItem}`)
    if (!target) return

    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [selectedItem, selectedSection])

  if (!section) {
    return <div className={styles.noContent}>Selecciona una seccion</div>
  }

  return (
    <article className={styles.container} id="documentacion">
      <div className={styles.content}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Documentacion</span>
          <h1 className={styles.sectionTitle}>{section.title}</h1>
          <p className={styles.sectionIntro}>
            Cada apartado de este bloque se muestra seguido para mantener una lectura continua,
            clara y facil de revisar.
          </p>
        </div>

        <div className={styles.documentationStack}>
          {Object.entries(section.items).map(([key, subItem]) => (
            <section
              key={key}
              id={`doc-${key}`}
              className={`${styles.documentationSection} ${selectedItem === key ? styles.activeSection : ''}`}
            >
              <div className={styles.documentationMeta}>
                <span className={styles.sectionLabel}>Subseccion</span>
                <h2 className={styles.itemTitle}>{subItem.title}</h2>
              </div>
              <div
                className={styles.documentation}
                dangerouslySetInnerHTML={{ __html: subItem.content }}
              />
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}

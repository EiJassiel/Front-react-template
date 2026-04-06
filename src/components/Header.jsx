import { useState } from 'react'
import env from '../config/env'
import styles from '../styles/Header.module.css'

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle('dark-mode')
  }

  return (
    <header className={`${styles.header} ${isDarkMode ? styles.dark : styles.dark}`}>
      <div className={styles.name}>
        <h1 className={styles.title}>{env.appName}</h1>
      </div>

      <div className={styles.actions}>
        <button
          className={`${styles.btn} ${styles.btnPrimary}`}
          onClick={() => window.open(env.docsUrl, '_blank')}
        >
          React Docs
        </button>
      </div>
    </header>
  )
}

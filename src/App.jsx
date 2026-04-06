import HomePage from './pages/HomePage'
import Header from './components/Header'
import SideBar from './components/SideBar'
import DocumentationView from './components/DocumentationView'
import { DocumentationProvider } from './context/DocumentationContext'
import styles from './styles/App.module.css'

function App() {
  return (
    <DocumentationProvider>
      <div className={styles.appContainer}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.sidebar}>
          <SideBar />
        </div>
        <main className={styles.main}>
          <HomePage />
          <DocumentationView />
        </main>
      </div>
    </DocumentationProvider>
  )
}

export default App

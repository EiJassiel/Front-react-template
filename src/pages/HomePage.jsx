import MainSection from '../components/MainSection'
import env from '../config/env'
import '../styles/home.css'

function HomePage() {
  return (
    <section id="center">
      <MainSection />
      <div className="home-summary">
        <h1>{env.appName}</h1>
        <p>{env.appDescription}</p>
      </div>
    </section>
  )
}

export default HomePage

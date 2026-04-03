import MainSection from '../components/MainSection'
import env from '../config/env'
import AppLayout from '../layouts/AppLayout'
import '../styles/home.css'

function HomePage() {
  return (
    <AppLayout>
      <section id="center">
        <MainSection />
        <div>
          <h1>{env.appName}</h1>
          <p>{env.appDescription}</p>
        </div>
      </section>
    </AppLayout>
  )
}

export default HomePage

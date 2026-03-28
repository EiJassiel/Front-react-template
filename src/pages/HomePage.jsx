import HeroDisplay from '../components/HeroDisplay'
import env from '../config/env'
import ResourcePanel from '../components/ResourcePanel'
import useCounter from '../hooks/useCounter'
import AppLayout from '../layouts/AppLayout'
import { templateGroups } from '../services/templateData'
import '../styles/home.css'

function HomePage() {
  const { count, increment } = useCounter()

  return (
    <AppLayout>
      <section id="center">
        <HeroDisplay />
        <div>
          <h1>{env.appName}</h1>
          <p>
            {env.appDescription}
          </p>
          <p className="home-page__hint">
            Edit <code>src/pages/HomePage.jsx</code>, <code>.env</code> and save to test{' '}
            <code>HMR</code>
          </p>
        </div>
        <button className="counter" onClick={increment}>
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        {templateGroups.map((group) => (
          <ResourcePanel key={group.id} group={group} />
        ))}
      </section>
    </AppLayout>
  )
}

export default HomePage

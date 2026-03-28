import heroImg from '../assets/hero.png'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import utpLogo from '../assets/utp.png'


function HeroDisplay() {
  return (
    <div className="hero">
      <img src={heroImg} className="base" width="170" height="179" alt="" />
      <img src={reactLogo} className="framework" alt="React logo" />
      <img src={viteLogo} className="vite" alt="Vite logo" />
      <img src={utpLogo} className="utp" alt="UTP logo" />
    </div>
  )
}

export default HeroDisplay

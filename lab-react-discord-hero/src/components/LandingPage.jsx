
import logo from '../assets/discord-logo-white.png'
import menuIcon from '../assets/menu-icon.png'
import background from '../assets/discord-background.png'

export default function LandingPage() {
  return (
    <div className='landing-page-container'>
    <nav>
      <img className="logo" src={logo} />
      <img className='menu-icon' src={menuIcon} />
    </nav>
    <div className='landing'>
    <h1>IMAGINE A PLACE</h1>
    <img className='landing-img' src={background} />

    </div>


    </div>
  )
}

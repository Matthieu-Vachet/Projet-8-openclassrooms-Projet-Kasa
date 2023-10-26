import { Link, useLocation } from 'react-router-dom'
import KasaLogo from '../../assets/logo/logo.svg'
import '../../style/Header/Header.css'

function Header() {
  const location = useLocation()

  return (
    <nav className="header-container">
      <Link to="/">
        <img className="header-logo" src={KasaLogo} alt="Logo Kasa" />
      </Link>
      <div className="header-link">
        <Link
          className={`text-link ${location.pathname === '/' ? 'active' : ''}`}
          to="/"
        >
          Acceuil
        </Link>
        <Link
          className={`text-link ${
            location.pathname === '/apropos' ? 'active' : ''
          }`}
          to="/apropos"
        >
          A propos
        </Link>
      </div>
    </nav>
  )
}

export default Header

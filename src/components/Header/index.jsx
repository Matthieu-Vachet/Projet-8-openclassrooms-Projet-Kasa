/**
 * Composant Header - En-tête avec un logo et des liens de navigation.
 * @returns {JSX.Element} L'en-tête.
 */

import { Link, useLocation } from 'react-router-dom'
import KasaLogo from '../../assets/logo/logo.svg'
// import '../../style/components/Header/Header.scss'

function Header() {
  // Utilisation de useLocation pour déterminer la page actuelle
  const location = useLocation()

  return (
    <header className="header-container">
      <Link to="/">
        <img className="header-logo" src={KasaLogo} alt="Logo Kasa" />
      </Link>
      <nav className="header-link">
        {/* Liens de navigation vers la page d'accueil et la page "À propos" */}
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
      </nav>
    </header>
  )
}

export default Header

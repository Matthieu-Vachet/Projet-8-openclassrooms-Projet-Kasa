/**
 * Composant Cards - Composant de carte avec une image et un titre.
 * @param {Object} props - Les propriétés de la carte.
 * @param {string} props.title - Le titre de la carte.
 * @param {string} props.picture - L'URL de l'image de la carte.
 * @returns {JSX.Element} Le composant de carte.
 */

import { NavLink } from 'react-router-dom'
// import '../../style/components/Cards/Cards.scss'

function Cards({ title, picture, id }) {
  return (
    <div className="card-content">
      <NavLink to={`/Logements/${id}`}>
        <img className="card-cover" src={picture} alt={title} />
        <div className="card-title-container">
          <span className="card-title">{title}</span>
        </div>
      </NavLink>
    </div>
  )
}

// Propriétés par défaut au cas où elles ne sont pas fournies
Cards.defaultProps = {
  label: '',
  title: '',
  picture: '',
}

export default Cards

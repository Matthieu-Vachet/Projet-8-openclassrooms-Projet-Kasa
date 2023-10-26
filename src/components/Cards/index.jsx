import PropTypes from 'prop-types'
import '../../style/Reset/Reset.css'
import '../../style/Cards/Cards.css'

/**
 * Retourne un composant Cards (Carte) avec une image et un titre
 * @param {Object} props - Les propriétés de la carte.
 * @param {string} props.title - Le titre de la carte.
 * @param {string} props.picture - L'URL de l'image de la carte.
 * @returns {JSX.Element} Le composant de carte.
 */

function Cards({ title, picture }) {
  return (
    <div className="card-content">
      <img className="card-cover" src={picture} alt={title} />
      <div className="card-title-container">
        <span className="card-title">{title}</span>
      </div>
    </div>
  )
}

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Cards.defaultProps = {
  label: '',
  title: '',
  picture: '',
}

export default Cards

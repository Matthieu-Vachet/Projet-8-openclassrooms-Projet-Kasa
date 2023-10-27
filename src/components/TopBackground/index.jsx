import PropTypes from 'prop-types'
import '../../style/Reset/Reset.css'
import '../../style/TopBackground/TopBackground.css'

/**
 * Composant avec image sous header.
 * @returns {JSX.Element} Le composant de fond.
 */

function TopBackground({ picture, alt, title }) {
  return (
    <div className="background-container">
      <img
        className="background-img"
        src={picture}
        alt={alt}
      />
      <h1 className="background-title">{title}</h1>
    </div>
  )
}

TopBackground.propTypes = {
  picture: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default TopBackground
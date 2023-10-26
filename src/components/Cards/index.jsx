import PropTypes from 'prop-types'
import '../../Style/Cards/style.css'

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

import { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
// import '../../style/components/Collapse/Collapse.css'


/**
 * Retourne un composant de collapse avec un titre et un contenu.
 * @param {string} name - Le titre du collapse.
 * @param {string} content - Le contenu du collapse.
 * @returns {JSX.Element} Le composant de collapse.
 */


function Collapse({ name, content }) {
  const [isOpen, setIsOpen] = useState(true)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='collapse-container'>
      <div className='collapse-title'>
        <p>{name}</p>
        <button onClick={toggleCollapse} className={isOpen ? 'close' : 'open'}>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      </div>
      <div className={`collapse-content ${isOpen ? 'close' : 'open'}`}>
        {!isOpen && <p>{content}</p>}
      </div>
    </div>
  )
}

Collapse.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Collapse

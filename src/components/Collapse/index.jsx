/**
 * Composant Collapse - Composant de collapse avec un titre et un contenu.
 * @param {string} name - Le titre du collapse.
 * @param {string} content - Le contenu du collapse.
 * @returns {JSX.Element} Le composant de collapse.
 */

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
// import '../../style/components/Collapse/Collapse.scss';

function Collapse({ name, content }) {
  // Utilisation de useState pour gérer l'état d'ouverture/fermeture du collapse
  const [isOpen, setIsOpen] = useState(true)

  const toggleCollapse = () => {
    // Fonction pour basculer l'état d'ouverture/fermeture
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse-container">
      <div className="collapse-title">
        <p>{name}</p>
        <button onClick={toggleCollapse} className={isOpen ? 'close' : 'open'}>
          {/* Icône de flèche vers le haut pour ouvrir/fermer le collapse */}
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      </div>
      <div className={`collapse-content ${isOpen ? 'close' : 'open'}`}>
        {/* Affichage du contenu du collapse s'il est ouvert */}
        {!isOpen && <div className="collapse-content-text">{content}</div>}
      </div>
    </div>
  )
}

export default Collapse

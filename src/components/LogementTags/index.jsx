/**
 * Composant LogementTag - Affiche les balises associées à un logement.
 * @returns {JSX.Element} Le composant LogementTag.
 */

import { useParams } from 'react-router-dom'
import data from '../../datas/logements.json'
// import '../../style/components/LogementTags/LogementTags.scss';

function LogementTag() {
  const { id } = useParams()
  const logements = data.find((logement) => logement.id === id)

  return (
    <div className="logements-tags-container">
      {/* Map sur les balises du logement pour les afficher en tant que composants LogementTag */}
      {logements.tags.map((tag, index) => (
        <span key={index} className="logements-tag">
          {tag}
        </span>
      ))}
    </div>
  )
}

export default LogementTag

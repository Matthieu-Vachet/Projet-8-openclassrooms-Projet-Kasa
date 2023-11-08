/**
 * Composant Logement - Affiche les détails d'un logement.
 * @returns {JSX.Element} Le composant Logement.
 */

import { useParams } from 'react-router-dom'
import data from '../../datas/logements.json'
import Carrousel from '../Carrousel'
import TitleLogement from '../TitleLogement'
import LogementTag from '../LogementTags'
import LogementProfil from '../LogementProfil'
import LogementRating from '../LogementRating'
import Collapse from '../Collapse'
// import '../../style/components/FicheLogements/FicheLogements.scss'
// import '../../style/components/Collapse/Collapse.scss'

const Logement = () => {
  const { id } = useParams()
  const logement = data.find((logement) => logement.id === id)

  return (
    <div className="fiche-logement-mobile">
      {/* Affichage du carrousel d'images du logement */}
      <Carrousel id={logement.id} images={logement.pictures} />

      <div className="first-container">
        <div>
          {/* Affichage du titre et du sous-titre du logement */}
          <TitleLogement title={logement.title} subtitle={logement.location} />
          {/* Affichage des balises du logement avec le composant LogementTag */}
          <LogementTag />
        </div>

        <div className="logement-profil-mobile">
          {/* Affichage du profil de l'hôte avec le composant LogementProfil */}
          <LogementProfil
            id={logement.id}
            hostPicture={logement.host.picture}
            hostName={logement.host.name}
          />
          {/* Affichage de la notation du logement avec le composant LogementRating */}
          <LogementRating rating={logement.rating} />
        </div>
      </div>

      <div className="second-container">
        {/* Affichage de la description du logement et de ses équipements avec le composant Collapse */}
        <Collapse
          className="collapse-container"
          name="Description"
          content={logement.description}
        />
        <Collapse
          className="collapse-container"
          name="Équipements"
          content={logement.equipments.map((equipment, index) => (
            <ul key={index}>{equipment}</ul>
          ))}
        />
      </div>
    </div>
  )
}

export default Logement

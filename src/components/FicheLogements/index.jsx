import { useParams } from 'react-router-dom'
import data from '../../datas/logements.json'
import Carrousel from '../Carrousel'
import TitleLogement from '../TitleLogement'
import LogementTag from '../LogementTags'
import LogementProfil from '../LogementProfil'
import LogementRating from '../LogementRating'
import Collapse from '../Collapse'
import '../../style/components/FicheLogements/FicheLogements.scss'
import '../../style/components/Collapse/Collapse.scss'

const Logement = () => {
  const { id } = useParams()
  const logement = data.find((logement) => logement.id === id)

  return (
    <div className="fiche-logement-mobile">
      <Carrousel id={logement.id} images={logement.pictures} />

      <div className="first-container">
        <div>
          <TitleLogement title={logement.title} subtitle={logement.location} />
          <LogementTag />
        </div>

        <div className="logement-profil-mobile">
          <LogementProfil
            id={logement.id}
            hostPicture={logement.host.picture}
            hostName={logement.host.name}
          />
          <LogementRating rating={logement.rating} />
        </div>
      </div>

      <div className="second-container">
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

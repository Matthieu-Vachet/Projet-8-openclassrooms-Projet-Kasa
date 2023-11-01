import { useParams } from 'react-router-dom'
import data from '../../datas/logements.json'
import Carrousel from '../Carrousel'
import TitleLogement from '../TitleLogement'
import LogementTag from '../LogementTags'
import LogementProfil from '../LogementProfil'
import LogementRating from '../LogementRating'
import '../../style/components/FicheLogements/FicheLogements.scss'


const FicheLogement = () => {
  const { id } = useParams()
  const logements = data.find((logement) => logement.id === id)


  return (
    <div>
      <Carrousel id={logements.id} images={logements.pictures} />
      <div className='first-container'>
      <div>
        <TitleLogement title={logements.title} subtitle={logements.location} />
        <LogementTag />
      </div>
      <div>
        <LogementProfil
          id={logements.id}
          hostPicture={logements.host.picture}
          hostName={logements.host.name}
        />
        <LogementRating rating={logements.rating} />
      </div>
      </div>
    </div>
  )
}

export default FicheLogement

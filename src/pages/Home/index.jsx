import Background from '../../components/Background'
import Cards from '../../components/Cards'
import Data from '../../datas/logements.json'
import '../../style/Reset/Reset.css'
import '../../style/Home/Home.css'
import '../../style/Cards/Cards.css'

/**
 * Retourne la page d'accueil avec une image de fond (Background), des cartes de logements (Cards) et des données provenant d'un fichier JSON.
 * @returns {JSX.Element} La page d'accueil.
 */

function Home() {
  return (
    <div className="home-container">
      <Background />
      <div className="cards-container">
        {Data.map((logements, index) => (
          <Cards
            key={`${logements.id}-${index}`}
            title={logements.title}
            picture={logements.cover}
          />
        ))}
      </div>
    </div>
  )
}

export default Home

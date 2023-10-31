import TopBackground from '../../components/TopBackground'
import Cards from '../../components/Cards'
import Footer from '../../components/Footer'
import Data from '../../datas/logements.json'
import ImageBackground from '../../assets/images/IMG.svg'

/**
 * Retourne la page d'accueil avec une image de fond (Background), des cartes de logements (Cards) et des données provenant d'un fichier JSON.
 * @returns {JSX.Element} La page d'accueil.
 */

function Home() {
  return (
    <div className="home-container">
      <TopBackground
        picture={ImageBackground}
        alt="Image de falaise"
        title="Chez vous, partout et ailleurs"
      />
      <div className="cards-container">
        {Data.map((logements, index) => (
          <Cards
            key={`${logements.id}-${index}`}
            id={logements.id}
            title={logements.title}
            picture={logements.cover}
          />
        ))}
      </div>
      {/* Composant bas de page (Footer) */}
      <Footer />
    </div>
  )
}

export default Home

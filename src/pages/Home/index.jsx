import TopBackground from '../../components/TopBackground'
import Cards from '../../components/Cards'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Data from '../../datas/logements.json'
import ImageBackground from '../../assets/images/IMG.svg'
import '../../style/pages/Home/Home.scss'
import '../../style/setting.scss'

/**
 * Retourne la page d'accueil avec une image de fond (Background), des cartes de logements (Cards) et des données provenant d'un fichier JSON.
 * @returns {JSX.Element} La page d'accueil.
 */

function Home() {
  return (
    <div>
      <header className="defaultstyle">
        <Header />
      </header>
      <TopBackground
        picture={ImageBackground}
        alt="Image de falaise"
        title="Chez vous, partout et ailleurs"
      />
      <main className="cards-container defaultstyle">
        {Data.map((logements, index) => (
          <Cards
            key={`${logements.id}-${index}`}
            id={logements.id}
            title={logements.title}
            picture={logements.cover}
            className="card"
          />
        ))}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home

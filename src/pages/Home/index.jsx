/**
 * Composant Home - Page d'accueil avec une image de fond, des cartes de logements et des données provenant d'un fichier JSON.
 * @returns {JSX.Element} La page d'accueil.
 */

import TopBackground from '../../components/TopBackground'
import Cards from '../../components/Cards'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Data from '../../datas/logements.json'
import ImageBackground from '../../assets/images/IMG.svg'
// import '../../style/pages/Home/Home.scss'
// import '../../style/setting.scss'

function Home() {
  return (
    <div>
      <header className="defaultstyle">
        {/* Composant haut de page (Header) */}
        <Header />
      </header>
      <TopBackground
        picture={ImageBackground}
        alt="Image de falaise"
        title="Chez vous, partout et ailleurs"
      />
      <main className="cards-container defaultstyle">
        {/* Map sur les données provenant du fichier JSON pour afficher des cartes de logements (Cards) */}
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
        {/* Composant de pied de page (Footer) */}
        <Footer />
      </footer>
    </div>
  )
}

export default Home

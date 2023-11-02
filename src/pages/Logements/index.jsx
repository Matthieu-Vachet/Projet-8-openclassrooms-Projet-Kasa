import { useParams } from 'react-router-dom'
import data from '../../datas/logements.json'
import FicheLogements from '../../components/FicheLogements'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Error404 from '../../components/Error404'
// import '../../style/pages/Logements/Logements.scss'

function LogementPage() {
  const { id } = useParams()
  const logement = data.find((logement) => logement.id === id)

  return (
    <div>
      <header>
        {/* Composant haut de page (Header) */}
        <Header />
      </header>
      {logement ? (
        <main className="main-logement">
          <FicheLogements />
        </main>
      ) : (
        <div>
          <Error404 />
        </div>
      )}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default LogementPage

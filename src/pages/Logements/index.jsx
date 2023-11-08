/**
 * Composant LogementPage - Page de détails d'un logement.
 * @returns {JSX.Element} Le composant LogementPage.
 */

import { useParams } from 'react-router-dom'
import data from '../../datas/logements.json'
import FicheLogements from '../../components/FicheLogements'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Error404 from '../../components/Error404'
// import '../../style/pages/Logements/Logements.scss'
// import '../../style/setting.scss'

function LogementPage() {
  const { id } = useParams()
  const logement = data.find((logement) => logement.id === id)

  return (
    <div>
      <header className="defaultstyle">
        {/* Composant haut de page (Header) */}
        <Header />
      </header>

      {logement ? (
        <section className="main-logement defaultstyle">
          {/* Affiche la fiche du logement si le logement existe */}
          <FicheLogements />
        </section>
      ) : (
        <div>
          {/* Affiche une page d'erreur (404) si le logement n'existe pas */}
          <Error404 />
        </div>
      )}
      <footer>
        {/* Composant de pied de page (Footer) */}
        <Footer />
      </footer>
    </div>
  )
}

export default LogementPage

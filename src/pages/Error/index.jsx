/**
 * Composant Error - Page d'erreur (404) de l'application.
 * @returns {JSX.Element} Le composant Error.
 */

import Error404 from '../../components/Error404'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
// import '../../style/setting.scss'

function Error() {
  return (
    <div>
      <header className="defaultstyle">
        {/* Composant haut de page (Header) */}
        <Header />
      </header>
      <main className="defaultstyle">
        {/* Affiche la page d'erreur 404 (Error404) en cas d'erreur */}
        <Error404 />
      </main>
      <footer>
        {/* Composant de pied de page (Footer) */}
        <Footer />
      </footer>
    </div>
  )
}

export default Error

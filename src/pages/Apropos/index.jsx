/**
 * Composant Apropos - Page "À propos" de l'application.
 * @returns {JSX.Element} Le composant Apropos.
 */

import TopBackground from '../../components/TopBackground'
import Collapse from '../../components/Collapse'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ImageBackground from '../../assets/images/Montagnes.svg'
// import '../../style/pages/Apropos/Apropos.scss'
// import '../../style/setting.scss'

function Apropos() {
  return (
    <div>
      <header className="defaultstyle">
        {/* Composant haut de page (Header) */}
        <Header />
      </header>
      <main className="apropos-container">
        {/* Composant d'arrière-plan supérieur (TopBackground) avec image de montagnes */}
        <TopBackground
          picture={ImageBackground}
          alt="Image de montagnes"
          title=""
        />
        <div className="collapse-container-apropos">
          {/* Plusieurs composants Collapse pour afficher les informations à propos de Kasa */}
          <Collapse
            name="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes informations sont régulièrement vérifiées par nos équipes."
          />
          <Collapse
            name="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Collapse
            name="Service"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Collapse
            name="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </main>
      <footer>
        {/* Composant de pied de page (Footer) */}
        <Footer />
      </footer>
    </div>
  )
}

export default Apropos

import TopBackground from '../../components/TopBackground'
import Collapse from '../../components/Collapse'
import Footer from '../../components/Footer'
import ImageBackground from '../../assets/images/Montagnes.svg'

function Apropos() {
  return (
    <div>
      <main>
        <TopBackground
          picture={ImageBackground}
          alt="Image de montagnes"
          title=""
        />
        <div className="collapse-container-apropos">
          <Collapse
            name="A propos"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toute informations sont régulièrement vérifiées par nos équipes."
          />
          <Collapse
            name="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Collapse
            name="Service"
            content="Kasa est site de réservation de logement qui facilite la recherche et la réservation de logements en ligne, offrant une plateforme sécurisée pour les voyageurs et les propriétaires. Vos informations sont cryptées et protégées par des mesures de sécurité avancées, garantissant la confidentialité de vos données personnelles et de vos transactions. Notre équipe travaille continuellement pour maintenir la fiabilité et l'intégrité de notre plateforme, afin de vous offrir une expérience de réservation sereine et sans souci"
          />
          <Collapse
            name="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standarts sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </main>
      {/* Composant bas de page (Footer) */}
      <Footer />
    </div>
  )
}

export default Apropos

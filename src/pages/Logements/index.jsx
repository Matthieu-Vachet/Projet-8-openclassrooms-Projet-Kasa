import { useParams } from "react-router-dom"
import data from "../../datas/logements.json"
import FicheLogements from "../../components/FicheLogements"
import Footer from "../../components/Footer"
import Error404 from "../../components/Error404"

function LogementPage() {
  const { id } = useParams()
  const logement = data.find((logement) => logement.id === id)

  return (
    <div>
      {
        logement ? (
          <main className="main-logement">
            <FicheLogements />
          </main>
        ) : (
          <div>
            <Error404 />
          </div>
        )
      }
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default LogementPage
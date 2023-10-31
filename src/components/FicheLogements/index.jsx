import { useParams } from "react-router-dom";
import data from "../../datas/logements.json";
import Carrousel from "../Carrousel"

const FicheLogement = () => {

    const { id } = useParams()
    const logements = data.find((logement) => logement.id === id)

    return (
        <div>
            <Carrousel id={logements.id} images={logements.pictures} />
        </div>
    )
}

export default FicheLogement
import { useParams } from "react-router-dom";
import data from "../../datas/logements.json";
import Carrousel from "../Carrousel"
import TitleLogement from "../TitleLogement";

const FicheLogement = () => {

    const { id } = useParams()
    const logements = data.find((logement) => logement.id === id)

    return (
        <div>
            <Carrousel id={logements.id} images={logements.pictures} />
        
        <div>
            <TitleLogement title={logements.title} subtitle={logements.location} />
        </div>
        </div>

    )
}

export default FicheLogement
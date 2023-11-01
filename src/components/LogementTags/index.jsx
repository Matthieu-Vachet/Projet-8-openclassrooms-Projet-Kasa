import { useParams } from "react-router-dom";
import data from "../../datas/logements.json";

function LogementTag() {

    const { id } = useParams();
    const logements = data.find(logement => logement.id === id);

    return (
        <div>
            {logements.tags.map((tag, index) => (
                <span key={index} className="user-tag">{tag}</span>
            ))}
        </div>
    )
}

export default LogementTag
import { useParams } from "react-router-dom";
import data from "../../datas/logements.json";
// import '../../style/components/LogementTags/LogementTags.scss';


function LogementTag() {

    const { id } = useParams();
    const logements = data.find(logement => logement.id === id);

    return (
        <div className="logements-tags-container">
            {logements.tags.map((tag, index) => (
                <span key={index} className="logements-tag">{tag}</span>
            ))}
        </div>
    )
}

export default LogementTag
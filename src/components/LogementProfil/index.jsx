import '../../style/components/LogementProfil/LogementProfil.scss'

function LogementProfil({id, hostName, hostPicture}) {
    return (
        <div className="logement-profil-container">
            <p className="host-name">{hostName}</p>
            <img className="host-picture" key={id} src={hostPicture} alt={hostName} />
        </div>
    )
}


export default LogementProfil
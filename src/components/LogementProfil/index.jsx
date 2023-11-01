import PropTypes from 'prop-types';
// import '../../style/components/LogementProfil/LogementProfil.scss';


function LogementProfil({id, hostName, hostPicture}) {
    return (
        <div className="logement-profil-container">
            <p className="host-name">{hostName}</p>
            <img className="host-picture" key={id} src={hostPicture} alt={hostName} />
        </div>
    )
}

LogementProfil.propTypes = {
    id: PropTypes.string.isRequired,
    hostName: PropTypes.string.isRequired,
    hostPicture: PropTypes.string.isRequired
}

export default LogementProfil
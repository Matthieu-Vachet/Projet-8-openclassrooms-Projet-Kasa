import PropTypes from 'prop-types';

function TitleLogement({ title, subtitle }) {
    return (
        <div className="title-logement">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}

TitleLogement.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

export default TitleLogement
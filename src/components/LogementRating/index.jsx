import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';
// import '../../style/components/LogementRating/LogementRating.scss';


function LogementRating ({ rating }) {

    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
        <div className='logement-rating'>
            {Array.from({ length: 5 }, (_, index) => (
                <span key={index} className='star'>
                    {index < filledStars ? (<FontAwesomeIcon icon={faStar} className='starFilled' />) : index === filledStars && hasHalfStar ? (<FontAwesomeIcon icon={faStarHalfAlt} />) : (<FontAwesomeIcon icon={faStar} className='star-empty' />)}
                    {console.log(filledStars)}
                    {console.log(index)}
                </span>
            ))}
        </div>
    );
}

LogementRating.propTypes = {
    rating: PropTypes.string.isRequired
}

export default LogementRating;



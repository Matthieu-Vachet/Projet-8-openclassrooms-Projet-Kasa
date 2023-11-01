import { useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../../style/components/Carrousel/Carrousel.css';


// Définition du composant Carrousel qui prend 2 props : 'images' et 'id'
const Carrousel = ({ images }) => {

    // Utilisation du hook useState pour gérer l'état du slide actuel
    const [currentSlide, setCurrentSlide] = useState(0);

    // Fonction pour passer au slide suivant
    const nextSlide = () => {
        setCurrentSlide((previousSlide) => (previousSlide === images.length - 1 ? 0 : previousSlide + 1));
    };

    // Fonction pour revenir au slide précédent
    const previousSlide = () => {
        setCurrentSlide((previousSlide) => (previousSlide === 0 ? images.length - 1 : previousSlide - 1));
    };


    // Rendu du composant Carrousel 
    return (
        <div className="carousel">
            <button className='previousButton' onClick={previousSlide}><FontAwesomeIcon icon={faChevronLeft} /></button>
            <div className="carousel-container">

                {/*Boucle sur le tableau d'images pour les afficher dans le carrousel */}
                {images.map((image, index) => (
                    <div className={`carousel-img ${currentSlide === index ? 'active' : ''}`} key={index} style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        opacity: currentSlide === index ? 1 : 0,
                        transition: 'opacity 0.5s ease', zIndex: currentSlide === index ? 1 : 0
                    }}>
                        <img className={` setImg carousel-img`} src={image} alt={`Slide ${index}`} />
                    </div>
                ))}

            </div>
            <button className='nextButton' onClick={nextSlide}><FontAwesomeIcon icon={faChevronRight} /></button>
            <div className="carousel-counter">
                {currentSlide + 1} / {images.length}
            </div>
        </div>
    );
};

Carrousel.propTypes = {
    images: PropTypes.array.isRequired,
}

export default Carrousel;
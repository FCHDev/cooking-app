import React from 'react';
import image from './youtubeicon.png';
import '../index.css'

const Card = ({repas}) => {

    return (
        <div className="meal-card">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <h2>{repas.strMeal}</h2>
            <p>{repas.strArea} recipe</p>
            <p><a href={repas.strSource}
                  target="_blank" rel="noopener noreferrer">Detailed recipe</a></p>
            <img src={repas.strMealThumb} alt={"photo " + repas.strMeal}/>
            <p className="link-youtube"><img className="yticon" src={image} alt="youtube icon logo"/><a

                href={repas.strYoutube} target="_blank" rel="noopener noreferrer">
                Watch on Youtube</a>
            </p>
            <p className="instructions">{repas.strInstructions}</p>
        </div>
    );
};

export default Card;
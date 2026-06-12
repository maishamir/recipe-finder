import React from 'react'
// import servingIcon from "../../assets/images/icon-servings.svg";
import servingIcon from "../../assets/images/icon-servings.svg"
import prepIcon from "../../assets/images/icon-prep-time.svg";
import cookIcon from "../../assets/images/icon-cook-time.svg";
import { Link } from 'react-router';
import "./RecipeCard.scss";

function RecipeCard({ recipeId, title, slug, image, overview, servings, prepMinutes, cookMinutes, ingredients, instructions }) {
    return (
        <div className="recipeCard">
            <picture>
                <source media="(min-width: 600px)" srcset={image.large} />
                <img src={image.small} className='recipeCard__image'/>
            </picture>
            <div className="recipeCard__desc">
                <h3 className="recipeCard__title">{title}</h3>
                <p className="recipeCard__overview">{overview}</p>
            </div>
            <div className="recipeCard__stats">
                <div className="recipeCard__stats-item">
                    <img src={servingIcon} alt="" />
                    <p>Servings: {servings}</p>
                </div>
                <div className="recipeCard__stats-item">
                    <img src={prepIcon} alt="" />
                    <p>Prep: {prepMinutes}</p>
                </div>
                <div className="recipeCard__stats-item">
                    <img src={cookIcon} alt="" />
                    <p>Cook: {cookMinutes} minute{(cookMinutes > 1 || cookMinutes === 0) && 's'} </p>
                </div>
            </div>
            <Link to={`/recipes/${recipeId}`} className="recipeCard__link">View Recipe</Link>
        </div>
    )
}

export default RecipeCard
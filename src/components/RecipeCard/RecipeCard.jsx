import React from 'react'
import servingIcon from "/assets/images/icon-servings.svg";
import prepIcon from "/assets/images/icon-prep-time.svg";
import cookIcon from "/assets/images/icon-cook-time.svg";
import "./RecipeCard.scss";

function RecipeCard({ title, slug, image, overview, servings, prepMinutes, cookMinutes, ingredients, instructions }) {
    return (
        <div className="recipeCard">
            <img className="recipeCard__image" src={image} alt={title} />
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
            <button className="recipeCard__btn">View Recipe</button>
        </div>
    )
}

export default RecipeCard
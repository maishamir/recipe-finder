import React from 'react'
import servingIcon from "/assets/images/icon-servings.svg";
import prepIcon from "/assets/images/icon-prep-time.svg";
import cookIcon from "/assets/images/icon-cook-time.svg";

function RecipeCard({ title, slug, image, overview, servings, prepMinutes, cookMinutes, ingredients, instructions }) {
    return (
        <div className="recipeCard">
            <img src={image} alt={title} />
            <div className="recipeCard__desc">
                <h3 className="recipeCard__title">{title}</h3>
                <p className="recipeCard__overview">{overview}</p>
            </div>
            <div className="recipe__stats">
                <div className="recipe__stats-item">
                    <img src={servingIcon} alt="" />
                    <p>Servings: {servings}</p>
                </div>
                <div className="recipe__stats-item">
                    <img src={prepIcon} alt="" />
                    <p>Prep: {prepMinutes}</p>
                </div>
                <div className="recipe__stats-item">
                    <img src={cookIcon} alt="" />
                    <p>Cook: {cookMinutes}{cookMinutes > 1 && 's'} </p>
                </div>
            </div>
            <button className="recipeCard__view">View Recipe</button>
        </div>
    )
}

export default RecipeCard
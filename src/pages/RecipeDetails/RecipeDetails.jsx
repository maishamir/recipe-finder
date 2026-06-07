import React from 'react'
import "./RecipeDetails.scss"
import { useParams } from 'react-router'
import recipeData from "../../assets/data.json";
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import servingIcon from "/assets/images/icon-servings.svg";
import prepIcon from "/assets/images/icon-prep-time.svg";
import cookIcon from "/assets/images/icon-cook-time.svg";
import { Link } from 'react-router';

function RecipeDetails() {
    const { recipeId } = useParams();
    const recipe = recipeData[recipeId - 1]

    const { title, slug, image, overview, cookMinutes, ingredients, instructions, prepMinutes, servings } = recipe;

    function getMoreRecipes(recipeId, recipeData) {
        const recipeIdx = recipeData.findIndex(recipe => recipe.id === parseInt(recipeId));
        const totalRecipes = recipeData.length;
        return [-2, -1, 1, 2].map(offset => recipeData[(recipeIdx + offset + totalRecipes) % totalRecipes]);
    }

    const moreRecipes = getMoreRecipes(recipeId, recipeData);



    return (
        <div className="recipeDetails">
            <nav className="recipeDetails__breadcrumb"> <Link to="/recipes" className='recipe-page-link' scroll={false}>Recipes </Link> <span className='separator'>/</span> {title}</nav>
            <img className="recipeDetails__image" src={image.small} alt="" />

            <h1 className="recipeDetails__title">{title}</h1>
            <p className="recipeDetails__overview">{overview}</p>

            <div className="recipeDetails__stats">
                <div className="recipeDetails__stats-item"><img src={servingIcon} alt="" />
                    <p>Servings: {servings}</p></div>
                <div className="recipeDetails__stats-item"><img src={prepIcon} alt="" />
                    <p>Prep: {prepMinutes}</p></div>
                <div className="recipeDetails__stats-item"><img src={cookIcon} alt="" />
                    <p>Cook: {cookMinutes} minute{(cookMinutes > 1 || cookMinutes === 0) && 's'} </p></div>
            </div>

            <div className="recipeDetails__ingredients">
                <h3 className="recipeDetails__ingredients-title">Ingredients:</h3>
                <ul className="recipeDetails__ingredients-list">
                    {ingredients.map((ingredient, index) => {
                        return <li key={index} className="recipeDetails__ingredients-item">{ingredient}</li>
                    })}
                </ul>
            </div>

            <div className="recipeDetails__instructions">
                <h3 className="recipeDetails__instructions-title">Instructions:</h3>
                <ul className="recipeDetails__instructions-list">
                    {instructions.map((step, index) => {
                        return <li key={index} className="recipeDetails__instructions-step">{step}</li>
                    })}
                </ul>
            </div>


            <div className="moreRecipes">
                <h2 className='moreRecipes__title'>More recipes</h2>

                <div className="moreRecipes__recipes">
                    {moreRecipes.map(recipe => (
                        <RecipeCard key={recipe.id} recipeId={recipe.id} title={recipe.title} slug={recipe.slug} image={recipe.image.small} overview={recipe.overview} servings={recipe.servings} prepMinutes={recipe.prepMinutes} cookMinutes={recipe.cookMinutes} ingredients={recipe.ingredients} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RecipeDetails
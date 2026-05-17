import React, { useState } from 'react'
import chevronDown from "/assets/images/icon-chevron-down.svg";
import "./Recipes.scss";
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import recipeData from "../../assets/data.json";

function Recipes() {
    const [isPrepOpen, setIsPrepOpen] = useState(false)
    const [isCookOpen, setIsCookOpen] = useState(false)


    return (
        <div className="recipes">
            <section className="recipes__hero">
                <h1>Explore our simple, healthy recipes</h1>
                <p>Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use the search  bar to find a recipe by name or ingredient, or simply scroll the list and let something delicious catch your eye.</p>
            </section>

            <section className="recipes__filters">
                <div className="recipe__filter-container">
                    <button className="recipe__filters-button" onClick={() => setIsPrepOpen(!isPrepOpen)}>Max Prep Time <img src={chevronDown} alt="" /></button>
                    <div className={`recipes__filter ${isPrepOpen ? "recipes__filter--open" : "recipes__filter--closed"}`} >
                        <ul>
                            <li>0 minutes</li>
                            <li>5 minutes</li>
                            <li>10 minutes</li>
                        </ul>
                        <small>clear</small>
                    </div>
                </div>

                <div className="recipe__filter-container">
                    <button className="recipe__filters-button" onClick={() => setIsCookOpen(!isCookOpen)}>Max Cook Time <img src={chevronDown} alt="" /></button>
                    <div className={`recipes__filter ${isCookOpen ? "recipes__filter--open" : "recipes__filter--closed"}`} >
                        <ul>
                            <li>0 minutes</li>
                            <li>5 minutes</li>
                            <li>10 minutes</li>
                            <li>15 minutes</li>
                            <li>20 minutes</li>
                        </ul>
                        <small>clear</small>
                    </div>
                </div>

                <input className="recipes__filter-search" type="text" name="" id="" placeholder='Serch by name or ingredient...' />
            </section>

            <section className="recipes__board">
                {recipeData.map(recipe => {
                    return <RecipeCard key={recipe.id} title={recipe.overview} slug={recipe.slug} image={recipe.image.small} overview={recipe.overview} servings={recipe.servings} prepMinutes={recipe.prepMinutes} cookMinutes={recipe.cookMinutes} ingredients={recipe.ingredients} instructions={recipe.instructions} />
                })}
            </section>
        </div >
    )
}

export default Recipes
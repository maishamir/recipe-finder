import React, { useState } from 'react'
import chevronDown from "/assets/images/icon-chevron-down.svg";
import "./Recipes.scss";
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import recipeData from "../../assets/data.json";
import RecipeFilter from '../../components/RecipeFilter/RecipeFilter';

function Recipes() {
    const [isPrepOpen, setIsPrepOpen] = useState(false)
    const [isCookOpen, setIsCookOpen] = useState(false)

    function toggleMenu() {

    }


    return (
        <div className="recipes">
            <section className="recipes__hero">
                <h1 className='recipes__hero-title'>Explore our simple, healthy recipes</h1>
                <p className='recipes__hero-text'>Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use the search  bar to find a recipe by name or ingredient, or simply scroll the list and let something delicious catch your eye.</p>
            </section>

            <section className="recipes__filters">
                <RecipeFilter choices={[0, 5, 10]} label="Max Prep Time" isOpen={isPrepOpen} toggleButton={() => setIsPrepOpen(!isPrepOpen)} name={"prepTime"} />
                <RecipeFilter choices={[0, 5, 10, 15, 20]} label="Max Cook Time" isOpen={isCookOpen} toggleButton={() => setIsCookOpen(!isCookOpen)} name={"cookTime"} />

                <div className="recipes__filters-search-wrapper">
                    <input className="recipes__filters-search" type="text" name="" id="" placeholder='Search by name or ingredient...' />
                </div>
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
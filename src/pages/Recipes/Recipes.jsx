import React, { useState } from 'react'
import chevronDown from "/assets/images/icon-chevron-down.svg";
import "./Recipes.scss";
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import recipeData from "../../assets/data.json";
import RecipeFilter from '../../components/RecipeFilter/RecipeFilter';

function Recipes() {
    const [isPrepOpen, setIsPrepOpen] = useState(false)
    const [isCookOpen, setIsCookOpen] = useState(false)
    const [maxPrepTime, setMaxPrepTime] = useState(null);
    const [maxCookTime, setMaxCookTime] = useState(null);

    const [searchQuery, setSearchQuery] = useState("");

    const filteredRecipes = recipeData.filter(recipe => recipe.title.toLowerCase().includes(searchQuery.toLowerCase())).filter(recipe => maxPrepTime === null || recipe.prepMinutes <= maxPrepTime).filter(recipe => maxCookTime === null || recipe.cookMinutes <= maxCookTime);



    return (
        <div className="recipes">
            <section className="recipes__hero">
                <div className="recipes__hero-content">
                    <h1 className='recipes__hero-title'>Explore our simple, healthy recipes</h1>
                    <p className='recipes__hero-text'>Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use the search  bar to find a recipe by name or ingredient, or simply scroll the list and let something delicious catch your eye.</p>
                </div>
            </section>

            <section className="recipes__filters">
                <RecipeFilter choices={[0, 5, 10]} label="Max Prep Time" isOpen={isPrepOpen} toggleButton={() => setIsPrepOpen(!isPrepOpen)} name={"prepTime"} setTime={setMaxPrepTime} selectedValue={maxPrepTime} close={() => setIsPrepOpen(false)} />
                <RecipeFilter choices={[0, 5, 10, 15, 20]} label="Max Cook Time" isOpen={isCookOpen} toggleButton={() => setIsCookOpen(!isCookOpen)} name={"cookTime"} setTime={setMaxCookTime} selectedValue={maxCookTime} close={() => setIsCookOpen(false)} />

                <div className="recipes__filters-search-wrapper">
                    <input className="recipes__filters-search" type="text" name="" id="" placeholder='Search by name or ingredient...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
            </section>

            <section className="recipes__board">

                {(filteredRecipes.length === 0 && searchQuery !== "") ? <p>No recipes match your search</p> : filteredRecipes.map(recipe => {
                    return <RecipeCard key={recipe.id} recipeId={recipe.id} title={recipe.title} slug={recipe.slug} image={recipe.image} overview={recipe.overview} servings={recipe.servings} prepMinutes={recipe.prepMinutes} cookMinutes={recipe.cookMinutes} />
                })}


            </section>
        </div >
    )
}

export default Recipes
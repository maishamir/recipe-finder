import React from 'react'
import chevronDown from '/assets/images/icon-chevron-down.svg';
import "./RecipeFilter.scss";

function RecipeFilter({ choices = [], label = "", toggleButton, isOpen, name = "" }) {

    return (
        <div className="recipeFilter">
            <button className="recipeFilter__button" onClick={toggleButton}>{label} <img src={chevronDown} alt="" /></button>
            <div className={`recipeFilter__filters ${isOpen ? "recipeFilter__filters--open" : "recipeFilter__filters--closed"}`} >

                <div name={name} id="">
                    {choices.map((choice, index) => {
                        return (
                            <div className="recipeFilter__option">
                                <input type="radio" id={`${name}-${choice}`} name={name} value={choice} />
                                <label htmlFor={`${name}-${choice}`}>{choice} minutes</label>
                            </div>
                        )
                    })}
                </div>
                <small>Clear</small>
            </div>
        </div>
    )
}

export default RecipeFilter
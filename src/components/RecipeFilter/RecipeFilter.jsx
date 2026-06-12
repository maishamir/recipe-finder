import React, { useRef, useEffect } from 'react'
import chevronDown from '../../assets/images/icon-chevron-down.svg';
import "./RecipeFilter.scss";

function RecipeFilter({ choices = [], label = "", toggleButton, isOpen, name = "", setTime, selectedValue, close }) {

    const filterBoxRef = useRef();

    useEffect(() => {
        const clickHandler = e => {
            if (!(filterBoxRef.current.contains(e.target))) close()
        }
        document.addEventListener("click", clickHandler)
        return () => document.removeEventListener("click", clickHandler)
    }, [])

    return (
        <div className="recipeFilter" ref={filterBoxRef}>
            <button className="recipeFilter__button" onClick={toggleButton}>{label} <img src={chevronDown} alt="" /></button>
            <div className={`recipeFilter__filters ${isOpen ? "recipeFilter__filters--open" : "recipeFilter__filters--closed"}`} >

                <div name={name} id="">
                    {choices.map((choice, index) => {
                        return (
                            <div className="recipeFilter__option">
                                <input type="radio" id={`${name}-${choice}`} name={name} value={choice} onChange={() => { setTime(choice); toggleButton() }} checked={choice === selectedValue} />
                                <label htmlFor={`${name}-${choice}`}>{choice} minutes</label>
                            </div>
                        )
                    })}
                </div>
                <small onClick={() => setTime(null)}>Clear filters</small>
            </div>
        </div>
    )
}

export default RecipeFilter
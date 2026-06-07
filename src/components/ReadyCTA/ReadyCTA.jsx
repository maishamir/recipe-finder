import React from 'react'
import { useNavigate } from 'react-router'
import "./ReadyCTA.scss"

function ReadyCTA() {

    const navigate = useNavigate();

    return (
        <section className="ready-cta">
            <h2 className='ready-cta-title'>Ready to cook smarter?</h2>
            <p className='ready-cta-desc'>Hit the button, pick a recipe, and get dinner on the table&mdash;fast.</p>
            <button className='ready-cta-btn' onClick={() => navigate("/recipes")}>Browse recipes</button>
        </section>
    )
}

export default ReadyCTA
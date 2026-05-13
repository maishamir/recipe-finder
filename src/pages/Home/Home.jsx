import React from 'react'
import heroImg from "/assets/images/image-home-hero-small.webp";
import carrotIcon from "/assets/images/icon-whole-food-recipes.svg";
import boltIcon from "/assets/images/icon-minimum-fuss.svg";
import searchIcon from "/assets/images/icon-search.svg";
import realLifeImg from "/assets/images/image-home-real-life-small.webp";

function Home() {
    return (
        <div>
            <section className='home__hero'>
                <h1>Healthy meals, zero fuss</h1>
                <p>Discover eight quick, whole-food recipes that you can cook tonight&mdash;no processed junk, no guesswork.</p>
                <button>Start exploring</button>

                <img src={heroImg} alt="woman chopping vegetables and smiling" />

            </section>

            <section className="home__features">
                <h2>What you'll get</h2>

                <ul>
                    <li>
                        <div>
                            <img src={carrotIcon} alt="" />
                            <h3>Whole-food recipes</h3>
                            <p>Each dish uses everyday, unprocessed ingredients.</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={boltIcon} alt="" />
                            <h3>Minimum fuss</h3>
                            <p>All recipes are designed to make eating heathy quick and easy.</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={searchIcon} alt="" />
                            <h3>Search in seconds</h3>
                            <p>Filter by name or ingredient and jump straight to the recipe you need.</p>
                        </div>
                    </li>
                </ul>
            </section>

            <section className="home__real-life">
                <h2>Built for real life</h2>
                <p>Cooking should be complicated. These recipes come in under <strong>30 minutes</strong> of active time, fit busy schedules, and taste good enough to repeat.</p>
                <p>Whether you're new to the kitchen or jujst need fresh ideas, we've got you covered.</p>

                <img src={realLifeImg} alt="" />
            </section>

            <section className="home__cta">
                <h2>Ready to cook smarter?</h2>
                <p>Hit the button, pick a recipe, and get dinner on the table&mdash;fast.</p>
                <button>Browse recipes</button>
            </section>
        </div>
    )
}

export default Home
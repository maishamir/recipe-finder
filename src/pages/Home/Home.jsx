import React from 'react'
import heroImg from "/assets/images/image-home-hero-small.webp";
import carrotIcon from "/assets/images/icon-whole-food-recipes.svg";
import boltIcon from "/assets/images/icon-minimum-fuss.svg";
import searchIcon from "/assets/images/icon-search-in-seconds.svg";
import realLifeImgDefault from "/assets/images/image-home-real-life-small.webp";
import realLifeImgTablet from "/assets/images/image-home-real-life-large.webp";
// import realLifeImgTablet from "/assets/images/salmon-asparagus-large.webp";
import "./Home.scss";
import squiggle from "/assets/images/pattern-squiggle-1.svg";
import { useNavigate } from 'react-router';
import ReadyCTA from '../../components/ReadyCTA/ReadyCTA';

function Home() {

    const navigate = useNavigate();

    return (
        <div className='home'>
            <section className='home__hero'>
                <h1 className='home__hero-title'><span className="healthy">Healthy</span> meals, zero fuss</h1>
                <p className='home__hero-subtitle'>Discover eight quick, whole-food recipes that you can cook tonight&mdash;no processed junk, no guesswork.</p>
                <button className='home__hero-cta' onClick={() => navigate("/recipes")}>Start exploring</button>

                <div className="home__hero-img">
                    <img src={squiggle} className="squiggle" alt="" />
                    <img src={heroImg} className='woman' alt="woman chopping vegetables and smiling" />
                </div>

            </section>

            <section className="home__features">
                <h2 className="home__features-title">What you'll get</h2>

                <ul className="home__features-list">
                    <li className="home__feature">
                        <div className="home__feature-card">
                            <div className="home__feature-icon">
                                <img
                                    src={carrotIcon} alt="" /></div>
                            <h3 className="home__feature-name">Whole-food recipes</h3>
                            <p className="home__feature-desc">Each dish uses everyday, unprocessed ingredients.</p>
                        </div>
                    </li>
                    <li className="home__feature">
                        <div className="home__feature-card">
                            <div className="home__feature-icon">
                                <img
                                    src={boltIcon} alt="" /></div>
                            <h3 className="home__feature-name">Minimum fuss</h3>
                            <p className="home__feature-desc">All recipes are designed to make eating heathy quick and easy.</p>
                        </div>
                    </li>
                    <li className="home__feature">
                        <div className="home__feature-card">
                            <div className="home__feature-icon">
                                <img
                                    src={searchIcon} alt="" /></div>
                            <h3 className="home__feature-name">Search in seconds</h3>
                            <p className="home__feature-desc">Filter by name or ingredient and jump straight to the recipe you need.</p>
                        </div>
                    </li>
                </ul>
            </section>

            <section className="home__real-life">
                <h2 className='home__real-life-title'>Built for real life</h2>
                <div className="home__real-life-desc">
                    <p>Cooking shouldn't be complicated. These recipes come in under <span className='half-hour'>30 minutes</span> of active time, fit busy schedules, and taste good enough to repeat.</p>
                    <p>Whether you're new to the kitchen or just need fresh ideas, we've got you covered.</p>
                </div>


                <picture>
                    <source media='(min-width: 600px)' srcSet={realLifeImgTablet} />

                    <img className="home__real-life-img" src={realLifeImgDefault} alt="" />

                </picture>
            </section>

            <ReadyCTA />
        </div>
    )
}

export default Home
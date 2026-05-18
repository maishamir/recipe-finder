import React from 'react'
import heroImg from "/assets/images/image-about-our-mission-small.webp";
import beyondImg from '/assets/images/image-about-beyond-the-plate-small.webp';
import "./About.scss"
function About() {
    return (
        <div className="about">
            <section className="about__hero">
                <small className="about__hero-label">Our mission</small>
                <h1 className="about__hero-title">Help more people cook nourishing meals, more often.</h1>
                <div className="about__hero-text">
                    <p className="about__hero-text">Healthy Recipe Finder was created to prove that healthy eating can be convenient, affordable, and genuinely delicious.</p>

                    <p className="about__hero-text">We showcase quick, whole-food dishes that anyone can muster&mdash;no fancy equipment, no ultra-processed shortcuts&mdash;just honest ingredients and straightforward steps.</p>
                </div>

                <img className="about__hero-img" src={heroImg} alt="" />
            </section>

            <section className="about__why">
                <h2 className="about__why-title">Why we exist</h2>
                <ul className="about__why-list">
                    <li className="about__why-item">
                        <div className="about__why-content">
                            <h3 className="about__why-heading">Cut through the noise.</h3>
                            <p className="about__why-text">The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.</p>
                        </div>

                    </li>
                    <li className="about__why-item">
                        <div className="about__why-content">
                            <h3 className="about__why-heading">Empower home kitchens.</h3>
                            <p className="about__why-text">When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.</p>
                        </div>

                    </li>
                    <li className="about__why-item">
                        <div className="about__why-content">
                            <h3 className="about__why-heading">Make healthy look good.</h3>
                            <p className="about__why-text">Hight-resolution imagery shows you exactly what success looks like&mdash;because we eat with our eyes first, and confidence matters.</p>
                        </div>

                    </li>
                </ul>
            </section>

            <section className="about__foodPhil">
                <h2 className="about__foodPhil-title">Our food philosophy</h2>
                <ul className="about__foodPhil-list">
                    <li className="about__foodPhil-item"><div className="about__foodPhil-content"><h3 className="about__foodPhil-heading">Whole ingredients first.</h3>
                        <p className="about__foodPhil-text">Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.</p></div></li>
                    <li className="about__foodPhil-item"><div className="about__foodPhil-content"><h3 className="about__foodPhil-heading">Flavor without compromise.</h3>
                        <p className="about__foodPhil-text">Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.</p></div></li>
                    <li className="about__foodPhil-item"><div className="about__foodPhil-content"><h3 className="about__foodPhil-heading">Respect for time.</h3><p className="about__foodPhil-text">Weeknight meals should slot into reall schedules; weekend cooking can be leisurely but never wasteful.</p></div></li>
                    <li className="about__foodPhil-item"><div className="about__foodPhil-content"><h3 className="about__foodPhil-heading">Sustainable choices.</h3><p className="about__foodPhil-text">Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.</p></div></li>
                </ul>
            </section>

            <section className="about__beyondPlate">
                <h2 className="about__beyondPlate-title">Beyond the plate</h2>
                <p className="about__beyondPlate-text">We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:</p>
                <ul className="about__beyondPlate-list">
                    <li className="about__beyondPlate-item">Encourage family dinners and social cooking.</li>
                    <li className="about__beyondPlate-item">Reduce reliance on single-use packaging and delivery waste.</li>
                    <li className="about__beyondPlate-item">Spark curiosity about seasonal produce and local agriculture.</li>
                </ul>
                <img className="about__beyondPlate-img" src={beyondImg} alt="" />
            </section>

            <section className="about__cta">
                <h2 className="about__cta-title">Ready to cook smarter?</h2>
                <p className="about__cta-text">Hit the button, pick a recipe, and get dinner on the table&mdash;fast.</p>
                <button className="about__cta-btn">Browse recipes</button>
            </section>
        </div>
    )
}

export default About
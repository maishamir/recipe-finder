import React from 'react'
import heroImg from "/assets/images/image-about-our-mission-small.webp";
import beyondImg from '/assets/images/image-about-beyond-the-plate-small.webp';
function About() {
    return (
        <div>
            <section className="about__hero">
                <small>Our mission</small>
                <h1>Help more people cook nourishing meals, more often.</h1>
                <p>Healthy Recipe Finder was created to prove that healthy eating can be convenient, affordable, and genuinely delicious.</p>

                <p>We showcase quick, whole-food dishes that anyone can muster&mdash;no fancy equipment, no ultra-processed shortcuts&mdash;just honest ingredients and straightforward steps.</p>

                <img src={heroImg} alt="" />
            </section>

            <section className="about__why">
                <h2>Why we exist</h2>
                <ul>
                    <li>
                        <div>
                            <h3>Cut through the noise.</h3>
                            <p>The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.</p>
                        </div>

                    </li>
                    <li>
                        <div>
                            <h3>Empower home kitches.</h3>
                            <p>When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.</p>
                        </div>

                    </li>
                    <li>
                        <div>
                            <h3>Make healthy look good.</h3>
                            <p>Hight-resolution imagery shows you exactly what success looks like&mdash;because we eat with our eyes first, and confidence matters.</p>
                        </div>

                    </li>
                </ul>
            </section>

            <section className="about__foodPhil">
                <h2>Our food philosophy</h2>
                <ul>
                    <li><div><h3>Whole ingredients first.</h3>
                        <p>Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.</p></div></li>
                    <li><div><h3>Flavor without compromise.</h3>
                        <p>Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.</p></div></li>
                    <li><div><h3>Respect for time.</h3><p>Weeknight meals should slot into reall schedules; weekend cooking can be leisurely but never wasteful.</p></div></li>
                    <li><div><h3>Sustainable choices.</h3><p>Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.</p></div></li>
                </ul>
            </section>

            <section className="about__beyondPlate">
                <h2>Beyond the plate</h2>
                <p>We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:</p>
                <ul>
                    <li>Encourage family dinners and social cooking.</li>
                    <li>Reduce reliance on single-use packaging and delivery waste.</li>
                    <li>Spark curiosity about seasonal produce and local agriculture.</li>
                </ul>
                <img src={beyondImg} alt="" />
            </section>

            <section className="about__cta">
                <h2>Ready to cook smarter?</h2>
                <p>Hit the button, pick a recipe, and get dinner on the table&mdash;fast.</p>
                <button>Browse recipes</button>
            </section>
        </div>
    )
}

export default About
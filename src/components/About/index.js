import React from "react";
import selfImage from "../../assets/img/selfImage.jpeg"

function About() {

    return (
        <h1>
            <section className="my-5" >
                <h1 id="about">Who am I?</h1>
                <div className="p-5">
                    <div className="d-flex justify-content-around">
                        <img src={selfImage} className="my-2 rounded" style={{ width: "15%" }} alt="cover" />
                        <div className="my-2 justify-content left">
                            <p className="fs-3">
                                Hello and Welcome to my Portfolio!
                                I am a junior Software Developer with a passion for learning about coding and trying to break
                                into this career field!
                                I aspire to learn about multiple languages and create unique projects as I become
                                a more seasoned Dev.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </h1>
    );
};

export default About;
import React from 'react'
import "./about.css"
import Octoberfest from "../../img/Octoberfest.JPG"

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img
                    src={Octoberfest}
                    alt=""
                    className="a-img"
                />
            </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
             Born and raised in Florida (Flo-Grown), I graduated from the University of Miami majoring in Health Sciences and Public Health.
          </p>
          <p className="a-desc">
            With regards to my professional work, I have contributed to a few abstracts and research papers
            which are pending publication in various journals, including the Journal of the American Society of Nephrology. 
          </p>
          <p className="a-hobbies">
            Outside of work, cooking, eating, and gaming are my biggest leisure activities, as well as studying new subjects
            that excite me and serve to diversify my ever-expanding skill set. I have been playing piano for well-over 10 years,
            and video games for even longer than that! I primarily enjoy First-Person Shooter (FPS) styles of games, namely
            Valorant and Counter-Strike: Global Offensive. My favorite cuisine would have to be anything Asian-inspired, from 
            traditional Chinese cooking all the way to Korean bibimbap, Japanese sushi, Thai som tam, and Filipino adobo! 
          </p>
        </div>
    </div>
  )
}

export default About
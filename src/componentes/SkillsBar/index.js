import React from "react";
import './style.css';

function SkillsBar () {
    return (
        <div className="container">

            <div className="todas-skills">

                <div className="skill-box">
                    <span className="title">HTML</span>
                    <div className="skill-bar">
                        <span className="skill-per html">
                            <span className="tooltip">95%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">CSS</span>
                    <div className="skill-bar">
                        <span className="skill-per css">
                            <span className="tooltip">90%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">JavaScript</span>
                    <div className="skill-bar">
                        <span className="skill-per javascript">
                            <span className="tooltip">75%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">ReactJS</span>
                    <div className="skill-bar">
                        <span className="skill-per reactjs">
                            <span className="tooltip">60%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">Illustrator</span>
                    <div className="skill-bar">
                        <span className="skill-per illustrator">
                            <span className="tooltip">70%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">Photoshop</span>
                    <div className="skill-bar">
                        <span className="skill-per photoshop">
                            <span className="tooltip">80%</span>
                        </span>
                    </div>
                </div>
            
            </div>

        </div>
    )
 }

 
export default SkillsBar;
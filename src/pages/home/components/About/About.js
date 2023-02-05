import React, {Component} from "react";
import './about.scss'
import {Button} from "../../../../components/Button/Button";

class About extends Component {
    render() {
        return (
            <section className="about" id="about">
                <div className="aboutImageContainer"></div>
                <div className="wrapper aboutFlexContainer">
                    <div className="aboutInfoContainer">
                        <p className="aboutName">Pompeo Pottery </p>
                        <h1 className="aboutMainText">Unique Porcelain <span>&</span> Collection</h1>
                        <p className="aboutSubText">Unique & modern pottery made by our master in porcelain & stones</p>
                        <Button className="aboutButton" text="Shop Collection"/>
                    </div>
                </div>
            </section>
        );
    };
}

export default About;

import React, {Component} from "react";
import {Button} from "../../../../components/Button/Button";
import {Link} from "react-scroll";
import './banner.scss'

class Banner extends Component {
    render() {
        return (<section className="banner">
                <div className="wrapper bannerWrapper">
                    <p className="bannerInfo">pompeo pottery</p>
                    <h2 className="bannerTitle">Ready to start shopping?</h2>
                    <p className="bannerText">Lorem ipsum dolor sit amet, <Link to="header">consectetur adipiscing
                        elit.</Link> Suspendisse
                        varius enim in eros elementum.</p>
                    <Button text="New collection" />
                </div>
            </section>);
    };
}

export default Banner;

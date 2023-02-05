import React, {Component} from "react";
import {Button} from "../../../components/Button/Button";
import './collection.scss'

class Collection extends Component {
    render() {
        return (
            <section className="collection">
                <div className="wrapper collectionWrapper">
                    <p className="aboutName workspaceCatName">our online store</p>
                    <h2 className="workspaceTitle">Pottery Collection</h2>
                    <div className="collectionGrid"></div>
                    <div className="collectionContent">
                        <div className="collectionUpImage plate"></div>
                        <div className="collectionUpImage vaseBlue"></div>
                        <div className="collectionUpImage ceramicsImg"></div>
                    </div>
                    <div className="collectionContentUpText">

                        <div className="collectionText">
                            <p className="collectionTitle">Decor Plate</p>
                            <p className="collectionPrice">$ 65.00 USD</p>
                        </div>
                        <div className="collectionText">
                            <p className="collectionTitle">Mint Pottery</p>
                            <p className="collectionPrice">$ 75.00 USD</p>
                        </div>
                        <div className="collectionText">
                            <p className="collectionTitle">Set Of Potterys</p>
                            <p className="collectionPrice">$ 125.00 USD</p>
                        </div>
                    </div>
                    <div className="collectionContent bottom">
                        <div className="collectionUpImage vaseOrange"></div>
                        <div className="collectionUpImage vaseBlack"></div>
                        <div className="collectionUpImage vaseLava"></div>
                    </div>
                    <div className="collectionContentUpText">
                        <div className="collectionText">
                            <p className="collectionTitle">Orange Ceramic</p>
                            <p className="collectionPrice">$ 55.00 USD</p>
                        </div>
                        <div className="collectionText">
                            <p className="collectionTitle">Dark Bowl</p>
                            <p className="collectionPrice">$ 115.00 USD</p>
                        </div>
                        <div className="collectionText">
                            <p className="collectionTitle">Square Pottery</p>
                            <p className="collectionPrice">$ 75.00 USD</p>
                        </div>
                    </div>
                    <div className="collectionButtonArea">
                    <Button text="View All Products" />
                    </div>
                </div>
            </section>
        );
    };
}

export default Collection;

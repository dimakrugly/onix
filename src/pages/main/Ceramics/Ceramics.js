import React, {Component} from "react";
import './ceramics.scss';

class Ceramics extends Component {
    render() {
        return (
            <section className="ceramics">
                <div className="wrapper">
                    <div className="ceramicsGrid">
                        <div className="ceramicsGridLeft">
                            <div className="ceramicsRectangle"></div>
                            <div className="ceramicsVaseImg"></div>
                            <h3 className="ceramicsGridTitle">Orange Ceramic</h3>
                            <p className="ceramicsGridSubtitle">Pri cu dico labores officiis, odio principes
                                complectitur ad
                                sea. Sea id
                                doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore
                                perpetua
                                referrentur sed. Quas suscipit ad mea verear vivendo tincidunt.</p>
                            <a href="#" className="ceramicsLink">View Details</a>
                        </div>
                        <div className="ceramicsGridRight">
                            <h3 className="ceramicsGridTitle">Gold & Black Pottery</h3>
                            <p className="ceramicsGridSubtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                sed do
                                eiusmod
                                tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud
                                exercitationulco
                                laboris nisi ut aliquip ex ea commodo consequatuisaute.</p>
                            <a href="#" className="ceramicsLink">View Details</a>
                            <div className="ceramicsRectangle"></div>
                            <div className="ceramicsVaseRed"></div>
                        </div>
                    </div>
                </div>
                <p className="ceramicsSideText">Featured Products</p>
            </section>
        );
    };
}

export default Ceramics;

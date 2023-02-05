import React, {Component} from "react";
import './workspace.scss'

class Workspace extends Component {
    render() {
        return (
            <section className="workspace">
                <p className="workspaceSideText">Hand Craft Pottery</p>
                <div className="wrapper workspaceContainer">
                    <p className="aboutName workspaceCatName">Product categories </p>
                    <h2 className="workspaceTitle">Porcelain <span>&</span> Pottery</h2>
                    <div className="workspaceCircleContainer">
                        <div className="workSpaceCircle yellowCircle">
                            <div className="circleContent">
                                <div className="circleLogo workspaceVase"></div>
                                <p className="workspaceCircleText">VASES</p>
                            </div>
                        </div>
                        <div className="workSpaceCircle orangeCircle">
                            <div className="circleContent">
                                <div className="circleLogo workspaceMug"></div>
                                <p className="workspaceCircleText">MUGS</p>
                            </div>
                        </div>
                        <div className="workSpaceCircle redCircle">
                            <div className="circleContent">
                                <div className="circleLogo workspacePlate"></div>
                                <p className="workspaceCircleText">PLATES</p>
                            </div>
                        </div>
                    </div>
                    <div className="workspaceColumns">
                        <div className="columnLeft">
                            <h3 className="columnTitle">Hand Grafted Pottery since 1990</h3>
                            <p className="columnSubtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse varius
                                enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
                                ut commodo
                                diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                                Nunc ut sem
                                vitae risus posuere.</p>
                        </div>
                        <div className="columnRight">
                            <h3 className="columnTitle">We Provide Premium Pottery Produts</h3>
                            <p className="columnSubtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse varius
                                enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
                                ut commodo
                                diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                                Nunc ut sem
                                vitae risus posuere.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}

export default Workspace;

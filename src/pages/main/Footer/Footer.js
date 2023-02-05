import React, {Component} from "react";
import './footer.scss';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="wrapper footerWrapper">
                    <h3 className="headerLogo footerLogo">Dmytro Torop</h3>
                    <p className="footerSubText"> REACT TEST TASK 2022 </p>
                    <div className="footerContainer">
                        <div className="footerColumn">
                            <div className="footerColumnLogo mailLogo"></div>
                            <h4 className="footerColumnName">EMAIL</h4>
                            <p className="footerColumnInfo">young-z@i.ua</p>
                        </div>
                        <div className="footerColumn">
                            <div className="footerColumnLogo geoLogo"></div>
                            <h4 className="footerColumnName">GitHub</h4>
                            <a href="https://github.com/dimakrugly" className="footerColumnInfo">dimakrugly</a>
                        </div>
                        <div className="footerColumn">
                            <div className="footerColumnLogo phoneLogo"></div>
                            <h4 className="footerColumnName">CALL</h4>
                            <p className="footerColumnInfo"><span>+38(095)056-05-83</span></p>
                        </div>
                    </div>
                </div>
                <div className="footerCopyright">
                    <p className="footerDesign">Template design by</p>
                    <a href="https://www.figma.com/file/bQ749c5X90qul4sM7Fcepf/Pompeo?node-id=1%3A2"
                       className="footerDesignBy">Dorian
                        Hoxha <span>-  Image License Info </span></a>
                    <p className="footerDesign">Powered by</p>
                    <a href="https://webflow.com/" className="footerDesignBy">Webflow</a>
                </div>
            </footer>
        );
    };
}

export default Footer;

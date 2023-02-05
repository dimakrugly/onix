import React, {Component} from "react";
import './header.scss';
import {Link} from "react-scroll";
import image from './cart.png';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="wrapper">
                    <div className="headerContainer">
                        <h3 className="headerLogo">Pompeo</h3>
                        <nav className="headerMenu">
                            <ul className="headerList">
                                <li className="headerItem">
                                    <Link to="header" spy={true} smooth={true} offset={50} duration={500}>HOME</Link>
                                </li>
                                <li className="headerItem">
                                    <Link to="about" spy={true} smooth={true} offset={50} duration={500}>ABOUT</Link>
                                </li>
                                <li className="headerItem">
                                    <Link to="collection" spy={true} smooth={true} offset={50} duration={500}>SHOP</Link>
                                </li>
                                <li className="headerItem">
                                    <Link to="footer" spy={true} smooth={true} offset={50} duration={500}>CONTACT</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="divider"></div>
                        <div className="headerCart">
                        <img className="headerCartImg" src={image} alt="cart"></img>
                        <p className="headerCartText">Cart</p>
                        </div>
                    </div>
                    <div className="burger">
                        <div className="burgerLine"></div>
                        <div className="burgerLine"></div>
                        <div className="burgerLine"></div>
                    </div>
                </div>
            </header>
        )
    };
}

export default Header;

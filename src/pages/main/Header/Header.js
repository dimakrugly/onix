import React, {Component} from "react";
import './header.scss'
import image from './cart.png'

class Header extends Component {
    render() {
        return (
            <header>
                <div className="wrapper">
                    <div className="headerContainer">
                        <h3 className="headerLogo">Pompeo</h3>
                        <nav className="headerMenu">
                            <ul className="headerList">
                                <li className="headerItem headerItemActive"><a href="src/pages/main/Header/Header#">HOME</a></li>
                                <li className="headerItem"><a href="src/pages/main/Header/Header#">ABOUT</a></li>
                                <li className="headerItem"><a href="src/pages/main/Header/Header#">SHOP</a></li>
                                <li className="headerItem"><a href="src/pages/main/Header/Header#">CONTACT</a></li>
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

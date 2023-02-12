import React from 'react';
import './header.scss';
import { Link } from 'react-scroll';
import image from './cart.png';

export const Header = () => (
  <header id="header">
    <div className="wrapper">
      <div className="headerContainer">
        <h3 className="headerLogo">Pompeo</h3>
        <nav className="headerMenu">
          <ul className="headerList">
            <li className="headerItem">
              <Link to="header" spy smooth offset={50} duration={500}>
                HOME
              </Link>
            </li>
            <li className="headerItem">
              <Link to="about" spy smooth offset={50} duration={500}>
                ABOUT
              </Link>
            </li>
            <li className="headerItem">
              <Link to="collection" spy smooth offset={50} duration={500}>
                SHOP
              </Link>
            </li>
            <li className="headerItem">
              <Link to="footer" spy smooth offset={50} duration={500}>
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
        <div className="divider" />
        <div className="headerCart">
          <img className="headerCartImg" src={image} alt="cart" />
          <p className="headerCartText">Cart</p>
        </div>
      </div>
      <div className="burger">
        <div className="burgerLine" />
        <div className="burgerLine" />
        <div className="burgerLine" />
      </div>
    </div>
  </header>
);

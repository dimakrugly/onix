import React from 'react';
import './header.scss';
import image from '../../assets/img/cart.png';

export const Header = () => (
  <header>
    <div className="wrapper">
      <div className="headerContainer">
        <h3 className="headerLogo">Pompeo</h3>
        <nav className="headerMenu">
          <ul className="headerList">
            <li className="headerItem">
              <a href="#about">
                HOME
              </a>
            </li>
            <li className="headerItem">
              <a href="#workspace">
                ABOUT
              </a>
            </li>
            <li className="headerItem">
              <a href="#collection">
                SHOP
              </a>
            </li>
            <li className="headerItem">
              <a href="#footer">
                CONTACT
              </a>
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

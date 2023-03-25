import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Footer } from '../../components/Footer/Footer';
import './starDB.scss';
import { Button } from '../../components/Button/Button';
import { buttonVariants } from '../../constants/constants';

export const StarDBView = ({
  items, onItemsLoad, disabled,
}) => (
  <>
    <header>
      <div className="wrapper">
        <div className="headerContainer">
          <h3 className="headerLogo">Pompeo</h3>
          <nav className="headerStarMenu">
            <ul className="headerList">
              <li className="headerItem">
                <Link to="/onix">HOME</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <div className="wrapper">
      <h1 className="starTitle">Star DB</h1>
      <div className="starFlex">
        {items.map((item) => (
          <div className="starCard" key={item.name}>
            <div className="starImage">
              <img className="starPhoto" src={item.image} alt="alt" />
            </div>
            <div className="starInfo">
              <h2 className="starName">
                Name:
                {item.name}
              </h2>
              <h3 className="starCardSubtitle">
                Height:
                {item.height}
              </h3>
              <h3 className="starCardSubtitle">
                Weight:
                {item.mass}
              </h3>
            </div>
          </div>
        ))}
        <div className="starButtonContainer">
          <Button text="More" variant={buttonVariants.secondary} disabled={disabled} onClick={() => onItemsLoad()} />
        </div>
      </div>
    </div>
    <Footer />
  </>
);

StarDBView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    height: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    mass: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onItemsLoad: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

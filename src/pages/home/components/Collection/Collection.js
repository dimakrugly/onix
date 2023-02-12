import React, { Component } from 'react';
import { Button } from '../../../../components/Button/Button';
import './collection.scss';
import image1 from './plate.png';
import image2 from './vaseBlue.png';
import image3 from './ceramics.png';
import image4 from './vaseOrange.png';
import image5 from './vaseBlack.png';
import image6 from './vaseLava.png';

class Collection extends Component {
  render() {
    return (
      <section className="collection" id="collection">
        <div>
          <div className="wrapper collectionWrapper">
            <p className="aboutName workspaceCatName">our online store</p>
            <h2 className="workspaceTitle collectionMainText">Pottery Collection</h2>
            <div className="collectionContainer">
              <div className="collectionProductCard">
                <img className="collectionImage" src={image1} alt="imageCard" />
                <p className="collectionTitle">Decor Plate</p>
                <p className="collectionPrice">$ 65.00 USD</p>
              </div>
              <div className="collectionProductCard">
                <img className="collectionImage" src={image2} alt="imageCard" />
                <p className="collectionTitle">Mint Pottery</p>
                <p className="collectionPrice">$ 75.00 USD</p>
              </div>
              <div className="collectionProductCard">
                <img className="collectionImage" src={image3} alt="imageCard" />
                <p className="collectionTitle">Set Of Potterys</p>
                <p className="collectionPrice">$ 125.00 USD</p>
              </div>
              <div className="collectionDivider" />
              <div className="collectionDivider" />
              <div className="collectionDivider" />
              <div className="collectionProductCard">
                <img className="collectionImage" src={image4} alt="imageCard" />
                <p className="collectionTitle">Orange Ceramic</p>
                <p className="collectionPrice">$ 55.00 USD</p>
              </div>
              <div className="collectionProductCard">
                <img className="collectionImage" src={image5} alt="imageCard" />
                <p className="collectionTitle">Dark Bowl</p>
                <p className="collectionPrice">$ 115.00 USD</p>
              </div>
              <div className="collectionProductCard">
                <img className="collectionImage" src={image6} alt="imageCard" />
                <p className="collectionTitle">Square Pottery</p>
                <p className="collectionPrice">$ 75.00 USD</p>
              </div>
            </div>
          </div>
        </div>
        <div className="collectionButtonArea">
          <Button text="View All Products" />
        </div>
      </section>
    );
  }
}

export default Collection;

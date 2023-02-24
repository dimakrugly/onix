import React from 'react';
import './collection.scss';
import PropTypes from 'prop-types';
import { Button } from '../../../../components/Button/Button';

export const Collection = ({ items, onCartAdd, cartData }) => (
  <section className="collection" id="collection">
    <div>
      <div className="wrapper collectionWrapper">
        <p className="aboutName workspaceCatName">our online store</p>
        <h2 className="workspaceTitle collectionMainText">Pottery Collection</h2>
        <div className="collectionContainer">
          {items.map((item) => (
            <div className="collectionProductCard" key={item.key}>
              <img className="collectionImage" src={item.image} alt="imageCard" />
              <p className="collectionTitle">{item.title}</p>
              <p className="collectionPrice">{`$ ${item.price},00 USD`}</p>
              <Button
                disabled={cartData.some((cartItem) => cartItem.key === item.key)}
                text={cartData.some((cartItem) => cartItem.key === item.key) ? 'Done!' : 'Add to cart'}
                variant="small"
                onClick={() => {
                  onCartAdd(item);
                }}
              />
              <div className="collectionDivider" />
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="collectionButtonArea">
      <Button text="View All Products" />
    </div>
  </section>
);

Collection.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  onCartAdd: PropTypes.func.isRequired,
  cartData: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};

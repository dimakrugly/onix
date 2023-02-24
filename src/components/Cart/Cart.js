import React from 'react';
import './cart.scss';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';

export const Cart = ({
  onCartOpen,
  cartData,
  onCartRemove,
  onCartLowerSort,
  onCartHigherSort,
  onCartSearchGetValue,
  cartSearchValue,
  onCartItemDiscount,
  isDiscount,
}) => {
  const filteredProducts = cartData
    .filter((product) => product.productData.title
      .toLowerCase()
      .includes(cartSearchValue
        .toLowerCase()));

  return (
    <div className="shopCart">
      <div className="shopCartContainer">
        <div className="cartInputContainer">
          <Button
            text="Lowest first"
            variant="cart"
            onClick={() => {
              onCartLowerSort(cartData);
            }}
          />
          <Button
            text="Highest first"
            variant="cart"
            onClick={() => {
              onCartHigherSort(cartData);
            }}
          />
          <input
            type="text"
            className="cartInput"
            placeholder="Search by name"
            onChange={onCartSearchGetValue}
          />
          <Button type="button" variant="cart" className="close" onClick={onCartOpen} id="closeButton" text="×" />
        </div>
        <div className="cartFlex">
          {cartData.length === 0
            ? (
              <div className="cartEmpty">
                <p>Sorry, your shopping cart is currently empty.</p>
                <p>Please browse our selection of products to find items you would like to add.</p>
                <p>Happy shopping!</p>
              </div>
            )
            : filteredProducts.map((item) => (
              <div className="cartCard" key={item.key}>
                <div className="cartProductInfo">
                  <div className="cartImageContainer">
                    <img className="cartImage" src={item.productData.image} alt="img" />
                  </div>
                  <div className="cartInfo">
                    <div className="cartTitle">
                      <p>{item.productData.title}</p>
                    </div>
                    <div className="cartInputContainer">
                      {
                        !isDiscount ? (
                          <Button
                            type="button"
                            variant="cart"
                            text="Use discount"
                            onClick={() => {
                              onCartItemDiscount(item);
                            }}
                          />
                        )
                          : null
                      }
                      <div className="cartPrice">
                        <p>{`${item.productData.price} $`}</p>
                      </div>
                      <div className="cartButtonContainer">
                        <Button
                          type="button"
                          variant="cart"
                          text="remove"
                          onClick={() => {
                            onCartRemove(item);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="cartButtonShopContainer">
          <Button type="button" variant="cart" onClick={() => { }} text="Buy" />
          <div className="cartTotal">
            <p>
              {`Total ${cartData.reduce((acc, item) => acc + item.productData.price, 0)} $`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartData: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    productData: PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  })).isRequired,
  onCartOpen: PropTypes.func.isRequired,
  onCartRemove: PropTypes.func.isRequired,
  onCartLowerSort: PropTypes.func.isRequired,
  onCartHigherSort: PropTypes.func.isRequired,
  onCartSearchGetValue: PropTypes.func.isRequired,
  cartSearchValue: PropTypes.string.isRequired,
  onCartItemDiscount: PropTypes.func.isRequired,
  isDiscount: PropTypes.bool.isRequired,
};

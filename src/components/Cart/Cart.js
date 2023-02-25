import React from 'react';
import './cart.scss';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { buttonVariants } from '../../constants/constants';

export const Cart = ({
  onCartOpen,
  cartData,
  onCartRemove,
  onCartLowerSort,
  onCartHigherSort,
  onCartSearchGetValue,
  onCartItemDiscount,
  isDiscount,
  onFilteredProducts,
}) => (
  <div className="shopCart">
    <div className="cartButtonContainer">
      <Button
        text="Lowest first"
        variant={buttonVariants.cart}
        onClick={() => {
          onCartLowerSort(cartData);
        }}
      />
      <Button
        text="Highest first"
        variant={buttonVariants.cart}
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
      <Button type="button" variant={buttonVariants.cart} onClick={onCartOpen} id="closeButton" text="×" />
    </div>
    <div className="cartFlex">
      {cartData.length === 0
        ? (
          <div className="cartEmpty">
            <p>Sorry, your shopping cart is currently empty.</p>
          </div>
        )
        : onFilteredProducts().map((item) => (
          <div className="cartCard" key={item.key}>
            <div className="cartImageContainer">
              <img src={item.productData.image} alt="img" />
            </div>
            <div className="cartTitle">
              <p>{item.productData.title}</p>
              {
                      !isDiscount ? (
                        <Button
                          type="button"
                          variant={buttonVariants.cart}
                          text="Use discount"
                          onClick={() => {
                            onCartItemDiscount(item);
                          }}
                        />
                      )
                        : null
                    }
            </div>
            <div className="cartTitle">
              <p>{`${item.productData.price} $`}</p>
            </div>

            <div className="cartButtonContainer removeButton">
              <Button
                type="button"
                variant={buttonVariants.cart}
                text="remove"
                onClick={() => {
                  onCartRemove(item);
                }}
              />
            </div>
          </div>
        ))}
    </div>
    <div className="cartButtonShopContainer">
      <Button type="button" variant={buttonVariants.cart} onClick={() => { }} text="Buy" />
      <div className="cartTitle">
        <p>
          {`Total ${cartData.reduce((acc, item) => acc + item.productData.price, 0)} $`}
        </p>
      </div>
    </div>
  </div>

);

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
  onFilteredProducts: PropTypes.func.isRequired,
  onCartItemDiscount: PropTypes.func.isRequired,
  isDiscount: PropTypes.bool.isRequired,
};

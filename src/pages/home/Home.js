import React, { Component } from 'react';
import { HomeView } from './HomeView';
import { isTouchedMail, isValidEMail } from '../../utils/validation';
import { discount } from '../../utils/discount';
import image1 from '../../assets/img/plate.png';
import image2 from '../../assets/img/vaseBlue.png';
import image3 from '../../assets/img/ceramics.png';
import image4 from '../../assets/img/vaseOrange.png';
import image5 from '../../assets/img/vaseBlack.png';
import image6 from '../../components/Cart/vaseLava.png';
import { bubbleSort } from '../../utils/bubleSort';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        key: '1',
        image: image1,
        title: 'Decor Plate',
        price: 65,
      },
      {
        key: '2',
        image: image2,
        title: 'Mint Pottery',
        price: 65,
      },
      {
        key: '3',
        image: image3,
        title: 'Set Of Potterys',
        price: 125,
      },
      {
        key: '4',
        image: image4,
        title: 'Orange Ceramic',
        price: 55,
      },
      {
        key: '5',
        image: image5,
        title: 'Dark Bowl',
        price: 115,
      },
      {
        key: '6',
        image: image6,
        title: 'Square Pottery',
        price: 115,
      },
      ],
      formData: {
        email: '',
        isMailError: false,
        touchedMail: false,
        checkedMail: false,
      },
      isCartOpen: false,
      cartData: [],
      cartSearchValue: '',
      isMobileMenuOpen: false,
      isDiscount: false,
    };
  }

  onMobileMenuOpen = () => {
    this.setState((prev) => ({
      isMobileMenuOpen: !prev.isMobileMenuOpen,
    }));
  };

  onChangeMail = (event) => {
    this.setState((prev) => ({
      formData: {
        ...prev.formData,
        email: event.target.value,
        isMailError: isValidEMail(event.target.value),
      },
    }));
  };

  onBlurMail = (event) => {
    this.setState((prev) => ({
      formData: {
        ...prev.formData,
        touchedMail: isTouchedMail(event.target.value),
      },
    }));
  };

  onCheckedMail = () => {
    this.setState((prev) => ({
      formData: {
        ...prev.formData,
        checkedMail: !prev.formData.checkedMail,
      },
    }));
  };

  onButtonDisabled = () => {
    const { formData } = this.state;
    return !(formData.checkedMail && !formData.isMailError && formData.touchedMail);
  };

  onCartOpen = () => {
    this.setState((prev) => ({
      isCartOpen: !prev.isCartOpen,
    }));
  };

  onCartAdd = (item) => {
    this.setState((prev) => ({
      cartData: [
        ...prev.cartData,
        {
          key: item.key,
          productData: {
            title: item.title,
            image: item.image,
            price: item.price,
          },
        },
      ],
    }));
  };

  onCartRemove = (item) => {
    this.setState((prev) => ({
      cartData: prev.cartData.filter((p) => p.key !== item.key),
    }));
  };

  onCartLowerSort = () => {
    this.setState((prev) => ({
      cartData: prev.cartData.sort((el, item) => el.productData.price - item.productData.price),
    }));
  };

  onCartHigherSort = () => {
    this.setState((prev) => ({
      cartData: bubbleSort(prev.cartData),
    }));
  };

  onCartSearchGetValue = (event) => {
    this.setState(() => ({
      cartSearchValue: event.target.value,
    }));
  };

  onCartItemDiscount = (product) => {
    this.setState((prev) => ({
      cartData: prev.cartData.map((item) => {
        if (item.key === product.key) {
          return {
            ...product,
            productData: {
              ...product.productData,
              price: parseInt(discount(product.productData.price), 10),
            },
          };
        }
        return item;
      }),
      isDiscount: true,
    }));
  };

  render() {
    const {
      items, formData, isCartOpen, cartData, cartSearchValue, isMobileMenuOpen, isDiscount,
    } = this.state;
    return (
      <HomeView
        items={items}
        onChangeMailInput={this.onChangeMail}
        isError={formData.isMailError}
        value={formData.email}
        onBlur={this.onBlurMail}
        touched={formData.touchedMail}
        onCheckedMail={this.onCheckedMail}
        checked={formData.checkedMail}
        disabled={this.onButtonDisabled()}
        isCartOpen={isCartOpen}
        onCartOpen={this.onCartOpen}
        onCartAdd={this.onCartAdd}
        cartData={cartData}
        onCartRemove={this.onCartRemove}
        onCartLowerSort={this.onCartLowerSort}
        onCartHigherSort={this.onCartHigherSort}
        onCartSearchGetValue={this.onCartSearchGetValue}
        cartSearchValue={cartSearchValue}
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuOpen={this.onMobileMenuOpen}
        onCartItemDiscount={this.onCartItemDiscount}
        isDiscount={isDiscount}
      />
    );
  }
}

export default Home;

import React, { Component } from 'react';
import { isTouchedMail, isValidEMail } from '../../utils/validation';
import { discount } from '../../utils/discount';
import { bubbleSort } from '../../utils/bubleSort';
import { HomeView } from './HomeView';
import LoggerService from '../../service/logger/LoggerService';
import data from '../../db/items.json';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
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
      isShownScrollButton: false,
    };
  }

  componentDidMount() {
    this.setState(() => ({
      items: [
        ...data.items,
      ],
    }));
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    const { isShownScrollButton, isMobileMenuOpen } = this.state;

    if (isShownScrollButton !== prevState.isShownScrollButton) {
      LoggerService.logData('success', 'scroll Button switched');
    }
    if (isMobileMenuOpen !== prevState.isMobileMenuOpen) {
      LoggerService.logData('success', 'mobile menu switched');
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = ({ currentTarget: { scrollY } }) => {
    if (scrollY > 500) {
      this.setState(() => ({
        isShownScrollButton: true,
      }));
    } else {
      this.setState(() => ({
        isShownScrollButton: false,
      }));
    }
  };

  onScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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

  onFilteredProducts = () => {
    const {
      cartData,
      cartSearchValue,
    } = this.state;
    return (
      cartData.filter((product) => product
        .productData
        .title
        .toLowerCase()
        .includes(cartSearchValue
          .toLowerCase())));
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
      items,
      formData,
      isCartOpen,
      cartData,
      isMobileMenuOpen,
      isDiscount,
      isShownScrollButton,
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
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuOpen={this.onMobileMenuOpen}
        onCartItemDiscount={this.onCartItemDiscount}
        isDiscount={isDiscount}
        onFilteredProducts={this.onFilteredProducts}
        isShownScrollButton={isShownScrollButton}
        onScrollUp={this.onScrollUp}
      />
    );
  }
}

export default Home;

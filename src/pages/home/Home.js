import React, { Component } from 'react';
import axios from 'axios';
import { isTouchedMail, isValidEMail } from '../../utils/validation';
import { discount } from '../../utils/discount';
import { HomeView } from './HomeView';
import LoggerService from '../../services/logger/LoggerService';
import { bubbleSort } from '../../utils/bubleSort';
import { urlBase } from '../../constants/urlBase';

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
      currentCard: undefined,
    };
  }

  componentDidMount() {
    axios
      .get(urlBase.sku)
      .then((response) => {
        this.setState(() => ({
          items: [
            ...response.data.items,
          ],
        }));
      })
      .catch((error) => {
        console.log(error);
      });

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

  onKeyDetect = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.arrowHandler(true);
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.arrowHandler(false);
    }
  };

  arrowHandler = (isUp) => {
    const payLoad = isUp ? 1 : -1;
    const { cartData } = this.state;
    const currentActive = cartData.findIndex(((el) => el.active));

    const newIndex = (currentActive + payLoad) % cartData.length < 0 ? cartData.length - 1
      : (currentActive + payLoad) % cartData.length;

    const newCartData = cartData.map((item, index) => ({ ...item, active: index === newIndex }));
    this.setState({
      cartData: newCartData,
    });
  };

  onImageError = ({ currentTarget }) => {
    currentTarget.onerror = null;
    currentTarget.src = 'https://i.ibb.co/0QJgMM8/Screenshot-1.png';
  };

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
    const { cartData } = this.state;
    const sortOrder = cartData.length + 1;
    this.setState((prev) => ({
      cartData: [
        ...prev.cartData,
        {
          key: item.key,
          id: item.key,
          order: sortOrder,
          active: false,
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
    let i = 1;
    this.setState((prev) => ({
      cartData: [...prev.cartData]
        .sort((el, item) => el.productData.price - item.productData.price)
        .reduce((acc, item) => {
          item = { ...item, order: i += 1 };
          acc = [...acc, item];
          return acc;
        }, []),
    }));
  };

  onCartHigherSort = () => {
    let i = 1;
    this.setState((prev) => ({
      cartData: bubbleSort(prev.cartData)
        .reduce((acc, item) => {
          item = { ...item, order: i += 1 };
          acc = [...acc, item];
          return acc;
        }, []),
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

  onItemSelected = (product) => {
    this.setState((prev) => ({
      cartData: prev.cartData.map((item) => {
        if (item.key === product.key) {
          return {
            ...item,
            active: !item.active,
          };
        }
        return {
          ...item,
          active: false,
        };
      }),
    }));
  };

  onDragStartHandle = (event, card) => {
    this.onDragGetValue(card);
  };

  onDragOverHandle = (event) => {
    event.preventDefault();
  };

  onDropHandle = (event, card) => {
    const { currentCard } = this.state;
    event.preventDefault();
    this.setState((prev) => ({
      cartData: prev.cartData.map((c) => {
        if (c.id === card.id) {
          return { ...c, order: currentCard.order };
        }
        if (c.id === currentCard.id) {
          return { ...c, order: card.order };
        }
        return c;
      }).sort((a, b) => a.order - b.order),
    }));
  };

  onDragGetValue = (item) => {
    this.setState(() => ({
      currentCard: item,
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
        filteredProducts={this.onFilteredProducts()}
        isShownScrollButton={isShownScrollButton}
        onScrollUp={this.onScrollUp}
        onDragStartHandle={this.onDragStartHandle}
        onDragOverHandle={this.onDragOverHandle}
        onDropHandle={this.onDropHandle}
        onItemSelected={this.onItemSelected}
        onKeyDetect={this.onKeyDetect}
        onImageError={this.onImageError}
      />
    );
  }
}

export default Home;

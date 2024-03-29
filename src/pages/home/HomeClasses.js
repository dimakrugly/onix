import React, { Component } from 'react';
import axios from 'axios';
import withUpButton from '../../hoc/withUpButton';
import { isTouchedMail, isValidEMail } from '../../utils/validation';
import { discount } from '../../utils/discount';
import { HomeView } from './HomeView';
import LoggerService from '../../services/logger/LoggerService';
import { bubbleSort } from '../../utils/bubleSort';
import { urlBase } from '../../constants/urlBase';

class HomeClasses extends Component {
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
  }

  componentDidUpdate(_, prevState) {
    const { isMobileMenuOpen } = this.state;

    if (isMobileMenuOpen !== prevState.isMobileMenuOpen) {
      LoggerService.logData('success', 'mobile menu switched');
    }
  }

  onKeyDetect = (event) => {
    if (event.key === 'ARROW_DOWN') {
      event.preventDefault();
      this.arrowHandler(true);
    }
    if (event.key === 'ARROW_UP') {
      event.preventDefault();
      this.arrowHandler(false);
    }
  };

  arrowHandler = (isUp) => {
    const payLoad = isUp ? 1 : -1;
    const { cartData } = this.state;
    const currentActive = cartData.findIndex(((el) => el.active));

    const newIndex = (currentActive + payLoad + cartData.length) % cartData.length;

    this.setState((prev) => ({
      cartData: prev.cartData.map((item, index) => ({ ...item, active: index === newIndex })),
    }));
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
    this.setState({
      cartSearchValue: event.target.value,
    });
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
      cartData: prev.cartData.map((item) => ({
        ...item,
        active: item.key === product.key ? !item.active : false,
      })),
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
        onDragStartHandle={this.onDragStartHandle}
        onDragOverHandle={this.onDragOverHandle}
        onDropHandle={this.onDropHandle}
        onItemSelected={this.onItemSelected}
        onKeyDetect={this.onKeyDetect}
      />
    );
  }
}

export default withUpButton(HomeClasses);

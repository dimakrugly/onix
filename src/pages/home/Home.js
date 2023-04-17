import React, {
  useState, useEffect, useMemo, useCallback,
} from 'react';
import axios from 'axios';
import { useUpButton } from '../../hook/useUpButton';
import { isTouchedMail, isValidEMail } from '../../utils/validation';
import { discount } from '../../utils/discount';
import { HomeView } from './HomeView';
import LoggerService from '../../services/logger/LoggerService';
import { bubbleSort } from '../../utils/bubleSort';
import { urlBase } from '../../constants/urlBase';
import { ARROW_DOWN, ARROW_UP } from '../../constants/constants';

export const Home = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    email: '',
    isMailError: false,
    touchedMail: false,
    checkedMail: false,
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [cartSearchValue, setCartSearchValue] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDiscount, setIsDiscount] = useState(false);
  const [currentCard, setCurrentCard] = useState(undefined);
  const [newsItems, setNewsItems] = useState([]);

  const getItems = useCallback(() => {
    axios
      .get(urlBase.sku)
      .then((response) => {
        setItems(
          response.data.items,
        );
      })
      .catch(console.log);
  }, [setItems])

  useEffect(() => {
    getItems()
  }, [getItems]);

  const getNewsItems = useCallback(() => {
    axios
      .get(urlBase.news)
      .then((response) => {
        setNewsItems(response.data.results);
      })
      .catch(console.log);
  }, [setNewsItems])

  useEffect(() => {
    getNewsItems()
  }, [getNewsItems])

  useEffect(() => {
    LoggerService.logData('success', 'mobile menu switched');
  }, [isMobileMenuOpen])

  const arrowHandler = useCallback((isUp) => {
    const payLoad = isUp ? 1 : -1;
    const currentActive = cartData.findIndex(((el) => el.active));

    const newIndex = (currentActive + payLoad + cartData.length) % cartData.length;

    setCartData(cartData.map((item, index) => ({ ...item, active: index === newIndex })));
  }, [cartData]);

  const onKeyDetect = useCallback((event) => {
    if (event.key === ARROW_DOWN) {
      event.preventDefault();
      arrowHandler(true);
    }
    if (event.key === ARROW_UP) {
      event.preventDefault();
      arrowHandler(false);
    }
  }, [arrowHandler]);

  const onMobileMenuOpen = useCallback(() => {
    setIsMobileMenuOpen(
      !isMobileMenuOpen,
    );
  }, [isMobileMenuOpen]);

  const onChangeMail = useCallback((event) => {
    setFormData({
      ...formData,
      email: event.target.value,
      isMailError: isValidEMail(event.target.value),
    });
  }, [formData])

  const onBlurMail = useCallback((event) => {
    setFormData({
      ...formData,
      touchedMail: isTouchedMail(event.target.value),
    })
  }, [formData])

  const onCheckedMail = useCallback(() => {
    setFormData({
      ...formData,
      checkedMail: !formData.checkedMail,
    })
  }, [formData])

  const isButtonDisabled = useMemo(() => (
    !(formData.checkedMail && !formData.isMailError && formData.touchedMail)
  ), [formData.checkedMail, formData.isMailError, formData.touchedMail]);

  const onCartOpen = useCallback(() => {
    setIsCartOpen(!isCartOpen);
  }, [isCartOpen]);

  const onCartAdd = useCallback((item) => {
    const sortOrder = cartData.length + 1;

    setCartData([
      ...cartData,
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
    ])
  }, [cartData]);

  const onCartRemove = useCallback((event, item) => {
    event.stopPropagation();
    const newCartData = cartData.filter((cartItem) => cartItem.key !== item.key)
    setCartData(newCartData);
  }, [cartData]);

  const onCartLowerSort = useCallback(() => {
    setCartData([...cartData]
      .sort((el, item) => el.productData.price - item.productData.price)
      .map((item, index) => ({ ...item, order: index + 1 })));
  }, [cartData])

  const onCartHigherSort = useCallback(() => {
    let i = 1;
    setCartData(
      bubbleSort(cartData)
        .reduce((acc, item) => {
          item = { ...item, order: i += 1 };
          acc = [...acc, item];
          return acc;
        }, []),
    )
  }, [cartData])

  const onCartSearchGetValue = useCallback((event) => {
    setCartSearchValue(event.target.value);
  }, []);

  const filteredProduct = useMemo(() => cartData.filter((product) => product
    .productData
    .title
    .toLowerCase()
    .includes(cartSearchValue
      .toLowerCase())), [cartData, cartSearchValue])

  const onCartItemDiscount = useCallback((event, product) => {
    event.stopPropagation();
    setCartData(
      cartData.map((item) => {
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
      setIsDiscount(true),
    )
  }, [cartData]);

  const onItemSelected = useCallback((product) => {
    setCartData(cartData.map((item) => ({
      ...item,
      active: item.key === product.key ? !item.active : false,
    })))
  }, [cartData]);

  const onDragGetValue = useCallback((item) => {
    setCurrentCard(item);
  }, []);

  const onDragStartHandle = useCallback((event, card) => {
    onDragGetValue(card);
  }, [onDragGetValue]);

  const onDropHandle = useCallback((event, card) => {
    event.preventDefault();
    setCartData(cartData.map((c) => {
      if (c.id === card.id) {
        return { ...c, order: currentCard.order };
      }
      if (c.id === currentCard.id) {
        return { ...c, order: card.order };
      }
      return c;
    }).sort((a, b) => a.order - b.order))
  }, [cartData, currentCard]);

  const onDragOverHandle = useCallback((event) => {
    event.preventDefault();
  }, []);

  const {
    onScrollToTop,
    isShownScrollButton,
  } = useUpButton();

  return (
    <HomeView
      items={items}
      onChangeMailInput={onChangeMail}
      isError={formData.isMailError}
      value={formData.email}
      onBlur={onBlurMail}
      touched={formData.touchedMail}
      onCheckedMail={onCheckedMail}
      checked={formData.checkedMail}
      disabled={isButtonDisabled}
      isCartOpen={isCartOpen}
      onCartOpen={onCartOpen}
      onCartAdd={onCartAdd}
      cartData={cartData}
      onCartRemove={onCartRemove}
      onCartLowerSort={onCartLowerSort}
      onCartHigherSort={onCartHigherSort}
      onCartSearchGetValue={onCartSearchGetValue}
      isMobileMenuOpen={isMobileMenuOpen}
      onMobileMenuOpen={onMobileMenuOpen}
      onCartItemDiscount={onCartItemDiscount}
      isDiscount={isDiscount}
      filteredProducts={filteredProduct}
      onDragStartHandle={onDragStartHandle}
      onDragOverHandle={onDragOverHandle}
      onDropHandle={onDropHandle}
      onItemSelected={onItemSelected}
      onKeyDetect={onKeyDetect}
      onScrollToTop={onScrollToTop}
      isShownScrollButton={isShownScrollButton}
      newsItems={newsItems}
    />
  );
};

import React, {
  useState, useEffect, useMemo, useCallback,
} from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useUpButton } from '../../hook/useUpButton';
import { discount } from '../../utils/discount';
import { HomeView } from './HomeView';
import LoggerService from '../../services/logger/LoggerService';
import { bubbleSort } from '../../utils/bubleSort';
import { urlBase } from '../../constants/urlBase';
import { ARROW_DOWN, ARROW_UP } from '../../constants/constants';
import { useSnackBar } from '../../components/SnackBar/useSnackBar';
import { useGetNewsQuery } from '../../store/apis/newsApi';

export const Home = () => {
  const [items, setItems] = useState([]);

  const [cartData, setCartData] = useState([]);
  const [cartSearchValue, setCartSearchValue] = useState('');
  const [isDiscount, setIsDiscount] = useState(false);
  const [currentCard, setCurrentCard] = useState(undefined);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const {
    data: newsData,
    isFetching: newsIsFetching,
    error: newsError,
    isSuccess: newsIsSuccess,
    refetch: newsRefetch,
  } = useGetNewsQuery();

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

  useEffect(() => {
    LoggerService.logData('success', 'mobile menu switched');
  }, [isMobileMenuOpen])

  const arrowHandler = useCallback((isUp) => {
    const payLoad = isUp ? 1 : -1;
    const currentActive = cartData.findIndex(((el) => el.active));

    const newIndex = (currentActive + payLoad + cartData.length) % cartData.length;

    setCartData((prevState) => prevState.map((item, index) => ({
      ...item,
      active: index === newIndex,
    })));
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

  const onItemSelected = useCallback((product) => {
    setCartData(
      (prevState) => (
        prevState.map((item) => ({
          ...item,
          active: item.key === product.key ? !item.active : false,
        }))),
    )
  }, []);

  const onDragGetValue = useCallback((item) => {
    setCurrentCard(item);
  }, []);

  const onDragStartHandle = useCallback((event, card) => {
    onDragGetValue(card);
  }, [onDragGetValue]);

  const onDropHandle = useCallback((event, card) => {
    event.preventDefault();
    setCartData(
      (prevState) => (
        prevState.map((c) => {
          if (c.id === card.id) {
            return { ...c, order: currentCard.order };
          }
          if (c.id === currentCard.id) {
            return { ...c, order: card.order };
          }
          return c;
        }).sort((a, b) => a.order - b.order)),
    )
  }, [currentCard]);

  const onDragOverHandle = useCallback((event) => {
    event.preventDefault();
  }, []);

  const onMobileMenuOpen = useCallback(() => {
    setIsMobileMenuOpen((prevState) => !prevState);
  }, [setIsMobileMenuOpen]);

  const onCartOpen = useCallback(() => {
    setIsCartOpen((prevState) => !prevState);
  }, []);

  const onCartAdd = useCallback((item) => {
    const sortOrder = cartData.length + 1;
    setCartData((prevState) => [
      ...prevState,
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
    setCartData((prevState) => (prevState.filter((cartItem) => cartItem.key !== item.key)));
  }, []);

  const onCartLowerSort = useCallback(() => {
    setCartData(
      (prevState) => (
        [...prevState]
          .sort((el, item) => el.productData.price - item.productData.price)
          .map((item, index) => ({ ...item, order: index + 1 }))),
    );
  }, [])

  const onCartHigherSort = useCallback(() => {
    setCartData(
      (prevState) => (

        bubbleSort(prevState)

          .reduce((acc, item, index) => {
            item = { ...item, order: index + 1 };
            acc = [...acc, item];
            return acc;
          }, [])),
    )
  }, [])

  const onCartSearchGetValue = useCallback((event) => {
    setCartSearchValue(event.target.value);
  }, []);

  const filteredProduct = useMemo(
    () => cartData.filter((product) => product
      .productData
      .title
      .toLowerCase()
      .includes(cartSearchValue.toLowerCase())),
    [cartData, cartSearchValue],
  )

  const onCartItemDiscount = useCallback((event, product) => {
    event.stopPropagation();
    setCartData(
      (prevState) => (
        prevState.map((item) => {
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
        })
      ),
    );
    setIsDiscount(true);
  }, []);

  const {
    onScrollToTop,
    isShownScrollButton,
  } = useUpButton();

  const {
    register, handleSubmit, formState: { errors, isValid },
  } = useForm();

  const { show: showSnackBar, ref: refSnackBar } = useSnackBar();

  return (
    <HomeView
      items={items}
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
      showSnackBar={showSnackBar}
      refSnackBar={refSnackBar}
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      isValid={isValid}
      newsData={newsData}
      newsIsFetching={newsIsFetching}
      newsError={newsError}
      newsIsSuccess={newsIsSuccess}
      newsRefetch={newsRefetch}
    />
  );
};

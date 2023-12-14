import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { IoMdClose } from "react-icons/io";

import Container from "../../components/Helper/Container";
import ModalCartPage from "../../components/ModalCartPage/ModalCartPage";

import "./CartPage.scss";

const CartPage = ({setAddToCart}) => {

  const [isOpenModalCart, setIsOpenModalCart] = useState(false);
  const openModalCart = () => {
    setIsOpenModalCart(!isOpenModalCart);
  };

  const cartItemsRef = useRef(null);
  useEffect(() => {
    if (cartItemsRef.current) {
      cartItemsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const [cartProduct, setCartProduct] = useState([]);
  useEffect(() => {
    const savedCartProduct = localStorage.getItem("addToCart");
    if (savedCartProduct) {
      setCartProduct(JSON.parse(savedCartProduct));
    }
  }, []);

  const [articleToRemove, setArticleToRemove] = useState(null);
  const removeFromCart = (article) => {
    const updatedCart = cartProduct.filter((item) => item.article !== article);
    setCartProduct(updatedCart);
    localStorage.setItem("addToCart", JSON.stringify(updatedCart));
    
    setAddToCart(updatedCart);
    openModalCart(false);
  };

  const confirmRemoveFromCart = (article) => {
    removeFromCart(article);
  };

  return (
    <>
      {isOpenModalCart && 
      ( <ModalCartPage 
        handleOk={() => confirmRemoveFromCart(articleToRemove)}
        handleClose={openModalCart}
        title={"Видалення товару з кошика"}
        desc={"Ви впевнені, що хочете видалити цей товар з кошика?"} />
      )}
      <div ref={cartItemsRef} className="cart-page">
        <Container ref={cartItemsRef}>
          <h2 className="cart-page__title">CartPage</h2>
          <ul className="cart-page__wrapper">
            {cartProduct.map((item) => (
              <li className="cart-page__wrapper-item" key={item.article}>
                <div className="cart-page__item">
                  <img className="cart-page__img" src={item.image} />
                  <div className="cart-page__content">
                    <p className="cart-page__name">{item.name}</p>
                    <p className="cart-page__price">{item.price}$</p>
                    <p className="cart-page__color">{item.color}</p>
                  </div>
                </div>
                <IoMdClose
                  onClick={() => {openModalCart(true);
                  setArticleToRemove(item.article)}}
                  className="cart-page__close"
                />
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </>
  );
};

CartPage.propTypes = {
  setAddToCart: PropTypes.func,
  openModalCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  confirmRemoveFromCart: PropTypes.func,
};


export default CartPage;

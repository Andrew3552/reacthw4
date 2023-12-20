import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { IoMdClose } from "react-icons/io";

import { selectAddToCart, isModalOpenAccept } from "../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/productsSlice";

import Container from "../../components/Helper/Container";
import ModalCartPage from "../../components/ModalCartPage/ModalCartPage";

import "./CartPage.scss";


const CartPage = () => {

  const dispatch = useDispatch();

  const cartProduct = useSelector(selectAddToCart);
  const isOpenModalCart = useSelector(isModalOpenAccept);

  const cartItemsRef = useRef(null);
  useEffect(() => {
    if (cartItemsRef.current) {
      cartItemsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const [selectedItem, setSelectedItem] = useState(null);


  return (
    <>
      {isOpenModalCart && 
      ( <ModalCartPage
        selectedItem={selectedItem}
        title={"Видалення товару з кошика"}
        desc={"Ви впевнені, що хочете видалити цей товар з кошика?"} />
      )}
      <div ref={cartItemsRef} className="cart-page">
        <Container>
          <h2 className="cart-page__title">CartPage</h2>
          <ul className="cart-page__wrapper">
            { cartProduct.length > 0 ? (
            cartProduct.map((item) => (
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
                  onClick={() => { 
                    dispatch(openModal( "modalAccept", item.article ));
                    setSelectedItem(item.article);
                  }}
                  className="cart-page__close"
                />
              </li>
            ))) : (
              <p className="cart-page__wrapper-item">Корзина пуста</p>
            )}
          </ul>
        </Container>
      </div>
    </>
  );
};

CartPage.propTypes = {
  cartProduct: PropTypes.array,
  dispatch: PropTypes.func,
  cartItemsRef: PropTypes.object,
  isOpenModalCart: PropTypes.bool,
  setSelectedItem: PropTypes.func,
  selectedItem: PropTypes.string,
  openModal: PropTypes.func,
}


export default CartPage;

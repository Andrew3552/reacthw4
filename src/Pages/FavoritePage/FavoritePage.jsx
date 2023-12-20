import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { CiHeart } from "react-icons/ci";

import { selectFavorite } from "../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { removeFavoriteProducts } from "../../store/productsSlice";

import Container from "../../components/Helper/Container";

import "./FavoritePage.scss";

const FavoritePage = () => {

  const dispatch = useDispatch();
  const favoriteProducts = useSelector(selectFavorite);

  const favoriteItemsRef = useRef(null);
  useEffect(() => {
    if (favoriteItemsRef.current) {
      favoriteItemsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  })

  return (
    <div ref={favoriteItemsRef} className="favorite-page">
      <Container>
        <h2 className="favorite-page__title">FavoritePage</h2>
        <ul className="favorite-page__wrapper">
          {favoriteProducts.length > 0 ? (
          favoriteProducts.map((fav) => (
            <li className="favorite-page__wrapper-item" key={fav.article}>
              <div className="favorite-page__item">
                <img className="favorite-page__img" src={fav.image} />
                <div className="favorite-page__content">
                  <p className="favorite-page__name">{fav.name}</p>
                  <p className="favorite-page__price">{fav.price}$</p>
                  <p className="favorite-page__color">{fav.color}</p>
                </div>
              </div>
              <CiHeart className="favorite-page__heart" 
              onClick={() => {dispatch(removeFavoriteProducts(fav.article))}}/>
            </li>
          ))) : (
            <p className="favorite-page__empty">Нет избранных товаров</p>
          )}
        </ul>
      </Container>
    </div>
  );
};

FavoritePage.propTypes = {
  favoriteProducts: PropTypes.array,
  dispatch: PropTypes.func,
}

export default FavoritePage;

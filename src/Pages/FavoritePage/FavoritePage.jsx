import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { CiHeart } from "react-icons/ci";

import Container from "../../components/Helper/Container";

import "./FavoritePage.scss";

const FavoritePage = ({ setFavorite }) => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    const savedFavorite = localStorage.getItem("favorite");
    if (savedFavorite) {
      setFavoriteProducts(JSON.parse(savedFavorite));
    }
  }, []);

  const favoriteItemsRef = useRef(null);
  useEffect(() => {
    if (favoriteItemsRef.current) {
      favoriteItemsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  })

  const removeFromFavorite = (article) => {
    const updatedFavorite = favoriteProducts.filter(
      (fav) => fav.article !== article
    );
    setFavoriteProducts(updatedFavorite);
    localStorage.setItem("favorite", JSON.stringify(updatedFavorite));
    localStorage.removeItem(`isClicked_${article}`);


    setFavorite(updatedFavorite);
  }

  return (
    <div ref={favoriteItemsRef} className="favorite-page">
      <Container>
        <h2 className="favorite-page__title">FavoritePage</h2>
        <ul className="favorite-page__wrapper">
          {favoriteProducts.map((fav) => (
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
              onClick={() => removeFromFavorite(fav.article)}/>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

FavoritePage.propTypes = {
  setFavorite: PropTypes.func,
  removeFromFavorite: PropTypes.func,

}

export default FavoritePage;

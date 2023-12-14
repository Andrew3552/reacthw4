import { useState, useEffect } from 'react'

import { Routes, Route } from 'react-router-dom'
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';


import MainProduct from './components/Main/MainProduct/MainProduct';
import FavoritePage from './Pages/FavoritePage/FavoritePage';
import CartPage from './Pages/CartPage/CartPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import Layout from './components/Layout/Layout';

import './App.scss'

function App() {


    // const [favorite, setFavorite] = useState(() => {
    //   const savedFavorite = localStorage.getItem('favorite');
    //   return savedFavorite ? JSON.parse(savedFavorite) : [];
    // });

    // const handleFavorite = (article) => {
    //   setFavorite((prevFavorite) => {
    //     const isArticleInFavorites = prevFavorite.some((fav) => fav.article === article);
    
    //     if (isArticleInFavorites) {
    //       const updatedFavorite = prevFavorite.filter((fav) => fav.article !== article);
    //       localStorage.setItem('favorite', JSON.stringify(updatedFavorite));
    //       return updatedFavorite;
    //     } else {
    //       const selectedProduct = productArray.find((product) => product.article === article);
    //       if (selectedProduct) {
    //         const updatedFavorite = [...prevFavorite, selectedProduct];
    //         localStorage.setItem('favorite', JSON.stringify(updatedFavorite));
    //         return updatedFavorite;
    //       }
    //     }
    //     return prevFavorite; 
    //   });
    // };
 
    // function clearLocalStorage() {
    //   localStorage.clear();
    // }
    
    // // Вызов функции очистки localStorage
    // clearLocalStorage();

    const [addToCart, setAddToCart] = useState(() => {
      const savedAddToCart = localStorage.getItem('addToCart');
      return savedAddToCart ? JSON.parse(savedAddToCart) : [];
    });

    const handleAddToCart = (article) => {
      setAddToCart((prevAddToCart) => {
        const isArticleInCart = prevAddToCart.some((item) => item.article === article);
    
        if (isArticleInCart) {
          const updatedAddToCart = prevAddToCart.filter((item) => item.article !== article);
          localStorage.setItem('addToCart', JSON.stringify(updatedAddToCart));
          return updatedAddToCart;
        } else {
          const selectedProduct = productArray.find((product) => product.article === article);
    
          if (selectedProduct) {
            const updatedAddToCart = [...prevAddToCart, selectedProduct];
            localStorage.setItem('addToCart', JSON.stringify(updatedAddToCart));
            return updatedAddToCart;
          }
        }
    
        return prevAddToCart;
      });
    };

  return (
    <>
      <Routes>
        <Route 
          path="/" 
          element={
          <Layout 
          // favorite={favorite} 
          addToCart={addToCart} 
          />
          }
        >
          <Route path='/' element={
            <MainProduct 
              // productArray={productArray}
              // handleFavorite={handleFavorite}
              handleAddToCart={handleAddToCart}
              isCart={(product) => addToCart.some((fav) => fav.article === product.article)}
              // isFavorite={(product) => favorite.some((fav) => fav.article === product.article)}
            />
          }/>
          <Route path='/favorite' element={<FavoritePage 
          // setFavorite={setFavorite} 
          />} />
          <Route path='/cart' element={<CartPage setAddToCart={setAddToCart}/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

App.propTypes = {
  productArray: PropTypes.array,
  handleFavorite: PropTypes.func,
  handleAddToCart: PropTypes.func,
  isCart: PropTypes.func,
  isFavorite: PropTypes.func,
  favorite: PropTypes.array,
  addToCart: PropTypes.array,
  setProductArray: PropTypes.func,
  setFavorite: PropTypes.func,
  setAddToCart: PropTypes.func,
}

export default App

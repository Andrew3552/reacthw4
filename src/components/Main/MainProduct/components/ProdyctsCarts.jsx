import PropTypes from 'prop-types'
import  { useState } from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import cx from "classnames";

import {
    removeFavoriteProducts,
    setFavoriteProducts,
    removeCartProducts,
    setCartProducts,
    openModal,
    setCurrentProduct
} from "../../../../store/productsSlice";
import { selectAddToCart, selectFavorite, isModalOpenCart, selectCurrentProduct} from '../../../../store/selectors';
import { useDispatch, useSelector } from 'react-redux';

import ProductModal from './ProductModal'
import Button from '../../../Button/Button'

const ProductCarts = ({
    name, 
    article, 
    price, 
    image, 
    color,
}) => {

    const product = {
        name,
        price,
        image,
        article,
        color
    };

    const dispatch = useDispatch();

    const isModalOpen = useSelector(isModalOpenCart);
    const currentProduct = useSelector(selectCurrentProduct);
    const favoriteProducts = useSelector(selectFavorite);
    const cartProducts = useSelector(selectAddToCart);
    
    const handleOpenModal = () => {
        const currentProductInfo = {
            name,
            price,
            image,
            article,
            color
        };
        dispatch(setCurrentProduct(currentProductInfo));
        dispatch(openModal("modalCart"));
    };

    const handleFavorite = () => {
        if (favoriteProducts.some((product) => product.article === article)) {
            dispatch(removeFavoriteProducts(article));
        } else {
            dispatch(setFavoriteProducts(product));
        }
    }
    
    const handleAddToCart = () => {
        if (cartProducts.some((product) => product.article === article)) {
            dispatch(removeCartProducts(article));
        } else {
            dispatch(setCartProducts(product));
        }
    }

    const handleAddToCartWithModalClose = (article) => {
        handleAddToCart(article);
        handleOpenModal(); 
    }
    
    const isInFavorite = 
    favoriteProducts && 
    favoriteProducts.some((product) => product.article === article); 
        
    const [isHovered, setIsHovered] = useState(false);
      
    return (
        <>
        {isModalOpen && currentProduct.article === article && 
            (<ProductModal
            name={name}
            price={price}
            image={image}
            article={article}
            color={color}
            handleAddToCartWithModalClose={handleAddToCartWithModalClose}
            />)}

            <div className={`products-cart__item ${isHovered && !isModalOpen ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                <img className='products-cart__item-img' src={image} alt="" />
                <Button className={cx("favorite", {"heart": isInFavorite})}
                onClick={handleFavorite}>
                    {isInFavorite ?  
                        <IoIosHeartEmpty className='heart'/> : 
                        <IoIosHeartEmpty/>
                        }
                </Button>
                <div className="products-cart__item-info">
                    <p className="products-cart__item-title"><b>Name:</b> {name}</p>
                    <p className="products-cart__item-price"><b>Price:</b> {price} $</p>
                    {/* <p className="products-cart__item-article">Article: {article}</p> */}
                    <p className="products-cart__item-color"><b>Color:</b> {color}</p>
                </div>
                <Button btnCart onClick={handleOpenModal}>Add to cart</Button>
            </div>
            </>
    )
}

ProductCarts.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    article: PropTypes.number,
    color: PropTypes.string,
    handleAddToCart: PropTypes.func,
    handleAddToCartWithModalClose: PropTypes.func,
    handleFavorite: PropTypes.func,
    isInFavorite: PropTypes.bool,
    isModalOpen: PropTypes.bool,
    currentProduct: PropTypes.object,
    handleOpenModal: PropTypes.func,
    favoriteProducts: PropTypes.array,
    cartProducts: PropTypes.array,
    isInCart: PropTypes.bool
}

export default ProductCarts


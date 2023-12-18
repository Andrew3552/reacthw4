import PropTypes from 'prop-types'
import  { useState } from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import cx from "classnames";

import ProductModal from './ProductModal'
import Button from '../../../Button/Button'

const ProductCarts = ({
    name, 
    article, 
    price, 
    image, 
    color, 
    handleFavorite, 
    isFavorite, 
    isCart, 
    handleAddToCart
}) => {

    const product = {
        name,
        price,
        image,
        article,
        color
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const handleAddToCartWithModalClose = (article) => {
        handleAddToCart(article);
        openModal(); 
    }
    
    const [isClicked, setIsClicked] = useState(() => {
        const savedIsClicked = localStorage.getItem(`isClicked_${article}`);
        return savedIsClicked ? JSON.parse(savedIsClicked) : false;
      });
      
      const toggleFavorite = () => {
        handleFavorite(article);
        setIsClicked((prevIsClicked) => {
          const newIsClicked = !prevIsClicked;
          localStorage.setItem(`isClicked_${article}`, JSON.stringify(newIsClicked));
          return newIsClicked;
        });
      };

    const [isHovered, setIsHovered] = useState(false);
      
    return (
        <>
        {isModalOpen && 
            (<ProductModal
            product={product}
            handleClose={openModal}
            handleAddToCartWithModalClose={handleAddToCartWithModalClose}
            isFavorite={isFavorite}
            handleFavorite={handleFavorite}
            isCart={isCart}
            handleAddToCart={handleAddToCart}
            name={name}
            price={price}
            image={image}
            article={article}
            color={color}
            />)}

            <div className={`products-cart__item ${isHovered && !isModalOpen ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                <img className='products-cart__item-img' src={image} alt="" />
                <Button className={cx("favorite", {"heart": isClicked})}
                 onClick={toggleFavorite}>
                    {isClicked ?  
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
                <Button btnCart onClick={() => openModal()}>Add to cart</Button>

              
            </div>
            </>
    )
}

ProductCarts.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    article: PropTypes.number,
    color: PropTypes.string
}

export default ProductCarts


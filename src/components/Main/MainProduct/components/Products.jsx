import PropTypes from 'prop-types'

import ProductCarts from "./ProdyctsCarts"


const Products = ({
    data, 
    handleFavorite, 
    isFavorite, 
    isCart, 
    handleAddToCart
}) => {

    return (
        <div className="products">
            {data.map(({ name, price, image, article, color}) =>
                (<ProductCarts 
                    key={article}
                    name={name}
                    price={price}
                    image={image}
                    color={color}
                    isFavorite={isFavorite}
                    handleFavorite={handleFavorite}
                    isCart={isCart}
                    handleAddToCart={handleAddToCart}
                    article={article}
                />))}
        </div>       
    )
}

Products.propTypes = {
    data: PropTypes.array,
    handleFavorite: PropTypes.func,
    isFavorite: PropTypes.func,
    isCart: PropTypes.func,
    handleAddToCart: PropTypes.func
}


export default Products
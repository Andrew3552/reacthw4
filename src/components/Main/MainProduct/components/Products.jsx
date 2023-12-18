import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectProducts } from '../../../../store/selectors';



import ProductCarts from "./ProdyctsCarts"


const Products = ({
    // data, 
    handleFavorite, 
    isFavorite, 
    isCart, 
    handleAddToCart
}) => {

    const {products} = useSelector(selectProducts);

    return (
        <div className="products">
            {products && products.map(({ name, price, image, article, color}) =>
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
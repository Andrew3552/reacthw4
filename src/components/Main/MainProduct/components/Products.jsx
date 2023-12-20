import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectProducts } from '../../../../store/selectors';



import ProductCarts from "./ProdyctsCarts"


const Products = ({
    
   
   
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
                    article={article}
                />))}
        </div>       
    )
}

export default Products
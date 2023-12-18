import PropTypes from "prop-types";
// import { actionFetchProduct, actionAddFavorite, actionRemoveFavorite } from "../../../store/action";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorite, selectProducts } from "../../../store/selectors";
import { useEffect } from "react";

import Container from "../../Helper/Container"
import Body from "../../Helper/Body"
import Products from "./components/Products"

import "./MainProduct.scss"
import { fetchData } from "../../../store/operatioins";

const MainProduct = ({
    isFavorite, 
    isCart,
    handleAddToCart
}) => {

    const dispatch = useDispatch();
    const productArray = useSelector(selectProducts);
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    // const favorite = useSelector(selectFavorite);
    // useEffect(() => {
    //     const savedFavorite = localStorage.getItem('favorite');
    //     if (savedFavorite) {
    //         dispatch(actionAddFavorite(JSON.parse(savedFavorite)));
    //     }
    // }, [dispatch]);

    // const handleFavorite = (article) => {
    //    const isArticleInFavorite = favorite.some((fav) => fav.article === article);
    //    if (isArticleInFavorite) {
    //        const updatedFavorite = favorite.filter((fav) => fav.article !== article);
    //        dispatch(actionRemoveFavorite(article));
    //     //    localStorage.setItem('favorite', JSON.stringify(updatedFavorite));  
    //    } else {
    //        const selectedProduct = productArray.find((product) => product.article === article);
    //        if (selectedProduct) {
    //            const updatedFavorite = [...favorite, selectedProduct];
    //            dispatch(actionAddFavorite(selectedProduct));
    //         //    localStorage.setItem('favorite', JSON.stringify(updatedFavorite)); 
    //        }
    //    }
    // };



    return (
        <div className="main-product">
            <Container>
                <Body>           
                    <h2 className="product__title">Categories For Men</h2>
                  <Products 
                    // handleFavorite={handleFavorite}
                    isFavorite={isFavorite}
                    isCart={isCart}
                    handleAddToCart={handleAddToCart}
                    // data={productArray}
                    />
                </Body> 
            </Container>
        </div>
    )
}

MainProduct.propTypes = {
    handleFavorite: PropTypes.func,
    productArray: PropTypes.array,
    isFavorite: PropTypes.func,
    isCart: PropTypes.func,
    handleAddToCart: PropTypes.func
}

export default MainProduct
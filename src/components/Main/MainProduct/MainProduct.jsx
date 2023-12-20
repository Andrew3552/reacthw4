import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../../store/selectors";
import { useEffect } from "react";

import Container from "../../Helper/Container"
import Body from "../../Helper/Body"
import Products from "./components/Products"

import "./MainProduct.scss"
import { fetchData } from "../../../store/operatioins";


const MainProduct = () => {

    const dispatch = useDispatch();
    const productArray = useSelector(selectProducts);
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <div className="main-product">
            <Container>
                <Body>           
                    <h2 className="product__title">Categories For Men</h2>
                  <Products />
                </Body> 
            </Container>
        </div>
    )
}

MainProduct.propTypes = {
    productArray: PropTypes.array,
}

export default MainProduct
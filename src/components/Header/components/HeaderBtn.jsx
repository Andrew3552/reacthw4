import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { selectAddToCart, selectFavorite} from "../../../store/selectors";

import HeartIcon from "./icons/heart"
import ShoppingCartIcon from "./icons/shopping-cart"
import { useSelector } from "react-redux";

const HeaderBtn = () => {

    const favorite = useSelector(selectFavorite);
    const addToCart = useSelector(selectAddToCart);

    return  (
        <div className="header__btn">   
            <Link to="/favorite">
                <HeartIcon  className="icon-favorite"/>
                <span>{favorite.length}</span>
            </Link>
            <Link to="/cart">
                <ShoppingCartIcon className="icon-basket" />
                <span>{addToCart.length}</span>
            </Link>
        </div>
    )
}

HeaderBtn.propTypes = {
    favorite: PropTypes.array,
    addToCart: PropTypes.array
}

export default HeaderBtn





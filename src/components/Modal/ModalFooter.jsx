import PropTypes from "prop-types";
import { openModal, removeCartProducts, } from "../../store/productsSlice";
import { useDispatch } from "react-redux";

import Button from "../Button/Button"


const ModalFooter = ({
    firstText,  
    article,
    secondText,
    thirdText,
    handleAddToCartWithModalClose,
    selectedItem
    
}) => { 

    const dispatch = useDispatch();
   
    return (
        <div className="modal__footer">
            {firstText && <Button className="modal__footer-btn"  onClick={() => handleAddToCartWithModalClose(article)}>
                Add to cart  
                </Button>}
            {secondText && <Button className="modal__footer-btn btn-cancel" onClick={() => {dispatch(openModal("modalAccept"))}}>{secondText}</Button>}
            {thirdText && <Button className="modal__footer-btn btn-ok" onClick={() => {dispatch(removeCartProducts(selectedItem)); dispatch(openModal("modalAccept"))}}>{thirdText}</Button>}
        </div>
    )
}

ModalFooter.propTypes = {
    firstText: PropTypes.string,
    isCart: PropTypes.func,
    handleAddToCartWithModalClose: PropTypes.func,
    article: PropTypes.number,
    secondText: PropTypes.string,
    thirdText: PropTypes.string,
    handleAddToCartWithModalClose: PropTypes.func,
    selectedItem: PropTypes.object
}

export default ModalFooter

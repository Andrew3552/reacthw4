import PropTypes from "prop-types";

import Button from "../Button/Button"

const ModalFooter = ({
    firstText, 
    isCart, 
    article,
    secondText,
    thirdText,
    secondClick,
    thirdClick,
    handleAddToCartWithModalClose
}) => {

   
    
    return (
        <div className="modal__footer">
            {firstText && <Button className="modal__footer-btn"  onClick={() => handleAddToCartWithModalClose(article)}>
                {isCart ? "Add to cart" : ""}  
                </Button>}
            {secondText && <Button className="modal__footer-btn btn-cancel" onClick={secondClick}>{secondText}</Button>}
            {thirdText && <Button className="modal__footer-btn btn-ok" onClick={thirdClick}>{thirdText}</Button>}
        </div>
    )
}

ModalFooter.propTypes = {
    firstText: PropTypes.string,
    isCart: PropTypes.func,
    handleAddToCart: PropTypes.func,
    article: PropTypes.number
}

export default ModalFooter

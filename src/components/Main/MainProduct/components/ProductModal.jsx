import PropTypes from "prop-types";

import Modal from "../../../Modal/Modal";
import ModalBody from "../../../Modal/ModalBody";
import ModalClose from "../../../Modal/ModalClose";
import ModalFooter from "../../../Modal/ModalFooter";
import ModalHeader from "../../../Modal/ModalHeader";
import ModalWrapper from "../../../Modal/ModalWrapper";

import "./ProductModal.scss";

const ProductModal = ({ 
  name, 
  image, 
  price, 
  article, 
  color, 
  handleAddToCartWithModalClose
}) => {

    return (
    <ModalWrapper >
      <Modal>
            <ModalClose />
        <ModalHeader>
          <ModalBody>
            <img className="modal-cart__item-img" src={image} alt=""  />
            <p className="modal-cart__item-title">
              <b>Name:</b> {name}
            </p>
            <p className="modal-cart__item-price">
              <b>Price:</b> {price} $
            </p>
            <p className="modal-cart__item-color">
              <b>Color:</b> {color}
            </p>
          </ModalBody>
        </ModalHeader>
        <ModalFooter
        handleAddToCartWithModalClose={handleAddToCartWithModalClose}
        article={article}
        firstText="Add to cart"
        >
        </ModalFooter>
      </Modal>
    </ModalWrapper>
  );
};

ProductModal.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  article: PropTypes.number,
  color: PropTypes.string,
  handleAddToCartWithModalClose: PropTypes.func
}

export default ProductModal;

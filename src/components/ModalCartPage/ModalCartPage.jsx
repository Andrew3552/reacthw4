import ModalWrapper from "../Modal/ModalWrapper";
import Modal from "../Modal/Modal";
import ModalHeader from "../Modal/ModalHeader";
import ModalBody from "../Modal/ModalBody";
import ModalFooter from "../Modal/ModalFooter";
import ModalClose from "../Modal/ModalClose";
import PropTypes from "prop-types";

import './ModalCartPage.scss'

const ModalCartPage = ({
    title,
    desc,
    handleClose,
    handleOk
}) => {

    return (
        <ModalWrapper ModalClose={handleClose}>
            <Modal>
                <ModalHeader>
                    <ModalClose
                        ModalClose={handleClose}
                    />
                </ModalHeader>
                <ModalBody>
                    <h1 className="modal-cart__item-title">{title}</h1>
                    <p className="modal-cart__item-desc">{desc}</p>
                </ModalBody>
                <ModalFooter
                    thirdText="Ok"
                    secondText="Cancel"
                    thirdClick={handleOk}
                    secondClick={handleClose}
                />
            </Modal>
        </ModalWrapper>
    )
}

ModalCartPage.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    handleClose: PropTypes.func,
    handleOk: PropTypes.func
}

export default ModalCartPage



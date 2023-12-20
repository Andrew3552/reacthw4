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
    selectedItem
}) => {

    return (
        <ModalWrapper >
            <Modal>
                <ModalHeader>
                    <ModalClose/>
                </ModalHeader>
                <ModalBody>
                    <h1 className="modal-cart__item-title">{title}</h1>
                    <p className="modal-cart__item-desc">{desc}</p>
                </ModalBody>
                <ModalFooter
                    thirdText="Ok"
                    secondText="Cancel"
                    selectedItem={selectedItem}
                />
            </Modal>
        </ModalWrapper>
    )
}

ModalCartPage.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    selectedItem: PropTypes.object
}

export default ModalCartPage



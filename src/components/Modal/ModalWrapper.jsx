import PropTypes from "prop-types";

const ModalWrapper = ({children, ModalClose}) => {

    const handWrapperClick = (e) => {
        if (e.target === e.currentTarget) {
            ModalClose()
        }
    }

    return (
        <div className="modal__wrapper" onClick={handWrapperClick}>{children}</div>
    )
}

ModalWrapper.propTypes = {
    children: PropTypes.node,
    ModalClose: PropTypes.func
}

export default ModalWrapper
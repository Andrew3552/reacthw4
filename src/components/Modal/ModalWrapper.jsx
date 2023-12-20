import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { openModal } from "../../store/productsSlice";

const ModalWrapper = ({children}) => {

    const dispatch = useDispatch();

    const modalClose = (e) => {
        if (e.target === e.currentTarget) {
           dispatch(openModal("modalCart"));
        } if (e.target === e.currentTarget) {
            dispatch(openModal("modalAccept"));
        }
    }

    return (
        <div className="modal__wrapper" onClick= {modalClose}>{children}</div>
    )
}

ModalWrapper.propTypes = {
    children: PropTypes.node,
    modalClose: PropTypes.func
}

export default ModalWrapper
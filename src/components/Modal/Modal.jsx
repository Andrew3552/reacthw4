import PropTypes from "prop-types";

import cx from 'classnames'
const Modal = ({children, classNames}) => {

    
    return (
        <div className={cx("modal", classNames)}>
            <div className={cx("modal__box", classNames)}>
                {children}
            </div>
        </div>
    )
}

Modal.propTypes = {
    children: PropTypes.node,
    classNames: PropTypes.string
}

export default Modal
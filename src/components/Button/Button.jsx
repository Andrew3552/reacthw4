import ProtoTypes from 'prop-types'
import cx from 'classnames'
import './Button.scss'

const Button = (props) => {
    
    const {
        type = "button", 
        className = '', 
        btnFavorite, 
        btnBasket,
        mainBtn,
        btnCart,
        onClick,
        children, 
        ...restProps} = props

    return (
        <button className={cx("modal__button",
        className,
        {"btn-favorite": btnFavorite},
        {"btn-basket": btnBasket}, 
        {"main-btn": mainBtn},
        {"btn-cart": btnCart})}
        onClick={onClick} 
        type={type}
        {...restProps}>{children}</button>
    )
}

Button.defaultProps = {
    type: "button",
    onClick: () => {}
}

Button.propTypes = {
    type: ProtoTypes.string,
    className: ProtoTypes.string,
    btnFavorite: ProtoTypes.bool,
    btnBasket: ProtoTypes.bool,
    onClick: ProtoTypes.func,
    children: ProtoTypes.any
}

export default Button
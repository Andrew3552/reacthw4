import PropTypes from "prop-types";
import cx from 'classnames'

const NavItem = (props) => {

    const {
        text,
        className = '',
        navigation,
        footerItem,
        ...restProps
    } = props
    
    return (
                <li 
                className={cx("item", className, 
                {"nav": navigation},
                {"footer-item": 
                footerItem})}>
                    <a href="#">{text}</a>
                </li> 
            )
}

NavItem.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    navigation: PropTypes.bool,
    footerItem: PropTypes.bool
}


export default NavItem
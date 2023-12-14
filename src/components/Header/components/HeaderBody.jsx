import PropTypes from "prop-types";
const HeaderBody = ({children}) => {
    return (
        <div className="header__body">{children}</div>
    )
}

HeaderBody.propTypes = {
    children: PropTypes.node.isRequired
}


export default HeaderBody
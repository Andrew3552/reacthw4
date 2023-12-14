import PropTypes from "prop-types";

import NavItem from "./NavItem"

const NavMenu = () => {

    const item = [
        'Shop',
        'Men',
        'Women',
        'Combos',
        'Joggers'
        ]

        const navItem = item.map((text, index) => 
        (<NavItem className="nav" key={index} text={text}/>))

    return (
               <ul className="nav-menu">
                   {navItem}
               </ul> 
            )
}

NavMenu.propTypes = {
    className: PropTypes.string
}

export default NavMenu
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

import Container from "../Helper/Container"
import Body from "../Helper/Body"
import NavMenu from "./components/NavMenu"
import HeaderBtn from "./components/HeaderBtn"
import Logo from "../../assets/img/logo.png"
import "./Header.scss"

const Header = ({favorite, addToCart}) => {

    return (
        <div className="header">
            <Container>
                <Body headerBody>
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                    <NavMenu />
                    <HeaderBtn favorite={favorite} addToCart={addToCart} />
                </Body>
            </Container>
        </div>
    )
}

Header.propTypes = {
    favorite: PropTypes.array,
    addToCart: PropTypes.array
}

export default Header
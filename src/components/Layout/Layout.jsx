import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainTitle from "../Main/MainTitle/MainTitle";



const Layout = ({favorite, addToCart}) => {

    return (
        <div>
            <Header favorite={favorite} addToCart={addToCart} />
            <MainTitle />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
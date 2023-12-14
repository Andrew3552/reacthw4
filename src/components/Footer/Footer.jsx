import Container from "../Helper/Container"
import Body from "../Helper/Body"
import FooterWrapper from "./components/FooterWrapper";
import FooterWrapperBtn from "./components/FooterWrapperBtn";

import './Footer.scss';

const Footer = () => {

    return (
        <div className="footer">
            <Container>
                <Body>
                    <FooterWrapper/>
                    <FooterWrapperBtn/>
                    <p className="footer__copyright">Copyright &copy; 2023 Euphoria Folks Pvt Ltd. All rights reserved.</p>
                </Body>
            </Container>
        </div>
    )
}

export default Footer
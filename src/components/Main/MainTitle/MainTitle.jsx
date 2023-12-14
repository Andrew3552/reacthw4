
import Container from "../../Helper/Container"
import Body from "../../Helper/Body"
import Button from "../../Button/Button"

import "./MainTitle.scss"
const MainTitle = () => {
    return (
        <div className="main-title">
            <Container>
                <Body mainTitleBody>
                <p className="subtitle">T-shirt / Tops</p>
                <h1 className="title">Summer Value Pack</h1>
                <p className="description">cool / colorful / comfy</p>
                <Button mainBtn>Shop Now</Button>
                </Body>
            </Container>
        </div>
    )
}

export default MainTitle
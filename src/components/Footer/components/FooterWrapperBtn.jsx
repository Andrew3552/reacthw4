import Button from "../../Button/Button"
import FbIcon from "../icons/fb-icon.svg?react"
import InstIcon from "../icons/inst-icon.svg?react"
import TwitterIcon from "../icons/twitter-icon.svg?react"
import InIcon from "../icons/in-icon.svg?react"

const FooterWrapperBtn = () => {
    
    return (
        <div className="footer__wrapper-btn">
            <Button><FbIcon /></Button>
            <Button><InstIcon /></Button>
            <Button><TwitterIcon /></Button>
            <Button><InIcon /></Button>
            
        </div>
    )
}

export default FooterWrapperBtn
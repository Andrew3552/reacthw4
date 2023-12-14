import NavItem from "../../Header/components/NavItem"
import FooterTitle from "./FooterTitle"

const FooterNeedHelp = () => {

    const footerNeedHelp = [
        'Contact Us',
        'Track Order',
        'Returns & Refunds',
        'FAQ',
        'Career'  
    ]

    const footerNeedHelpList = footerNeedHelp.map((text, index) => 
    <NavItem footerItem key={index} text={text}/>
    )
    
    return (
        <div className="footer__need-help">
            <FooterTitle FooterNeedHelp text="Need Help"/>
            <ul className="footer__need-help-list">
                {footerNeedHelpList}
            </ul>
        </div>
    )
}

export default FooterNeedHelp
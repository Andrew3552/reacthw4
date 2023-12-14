import FooterTitle from "./FooterTitle"
import NavItem from "../../Header/components/NavItem"
const FooterCompany = () => {

    const footerCompany = [
        'About Us',
        'euphoria Blog',
        'euphoriastan',
        'Collaboration',
        'Media'
    ]

    const footerCompanyList = footerCompany.map((text, index) => 
    <NavItem footerItem key={index} text={text}/>)
    
    return (
        <div className="footer__company">
            <FooterTitle text="Company"/>
            <ul className="footer__company-list">
            {footerCompanyList}
            </ul>
            
        </div>
    )
}

export default FooterCompany
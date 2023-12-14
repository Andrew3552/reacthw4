import NavItem from "../../Header/components/NavItem"
import FooterTitle from "./FooterTitle"

const FooterMoreInfo = () => {
    
    const footerMoreInfo = [
        'Term and Conditions',
        'Privacy Policy',
        'Shipping Policy',
        'Sitemap'
    ]

    const footerMoreInfoList = footerMoreInfo.map((text, index) => 
    <NavItem footerItem key={index} text={text}/>)

    return (
        <div className="footer__more-info">
            <FooterTitle text="More Info"/>
            <ul className="footer__more-info-list">
                {footerMoreInfoList}
            </ul>
        </div>
    )
}

export default FooterMoreInfo
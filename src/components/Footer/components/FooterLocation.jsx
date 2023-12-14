import NavItem from "../../Header/components/NavItem"
import FooterTitle from "./FooterTitle"
const FooterLocation = () => {
    
    const footerLocation = [
        'support@euphoria.in',
        'Eklingpura Chouraha, Ahmedabad Main Road',
        '(NH 8- Near Mahadev Hotel) Udaipur, India- 313002'
    ]

    const footerLocationList = footerLocation.map((text, index) => 
    <NavItem footerItem key={index} text={text}/>)

    return (
        <div className="footer__location">
            <FooterTitle text="Location"/>
            <ul className="footer__location-list">
                {footerLocationList}
            </ul>
        </div>
    )
}

export default FooterLocation
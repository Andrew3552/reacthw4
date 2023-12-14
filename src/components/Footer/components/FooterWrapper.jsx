import FooterNeedHelp from "./FooterNeedHelp"
import FooterCompany from "./FooterCompany"
import FooterMoreInfo from "./FooterMoreInfo"
import FooterLocation from "./FooterLocation"

const FooterWrapper = () => {
    return (
        <div className="footer__wrapper">
            <FooterNeedHelp />
            <FooterCompany />
            <FooterMoreInfo />
            <FooterLocation />
        </div>
    )
}

export default FooterWrapper
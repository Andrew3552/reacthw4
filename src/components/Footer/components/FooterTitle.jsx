import cx from "classnames"
const FooterTitle = (props) => {

    const {
        text,
        className = "",
        NeedHelpTitle,
    } = props


    
    
    return (
        <h3 className={cx("footer__title", className, {"need-help-title": NeedHelpTitle})}>{text}</h3>
    )
}



export default FooterTitle
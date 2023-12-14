import cx from 'classnames'

const Body = (props) => {

    const { className='', headerBody, mainTitleBody, children} = props

    return (
        <div className={cx("body",  className, {"header-body": headerBody, "main-title__body": mainTitleBody})}>{children}</div>
    )
}

export default Body
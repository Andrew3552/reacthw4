import {Link, useLocation, useNavigate} from "react-router-dom";
import "./NotFoundPage.scss"


const NotFoundPage = () => {
	// const location = useLocation()
	// const navigate = useNavigate()
	// console.log('HomePage location',location);

	// const goBack = () => navigate(-1)
	// const rederect = () => navigate('/user')
	return (
		<div className="not-page">
			<div>
				<p className="page-title">Некоректне значення</p>
				<p className="page-desc"> Давайте повернемося на головну сторінку і спробуємо ще раз... </p>
				<p className="page-update">
					<Link to="/"><span className="link-home">Клікніть сюди</span>, щоб перейти на домашню сторінку</Link>
				</p>
			</div>
		</div>
	)
}

export default NotFoundPage

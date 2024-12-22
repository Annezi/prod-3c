import { Link } from "react-router-dom";
import './NavbarPromo.css'

export default function PromoNavigation() {
	return (
		<div className="header-promo">
			<div className="navbar-promo shadow">
				<div className="nav-links-promo text-subtitle-s">
					<Link to="/">О нас</Link>
				</div>
				<div className="nav-links-promo text-subtitle-s">
					<Link to="/articles">Тест</Link>
				</div>
				<div className="nav-links-promo text-subtitle-s">
					<Link to="/articles">Обратная связь</Link>
				</div>
			</div>
		</div>
	);
}

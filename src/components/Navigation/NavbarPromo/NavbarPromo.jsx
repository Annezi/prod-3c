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
					<Link to="/promo">Промо</Link>
				</div>
				<div className="nav-links-promo text-subtitle-s">
					<a href="https://t.me/michi_jp">Связаться с нами</a>
				</div>
			</div>
		</div>
	);
}

import { Link } from "react-router-dom";
import './NavbarPromo.css'

export default function PromoNavigation() {
	return (
		<div className="navbar-wrapper">
			<div className="header-promo">
				<div className="navbar-promo shadow">
					<div className="nav-links-promo text-subtitle-s">
						<Link to="/landing">О нас</Link>
					</div>
					<div className="nav-links-promo text-subtitle-s">
						<Link to="/landing">Тест</Link>
					</div>
					<div className="nav-links-promo text-subtitle-s">
						<Link to="/landing">Обратная связь</Link>
					</div>
				</div>
			</div>

			<div className="m-header-promo">
				<div className="m-navbar-promo shadow">
					<div className="m-nav-links-promo text-subtitle-l">
						<Link to="/landing">
							<div className="m-nav-img">
								<img src="./Icons/Star.svg" alt="menu" />
							</div>
							<div className="m-nav-subtitle">О нас</div>
						</Link>
					</div>
					<div className="m-nav-links-promo text-subtitle-l">
						<Link to="/landing">
							<div className="m-nav-img">
								<img src="./Icons/List.svg" alt="menu" />
							</div>
							<div className="m-nav-subtitle">Тест</div>
						</Link>
					</div>
					<div className="m-nav-links-promo text-subtitle-l">
						<Link to="/landing">
							<div className="m-nav-img">
								<img src="./Icons/Bell.svg" alt="menu" />
							</div>
							<div className="m-nav-subtitle">Что делать</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

// сделай якоря

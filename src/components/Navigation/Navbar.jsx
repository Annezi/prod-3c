import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navigation() {
  return (
	<header className="header">
		<div className="logo text-subtitle-l"><Link to="/">МИЧИ</Link></div>

		<nav className="navbar">
			<div className="nav-links text-title-s-accent"><Link to="/about">О нас</Link></div>
			<div className="nav-links text-title-s-accent"><Link to="/features">Фичи</Link></div>
			<div className="nav-links text-title-s-accent"><Link to="/contacts">Контакты</Link></div>
			<div className="nav-button text-title-s-accent">Ранний доступ</div>
		</nav>
	</header>
  );
}

import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navigation() {
  return (
	<header className="header">
		<div className="logo"><Link to="/">МИЧИ</Link></div>

		<nav className="navbar">
			<div className="nav-links"><Link to="/about">О нас</Link></div>
			<div className="nav-links"><Link to="/features">Фичи</Link></div>
			<div className="nav-links"><Link to="/contacts">Контакты</Link></div>
			<div className="nav-button">Ранний доступ</div>
		</nav>
	</header>
  );
}

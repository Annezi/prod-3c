import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Navbar.css'
import AlarmPopup from "../../UI/Popups/Alarm/Alarm_Popup"

export default function Navigation() {
	const [isAlarmPopupOpen, setIsAlarmPopupOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === '/study' || location.pathname === '/where-to-go' || location.pathname === '/travelling' || location.pathname === '/about' || location.pathname === '/profile') {
		  setIsAlarmPopupOpen(true);
		} else {
		  setIsAlarmPopupOpen(false);
		}
	  }, [location.pathname]);

	const handleAlarmPopupClose = () => {
		setIsAlarmPopupOpen(false);
	};

	return (
		<div className="header">
			<div className="header-logo text-subtitle-l">
				<Link to="/">МИЧИ</Link>
			</div>

			<div className="navbar shadow">
				<div className="nav-links text-subtitle-s">
					<Link to="/articles">Статьи</Link>
				</div>
				<div className="nav-links text-subtitle-s">
					<Link to="/study">Обучение</Link>
				</div>
				<div className="nav-links text-subtitle-s">
					<Link to="/where-to-go">Куда сходить?</Link>
				</div>
				<div className="nav-links text-subtitle-s">
					<Link to="/travelling">Путешествия</Link>
				</div>
				<div className="nav-links text-subtitle-s">
					<Link to="/about">О нас</Link>
				</div>
			</div>

			<div className="profile">
				<Link to="/profile">
					<img src="./profile_photo.jpg" alt="avatar" />
				</Link>
			</div>
			
			{isAlarmPopupOpen && <AlarmPopup onClose={handleAlarmPopupClose} />}
		</div>
	);
}

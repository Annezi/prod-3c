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
		<div className='headers-container'>
			<div className="header shadow">
				<div className="header-logo">
					<Link to="/" className="header-logo">
						<img src="./logo_short-menu.svg" alt="Logo" />
					</Link>
				</div>

				<div className="navbar">
					<div className="nav-links text-subtitle-s">
						<Link to="/where-to-go">Что делать</Link>
					</div>
					<div className="nav-links text-subtitle-s">
						<Link to="/study">Тесты</Link>
					</div>
					<div className="nav-links text-subtitle-s">
						<Link to="/articles">Статьи</Link>
					</div>
					<div className="nav-links text-subtitle-s">
						<Link to="/travelling">Новости</Link>
					</div>
					<div className="nav-links text-subtitle-s">
						<Link to="/about">О нас</Link>
					</div>
				</div>

				<div className="search">
					<Link to="/profile">
						<img src="./Icons/Search.svg" alt="search" />
					</Link>
				</div>

				{isAlarmPopupOpen && <AlarmPopup onClose={handleAlarmPopupClose} />}
			</div>

			<div className="mobile-navbar">
				<div className="mobile-line"></div>
				<div className="mobile-bar">
					<div className="menu-button">
						<img src="./Icons/WhatToDo.svg" alt="img" />
						<div className='text-subtitle-l'>Что делать</div>
					</div>
					<div className="menu-button">
						<img src="./Icons/Test.svg" alt="img" />
						<div className='text-subtitle-l'>Тесты</div>
					</div>
					<div className="menu-button">
						<img src="./Icons/Articles.svg" alt="img" />
						<div className='text-subtitle-l'>Статьи</div>
					</div>
					<div className="menu-button">
						<img src="./Icons/News.svg" alt="img" />
						<div className='text-subtitle-l'>Новости</div>
					</div>
					<div className="menu-button">
						<img src="./Icons/AboutUs.svg" alt="img" />
						<div className='text-subtitle-l'>О нас</div>
					</div>
				</div>
			</div>
		</div>
	);
}

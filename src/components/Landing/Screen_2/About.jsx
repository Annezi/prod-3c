import './About.css';
import Card from "..//Cards/Card";

export default function About() {
	return (
		<div className='about-container'>
			<div className="aboutScreen">
				<div className="about-head">
					<div className="firstHead-row text-title-l">
						<div className="firstHead-row-left text-title-l">МЕДИА О</div>
						<div className="firstHead-row-right text-title-l-accent">ЯПОНСКОЙ</div>
					</div>
					<div className="secondHead-row text-title-l">
						<div className="secondHead-row-left"><img src="/Landing/About_1.png" alt="swapper" /></div>
						<div className="secondHead-row-right">КУЛЬТУРЕ</div>
					</div>
				</div>
				<div className="about-description text-paragraph-l">
					Простой взгляд на Японию изнутри. Подойдёт для тех, кто хочет узнать что‑то новое или узнать о стране восходящего солнца без прикрас
				</div>
				<div className="about-stacks">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
}
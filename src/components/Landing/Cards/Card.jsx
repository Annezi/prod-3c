import './Card.css'

export default function Card() {
	return (
		<div className="infoCard">
			<div className="infoCard-head text-subtitle-m">Заголовок</div>
			<div className="infoCard-img"></div>
			<div className="infoCard-description text-paragraph-m">Описание</div>
		</div>
	);
}
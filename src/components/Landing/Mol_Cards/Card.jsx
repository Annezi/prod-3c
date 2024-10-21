import './Card.css'

export default function Card({ title, img, description }) {
	return (
		<div className="infoCard">
			<div className="infoCard-head text-subtitle-m">{title}</div>
			<div className="infoCard-img">{img}</div>
			<div className="infoCard-description text-paragraph-m">{description}</div>
		</div>
	);
}
import './Section.css';

export default function Section() {
	return(
		<div className="section-container shadow">
			<div className="section-img">
				<img src="/Landing/Section_p1.png" alt="pic" />
			</div>
			<div className="section-description">
				<div className="section-text text-paragraph-m">Простое введение для начинающих, включая элементы мемов; интересные факты и личности, оказавшие влияние на развитие японской истории.</div>
				<div className="section-arrow">
					<img src="/Landing/Section_arrow.svg" alt="arrow" />
				</div>
			</div>
		</div>
	);
}
import './About.css'

export default function About() {
	return (
		<div className="about-container">
			<div className="about-title">
				<img src="./Landing/tanaka-san-strange.png" alt="-" />
				<div className="text-title-1">а еще...</div>
			</div>
			<div className="about-big-img">
				<img src="./Landing/About-pic-1.png" alt="-" />
			</div>
			<div className="about-text shadow">
				<div className="text-subtitle-1">Статьи</div>
				<div className="text-paragraph">У нас вы можете прочитать много статей про Японию по разным тематикам — культура, еда или язык. Стараемся писать не нудно, шутить шутки и просто веселиться.</div>
			</div>
			<div className="about-img">
				<img src="./Landing/About-pic-2.png" alt="-" />
			</div>
			<div className="about-text shadow">
				<div className="text-subtitle-1">что поделать</div>
				<div className="text-paragraph">У нас есть раздел под названием «Что поделать» — здесь вы можете найти что-то пуки каки какашки какашки какашки и еще должна быть пятая строчка</div>
			</div>
			<div className="about-img">
				<img src="./Landing/About-pic-3.png" alt="-" />
			</div>
			<div className="about-text shadow">
				<div className="text-subtitle-1">тесты</div>
				<div className="text-paragraph">У нас есть куча интересных тестов, связанных с Японией. Туда сюда сюда туда туда сюда эээээ ну того самого короче и еше должна быть пятая строчка</div>
			</div>
		</div>
	);
}
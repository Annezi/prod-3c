import './Info.css'

export default function Info() {
	return (
		<div className='mainBanner-container'>
			<div className='mainBanner'>
				<div className="japanTexts">
					<div className="japanText text-title-s-accent">あまだれ</div>
					<div className="japanText text-title-s-accent">せき</div>
					<div className="japanText text-title-s-accent">を</div>
					<div className="japanText text-title-s-accent">うがつ</div>
				</div>
				<div className="michi-logo">
					<img src="./Landing/logo_L.svg" alt="logo" />
				</div>
				<div className="bottom-navigation">
					<div className="left-navigation text-subtitle-l-accent">みち - медиа о настоящей японии</div>
					<div className="right-navigation-slider text-subtitle-l-accent">1</div>
				</div>
			</div>
		</div>
	);
}
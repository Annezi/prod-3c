import "./Footer.css"

export default function Footer(){
	const scrollToTop = () => {
	  window.scrollTo({
		top: 0,
		behavior: 'smooth',
	  });
	};

	return (
		<div className="footer-container">
			<div className="text-subtitle-l-accent">МИЧИ</div>
			<div className="toTop" onClick={scrollToTop}>
				<img src="/Icons/Arrow.svg" alt="To Top" />
			</div>
		</div>
	)
}
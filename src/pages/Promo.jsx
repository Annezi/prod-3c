import Info from "../components/Landing/Lan_Info/Info";
import About from "../components/Landing/Lan_About/About";
import Posts from "../components/Landing/Lan_Posts/Posts";
import Subscrib from "../components/Landing/Lan_Subscribtion/Subscrib";
import HeaderPromo from "../components/Navigation/NavbarPromo/NavbarPromo";
import Footer from "../components/Navigation/Footer/Footer";

export default function Promo() {
	return (
		<div className="LandingBox">
			<HeaderPromo />
			<Info />
			<About />
			<Posts />
			<Subscrib />
			<Footer />
		</div>
	);
}

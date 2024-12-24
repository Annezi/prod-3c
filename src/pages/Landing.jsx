import Info from "../components/Landing/Lan_Info/Info";
import News from "../components/Landing/Lan_News/News";
import About from "../components/Landing/Lan_About/About";
import StackTags from "../components/Landing/Lan_StackTags/StackTags";
import TestBanner from "../components/Landing/Lan_TestBanner/TestBanner";
import Maskot from "../components/Landing/Lan_Maskot/Maskot";
import Subscrib from "../components/Landing/Lan_Subscribtion/Subscrib";
import NavbarPromo from "../components/Navigation/NavbarPromo/NavbarPromo";
import Footer from "../components/Navigation/Footer/Footer";

export default function Landing() {
	return (
		<div className="LandingBox">
			<NavbarPromo />
			<Info />
			<News />
			<About />
			<StackTags />
			<TestBanner id="test-banner" />
			<Maskot />
			<Subscrib id="subscrib" />
			<Footer />
		</div>
	);
}
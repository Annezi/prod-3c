import Info from "../components/Landing/Lan_Info/Info";
import About from "../components/Landing/Lan_About/About";
import Sections from "../components/Landing/Lan_Category/Category";
import Posts from "../components/Landing/Lan_Posts/Posts";
import Subscrib from "../components/Landing/Lan_Subscribtion/Subscrib";
import Navbar from "../components/Navigation/Navbar/Navbar";
import Footer from "../components/Navigation/Footer/Footer";

export default function Index() {
	return (
		<div className="LandingBox">
			<Navbar />
			<Info />
			<About />
			<Sections />
			<Posts />
			<Subscrib />
			<Footer />
		</div>
	);
}

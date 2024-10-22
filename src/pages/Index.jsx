import Info from "../components/Landing/Lan_Info/Info";
import About from "../components/Landing/Lan_About/About";
import Sections from "../components/Landing/Lan_Category/Category";
import Posts from "../components/Landing/Lan_Posts/Posts";
import Subscrib from "../components/Landing/Lan_Subscribtion/Subscrib";
import Navigation from "../components/Navigation/Navbar";
import './Index.css'

export default function Index() {
	return (
		<div className="LandingBox">
			<Info />
			<About />
			<Sections />
			<Posts />
			<Subscrib />
			<Navigation />
		</div>
	);
}

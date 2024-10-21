import Info from "../components/Landing/Lan_Info/Info";
import About from "../components/Landing/Lan_About/About";
import Sections from "../components/Landing/Lan_Category/Category";
import './Index.css'

export default function Index() {
	return (
		<div className="LandingBox">
			<Info />
			<About />
			<Sections />
		</div>
	);
}

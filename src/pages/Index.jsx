import Info from "../components/Landing/Screen_1/Info";
import About from "../components/Landing/Screen_2/About";
import './Index.css'

export default function Index() {
	return (
		<div className="LandingBox">
			<Info />
			<About />
		</div>
	);
}

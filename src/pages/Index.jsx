import MainInfo from "../components/Main/Main_Info/MainInfo";
import Subscrib from "../components/Landing/Lan_Subscribtion/Subscrib";
import TestBanner from "../components/Landing/Lan_TestBanner/TestBanner";
import Navbar from "../components/Navigation/Navbar/Navbar";
import Footer from "../components/Navigation/Footer/Footer";
import MonthBest from "../components/Main/Main_MonthBest/MonthBest";
import ToDo from "../components/Main/Main_ToDo/ToDo";

export default function Index() {
	return (
		<div className="LandingBox">
			<Navbar />
			<MainInfo />
			<MonthBest/>
			<TestBanner id="test-banner" />
			<ToDo />
			<Subscrib text="следите за нашими новостями!"/>
			<Footer />
		</div>
	);
}

import Info from "../components/Landing/Lan_Info/Info";
import About from "../components/Landing/Lan_About/About";
import Sections from "../components/Landing/Lan_Category/Category";
import Posts from "../components/Landing/Lan_Posts/Posts";
import Subscrib from "../components/Landing/Lan_Subscribtion/Subscrib";
import HeaderPromo from "../components/Navigation/NavbarPromo/NavbarPromo";
import Footer from "../components/Navigation/Footer/Footer";

import { Helmet } from "react-helmet-async";

export default function Index() {
	return (
		<div className="LandingBox">
			<Helmet>
				<meta property="og:url" content="https://annezi.github.io/prod-3c/#/articles" />
				<meta property="og:type" content="article" />
				<meta property="og:image" content="/public/Articles/articles_cover.jpg" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:title" content="Первое апреля в Японии" />
				<meta property="og:description" content="Какие розыгрыши устраивают японцы, и где можно купить ведерко куриных косточек" />
			</Helmet>
			<HeaderPromo />
			<Info />
			<About />
			<Sections />
			<Posts />
			<Subscrib />
			<Footer />
		</div>
	);
}

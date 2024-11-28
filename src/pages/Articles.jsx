import Header from "../components/Navigation/Navbar/Navbar";
import Banner from "../components/Articles/Art_Banner/Banner";
import Essay from "../components/Articles/Art_Essay/Essay";
import ShareButtons from "../components/UI/SocialMadiaLinks/SocialMadiaLinks"
import ReadMore from "../components/Articles/Art_ReadMore/ReadMore";
import Footer from "../components/Navigation/Footer/Footer";

import { Helmet } from "react-helmet-async";

export default function Articles() {
	return (
		<div className="ContainerBox">
			<Helmet>
				<meta property="og:type" content="article" />
				<meta property="og:image" content="/public/Articles/articles_cover.jpg" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:title" content="Первое апреля в Японии" />
				<meta property="og:description" content="Какие розыгрыши устраивают японцы, и где можно купить ведерко куриных косточек" />
			</Helmet>
			<Header />
			{/* <Banner /> */}
			<Essay />
			{/* <ShareButtons /> */}
			{/* <ReadMore /> */}
			{/* <Footer /> */}
		</div>
	);
}
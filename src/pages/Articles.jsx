import Header from "../components/Navigation/Navbar/Navbar";
import Banner from "../components/Articles/Art_Banner/Banner";
import Essay from "../components/Articles/Art_Essay/Essay";
import ShareButtons from "../components/UI/SocialMadiaLinks/SocialMadiaLinks"
import ReadMore from "../components/Articles/Art_ReadMore/ReadMore";
import Footer from "../components/Navigation/Footer/Footer";

export default function Articles() {
	return (
		<div className="ContainerBox">
			<Header />
			<Banner />
			<Essay />
			<ShareButtons />
			<ReadMore />
			<Footer />
		</div>
	);
}
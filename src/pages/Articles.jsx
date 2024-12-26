import { useEffect, useState } from "react";
import { getArticles } from "../api/api";

import Header from "../components/Navigation/Navbar/Navbar";
import ArticleList from "../components/Articles/Article_List/ArticleList";
import Footer from "../components/Navigation/Footer/Footer";

export default function ArticleListPage() {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const fetchArticles = async () => {
			const fetchedArticles = getArticles();
			setArticles(fetchedArticles);
		};

		fetchArticles();
	}, []);

	return (
		<div className="LandingBox">
			<Header />
			<ArticleList articles={articles} />
			<Footer/>
		</div>
	);
}
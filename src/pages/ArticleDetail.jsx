import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api/api";

import Header from "../components/Navigation/Navbar/Navbar";
import Banner from "../components/Articles/Art_Banner/Banner";
import Essay from "../components/Articles/Art_Essay/Essay";
import ShareButtons from "../components/UI/SocialMadiaLinks/SocialMadiaLinks";
import ReadMore from "../components/Articles/Art_ReadMore/ReadMore";
import Footer from "../components/Navigation/Footer/Footer";

import { Helmet } from "react-helmet-async";

export default function ArticleDetail() {
	const { id } = useParams();
	const [article, setArticle] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchArticle = async () => {
			const fetchedArticle = getArticleById(parseInt(id));
			setArticle(fetchedArticle);
			setLoading(false);
		};

		fetchArticle();
	}, [id]);

	if (loading) return <div>Загрузка...</div>;
	if (!article) return <div>Статья не найдена</div>;

	return (
		<div className="ContainerBox">
			<Helmet>
				<meta property="og:type" content="article" />
				<meta property="og:image" content={article.cover} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:title" content={article.title} />
				<meta property="og:description" content={article.description} />
			</Helmet>
			<Header />
			<Banner
				tags={article.tags}
				title={article.title}
				description={article.description}
				cover={article.cover}
				readTime="~5 минут"
				publishDate="22 октября 2024"
			/>
			<Essay content={article.content} />
			<ShareButtons />
			<ReadMore />
			<Footer />
		</div>
	);
}
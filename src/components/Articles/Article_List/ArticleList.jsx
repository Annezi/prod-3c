import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "../Article_Card/ArticleCard";
import "./ArticleList.css";

export default function ArticleList({ articles, limit, filteredIds, shadow = true }) {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 710);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 710);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Фильтрация статей
	let filteredArticles = articles;

	// Если указаны filteredIds, отфильтруем статьи
	if (filteredIds && filteredIds.length > 0) {
		filteredArticles = articles.filter((article) =>
			filteredIds.includes(article.id)
		);
	}

	// Если указан limit, ограничиваем количество статей
	if (limit && limit > 0) {
		filteredArticles = filteredArticles.slice(0, limit);
	}

	// Определяем, сколько статей отображается
	const isSingleCard = filteredArticles.length === 1;

	return (
		<div className="article-list">
			<div className={`article-list-wrapper ${isSingleCard ? "no-grid" : ""}`}>
				{filteredArticles.map((article) => {
					// Если это мобильная версия, все карточки становятся mini
					const isLarge = isMobile ? false : article.size === "large";

					// Класс для карточки (большая или мини)
					const gridClass = isLarge ? "article-card-large" : "article-card-mini";

					return (
						<Link
							key={article.id}
							to={`/article/${article.id}`}
							onClick={() => window.scrollTo(0, 0)}
							className={`article-card-link ${gridClass}`}
						>
							<ArticleCard article={article} isLarge={isLarge} shadow={shadow} />
						</Link>
					);
				})}
			</div>
		</div>
	);
}
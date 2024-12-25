import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "../Article_Card/ArticleCard";
import "./ArticleList.css";

export default function ArticleList({ articles }) {
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

  return (
    <div className="article-list">
      <div className="article-list-wrapper">
        {articles.map((article) => {
          // Если это мобильная версия, все карточки становятся mini
          const isLarge = isMobile ? false : article.size === "large";

          // Класс для карточки (большая или мини)
          const gridClass = isLarge ? "article-card-large" : "article-card-mini";

          return (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className={`article-card-link ${gridClass}`}
            >
              <ArticleCard article={article} isLarge={isLarge} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
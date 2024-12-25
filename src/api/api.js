import articlesData from "../database/articlesData.json";

export function getArticles() {
  return articlesData.articles;
}

export function getArticleById(id) {
  return articlesData.articles.find((article) => article.id === id);
}
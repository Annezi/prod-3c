import "./ReadMore.css"
import ArticlesPreview from "../../UI/Articles_Preview/Articles_Preview"

export default function ReadMore() {
	return (
		<div className="readMore-container">
			<div className="text-title-m">Читайте дальше</div>
			<div className="readMore_preview-grid">
				<ArticlesPreview
					title="Японское рождество"
					description="Какие подарки дарят японцы и где можно отметить праздник"
					backgroundImage="/public/Articles/articles_preview-1.jpg"
				/>
				<ArticlesPreview
					title="Новый год в японском стиле"
					description="Походы в храм первого января и новогодние предсказания"
					backgroundImage="/public/Articles/articles_preview-2.jpg"
				/>
				<ArticlesPreview
					title="Пасха в Японии"
					description="Существует ли японский пасхальный кролик и как украсить свой дом"
					backgroundImage="/public/Articles/articles_preview-3.jpg"
				/>
			</div>
		</div>
	)
}
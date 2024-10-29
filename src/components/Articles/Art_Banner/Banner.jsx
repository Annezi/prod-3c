import './Banner.css'
import Tag from "../../UI/Tags/Tag"
import Breadcrumbs from "../../UI/Breadcrumbs/Breacrumds"

export default function Banner() {
	const breadcrumbItems = [
		{ label: 'Статьи', url: '/Articles' },
		{ label: 'Культура', url: '/Culture' },
		{ label: 'Праздники', url: '/Culture/Holidays' }
	];

	return (
		<div className="banner-container">
			<div className="ban-infoSub">
				<div className="ban-breadcrumbs">
					<Breadcrumbs items={breadcrumbItems} />
				</div>
				<div className="ban-readTime">
					<div className="readTime-title text-paragraph-m">Время чтения :</div>
					<div className="readTime-time text-paragraph-m">~5 минут</div>
				</div>
			</div>
			<div className="ban-infoMain">
				<div className="infoMain-ArticleInfo">
					<div className="ArticleInfo-tags">
						<Tag text="Культура" />
						<Tag text="Праздники" />
					</div>
					<div className="ArticleInfo-title text-title-l">Первое апреля в Японии</div>
					<div className="ArticleInfo-description text-paragraph-m">Какие розыгрыши устраивают японцы, и где можно купить ведерко куриных косточек</div>
				</div>
				<div className="infoMain-publushDate text-paragraph-s">22 октября 2024</div>
			</div>
		</div>
	)
}
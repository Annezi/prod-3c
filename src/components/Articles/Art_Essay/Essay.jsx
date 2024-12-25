import './Essay.css';

export default function Essay({ content }) {
	return (
		<div className="essay-MainInfo">
			{content.map((block, index) => {
				if (block.type === "heading") {
					return (
						<div key={index} className="text-title-m">{block.text}</div>
					);
				} else if (block.type === "text") {
					return (
						<div key={index} className="text-paragraph-m" dangerouslySetInnerHTML={{ __html: block.text }} />
					);
				} else if (block.type === "image") {
					return (
						<div key={index} className="img-container">
							<img src={block.src} alt={block.alt} />
							<div className="img-description text-paragraph-s">{block.description}</div>
						</div>
					);
				}
				return null;
			})}
		</div>
	);
}


// import './Essay.css'

// export default function Essay() {
// 	return (
// 			<div className="essay-MainInfo">
// 				<div className="text-container">
// 					<div className="text-paragraph-m">Как и в России, День дураков отмечается в Японии 1 апреля.</div>
// 					<div className="text-paragraph-m">Обычно Первое апреля японцы называют, используя катакану — <span className='text-subtitle-s japan-text'>エイプリルフール</span>. Это слово используется и в обычной речи, и в обсуждении этого дня розыгрышей и шуток по телевидению или в газетах.</div>
// 					<div className="text-paragraph-m">Впрочем, есть целых два иероглифических написания — <span className='text-subtitle-s japan-text'>四月馬鹿</span> и <span className='text-subtitle-s japan-text'>万愚節</span>. Первое является дословным переводом «апрельский дурак», а второе написание представляет собой китаизированное написание, которое выглядит более заумно и означает «сезон десяти тысяч глупостей» («десять тысяч» тут просто выступает в качестве заменителя слов «очень много» или «бессчётное количество»). Едва ли эти слова можно встретить где‑то кроме словарных статей и, возможно, каких‑нибудь очень старых текстов.</div>
// 				</div>
// 				<div className="text-container">
// 					<div className="text-title-m">Когда 1 апреля начали отмечать в Японии?</div>
// 					<div className="text-paragraph-m">Точно известно, что в начале 20 века в период Тайсё (1912–1926) празднование 1 апреля Дня дураков пришло в Японии из Европы и Америки. В то время Япония активно перенимала западные знания и привычки.</div>
// 					<div className="text-paragraph-m">Однако, схожий праздник в этот же день существовал в Японии и до этого, он был перенят из Китая в эпоху Эдо (1603–1868) и назывался <span className='text-subtitle-s japan-text'>不義理の日</span> («День пренебрежения обязательствами»). Вот только вместо шуток и обмана в этот день люди признавали перед окружающими, что плохо выполняют свои обязательства. Например, связывались с друзьями и знакомыми, с которыми давно не общались, чтобы принести свои извинения, что не уделяли этим отношениями должного внимания. В общем, это был день более серьёзных, а не шутливых глупостей.</div>
// 				</div>
// 				<div className="text-container">
// 					<div className="text-title-m">Как именно отмечают День дураков в Японии?</div>
// 					<div className="text-paragraph-m">Больших отличий в праздновании Первого апреля между Японией и Россией нет. Может быть, можно только выделить языковые особенности.</div>
// 					<div className="text-paragraph-m">Например, мы обычно говорим, что в Первое апреля мы шутим и разыгрываем друг друга. А вот в японском языке используется слово <span className='text-subtitle-s japan-text'>うそ</span> «ложь» и фраза <span className='text-subtitle-s japan-text'>うそをついてよい</span> «можно и соврать». Поначалу может показаться, что это звучит слишком серьёзно, но имеется в виду лёгкое враньё именно ради шутки. Например, когда с утра объявляешь друзьям «Я выиграл миллион в лотерею». Конечно, это тоже ложь, но именно для шути и розыгрыша.</div>
// 					<div className="text-paragraph-m">В целом же японцы придерживаются примерно тех же правил. Во‑первых, чтобы шутки были безобидными. Во‑вторых, шутки на Первое апреля должны быть лёгкими и короткими, то есть розыгрыш нужно раскрывать быстро, чтобы всем было приятно и смешно.</div>
// 				</div>
// 				<div className="text-container">
// 					<div className="text-title-m">В Японии компании любят на 1 апреля анонсировать какие‑нибудь дурацкие товары</div>
// 					<div className="img-container">
// 						<img src="./Articles/Essay_img1.jpg" alt="" />
// 						<div className="img-description text-paragraph-s">Сеть комбини FamilyMart в 2022 году объявили о выпуске в продажу с 1 апреля фраппе со вкусом жареной курочки</div>
// 					</div>
// 					<div className="img-container">
// 						<img src="./Articles/Essay_img2.jpg" alt="" />
// 						<div className="img-description text-paragraph-s">В 2019 году японское подразделение KFC объявило о запуске продаж вёдер с куриными косточками</div>
// 					</div>
// 					<div className="img-container">
// 						<img src="./Articles/Essay_img3.jpg" alt="" />
// 						<div className="img-description text-paragraph-s">В 2018 году на 1 апреля Fanta в Японии анонсировала запуск напитка со вкусом болгарского перца</div>
// 					</div>
// 				</div>
// 			</div>
// 	)
// }
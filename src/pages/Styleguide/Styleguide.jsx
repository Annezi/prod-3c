import SgTitle from "../../components/Styleguide/SGTitle/SgTItle";
import "./Styleguide.css";

export default function Styleguide() {
	const sections = [
		{ id: "about-brand", text: "о бренде" },
		{ id: "logo", text: "логотип" },
		{ id: "colors", text: "цвета" },
		{ id: "typography", text: "типографика" },
		{ id: "grid", text: "сетка" },
		{ id: "spacing", text: "отступы" },
		{ id: "mascot", text: "маскот" },
		{ id: "graphics", text: "графика" },
		{ id: "carriers", text: "носители" },
	];

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="StyleguideBox">
			<div className="sections-menu">
				<img src="./Styleguide/Menu-logo.svg" alt="-" />
				<div className="navigation-stack">
					{sections.map((section) => (
						<div
							key={section.id}
							className="navigation-stack-element text-subtitle-2"
							onClick={() => scrollToSection(section.id)}
						>
							{section.text}
						</div>
					))}
				</div>
			</div>

			<div className="slides-menu">
				<div className="sg-banner-1">
					<img src="./Styleguide/Banner-1.png" alt="-" />
				</div>

				{sections.map((section) => (
					<div key={section.id} id={section.id}>
						<SgTitle text={section.text} />
						{section.id === "about-brand" && (
							<div className="sg-content-block sg-brande">
								<div className="sg-content-block-section">
									<div className="text-subtitle-1">кто мы?</div>
									<div className="text-paragraph">НИППОН — медиасервис о японии, в частности о культуре и новостях, предлагая замену потребления ненужного контента, на интересный и познавательный</div>
								</div>
								<div className="sg-content-block-section">
									<div className="text-subtitle-1">наши ценности</div>
									<div className="text-paragraph">
										– удобство и простота в поиске нужной информации <br />
										– внимание к пользователю и его интересам <br />
										– расслабленная атмосфера, наполненная любовью к Японии
									</div>
								</div>
								<div className="sg-content-block-section">
									<div className="text-subtitle-1">миссия бренда</div>
									<div className="text-paragraph">Завоевать сердца аудитории, погружая их в культуру и атмосферу Японии</div>
								</div>
								<div className="sg-content-block-section">
									<div className="text-subtitle-1">tone of voice</div>
									<div className="text-paragraph">Мы очень любим шутить и прикалываться. При этом не забываем про японскую вежливость — к пользователю обращаемся исключительно на Вы</div>
								</div>
							</div>
						)}

						{section.id === "logo" && (
							<div className="sg-content-block sg-logo">
								<div className="sg-content-block-section sg-logo-section">
									<img src="./Styleguide/tanaka-san.jpg" alt="-" />
									<div className="text-paragraph sg-logo-text">Маскот можно использовать вместо основного логотипа на маленьких размерах</div>
								</div>
								<div className="sg-content-block-section sg-logo-section">
									<img src="./logo_short.svg" alt="-" />
									<div className="text-paragraph sg-logo-text">Во всех остальных случаях</div>
								</div>
								<div className="sg-content-block-section sg-logo-section">
									<img src="./logo_long.svg" alt="-" />
									<div className="text-paragraph sg-logo-text">В редких случаях, если место позволяет расположить читаемый развернутый логотип</div>
								</div>
							</div>
						)}

						{section.id === "colors" && (
							<div className="sg-banner-colors">
								<div className="color-large text-subtitle-1" style={{ backgroundColor: "#C61C1C" }}>#C61C1C</div>
								<div className="color-small text-subtitle-1" style={{ backgroundColor: "#01BEFE" }}>#01BEFE</div>
								<div className="color-small text-subtitle-1" style={{ backgroundColor: "#FFDD00" }}>#FFDD00</div>
								<div className="color-small text-subtitle-1" style={{ backgroundColor: "#FF7D00" }}>#FF7D00</div>
								<div className="color-small text-subtitle-1" style={{ backgroundColor: "#FF006D" }}>#FF006D</div>
								<div className="color-small text-subtitle-1" style={{ backgroundColor: "#ADFF02" }}>#ADFF02</div>
								<div className="color-small text-subtitle-1" style={{ backgroundColor: "#8F00FF" }}>#8F00FF</div>
								<div className="color-medium text-subtitle-1" style={{ backgroundColor: "#000000", color: "var(--white-color)" }}>#000000</div>
								<div className="color-medium text-subtitle-1" style={{ backgroundColor: "#FFFFFF" }}>#FFFFFF</div>
							</div>
						)}

						{section.id === "typography" && (
							<div className="sg-content-block sg-typography">
								<div className="sg-content-block-section">
									<div className="text-subtitle-1">kot-eitai gothic</div>
									<div className="text-paragraph">Наш акцентный шрифт, который поддерживает японские знаки. Используется только в заголовках, тегах, кнопках и для выделения японских слов в тексте</div>
								</div>
								<div className="sg-content-block-section">
									<div className="text-subtitle-1">inter</div>
									<div className="text-paragraph">Наборный шрифт для большого объема текста, описаний и предисловий</div>
								</div>
								<img src="./Styleguide/text-styles.png" alt="-" />
							</div>
						)}

						{section.id === "grid" && (
							<div className="sg-content-block sg-grid">
								<div className="sg-grid-block text-subtitle-1"> desktop
									<img src="./Styleguide/grid-large.png" alt="-" />
								</div>
								<div className="sg-grid-block text-subtitle-1"> tablet
									<img src="./Styleguide/grid-mid.png" alt="-" />
								</div>
								<div className="sg-grid-block text-subtitle-1"> phone
									<img src="./Styleguide/grid-mobile.png" alt="-" />
								</div>
							</div>
						)}

						{section.id === "spacing" && (
							<div className="wrapper">
								<div className="sg-content-block sg-otstupi">
									<div className="sg-otstupi-content">
										<img src="./Styleguide/gap-pic.png" alt="-" />
									</div>
									<div className="sg-otstupi-content">
										<img src="./Styleguide/br-pic.png" alt="-" />
									</div>
								</div>
								<div className="sg-content-block sg-card">
									<div className="sg-otstupi-content">
										<img src="./Styleguide/Frame 1.png" alt="-" />
									</div>
									<div className="sg-card-content">
										<div className="sg-otstupi-content">
											<img src="./Styleguide/Frame 2.png" alt="-" />
										</div>
										<div className="sg-otstupi-content">
											<img src="./Styleguide/Frame 3.png" alt="-" />
										</div>
									</div>
								</div>
							</div>
						)}

						{section.id === "mascot" && (
							<div className="sg-content-block sg-maskot">
								<div className="sg-maskot-1-line">
									<img src="./Styleguide/Maskot.png" alt="-" />
									<div className="text-title-1">Танака Сан помогает <br /> пользователям быстрее <br /> разобраться с платформой <br /> и веселит всех своими <br /> эмоциями</div>
								</div>
								<div className="sg-maskot-2-line">
									<div className="sg-maskot-wrapper">
										<div className="sg-maskot-content">
											<div className="text-title-1" style={{ color: "var(--red-color)" }}>можно</div>
											<div className="text-paragraph">
												1. Использовать на любых носителях <br />
												2. Пропорционально изменять размер <br />
												3. Менять обводку Танаки сана на фирменные цвета (красный, белый, черный)
											</div>
										</div>
										<div className="sg-maskot-content">
											<div className="text-title-1" style={{ color: "var(--red-color)" }}>нельзя</div>
											<div className="text-paragraph">
												1. Искажать исходные пропорции <br />
												2. Добавлять сторонние цвета/красить Танаку-сана <br />
												3. Использовать маскота на цветном фоне (допускается только при наличии белого фона у маскота)
											</div>
										</div>
									</div>
									<img src="./Styleguide/Maskots.png" alt="-" />
								</div>
							</div>
						)}

						{section.id === "graphics" && (
							<div className="sg-content-block sg-graphic">
								<div className="sg-graphic-wrapper">
									<div className="text-subtitle-1">Обычные — на фон ставится фотография по тематике, а сверху накладываются иероглифы, также связанные с темой статьи. Цвета использовать согласно гайдлайнам</div>
									<div className="sg-graphic-img-wrapper">
										<img src="./Styleguide/cover-1.png" alt="-" />
										<img src="./Styleguide/cover-2.png" alt="-" />
										<img src="./Styleguide/cover-3.png" alt="-" />
										<img src="./Styleguide/cover-4.png" alt="-" />
									</div>
								</div>
								<div className="sg-graphic-wrapper">
									<div className="text-subtitle-1">Спэшл — на фон ставятся иероглифы по тематике, сверху добавляются картинки по теме статьи; композиция может быть любая</div>
									<img src="./Styleguide/cover-5.png" alt="-" />
								</div>
							</div>
						)}

						{section.id === "carriers" && (
							<div className="wrapper">
								<div className="sg-banner-1">
									<img src="./Styleguide/branding 1.png" alt="-" />
								</div>
								<div className="sg-banner-1">
									<img src="./Styleguide/branding 2.png" alt="-" />
								</div>
								<div className="sg-banner-1">
									<img src="./Styleguide/branding 3.png" alt="-" />
								</div>
								<div className="sg-banner-1">
									<img src="./Styleguide/branding 4.png" alt="-" />
								</div>
								<div className="sg-banner-1">
									<img src="./Styleguide/branding 5.png" alt="-" />
								</div>
								<div className="sg-banner-1">
									<img src="./Styleguide/branding 6.png" alt="-" />
								</div>
								<div className="sg-banner-1">
									<img src="./Styleguide/branding 7.png" alt="-" />
								</div>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
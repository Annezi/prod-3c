import { useState } from "react";
import './TestBanner.css';
import Test from '../../Other/TestSection/TestBannerContent';
import Tag from "../../UI/Tags/Tag";
import Button from "../../UI/Button/Button";

export default function TestBanner() {
	const [isTestStarted, setIsTestStarted] = useState(false);

	const startTest = () => {
		setIsTestStarted(true);
	};

	return (
		<div className="TestBanner-container">
			{!isTestStarted && (
				<div className={`TestBanner-img ${isTestStarted ? "hidden" : ""}`}>
					<img src="./Landing/test-preview.png" alt="-" />
					<img src="./Landing/test-preview-mobile.png" alt="-" />
				</div>
			)}
			<div className="TestBanner-info">
				{!isTestStarted ? (
					<>
						<Tag text="ТЕСТ" size="small" theme="white" />
						<div className="TestBanner-Description">
							<div className="text-subtitle-1">как хорошо вы знаете японию?</div>
							<div className="text-paragraph">
								Поможем оценить, как много статей вам придется у нас прочитать, чтобы стать настоящим гуру
							</div>
						</div>
						<Button text="ПРОЙТИ ТЕСТ" theme="white" onClick={startTest} />
					</>
				) : (
					<Test />
				)}
			</div>
		</div>
	)
}
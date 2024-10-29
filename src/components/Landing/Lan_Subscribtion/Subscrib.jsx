import './Subscrib.css'
import Button from "../../UI/Sub_Button/Sub_Button"
import SubForm from '../../UI/Sub_Form/Sub_Form'

export default function Subscrib() {
	return (
		<div className="subscribtion-container">
			<div className="sub-info-left text-title-m">
				Подпишитесь на наши обновления, чтобы не пропустить интересные новости!
			</div>
			<div className="sub-info-right">
				<SubForm />
				<Button />
			</div>
		</div>
	)
}
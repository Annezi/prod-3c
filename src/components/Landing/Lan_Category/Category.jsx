import './Category.css';
import Section from "../Mol_Section/Section";
import StackRButton from "../Mol_RButton/StackRButton";

export default function Category() {
	return (
		<div className="category-container">
			<div className="category-info">
				<div className="category-info-top text-title-m">
					Наши разделы интересов
				</div>
				<div className="category-info-bottom">
					<StackRButton />
				</div>
			</div>
			<div className="category-card">
				<Section />	
			</div>
		</div>
	);
}
import './Button.css';

export default function Button({ text, theme = 'default', onClick }) {
	const buttonClass = `button button-${theme}`;

	return (
		<button className={buttonClass} onClick={onClick}>
			<span className="text-button">{text}</span>
		</button>
	);
}
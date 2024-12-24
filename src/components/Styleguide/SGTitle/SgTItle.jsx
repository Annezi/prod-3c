import "./SgTitle.css"

export default function SgTitle({ text, id }) {
	return (
		<div className="SgTitle-container text-title-1" id={id}>{text}</div>
	)
}
import "./Sub_Form.css"

export default function SubForm() {
	return (
	  <div className="input-container">
		<input
		  type="text"
		  className="input-field"
		  placeholder="Введите имя"
		/>
		<input
		  type="email"
		  className="input-field"
		  placeholder="Введите почту"
		/>
	  </div>
	);
  }
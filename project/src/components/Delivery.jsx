import { useState } from "react"
import { FaFedex } from "react-icons/fa6"

export default function Delivery() {
	const [selectedType, setSelectedType] = useState("home")
	const [selectedClick, setSelectedClick] = useState("1")

	return (
		<div className="cart-content__section form-content__delivery">
			<h3 className="cart-content__title smaller-title">Select your prefered delivery method</h3>

			<div className="form-content__box">
				<button onClick={() => setSelectedType("home")} type="button"
					className={`form-content__delivery-button ${(selectedType === "home" && "active" || "")}`}>Home delivery</button>
				<button onClick={() => setSelectedType("collect")} type="button"
					className={`form-content__delivery-button ${(selectedType === "collect" && "active" || "")}`}>Click-and-collect</button>
				<button onClick={() => setSelectedType("post")} type="button"
					className={`form-content__delivery-button ${(selectedType === "post" && "active" || "")}`}>Postoffice</button>
				{(selectedType === "home" && <>
					<p className="form-content__delivery-title">Your order will be shipped to</p>
					<p>61 Church St</p>
					<p>Berwick-upon-Tweed</p>
					<p>Northumberland</p>
					<p>TD15 1EE</p>
					<p>United Kingdom</p>
				</>)}

				{(selectedType === "collect" && <>
					<p className="form-content__delivery-title">Your order will be shipped to</p>

					<input type="radio" name="other" id="edinburgh" value="1" checked={selectedClick === "1"}
						onChange={(e) => setSelectedClick(e.target.value)}
						className="form-content__collect-input"></input>
					<label htmlFor="edinburgh" className="form-content__collect-label">Edinburgh</label>
					<p className="form-content__collect-text"><span>2 Joppa Rd,Edinburgh, EH15 2EU</span>
						<span>Monday to Friday: 10:00am - 5:30pm</span>
						<span>Saturday: 10:00am - 5:30pm</span>
						<span>Sunday: Closed</span></p>

					<input type="radio" name="other" id="falkirk" value="2" checked={selectedClick === "2"}
						onChange={(e) => setSelectedClick(e.target.value)}
						className="form-content__collect-input"></input>
					<label htmlFor="falkrik" className="form-content__collect-label">Falkrik</label>
					<p className="form-content__collect-text"><span>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</span>
						<span>Monday to Friday: 10:00am - 5:30pm</span>
						<span>Saturday - By appointment only</span>
						<span>Sunday: Closed</span></p>
				</>)}

				{(selectedType === "post" && <>
					<p className="form-content__delivery-title">Your order will be shipped with FedEx selected a postoffice</p>
					<FaFedex className="form-content__delivery-logo" />
					<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4914.541692932572!2d-0.002574924174885219!3d3.5083546457245366e-15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMDAnMDAuMCJOIDDCsDAwJzAwLjAiRQ!5e1!3m2!1sen!2sdk!4v1765873026725!5m2!1sen!2sdk"
						className="form-content__delivery-iframe"
						allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
					<input type="radio" name="other" id="postoffice1" value="1" checked={selectedClick === "1"}
						onChange={(e) => setSelectedClick(e.target.value)}
						className="form-content__delivery-input"></input>
					<label htmlFor="postoffice1" className="form-content__delivery-label">
						Postoffice - 4  Leah Close, Edinburgh, United Kingdom</label>

					<div className="gray-line"></div>

					<input type="radio" name="other" id="postoffice2" value="2" checked={selectedClick === "2"}
						onChange={(e) => setSelectedClick(e.target.value)}
						className="form-content__delivery-input"></input>
					<label htmlFor="postoffice2" className="form-content__delivery-label">
						Postoffice - 7  The Old School House, Edinburgh, United Kingdom</label>

					<div className="gray-line"></div>

					<input type="radio" name="other" id="postoffice3" value="3" checked={selectedClick === "3"}
						onChange={(e) => setSelectedClick(e.target.value)}
						className="form-content__delivery-input"></input>
					<label htmlFor="postoffice3" className="form-content__delivery-label">
						Postoffice - 28  Thwaites Oak Close, Edinburgh, United Kingdom</label>
				</>)}
			</div>
		</div>
	)
}
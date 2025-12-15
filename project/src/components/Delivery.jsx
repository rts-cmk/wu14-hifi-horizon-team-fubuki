import { useState } from "react"

export default function Delivery() {
	const [selectedType, setSelectedType] = useState("home")

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
				<p className="form-content__delivery-title">Your order will be shipped to</p>
				{(selectedType === "home" && <>

					<p>61 Church St</p>
					<p>Berwick-upon-Tweed</p>
					<p>Northumberland</p>
					<p>TD15 1EE</p>
					<p>United Kingdom</p>
				</>)}

				{(selectedType === "collect" && <>
					<p>61 Church St</p>
					<p>Berwick-upon-Tweed</p>
					<p>Northumberland</p>
					<p>TD15 1EE</p>
					<p>United Kingdom</p>
				</>)}

				{(selectedType === "post" && <>
					<p>61 Church St</p>
					<p>Berwick-upon-Tweed</p>
					<p>Northumberland</p>
					<p>TD15 1EE</p>
					<p>United Kingdom</p>
				</>)}
			</div>
		</div>
	)
}
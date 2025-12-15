import { FaCcApplePay, FaCcMastercard, FaCcPaypal, FaCcStripe, FaCcVisa } from "react-icons/fa6";
import { useState } from "react";

export default function Method() {
	const [selectedMethod, setSelectedMethod] = useState("card")

	return (
		<div className="cart-content__section form-content__method">
			<h3 className="cart-content__title">Choose payment method</h3>

			<div>
				<input type="radio" id="card" name="method" value="card" defaultChecked
					onChange={(e) => setSelectedMethod(e.target.value)}></input>
				<label htmlFor="card">
					<FaCcStripe /> <FaCcVisa /> <FaCcMastercard /> <span>
						Pay with Credit Card
					</span>
				</label>

				<div className="line"></div>

				<input type="radio" id="paypal" name="method" value="paypal"
					onChange={(e) => setSelectedMethod(e.target.value)}></input>
				<label htmlFor="paypal">
					<FaCcPaypal /> <span>
						Pay with PayPal
					</span>
				</label>

				<div className="line"></div>

				<input type="radio" id="apple" name="method" value="apple" checked={selectedMethod === "apple"}
					onChange={(e) => setSelectedMethod(e.target.value)}></input>
				<label htmlFor="apple">
					<FaCcApplePay /> <span>
						Pay with Apple pay
					</span>
				</label>
			</div>
		</div>
	)
}
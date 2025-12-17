import { FaCcApplePay, FaCcMastercard, FaCcPaypal, FaCcStripe, FaCcVisa } from "react-icons/fa6";
import { useState } from "react";

export default function Method() {
	const [selectedMethod, setSelectedMethod] = useState("card")

	return (
		<div className="cart-content__section form-content__method">
			<h3 className="cart-content__title smaller-title">Choose payment method</h3>

			<div className="form-content__box">
				<div className="form-content__method-holder">
					<input type="radio" id="card" name="card" value="card" defaultChecked
						onChange={(e) => setSelectedMethod(e.target.value)}></input>
					<label htmlFor="card" className="form-content__method-label">
						<FaCcStripe /> <FaCcVisa /> <FaCcMastercard /> <span>
							Pay with Credit Card
						</span>
					</label>
				</div>

				<div className="gray-line"></div>

				<div className="form-content__method-holder">
					<input type="radio" name="card" value="paypal" id="paypal" checked={selectedMethod === "paypal"}
						onChange={(e) => setSelectedMethod(e.target.value)}></input>
					<label htmlFor="paypal" className="form-content__method-label">
						<FaCcPaypal /> <span>
							Pay with PayPal
						</span>
					</label>
				</div>

				<div className="gray-line"></div>

				<div className="form-content__method-holder">
					<input type="radio" name="card" id="apple" value="apple" checked={selectedMethod === "apple"}
						onChange={(e) => setSelectedMethod(e.target.value)}></input>
					<label htmlFor="apple" className="form-content__method-label">
						<FaCcApplePay /> <span>
							Pay with Apple pay
						</span>
					</label>
				</div>
			</div>
		</div>
	)
}
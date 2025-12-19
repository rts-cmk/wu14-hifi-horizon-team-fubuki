import { FaCartShopping, FaCreditCard, FaReceipt } from "react-icons/fa6";
import { Link } from "react-router";

export default function PaymentProgress({ currentStep = 1 }) {

	return (
		<div className="payment-progress">
			<div className="payment-progress__background">
			</div>

			<ol className="payment-progress__steps">
				<li className={`payment-progress__step step-one ${(currentStep === 1) ? 'active' : ''}`}>
					<Link to="/cart/orders"><FaCartShopping className="payment-progress__icon" /></Link>

				</li>

				<li className={`payment-progress__step step-two ${(currentStep === 2) ? 'active' : ''}`}>
					{(document.cookie != "" &&
						<Link to="/cart/payment"><FaCreditCard className="payment-progress__icon" /></Link>
						||
						<FaCreditCard className="payment-progress__icon" />)}
				</li>

				<li className={`payment-progress__step step-three ${(currentStep === 3) ? 'active' : ''}`}>
					<FaReceipt className="payment-progress__icon" />
				</li>
			</ol>
		</div>
	)
}
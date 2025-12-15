import Delivery from "../components/Delivery";
import Method from "../components/Method";
import PaymentProgress from "../components/PaymentProgress";
import YourInfo from "../components/YourInfo";

export default function Payment() {
	return (
		<main className="cart-content">
			<PaymentProgress currentStep={2} />

			<form className="cart-content__form form-content" action="/card/invoice">

				<YourInfo />

				<Delivery />

				<Method />

				<button type="submit" className="cart-content__next disabled">Checkout</button>
			</form>

		</main>
	)
}
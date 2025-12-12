import PaymentProgress from "../components/PaymentProgress";

export default function Payment() {
	return (
		<main className="cart-content">
			<PaymentProgress currentStep={2} />
		</main>
	)
}
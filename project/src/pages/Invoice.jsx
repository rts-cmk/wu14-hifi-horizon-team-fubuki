import PaymentProgress from "../components/PaymentProgress";

export default function Invoice() {
	return (
		<main className="cart-content">
			<PaymentProgress currentStep={3} />
		</main>
	)
}
import PaymentProgress from "../components/PaymentProgress";
import { RetrieveCartItems } from "../helpers/cartHandler";
import Delivery from "../components/Delivery";
import YourInfo from "../components/YourInfo";
import { useEffect, useState } from "react";
import Method from "../components/Method";

export default function Payment() {
	const [totalPrice, setTotalPrice] = useState(0)
	const [products, setProducts] = useState([])

	useEffect(() => {
		async function fetchProducts() {
			var promises = []

			RetrieveCartItems().forEach(item => {
				const promise = fetch(`http://localhost:3000/api/product/${item.split("-")[0]}`).then(res => res.json())
				promises.push(promise)
			})

			const results = await Promise.all(promises)

			setProducts(results)
		}

		fetchProducts()
	}, [])

	return (
		<main className="cart-content">
			<PaymentProgress currentStep={2} />

			<form className="cart-content__form form-content" action="/cart/invoice">

				<YourInfo products={products} cookie={RetrieveCartItems()} />

				<Delivery />

				<Method />

				<button type="submit" className="cart-content__next enabled">Checkout</button>
			</form>

		</main>
	)
}
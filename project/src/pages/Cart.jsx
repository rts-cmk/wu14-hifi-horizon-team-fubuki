import { RetrieveCartItems } from "../helpers/cartHandler"
import PaymentProgress from "../components/PaymentProgress.jsx"
import CartItem from "../components/CartItem.jsx"
import { useState, useEffect } from "react"
import { Link } from "react-router"

export default function Cart() {
	const [totalPrice, setTotalPrice] = useState(0)
	const [products, setProducts] = useState([])

	useEffect(() => {
		CalculateTotal()

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

	function CalculateTotal() {
		let total = 0
		let cartItems = RetrieveCartItems()

		cartItems.forEach(item => {
			let [id, qty, prc] = item.split("-")
			total += (Number(prc) * Number(qty))
		})

		setTotalPrice(total)
	}

	function retriveAMT(itemID) {
		return RetrieveCartItems().map((item, idx) => {
			let [id, qty, prc] = item.split("-")

			if (id == itemID) {
				return Number(qty)
			}
		}).join("")
	}

	return (
		<main className="cart-content">
			<PaymentProgress />
			<h3 className="cart-content__title">Cart</h3>
			<ol className="cart-content__list">
				{products.length > 0 ? products.map((item, idx) => (
					<CartItem key={`${item}-${idx}`} item={item} idx={idx} func={CalculateTotal}
						itemAMT={retriveAMT(item.id)} />
				)) :
					<p className="cart-content__empty">Your cart is empty</p>
				}
			</ol>

			<p className="cart-content__total">Sub total <span>${totalPrice.toFixed(2)}</span></p>

			{(RetrieveCartItems().length != 0 &&
				<Link className="cart-content__next enabled" to={"/cart/payment"}>Go to payment</Link>
				|| <button className="cart-content__next disabled">Go to payment</button>)}
		</main>
	);
}

import { useSearchParams } from "react-router";
import PaymentProgress from "../components/PaymentProgress";
import { useEffect, useState } from "react";
import { RetrieveCartItems } from "../helpers/cartHandler";
import Logo from "../assets/icons/logo.svg?react";
import { IoCallSharp } from "react-icons/io5";
import { HiMail } from "react-icons/hi";

export default function Invoice() {
	const [totalPrice, setTotalPrice] = useState(0)
	const [searchParams] = useSearchParams()
	const [products, setProducts] = useState([])

	const fullname = searchParams.get("fullname") ?? ""
	const zip = searchParams.get("zip") ?? ""
	const city = searchParams.get("city") ?? ""
	const address = searchParams.get("address") ?? ""
	const email = searchParams.get("email") ?? ""
	const phone = searchParams.get("phone") ?? ""
	const terms = searchParams.get("terms") ?? ""
	const card = searchParams.get("card") ?? ""

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

		RetrieveCartItems().forEach((item) => {
			setTotalPrice(totalPrice + Number(item.split("-")[2]) * Number(item.split("-")[1]))
		})
	}, [])

	return (
		<main className="cart-content">
			<PaymentProgress currentStep={3} />
			<h3 className="cart-content__title-center">Thank you for your order!</h3>
			<section className="section-invoice">
				<section className="section-invoice__sec-info">
					<div className="section-invoice__div-info-items">
						<div className="section-invoice__div-info-item">
							<h4>{fullname}</h4>
							<p>{address} {zip}</p>
							<p>{city}</p>
							<p>P: {phone}</p>
							<p>M: {email}</p>
						</div>
						<div className="section-invoice__div-info-item">
							<h3 className="section-invoice__div-info-item-h3">delivery address</h3>
							<h4>{fullname}</h4>
							<p>{address} {zip}</p>
							<p>{city}</p>
							<p>P: {phone}</p>
							<p>M: {email}</p>
						</div>
					</div>
					<div className="section-invoice__div-info-item">
						<Logo className="section-invoice__div-info-logo" />
						<h4>44 Cow Wynd, Falkirk </h4>
						<h4>Central Region, FK1 1PU</h4>
						<div className="section-invoice__div-info-container"><span>0131 556 7901</span><IoCallSharp className="section-invoice__container-svg" /></div>
						<div className="section-invoice__div-info-container"><span>sales@hifi-horizon.com</span><HiMail className="section-invoice__container-svg" /></div>
					</div>
				</section>
				<div className="section-invoice__div-invoice-items">
					
				</div>
				${totalPrice.toFixed(2)}
			</section>
		</main>
	)
}
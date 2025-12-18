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

	const [vat, setVat] = useState(0)
	const [delivery, setDelivery] = useState(4.99)

	const fullname = searchParams.get("fullname") ?? ""
	const zip = searchParams.get("zip") ?? ""
	const city = searchParams.get("city") ?? ""
	const address = searchParams.get("address") ?? ""
	const email = searchParams.get("email") ?? ""
	const phone = searchParams.get("phone") ?? ""

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
		<main className="invoice-content">
			<PaymentProgress currentStep={3} />
			<h3 className="invoice-content__title-center">Thank you for your order!</h3>
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
					<div className="section-invoice__div-info-left-item">
						<Logo className="section-invoice__div-info-logo" />
						<h4>44 Cow Wynd, Falkirk </h4>
						<h4>Central Region, FK1 1PU</h4>
						<div className="section-invoice__div-info-container"><span>0131 556 7901</span><IoCallSharp className="section-invoice__container-svg" /></div>
						<div className="section-invoice__div-info-container"><span>sales@hifi-horizon.com</span><HiMail className="section-invoice__container-svg" /></div>
					</div>
				</section>
				<section className="section-invoice__sec-invoice-items">
					<h3 className="section-invoice__sec-invoice-title">Invoice</h3>
					<div className="section-invoice__sec-invoice-content">
						<div className="section-invoice__sec-invoice-item">
							<p>Order number</p>
							<p>Date</p>
							<p>Shop</p>
							<p>Currency</p>
						</div>
						<div className="section-invoice__sec-invoice-item">
							<p>238475691</p>
							<p>march 14, 2022</p>
							<p>342 HIFI Horizon - Falkirk</p>
							<p>USD</p>
						</div>
					</div>
				</section>

				<div className="section-invoice__table-wrap">
				<table className="section-invoice__table">
					<thead>
						<tr>
							<th>
								Item description
							</th>
							<th>
								Price
							</th>
							<th>
								Quantity
							</th>
							<th>
								Total
							</th>
						</tr>
					</thead>
					<tbody>
						{products.map((item, index) => {
							return <tr key={item.name} className={index % 2 === 0 ? '' : 'tr-grey'}>
								<td>{item.name}</td>
								<td>${(item.price - item.price / 100 * item.discount).toFixed(2)}</td>
								<td>{RetrieveCartItems()[index].split("-")[1]}</td>
								<td>${((Number(item.price) * Number(RetrieveCartItems()[index].split("-")[1])).toFixed(2) - (Number(item.price) * Number(RetrieveCartItems()[index].split("-")[1])).toFixed(2) / 100 * item.discount).toFixed(2)}</td>
							</tr>
						})}
					</tbody>
				</table>

				</div>

				<div className="section-invoice__div-totals">
					<div className="section-invoice__div-totals-item">
						<p>SUBTOTAL:</p>
						<p>VAT:</p>
						<p>DELIVERY:</p>
					</div>
					<div className="section-invoice__div-totals-item">
						<p>${totalPrice.toFixed(2)}</p>
						<p>${vat}</p>
						<p>${delivery}</p>
					</div>
				</div>

				<div className="section-invoice__div-final-totals">
					<div className="section-invoice__final-total">
						<div className="section-invoice__div-totals-item">
							<p>TOTAL</p>
						</div>
						<div className="section-invoice__div-totals-item">
							<p>${(totalPrice + vat + delivery).toFixed(2)}</p>
						</div>
					</div>
				</div>


				<div className="section-invoice__extra-info">
					<span className="section-invoice__extra-info-name">Adress: </span>
					<span>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</span>
					<span className="section-invoice__extra-info-name">Phone: </span>
					<span>0131 556 7901</span>
					<span className="section-invoice__extra-info-name">Email: </span>
					<span>sales@hifi-horizon.com</span>
				</div>
			</section>
		</main>
	)
}
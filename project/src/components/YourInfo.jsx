import { useEffect, useState } from "react"

export default function YourInfo({ products, cookie }) {
	const [delivery, setDelivery] = useState(4.99)
	const [total, setTotal] = useState(0)
	const [vat, setVat] = useState(0)

	useEffect(() => {
		if (!cookie || cookie.length === 0) {
			setTotal(0)
			return
		}

		const totalSum = cookie.reduce((acc, item) => {
			const parts = item.split("-")
			const qty = Number(parts[1]) || 0
			const price = Number(parts[2]) || 0
			return acc + qty * price
		}, 0)

		setTotal(totalSum)
	}, [])

	return (
		<div className="cart-content__section form-content__info">
			<h3 className="cart-content__title smaller-title">Your info</h3>

			<div className="form-content__flex">
				<div className="form-content__box flex-inherit">
					<label htmlFor="fullname"
						className="form-content__label">Full name <span className="req">*</span></label>
					<input type="text" name="fullname" placeholder="Individual Name" required
						className="form-content__input" />

					<div className="form-content__wrapper">
						<label htmlFor="zip"
							className="form-content__label">Zip-code <span className="req">*</span></label>
						<label htmlFor="city"
							className="form-content__label">City <span className="req">*</span></label>
						<input type="text" name="zip" placeholder="12345" required
							className="form-content__input" />
						<input type="text" name="city" placeholder="fx, New York City" required
							className="form-content__input" />
					</div>

					<label htmlFor="address"
						className="form-content__label">Address <span className="req">*</span></label>
					<input type="text" name="address" placeholder="fx, 123 E 45th Street, Apt 10B" required
						className="form-content__input" />

					<label htmlFor="email"
						className="form-content__label">Email <span className="req">*</span></label>
					<input type="email" name="email" placeholder="youemail@here.com" required
						className="form-content__input" />

					<label htmlFor="phone"
						className="form-content__label">Phone no. <span className="req">*</span></label>
					<input type="text" name="phone" placeholder="+45 12 34 56 78" required
						className="form-content__input" />
				</div>

				<div className="form-content__box form-content__box-prices">
					<h4 className="cart-content__title smaller-title">Payment overview</h4>
					<ul className="form-content__list">
						{((products && cookie) && products.map((item, index) => {
							return <li className="form-content__list-item" key={`1-${item.name}`}>
								<p className="form-content__list-item-title">{item.name}</p>
								<p className="form-content__list-item-price">${
									(Number(cookie[index].split("-")[2]) * Number(cookie[index].split("-")[1])).toFixed(2)}</p>
							</li>
						}))}
					</ul>
					<p className="form-content__subprice">Price <span>
						${total.toFixed(2)}
					</span></p>

					<div className="gray-line"></div>

					<p className="form-content__price form-content__price-delivery">Delivery price <span>
						${delivery}
					</span></p>

					<p className="form-content__price form-content__price-vat">VAT <span>
						${vat}
					</span></p>
					<p className="form-content__price form-content__price-total">
						Total price <span>
							${(total + delivery + vat).toFixed(2)}
						</span>
					</p>

					<div className="form-content__agreements">
						<input type="checkbox" name="sub"></input>
						<label htmlFor="sub">Subscribe to newsletter</label>
						<input type="checkbox" name="terms" required></input>
						<label htmlFor="terms">I accept the terms of trade (read in new window)</label>
					</div>
				</div>
			</div>
		</div>
	)
}
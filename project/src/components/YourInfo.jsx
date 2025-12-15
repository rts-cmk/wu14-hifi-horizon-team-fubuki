export default function YourInfo() {

	return (
		<div className="cart-content__section form-content__info">
			<h3 className="cart-content__title">Your info</h3>

			<div>
				<div>
					<label htmlFor="fullname">Full name <span className="req">*</span></label>
					<input type="text" name="fullname" placeholder="Individual Name" required />

					<label htmlFor="zip">Zip-code <span className="req">*</span></label>
					<input type="text" name="zip" placeholder="12345" required />
					<label htmlFor="city">City <span className="req">*</span></label>
					<input type="text" name="city" placeholder="fx, New York City" required />

					<label htmlFor="address">Address <span className="req">*</span></label>
					<input type="text" name="address" placeholder="fx, 123 E 45th Street, Apt 10B" required />

					<label htmlFor="email">Email <span className="req">*</span></label>
					<input type="email" name="email" placeholder="youemail@here.com" required />

					<label htmlFor="phone">Phone no. <span className="req">*</span></label>
					<input type="text" name="phone" placeholder="+45 12 34 56 78" required />
				</div>

				<div>
					<h4 className="cart-content__title">Payment overview</h4>
					<ul>
						<li>
							<p>Some Product #1</p>
							<p>$9999</p>
						</li>
						<li>
							<p>Some Product #2</p>
							<p>$9999</p>
						</li>
					</ul>
					<p>Price $9999</p>
					<div className="line">

					</div>

					<p>Delivery price <span>
						$4.99
					</span></p>

					<p>VAT <span>
						$4999
					</span></p>
					<p>
						Total price $19997.99
					</p>

					<div>
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
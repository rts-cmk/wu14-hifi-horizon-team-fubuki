export default function NewsLetter() {

	return (
		<section className="newsletter-section">
			<h2 className="newsletter-section__title">

			</h2>
			<p className="newsletter-section__text"></p>

			<form action="/" className="newsletter-section__form">
				<input type="email" name="email" placeholder="youremail@here.com"
					className="newsletter-section__form-input" required></input>
				<button className="newsletter-section__form-submit">
					Sign up
				</button>
			</form>
		</section>
	)
}
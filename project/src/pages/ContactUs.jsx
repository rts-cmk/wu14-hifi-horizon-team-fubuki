export default function ContactUs() {
	return (
		<main className="contact-content">
			<h2 className="contact-content__title">
				Get in touch with us
			</h2>

			<form action="#" className="contact-content__form">
				<label for="name"
					className="contact-content__form-text">Full name <span className="req">*</span></label>
				<input type="text" name="name" placeholder="John Doe" required
					className="contact-content__form-input"></input>

				<label for="email"
					className="contact-content__form-text">Email <span className="req">*</span></label>
				<input type="email" name="email" placeholder="youremail@here.com" required
					className="contact-content__form-input"></input>

				<label for="subject"
					className="contact-content__form-text">Subject <span className="req">*</span></label>
				<input type="text" name="subject" placeholder="Whats this about?" required
					className="contact-content__form-input"></input>

				<label for="message"
					className="contact-content__form-text">Message <span className="req">*</span></label>
				<textarea name="message"
					placeholder="Enter your message here..." required
					className="contact-content__form-input"></textarea>

				<button className="contact-content__submit">Submit</button>
			</form>

			<p className="contact-content__extra">Visit our sister companies
				<span> Home Sound</span> and <span>The Movie Rooms </span>
				part of the HiFi Horizon Group. </p>
		</main>
	)
}
import NewsLetter from "../components/Newsletter";
import Popular from "../components/Popular";

export default function Home() {
	return (
		<main className="main-content">
			<div className="main-content__welcome-image">
			</div>

			<Popular />

			<article className="page-article">
				<h1 className="page-article__title">What we do</h1>
				<p className="page-article__text">We look forward to customising a system to meet your needs.</p>
				<p className="page-article__text">We don't favour one manufacturer over another - the only thing we do favour is making sure our customers get the right product that suits their needs and listening preferences. We will ask many questions in order to ensure that what you buy from us is tailored to you and you alone.</p>
				<p className="page-article__text">If you are looking for a product not found in our demonstration showrooms or our online site, don't fret as we have access to hundreds of brands.</p>
				<p className="page-article__text">One of our biggest pleasures of working in this industry is to see the smile on our customers' faces when they finally hear and see the system of their dreams.</p>

				<section className="page-article__section">
					<h2 className="page-article__section-title">
						Opening hours
					</h2>

					<p className="page-article__section-text">
						<span className="bold">
							Edinburgh
						</span>
						<span>
							2 Joppa Rd,Edinburgh, EH15 2EU
						</span>
						<span>
							Monday to Friday: 10:00am - 5:30pm
						</span>
						<span>
							Saturday: 10:00am - 5:30pm
						</span>
						<span>
							Sunday: Closed
						</span>
					</p>

					<p className="page-article__section-text">
						<span className="bold">
							Falkirk
						</span>
						<span>
							44 Cow Wynd, Falkirk, Central Region, FK1 1PU
						</span>
						<span>
							Monday to Friday: 10:00am - 5:30pm
						</span>
						<span>
							Saturday - By appointment only
						</span>
						<span>
							Sunday: Closed
						</span>
					</p>
				</section>
			</article>

			<NewsLetter />
		</main>
	)
}
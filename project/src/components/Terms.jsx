import { LiaCookieSolid } from "react-icons/lia"
import { useEffect, useState } from "react"
import "../style/_terms.sass"

export default function Terms() {
	const [cookiesAllowed, setCookiesAllowed] = useState(false)
	const [showned, setShowned] = useState(false)

	useEffect(() => {
		if (document.cookie != "") {
			setCookiesAllowed(true)
		} else {
			setCookiesAllowed(null)
		}
	}, [])

	function denyCookies() {
		setCookiesAllowed(false)
	}

	function allowCookies() {
		document.cookie = "cookies=true; path=/"
		document.cookie = "cart=null; path=/"
		setCookiesAllowed(true)
	}

	return (
		<>
			{
				(cookiesAllowed === null && <dialog className="content-terms" open>
					<style>{`body#root { overflow: hidden; }`}</style>
					<div className="content-terms__holder">
						<p className="content-terms__date">updated: 12/11/2025</p>
						<h2 className="content-terms__title">We use COOKIES <LiaCookieSolid /></h2>
						<p className="content-terms__desc">This Cookie Policy explains what cookies are, how we use them on our website, and the choices you have regarding their use. By continuing to use our site, you agree to the placement of cookies described below unless you disable them through your browser settings or our cookie controls.</p>

						<section className="content-terms__section">
							<h3 className="content-terms__section-title">What Are Cookies?</h3>
							<p className="content-terms__section-desc">Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. Cookies help websites function properly, remember your preferences, and improve the user experience. Cookies may be “session cookies” (deleted when you close your browser) or “persistent cookies” (stored until you delete them or they expire).</p>
						</section>

						<section className="content-terms__section">
							<h3 className="content-terms__section-title">How We Use Cookies</h3>
							<p className="content-terms__section-desc">We use cookies to ensure the core functionality of our website, improve performance, and provide a smooth user experience—especially during checkout and consent processes. We do not use cookies to store sensitive personal information such as payment details.</p>
						</section>

						{(showned === true && <section className="content-terms__section">
							<h3 className="content-terms__section-title">Cookies We Use</h3>
							<h4 className="content-terms__section-subtitle">A. Essential Cookies</h4>
							<p className="content-terms__section-desc">These cookies are necessary for the website to function and cannot be disabled through our site.</p>

							<p className="bold">“accepted_terms”</p>
							<ol>
								<li><span className="bold">
									Purpose:</span> Stores whether you have accepted our terms, policies, or cookie consent notice.</li>
								<li><span className="bold">
									Type:</span> Essential / functional</li>
								<li><span className="bold">
									Data stored:</span> A simple acceptance flag</li>
								<li><span className="bold">
									Duration:</span> Persistent until manually cleared or expiration</li>
							</ol>

							<p className="bold">“checkout_cart”</p>
							<ol>
								<li><span className="bold">
									Purpose:</span> Stores the items you add to your shopping cart to enable the checkout process.</li>
								<li><span className="bold">
									Type:</span> Essential / e-commerce functionality</li>
								<li><span className="bold">
									Data stored:</span> Product IDs, quantities, or similar non-sensitive cart data</li>
								<li><span className="bold">
									Duration:</span> until checkout is completed</li>
							</ol>
						</section>)}
						<button className="content-terms__button show-btn" onClick={() => setShowned(!showned)}>
							{(showned === false && "Show All Terms" || "Hide All Terms")}
						</button>
						<div className="content-terms__buttons">
							<button onClick={() => denyCookies()}
								className="content-terms__button">Reject Cookies</button>
							<button onClick={() => allowCookies()}
								className="content-terms__button orange">Accept Cookies</button>
						</div>
					</div>
				</dialog>)
			}

		</>
	)
}
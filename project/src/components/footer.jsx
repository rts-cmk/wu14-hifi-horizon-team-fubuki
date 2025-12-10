import { FaCcMastercard, FaCcStripe, FaCcVisa, FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router";

export default function Footer() {
	return (
		<footer className="footer">
			<nav className="footer__nav">
				<div className="footer__div-links">
					<Link to="/">Home</Link>
					<Link to="/products">Shop</Link>
					<Link to="/about">About Us</Link>
				</div>

				<div className="footer__div-links">
					<Link to="/">Returns & Refunds</Link>
					<Link to="/">Delivery</Link>
					<Link to="/">Privacy Policy</Link>
					<Link to="/">Terms & Conditions</Link>
				</div>
				<div className="footer__div-links">
					<Link to="/contact">CONTACT</Link>
					<span className="footer__span-adress">2 Joppa Rd, Edinburgh, EH15 2EU</span>
					<a href="tel:+4512345678" className="footer__a-contact"><IoCallSharp className="footer__svg-contact" /> <span>0131 556 7901</span></a>
					<span className="footer__span-adress">44 Cow Wynd, Falkirk, Central Region, FK1 1PU</span>
					<a href="tel:+4501324629011" className="footer__a-contact"><IoCallSharp className="footer__svg-contact" /> <span>01324 629 011</span></a>
					<div className="footer__div-social-media">
						<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer__a-social-media"><FaFacebookSquare /></a>
						<a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer__a-social-media"><FaSquareXTwitter /></a>
						<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer__a-social-media"><FaInstagramSquare /></a>
						<a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="footer__a-social-media"><FaYoutubeSquare /></a>
					</div>
				</div>
			</nav>
			<div className="footer__div-svgs">
				<FaCcStripe />
				<FaCcVisa />
				<FaCcMastercard />
			</div>
			<div className="footer__div-last-p">
				<p>HiFi Horizon (Edinburgh) Ltd is registered in Scotland. No: SC049298. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU</p>
				<p>Created by team fubuki</p>
			</div>
		</footer>
	)
}
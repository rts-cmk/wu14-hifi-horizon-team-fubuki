import { FaRegFaceSadCry } from "react-icons/fa6";
import { Link } from "react-router"

export default function Error() {
	return (
		<main className="error-content">

			<FaRegFaceSadCry className="error-content__image" />
			<h3 className="error-content__title">404</h3>
			<p className="error-content__text">There doesn't seem to be anything here...</p>
			<Link className="error-content__button" to={"/"}>Back to the front page</Link>
		</main>
	)
}
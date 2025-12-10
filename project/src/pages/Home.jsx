import NewsLetter from "../components/Newsletter";
import Popular from "../components/Popular";

export default function Home() {
	return (
		<main className="main-content">

			<Popular />

			<NewsLetter />
		</main>
	)
}
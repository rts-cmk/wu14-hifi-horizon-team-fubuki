export default async function productLoader({ params }) {
	if (!params.product) {
		return {}
	} else {
		try {
			const response = await fetch(`https://superb-jelly-27600d.netlify.app/api/product/${params.product}`)
			const data = await response.json()

			return data
		} catch (err) {
			return {}
		}
	}
}
export default async function productLoader({ params }) {
	if (!params.product) {
		return {}
	} else {
		try {
			const response = await fetch(`http://localhost:3000/api/product/${params.product}`)
			const data = await response.json()

			return data
		} catch (err) {
			return {}
		}
	}
}
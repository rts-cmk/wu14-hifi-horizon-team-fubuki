export default async function popularLoader() {
	try {
		const response = await fetch(`http://localhost:3000/api/popular`)
		const data = await response.json()

		return data
	} catch (err) {
		return {}
	}
}
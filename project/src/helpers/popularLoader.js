export default async function popularLoader() {
	try {
		const response = await fetch(`https://superb-jelly-27600d.netlify.app/api/popular`)
		const data = await response.json()

		return data
	} catch (err) {
		return {}
	}
}
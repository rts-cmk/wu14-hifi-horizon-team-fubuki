export default async function dataLoader() {
	let fetchedData = {}

	try {
		await fetch("https://superb-jelly-27600d.netlify.app/api/products")
			.then(response => response.json())
			.then(data => {
				fetchedData = data.result
			})
	} catch (err) {
		console.error(err)
	}

	return fetchedData
}
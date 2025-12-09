export default async function dataLoader() {
	let fetchedData = {}

	try {
		await fetch("http://localhost:3000/api/products")
			.then(response => response.json())
			.then(data => {
				fetchedData = data.result
			})
	} catch (err) {
		console.error(err)
	}

	return fetchedData
}
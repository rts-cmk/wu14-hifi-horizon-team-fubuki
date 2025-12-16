export default async function compareLoader({ params }) {
    if (!params.id) {
        return []
    } else {
        try {
            const response = await fetch(`http://localhost:3000/api/compare/${params.id}`)
            const data = await response.json()

            return data.result

        }
        catch (err) {
            return []
        }
    }
}

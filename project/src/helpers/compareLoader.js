export default async function compareLoader({ id }) {
    if (!id) {
        return {}
    } else {
        try {
            const response = await fetch(`http://localhost:3000/api/compare/${id}`)
            const data = await response.json()

            return data

        }
        catch (err) {
            return {}
        }
    }
}

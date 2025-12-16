import { useEffect, useState } from "react"


export default function ProductComparison() {
  const [compareProducts, setCompareProducts] = useState([])
  const compareIds = useLoaderData()

  useEffect(() => {

    async function fetchCompareProducts() {

      var promises = []

      compareIds.forEach(id => {
        const promise = fetch(`http://localhost:3000/api/product/${id}`).then(res => res.json())
        promises.push(promise)
      })

			const results = await Promise.all(promises)

			setCompareProducts(results)
    }

    fetchCompareProducts()
  }, [])


  return (
    <div>
      <h1>ProductComparison Page</h1>
    </div>
  )
}
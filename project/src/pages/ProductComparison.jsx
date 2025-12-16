import { useEffect, useState } from "react"
import { useLoaderData } from "react-router"


export default function ProductComparison() {
  const [compareProducts, setCompareProducts] = useState([])
  const compareIds = useLoaderData() || []

  useEffect(() => {

    async function fetchCompareProducts() {

      var promises = []

      console.log(compareIds)

      compareIds.forEach(id => {
        const promise = fetch(`http://localhost:3000/api/product/${id}`).then(res => res.json())
        promises.push(promise)
      })

			const results = await Promise.all(promises)

			setCompareProducts(results)
      console.log(results)
    }

    fetchCompareProducts()
  }, [])


  return (
    <main className="compare-content">
      <h2 className="main-content__h2">PRODUCT COMPARISON</h2>
      <section className="compare-section">
        <table className="compare-section__table">
          <thead>
            <tr>
              <th></th>
              <th>product</th>
              <th>product</th>
              <th>product</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>brand</th>
              <td>Brand A</td>
              <td>Brand B</td>
              <td>Brand C</td>
            </tr>
            <tr>
              <th>category</th>
              <td>Category A</td>
              <td>Category B</td>
              <td>Category C</td>
            </tr>
          </tbody>
        </table>
      </section>
      {compareProducts.length > 0 ? compareProducts.map((item, idx) => (<div key={idx}></div>)) : <p>Loading...</p>}
    </main>
  )
}
import { useEffect, useState } from "react"
import { useLoaderData } from "react-router"


export default function ProductComparison() {
  const [compareProducts, setCompareProducts] = useState([])
  const compareIds = useLoaderData() || []

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

  const visibleProducts = compareProducts.slice(0, 3)
  const isEmpty = compareProducts.length === 0


  return (
    <main className="compare-content">
      <h2 className="main-content__h2">PRODUCT COMPARISON</h2>
      <section className="compare-section">
        <div className="compare-section__table-wrap">
          <table className="compare-section__table">
            <thead className="compare-section__thead">
              <tr className="compare-section__thead-tr">
                <th className="compare-section__thead-th"></th>
                {isEmpty ? (
                  <>
                    <th className="compare-section__thead-th">product</th>
                    <th className="compare-section__thead-th">product</th>
                    <th className="compare-section__thead-th">product</th>
                  </>
                ) : (
                  visibleProducts.map((product, index) => (
                    <td key={`${product.id}-${index}-1`} className="compare-section__thead-th">
                      <div className="compare-section__thead-th-content">
                        <img src={`/images/${product.images[0]}`} alt={product.images[0]} className="compare-section__thead-th-img" />
                        <span className="compare-section__thead-th-span">{product.name}</span>
                      </div>
                    </td>
                  ))
                )}

              </tr>
            </thead>
            <tbody>
              <tr className="tr-grey">
                <th>Category</th>
                {isEmpty ? (
                  <>
                    <td className="compare-section__thead-td">XXXXXX</td>
                    <td className="compare-section__thead-td">XXXXXX</td>
                    <td className="compare-section__thead-td">XXXXXX</td>
                  </>
                ) : (
                  visibleProducts.map((product, index) => (
                    <td key={`${product.id}-${index}-2`} className="compare-section__thead-td">
                      {product.categorie}
                    </td>
                  ))
                )}
              </tr>

              {visibleProducts[0]?.info.map((element, idx) => (
                <tr key={`${idx}-info`} className={idx % 2 === 0 ? '' : 'tr-grey'}>
                  <th>{element.title}</th>
                  {isEmpty ? (
                    <>
                      <td className="compare-section__thead-td">XXXXXX</td>
                      <td className="compare-section__thead-td">XXXXXX</td>
                      <td className="compare-section__thead-td">XXXXXX</td>
                    </>
                  ) : (
                    visibleProducts.map((product, index) => (
                      <td key={`${product.id}-${index}-3`} className="compare-section__thead-td">
                        {product.info[idx]?.value} {product.info[idx]?.second}
                      </td>
                    ))
                  )}
                </tr>
              ))}



              {visibleProducts[0]?.information.map((element, idx) => (
                <tr key={`${idx}-information`} className={idx % 2 === 0 ? '' : 'tr-grey'}>
                  <th>{element.title}</th>
                  {isEmpty ? (
                    <>
                      <td className="compare-section__thead-td">XXXXXX</td>
                      <td className="compare-section__thead-td">XXXXXX</td>
                      <td className="compare-section__thead-td">XXXXXX</td>
                    </>
                  ) : (
                    visibleProducts.map((product, index) => (
                      <td key={`${product.id}-${index}-4`} className="compare-section__thead-td">
                        {product.information[idx]?.value} {product.information[idx]?.second}
                      </td>
                    ))
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}
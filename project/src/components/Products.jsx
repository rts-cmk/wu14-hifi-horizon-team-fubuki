import { Link, useRouteLoaderData } from "react-router"
import { GiSettingsKnobs } from "react-icons/gi";

export default function Products() {

    const products = useRouteLoaderData("root")

    return(
        <section className="section-ctgrs__products-section">
            <ul className="section-ctgrs__products-ul">
                {
                    products.map((product) => {
                        return <li key={`product-${product.name}`} className="section-ctgrs__products-li">
                            <figure className="section-ctgrs__products-figure">
                                <img src={`/images/${product.images[0]}`} alt={product.images[0]} className="section-ctgrs__products-img" />
                            </figure>
                            <h3 className="section-ctgrs__products-h3"><Link to={`/details/${product.id}`}>{product.name}</Link></h3>
                            <p className="section-ctgrs__products-p">${(product.price - product.price / 100 * product.discount).toFixed(2)} <span className="section-ctgrs__products-span">{product.price}</span></p>
                            <div className="section-ctgrs__products-div-discount">{Math.round(product.discount)}%</div>
                            <div className="section-ctgrs__products-div-action">
                                <button className="section-ctgrs__products-link">Add to cart</button>
                                <p className={`section-ctgrs__products-stock-status ${product.status != 0 ? "stock" : ""}`}>
                                    {(product.status != 0 ? "In stock" : "Out of stock")}
                                </p>
                            </div>

                            <Link to={`/compare/${product.id}`} className="section-ctgrs__products-compare-link">Compare <GiSettingsKnobs /> </Link>
                        </li>
                    })
                }
            </ul>
        </section>

    )
}

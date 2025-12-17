import { HandleCardItems, RetrieveCartItems } from "../helpers/cartHandler"
import { Link, useLoaderData, useOutletContext } from "react-router"
import { GiSettingsKnobs } from "react-icons/gi"
import { useEffect, useState } from "react"

export default function Products() {
    const [items, setItems] = useOutletContext()
    const [cart, setCart] = useState([])
    const products = useLoaderData()

    function isAlreadyInCart(id) {
        const cartItems = RetrieveCartItems()

        if (cartItems.find(item => item.split("-")[0] == id)) {
            setCart([...cart, id])
        } else {
            setCart(cart.filter(val => val != id))
        }
    }

    function addToCart(data) {
        HandleCardItems(data.id, 1, data.price - ((data.price / 100) * data.discount), 1)

        setItems(items + 1)
        isAlreadyInCart(data.id)
    }

    useEffect(() => {
        products.forEach(product => isAlreadyInCart(product.id))
    }, [products])

    return (
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
                                {(
                                    cart.indexOf(product.id) < 0 &&
                                    <button className="section-ctgrs__products-link"
                                        onClick={() => addToCart(product)}>Add to cart</button>
                                    ||
                                    <Link className="section-ctgrs__products-link"
                                        to={`/details/${product.id}`}>Open Details</Link>
                                )}


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

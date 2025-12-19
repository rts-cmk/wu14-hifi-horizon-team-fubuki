import { HandleCardItems, RetrieveCartItems } from "../helpers/cartHandler"
import { Link, useLoaderData, useOutletContext } from "react-router"
import { GiSettingsKnobs } from "react-icons/gi"
import { useEffect, useState } from "react"

export default function Products({ brands, colors, min, max, discount, param }) {
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

    function shouldShowProduct(product) {
        const discountedPrice = product.price - (product.price / 100) * product.discount
        let priceMatch = discountedPrice >= (min || 0) && discountedPrice <= (max || 99999)
        let discountMatch = false
        let brandMatch = false
        let colorMatch = false
        let paramMatch = true

        if (brands.length === 0) {
            brandMatch = true
        }

        if (colors.length === 0) {
            colorMatch = true
        }

        if ((discount || 100) >= product.discount) {
            discountMatch = true
        }

        if (param != "" && (product.name.toLowerCase().includes(param) ||
            product.description.toLowerCase().includes(param)) === false) {
            paramMatch = false
        }

        if (brands.length !== 0 || colors.length !== 0) {
            brands.forEach(value => {
                if (value.toLowerCase() === product.brand.toLowerCase()) {
                    brandMatch = true
                }
            })

            colors.forEach(value => {
                if (product.fields[0].list.toString().toLowerCase().includes(value.toLowerCase())) {
                    colorMatch = true
                }
            })
        }

        if (priceMatch === false || brandMatch === false || colorMatch === false ||
            discountMatch === false || paramMatch === false) {

            priceMatch = false
            brandMatch = false
            colorMatch = false
            paramMatch = false
            discountMatch = false
        }

        return brandMatch || colorMatch || priceMatch || discountMatch || paramMatch
    }

    useEffect(() => {
        products.forEach(product => isAlreadyInCart(product.id))
    }, [products])

    return (
        <section className="section-ctgrs__products-section">
            <ul className="section-ctgrs__products-ul">
                {products.filter(shouldShowProduct).length > 0 ? (
                    products.filter(shouldShowProduct).map((product) => {
                        const discountedPrice = product.price - (product.price / 100) * product.discount

                        return <li key={`product-${product.name}`} className="section-ctgrs__products-li">
                            <figure className="section-ctgrs__products-figure">
                                <img src={`/wu14-hifi-horizon-team-fubuki/images/${product.images[0]}`} alt={product.images[0]} className="section-ctgrs__products-img" />
                            </figure>
                            <h3 className="section-ctgrs__products-h3"><Link to={`/details/${product.id}`}>{product.name}</Link></h3>
                            <p className="section-ctgrs__products-p">${discountedPrice.toFixed(2)} {product.discount > 0 && <span className="section-ctgrs__products-span">{product.price}</span>} </p>

                            {product.discount > 0 && <div className="section-ctgrs__products-div-discount">{Math.round(product.discount)}%</div>}

                            <div className="section-ctgrs__products-div-action">
                                {(cart.indexOf(product.id) < 0 && document.cookie != "") ? (
                                    <button className="section-ctgrs__products-link" onClick={() => addToCart(product)}>Add to cart</button>
                                ) : (
                                    <Link className="section-ctgrs__products-link" to={`/details/${product.id}`}>Open Details</Link>
                                )}
                                <p className={`section-ctgrs__products-stock-status ${product.status != 0 ? "stock" : ""}`}>
                                    {(product.status != 0 ? "In stock" : "Out of stock")}
                                </p>
                            </div>
                            <Link to={`/compare/${product.id}`} className="section-ctgrs__products-compare-link">Compare <GiSettingsKnobs /> </Link>
                        </li>
                    })
                ) : (
                    <li className="section-ctgrs__nothing-product"><p>Could not find any products here...</p></li>
                )}
            </ul>
        </section>
    )
}

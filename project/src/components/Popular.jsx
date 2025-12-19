import { Link, useRouteLoaderData } from "react-router"

export default function Popular() {
	const popularData = useRouteLoaderData("popular")

	return (
		<section className="popular-section">
			<h2 className="popular-section__title">
				<span>
					POPULAR PRODUCTS
				</span>

				<Link to={"/products"} className="popular-section__button">
					See all products
				</Link>
			</h2>

			<ul className="popular-section__products">
				{
					popularData.result.map((product) => {
						return <li key={`popular-product-${product.name}`}
							className="popular-section__product">
							<figure className="popular-section__product-image-holder">
								<img src={`/wu14-hifi-horizon-team-fubuki/images/${product.images[0]}`} alt={product.images[0]}
									className="popular-section__product-image"></img>
							</figure>

							<h3 className="popular-section__product-title">{product.name}</h3>
							<p className="popular-section__product-price"
							>$ {(product.price - ((product.price / 100) * product.discount)).toFixed(2)}</p>

							<Link to={`/details/${product.id}`}
								className="popular-section__product-button">
								Read More
							</Link>
						</li>
					})
				}
			</ul>
		</section>
	)
}
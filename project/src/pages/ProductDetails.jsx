import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { IoMdRemove, IoMdAdd } from "react-icons/io"
import { Link, useLoaderData } from "react-router"
import { GiSettingsKnobs } from "react-icons/gi"
import { useState } from "react"


export default function ProductDetails() {
	const [amount, setAmount] = useState(1)
	const [color, setColor] = useState(0)
	const [image, setImage] = useState(0)
	const productData = useLoaderData()

	function lastImage() {
		if (image <= 0) {
			setImage(productData.images.length - 1)
		} else {
			setImage(image - 1)
		}
	}

	function nextImage() {
		if (image >= productData.images.length - 1) {
			setImage(0)
		} else {
			setImage(image + 1)
		}
	}

	function removeAmount() {
		if (amount >= 2) {
			setAmount(amount - 1)
		} else if (amount <= 1) {
			setAmount(99)
		}
	}

	function addToCart(id = productData.id) {

	}

	return (
		<main className="product-content">
			<h2 className="product-content__title">
				PRODUCT
			</h2>

			<Link to={`/compare/${productData.id}`} className="product-content__button-compare">
				Compare
				<GiSettingsKnobs className="product-content__button-icon" />
			</Link>

			<div className="product-content__holder">
				<figure className="product-content__image-holder">
					<img src={`/images/${productData.images[image]}`} alt={productData.images[image]}
						className="product-content__image"></img>

					<figcaption className="product-content__image-caption">
						<button onClick={() => lastImage()} className="product-content__image-button">
							<FaAngleLeft />
						</button>
						<button onClick={() => nextImage()} className="product-content__image-button">
							<FaAngleRight />
						</button>

						<nav className="product-content__image-small-buttons">
							{
								productData.images.map((elm, idx) => {
									return (
										<button onClick={() => setImage(idx)} key={`small-button-${idx}`}
											className={`product-content__image-button-small ${(image === idx ? "active" : "")}`}>
										</button>
									)
								})
							}
						</nav>
					</figcaption>
				</figure>

				<section className="product-content__details">
					<h4 className="product-content__name">{productData.name}</h4>
					<p className="product-content__description">{productData.description}</p>

					<ol className="product-content__colors">
						{
							productData.fields.find(field => field.type == "color")?.list.map((colorField, idx) => {
								return <li key={colorField} className={`product-content__color ${(color === idx ? "active" : "")}`}
									onClick={() => setColor(idx)}>
									<div className={`product-content__color-design ${colorField.toLowerCase()}`}>
										<div>

										</div>
									</div>

									<p className="product-content__color-name">{colorField}</p>
								</li>
							})
						}
					</ol>

					<p className="product-content__info">
						<span className="product-content__info-price">
							$ {((productData.price - ((productData.price / 100)
								* productData.discount)) * amount).toFixed(2)}
						</span>

						<span className={`product-content__info-stock ${(productData.status != 0 ? "stock" : "")}`}>
							{(productData.status != 0 ? "In stock" : "Out of stock")}
						</span>
					</p>

					<div className="product-content__buttons-holder">
						<div className="product-content__amounts">
							<button onClick={() => removeAmount()}
								className="product-content__amount-button"><IoMdRemove /></button>
							<p className="product-content__amount">{(productData.status != 0 ? amount : 0)}</p>
							<button onClick={() => { (amount >= 99 ? setAmount(1) : setAmount(amount + 1)) }}
								className="product-content__amount-button"><IoMdAdd /></button>
						</div>

						<button onClick={() => addToCart()}
							className={`product-content__button-order ${(productData.status != 0 ? "stock" : "")}`}>Add to cart</button>
					</div>
				</section>
			</div>

			<div className="product-content__line">
			</div>

			<h2 className="product-content__specs-title">
				PRODUCT SPECIFICATIONS
			</h2>

			<ol className="product-content__specs">
				<li className="product-content__specs-line"></li>
				{
					productData.information.map((detail, idx) => {
						return <li key={detail.title}
							className={`product-content__spec ${((idx / 2) % 1 == 0 && "dark" || "light")}`}>
							<p>
								{detail.title}
							</p>
							<p>
								{detail.value} {detail.second}
							</p>
						</li>
					})
				}
			</ol>
		</main>
	)
}
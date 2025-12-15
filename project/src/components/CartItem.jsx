import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io"
import { HandleCardItems } from "../helpers/cartHandler"

export default function CartItem({ item, idx, func, itemAMT = 1 }) {
	itemAMT = Number(itemAMT)
	const itemID = item.id

	function DeleteItem() {
		itemAMT = 0
		HandleCardItems(itemID, 0, 0)
	}

	function ChangeAmount(amount) {
		if (itemAMT + amount > item.stock) {
			return
		}

		itemAMT += amount

		HandleCardItems(itemID, itemAMT, item.price - ((item.price / 100) * item.discount))

		if (amount >= 1) {
			func()
		} else {
			func()
		}
	}

	return (
		itemAMT >= 1 && <li className="cart-content__item" key={`${item}-${idx}`}>
			<button className="cart-content__item-remove" onClick={() => DeleteItem()}>
				<IoMdClose />
			</button>
			{item.images && <img className="cart-content__item-image"
				src={`/image/${item.images[0]}`} alt={item.images[0]} />}

			<p className="cart-content__item-name">{item.name || "Loading Name"} <span
				className={`cart-content__item-stock ${(item.stock !== 0 && "stock" || "")}`}>
				{(item.stock === 0 && "Out of stock" || "In stock")}
			</span></p>

			<div className="cart-content__amounts">
				<button onClick={() => ChangeAmount(-1)}
					className="cart-content__item-button"><IoMdRemove /></button>
				<p className="cart-content__item-amount">{itemAMT}</p>
				<button onClick={() => ChangeAmount(1)}
					className="cart-content__item-button"><IoMdAdd /></button>
			</div>

			<p className="cart-content__item-price">
				<span>$ </span>
				{((item.price - ((item.price / 100) * item.discount)) * itemAMT).toFixed(2)}
			</p>
		</li>
	)
}
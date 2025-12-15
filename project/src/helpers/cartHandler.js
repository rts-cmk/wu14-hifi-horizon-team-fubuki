export function CheckLogin() {

}

export function CreateInvoice() {

}

export function RetrieveCartItems() {
	if (document.cookie != "") {
		let cartItems = document.cookie.split(";")[1].split("=")[1].split(",")

		if (cartItems[0] == "null") {
			cartItems = []
		}

		return cartItems
	} else {
		return []
	}
}

export function HandleCardItems(itemID = 0, quantity = 0, price = 0, color = "default") {
	let cartItems = document.cookie.split(";")[1].split("=")[1].split(",")
	let newCartItems = []

	if (cartItems[0] == "null") {
		cartItems = []
	}

	cartItems.forEach(item => {
		let [id, qty, prc, clr] = item.split("-")

		if (id == itemID) {
			newCartItems.push(`${itemID}-${quantity}-${price}-${clr}`)
		} else if (qty >= 1) {
			newCartItems.push(`${id}-${qty}-${prc}-${clr}`)
		}
	})

	if (!newCartItems.find(item => item.split("-")[0] == itemID)) {
		newCartItems.push(`${itemID}-${quantity}-${price}-${color}`)
	}

	newCartItems.forEach((item, index) => {
		let [id, qty, prc] = item.split("-")

		if (id == itemID && quantity <= 0) {
			newCartItems.splice(index, 1)
		}
	})

	if (newCartItems.length == 0) {
		newCartItems.push("null")
	}

	document.cookie = `cart=${newCartItems.join(",")}; path=/`
}
import { findCookie } from "./cartHandler"

export default async function profileLoader() {
	try {
		if (!document.cookie.includes("login")) {
			return { login: false, account: {} }
		}

		const response = await fetch("http://localhost:3000/api/account", {
			headers: {
				"request-type": "info",
				"request-key": findCookie("login", false) || ""
			}
		})

		const data = await response.json()

		if (data.success === true) {
			return {
				...data,
				login: true
			}
		} else {
			return { login: false, account: {} }
		}
	} catch (err) {
		return {
			login: false,
			account: {},
			error: err
		}
	}
}
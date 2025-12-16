export default async function profileLoader() {
	try {
		if (!document.cookie.includes("login")) {
			return { login: false, account: {} }
		}

	} catch (err) {
		return {
			login: false,
			account: {}
		}
	}
}
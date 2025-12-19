import { useOutletContext, useParams } from "react-router"
import LoginAccount from "../components/LoginAccount"
import CreateAccount from "../components/CreateAccount"
import { useEffect } from "react"

export default function Login({ type }) {
	const profile = useParams().type || type
	const [items, setItems, setForced] = useOutletContext()

	useEffect(() => {
		setForced(true)
	}, [])

	return (
		<>
			{profile === "login" && <LoginAccount />}
			{profile === "create" && <CreateAccount />}
		</>
	)
}
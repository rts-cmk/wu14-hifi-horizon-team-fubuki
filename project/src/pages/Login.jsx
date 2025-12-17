import { useParams } from "react-router"
import LoginAccount from "../components/LoginAccount"
import CreateAccount from "../components/CreateAccount"

export default function Login({ type }) {

	const profile = useParams().type || type

	return (
		<>
			{profile === "login" && <LoginAccount />}
			{profile === "create" && <CreateAccount />}
		</>
	)
}
import { useParams } from "react-router"
import LoginAccount from "../components/LoginAccount"
import CreateAccount from "../components/CreateAccount"

export default function Login() {

  const profile = useParams().type 
  return (
    <>
    {profile === "login" && <LoginAccount />}
    {profile === "create" && <CreateAccount />}
    </>
  )
}
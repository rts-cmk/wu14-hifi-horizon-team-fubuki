import { Outlet } from "react-router";
import Header from "../components/header";
import Footer from "../components/footer";
import Terms from "../components/Terms";
import { useEffect, useState } from "react";
import { RetrieveCartItems } from "../helpers/cartHandler";

export default function Layout() {
	const [items, setItems] = useState(0)

	useEffect(() => {
		setItems(RetrieveCartItems().length)
	}, [])

	useEffect(() => {
		console.log(items)
	}, [items])

	return (
		<>
			<Header items={items} />
			<Outlet context={[items, setItems]} />
			<Footer />
			<Terms />
		</>
	)
}
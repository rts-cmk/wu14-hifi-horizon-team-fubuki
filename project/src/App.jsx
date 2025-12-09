import { createBrowserRouter, RouterProvider } from 'react-router'
import ProductComparison from './pages/ProductComparison.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import dataLoader from './helpers/dataLoader.js'
import ContactUs from './pages/ContactUs.jsx'
import MoreInfo from './pages/MoreInfo.jsx'
import Payment from './pages/Payment.jsx'
import Invoice from './pages/Invoice.jsx'
import Product from './pages/Product.jsx'
import Profile from './pages/Profile.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Layout from './pages/Layout.jsx'
import Login from './pages/Login.jsx'
import Error from './pages/Error.jsx'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'

function App() {

	const browserRouter = createBrowserRouter([
		{
			id: "root",
			element: <Layout />,
			loader: dataLoader,
			hydrateFallbackElement: <p>Loading...</p>,
			errorElement: <Error />,
			children: [
				{
					path: "/",
					element: <Home />
				},
				{
					path: "/products",
					element: <Product />
				},
				{
					path: "/details/:product",
					element: <ProductDetails />
				},
				{
					path: "/compare/:products",
					element: <ProductComparison />
				},
				{
					path: "/cart/orders",
					element: <Cart />
				},
				{
					path: "/cart/payment",
					element: <Payment />
				},
				{
					path: "/cart/invoice/:details",
					element: <Invoice />
				},
				{
					path: "/profile/:type",
					element: <Login />
				},
				{
					path: "/contact",
					element: <ContactUs />
				},
				{
					path: "/about",
					element: <AboutUs />
				},
				{
					path: "/info",
					element: <MoreInfo />
				},
				{
					path: "/profile",
					element: <Profile />
				},
				{
					path: "*",
					element: <Error />
				}

			]
		}
	], { basename: "/" })

	return (
		<RouterProvider router={browserRouter} />
	)
}

export default App

import { useRouteLoaderData } from "react-router";
import { IoDocumentText } from "react-icons/io5";

export default function ProfileContent({ content }) {

	return (
		<section className="content-profile-sec__section-info">
			<h2 className="content-profile-sec__h2-title">YOUR RECENT ORDERS</h2>
			<ul className="content-profile-sec__ul">
				{
					content.map((order, index) => {
						return <li className="content-profile-sec__li li-orders" key={`${order.ordernumber}-${index}`}>
							<div className="content-profile-sec__li-div">
								<div className="content-profile-sec__li-div-info">
									<p><span className="content-profile-sec__li-span">Ordernumber:
									</span> {order.ordernumber}</p>
									<p><span className="content-profile-sec__li-span">Date:
									</span> {order.date}</p>
									<p><span className="content-profile-sec__li-span">Total:
									</span> $ {(order.total).toFixed(2)}</p>
									<p><span className="content-profile-sec__li-span">items:
									</span> {order.items}</p>
								</div>
							</div>
							<button className="content-profile-sec__li-button" > <IoDocumentText /> </button>
						</li>
					})
				}

				{(content.length <= 0 && <li className="content-profile-sec__li-span">You have currently no orders</li>)}
			</ul>
		</section>
	)
}
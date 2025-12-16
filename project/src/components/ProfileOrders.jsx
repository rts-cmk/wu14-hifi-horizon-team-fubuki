import { useRouteLoaderData } from "react-router";
import { IoDocumentText } from "react-icons/io5";

export default function ProfileContent() {
	const ProfileData = useRouteLoaderData("profile")

	return (
		<section className="content-profile-sec__section-info">
			<h2 className="content-profile-sec__h2-title">YOUR RECENT ORDERS</h2>
			<ul className="content-profile-sec__ul">
				<li className="content-profile-sec__li li-orders" >
					<div className="content-profile-sec__li-div">
						<div className="content-profile-sec__li-div-info">
							<p><span className="content-profile-sec__li-span">Ordernumber:</span> 123532532436</p>
							<p><span className="content-profile-sec__li-span">Date:</span> 02/22/2022</p>
							<p><span className="content-profile-sec__li-span">Total:</span> $ 450,00</p>
							<p><span className="content-profile-sec__li-span">items:</span> 6</p>
						</div>
					</div>
					<button className="content-profile-sec__li-button" > <IoDocumentText /> </button>
				</li>
				<li className="content-profile-sec__li li-orders" >
					<div className="content-profile-sec__li-div">
						<div className="content-profile-sec__li-div-info">
							<p><span className="content-profile-sec__li-span">Ordernumber:</span> 123532532436</p>
							<p><span className="content-profile-sec__li-span">Date:</span> 02/22/2022</p>
							<p><span className="content-profile-sec__li-span">Total:</span> $ 450,00</p>
							<p><span className="content-profile-sec__li-span">items:</span> 6</p>
						</div>
					</div>
					<button className="content-profile-sec__li-button" > <IoDocumentText /> </button>
				</li>
			</ul>
		</section>
	)
}
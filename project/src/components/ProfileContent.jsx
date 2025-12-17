import { FaLock, FaSave, FaUser } from "react-icons/fa";
import { useRouteLoaderData } from "react-router";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

export default function ProfileContent({ content }) {
	const [editId, setEditId] = useState(null)

	console.log(content)

	const [username, setUsername] = useState(content.name || "Unknown")
	const [nummer, setNummer] = useState(content.phone || "0000000000")
	const [email, setEmail] = useState(content.email || "unknown@mail.com")
	const [password, setPassword] = useState(content.password || "********")
	const [adress, setAdress] = useState(`
	${content.address.number} ${content.address.street} ${content.address.city} ${content.address.zip}
	${content.address.country}`)

	const toggleEdit = (id) => {
		setEditId(prev => (prev === id ? null : id))
	}


	return (
		<section className="content-profile-sec__section-info">
			<h2 className="content-profile-sec__h2-title">YOUR PROFILE INFORMATION</h2>
			<ul className="content-profile-sec__ul">
				<li className="content-profile-sec__li" >
					<div className="content-profile-sec__li-div">
						<FaUser className="content-profile-sec__li-icon" />
						<div className="content-profile-sec__li-div-info">
							<span className="content-profile-sec__li-span">Name</span>
							{editId === "username" ? (
								<input className="content-profile-sec__li-input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
							) : (
								<span className="content-profile-sec__li-span-info">{username}</span>
							)}

						</div>
					</div>
					{editId === "username" ? (<button className="content-profile-sec__li-button current" onClick={() => toggleEdit("username")} > <FaSave /> </button>
					) : (
						<button className="content-profile-sec__li-button" onClick={() => toggleEdit("username")} > <MdEdit /> </button>
					)}
				</li>
				<li className="content-profile-sec__li" >
					<div className="content-profile-sec__li-div">
						<IoCallSharp className="content-profile-sec__li-icon" />
						<div className="content-profile-sec__li-div-info">
							<span className="content-profile-sec__li-span">Phone number</span>
							{editId === "nummer" ? (
								<input className="content-profile-sec__li-input" type="text" value={nummer} onChange={(e) => setNummer(e.target.value)} />
							) : (
								<span className="content-profile-sec__li-span-info">{nummer}</span>
							)}

						</div>
					</div>
					{editId === "nummer" ? (<button className="content-profile-sec__li-button current" onClick={() => toggleEdit("nummer")} > <FaSave /> </button>
					) : (
						<button className="content-profile-sec__li-button" onClick={() => toggleEdit("nummer")} > <MdEdit /> </button>
					)}

				</li>
				<li className="content-profile-sec__li" >
					<div className="content-profile-sec__li-div">
						<HiMail className="content-profile-sec__li-icon" />
						<div className="content-profile-sec__li-div-info">
							<span className="content-profile-sec__li-span">Mail</span>
							{editId === "email" ? (
								<input className="content-profile-sec__li-input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
							) : (
								<span className="content-profile-sec__li-span-info">{email}</span>
							)}

						</div>
					</div>
					{editId === "email" ? (<button className="content-profile-sec__li-button current" onClick={() => toggleEdit("email")} > <FaSave /> </button>
					) : (
						<button className="content-profile-sec__li-button" onClick={() => toggleEdit("email")} > <MdEdit /> </button>
					)}
				</li>
				<li className="content-profile-sec__li" >
					<div className="content-profile-sec__li-div">
						<FaLock className="content-profile-sec__li-icon" />
						<div className="content-profile-sec__li-div-info">
							<span className="content-profile-sec__li-span">Password</span>
							{editId === "password" ? (
								<input className="content-profile-sec__li-input" type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
							) : (
								<span className="content-profile-sec__li-span-info">********</span>
							)}

						</div>
					</div>
					{editId === "password" ? (<button className="content-profile-sec__li-button current" onClick={() => toggleEdit("password")} > <FaSave /> </button>
					) : (
						<button className="content-profile-sec__li-button" onClick={() => toggleEdit("password")} > <MdEdit /> </button>
					)}
				</li>
				<li className="content-profile-sec__li" >
					<div className="content-profile-sec__li-div">
						<FaLocationDot className="content-profile-sec__li-icon" />
						<div className="content-profile-sec__li-div-info">
							<span className="content-profile-sec__li-span">Address</span>
							{editId === "adress" ? (
								<input className="content-profile-sec__li-input" type="text" value={adress} onChange={(e) => setAdress(e.target.value)} />
							) : (
								<span className="content-profile-sec__li-span-info">{(adress)}</span>
							)}

						</div>
					</div>
					{editId === "adress" ? (<button className="content-profile-sec__li-button current" onClick={() => toggleEdit("adress")} > <FaSave /> </button>
					) : (
						<button className="content-profile-sec__li-button" onClick={() => toggleEdit("adress")} > <MdEdit /> </button>
					)}
				</li>
			</ul>
		</section>
	)
}
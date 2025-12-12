import { useEffect, useState } from "react";
import { FaLock, FaSave, FaUser } from "react-icons/fa";
import { IoCallSharp, IoDocumentText } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";

export default function ProfileInfo() {

    const [selectedButton, setSelectedButton] = useState("profile");

    const [editId, setEditId] = useState(null)
    const [username, setUsername] = useState("John Doe")
    const [nummer, setNummer] = useState("7875 149753")
    const [email, setEmail] = useState("johndoe@hotmail.com")
    const [password, setPassword] = useState("********")
    const [adress, setAdress] = useState("61 Church St Berwick-upon-Tweed Northumberland TD15 1EE United Kingdom")

    useEffect(() => {
    }, [editId]);

    const toggleEdit = (id) => {
        setEditId(prev => (prev === id ? null : id))
    }

    return (
        <>
            <div className="content-profile-sec__div-buttons">
                <button className={`content-profile-sec__button ${selectedButton == "profile" ? "current" : ""}`} onClick={() => setSelectedButton("profile")} >Profile</button>
                <button className={`content-profile-sec__button ${selectedButton == "orders" ? "current" : ""}`} onClick={() => setSelectedButton("orders")}>Orders</button>
            </div>
            <section className={`content-profile-sec__section-info ${selectedButton == "profile" ? "" : "invis"}`}>
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
                                    <span className="content-profile-sec__li-span-info">{password}</span>
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
                                    <span className="content-profile-sec__li-span-info">{adress}</span>
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

            <section className={`content-profile-sec__section-info ${selectedButton == "orders" ? "" : "invis"}`}>
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
        </>
    )
}
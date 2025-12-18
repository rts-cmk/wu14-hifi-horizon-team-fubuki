import { Link, NavLink, useNavigate } from "react-router";
import Logo from "../assets/icons/logo.svg?react";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

export default function Header({ items = 0 }) {
  const [phoneSelected, setPhoneSelected] = useState(null)
  const navigate = useNavigate()

  function HandleSearch(event) {
    event.preventDefault()

    navigate(encodeURI(`/products?search=${event.target.search.value}`))
  }

  function PhoneButtonsToggle(val = null) {
    if (val === phoneSelected) {
      setPhoneSelected(null)
    } else {
      setPhoneSelected(val)
    }
  }

  return (
    <header className="header">
      <div className={`header__section-left ${(phoneSelected === 2 ? "" : "phone-hidden")}`}>
        <Link to="/" className="header__link-logo">
          <Logo />
        </Link>
        <nav className="header__nav">
          <ul className="header__ul">
            <li className="header__li"><NavLink to="/products" >SHOP</NavLink></li>
            <li className="header__li"><NavLink to="/about"  >ABOUT US</NavLink></li>
            <li className="header__li"><NavLink to="/contact"  >CONTACT US</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className="header__section-right">
        <form className={`header__div-search ${(phoneSelected === 1 ? "" : "phone-hidden")}`} action="/products" onSubmit={event => HandleSearch(event)}>
          <input className="header__input-search" type="text" name="search" placeholder="Search product..." required />
          <button className="header__btn-search"><FaSearch className="header__icon-search" /></button>
        </form>
        <button className={`header__phone-search phone-only ${(phoneSelected === 1 ? "active" : "")}`}
          onClick={() => PhoneButtonsToggle(1)}><FaSearch /></button>
        <NavLink to="/profile" className={({ isActive }) => "header__link-profile" + (isActive ? " active-svg" : "")} ><FaUser className="header__icon-profile" /></NavLink>
        <NavLink to="/cart/orders" className={({ isActive }) => "header__link-add-to-cart" + (isActive ? " active-svg" : "")}><FaCartShopping className="header__icon-add-to-cart" /> {items === 0 ? "" : <div className="header__div-add-to-cart">{items}</div>}</NavLink>
        <button className={`header__phone-menu phone-only ${(phoneSelected === 2 ? "active" : "")}`}
          onClick={() => PhoneButtonsToggle(2)}>
          <div>

          </div>
          <div>

          </div>
          <div>

          </div>
        </button>
      </div>
    </header>
  )
}
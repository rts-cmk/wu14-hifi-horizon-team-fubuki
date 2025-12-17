import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import Logo from "../assets/icons/logo.svg?react";

export default function Header({ items = 0 }) {

  return (
    <header className="header">
      <div className="header__section-left">
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
        <form className="header__div-search" action="/products">
          <input className="header__input-search" type="text" name="search" placeholder="Search product..." required />
          <button className="header__btn-search"><FaSearch className="header__icon-search" /></button>
        </form>
        <NavLink to="/profile" className={({ isActive }) => "header__link-profile" + (isActive ? " active-svg" : "")} ><FaUser className="header__icon-profile" /></NavLink>
        <NavLink to="/cart/orders" className={({ isActive }) => "header__link-add-to-cart" + (isActive ? " active-svg" : "")}><FaCartShopping className="header__icon-add-to-cart" /> {items === 0 ? "" : <div className="header__div-add-to-cart">{items}</div>}</NavLink>
      </div>
    </header>
  )
}
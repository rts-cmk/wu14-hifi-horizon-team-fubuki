import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router";
import Logo from "../assets/icons/logo.svg?react";

export default function Header() {
  return (
    <header className="header">
      <Link className="header__link-logo">
        <Logo />
      </Link>
      <nav className="header__nav">
        <ul className="header__ul">
          <li className="header__li">SHOP</li>
          <li className="header__li">ABOUT US</li>
          <li className="header__li">CONTACT</li>
        </ul>
      </nav>
      <input className="header__input-search" type="text" placeholder="Search product..." />
      <FaSearch className="header__icon-search" />
      <Link className="header__link-profile"><FaUser className="header__icon-profile" /></Link>
      <Link className="header__link-add-to-cart"><FaCartShopping className="header__icon-add-to-cart" /></Link>
    </header>
  )
}
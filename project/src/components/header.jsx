import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router";
import Logo from "../assets/icons/logo.svg?react";

export default function Header() {
  return (
    <header className="header">
      <section className="header__section-left">
        <Link to="/" className="header__link-logo">
          <Logo />
        </Link>
        <nav className="header__nav">
          <ul className="header__ul">
            <li className="header__li"><Link to="/products">SHOP</Link></li>
            <li className="header__li"><Link to="/about">ABOUT US</Link></li>
            <li className="header__li"><Link to="/contact">CONTACT</Link></li>
          </ul>
        </nav>
      </section>
      <section className="header__section-right">
        <div className="header__div-search">
          <input className="header__input-search" type="text" placeholder="Search product..." />
          <FaSearch className="header__icon-search" />
        </div>
        <Link to="/profile" className="header__link-profile"><FaUser className="header__icon-profile" /></Link>
        <Link to="/cart/orders" className="header__link-add-to-cart"><FaCartShopping className="header__icon-add-to-cart" /><div className="header__div-add-to-cart">1</div></Link>
      </section>
    </header>
  )
}
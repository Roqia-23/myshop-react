import { Link, NavLink } from 'react-router-dom'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'

export default function Navbar() {
  const { totalItems } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">M</span>
          <span>My<span>Shop</span></span>
        </Link>
        <button className="icon-button mobile-menu" onClick={() => setMenuOpen((open) => !open)} aria-label="نمایش منو">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          <NavLink to="/" onClick={closeMenu}>خانه</NavLink>
          <NavLink to="/products" onClick={closeMenu}>همه محصولات</NavLink>
          <a href="/products#categories" onClick={closeMenu}>دسته‌بندی‌ها</a>
        </nav>
        <Link to="/cart" className="cart-button">
          <ShoppingBag size={18} />
          <span>سبد خرید</span>
          <b>{totalItems}</b>
        </Link>
      </div>
    </header>
  )
}

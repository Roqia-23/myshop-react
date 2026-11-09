import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer id="footer" className="site-footer">
      <div className="container footer-inner">
        <div>
          <Link to="/" className="brand footer-brand"><span className="brand-mark">M</span><span>My<span>Shop</span></span></Link>
          <p>خرید ساده برای انتخاب‌های دوست‌داشتنی.</p>
        </div>
        <div className="footer-links"><Link to="/products">محصولات</Link><Link to="/cart">سبد خرید</Link></div>
        <span className="copyright">© ۲۰۲۶ MyShop — پروژه آموزشی React</span>
      </div>
    </footer>
  )
}

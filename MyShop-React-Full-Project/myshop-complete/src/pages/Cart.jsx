import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../data/products.js'

export default function Cart() {
  const { cartItems, subtotal, updateQuantity, removeFromCart } = useCart()
  const navigate = useNavigate()

  if (!cartItems.length) {
    return (
      <main className="container page-main empty-cart">
        <div className="empty-icon"><ShoppingBag size={34} /></div>
        <h1>سبد خریدت خالی است</h1>
        <p>هنوز محصولی به سبد خرید اضافه نکرده‌ای.</p>
        <Link to="/products" className="primary-button">رفتن به فروشگاه <ArrowLeft size={17} /></Link>
      </main>
    )
  }

  return (
    <main className="container page-main">
      <div className="page-title"><span className="eyebrow">خرید شما</span><h1>سبد خرید</h1></div>
      <div className="cart-layout">
        <section className="cart-items">
          {cartItems.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <span className="product-category">{item.category}</span>
                <h3>{item.name}</h3>
                <strong>{formatPrice(item.price)}</strong>
                <div className="quantity-control">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="کم کردن"> <Minus size={14} /> </button>
                  <span>{item.quantity.toLocaleString('fa-IR')}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="زیاد کردن"><Plus size={14} /></button>
                </div>
              </div>
              <button className="remove-button" onClick={() => removeFromCart(item.id)} aria-label="حذف محصول"><Trash2 size={18} /></button>
            </article>
          ))}
        </section>
        <aside className="summary-card">
          <h2>خلاصه سفارش</h2>
          <div className="summary-line"><span>تعداد کالا</span><strong>{cartItems.reduce((sum, item) => sum + item.quantity, 0).toLocaleString('fa-IR')}</strong></div>
          <div className="summary-line"><span>جمع جزء</span><strong>{formatPrice(subtotal)}</strong></div>
          <div className="summary-line"><span>هزینه ارسال</span><strong>رایگان</strong></div>
          <div className="summary-total"><span>مبلغ نهایی</span><strong>{formatPrice(subtotal)}</strong></div>
          <button className="primary-button full-button" onClick={() => navigate('/checkout')}>ادامه و ثبت سفارش <ArrowLeft size={17} /></button>
          <Link to="/products" className="continue-link">ادامه خرید</Link>
        </aside>
      </div>
    </main>
  )
}

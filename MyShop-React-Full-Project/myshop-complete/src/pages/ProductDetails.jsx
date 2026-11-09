import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowRight, ShoppingBag, Star } from 'lucide-react'
import { products, formatPrice } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

export default function ProductDetails() {
  const { id } = useParams()
  const product = products.find((item) => item.id === Number(id))
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const navigate = useNavigate()

  if (!product) return <main className="container page-main"><h1>محصول پیدا نشد</h1><Link className="primary-button" to="/products">بازگشت به محصولات</Link></main>

  function handleAdd() {
    addToCart(product, quantity)
    navigate('/cart')
  }

  return (
    <main className="container page-main">
      <Link to="/products" className="back-link"><ArrowRight size={16} /> بازگشت به محصولات</Link>
      <section className="detail-layout">
        <div className="detail-image"><img src={product.image} alt={product.name} /></div>
        <div className="detail-copy">
          <span className="product-category">{product.category}</span>
          <h1>{product.name}</h1>
          <div className="rating"><Star size={15} fill="currentColor" /> {product.rating} از ۵</div>
          <p>{product.description}</p>
          <div className="detail-price">{formatPrice(product.price)} {product.oldPrice && <del>{formatPrice(product.oldPrice)}</del>}</div>
          <div className="detail-actions">
            <div className="quantity-control">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
              <span>{quantity.toLocaleString('fa-IR')}</span>
              <button onClick={() => setQuantity((q) => q + 1)}>+</button>
            </div>
            <button className="primary-button" onClick={handleAdd}><ShoppingBag size={17} /> افزودن به سبد خرید</button>
          </div>
          <div className="detail-hint">قیمت‌ها نمونه و صرفاً برای تمرین پروژه هستند.</div>
        </div>
      </section>
    </main>
  )
}

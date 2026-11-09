import { Heart, Plus, Star } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

export default function ProductCard({ product }) {
  const [favorite, setFavorite] = useState(false)
  const { addToCart } = useCart()

  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-image-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.tag && <span className="product-tag">{product.tag}</span>}
      </Link>
      <button
        className={`favorite-button ${favorite ? 'is-favorite' : ''}`}
        onClick={() => setFavorite((value) => !value)}
        aria-label={favorite ? 'حذف از علاقه‌مندی‌ها' : 'افزودن به علاقه‌مندی‌ها'}
      >
        <Heart size={18} fill={favorite ? 'currentColor' : 'none'} />
      </button>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <Link to={`/products/${product.id}`}><h3>{product.name}</h3></Link>
        <div className="rating"><Star size={13} fill="currentColor" /> {product.rating}</div>
        <div className="product-bottom">
          <div className="price-wrap">
            <strong>{formatPrice(product.price)}</strong>
            {product.oldPrice && <del>{formatPrice(product.oldPrice)}</del>}
          </div>
          <button className="add-button" onClick={() => addToCart(product)} aria-label={`افزودن ${product.name} به سبد خرید`}>
            <Plus size={19} />
          </button>
        </div>
      </div>
    </article>
  )
}

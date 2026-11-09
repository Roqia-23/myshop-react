import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import ProductList from '../components/ProductList.jsx'
import { products } from '../data/products.js'

export default function Home() {
  return (
    <>
      <Hero />
      <main className="container section-space">
        <div className="section-heading">
          <div><span className="eyebrow">منتخب فروشگاه</span><h2>محصولات محبوب</h2><p>چیزهایی که برای زندگی روزمره انتخاب کرده‌ایم.</p></div>
          <Link className="text-link" to="/products">مشاهده همه محصولات ←</Link>
        </div>
        <ProductList products={products.slice(0, 6)} />
      </main>
    </>
  )
}

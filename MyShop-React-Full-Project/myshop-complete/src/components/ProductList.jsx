import ProductCard from './ProductCard.jsx'

export default function ProductList({ products }) {
  if (!products.length) return <p className="empty-state">محصولی با این مشخصات پیدا نشد.</p>
  return (
    <section className="product-grid" aria-label="فهرست محصولات">
      {products.map((product) => <ProductCard key={product.id} product={product} />)}
    </section>
  )
}

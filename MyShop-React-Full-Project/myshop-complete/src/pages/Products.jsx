import { useMemo, useState } from 'react'
import ProductList from '../components/ProductList.jsx'
import SearchAndFilter from '../components/SearchAndFilter.jsx'
import { products } from '../data/products.js'

export default function Products() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('همه')

  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase()
    return products.filter((product) => {
      const matchesSearch = `${product.name} ${product.category}`.toLowerCase().includes(term)
      const matchesCategory = category === 'همه' || product.category === category
      return matchesSearch && matchesCategory
    })
  }, [search, category])

  return (
    <main className="container page-main">
      <div className="page-title"><span className="eyebrow">ویترین فروشگاه</span><h1>همه محصولات</h1><p>محصول موردنظرت را جست‌وجو یا دسته‌بندی کن.</p></div>
      <SearchAndFilter search={search} onSearchChange={setSearch} category={category} onCategoryChange={setCategory} />
      <p className="result-count">{filteredProducts.length.toLocaleString('fa-IR')} محصول پیدا شد</p>
      <ProductList products={filteredProducts} />
    </main>
  )
}

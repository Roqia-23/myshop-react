import { Search } from 'lucide-react'
import { categories } from '../data/products.js'

export default function SearchAndFilter({ search, onSearchChange, category, onCategoryChange }) {
  return (
    <div className="filters" id="categories">
      <label className="search-box">
        <Search size={18} />
        <input value={search} onChange={(event) => onSearchChange(event.target.value)} placeholder="جست‌وجوی محصول..." />
      </label>
      <div className="category-pills">
        {categories.map((item) => (
          <button key={item} className={category === item ? 'active' : ''} onClick={() => onCategoryChange(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="container page-main empty-cart">
      <span className="eyebrow">خطای ۴۰۴</span>
      <h1>این صفحه پیدا نشد</h1>
      <p>آدرسی که وارد کرده‌ای وجود ندارد.</p>
      <Link to="/" className="primary-button">بازگشت به صفحه اصلی</Link>
    </main>
  )
}

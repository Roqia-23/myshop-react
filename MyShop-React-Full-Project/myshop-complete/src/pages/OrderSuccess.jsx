import { CheckCircle2 } from 'lucide-react'
import { Link, Navigate } from 'react-router-dom'

export default function OrderSuccess() {
  let order = null
  try { order = JSON.parse(localStorage.getItem('myshop-last-order') || 'null') } catch { order = null }
  if (!order) return <Navigate to="/" replace />

  return (
    <main className="container page-main success-page">
      <div className="success-icon"><CheckCircle2 size={48} /></div>
      <span className="eyebrow">ثبت شد</span>
      <h1>سفارش شما ثبت شد!</h1>
      <p>ممنون از خریدت، {order.fullName}. این یک سفارش آزمایشی در نسخه آموزشی فروشگاه است.</p>
      <div className="order-number">شماره سفارش: <strong>{order.orderNumber}</strong></div>
      <Link className="primary-button" to="/products">بازگشت به فروشگاه</Link>
    </main>
  )
}

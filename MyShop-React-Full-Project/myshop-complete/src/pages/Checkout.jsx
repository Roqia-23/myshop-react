import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../data/products.js'

export default function Checkout() {
  const { cartItems, subtotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [form, setForm] = useState({ fullName: '', phone: '', address: '', note: '' })
  const [error, setError] = useState('')

  if (!cartItems.length) return <Navigate to="/cart" replace />

  function handleChange(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!form.fullName.trim() || !form.phone.trim() || !form.address.trim()) {
      setError('لطفاً نام، شماره تماس و نشانی را تکمیل کن.')
      return
    }
    const order = {
      ...form,
      items: cartItems,
      total: subtotal,
      orderNumber: `MS-${Date.now().toString().slice(-7)}`,
      createdAt: new Date().toISOString(),
    }
    localStorage.setItem('myshop-last-order', JSON.stringify(order))
    clearCart()
    navigate('/order-success')
  }

  return (
    <main className="container page-main">
      <div className="page-title"><span className="eyebrow">مرحله آخر</span><h1>ثبت سفارش</h1><p>اطلاعات تحویل سفارش را وارد کن.</p></div>
      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <label>نام و نام خانوادگی<input name="fullName" value={form.fullName} onChange={handleChange} placeholder="نام کامل" /></label>
          <label>شماره تماس<input name="phone" value={form.phone} onChange={handleChange} placeholder="مثلاً 07xxxxxxxx" inputMode="tel" /></label>
          <label>نشانی کامل<textarea name="address" value={form.address} onChange={handleChange} rows="4" placeholder="شهر، منطقه، خیابان و نشانی دقیق" /></label>
          <label>توضیحات (اختیاری)<textarea name="note" value={form.note} onChange={handleChange} rows="2" placeholder="توضیحات تکمیلی برای سفارش" /></label>
          {error && <p className="form-error">{error}</p>}
          <button className="primary-button full-button" type="submit">تأیید و ثبت سفارش</button>
          <p className="demo-note">این پروژه آموزشی است؛ پرداخت آنلاین واقعی و ارسال سفارش به سرور پیاده‌سازی نشده است.</p>
        </form>
        <aside className="summary-card">
          <h2>خلاصه پرداخت</h2>
          {cartItems.map((item) => <div className="summary-line" key={item.id}><span>{item.name} × {item.quantity.toLocaleString('fa-IR')}</span><strong>{formatPrice(item.price * item.quantity)}</strong></div>)}
          <div className="summary-total"><span>مبلغ نهایی</span><strong>{formatPrice(subtotal)}</strong></div>
        </aside>
      </div>
    </main>
  )
}

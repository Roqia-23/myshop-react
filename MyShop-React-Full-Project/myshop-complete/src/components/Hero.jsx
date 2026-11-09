import { ArrowLeft, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-copy">
        <span className="hero-kicker"><Sparkles size={15} /> انتخاب‌های تازه، حال خوب تازه</span>
        <h1>خرید هوشمندانه،<br /><em>زندگی زیباتر.</em></h1>
        <p>مجموعه‌ای از محصولات کاربردی و دوست‌داشتنی؛ با طراحی ساده، کیفیت خوب و تجربه خرید آسان.</p>
        <Link className="primary-button" to="/products">دیدن محصولات <ArrowLeft size={17} /></Link>
        <div className="hero-note"><span className="note-dot" /> انتخاب‌های محبوب این هفته</div>
      </div>
      <div className="hero-visual">
        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=90" alt="فضای یک فروشگاه مدرن" />
        <div className="floating-card"><span>کالکشن جدید</span><strong>برای هر روز تو</strong><small>سادگی، کیفیت، سبک</small></div>
        <div className="hero-stamp">MY<br />SHOP</div>
      </div>
    </section>
  )
}

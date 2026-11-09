import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'myshop-cart-v1'

function readCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(readCart)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  function addToCart(product, quantity = 1) {
    setCartItems((items) => {
      const existing = items.find((item) => item.id === product.id)
      if (existing) {
        return items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }
      return [...items, { ...product, quantity }]
    })
  }

  function removeFromCart(productId) {
    setCartItems((items) => items.filter((item) => item.id !== productId))
  }

  function updateQuantity(productId, quantity) {
    if (quantity < 1) return
    setCartItems((items) =>
      items.map((item) => item.id === productId ? { ...item, quantity } : item),
    )
  }

  function clearCart() {
    setCartItems([])
  }

  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )
  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  )

  const value = {
    cartItems, totalItems, subtotal, addToCart, removeFromCart, updateQuantity, clearCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart باید داخل CartProvider استفاده شود.')
  return context
}

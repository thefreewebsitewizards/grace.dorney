import React, { useState, useMemo } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { products } from '../data/mockData'
import { Link } from 'react-router-dom'

const CartDrawer = ({ open, onClose }) => {
  const [items, setItems] = useState(products.slice(0, 2))
  const total = useMemo(() => items.reduce((sum, p) => sum + p.price, 0), [items])
  const clearCart = () => setItems([])

  return (
    <div className={`fixed inset-0 z-[60] pointer-events-none ${open ? '' : 'hidden'}`}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 pointer-events-auto modal-overlay"
        onClick={onClose}
      />

      {/* Panel */}
      <div className={`absolute right-0 top-0 h-full w-80 bg-[#44443E] border-l border-gray-800 shadow-2xl pointer-events-auto transform ${open ? 'animate-slide-in-right' : ''}`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h3 className="text-white font-semibold">Your Cart</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white p-1" aria-label="Close cart">
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-4 custom-scrollbar overflow-y-auto h-[calc(100%-9rem)]">
          {items.map(item => (
            <div key={item.id} className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-[#44443E] rounded overflow-hidden">
                {item.images?.[0] ? (
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                ) : null}
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-400">{item.category}</p>
              </div>
              <div className="text-white text-sm">₱{item.price}</div>
            </div>
          ))}
          {items.length === 0 && (
            <p className="text-gray-400 text-sm">Your cart is empty.</p>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800 bg-[#44443E]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-400 text-sm">Subtotal</span>
            <span className="text-white font-semibold">₱{total}</span>
          </div>
          <div className="space-y-2">
            <button onClick={clearCart} className="w-full px-3 py-2 rounded-md bg-black text-white hover:bg-black text-sm">Clear Cart</button>
            <Link to="/shipping" onClick={onClose} className="w-full inline-flex justify-center items-center px-3 py-2 rounded-md bg-soft-pink text-black font-semibold hover:opacity-90 text-sm">Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartDrawer
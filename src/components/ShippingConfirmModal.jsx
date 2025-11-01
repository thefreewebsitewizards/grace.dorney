import React from 'react'

const ShippingConfirmModal = ({ open, onClose, option, address, city, zip, price, onPlaceOrder }) => {
  if (!open) return null

  const prettyOption = (option || '').toUpperCase()
  const fullAddress = [address, city, zip].filter(Boolean).join(', ')

  return (
    <div className="fixed inset-0 z-[65]">
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />
      <div className="absolute left-1/2 top-24 -translate-x-1/2 w-[92%] max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-xl">
        <div className="p-5 space-y-4">
          <h3 className="text-white font-semibold">Shipping Selected</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Method</span>
              <span className="text-white font-medium">{prettyOption}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Price</span>
              <span className="text-butter font-semibold">₱{price ?? 0}</span>
            </div>
            <div>
              <span className="text-gray-400 block mb-1">Ship to</span>
              <p className="text-white text-sm break-words">{fullAddress || '—'}</p>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button onClick={onClose} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-lg transition-colors">Close</button>
            <button onClick={onPlaceOrder} className="px-4 py-2 btn-primary text-sm">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShippingConfirmModal
import React from 'react'

const OrderSuccessModal = ({ open, onClose }) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[66]">
      <div className="absolute inset-0 bg-black/80 modal-overlay" onClick={onClose} />
      <div className="absolute left-1/2 top-24 -translate-x-1/2 w-[92%] max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-xl modal-panel">
        <div className="p-5 space-y-4">
          <h3 className="text-white font-semibold">Order Placed</h3>
          <p className="text-gray-300 text-sm">Successfully placed your order. Salamat!</p>

          <div className="flex justify-end gap-2 pt-2">
            <button onClick={onClose} className="px-4 py-2 btn-primary text-sm">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSuccessModal
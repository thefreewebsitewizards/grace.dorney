import React from 'react'

const FooterInfoModal = ({ open, onClose, title, children }) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[64]">
      <div className="absolute inset-0 bg-black/80 modal-overlay" onClick={onClose} />
      <div className="absolute left-1/2 top-24 -translate-x-1/2 w-[92%] max-w-2xl bg-gray-900 border border-gray-800 rounded-2xl shadow-xl modal-panel">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">{title}</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-white">✕</button>
          </div>
          <div className="prose prose-invert max-w-none text-gray-300">
            {children}
          </div>
          <div className="flex justify-end pt-4">
            <button onClick={onClose} className="px-4 py-2 btn-primary text-sm">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterInfoModal
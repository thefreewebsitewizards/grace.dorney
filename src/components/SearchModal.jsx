import React, { useEffect, useMemo, useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { products } from '../data/mockData'

const SearchModal = ({ open, onClose }) => {
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (open) {
      // Focus the input shortly after open
      const t = setTimeout(() => {
        const el = document.getElementById('global-search-input')
        el && el.focus()
      }, 100)
      return () => clearTimeout(t)
    } else {
      setQuery('')
    }
  }, [open])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return products
      .filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
      .slice(0, 6)
  }, [query])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />

      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[92%] max-w-2xl bg-[#44443E] border border-gray-800 rounded-xl shadow-xl">
        <div className="flex items-center p-3 border-b border-gray-800">
          <input
            id="global-search-input"
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search products, categories…"
            className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none px-3 py-2"
          />
          <button onClick={onClose} className="text-gray-400 hover:text-white p-2" aria-label="Close search">
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="p-3">
          {results.length > 0 ? (
            <ul className="divide-y divide-gray-800">
              {results.map(r => (
                <li key={r.id} className="py-3 flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">{r.name}</p>
                    <p className="text-xs text-gray-400">{r.category} · ₱{r.price}</p>
                  </div>
                  <a href={`/product/${r.id}`} className="text-soft-pink hover:text-white text-sm">
                    View
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-8 text-gray-400 text-sm">
              {query ? 'No matches found' : 'Type to search the catalog'}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchModal
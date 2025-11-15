import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import ShippingConfirmModal from '../components/ShippingConfirmModal'
import OrderSuccessModal from '../components/OrderSuccessModal'

const Shipping = () => {
  const navigate = useNavigate()
  const [option, setOption] = useState('standard')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [successOpen, setSuccessOpen] = useState(false)

  const priceMap = { standard: 0, express: 199, overnight: 399 }
  const shippingPrice = priceMap[option]

  const handleContinue = (e) => {
    e.preventDefault()
    setConfirmOpen(true)
  }

  return (
    <div className="min-h-screen pt-20 bg-black">
      <Helmet>
        <title>Shipping | dusk till dorn</title>
      </Helmet>
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-6">Shipping Options</h1>
        <form onSubmit={handleContinue} className="bg-[#44443E] rounded-2xl p-6 md:p-8 border border-gray-800 shadow-lg space-y-6">
          <div>
            <h2 className="text-white font-semibold mb-3">Delivery method</h2>
            <div className="space-y-2 text-sm">
              <label className={`flex items-center justify-between p-3 rounded-lg border ${option==='standard'?'border-soft-pink bg-black':'border-gray-800 bg-black'}`}>
                <div className="flex items-center space-x-3">
                  <input type="radio" name="ship" checked={option==='standard'} onChange={()=>setOption('standard')} />
                  <span className="text-gray-300">Standard (3–5 days)</span>
                </div>
                <span className="text-gray-300">Free</span>
              </label>
              <label className={`flex items-center justify-between p-3 rounded-lg border ${option==='express'?'border-soft-pink bg-black':'border-gray-800 bg-black'}`}>
                <div className="flex items-center space-x-3">
                  <input type="radio" name="ship" checked={option==='express'} onChange={()=>setOption('express')} />
                  <span className="text-gray-300">Express (1–2 days)</span>
                </div>
                <span className="text-gray-300">₱199</span>
              </label>
              <label className={`flex items-center justify-between p-3 rounded-lg border ${option==='overnight'?'border-soft-pink bg-black':'border-gray-800 bg-black'}`}>
                <div className="flex items-center space-x-3">
                  <input type="radio" name="ship" checked={option==='overnight'} onChange={()=>setOption('overnight')} />
                  <span className="text-gray-300">Overnight</span>
                </div>
                <span className="text-gray-300">₱399</span>
              </label>
            </div>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-3">Shipping address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input value={address} onChange={e=>setAddress(e.target.value)} placeholder="Street Address"
                className="bg-black border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-soft-pink md:col-span-2" />
              <input value={city} onChange={e=>setCity(e.target.value)} placeholder="City"
                className="bg-black border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-soft-pink" />
              <input value={zip} onChange={e=>setZip(e.target.value)} placeholder="ZIP"
                className="bg-black border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-soft-pink" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Shipping</span>
            <span className="text-white font-semibold">₱{shippingPrice}</span>
          </div>

          <button type="submit" className="w-full btn-primary">Continue</button>
        </form>
        <ShippingConfirmModal
          open={confirmOpen}
          onClose={() => setConfirmOpen(false)}
          option={option}
          address={address}
          city={city}
          zip={zip}
          price={shippingPrice}
          onPlaceOrder={() => {
            setConfirmOpen(false)
            setSuccessOpen(true)
          }}
        />
        <OrderSuccessModal
          open={successOpen}
          onClose={() => { setSuccessOpen(false); navigate('/') }}
        />
      </div>
    </div>
  )
}

export default Shipping
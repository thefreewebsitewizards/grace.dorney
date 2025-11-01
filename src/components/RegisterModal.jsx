import React, { useState, useEffect } from 'react'
import { registerWithEmail, isFirebaseConfigured } from '../services/firebase'

const RegisterModal = ({ open, onClose, prefillEmail = '' }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    if (open) {
      setName('')
      setEmail(prefillEmail || '')
      setPassword('')
      setConfirm('')
      setError('')
      setSuccess('')
    }
  }, [open, prefillEmail])

  const validate = () => {
    const emailOk = /.+@.+\..+/.test(email)
    if (!name.trim()) return 'Please enter your name.'
    if (!emailOk) return 'Please enter a valid email address.'
    if (password.length < 6) return 'Password must be at least 6 characters.'
    if (password !== confirm) return 'Passwords do not match.'
    return ''
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    const v = validate()
    if (v) { setError(v); return }
    setLoading(true)
    try {
      if (isFirebaseConfigured()) {
        const { user, error } = await registerWithEmail({ email, password, displayName: name })
        if (error) { setError(error); setLoading(false); return }
        setSuccess('Account created successfully.')
        setLoading(false)
        setTimeout(() => { onClose?.() }, 1000)
      } else {
        // Frontend-only simulation: store minimal user info locally
        await new Promise(r => setTimeout(r, 600))
        try {
          const localUser = { displayName: name, email }
          window.localStorage.setItem('dusk_user', JSON.stringify(localUser))
        } catch {}
        setSuccess('Account created successfully.')
        setLoading(false)
        setTimeout(() => { onClose?.() }, 800)
      }
    } catch (err) {
      setLoading(false)
      setError(err?.message || 'Registration failed')
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black bg-opacity-60" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Create account</h2>
            <button className="text-gray-400 hover:text-white" onClick={onClose}>✕</button>
          </div>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Name</label>
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)}
                className="w-full bg-black border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-burgundy" placeholder="Juan Dela Cruz" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Email</label>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                className="w-full bg-black border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-burgundy" placeholder="you@gmail.com" autoComplete="email" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Password</label>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
                className="w-full bg-black border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-burgundy" placeholder="••••••••" autoComplete="new-password" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Confirm password</label>
              <input type="password" value={confirm} onChange={(e)=>setConfirm(e.target.value)}
                className="w-full bg-black border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-burgundy" placeholder="••••••••" autoComplete="new-password" />
            </div>

            {error && <div className="text-soft-pink text-sm">{error}</div>}
            {success && <div className="text-butter text-sm">{success}</div>}

            <button type="submit" disabled={loading} className={`w-full btn-primary ${loading ? 'opacity-80 cursor-not-allowed' : ''}`}>
              {loading ? 'Creating…' : 'Create account'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterModal
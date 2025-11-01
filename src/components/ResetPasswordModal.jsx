import React, { useState } from 'react'
import { XMarkIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

const ResetPasswordModal = ({ open, onClose }) => {
  const [step, setStep] = useState('email') // 'email' | 'otp' | 'new'
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  if (!open) return null

  const back = () => {
    setError('')
    setSuccess('')
    if (step === 'otp') setStep('email')
    if (step === 'new') setStep('otp')
  }

  const submitEmail = () => {
    setError('')
    setSuccess('')
    const emailOk = /.+@.+\..+/.test(email)
    if (!emailOk) {
      setError('Enter a valid email')
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess('OTP sent to email (demo).')
      setStep('otp')
    }, 700)
  }

  const submitOtp = () => {
    setError('')
    setSuccess('')
    if (otp.trim().length !== 6) {
      setError('Enter the 6-digit OTP code')
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess('OTP verified (demo).')
      setStep('new')
    }, 600)
  }

  const submitNew = () => {
    setError('')
    setSuccess('')
    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess('Password reset successful (demo).')
      setTimeout(() => onClose(), 800)
    }, 700)
  }

  return (
    <div className="fixed inset-0 z-[70]">
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />
      <div className="absolute left-1/2 top-24 -translate-x-1/2 w-[92%] max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center space-x-2">
            {step !== 'email' && (
              <button onClick={back} className="text-gray-400 hover:text-white" aria-label="Back">
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
            )}
            <h3 className="text-white font-semibold">Reset Password</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white" aria-label="Close reset">
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          {step === 'email' && (
            <div className="space-y-4">
              <p className="text-sm text-gray-400">Enter your email to receive an OTP.</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-burgundy"
                placeholder="you@gmail.com"
                autoComplete="email"
              />
              {error && <div className="text-soft-pink text-sm">{error}</div>}
              {success && <div className="text-butter text-sm">{success}</div>}
              <button onClick={submitEmail} className={`w-full btn-primary ${loading ? 'opacity-80 cursor-not-allowed' : ''}`} disabled={loading}>
                {loading ? 'Sending…' : 'Send OTP'}
              </button>
            </div>
          )}

          {step === 'otp' && (
            <div className="space-y-4">
              <p className="text-sm text-gray-400">Enter the 6-digit OTP sent to your email.</p>
              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                className="w-full tracking-widest text-center bg-black border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-burgundy"
                placeholder="••••••"
              />
              {error && <div className="text-soft-pink text-sm">{error}</div>}
              {success && <div className="text-butter text-sm">{success}</div>}
              <button onClick={submitOtp} className={`w-full btn-primary ${loading ? 'opacity-80 cursor-not-allowed' : ''}`} disabled={loading}>
                {loading ? 'Verifying…' : 'Verify OTP'}
              </button>
            </div>
          )}

          {step === 'new' && (
            <div className="space-y-4">
              <p className="text-sm text-gray-400">Set your new password.</p>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full bg-black border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-burgundy"
                placeholder="New password"
              />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-black border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-burgundy"
                placeholder="Confirm password"
              />
              {error && <div className="text-soft-pink text-sm">{error}</div>}
              {success && <div className="text-butter text-sm">{success}</div>}
              <button onClick={submitNew} className={`w-full btn-primary ${loading ? 'opacity-80 cursor-not-allowed' : ''}`} disabled={loading}>
                {loading ? 'Saving…' : 'Reset Password'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ResetPasswordModal
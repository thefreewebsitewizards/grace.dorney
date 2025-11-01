import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import ResetPasswordModal from '../components/ResetPasswordModal'
import RegisterModal from '../components/RegisterModal'
import { signInWithGoogle } from '../services/firebase'

const Account = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [resetOpen, setResetOpen] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)
  const [googleUser, setGoogleUser] = useState(null)

  const validate = () => {
    setError('')
    setSuccess('')
    const emailOk = /.+@.+\..+/.test(email)
    if (!emailOk) return 'Please enter a valid email address.'
    if (password.length < 6) return 'Password must be at least 6 characters.'
    return ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const v = validate()
    if (v) {
      setError(v)
      return
    }
    setLoading(true)
    // Simulate sign-in
    setTimeout(() => {
      setLoading(false)
      setSuccess('Signed in successfully.')
    }, 800)
  }

  const handleGoogle = async () => {
    setError('')
    setSuccess('')
    const { user, error } = await signInWithGoogle()
    if (error) {
      setError(error)
      return
    }
    setGoogleUser(user)
    setSuccess(`Signed in as ${user.displayName || user.email}`)
  }

  return (
    <div className="min-h-screen pt-20 bg-black">
      <Helmet>
        <title>Account | dusk till dorn</title>
        <meta name="description" content="Manage your account, sign in, and view orders." />
      </Helmet>
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-6">Account</h1>
        <div className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-burgundy"
                placeholder="you@gmail.com"
                autoComplete="email"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black border border-gray-800 rounded-lg px-3 py-2 pr-10 text-white focus:outline-none focus:border-burgundy"
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 text-gray-400">
                <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="rounded bg-black border-gray-700" />
                <span>Remember me</span>
              </label>
              <button type="button" onClick={() => setResetOpen(true)} className="text-gray-400 hover:text-soft-pink">Forgot password?</button>
            </div>

            {error && <div className="text-soft-pink text-sm">{error}</div>}
            {success && <div className="text-butter text-sm">{success}</div>}

            <button type="submit" className={`w-full btn-primary ${loading ? 'opacity-80 cursor-not-allowed' : ''}`} disabled={loading}>
              {loading ? 'Signing In…' : 'Sign In'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-800" />
            <span className="px-3 text-xs text-gray-500">or continue with</span>
            <div className="flex-1 h-px bg-gray-800" />
          </div>

          {/* Social buttons with icons */}
          <div className="grid grid-cols-2 gap-3">
            <button onClick={handleGoogle} className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 text-sm flex items-center justify-center space-x-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true"><path fill="#EA4335" d="M12 10.2v3.6h5.1c-.2 1.1-1.2 3.2-5.1 3.2-3.1 0-5.7-2.6-5.7-5.8S8.9 5.4 12 5.4c1.8 0 3 .8 3.7 1.6l2.6-2.5C17.1 3 14.8 2 12 2 6.9 2 2.7 5.8 2.7 12s4.2 10 9.3 10c5.4 0 9-3.8 9-9.1 0-.6-.1-1.1-.2-1.6H12z"/><path fill="#34A853" d="M12 22c2.7 0 5-1 6.6-2.7l-3.1-2.5c-.9.6-2 .9-3.5.9-2.7 0-5-1.8-5.8-4.2H3.9v2.6C5.5 19.7 8.5 22 12 22z"/><path fill="#4A90E2" d="M6.2 13.5c-.2-.6-.4-1.2-.4-1.9s.1-1.3.4-1.9V7.1H3.9C3.3 8.4 3 9.7 3 11s.3 2.6.9 3.9l2.3-1.4z"/><path fill="#FBBC05" d="M12 5.4c1.5 0 2.6.5 3.4 1.2l2.6-2.5C16.9 2.8 14.7 2 12 2 8.5 2 5.5 4.3 3.9 7.1l2.3 1.6C6.9 7.2 9.3 5.4 12 5.4z"/></svg>
              <span>Google</span>
            </button>
            <button className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 text-sm flex items-center justify-center space-x-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true"><path fill="#1877F2" d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495V14.708H9.691v-3.62h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.766v2.316h3.588l-.467 3.62h-3.121V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"/></svg>
              <span>Facebook</span>
            </button>
          </div>

          {googleUser && (
            <div className="mt-6 p-3 bg-gray-800 rounded-lg text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden">
                  {googleUser.photoURL ? (
                    <img src={googleUser.photoURL} alt="avatar" className="w-full h-full object-cover" />
                  ) : null}
                </div>
                <div>
                  <div className="text-white font-medium">{googleUser.displayName || 'Google User'}</div>
                  <div className="text-xs text-gray-400">{googleUser.email}</div>
                </div>
              </div>
            </div>
          )}

          <p className="text-xs text-gray-500 mt-6 text-center"><button type="button" onClick={() => setRegisterOpen(true)} className="hover:text-soft-pink">Register</button></p>
        
        {/* Reset Password Modal */}
        <ResetPasswordModal open={resetOpen} onClose={() => setResetOpen(false)} />
        {/* Register Modal */}
        <RegisterModal open={registerOpen} onClose={() => setRegisterOpen(false)} prefillEmail={email} />
        </div>
      </div>
    </div>
  )
}

export default Account
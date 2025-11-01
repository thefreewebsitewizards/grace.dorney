import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

let app
let auth
let provider

export const isFirebaseConfigured = () => {
  return !!(config.apiKey && config.authDomain && config.projectId && config.appId)
}

const ensureInit = () => {
  if (!isFirebaseConfigured()) return false
  if (!app) {
    app = initializeApp(config)
    auth = getAuth(app)
    provider = new GoogleAuthProvider()
  }
  return true
}

export const signInWithGoogle = async () => {
  try {
    if (!ensureInit()) {
      return { user: null, error: 'Firebase is not configured' }
    }
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    return { user: { displayName: user.displayName, email: user.email, photoURL: user.photoURL }, error: null }
  } catch (e) {
    return { user: null, error: e?.message || 'Google sign-in failed' }
  }
}

export const signOutGoogle = async () => {
  if (auth) await signOut(auth)
}

export const registerWithEmail = async ({ email, password, displayName }) => {
  try {
    if (!ensureInit()) return { user: null, error: 'Firebase is not configured' }
    const res = await createUserWithEmailAndPassword(auth, email, password)
    if (displayName) {
      try { await updateProfile(res.user, { displayName }) } catch {}
    }
    const u = res.user
    return { user: { displayName: u.displayName, email: u.email, photoURL: u.photoURL }, error: null }
  } catch (e) {
    return { user: null, error: e?.message || 'Registration failed' }
  }
}
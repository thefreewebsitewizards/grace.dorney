import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductPage from './pages/ProductPage'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import './App.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import SearchModal from './components/SearchModal'
import CartDrawer from './components/CartDrawer'
import Account from './pages/Account'
import Shipping from './pages/Shipping'

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <HelmetProvider>
      <Router>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>dusk till dorn - Confident. Edgy. Streetwear with an attitude.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />

        {/* SEO */}
        <meta name="description" content="dusk till dorn - Modern streetwear brand with confident, edgy designs. Shop our latest collection of tops, bottoms, and accessories." />
        <meta name="keywords" content="streetwear, fashion, clothing, dusk till dorn, edgy, confident, modern" />
        {/* Open Graph */}
        <meta property="og:title" content="dusk till dorn - Streetwear Brand" />
        <meta property="og:description" content="Confident. Edgy. Streetwear with an attitude." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="App min-h-screen bg-black text-white">
        {/* Navigation Bar - Sticky at top */}
        <Navbar
          onSearchClick={() => setIsSearchOpen(true)}
          onCartClick={() => setIsCartOpen(true)}
          onAccountClick={undefined}
        />
        
        {/* Main Content Area */}
        <main className="min-h-screen">
          <Routes>
            {/* Homepage Route */}
            <Route path="/" element={<Home />} />
            
            {/* Shop Routes */}
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:category" element={<Shop />} />
            <Route path="/product/:id" element={<ProductPage />} />
            
            {/* About Page */}
            <Route path="/about" element={<About />} />
            
            {/* Contact Page */}
            <Route path="/contact" element={<Contact />} />

            {/* Account Page */}
            <Route path="/account" element={<Account />} />
            {/* Shipping Page */}
            <Route path="/shipping" element={<Shipping />} />
            
            {/* 404 Fallback - Redirect to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Search Modal */}
        <SearchModal open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

        {/* Cart Drawer */}
        <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
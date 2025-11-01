import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MagnifyingGlassIcon, UserIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

const Navbar = ({ onSearchClick, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const navLinks = [
    { name: 'New', path: '/#new' },
    { name: 'Shop', path: '/shop' },
    { name: 'Info', path: '/about' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-16">
          
          {/* Logo + Text Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/src/assets/logo.JPG"
              alt="dusk till dorn logo"
              className="h-10 w-auto"
            />
            <div className="text-sm tracking-widest uppercase text-gray-200">
              dusk till <span className="text-soft-pink">dorn</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = (() => {
                if (link.name === 'New') {
                  return location.pathname === '/' && location.hash === '#new'
                }
                if (link.name === 'Shop') {
                  return location.pathname === '/shop'
                }
                return location.pathname === link.path
              })()

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`uppercase tracking-widest text-xs transition-all duration-300 relative group ${
                    isActive ? 'text-butter' : 'text-gray-300 hover:text-butter'
                  }`}
                >
                  {link.name}
                  {/* Active indicator */}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-butter transform transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              )
            })}
            
            {/* Right-side actions: Search, Account, Cart */}
            <div className="flex items-center space-x-6 text-gray-300">
              <button onClick={onSearchClick} className="hover:text-butter transition-colors" aria-label="Search">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
              <Link to="/account" className="hover:text-butter transition-colors" aria-label="Account">
                <UserIcon className="w-5 h-5" />
              </Link>
              <button onClick={onCartClick} className="hover:text-butter transition-colors relative" aria-label="Cart">
                <ShoppingCartIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-butter transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 bg-black rounded-lg mt-2 px-4">
            {navLinks.map((link) => {
              const isActive = (() => {
                if (link.name === 'New') {
                  return location.pathname === '/' && location.hash === '#new'
                }
                if (link.name === 'Shop') {
                  return location.pathname === '/shop'
                }
                return location.pathname === link.path
              })()
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block uppercase tracking-widest text-sm transition-colors duration-300 ${
                    isActive ? 'text-butter' : 'text-gray-300 hover:text-butter'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
            
            {/* Mobile Cart */}
            <button onClick={onCartClick} className="flex items-center space-x-2 text-gray-300 hover:text-butter transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              <span>Cart (0)</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
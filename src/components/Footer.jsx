import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FooterInfoModal from './FooterInfoModal'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)
  const [sizeOpen, setSizeOpen] = useState(false)

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/dusk_till_dorn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.864 3.708 13.713 3.708 12.416s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.275c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.404c-.315 0-.595-.122-.807-.315-.21-.21-.315-.49-.315-.807s.105-.595.315-.807c.21-.21.49-.315.807-.315s.595.105.807.315c.21.21.315.49.315.807s-.105.595-.315.807c-.21.193-.49.315-.807.315z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/dusk_till_dorn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@dusk_till_dorn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    }
  ]

  return (
    <footer className="relative bg-[#31312d] mt-20">
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-soft-pink to-transparent opacity-70 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section (match topbar style with logo) */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/src/assets/logo.JPG"
                alt="dusk till dorn logo"
                className="h-8 w-auto"
              />
              <div className="text-sm tracking-widest uppercase text-gray-200">
                dusk till <span className="text-soft-pink">dorn</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Confident. Edgy. Streetwear with an attitude. 
              Discover our collection of thoughtfully designed pieces 
              for the modern urban lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-gray-400 hover:text-soft-pink transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Stay Connected</h3>
            
            {/* Social Links: Instagram only */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/dusk.till.dorn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-soft-pink transition-colors duration-300 hover:scale-110 transform"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">
                Subscribe for updates on new drops and exclusive content.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-black border border-soft-pink rounded-lg text-white text-sm focus:outline-none focus:border-soft-pink transition-colors duration-300"
                />
                <button className="px-4 py-2 bg-soft-pink hover:bg-opacity-80 text-white text-sm font-medium rounded-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#44443E] pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} dusk till dorn. All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-sm text-gray-400">
            <button type="button" onClick={()=>setPrivacyOpen(true)} className="hover:text-soft-pink transition-colors duration-300">
              Privacy Policy
            </button>
            <button type="button" onClick={()=>setTermsOpen(true)} className="hover:text-soft-pink transition-colors duration-300">
              Terms of Service
            </button>
            <button type="button" onClick={()=>setSizeOpen(true)} className="hover:text-soft-pink transition-colors duration-300">
              Size Guide
            </button>
          </div>

          {/* Modals */}
          <FooterInfoModal open={privacyOpen} onClose={()=>setPrivacyOpen(false)} title="Privacy Policy">
            <p>We respect your privacy. We only collect data needed to process orders, improve our service, and communicate updates. No selling of personal information.</p>
            <p>Cookies are used for analytics and cart functionality. You can opt out anytime. For requests, email <span className="text-soft-pink">privacy@dusktilldorn.com</span>.</p>
          </FooterInfoModal>

          <FooterInfoModal open={termsOpen} onClose={()=>setTermsOpen(false)} title="Terms of Service">
            <p>By using this site, you agree to our purchasing, returns, and acceptable use policies. Products are for personal use only unless otherwise stated.</p>
            <p>All content is copyright dusk till dorn. Misuse or unauthorized reselling may result in order cancellation.</p>
          </FooterInfoModal>

          <FooterInfoModal open={sizeOpen} onClose={()=>setSizeOpen(false)} title="Size Guide">
            <p>Fit is true to size unless noted. If you’re between sizes, we recommend sizing up for relaxed fit.</p>
            <ul>
              <li>XS: Chest 32–34" · Waist 26–28"</li>
              <li>S: Chest 35–37" · Waist 29–31"</li>
              <li>M: Chest 38–40" · Waist 32–34"</li>
              <li>L: Chest 41–43" · Waist 35–37"</li>
              <li>XL: Chest 44–46" · Waist 38–40"</li>
            </ul>
          </FooterInfoModal>
        </div>
      </div>
    </footer>
  )
}

export default Footer
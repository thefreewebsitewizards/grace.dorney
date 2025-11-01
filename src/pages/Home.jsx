import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { brandInfo, galleryImages, products } from '../data/mockData'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  // Simple countdown to mimic "launching" banner from reference
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const launchDate = React.useMemo(() => {
    // Target: 5 days from now for demo purposes
    const d = new Date()
    d.setDate(d.getDate() + 5)
    return d
  }, [])

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = launchDate.getTime() - now
      const days = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)))
      const hours = Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      const minutes = Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
      const seconds = Math.max(0, Math.floor((distance % (1000 * 60)) / 1000))
      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // Get featured products for homepage
  const featuredProducts = products.filter(product => product.featured).slice(0, 3)

  return (
    <div className="min-h-screen page-transition">
      
      {/* Hero Section - Split full-bleed photos with minimal overlay */}
      <section className="relative min-h-screen pt-16 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 h-[calc(100vh-4rem)]">
          {/* Left photo */}
          <div className="relative overflow-hidden">
            <img
              src={'/src/assets/1st.JPG'}
              alt={'hero-left'}
              className={`w-full h-full object-cover transform transition-transform duration-700 ${
                isVisible ? 'scale-100' : 'scale-105'
              }`}
            />
          </div>
          {/* Right photo */}
          <div className="relative overflow-hidden">
            <img
              src={'/src/assets/2nd.JPG'}
              alt={'hero-right'}
              className={`w-full h-full object-cover transform transition-transform duration-700 ${
                isVisible ? 'scale-100' : 'scale-105'
              }`}
            />
          </div>
        </div>

        {/* Minimal launch banner like reference */}
        <div id="new" className="absolute bottom-0 left-0 right-0 bg-white/70 backdrop-blur-sm animate-fade-in">
          <div className="max-w-6xl mx-auto px-4 py-6 text-black">
            <div className="text-center space-y-4">
              <p className="uppercase tracking-widest text-sm">NEW | ACCESSORIES COMING SOON</p>
              <div className="flex items-end justify-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-semibold">{String(timeLeft.days).padStart(2, '0')}</div>
                  <div className="text-xs uppercase tracking-widest text-gray-600">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-xs uppercase tracking-widest text-gray-600">Hrs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-xs uppercase tracking-widest text-gray-600">Mins</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-xs uppercase tracking-widest text-gray-600">Secs</div>
                </div>
              </div>
              <div>
                <Link to="/shop/accessories" className="btn-minimal">Browse Accessories</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Grid Section - Inspired by Mode Mischief */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The <span className="text-gradient">Uniform</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {brandInfo.description}
            </p>
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id}
                className={`relative overflow-hidden rounded-lg group cursor-pointer hover-lift ${
                  index % 3 === 0 ? 'row-span-2' : ''
                }`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Shop CTA */}
          <div className="text-center">
            <Link 
              to="/shop" 
              className="btn-secondary text-lg px-12 py-4 hover-lift"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Going <span className="text-burgundy">Viral</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From viral moments to signature pieces - these are our most coveted designs right now.
            </p>
          </div>

          {/* Featured Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link 
                key={product.id}
                to={`/product/${product.id}`}
                className="group"
              >
                <div className="card hover-lift">
                  
                  {/* Product Image */}
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Product badges */}
                    <div className="absolute top-4 left-4 space-y-2">
                      {product.tags.includes('new') && (
                        <span className="bg-butter text-black text-xs font-bold px-2 py-1 rounded">
                          NEW
                        </span>
                      )}
                      {product.tags.includes('sale') && (
                        <span className="bg-burgundy text-white text-xs font-bold px-2 py-1 rounded">
                          SALE
                        </span>
                      )}
                    </div>

                    {/* Quick shop overlay removed per request */}
                  </div>

                  {/* Product Info */}
                  <div className="space-y-2">
                    <h3 className="text-white font-semibold text-lg group-hover:text-butter transition-colors duration-300">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-butter font-bold text-xl">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through text-sm">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">
                      {product.colors.length} colors available
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Products */}
          <div className="text-center mt-12">
            <Link 
              to="/shop" 
              className="btn-primary text-lg px-12 py-4 hover-lift"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Teaser */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            From <span className="text-butter">Dusk</span> Till <span className="text-soft-pink">Dorn</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            {brandInfo.story}
          </p>

          <Link 
            to="/about" 
            className="btn-outline text-lg px-10 py-4 hover-lift"
          >
            Read Our Story
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
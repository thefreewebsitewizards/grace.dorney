import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products, categories } from '../data/mockData'

const Shop = () => {
  const { category } = useParams()
  const [selectedCategory, setSelectedCategory] = useState(category || 'all')
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [sortBy, setSortBy] = useState('featured')
  const [isLoading, setIsLoading] = useState(false)
  const isComingSoon = selectedCategory === 'bottoms' || selectedCategory === 'accessories'
  const comingCategoryLabel = selectedCategory === 'accessories' ? 'Accessories' : 'Bottoms'

  // Filter products based on selected category
  useEffect(() => {
    setIsLoading(true)
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      let filtered = products
      
      if (selectedCategory !== 'all') {
        filtered = products.filter(product => product.category === selectedCategory)
      }

      // If Bottoms or Accessories category is selected, show Coming Soon (no products)
      if (selectedCategory === 'bottoms' || selectedCategory === 'accessories') {
        filtered = []
      }

      // Restrict results to only items with IDs 1–3
      const allowedIds = [1, 2, 3]
      filtered = filtered.filter(p => allowedIds.includes(p.id))

      // Sort products
      switch (sortBy) {
        case 'price-low':
          filtered = [...filtered].sort((a, b) => a.price - b.price)
          break
        case 'price-high':
          filtered = [...filtered].sort((a, b) => b.price - a.price)
          break
        case 'name':
          filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name))
          break
        case 'featured':
        default:
          filtered = [...filtered].sort((a, b) => {
            if (a.featured && !b.featured) return -1
            if (!a.featured && b.featured) return 1
            return 0
          })
      }

      // Show only the top 3 products in the grid (except Coming Soon which is empty)
      setFilteredProducts(filtered.slice(0, 3))
      setIsLoading(false)
    }, 300)
  }, [selectedCategory, sortBy])

  // Update category when URL parameter changes
  useEffect(() => {
    setSelectedCategory(category || 'all')
  }, [category])

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId)
  }

  return (
    <div className="min-h-screen pt-20 bg-black page-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Shop <span className="text-gradient">Collection</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our carefully curated selection of streetwear essentials. 
            Each piece designed to elevate your everyday style.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-soft-pink text-white shadow-lg'
                    : 'bg-[#44443E] text-gray-300 hover:bg-[#44443E] hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort and Results Count */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">
              {isComingSoon ? 'Coming soon' : `${filteredProducts.length} products`}
            </span>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#44443E] text-white border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-soft-pink"
            >
              <option value="featured">Featured</option>
              <option value="name">Name A-Z</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          // Loading skeleton
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="card bg-[#44443E]">
                <div className="skeleton h-80 mb-4"></div>
                <div className="skeleton h-4 mb-2"></div>
                <div className="skeleton h-4 w-20"></div>
              </div>
            ))}
          </div>
        ) : isComingSoon ? (
          <div className="text-center py-20">
            <h3 className="text-3xl font-bold text-white mb-4">{comingCategoryLabel}: Coming Soon</h3>
            <p className="text-gray-400 mb-8">We’re preparing our {comingCategoryLabel.toLowerCase()} lineup. Check back soon.</p>
            <div className="flex justify-center gap-4">
              <button onClick={() => handleCategoryChange('tops')} className="btn-primary">Browse Tops</button>
              <button onClick={() => handleCategoryChange('all')} className="btn-secondary">View All</button>
            </div>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link 
                key={product.id}
                to={`/product/${product.id}`}
                className="group"
              >
                <div className="card hover-lift bg-[#44443E]">
                  
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
                        <span className="bg-soft-pink text-black text-xs font-bold px-2 py-1 rounded">
                          NEW
                        </span>
                      )}
                      {product.tags.includes('sale') && (
                        <span className="bg-soft-pink text-white text-xs font-bold px-2 py-1 rounded">
                          SALE
                        </span>
                      )}
                      {product.tags.includes('limited') && (
                        <span className="bg-soft-pink text-black text-xs font-bold px-2 py-1 rounded">
                          LIMITED
                        </span>
                      )}
                    </div>

                    {/* Stock status overlay removed per request */}

                  {/* Quick shop overlay removed per request */}
                  </div>

                  {/* Product Info */}
                  <div className="space-y-2">
                    <h3 className="text-white font-semibold text-lg group-hover:text-soft-pink transition-colors duration-300 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-soft-pink font-bold text-xl">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through text-sm">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-gray-400 text-sm">
                        {product.colors.length} color{product.colors.length !== 1 ? 's' : ''}
                      </p>
                      
                      {/* Size range indicator */}
                      <p className="text-gray-400 text-sm">
                        {product.sizes[0]} - {product.sizes[product.sizes.length - 1]}
                      </p>
                    </div>

                    {/* Product tags */}
                    {product.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {product.tags.slice(0, 2).map((tag) => (
                          <span 
                            key={tag}
                            className="text-xs text-gray-400 bg-[#44443E] border border-soft-pink px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          // No products found
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              No products found
            </h3>
            <p className="text-gray-400 mb-8">
              Try adjusting your filters or browse all products.
            </p>
            <button
              onClick={() => handleCategoryChange('all')}
              className="btn-primary"
            >
              View All Products
            </button>
          </div>
        )}

        {/* Newsletter Signup Section */}
        {filteredProducts.length > 0 && (
          <div className="mt-20 bg-[#44443E] rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay in the Loop
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Be the first to know about new drops, exclusive releases, and special offers. 
              Join our community of style enthusiasts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[#44443E] border border-soft-pink rounded-lg text-white focus:outline-none focus:border-soft-pink transition-colors duration-300"
              />
              <button className="btn-primary px-8 py-3">
                Subscribe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Shop
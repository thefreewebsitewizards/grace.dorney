import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../data/mockData'
import FooterInfoModal from '../components/FooterInfoModal'

const ProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [isAddToCartOpen, setIsAddToCartOpen] = useState(false)

  // Get related products (same category, different product)
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundProduct = products.find(p => p.id === parseInt(id))
      if (foundProduct) {
        setProduct(foundProduct)
        setSelectedColor(foundProduct.colors[0])
        setSelectedSize(foundProduct.sizes[0])
        
        // Get related products
        const allowedIds = [1, 2, 3]
        const related = products
          .filter(p => allowedIds.includes(p.id) && p.id !== foundProduct.id)
          .slice(0, 3)
        setRelatedProducts(related)
      }
      setIsLoading(false)
    }, 500)
  }, [id])

  const handleAddToCart = () => {
    // Add to cart functionality would go here
    console.log('Added to cart:', {
      product: product.id,
      size: selectedSize,
      color: selectedColor,
      quantity
    })
    
    // Open confirmation modal instead of browser alert
    setIsAddToCartOpen(true)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image skeleton */}
            <div className="space-y-4">
              <div className="skeleton h-96 w-full"></div>
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="skeleton h-20 w-20"></div>
                ))}
              </div>
            </div>
            
            {/* Content skeleton */}
            <div className="space-y-6">
              <div className="skeleton h-8 w-3/4"></div>
              <div className="skeleton h-6 w-1/4"></div>
              <div className="skeleton h-20 w-full"></div>
              <div className="skeleton h-12 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-20 bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
          <p className="text-gray-400 mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 bg-black page-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-butter transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-butter transition-colors">Shop</Link>
            <span>/</span>
            <Link to={`/shop/${product.category}`} className="hover:text-butter transition-colors capitalize">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-white">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-xl bg-gray-900">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-96 lg:h-[600px] object-cover"
              />
              
              {/* Product badges */}
              <div className="absolute top-6 left-6 space-y-2">
                {product.tags.includes('new') && (
                  <span className="bg-butter text-black text-sm font-bold px-3 py-1 rounded">
                    NEW
                  </span>
                )}
                {product.tags.includes('sale') && (
                  <span className="bg-burgundy text-white text-sm font-bold px-3 py-1 rounded">
                    SALE
                  </span>
                )}
                {product.tags.includes('limited') && (
                  <span className="bg-soft-pink text-black text-sm font-bold px-3 py-1 rounded">
                    LIMITED EDITION
                  </span>
                )}
              </div>
            </div>

            {/* Image Thumbnails removed: show only the primary image */}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            
            {/* Product Title and Price */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-butter">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center space-x-2 mb-6">
                <div className={`w-3 h-3 rounded-full ${
                  product.inStock ? 'bg-green-500' : 'bg-red-500'
                }`}></div>
                <span className={`text-sm font-medium ${
                  product.inStock ? 'text-green-400' : 'text-red-400'
                }`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            {/* Product Description */}
            <div>
              <p className="text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-white font-semibold mb-3">
                Color: <span className="text-butter">{selectedColor}</span>
              </h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                      selectedColor === color
                        ? 'border-burgundy bg-burgundy text-white'
                        : 'border-gray-600 text-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-white font-semibold mb-3">
                Size: <span className="text-butter">{selectedSize}</span>
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-lg border-2 transition-all duration-300 font-medium ${
                      selectedSize === size
                        ? 'border-burgundy bg-burgundy text-white'
                        : 'border-gray-600 text-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div>
              <h3 className="text-white font-semibold mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                >
                  -
                </button>
                <span className="text-white font-semibold text-lg w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  product.inStock
                    ? 'bg-burgundy hover:bg-opacity-80 text-white hover:shadow-lg'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              
              <button className="w-full py-4 rounded-lg border-2 border-butter text-butter hover:bg-butter hover:text-black font-semibold transition-all duration-300">
                Add to Wishlist
              </button>
            </div>

            {/* Product Features */}
            <div className="border-t border-gray-800 pt-6">
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free shipping on orders over $100</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>30-day return policy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Secure payment processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              You May Also Like
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="card hover-lift">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img 
                        src={relatedProduct.images[0]} 
                        alt={relatedProduct.name}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    <h3 className="text-white font-semibold mb-2 group-hover:text-butter transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-butter font-bold">
                      ${relatedProduct.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Added to Cart Modal */}
      <FooterInfoModal
        open={isAddToCartOpen}
        onClose={() => setIsAddToCartOpen(false)}
        title="Added to Cart"
      >
        <div className="space-y-4">
          <p>
            <span className="text-white font-semibold">{product?.name}</span> has been added to your cart.
          </p>
          <div className="text-sm text-gray-400">
            <p>Size: <span className="text-white">{selectedSize}</span></p>
            <p>Color: <span className="text-white">{selectedColor}</span></p>
            <p>Quantity: <span className="text-white">{quantity}</span></p>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button onClick={() => setIsAddToCartOpen(false)} className="btn-secondary px-4 py-2 text-sm">Continue Shopping</button>
            <Link to="/shipping" className="btn-primary px-4 py-2 text-sm">Checkout</Link>
          </div>
        </div>
      </FooterInfoModal>

    </div>
  )
}

export default ProductPage
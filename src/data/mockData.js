// Mock data for dusk till dorn website
// This file contains all the placeholder content that can be easily updated

export const brandInfo = {
  name: "dusk till dorn",
  tagline: "Confident. Edgy. Streetwear with an attitude.",
  description: "Mode is considerate, intriguing, approachable, intelligent, versatile and inviting. Each piece is designed to embrace your wardrobe, become part of your lifestyle; as some may say, become a uniform.",
  mission: "We create streetwear that speaks to the confident, the bold, and the unapologetically authentic. Our designs bridge the gap between comfort and style, between street and sophistication.",
  story: "Born from the intersection of urban culture and artistic expression, dusk till dorn represents the hours when creativity flows freely. From the fading light of dusk to the breaking dawn, we celebrate the moments that define us.",
  instagram: "@dusk_till_dorn"
}

// Placeholder images - replace with actual product photos
export const placeholderImages = {
  hero: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
  product1: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
  product2: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=500&fit=crop",
  product3: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=500&fit=crop",
  product4: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop",
  product5: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400&h=500&fit=crop",
  product6: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=500&fit=crop",
  about1: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  about2: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=400&fit=crop",
  lifestyle1: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&h=600&fit=crop",
  lifestyle2: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&h=600&fit=crop",
  lifestyle3: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=600&fit=crop"
}

// Product categories
export const categories = [
  { id: 'all', name: 'All', slug: 'all' },
  { id: 'tops', name: 'Tops', slug: 'tops' },
  { id: 'bottoms', name: 'Bottoms', slug: 'bottoms' },
  { id: 'accessories', name: 'Accessories', slug: 'accessories' }
]

// Mock products data
export const products = [
  {
    id: 1,
    name: "Upcycled shirt skirt",
    category: "tops",
    price: 65,
    originalPrice: null,
    images: ['/src/assets/item1.JPG', placeholderImages.product2],
    description: "Crafted from premium cotton with a relaxed fit. Features subtle branding and exceptional comfort for all-day wear.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Charcoal", "Burgundy"],
    inStock: true,
    featured: true,
    tags: ["bestseller", "new"]
  },
  {
    id: 2,
    name: "TN top",
    category: "bottoms",
    price: 120,
    originalPrice: 150,
    images: ['/src/assets/item2.JPG', placeholderImages.product4],
    description: "Functional streetwear meets contemporary design. Multiple pockets and adjustable details for the modern urban explorer.",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Black", "Olive", "Charcoal"],
    inStock: true,
    featured: true,
    tags: ["sale", "popular"]
  },
  {
    id: 3,
    name: "skirt & chain-mailed 4000 silver rings",
    category: "tops",
    price: 95,
    originalPrice: null,
    images: ['/src/assets/item3.JPG'],
    description: "Our iconic hoodie featuring embroidered logo details and premium fleece lining. A wardrobe essential.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Burgundy", "Butter"],
    inStock: true,
    featured: false,
    tags: ["signature"]
  },
  {
    id: 4,
    name: "Minimalist Cap",
    category: "accessories",
    price: 35,
    originalPrice: null,
    images: [placeholderImages.product1, placeholderImages.product2],
    description: "Clean lines and subtle branding. Adjustable fit with premium materials for everyday wear.",
    sizes: ["One Size"],
    colors: ["Black", "Burgundy", "Charcoal"],
    inStock: true,
    featured: false,
    tags: ["accessory"]
  },
  {
    id: 5,
    name: "Dusk Bomber Jacket",
    category: "tops",
    price: 180,
    originalPrice: null,
    images: ['/src/assets/item3.JPG', placeholderImages.product4],
    description: "Premium bomber with custom hardware and interior details. Limited edition piece for the discerning wardrobe.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Burgundy"],
    inStock: false,
    featured: true,
    tags: ["limited", "outerwear"]
  },
  {
    id: 6,
    name: "Essential Joggers",
    category: "bottoms",
    price: 75,
    originalPrice: null,
    images: [placeholderImages.product5, placeholderImages.product6],
    description: "Comfort meets style in these versatile joggers. Perfect for both active and casual wear.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Charcoal", "Burgundy"],
    inStock: true,
    featured: false,
    tags: ["comfort", "versatile"]
  }
]

// Homepage gallery images
export const galleryImages = [
  { id: 1, src: '/src/assets/u1.JPG', alt: 'gallery image 1', category: 'product' },
  { id: 2, src: '/src/assets/u2.JPG', alt: 'gallery image 2', category: 'product' },
  { id: 3, src: '/src/assets/u3.JPG', alt: 'gallery image 3', category: 'product' },
  { id: 4, src: '/src/assets/u4.JPG', alt: 'gallery image 4', category: 'product' },
  { id: 5, src: '/src/assets/u5.JPG', alt: 'gallery image 5', category: 'product' },
  { id: 6, src: '/src/assets/u6.JPG', alt: 'gallery image 6', category: 'product' }
]

// Testimonials/Reviews
export const testimonials = [
  {
    id: 1,
    name: "Alex Chen",
    text: "The quality is incredible. These pieces have become my daily uniform.",
    rating: 5,
    product: "Upcycled shirt skirt"
  },
  {
    id: 2,
    name: "Jordan Smith",
    text: "Finally found a brand that gets streetwear right. Confident and comfortable.",
    rating: 5,
    product: "TN top"
  },
  {
    id: 3,
    name: "Sam Rivera",
    text: "Love the attention to detail and the fit is perfect every time.",
    rating: 5,
    product: "skirt & chain-mailed 4000 silver rings"
  }
]

// Navigation and footer data
export const navigationData = {
  mainNav: [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ],
  footerLinks: {
    shop: [
      { name: 'All Products', path: '/shop' },
      { name: 'Tops', path: '/shop/tops' },
      { name: 'Bottoms', path: '/shop/bottoms' },
      { name: 'Accessories', path: '/shop/accessories' }
    ],
    support: [
      { name: 'Size Guide', path: '/size-guide' },
      { name: 'Shipping Info', path: '/shipping' },
      { name: 'Returns', path: '/returns' },
      { name: 'FAQ', path: '/faq' }
    ]
  }
}

export default {
  brandInfo,
  placeholderImages,
  categories,
  products,
  galleryImages,
  testimonials,
  navigationData
}
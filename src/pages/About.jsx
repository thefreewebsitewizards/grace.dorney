import React from 'react'
import { brandInfo } from '../data/mockData'

const About = () => {
  return (
    <div className="min-h-screen pt-20 bg-black">
      
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              <span className="font-horizon">About</span>{' '}
              <span className="font-horizon  text-soft-pink">dusk till dorn</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {brandInfo.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 bg-[#44443E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Born from the intersection of streetwear culture and artistic expression, 
                    <span className="text-soft-pink font-semibold"> dusk till dorn</span> represents 
                    the hours when creativity flows freely and boundaries dissolve.
                  </p>
                  <p>
                    We believe fashion is a form of rebellion, a way to express your inner 
                    confidence and challenge the status quo. Every piece we create tells a 
                    story of authenticity, edge, and unapologetic self-expression.
                  </p>
                  <p>
                    From the streets to the studio, our designs capture the essence of 
                    modern urban culture while maintaining a timeless appeal that transcends 
                    trends.
                  </p>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="bg-soft-pink p-8 rounded-xl border-l-4 border-white">
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white leading-relaxed">
                  To create clothing that empowers individuals to express their authentic 
                  selves with confidence, combining streetwear aesthetics with premium 
                  quality and sustainable practices.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl bg-black flex items-center justify-center">
                <img 
                  src="/src/assets/logo.JPG"
                  alt="Brand Logo"
                  className="w-full h-96 lg:h-[500px] object-contain"
                />
              </div>
              
              {/* Floating accent */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-soft-pink rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-soft-pink rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our values guide every decision we make, from design to production to community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Authenticity */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-soft-pink rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Authenticity</h3>
              <p className="text-gray-300 leading-relaxed">
                We create genuine pieces that reflect real street culture and individual expression, 
                never following trends just for the sake of it.
              </p>
            </div>

            {/* Quality */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-soft-pink rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quality</h3>
              <p className="text-gray-300 leading-relaxed">
                Every garment is crafted with premium materials and attention to detail, 
                ensuring durability that matches our bold designs.
              </p>
            </div>

            {/* Community */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-soft-pink rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Community</h3>
              <p className="text-gray-300 leading-relaxed">
                We're building a community of creatives, rebels, and dreamers who support 
                each other's journey of self-expression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Process Section */}
      <section className="py-16 bg-[#44443E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="/src/assets/u1.JPG"
                  alt="Creative Process"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-soft-pink/20 to-transparent"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Creative Process
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Our design process begins in the streets, drawing inspiration from 
                    urban landscapes, underground culture, and the raw energy of city life.
                  </p>
                  <p>
                    Each collection starts with extensive research into emerging subcultures, 
                    street art movements, and the evolving language of youth expression.
                  </p>
                  <p>
                    We collaborate with local artists, photographers, and creatives to ensure 
                    our designs remain authentic and connected to the communities we serve.
                  </p>
                </div>
              </div>

              {/* Process Steps */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-soft-pink rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Research & Inspiration</h4>
                    <p className="text-gray-400 text-sm">Street culture analysis and trend forecasting</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-soft-pink rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Design & Concept</h4>
                    <p className="text-gray-400 text-sm">Sketching, prototyping, and material selection</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-soft-pink rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Production & Quality</h4>
                    <p className="text-gray-400 text-sm">Ethical manufacturing and quality control</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Story Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Color Story
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each color in our palette tells a story and evokes a specific emotion, 
              carefully chosen to represent different aspects of urban life and personal expression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Burgundy */}
            <div className="text-center">
              <div className="w-24 h-24 bg-burgundy rounded-full mx-auto mb-4 shadow-lg"></div>
              <h3 className="text-xl font-bold text-white mb-2">Burgundy</h3>
              <p className="text-gray-400 text-sm">
                Represents passion, confidence, and the bold spirit of rebellion that drives our community.
              </p>
            </div>

            {/* Butter Yellow */}
            <div className="text-center">
              <div className="w-24 h-24 bg-butter rounded-full mx-auto mb-4 shadow-lg"></div>
              <h3 className="text-xl font-bold text-white mb-2">Butter Yellow</h3>
              <p className="text-gray-400 text-sm">
                Symbolizes creativity, optimism, and the bright energy that illuminates dark city nights.
              </p>
            </div>

            {/* Soft Pink */}
            <div className="text-center">
              <div className="w-24 h-24 bg-soft-pink rounded-full mx-auto mb-4 shadow-lg"></div>
              <h3 className="text-xl font-bold text-white mb-2">Soft Pink</h3>
              <p className="text-gray-400 text-sm">
                Embodies vulnerability, authenticity, and the courage to show your true self.
              </p>
            </div>

            {/* Charcoal */}
            <div className="text-center">
              <div className="w-24 h-24 bg-black rounded-full mx-auto mb-4 shadow-lg border border-gray-600"></div>
              <h3 className="text-xl font-bold text-white mb-2">Charcoal</h3>
              <p className="text-gray-400 text-sm">
                Represents the urban landscape, sophistication, and the foundation of street culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#44443E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Join the Movement
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Be part of a community that celebrates individuality, creativity, and authentic self-expression. 
            Discover pieces that tell your story.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/shop" className="btn-primary text-lg px-8 py-4">
              Shop Collection
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
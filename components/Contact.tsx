'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="py-20 bg-cafe-brown-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-cafe-cream-foam mb-12 text-center">
          Visit Us
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-cafe-cream-latte">
            <div>
              <h3 className="text-xl font-semibold text-cafe-cream-foam mb-2">Address</h3>
              <p>123 Coffee Street</p>
              <p>Seattle, WA 98101</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-cafe-cream-foam mb-2">Hours</h3>
              <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
              <p>Saturday - Sunday: 8:00 AM - 9:00 PM</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-cafe-cream-foam mb-2">Contact</h3>
              <p>Phone: (555) 123-4567</p>
              <p>Email: hello@cafedesource.com</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-cafe-cream-foam mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-cafe-brown-deep text-cafe-cream-foam border border-cafe-brown-roasted focus:border-cafe-cream-warm focus:outline-none"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-cafe-cream-foam mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-cafe-brown-deep text-cafe-cream-foam border border-cafe-brown-roasted focus:border-cafe-cream-warm focus:outline-none"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-cafe-cream-foam mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-cafe-brown-deep text-cafe-cream-foam border border-cafe-brown-roasted focus:border-cafe-cream-warm focus:outline-none resize-none"
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-cafe-red text-white rounded-lg hover:bg-cafe-red/90 transition-colors font-semibold shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

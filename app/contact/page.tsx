'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { MapPin, Phone, Mail, Clock, Linkedin, Instagram, Youtube } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    category: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navigation />

      {/* HERO SECTION */}
      <section className="pt-24 sm:pt-32 pb-16 bg-green-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 uppercase tracking-tight">
            Let's Talk
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Whether you have a question, want to become a dealer, or are a driver
            ready to apply — we are here and happy to help.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="py-16 sm:py-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* LEFT COLUMN: CONTACT FORM */}
            <div className="lg:w-3/5">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 sm:p-10 lg:p-12">
                <h2 className="text-2xl font-bold text-black mb-8 uppercase tracking-tight">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Mobile Number *</label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        required
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                      <input
                        type="email"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">I am a:</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                      >
                        <option value="">Select Category</option>
                        <option value="Dealer">Dealer</option>
                        <option value="Driver">Driver</option>
                        <option value="Investor">Investor</option>
                        <option value="Press">Press</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Your message here..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-green-200"
                  >
                    Send Message
                  </button>
                  <p className="text-center text-xs text-gray-400 italic">
                    We respond to all enquiries within 24 working hours.
                  </p>
                </form>
              </div>
            </div>

            {/* RIGHT COLUMN: CONTACT DETAILS & MAP */}
            <div className="lg:w-2/5 space-y-8">
              <div className="bg-gray-900 group rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-600/20 rounded-full blur-3xl" />
                <h2 className="text-2xl font-bold mb-8 uppercase tracking-tight relative z-10">Our Office</h2>

                <div className="space-y-8 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-green-500" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Address</p>
                      <p className="text-sm sm:text-base text-gray-200">1013, 3rd Floor, Padla Road, New Delhi – 110030</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-green-500" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Phone</p>
                      <p className="text-sm sm:text-base text-gray-200">1800-1234-567</p>
                      <p className="text-[10px] text-gray-500 mt-1 italic">(Toll Free | Mon–Sat, 9 AM to 7 PM)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-green-500" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Email</p>
                      <p className="text-sm sm:text-base text-gray-200">connect@bharatgreenvolt.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-green-500" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Office Hours</p>
                      <p className="text-sm sm:text-base text-gray-200">Monday to Saturday, 9:00 AM – 7:00 PM IST</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Connect With Us</p>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/company/bharat-green-volt/" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-green-600 transition-all">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-green-600 transition-all">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-green-600 transition-all">
                      <Youtube size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* MAP */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-[300px] sm:h-[350px] lg:h-[400px]">
                <iframe
                  src="https://www.google.com/maps?q=1013,+3rd+Floor,+Padla+Road,+New+Delhi+–+110030&output=embed"
                  className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
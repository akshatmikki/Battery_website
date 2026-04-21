'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { MapPin, Phone, Mail, Linkedin, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <div className="flex-grow pt-16 md:pt-20">
        {/* Contact Form Section - Gray Background */}
        <div className="bg-gray-100 p-6 md:p-8 lg:p-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-6 md:mb-8">CONTACT US</h1>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-3 md:px-4 lg:px-5 py-2.5 md:py-3 lg:py-4 bg-gray-300 text-gray-600 placeholder-gray-500 rounded text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 lg:px-5 py-2.5 md:py-3 lg:py-4 bg-gray-300 text-gray-500 rounded text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-600 appearance-none"
                >
                  <option value="">Role [Driver/Dealer/Other]</option>
                  <option value="driver">Driver</option>
                  <option value="dealer">Dealer</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Message"
                className="w-full px-3 md:px-4 lg:px-5 py-2.5 md:py-3 lg:py-4 bg-gray-300 text-gray-600 placeholder-gray-500 rounded text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-600 resize-none md:rows-6 lg:rows-8"
              />

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 md:py-3 lg:py-4 rounded font-semibold text-sm md:text-base lg:text-lg transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Head Office + Map Section */}
        <div className="flex flex-col md:flex-row">
          {/* Head Office - Left on tablet/desktop */}
          <div className="bg-white p-6 md:p-8 lg:p-12 md:w-1/2">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4 md:mb-6">Head Office</h2>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base lg:text-lg text-gray-700">
              <li className="flex items-start gap-3 md:gap-4">
                <MapPin size={20} className="mt-0.5 flex-shrink-0 text-gray-600 md:w-6 md:h-6" />
                <span>10/3, 3rd Floor, Pusta Road, New<br />Delhi – 110030</span>
              </li>
              <li className="flex items-center gap-3 md:gap-4">
                <Phone size={20} className="flex-shrink-0 text-gray-600 md:w-6 md:h-6" />
                <span>1800-1234-567</span>
              </li>
              <li className="flex items-center gap-3 md:gap-4">
                <Mail size={20} className="flex-shrink-0 text-gray-600 md:w-6 md:h-6" />
                <span>connect@bharatgreenvolt.com</span>
              </li>
            </ul>
          </div>

          {/* Map Section - Right on tablet/desktop */}
          <div className="bg-green-600 p-4 md:p-6 lg:p-8 md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1699123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '280px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[280px] md:min-h-[320px] lg:min-h-[350px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Footer for Contact Page */}
      <footer className="bg-gray-200 py-6 md:py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo and Social Icons Row */}
          <div className="flex items-center justify-between mb-4 md:mb-6">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-green-600 rounded-full flex items-center justify-center mr-1">
                <span className="text-green-600 font-bold text-sm md:text-base">B</span>
              </div>
              <span className="text-xl md:text-2xl font-bold">
                <span className="text-black">ha</span>
                <span className="text-green-600 font-serif italic">R</span>
                <span className="text-black">at</span>
              </span>
              <span className="text-[8px] md:text-[10px] text-orange-500 ml-0.5 -mt-2">green volt</span>
            </Link>

            {/* Social Icons */}
            <div className="flex gap-3 md:gap-4">
              <a href="#" className="w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 border-2 border-black rounded-full flex items-center justify-center hover:border-green-600 hover:text-green-600 transition">
                <Linkedin size={16} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 border-2 border-black rounded-full flex items-center justify-center hover:border-green-600 hover:text-green-600 transition">
                <Instagram size={16} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 border-2 border-black rounded-full flex items-center justify-center hover:border-green-600 hover:text-green-600 transition">
                <Youtube size={16} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Copyright and Links */}
          <div className="text-center">
            <p className="text-gray-700 text-sm md:text-base mb-2">
              Copyright @ 2026 BHARAT GREEN VOLT, All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-2 text-sm md:text-base text-gray-600">
              <a href="#" className="hover:text-green-600 transition">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-green-600 transition">Refund & Cancellation Policy</a>
            </div>
            <div className="flex flex-wrap justify-center gap-x-2 text-sm md:text-base text-gray-600 mt-1">
              <a href="#" className="hover:text-green-600 transition">Terms & Conditions</a>
              <span>|</span>
              <a href="#" className="hover:text-green-600 transition">Corporate Governance</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

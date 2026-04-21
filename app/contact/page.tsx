'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { MapPin, Phone, Mail, Linkedin, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'
import BharatLogo from '@/components/BharatLogo'

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

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <div className="flex-grow pt-20 md:pt-24">

        {/* ================= CONTACT FORM ================= */}
        <section className="bg-gray-100 py-10 md:py-14 lg:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="bg-gray-100 rounded-xl shadow-md p-6 md:p-8 lg:p-10">
              
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-6 md:mb-8 text-center md:text-left">
                CONTACT US
              </h1>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">

                {/* Name + Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
                  
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-[#D9D9D9] border-none  text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1F6500]"
                  />

                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#D9D9D9] border-none  text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1F6500]"
                  >
                    <option value="">Role (Driver / Dealer / Other)</option>
                    <option value="driver">Driver</option>
                    <option value="dealer">Dealer</option>
                    <option value="other">Other</option>
                  </select>

                </div>

                {/* Message */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Message"
                  className="w-full px-4 py-3 bg-[#D9D9D9] border-none  text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1F6500] resize-none"
                />

                {/* Button */}
                <button
                  type="submit"
                  className="w-full bg-[#1F6500] hover:bg-green-800 text-white py-3 rounded-md font-semibold transition"
                >
                  Submit
                </button>

              </form>
            </div>

          </div>
        </section>

        {/* ================= OFFICE + MAP ================= */}
        <section className="flex flex-col md:flex-row items-stretch">

          {/* LEFT - OFFICE */}
          <div className="bg-white p-6 md:p-10 lg:p-12 md:w-1/2 flex flex-col justify-center">
            
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-4 md:mb-6">
              Head Office
            </h2>

            <ul className="space-y-4 text-sm md:text-base lg:text-lg text-gray-700">
              
              <li className="flex items-start gap-3">
                <MapPin className="text-gray-600 mt-1" />
                <span>
                  10/3, 3rd Floor, Pusta Road, New<br />
                  Delhi – 110030
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="text-gray-600" />
                <span>1800-1234-567</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="text-gray-600" />
                <span>connect@bharatgreenvolt.com</span>
              </li>

            </ul>
          </div>

          {/* RIGHT - MAP */}
          <div className="bg-[#1F6500] p-4 md:p-6 lg:p-8 md:w-1/2">
  
  <div className="rounded-lg overflow-hidden shadow-lg w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
    
    <iframe
      src="https://www.google.com/maps?q=New+Delhi&output=embed"
      className="w-full h-full border-0"
      loading="lazy"
    />
    
  </div>

</div>

        </section>

      </div>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-200 py-6 md:py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Logo + Social */}
          <div className="flex items-center justify-between mb-6">
            
            <Link href="/">
              <BharatLogo height={32} />
            </Link>

            <div className="flex gap-4">
              
              <a className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center hover:border-[#1F6500] hover:text-[#1F6500] transition">
                <Linkedin size={18} />
              </a>

              <a className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center hover:border-[#1F6500] hover:text-[#1F6500] transition">
                <Instagram size={18} />
              </a>

              <a className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center hover:border-[#1F6500] hover:text-[#1F6500] transition">
                <Youtube size={18} />
              </a>

            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-700 text-sm md:text-base mb-2">
              Copyright © 2026 BHARAT GREEN VOLT
            </p>

            <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-600">
              <a className="hover:text-[#1F6500]">Privacy Policy</a>
              <span>|</span>
              <a className="hover:text-[#1F6500]">Terms & Conditions</a>
              <span>|</span>
              <a className="hover:text-[#1F6500]">Corporate Governance</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}
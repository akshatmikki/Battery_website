import Navigation from '@/components/Navigation'
import BharatLogo from '@/components/BharatLogo'
import Link from 'next/link'
import { MapPin, Phone, Mail, Linkedin, Instagram, Youtube } from 'lucide-react'

const newsCards = [
  {
    title: 'DRIVER TIPS',
    subtitle: '"How to maximize your E-rickshaw mileage"',
  },
  {
    title: 'DEALER GUIDES',
    subtitle: '"Why BaaS is the future of EV dealerships"',
  },
  {
    title: 'COMPANY UPDATES',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    title: 'INDUSTRY NEWS',
    subtitle: '"Latest EV policies and government incentives"',
  },
]

export default function Insights() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-6 md:mb-8 text-center">EV INDUSTRY NEWS</h1>

          {/* News Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {newsCards.map((card, index) => (
              <div 
                key={index}
                className="bg-[#8B9A7D] rounded-lg p-6 md:p-8 flex flex-col items-center text-center min-h-[280px] md:min-h-[320px]"
              >
                {/* Logo at top */}
                <div className="mb-8">
                  <BharatLogo className="h-6 md:h-8" />
                </div>

                {/* Content centered */}
                <div className="flex-1 flex flex-col justify-center">
                  <h2 className="text-white text-lg md:text-xl font-bold mb-3">{card.title}</h2>
                  <p className="text-white text-sm md:text-base leading-relaxed">{card.subtitle}</p>
                </div>

                {/* Social icons and website at bottom */}
                <div className="mt-auto pt-6">
                  <div className="flex justify-center gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full border border-white/50 flex items-center justify-center">
                      <Linkedin size={12} className="text-white/70" />
                    </div>
                    <div className="w-6 h-6 rounded-full border border-white/50 flex items-center justify-center">
                      <Instagram size={12} className="text-white/70" />
                    </div>
                    <div className="w-6 h-6 rounded-full border border-white/50 flex items-center justify-center">
                      <Youtube size={12} className="text-white/70" />
                    </div>
                  </div>
                  <p className="text-white/80 text-xs">www.bharatgreenvolt.com</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Custom Footer for Insights */}
      <footer className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {/* Column 1 - Logo and contact info */}
            <div>
              <BharatLogo className="h-10 md:h-12 mb-4" />
              
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-gray-600 mt-0.5 flex-shrink-0" />
                  <span>10/3, 3rd Floor, Pusta Road, New<br />Delhi – 110030</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-gray-600 flex-shrink-0" />
                  <span>1800-1234-567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-gray-600 flex-shrink-0" />
                  <span>connect@bharatgreenvolt.com</span>
                </div>
              </div>

              <Link 
                href="/contact"
                className="inline-block mt-4 bg-[#1F6500] text-white px-6 py-2 rounded text-sm font-semibold hover:bg-green-700 transition-colors"
              >
                CONTACT US
              </Link>

              {/* Social icons */}
              <div className="flex gap-3 mt-4">
                <a href="#" className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Linkedin size={16} className="text-gray-800" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Instagram size={16} className="text-gray-800" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Youtube size={16} className="text-gray-800" />
                </a>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Quick Links</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <Link href="/dealers" className="block hover:text-green-600">For Dealers</Link>
                <Link href="/drivers" className="block hover:text-green-600">For Drivers</Link>
                <Link href="/technology" className="block hover:text-green-600">Our Technology</Link>
                <Link href="/about" className="block hover:text-green-600">About Us</Link>
              </div>
            </div>

            {/* Column 3 - Resources */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Resources</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <Link href="/insights" className="block hover:text-green-600">Insights</Link>
                <Link href="#" className="block hover:text-green-600">Driver Tips</Link>
                <Link href="#" className="block hover:text-green-600">Dealer Guides</Link>
                <Link href="#" className="block hover:text-green-600">Company Updates</Link>
              </div>
            </div>

            {/* Column 4 - Legal */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Legal</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <Link href="#" className="block hover:text-green-600">Privacy Policy</Link>
                <Link href="#" className="block hover:text-green-600">Refund & Cancellation</Link>
                <Link href="#" className="block hover:text-green-600">Terms & Conditions</Link>
                <Link href="#" className="block hover:text-green-600">Corporate Governance</Link>
              </div>
            </div>
          </div>

          {/* Copyright section */}
          <div className="mt-6 pt-4 border-t border-gray-300 text-center">
            <p className="text-sm text-gray-600">
              Copyright @ 2026 BHARAT GREEN VOLT, All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-2 text-sm text-gray-500 mt-1">
              <Link href="#" className="hover:text-green-600">Privacy Policy</Link>
              <span>|</span>
              <Link href="#" className="hover:text-green-600">Refund & Cancellation Policy</Link>
            </div>
            <div className="flex flex-wrap justify-center gap-x-2 text-sm text-gray-500">
              <Link href="#" className="hover:text-green-600">Terms & Conditions</Link>
              <span>|</span>
              <Link href="#" className="hover:text-green-600">Corporate Governance</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

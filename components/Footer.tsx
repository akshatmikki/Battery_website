import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from 'lucide-react'
import BharatLogo from './BharatLogo'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <BharatLogo height={32} />
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-green-600" />
                <span>1013, 3rd Floor, Padla Road, New Delhi - 110030</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0 text-green-600" />
                <span>1800-1234-567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0 text-green-600" />
                <span>connect@bharatgreenvolt.com</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded text-sm font-semibold transition-colors"
            >
              CONTACT US
            </Link>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-gray-600 hover:text-green-600 transition">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Right Side - Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-3 text-black text-sm">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/" className="hover:text-green-600 transition">Home</Link></li>
                <li><Link href="/dealers" className="hover:text-green-600 transition">For Dealers</Link></li>
                <li><Link href="/drivers" className="hover:text-green-600 transition">For Drivers</Link></li>
                <li><Link href="/about" className="hover:text-green-600 transition">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-black text-sm">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/technology" className="hover:text-green-600 transition">Technology</Link></li>
                <li><Link href="/insights" className="hover:text-green-600 transition">Insights</Link></li>
                <li><a href="#" className="hover:text-green-600 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-green-600 transition">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-500 text-xs text-center">
            Copyright &copy; 2024 BHARAT GREEN VOLT. All rights reserved.
            <br />
            <span className="text-gray-400">Privacy Policy | Refund & Cancellation Policy</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

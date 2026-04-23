import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from 'lucide-react'
import BharatLogo from './BharatLogo'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex flex-col mb-8 items-start">
              <BharatLogo height={32} />
              <p className="mt-1 text-[10px] font-bold text-green-600 uppercase tracking-[0.2em] leading-none">Powering Green Miles</p>
            </div>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3 group">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-green-600 group-hover:scale-110 transition-transform" />
                <span>Sector 88, Faridabad, Haryana – 110030</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={18} className="flex-shrink-0 text-green-600 group-hover:scale-110 transition-transform" />
                <span>1800-1234-567</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={18} className="flex-shrink-0 text-green-600 group-hover:scale-110 transition-transform" />
                <span>infot@bharatgreenvolt.com</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all shadow-sm">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all shadow-sm">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all shadow-sm">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-bold mb-6 text-black text-xs uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-green-600 transition-colors">Home</Link></li>
              <li><Link href="/dealers" className="hover:text-green-600 transition-colors">For Dealers</Link></li>
              <li><Link href="/drivers" className="hover:text-green-600 transition-colors">For Drivers</Link></li>
              <li><Link href="/about" className="hover:text-green-600 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-bold mb-6 text-black text-xs uppercase tracking-widest">Company</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/technology" className="hover:text-green-600 transition-colors">Technology</Link></li>
              <li><Link href="/insights" className="hover:text-green-600 transition-colors">Insights</Link></li>
              <li><Link href="#" className="hover:text-green-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-green-600 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 pt-8 mt-4 text-center">
          <p className="text-gray-500 text-[10px] md:text-xs">
            © 2026 Bharat Green Volt Private Limited. All rights reserved. | Made with ❤️ in Faridabad, India.
          </p>
        </div>
      </div>
    </footer>
  )
}

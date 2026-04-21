'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Linkedin, Instagram, Youtube } from 'lucide-react'
import BharatLogo from './BharatLogo'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'For Dealers', href: '/dealers' },
    { label: 'For Drivers', href: '/drivers' },
    { label: 'Our Technology', href: '/technology' },
    { label: 'About Us', href: '/about' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact Us', href: '/contact' },
  ]

  return (
    <>
      <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <BharatLogo height={36} className="md:h-10 lg:h-12" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-700 hover:text-green-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute inset-0 bg-white flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-6 border-b border-gray-100">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <BharatLogo height={40} />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <X size={24} className="text-gray-800" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-4 text-xl font-medium text-black border-b border-gray-200 hover:text-green-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Get Started Button */}
              <div className="mt-8">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-amber-400 hover:bg-amber-500 text-black px-6 py-3 rounded-md font-semibold text-center transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Footer with Social Links */}
            <div className="px-6 py-8 border-t border-gray-200">
              <p className="text-gray-500 text-center mb-4">Contact with us</p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-green-600 hover:text-green-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-green-600 hover:text-green-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-green-600 hover:text-green-600 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

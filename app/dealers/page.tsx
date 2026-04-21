import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

// Custom SVG Icons matching the reference
function CoinIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 lg:w-16 lg:h-16">
      <circle cx="32" cy="32" r="28" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="32" cy="32" r="20" stroke="white" strokeWidth="2" fill="none" />
      <text x="32" y="38" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">$</text>
    </svg>
  )
}

function DocumentCheckIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 lg:w-16 lg:h-16">
      <rect x="12" y="8" width="32" height="42" rx="2" stroke="white" strokeWidth="2" fill="none" />
      <line x1="18" y1="18" x2="38" y2="18" stroke="white" strokeWidth="2" />
      <line x1="18" y1="26" x2="38" y2="26" stroke="white" strokeWidth="2" />
      <line x1="18" y1="34" x2="30" y2="34" stroke="white" strokeWidth="2" />
      <circle cx="46" cy="44" r="12" stroke="white" strokeWidth="2" fill="none" />
      <path d="M40 44 L44 48 L52 40" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ShieldLockIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 lg:w-16 lg:h-16">
      <path d="M32 4 L56 14 L56 30 C56 44 44 54 32 60 C20 54 8 44 8 30 L8 14 L32 4 Z" stroke="white" strokeWidth="2" fill="none" />
      <rect x="24" y="26" width="16" height="14" rx="2" stroke="white" strokeWidth="2" fill="none" />
      <path d="M28 26 L28 22 C28 18 32 16 36 22 L36 26" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="32" cy="33" r="2" fill="white" />
    </svg>
  )
}

export default function Dealers() {
  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-16">
        <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
          <Image
            src="/images/dealer-hero.jpg"
            alt="Grow your business"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-0 right-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                GROW YOUR BUSINESS
                <br />
                WITHOUT THE CAPEX RISK.
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black mb-6 sm:mb-8 lg:mb-12 text-center">BENEFITS</h2>
          
          <div className="flex flex-col gap-4 sm:gap-6 max-w-sm sm:max-w-md lg:max-w-4xl mx-auto lg:flex-row lg:justify-center">
            {/* Zero Inventory Cost Card */}
            <div className="bg-green-600 rounded-lg p-6 sm:p-8 lg:p-10 text-center lg:flex-1 lg:max-w-xs">
              <div className="flex justify-center mb-4">
                <CoinIcon />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-2">ZERO INVENTORY COST</h3>
              <p className="text-xs sm:text-sm lg:text-base text-white/90">We supply the smart batteries</p>
            </div>
            
            {/* Instant KYC Card */}
            <div className="bg-green-600 rounded-lg p-6 sm:p-8 lg:p-10 text-center lg:flex-1 lg:max-w-xs">
              <div className="flex justify-center mb-4">
                <DocumentCheckIcon />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-2">INSTANT KYC & FINANCING</h3>
              <p className="text-xs sm:text-sm lg:text-base text-white/90">
                Approve customers in 5 minutes
                <br />
                using our Dealer App
              </p>
            </div>
            
            {/* 100% Asset Security Card */}
            <div className="bg-green-600 rounded-lg p-6 sm:p-8 lg:p-10 text-center lg:flex-1 lg:max-w-xs">
              <div className="flex justify-center mb-4">
                <ShieldLockIcon />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-2">100% ASSET SECURITY</h3>
              <p className="text-xs sm:text-sm lg:text-base text-white/90">
                Our IoT tech tracks the battery
                <br />
                and allows remote immobilization if
                <br />
                payments fail. You never lose an asset
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Image Section */}
      <section className="py-0">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
          <Image
            src="/images/dealer-dashboard.jpg"
            alt="Dealer Portal Dashboard"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black mb-6 sm:mb-8 lg:mb-10 text-center">
            PARTNER WITH US
          </h2>
          
          <div className="max-w-sm sm:max-w-md lg:max-w-2xl mx-auto">
            <form className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-50"
              />
              <input
                type="text"
                placeholder="Shop Name"
                className="w-full px-4 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-50"
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full px-4 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-50"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-50"
              />
              <div className="lg:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold text-sm sm:text-base transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

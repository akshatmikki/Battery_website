import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full pt-16">
        <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1263a64d160c97666bc23d23e6c1c65383ced5fa-XQvsb7Bi8QVproalHsfwHaygSGRgWE.png"
            alt="Electric auto-rickshaw and smart battery swap station"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Content overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/95 to-transparent pt-16 pb-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-xl lg:max-w-2xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-1 leading-tight">
                  <span className="text-green-600">POWERING</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
                  THE NEW INDIA
                </h2>
                <p className="text-sm sm:text-base text-black mb-2">
                  WITH <span className="text-green-600 font-semibold">SMART VEHICLE LEASING</span>.
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mb-4 lg:mb-6">
                  Zero upfront cost for drivers.<br className="sm:hidden" />
                  Instant financing and IoT-backed security for dealers.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/dealers" className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2.5 rounded text-xs sm:text-sm font-semibold transition-colors">
                    BECOME A DEALER
                  </Link>
                  <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-4 sm:px-6 py-2.5 rounded text-xs sm:text-sm font-semibold transition-colors">
                    LOCATE OUR STORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 lg:gap-8 max-w-3xl mx-auto">
            {/* Clean KMs Driven */}
            <div className="text-center">
              <div className="w-16 h-16 sm:w-14 sm:h-14 lg:w-20 lg:h-20 border-2 border-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 sm:w-6 sm:h-6 lg:w-10 lg:h-10 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div className="text-2xl sm:text-xl lg:text-3xl font-bold text-black">10+ M</div>
              <p className="text-xs sm:text-xs lg:text-sm text-gray-500">Clean KMs Driven</p>
            </div>
            
            {/* Drivers Empowered */}
            <div className="text-center">
              <div className="w-16 h-16 sm:w-14 sm:h-14 lg:w-20 lg:h-20 border-2 border-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 sm:w-6 sm:h-6 lg:w-10 lg:h-10 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="text-2xl sm:text-xl lg:text-3xl font-bold text-black">5000+</div>
              <p className="text-xs sm:text-xs lg:text-sm text-gray-500">Drivers Empowered</p>
            </div>
            
            {/* CO2 Saved */}
            <div className="text-center">
              <div className="w-16 h-16 sm:w-14 sm:h-14 lg:w-20 lg:h-20 border-2 border-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 sm:w-6 sm:h-6 lg:w-10 lg:h-10 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M7 12l3 3 7-7" />
                </svg>
              </div>
              <div className="text-2xl sm:text-xl lg:text-3xl font-bold text-black">1200</div>
              <p className="text-xs sm:text-xs lg:text-sm text-gray-500">Tons of CO2 Saved</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Bharat Green Volt Works */}
      <section className="py-10 sm:py-12 lg:py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-8 lg:mb-12 text-center">
            HOW BHARAT GREEN VOLT WORKS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Digital KYC */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-40 sm:h-36 lg:h-48">
                <Image
                  src="/images/home-digital-kyc.jpg"
                  alt="Digital KYC"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 lg:p-6 text-center">
                <h3 className="font-bold text-black text-sm lg:text-base mb-1">DIGITAL KYC</h3>
                <p className="text-xs lg:text-sm text-gray-600">Instant approval at the dealership</p>
              </div>
            </div>

            {/* Smart Battery */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-40 sm:h-36 lg:h-48">
                <Image
                  src="/images/home-smart-battery.jpg"
                  alt="Smart Battery"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 lg:p-6 text-center">
                <h3 className="font-bold text-black text-sm lg:text-base mb-1">SMART BATTERY ASSIGNED</h3>
                <p className="text-xs lg:text-sm text-gray-600">Plug-and-play high-range Lithium-ion</p>
              </div>
            </div>

            {/* Drive & Earn */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-40 sm:h-36 lg:h-48">
                <Image
                  src="/images/home-drive-earn.jpg"
                  alt="Drive & Earn"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 lg:p-6 text-center">
                <h3 className="font-bold text-black text-sm lg:text-base mb-1">DRIVE & EARN</h3>
                <p className="text-xs lg:text-sm text-gray-600">Pay daily/weekly via our app, double your daily range</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Value Proposition */}
      <section className="py-10 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-8 lg:mb-12 text-center">
            DUAL VALUE PROPOSITION
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 max-w-3xl mx-auto">
            {/* For Drivers */}
            <div className="border border-gray-200 rounded-lg p-5 lg:p-8">
              <p className="text-sm lg:text-base text-gray-700 mb-4 lg:mb-6 leading-relaxed">
                &quot;Say goodbye to paper-wali (lead-acid) batteries. Charge faster, drive longer, earn more.&quot;
              </p>
              <Link href="/drivers" className="inline-block bg-green-600 hover:bg-green-700 text-white px-5 lg:px-6 py-2.5 rounded text-sm font-semibold transition-colors">
                Learn More
              </Link>
            </div>
            
            {/* For Dealers */}
            <div className="border border-gray-200 rounded-lg p-5 lg:p-8">
              <p className="text-sm lg:text-base text-gray-700 mb-4 lg:mb-6 leading-relaxed">
                &quot;Turn your shop into a recurring revenue hub. We handle the tech and financing.&quot;
              </p>
              <Link href="/dealers" className="inline-block border-2 border-green-600 text-green-600 hover:bg-green-50 px-5 lg:px-6 py-2.5 rounded text-sm font-semibold transition-colors">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Tech Advantage */}
      <section className="py-10 sm:py-12 lg:py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-8 lg:mb-12 text-center">
            THE TECH ADVANTAGE
          </h2>
          
          <div className="max-w-2xl lg:max-w-3xl mx-auto text-center">
            <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
              &quot;Powered by our proprietary<br />
              Two-Brain System:<br />
              Seamless Finance meets<br />
              Real-Time IoT Battery Tracking.&quot;
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

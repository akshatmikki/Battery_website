import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

// Finance Engine Icon (Rupee with Gear)
function FinanceEngineIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="20" stroke="#16a34a" strokeWidth="2" fill="none" />
      <path d="M32 12 L34 8 L30 8 Z" fill="#16a34a" />
      <path d="M32 52 L34 56 L30 56 Z" fill="#16a34a" />
      <path d="M12 32 L8 34 L8 30 Z" fill="#16a34a" />
      <path d="M52 32 L56 34 L56 30 Z" fill="#16a34a" />
      <path d="M18 18 L15 15 L18 15 Z" fill="#16a34a" />
      <path d="M46 46 L49 49 L46 49 Z" fill="#16a34a" />
      <path d="M46 18 L49 15 L46 15 Z" fill="#16a34a" />
      <path d="M18 46 L15 49 L18 49 Z" fill="#16a34a" />
      <text x="32" y="38" textAnchor="middle" fill="#16a34a" fontSize="18" fontWeight="bold">&#x20B9;</text>
    </svg>
  )
}

// IoT Asset Engine Icon
function IoTEngineIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Central device */}
      <rect x="24" y="24" width="16" height="16" rx="2" stroke="#16a34a" strokeWidth="2" fill="none" />
      <text x="32" y="35" textAnchor="middle" fill="#16a34a" fontSize="8" fontWeight="bold">IoT</text>
      {/* Connection lines */}
      <line x1="32" y1="12" x2="32" y2="24" stroke="#16a34a" strokeWidth="2" />
      <line x1="32" y1="40" x2="32" y2="52" stroke="#16a34a" strokeWidth="2" />
      <line x1="12" y1="32" x2="24" y2="32" stroke="#16a34a" strokeWidth="2" />
      <line x1="40" y1="32" x2="52" y2="32" stroke="#16a34a" strokeWidth="2" />
      {/* Connected nodes */}
      <circle cx="32" cy="10" r="4" stroke="#16a34a" strokeWidth="2" fill="none" />
      <circle cx="32" cy="54" r="4" stroke="#16a34a" strokeWidth="2" fill="none" />
      <circle cx="10" cy="32" r="4" stroke="#16a34a" strokeWidth="2" fill="none" />
      <circle cx="54" cy="32" r="4" stroke="#16a34a" strokeWidth="2" fill="none" />
      {/* Diagonal connections */}
      <line x1="18" y1="18" x2="26" y2="26" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="2 2" />
      <line x1="46" y1="18" x2="38" y2="26" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="2 2" />
      <line x1="18" y1="46" x2="26" y2="38" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="2 2" />
      <line x1="46" y1="46" x2="38" y2="38" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  )
}

// Remote Kill Switch Icon
function KillSwitchIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Crossed lines forming X pattern */}
      <line x1="16" y1="16" x2="48" y2="48" stroke="#16a34a" strokeWidth="3" />
      <line x1="48" y1="16" x2="16" y2="48" stroke="#16a34a" strokeWidth="3" />
      {/* Arrow heads */}
      <path d="M14 14 L20 14 L14 20 Z" fill="#16a34a" />
      <path d="M50 14 L44 14 L50 20 Z" fill="#16a34a" />
      <path d="M14 50 L20 50 L14 44 Z" fill="#16a34a" />
      <path d="M50 50 L44 50 L50 44 Z" fill="#16a34a" />
    </svg>
  )
}

export default function Technology() {
  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
<section className="pt-20 md:pt-24 lg:pt-28 pb-6 md:pb-8 lg:pb-10">        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop: Side by side layout */}
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2">
  <h1 className="text-[28px] sm:text-[32px] md:text-[34px] lg:text-[37px] font-bold text-black leading-[100%] tracking-[0%]">
    THE INTELLIGENCE
  </h1>

  <h2 className="text-[28px] sm:text-[32px] md:text-[34px] lg:text-[37px] font-bold text-black leading-[100%] tracking-[0%] mt-1">
    BEHIND THE ENERGY.
  </h2>
</div>
            
            {/* Hero Image - Full Width on mobile, half on desktop */}
            <div className="lg:w-1/2">
              <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[400px] xl:h-[450px] lg:rounded-lg lg:overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1ef61249cc67c987ecf209cc26f398c4ea45e827-d4Ws59vKEctwJl99If7rvaXiWNze9D.jpg"
                  alt="AI Technology - The Intelligence Behind The Energy"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Cards Section */}
     <section className="py-12 md:py-16 lg:py-20 bg-[#1F6500]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
      
      {/* Finance Engine Card */}
      <div className="bg-white rounded-lg p-6 md:p-8 lg:p-10 text-center shadow-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
        
        <div className="flex justify-center mb-4 lg:mb-6">
          <img
            src="/images/engineering.png"
            alt="Finance Engine"
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
          />
        </div>

        <h3 className="font-bold text-sm md:text-base lg:text-lg text-black mb-3 lg:mb-4">
          THE FINANCE ENGINE (LMS)
        </h3>

        <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed">
          Digital onboarding, CIBIL checks, automated e-NACH/UPI collections, and dealer ledger.
        </p>
      </div>

      {/* Asset Engine Card */}
      <div className="bg-white rounded-lg p-6 md:p-8 lg:p-10 text-center shadow-sm hover:shadow-md transition-shadow">
        
        <div className="flex justify-center mb-4 lg:mb-6">
          <img
            src="/images/technology.png"
            alt="Asset Engine"
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
          />
        </div>

        <h3 className="font-bold text-sm md:text-base lg:text-lg text-black mb-3 lg:mb-4">
          THE ASSET ENGINE (IoT)
        </h3>

        <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed">
          Deep CAN-bus telemetry, real-time State of Charge (SoC), thermal alerts, and Geo-fencing.
        </p>
      </div>

      {/* Remote Kill-Switch Card */}
      <div className="bg-white rounded-lg p-6 md:p-8 lg:p-10 text-center shadow-sm hover:shadow-md transition-shadow">
        
        <div className="flex justify-center mb-4 lg:mb-6">
          <img
            src="/images/motorcycle.png"
            alt="Kill Switch"
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
          />
        </div>

        <h3 className="font-bold text-sm md:text-base lg:text-lg text-black mb-3 lg:mb-4">
          THE REMOTE KILL-SWITCH
        </h3>

        <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed">
          Explaining the security protocol. "If a lease defaults, the battery safely immobilizes via over-the-air commands."
        </p>
      </div>

    </div>
  </div>
</section>

      <Footer />
    </div>
  )
}

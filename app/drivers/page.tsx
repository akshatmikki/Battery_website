import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Drivers() {
  return (
    <div className="bg-white">
      <Navigation />

      {/* SECTION 1 — HERO SECTION */}
      <section className="relative pt-16">
        <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
          <Image
            src="/images/auto.jpg"
            alt="Bharat Green Volt e-rickshaw"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-10 sm:bottom-12 md:bottom-16 left-0 right-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight uppercase tracking-tight">
                Drive More. <br />
                Pay Less. Own More.
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl font-medium mb-8 leading-relaxed">
                Get a Bharat Green Volt e-rickshaw on a simple monthly lease — no big 
                upfront payment, no middlemen, no surprises. Just you and your vehicle.
              </p>
              <div className="mt-8">
                <Link href="#apply" className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded font-bold uppercase transition-all shadow-lg active:scale-95">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE DRIVER'S PROBLEM (empathy section) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8 uppercase tracking-tight">
            We Know What You're Dealing With
          </h2>
          <div className="space-y-6 text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
            <p>
              If you are currently renting a rickshaw from a fleet owner, you are probably paying ₹250 to 
              ₹400 every single day — even on days you don't earn much. That money goes into 
              someone else's pocket, not yours.
            </p>
            <p>
              The cost of buying your own vehicle feels out of reach. Bank loans are complicated. And 
              nobody is looking out for you when the battery dies mid-route.
            </p>
            <p className="font-bold text-green-700">
              Bharat Green Volt was built to change exactly this.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — OUR DRIVER OFFER */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black uppercase tracking-tight">
              What You Get With Bharat Green Volt
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 max-w-6xl mx-auto">
            {[
              { 
                title: "Low Monthly Lease", 
                desc: "Pay a fixed monthly amount — starting as low as ₹3,500 per month. No daily tension. No fleet owner. Just one simple monthly payment.", 
                icon: "/images/save-money.png" 
              },
              { 
                title: "Zero or Minimal Deposit", 
                desc: "We do not ask for large upfront amounts. Our goal is to get you on the road earning as fast as possible.", 
                icon: "/images/home-hero-rickshaw.jpg" 
              },
              { 
                title: "Your Own Branded Vehicle", 
                desc: "You get a Bharat Green Volt branded e-rickshaw — assembled in India, built to last, and registered in your name or lease agreement.", 
                icon: "/images/electric-auto-rickshaw.jpg" 
              },
              { 
                title: "Smart Battery & App", 
                desc: "Your vehicle comes with an IoT device that connects to the Bharat Green Volt driver app. Check battery status, find charging points, track your trips, and manage payments — all in one app.", 
                icon: "/images/smart-battery.jpg" 
              },
              { 
                title: "On-Road Support", 
                desc: "If anything goes wrong, our support team is one call away. We have service partners across Faridabad and NCR for quick resolution.", 
                icon: "/images/engineering.png" 
              },
              { 
                title: "Path to Ownership", 
                desc: "Stick with your lease plan and you build equity. Our lease-to-own programme means your vehicle can be fully yours — with no extra big payment at the end.", 
                icon: "/images/grow-your-business.jpg" 
              }
            ].map((offer, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-3 shadow-sm border border-gray-50">
                    <img src={offer.icon} alt={offer.title} className="w-full h-full object-contain" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-black mb-4 uppercase tracking-tight text-center">{offer.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed text-center">{offer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — DRIVER APP FEATURES */}
      <section className="bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* App Screen / Image */}
            <div className="lg:w-1/2 relative min-h-[350px] sm:min-h-[450px] lg:min-h-[600px]">
              <Image
                src="/images/home-smart-battery.jpg"
                alt="Bharat Green Volt Driver App"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 to-transparent lg:hidden" />
            </div>
            
            {/* Content */}
            <div className="lg:w-1/2 p-8 sm:p-12 lg:p-20 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 leading-tight uppercase tracking-tight">
                The Bharat Green Volt <br /><span className="text-green-500">Driver App</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { text: "Live battery level and estimated range", emoji: "🔋" },
                  { text: "Nearest charging station map", emoji: "📍" },
                  { text: "Daily and monthly earnings tracker", emoji: "📈" },
                  { text: "Lease payment schedule and history", emoji: "📄" },
                  { text: "Raise a service request in one tap", emoji: "🛠️" },
                  { text: "Direct support chat with our team", emoji: "💬" }
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="text-2xl shrink-0 mt-1">{feature.emoji}</div>
                    <p className="text-gray-300 text-sm sm:text-base leading-snug group-hover:text-white transition-colors">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 flex flex-wrap gap-4">
                <div className="bg-black border border-gray-800 rounded-lg px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-800 transition-colors">
                  <div className="w-6 h-6">
                    <svg viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-gray-400 leading-none">Download on the</div>
                    <div className="text-sm font-bold leading-none mt-0.5">App Store</div>
                  </div>
                </div>
                <div className="bg-black border border-gray-800 rounded-lg px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-800 transition-colors">
                  <div className="w-6 h-6">
                    <svg viewBox="0 0 24 24" fill="white"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.66,16.19C21.45,17.8 21.45,21.2 18.66,22.81L16.81,23.88L14.75,12L16.81,0.12L18.66,1.19C21.45,2.8 21.45,6.2 18.66,7.81L16.81,8.88L14.75,12L16.81,15.12M14.05,12.35L4.53,21.87L14.28,12.35L14.05,12.35M14.05,11.65L14.28,11.65L4.53,2.13L14.05,11.65Z"/></svg>
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-gray-400 leading-none">Get it on</div>
                    <div className="text-sm font-bold leading-none mt-0.5">Google Play</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — DRIVER ELIGIBILITY */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-10 text-center uppercase tracking-tight">
              Who Can Apply?
            </h2>
            
            <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm">
              <ul className="space-y-6">
                {[
                  "Any Indian citizen above 18 years of age",
                  "Valid driving licence for three-wheeler (or willing to obtain one — we guide you)",
                  "Aadhaar card and PAN card",
                  "Currently operating as a rickshaw driver or willing to start",
                  "Based in Faridabad, Gurugram, Ballabhgarh, or nearby NCR areas"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium sm:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-gray-600 italic text-center">
                  <span className="font-bold text-black not-italic">Note:</span> We welcome first-time applicants. Prior EV experience is not required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — DRIVER APPLICATION FORM */}
      <section id="apply" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 text-center uppercase tracking-tight">
              Driver Application Form
            </h2>
            <p className="text-center text-gray-500 mb-10 text-sm sm:text-base">
              Submit your details and our team will call you within 24 hours.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400 ml-1">Full Name *</label>
                  <input type="text" className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:ring-2 focus:ring-green-600 outline-none transition-all" required placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400 ml-1">Mobile Number *</label>
                  <input type="tel" className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:ring-2 focus:ring-green-600 outline-none transition-all" required placeholder="Enter 10-digit number" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400 ml-1">City / Area *</label>
                  <input type="text" className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:ring-2 focus:ring-green-600 outline-none transition-all" required placeholder="e.g. Faridabad Sector 15" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400 ml-1">Preferred contact time</label>
                  <select className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:ring-2 focus:ring-green-600 outline-none transition-all">
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold uppercase text-gray-400 ml-1">Do you currently drive a rickshaw?</label>
                <div className="flex gap-6">
                  {['Yes', 'No'].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="current_driver" className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-600" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-black">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-400 ml-1">Do you have a valid driving licence?</label>
                <select className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:ring-2 focus:ring-green-600 outline-none transition-all">
                  <option>Yes</option>
                  <option>No</option>
                  <option>In Process</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-400 ml-1">What type of rickshaw do you currently drive?</label>
                <select className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:ring-2 focus:ring-green-600 outline-none transition-all">
                  <option>Battery</option>
                  <option>Petrol</option>
                  <option>Cycle</option>
                  <option>Not Currently Driving</option>
                </select>
              </div>

              <div className="pt-6">
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-green-900/10 active:scale-[0.98] uppercase tracking-wide">
                  Submit My Application
                </button>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500">
                    Our team will call you within 24 hours to explain the next steps.
                  </p>
                  <p className="text-xs text-gray-400 mt-2 italic">
                    No documents needed at this stage.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

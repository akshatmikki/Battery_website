import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-white">
      <Navigation />
      
      {/* SECTION 1 — HERO BANNER */}
      <section className="relative w-full pt-16">
        <div className="relative h-[85vh] sm:h-[80vh] md:h-[85vh] lg:h-[90vh] min-h-[600px] max-h-[900px]">
          <Image
            src="/images/hero-main.png"
            alt="Bharat Green Volt Hero"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
          
          {/* Content overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-xl lg:max-w-2xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight">
                  Own Your Road. <br />
                  <span className="text-green-500 font-semibold uppercase">Run on Green.</span>
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-white mb-6 font-medium max-w-lg">
                  Bharat Green Volt makes electric e-rickshaws affordable for every driver and easy to 
                  manage for every dealer — with smart IoT technology, flexible leasing, and zero-hassle 
                  support.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <Link href="/dealers" className="bg-green-600 hover:bg-green-700 text-white px-5 sm:px-8 py-3 rounded text-sm sm:text-base font-bold transition-colors uppercase">
                    Become a Dealer
                  </Link>
                  <Link href="/drivers" className="border-2 border-white text-white hover:bg-white/10 px-5 sm:px-8 py-3 rounded text-sm sm:text-base font-bold transition-colors uppercase">
                    I'm a Driver
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — STATS BAR */}
      <section className="py-10 sm:py-12 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 lg:gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-14 sm:h-14 lg:w-20 lg:h-20 border-2 border-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 sm:w-6 sm:h-6 lg:w-10 lg:h-10 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M2 12h20M12 2l-4 4M12 2l4 4M12 22l-4-4M12 22l4-4" />
                </svg>
              </div>
              <div className="text-2xl sm:text-xl lg:text-3xl font-bold text-black uppercase">100+</div>
              <p className="text-xs sm:text-xs lg:text-sm text-gray-500">E-Rickshaws on Road</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 sm:w-14 sm:h-14 lg:w-20 lg:h-20 border-2 border-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 sm:w-6 sm:h-6 lg:w-10 lg:h-10 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
              </div>
              <div className="text-2xl sm:text-xl lg:text-3xl font-bold text-black uppercase">3</div>
              <p className="text-xs sm:text-xs lg:text-sm text-gray-500">Cities in Haryana & NCR</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 sm:w-14 sm:h-14 lg:w-20 lg:h-20 border-2 border-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 sm:w-6 sm:h-6 lg:w-10 lg:h-10 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M7 12l3 3 7-7" />
                </svg>
              </div>
              <div className="text-2xl sm:text-xl lg:text-3xl font-bold text-black uppercase">₹0</div>
              <p className="text-xs sm:text-xs lg:text-sm text-gray-500">Down Payment to Start</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHO WE ARE */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="lg:w-1/2">
              <h3 className="text-green-600 font-bold text-sm lg:text-base mb-4 uppercase tracking-wider">WHO WE ARE</h3>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                Built in Bharat. <br />Built for Atmanirbhar Bharat.
              </h2>
              <div className="space-y-4 text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                <p>Bharat Green Volt is a Faridabad-based electric vehicle company on a mission to put clean, affordable mobility in the hands of India's hardest-working people.</p>
                <p>We assemble and brand our own e-rickshaws and scooters, lease them to drivers at low monthly costs, and support dealers with the tools and technology they need to grow. Our fleet runs on smart IoT-enabled batteries, tracked in real time so drivers never get stranded and dealers always stay in control.</p>
                <p className="font-semibold text-black">We are women-led, DPIIT-recognised, and proud to be building India's electric future from the ground up.</p>
              </div>
              <Link href="/about" className="inline-block mt-8 text-green-600 font-bold hover:underline">
                Learn More About Us →
              </Link>
            </div>
            <div className="lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/who_we_are_ev.png" alt="Who We Are" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW IT WORKS */}
      <section className="py-10 sm:py-12 lg:py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-white/80 font-bold text-center text-xs lg:text-sm mb-2 uppercase tracking-widest">HOW IT WORKS</h3>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-10 lg:mb-16 text-center uppercase tracking-tight">
            Simple. Affordable. Electric.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-600">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 10l-4 4l6 6l4-16l-18 7l4 2l2 6l3-4"/></svg>
                </div>
                <h3 className="font-bold text-black text-lg uppercase tracking-tight">Pick Your Vehicle</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Choose from our range of Bharat Green Volt branded e-vehicles — built for daily transport and last-mile logistics. No paperwork headache, no hidden costs.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-600">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                </div>
                <h3 className="font-bold text-black text-lg uppercase tracking-tight">Download the App</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Track your battery health, monitor earnings, plan your route, and manage payments — all from the Bharat Green Volt driver app on your phone.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-600">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h3 className="font-bold text-black text-lg uppercase tracking-tight">Hit the Road</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Start earning from Day 1. Pay a simple monthly lease. Our support team is available whenever you need help.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — FOR DEALERS */}
      <section className="py-16 sm:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h3 className="text-green-500 font-bold text-sm lg:text-base mb-4 uppercase tracking-wider">FOR DEALERS</h3>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Grow Your EV Business With Us</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Join the Bharat Green Volt dealer network and tap into the fastest-growing segment of 
              India's transport sector. We give you the vehicles, the technology platform, and the customer 
              pipeline — you focus on sales and service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Ready-to-Sell Inventory", desc: "Access Bharat Green Volt branded e-rickshaws directly. No minimum order anxiety — we work with dealers of all sizes." },
              { title: "Dealer Dashboard", desc: "Manage your fleet, track vehicle performance, monitor lease payments, and view earnings — all from one smart dashboard built for dealers." },
              { title: "Marketing & Sales Support", desc: "We support our dealers with co-branded marketing materials, lead generation tools, and a dedicated relationship manager." }
            ].map((card, i) => (
              <div key={i} className="border border-gray-800 p-8 rounded-lg hover:border-gray-700 transition-colors bg-gray-800/20">
                <h4 className="text-xl font-bold mb-4 uppercase text-green-500 tracking-tight">{card.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/dealers" className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded font-bold transition-all uppercase tracking-wide">
              Become a Dealer Partner
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FOR DRIVERS */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h3 className="text-green-600 font-bold text-sm lg:text-base mb-4 uppercase tracking-wider">FOR DRIVERS</h3>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">Your Rickshaw. Your Income. Your Terms.</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Stop paying rent to fleet owners. With Bharat Green Volt, you lease your own e-rickshaw at a 
              fixed monthly cost — lower than what you pay today. Drive more, earn more, and keep what 
              you earn.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Zero Down Payment", desc: "Get on the road without a large upfront investment. Our lease plans start with zero or minimal security deposit." },
              { title: "Smart Battery Monitoring", desc: "Never worry about running out of charge. Our IoT system tells you your battery level, nearest charging point, and estimated range — all on your phone." },
              { title: "Own It One Day", desc: "Our lease-to-own plan means your monthly payments build towards full ownership. Your vehicle. Your asset." }
            ].map((card, i) => (
              <div key={i} className="border border-gray-200 p-8 rounded-lg hover:border-green-200 transition-colors">
                <h4 className="text-xl font-bold mb-4 uppercase text-black tracking-tight">{card.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/drivers" className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded font-bold transition-all uppercase tracking-wide">
              Apply as a Driver
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7 — TECHNOLOGY HIGHLIGHT */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
            <Image src="/images/the-tech-advantage.jpg" alt="Tech Advantage" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center px-4 text-center">
              <div className="max-w-4xl mx-auto space-y-6">
                <h3 className="text-green-500 font-bold text-sm lg:text-base uppercase tracking-widest">OUR TECHNOLOGY</h3>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight">Smart Vehicles. Smarter Management.</h2>
                <p className="text-sm sm:text-base lg:text-xl text-gray-300 leading-relaxed">
                  Every Bharat Green Volt e-rickshaw comes equipped with an IoT telematics device that 
                  monitors battery health, GPS location, and vehicle performance in real time. Dealers see 
                  everything on their dashboard. Drivers stay informed on their app. Nothing breaks without warning.
                </p>
                <Link href="/technology" className="inline-block bg-white text-black hover:bg-gray-200 px-8 py-3 rounded font-bold uppercase tracking-wide transition-colors">
                  Explore Our Technology
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — TESTIMONIALS */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-green-600 font-bold text-xs lg:text-sm mb-2 uppercase tracking-widest">WHAT PEOPLE ARE SAYING</h3>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black uppercase tracking-tight">Trusted by Drivers and Dealers Across NCR</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Pehle fleet owner ko roz ₹300 deta tha. Ab apna rickshaw hai aur mahine mein sirf ₹3,500. Bharat Green Volt ne meri zindagi badal di.", author: "Ramesh Kumar, E-Rickshaw Driver, Faridabad" },
              { quote: "The dealer dashboard is excellent. I can see all my vehicles, their battery status, and payments in one place. Never had this kind of visibility before.", author: "Suresh Sharma, Dealer Partner, Ballabhgarh" },
              { quote: "As a woman entrepreneur, I am proud to work with a company that understands the ground reality of EV transport in India. Their support is genuine.", author: "Kavita Singh, Fleet Operator, Gurugram" }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded border border-gray-100 shadow-sm relative italic text-gray-700">
                <p className="mb-6 leading-relaxed">"{t.quote}"</p>
                <p className="not-italic font-bold text-black text-sm uppercase tracking-tight">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — CTA BANNER */}
      <section className="py-16 lg:py-24 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter">Ready to Go Green?</h2>
          <p className="text-lg lg:text-xl text-white/90">
            Whether you are a driver looking for your first e-rickshaw or a dealer ready to 
            expand your EV business — Bharat Green Volt is your partner.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link href="/contact" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded font-bold uppercase tracking-wide transition-all shadow-lg">
              For Dealers — Get in Touch
            </Link>
            <Link href="/drivers" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded font-bold uppercase tracking-wide transition-all">
              For Drivers — Apply Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Technology() {
  return (
    <div className="bg-white">
      <Navigation />

      {/* SECTION 1 — HERO SECTION */}
      <section className="relative pt-16">
        <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
          <Image
            src="/images/technology-hero.jpg"
            alt="Bharat Green Volt Smart Technology"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-10 sm:bottom-12 md:bottom-16 left-0 right-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight uppercase tracking-tight">
                Every Volt. Tracked. <br />Protected. Optimised.
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-3xl font-medium leading-relaxed">
                Bharat Green Volt vehicles run on smart IoT technology that gives drivers 
                real-time visibility and gives dealers complete fleet control — all from a phone or dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE TECHNOLOGY STACK */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black uppercase tracking-tight">
              Smart from the Inside Out
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {[
              {
                title: "Built-In Intelligence",
                subtitle: "IoT Telematics Device",
                desc: "Every Bharat Green Volt e-rickshaw is fitted with our IoT telematics unit — a compact device that continuously monitors battery voltage, current draw, temperature, GPS location, and vehicle health. Data is transmitted to the cloud in real time so you always know what is happening with every vehicle on your fleet.",
                image: "/images/technology.png"
              },
              {
                title: "Battery Health You Can Trust",
                subtitle: "Battery Management System (BMS)",
                desc: "Our Battery Management System monitors each cell of the battery pack individually. It prevents overcharging, deep discharge, and overheating — the three main causes of early battery failure. The result is a battery that lasts longer and a driver who never gets stranded unexpectedly.",
                image: "/images/smart-battery.jpg"
              },
              {
                title: "Fleet Control for Dealers",
                subtitle: "Dealer Dashboard",
                desc: "Our web-based dealer dashboard gives you a bird's eye view of your entire fleet. Track vehicle locations, battery levels, payment statuses, and service history — all updated in real time. No spreadsheets. No phone calls to check status. Everything you need in one clean interface.",
                image: "/images/dealer-dashboard.jpg"
              },
              {
                title: "The Co-Pilot in Your Pocket",
                subtitle: "Driver App",
                desc: "The Bharat Green Volt driver app is designed for India's roads. Simple interface, available in Hindi and English, and built to work on low-end Android devices with basic internet connectivity. Drivers use it to check battery status, find charging stations, track earnings, and contact support.",
                image: "/images/home-smart-battery.jpg"
              }
            ].map((tech, index) => (
              <div key={index} className="flex flex-col gap-6 group">
                <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-md">
                  <Image src={tech.image} alt={tech.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      {tech.subtitle}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-3 uppercase tracking-tight">{tech.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed italic">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — TECHNOLOGY BENEFITS */}
      <section className="py-16 sm:py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black uppercase tracking-tight">
              Why Smart Vehicles Make Business Sense
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <div className="min-w-[600px] bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-900 border-b border-gray-800">
                    <th className="p-5 text-white font-bold uppercase tracking-wider text-sm">Benefit</th>
                    <th className="p-5 text-green-500 font-bold uppercase tracking-wider text-sm">For Drivers</th>
                    <th className="p-5 text-green-500 font-bold uppercase tracking-wider text-sm">For Dealers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { b: "Real-time battery monitoring", dr: "Never stranded mid-route", de: "Fewer breakdown complaints" },
                    { b: "GPS fleet tracking", dr: "Know your route history", de: "Full visibility of all vehicles" },
                    { b: "Payment integration", dr: "Pay lease from the app", de: "Automated payment alerts" },
                    { b: "Predictive maintenance alerts", dr: "Service before breakdown", de: "Lower vehicle downtime" },
                    { b: "Data reports", dr: "Track monthly earnings", de: "Make smart restocking decisions" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="p-5 text-black font-bold text-sm uppercase">{row.b}</td>
                      <td className="p-5 text-gray-600 text-sm">{row.dr}</td>
                      <td className="p-5 text-gray-600 text-sm">{row.de}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-6 italic">Scroll horizontally if viewing on mobile</p>
        </div>
      </section>

      {/* SECTION 4 — SECURITY AND DATA */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-600/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-600/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight">Your Data Is Safe With Us</h2>
              </div>
              
              <div className="space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                <p>
                  All data collected by our IoT devices — including driver location, battery data, and trip history 
                  — is stored on a secure, dedicated cloud infrastructure. We comply with India's <strong>Digital 
                  Personal Data Protection Act, 2023</strong>. Driver data is never shared with third parties or used for 
                  any purpose outside of operating your vehicle and lease account.
                </p>
                <p>
                  Our platform is protected with end-to-end encryption, role-based access controls, and 
                  regular security audits. We believe that technology should empower, not expose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

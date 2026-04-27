'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { buildMailtoUrl } from '@/lib/mailto'

export default function Dealers() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const url = buildMailtoUrl({
      to: 'info@bharatgreenvolt.com',
      subject: `Website Enquiry (Dealer Form) — ${(data.get('fullName') as string) || 'New dealer enquiry'}`,
      fields: {
        Page: 'Dealers',
        'Full Name': data.get('fullName'),
        'Business Name': data.get('businessName'),
        'City / District': data.get('city'),
        State: data.get('state'),
        'Mobile Number': data.get('mobileNumber'),
        'Email Address': data.get('emailAddress'),
        'Current Business Type': data.get('businessType'),
        'Starting Vehicles': data.get('vehiclesCount'),
        Message: data.get('message'),
      },
    })

    window.location.href = url
    form.reset()
  }

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-16">
        <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
          <Image
            src="/images/dealer-hero.jpg"
            alt="Partner With Us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-0 right-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
                Partner With Us. <br />
                Power More Roads.
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl font-medium">
                Join the Bharat Green Volt dealer network and build a profitable EV 
                business backed by smart technology, reliable vehicles, and dedicated support.
              </p>
              <div className="mt-6">
                <Link href="#enquiry" className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-bold uppercase transition-colors">
                  Register as a Dealer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section — Why Partner With Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black uppercase tracking-tight">
            Why Dealers Choose Bharat Green Volt
          </h2>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 max-w-6xl mx-auto">
            {[
              { 
                title: "High-Demand Product", 
                desc: "E-rickshaws are the backbone of last-mile transport across India. Demand is growing faster than supply. Our dealers benefit from a ready and proven market.", 
                icon: "/images/home-hero-rickshaw.jpg" 
              },
              { 
                title: "Competitive Margins", 
                desc: "Our direct import-and-assemble model keeps vehicle costs low — giving our dealer partners healthy margins that typical distributors cannot match.", 
                icon: "/images/save-money.png" 
              },
              { 
                title: "Technology That Works For You", 
                desc: "Every dealer gets access to our Dealer Management Dashboard — track your fleet, manage lease customers, monitor payments, and view performance analytics in real time.", 
                icon: "/images/technology.png" 
              },
              { 
                title: "Women-Led, DPIIT-Recognised", 
                desc: "Partnering with a DPIIT-recognised startup means you align with India's green mobility mission. We are also eligible to support dealer applications for government EV schemes and subsidies.", 
                icon: "/images/bharat-logo.png" 
              },
              { 
                title: "Ongoing Marketing Support", 
                desc: "We invest in building the Bharat Green Volt brand so your customers already trust the name when they walk in. Co-branded banners, social media content, and lead referrals are part of the package.", 
                icon: "/images/grow-your-business.jpg" 
              },
              { 
                title: "Dedicated Relationship Manager", 
                desc: "Every dealer partner gets a single point of contact at Bharat Green Volt — someone who knows your business and is available to resolve issues fast.", 
                icon: "/images/engineering.png" 
              }
            ].map((point, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-4 shadow-sm">
                    <img src={point.icon} alt={point.title} className="w-full h-full object-contain" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-black mb-3 uppercase tracking-tight">{point.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section — Dealer Dashboard Features */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch">
            <div className="lg:w-1/2 p-8 sm:p-12 lg:p-20 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-10 leading-tight">Everything You Need.<br />One Dashboard.</h2>
              <div className="space-y-6">
                {[
                  "Real-time fleet tracking — see where every vehicle is at any moment",
                  "Battery health monitoring — get alerts before a battery needs attention",
                  "Lease payment tracker — know who has paid and who is due",
                  "Customer management — driver profiles, documents, and history in one place",
                  "Sales and earnings reports — daily, weekly, and monthly performance at a glance",
                  "Support ticket system — raise and track service requests directly from the dashboard"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M20 6L9 17l-5-5"/></svg>
                    </div>
                    <p className="text-gray-300 group-hover:text-white transition-colors">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <Image
                src="/images/dealer-dashboard.jpg"
                alt="Dealer Dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION — HOW TO BECOME A DEALER */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black uppercase tracking-tight">Three Steps to Getting Started</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Fill the Dealer Registration Form", desc: "Share basic details about your business — location, current operations, and team size. Takes less than 5 minutes." },
              { step: "2", title: "Meet Our Team", desc: "Our regional manager will connect with you within 48 hours for a quick conversation to understand your requirements and answer your questions." },
              { step: "3", title: "Onboard and Launch", desc: "We handle the paperwork, set up your dashboard access, deliver your first stock, and support your launch with marketing materials." }
            ].map((s, i) => (
              <div key={i} className="relative text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold text-black mb-4 uppercase">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed italic">{s.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="#enquiry" className="inline-block bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded font-bold uppercase transition-all shadow-lg">
              Start Your Dealer Application
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION — DEALER ENQUIRY FORM */}
      <section id="enquiry" className="py-16 sm:py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-8 text-center uppercase tracking-tight">Dealer Enquiry Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400">Full Name *</label>
                  <input name="fullName" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-2 focus:ring-green-600 outline-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400">Business Name *</label>
                  <input name="businessName" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-2 focus:ring-green-600 outline-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400">City / District *</label>
                  <input name="city" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-2 focus:ring-green-600 outline-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400">State *</label>
                  <input name="state" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-2 focus:ring-green-600 outline-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400">Mobile Number *</label>
                  <input name="mobileNumber" type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-2 focus:ring-green-600 outline-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400">Email Address *</label>
                  <input name="emailAddress" type="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-2 focus:ring-green-600 outline-none" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-400">Current Business Type</label>
                <select name="businessType" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-2 focus:ring-green-600 outline-none">
                  <option>New Dealer</option>
                  <option>Existing EV Dealer</option>
                  <option>Auto Parts Shop</option>
                  <option>Transport Operator</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-400">How many vehicles are you looking to start with?</label>
                <select name="vehiclesCount" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-2 focus:ring-green-600 outline-none">
                  <option>1–5</option>
                  <option>6–15</option>
                  <option>16–30</option>
                  <option>30+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-400">Message / Any specific queries</label>
                <textarea name="message" rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-2 focus:ring-green-600 outline-none"></textarea>
              </div>

              <div className="space-y-4 pt-4">
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-green-900/10 active:scale-[0.98]">
                  Submit Dealer Application
                </button>
                <p className="text-center text-xs text-gray-400 italic">
                  Our team will contact you within 48 working hours. All information 
                  shared is kept strictly confidential.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

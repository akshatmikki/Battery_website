import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Facebook, Linkedin } from 'lucide-react'

const CORE_TEAM = [
  {
    name: 'Parul Langoo',
    title: 'Founder',
    image: '/images/Parul.jpg',
    facebook: 'https://facebook.com/',
    linkedin: 'https://www.linkedin.com/in/parul-langoo-66299614/',
  },
  {
    name: 'Abhineet Handoo',
    title: 'Co-Founder & CEO',
    image: '/images/Abhineet.jpg',
    facebook: 'https://facebook.com/',
    linkedin: 'https://www.linkedin.com/in/abhineet-handoo-36195017/',
  },
] as const

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />

      {/* SECTION 1 — ABOUT BHARAT GREEN VOLT */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-8 uppercase tracking-tight">
                About Bharat Green Volt
              </h1>
              <div className="space-y-6 text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                <p>
                  Bharat Green Volt Private Limited is an electric vehicle company registered in Faridabad, 
                  Haryana. We assemble, brand, sell, and lease e-rickshaws — built for the people who keep 
                  India moving every day.
                </p>
                <p>
                  We were founded by two women entrepreneurs who saw a simple but stubborn problem: 
                  millions of e-rickshaw drivers across India were stuck in a cycle of daily rentals, paying 
                  money to fleet owners without ever building anything of their own. At the same time, the EV 
                  revolution was happening around them — but not for them.
                </p>
                <p>
                  Bharat Green Volt was created to fix that. We bring affordable electric vehicles, smart 
                  technology, and a fair leasing model directly to drivers and dealers — no unnecessary 
                  middlemen, no complicated processes.
                </p>
                <p className="font-semibold text-black">
                  Our vehicles are assembled at our Faridabad facility using quality-tested components. Every 
                  rickshaw that leaves our floor carries our name, our warranty, and our promise of support.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/office-workspace.jpg" alt="Bharat Green Volt Office" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white font-bold uppercase tracking-widest text-sm">Founded in Faridabad, Haryana</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — OUR MISSION */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8 uppercase tracking-tight">
            Our Mission
          </h2>
          <div className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-green-50 border border-green-100 shadow-sm overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-200/40 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-600/10 rounded-full blur-3xl" />
            
            <p className="relative z-10 text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight italic">
              "To accelerate Bharat's transition to clean mobility by removing the financial and 
              technological barriers of EV ownership — one driver, one dealer, one city at a time."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — OUR VALUES */}
      <section className="py-16 sm:py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black uppercase tracking-tight">
              Our Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              { 
                title: "Accessibility First", 
                desc: "Clean transport should not be a privilege. We design every product and programme to be reachable for drivers and dealers at all income levels.",
                icon: "🌍"
              },
              { 
                title: "Built for Bharat", 
                desc: "Our vehicles, our app, our support — everything is designed for real Indian roads, real Indian users, and real Indian conditions.",
                icon: "🇮🇳"
              },
              { 
                title: "Transparency Always", 
                desc: "No hidden charges. No confusing contracts. We believe that trust is built by saying exactly what we mean and doing exactly what we say.",
                icon: "🤝"
              },
              { 
                title: "Women Leading the Way", 
                desc: "Bharat Green Volt is founded and led by women. We believe that the future of India's mobility sector must include more women at the wheel — in every sense.",
                icon: "👩‍💼"
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all text-center">
                <div className="text-4xl mb-6">{value.icon}</div>
                <h3 className="font-bold text-black text-lg mb-4 uppercase tracking-tight">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE CORE TEAM */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black uppercase tracking-tight">
              The Core Team
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {CORE_TEAM.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-80 w-full bg-white">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="bg-slate-50 px-6 pt-6 pb-7 text-center">
                  <h3 className="text-xl font-bold text-black mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{member.title}</p>

                  <div className="flex items-center justify-center gap-4 pt-5 border-t border-gray-200/70">
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${member.name} on Facebook`}
                      className="h-12 w-12 rounded-full border border-gray-200 bg-white grid place-items-center text-gray-600 hover:text-green-700 hover:border-green-200 hover:bg-green-50 transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${member.name} on LinkedIn`}
                      className="h-12 w-12 rounded-full border border-gray-200 bg-white grid place-items-center text-gray-600 hover:text-green-700 hover:border-green-200 hover:bg-green-50 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY FARIDABAD */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/warehouse-facility.jpg" alt="Faridabad Facility" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 uppercase tracking-tight">
                Why We Started in Faridabad
              </h2>
              <div className="space-y-6 text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                <p>
                  Faridabad is one of Haryana's largest industrial cities — and one of the most important hubs 
                  for last-mile transport in the Delhi-NCR region. Thousands of e-rickshaws operate daily 
                  across its roads, carrying commuters, goods, and livelihoods.
                </p>
                <p>
                  It is also close to key EV testing and certification centres like ICAT Manesar, and sits at the 
                  heart of a growing network of logistics demand from e-commerce and delivery companies.
                </p>
                <p className="text-white font-bold">
                  For us, Faridabad was not just convenient — it was the right place to start building India's 
                  electric transport future.
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

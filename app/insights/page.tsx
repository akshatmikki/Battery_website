import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

const blogPosts = [
  {
    title: "Why E-Rickshaw Drivers Are Switching to Leasing in 2026",
    category: "Driver Stories",
    readTime: "4 min",
    image: "/images/rickshaw-drivers.jpg"
  },
  {
    title: "How IoT Technology Is Changing Fleet Management for Small EV Dealers",
    category: "Technology",
    readTime: "5 min",
    image: "/images/technology.png"
  },
  {
    title: "What Is Battery-as-a-Service and Why It Matters for India's EV Sector",
    category: "Industry Insights",
    readTime: "6 min",
    image: "/images/smart-battery.jpg"
  },
  {
    title: "Government Schemes Available for EV Startups in Haryana in 2026",
    category: "Policy & Schemes",
    readTime: "5 min",
    image: "/images/warehouse-facility.jpg"
  },
  {
    title: "From Daily Rental to Lease Owner: One Driver's Story",
    category: "Driver Stories",
    readTime: "3 min",
    image: "/images/driver-success.jpg"
  },
  {
    title: "The Complete Guide to Starting an EV Dealership in NCR",
    category: "For Dealers",
    readTime: "7 min",
    image: "/images/dealer-dashboard.jpg"
  }
]

export default function Insights() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navigation />

      {/* PAGE HEADER */}
      <section className="pt-24 sm:pt-32 pb-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 uppercase tracking-tight">
            Insights
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            News, stories, and updates from the world of electric mobility and Bharat 
            Green Volt.
          </p>
        </div>
      </section>

      {/* BLOG POST CARDS */}
      <section className="py-16 sm:py-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {blogPosts.map((post, index) => (
              <div key={index} className="group cursor-pointer flex flex-col">
                <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-md mb-6">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/80 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">
                      {post.category}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">
                      {post.readTime} read
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3 leading-snug group-hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 italic mb-4">
                    Exploring the latest trends and stories in the electric mobility sector...
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <span className="text-xs font-bold text-black uppercase tracking-widest border-b-2 border-green-600 pb-1">
                    Read Story
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

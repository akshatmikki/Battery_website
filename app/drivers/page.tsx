import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Drivers() {
  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section with Auto-Rickshaw */}
      <section className="pt-16">
        <div className="relative">
          {/* Hero Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
            <Image
              src="/images/auto.jpg"
              alt="Blue electric auto-rickshaw"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          
          {/* Text Overlay at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent py-6 sm:py-8 px-4">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight">
                DRIVE 150+ KMS A DAY.
                <br />
                DOUBLE YOUR INCOME.
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black mb-6 sm:mb-8 lg:mb-10 text-center">COMPARISON TABLE</h2>
          
          <div className="max-w-xl lg:max-w-3xl mx-auto">
            <div className="grid grid-cols-2 gap-4 lg:gap-8">
              {/* Lead-Acid Column */}
              <div className="bg-[#E2E2E2] rounded-lg p-4 sm:p-6 lg:p-8">
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-black text-center mb-4 lg:mb-6 pb-3 lg:pb-4 border-b border-gray-300">
                  Lead-Acid
                  <br />
                  <span className="font-normal">(Old)</span>
                </h3>
                <ul className="text-xs sm:text-sm lg:text-base text-gray-700 text-center space-y-2 lg:space-y-3">
                  <li>10 hours charging,</li>
                  <li>80km range,</li>
                  <li>Rs. 40,000</li>
                  <li>upfront cost,</li>
                  <li>heavy weight.</li>
                </ul>
              </div>
              
              {/* Bharat Green Volt Column */}
              <div className="bg-[#1F6500] rounded-lg p-4 sm:p-6 lg:p-8">
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white text-center mb-4 lg:mb-6 pb-3 lg:pb-4 border-b border-green-500">
                  Bharat Green Volt
                  <br />
                  <span className="font-normal">(New)</span>
                </h3>
                <ul className="text-xs sm:text-sm lg:text-base text-white text-center space-y-2 lg:space-y-3">
                  <li>Fast charging,</li>
                  <li>150+ km range,</li>
                  <li>Rs. 0 Upfront</li>
                  <li>(Daily Lease),</li>
                  <li>lightweight.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Drivers Section */}
      {/* Empowering Drivers Section */}
<section className="py-10 sm:py-12 lg:py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black text-center">
      EMPOWERING DRIVERS
    </h2>

    <p className="text-xs sm:text-sm lg:text-base text-gray-600 text-center mb-8 lg:mb-12">
      WITH SAFETY, SECURITY & HIGHER EARNINGS
    </p>

    {/* Card */}
    <div className="max-w-md mx-auto lg:max-w-3xl">
      
      <div className="bg-[#899C81] rounded-xl shadow-md overflow-hidden">
        
        <div className="flex flex-col sm:flex-row items-center sm:items-start">
          
          {/* Image */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 m-4 sm:m-6 flex-shrink-0">
            <Image
              src="/images/ayush-driver.png"
              alt="Aayush, Driver"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="px-4 pb-6 sm:px-0 sm:py-6 lg:py-8 text-center sm:text-left">
            
            <p className="text-xs sm:text-sm lg:text-base text-white leading-relaxed mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>

            <p className="text-sm lg:text-base font-semibold text-white">
              Aayush, Driver
            </p>

          </div>
        </div>

      </div>

    </div>
  </div>
</section>

      {/* Female Driver with Phone Section */}
      <section className="relative">
        <div className="relative w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7f0be89ed18707dcf44a3eff24162eb068cb477a-YsN7n66XfCNEHESy2ZX2zLXMmqgWvv.jpg"
            alt="Happy female driver with Bharat app"
            fill
            className="object-cover object-center md:object-top"
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}

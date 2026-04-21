import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'

const teamMembers = [
  {
    name: 'Rajesh Kumar',
    title: 'CEO & Founder',
    image: '/images/team-member-1.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    name: 'Priya Sharma',
    title: 'COO',
    image: '/images/team-member-2.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    name: 'Amit Patel',
    title: 'CTO',
    image: '/images/team-member-3.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    name: 'Vikram Singh',
    title: 'CFO',
    image: '/images/team-member-4.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
]

const storyImages = [
  { src: '/images/image1.png', alt: 'Team group' },
  { src: '/images/image2.png', alt: 'Women drivers' },
  { src: '/images/image3.jpg', alt: 'E-rickshaw' },
  { src: '/images/image4.png', alt: 'Corporate team' },
]

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />

      {/* Hero Section */}
     {/* About Section */}
<section className="pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12 lg:pb-16 bg-[#EAEAEA]">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">    
    {/* Heading */}
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6 text-center">
      ABOUT BHARAT GREEN VOLT
    </h1>

    {/* Description */}
    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-8">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>

    {/* Mission */}
    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-3 text-center">
      OUR MISSION
    </h2>

    <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed">
      "To accelerate Bharat’s transition to clean mobility by removing the financial and technological barriers of battery ownership."
    </p>

  </div>
</section>

      {/* Core Team Section */}
      {/* Core Team Section */}
{/* Core Team Section */}
{/* Core Team Section */}
<section className="py-10 md:py-12 lg:py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black mb-8 lg:mb-10 text-center">
  THE CORE TEAM
</h2>

    {/* GRID → 1 / 2 / 4 */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">      
      {teamMembers.map((member, i) => {
        const isGreen = i % 2 !== 0

        return (
          <div
            key={i}
            className={`rounded-xl p-4 flex items-center justify-between gap-3 
w-full max-w-[280px] lg:max-w-[300px]
${isGreen ? "bg-[#1F6500]" : "bg-[#4F4F4F]"}`}
          >

            {/* LEFT TEXT */}
            <div className="flex flex-col justify-center">
              
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-1">
                {member.name}
              </h4>

              <p className="text-[11px] sm:text-xs text-white/80 mb-2">
                {member.title}
              </p>

              {/* LinkedIn */}
              <img
                src="https://skillicons.dev/icons?i=linkedin"
                alt="LinkedIn"
                className="w-4 h-4 mb-2"
              />

              <p className="text-[11px] sm:text-xs text-white/80 leading-snug max-w-[140px]">
                {member.description}
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-20 h-24 sm:w-20 sm:h-24 flex-shrink-0">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover rounded-md"
              />
            </div>

          </div>
        )
      })}

    </div>
  </div>
</section>

      {/* Our Story/Vision */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        {/* OUR STORY / VISION */}
<div className="w-full">

  {/* ✅ MOBILE LAYOUT */}
  <div className="block lg:hidden space-y-4">

    {/* 1st BIG */}
    <div className="relative h-52 rounded-xl overflow-hidden">
      <Image src={storyImages[0].src} alt="" fill className="object-cover" />
    </div>

    {/* 2 SMALL */}
    <div className="grid grid-cols-2 gap-4">
      <div className="relative h-40 rounded-xl overflow-hidden">
        <Image src={storyImages[1].src} alt="" fill className="object-cover" />
      </div>
      <div className="relative h-40 rounded-xl overflow-hidden">
        <Image src={storyImages[2].src} alt="" fill className="object-cover" />
      </div>
    </div>

    {/* LAST BIG */}
    <div className="relative h-52 rounded-xl overflow-hidden">
      <Image src={storyImages[3].src} alt="" fill className="object-cover" />
    </div>
  </div>

  {/* ✅ DESKTOP LAYOUT */}
  <div className="hidden lg:grid grid-cols-4 gap-1">

    {storyImages.map((img, i) => (
      <div key={i} className="relative h-56 rounded-xl overflow-hidden">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className="object-cover hover:scale-105 transition duration-300"
        />
      </div>
    ))}

  </div>

</div>
      </section>

      <Footer />
    </div>
  )
}

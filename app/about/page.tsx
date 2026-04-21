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
  { src: '/images/story-team-group.jpg', alt: 'Our team working together' },
  { src: '/images/story-ev-charging.jpg', alt: 'EV charging infrastructure' },
  { src: '/images/story-team-outdoor.jpg', alt: 'Team outdoor photo' },
  { src: '/images/story-ev-vehicle.jpg', alt: 'Electric vehicle fleet' },
]

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:gap-16 lg:items-start">
            <div className="lg:w-2/3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 leading-tight">
                ABOUT BHARAT GREEN VOLT
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:max-w-3xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 lg:mb-6">
              OUR MISSION
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed italic">
              &quot;To accelerate Bharat&apos;s transition to clean mobility by removing the financial and technological barriers of battery ownership.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-8 lg:mb-12">
            THE CORE TEAM
          </h2>

          {/* Mobile: Single column, Tablet: 2 columns, Desktop: 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                {/* Image container with consistent aspect ratio */}
                <div className="relative w-full aspect-[4/5] bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Content */}
                <div className="p-4 lg:p-5">
                  <h4 className="font-bold text-base lg:text-lg text-black">{member.name}</h4>
                  <p className="text-sm lg:text-base text-gray-600 mb-2">{member.title}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center justify-center w-8 h-8 lg:w-9 lg:h-9 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin size={16} />
                  </a>
                  <p className="text-sm lg:text-base text-gray-500 mt-3 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story/Vision */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-8 lg:mb-12">
            OUR STORY/VISION
          </h2>

          {/* Mobile: 2x2 grid, Tablet/Desktop: 2x2 grid with larger images */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {storyImages.map((image, i) => (
              <div 
                key={i} 
                className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] rounded-lg overflow-hidden bg-gray-100"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
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

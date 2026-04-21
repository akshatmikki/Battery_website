import Image from "next/image"

export default function BharatLogo({ className = "", height = 40 }: { className?: string; height?: number }) {
  // Maintain aspect ratio based on original image (approximately 4:1 ratio)
  const width = Math.round(height * 4)
  
  return (
    <Image
      src="/images/bharat-logo.png"
      alt="Bharat Green Volt"
      width={width}
      height={height}
      className={`object-contain ${className}`}
      style={{ width: 'auto', height: height }}
    />
  )
}

export function BharatLogoWhite({ className = "", height = 40 }: { className?: string; height?: number }) {
  const width = Math.round(height * 4)
  
  return (
    <Image
      src="/images/bharat-logo.png"
      alt="Bharat Green Volt"
      width={width}
      height={height}
      className={`object-contain brightness-0 invert ${className}`}
      style={{ width: 'auto', height: height }}
    />
  )
}

import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import AboutSection from '@/components/sections/AboutSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden space-y-20">
      <HeroSection id='hero' />
      <ServicesSection id='services' />
      <AboutSection id='about-us' />
      <PortfolioSection id='portfolio' />
      <ContactSection id='contact' />
    </div>
  )
}
import Section from '@/components/ui/section'

export default function AboutSection({id} : {id?: string}) {
  return (
    <Section id={id} background="blur">
      <h3 className="text-4xl font-bold text-center mb-16 text-white">
        About <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text"> Us</span>
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-gray-500 text-lg space-y-4 ">
          <p>
            We're a freelance agency that builds modern websites, web applications and mobile applications for startups, small businesses and enterprises.
          </p>
          <p>Our main focus is delivering to you a product that is maintainble and scales on it's own.</p>
        </div>
      </div>
    </Section>
  )
}
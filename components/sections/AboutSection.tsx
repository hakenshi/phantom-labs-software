

interface AboutSectionProps {
  id?: string
}

export default function AboutSection({id} : AboutSectionProps) {
  return (
    <section id={id} className="relative z-10 py-20 bg-gray/10 border-gray-900 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-center mb-16 text-white">
          About <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text"> Us</span>
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          
        </div>
      </div>
    </section>
  )
}
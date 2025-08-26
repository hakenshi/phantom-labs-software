


interface PortfolioSectionProps {
  id?: string
}


export default function PortfolioSection({id} : PortfolioSectionProps) {
  return (
    <section id={id} className="relative z-10 py-20">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-center mb-16 text-white">
          Recent <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Projects</span>
        </h3>

      </div>
    </section>
  )
}
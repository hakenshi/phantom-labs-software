export default function HeroSection() {
  return (
    <section className="relative z-10 pt-32 min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8 px-6">
        <div className="text-6xl md:text-7xl font-black space-y-4 uppercase">
          <h1 className="text-white">Phantom Labs</h1>
          <h2 className="bg-gradient-to-r from-primary via-sky-600 to-secondary text-transparent bg-clip-text">SOFTWARE</h2>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We build websites and applications.<br />
          Focusing on UX/UI, Good Design, Clean Code and Fast Delivery
        </p>
        <div className="flex gap-4 justify-center pt-8">
          <button className="cursor-pointer px-8 py-4 bg-gradient-to-r from-primary via-sky-700 to-secondary text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg">
            View Our Work
          </button>
          <button className="cursor-pointer px-8 py-4 border border-primary text-primary rounded-full font-semibold hover:bg-gradient-to-r hover:from-primary hover:via-sky-700 hover:to-secondary hover:text-white transition-all">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
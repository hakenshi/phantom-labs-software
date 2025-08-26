import { id } from "zod/v4/locales"

interface ContactSectionProps {
  id?: string
}


export default function ContactSection({id} : ContactSectionProps) {
  return (
    <section id={id} className="relative z-10 py-20 bg-gray-900/5 backdrop-blur-sm">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold mb-8 text-white">
          Ready to <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Start</span>?
        </h3>
        <p className="text-xl text-gray-600 mb-8">Let's discuss your next project</p>
        <button className="px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-xl">
          Contact Us
        </button>
      </div>
    </section>
  )
}
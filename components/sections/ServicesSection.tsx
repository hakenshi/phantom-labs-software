'use client'

import Section from '@/components/ui/section'
import { motion } from 'motion/react'

interface ServicesSectionProps {
  id?: string
}

const services = [
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user experiences that convert visitors into customers.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    icon: "💻",
    title: "Web Development",
    description: "Building fast, scalable, and responsive web applications using modern technologies.",
    features: ["React/Next.js", "TypeScript", "Tailwind CSS", "API Integration"]
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    description: "Developing cross-platform mobile applications that work seamlessly on all devices.",
    features: ["React Native", "Flutter", "iOS/Android", "App Store Deploy"]
  },
  {
    icon: "🚀",
    title: "Performance",
    description: "Optimizing applications for speed, SEO, and user experience across all platforms.",
    features: ["Core Web Vitals", "SEO Optimization", "Speed Testing", "Analytics"]
  },
  {
    icon: "🔧",
    title: "Maintenance",
    description: "Providing ongoing support, updates, and maintenance for your digital products.",
    features: ["Bug Fixes", "Security Updates", "Feature Updates", "24/7 Support"]
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    description: "Deploying and managing applications on cloud platforms for maximum reliability.",
    features: ["AWS/Vercel", "CI/CD Pipelines", "Database Management", "Monitoring"]
  }
]

export default function ServicesSection({ id }: ServicesSectionProps) {
  return (
    <Section className="py-32 relative" id={id}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center glass-card px-6 py-3 rounded-full mb-8">
            <span className="text-sm text-white/80 uppercase tracking-wider">Our Services</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gradient-white mb-6">
            What We Do Best
          </h2>
          
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions to help your business thrive in the modern world.
            From concept to deployment, we've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group cursor-pointer"
            >
              <div className="glass-card p-8 rounded-3xl h-full shadow-glow-hover transition-all duration-300 relative overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-4xl mb-6 float">
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gradient-primary mb-4">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span className="text-sm text-white/60">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Hover arrow */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center text-blue-400 text-sm font-medium">
                      <span>Learn more</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gradient-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/60 mb-8 text-lg">
              Let's discuss how we can help bring your vision to life with our expertise and passion.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-button button-glow px-10 py-4 rounded-2xl font-semibold shadow-glow-hover group relative overflow-hidden"
            >
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
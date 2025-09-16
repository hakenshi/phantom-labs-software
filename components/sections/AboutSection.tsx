'use client'

import Section from '@/components/ui/section'
import { motion } from 'motion/react'

interface AboutSectionProps {
  id?: string
}

const stats = [
  { number: "50+", label: "Projects Completed", description: "Successfully delivered projects" },
  { number: "98%", label: "Client Satisfaction", description: "Happy clients worldwide" },
  { number: "3+", label: "Years Experience", description: "In software development" },
  { number: "24/7", label: "Support Available", description: "Always here to help" }
]

const values = [
  {
    icon: "⚡",
    title: "Performance First",
    description: "We prioritize speed and efficiency in everything we build, ensuring your applications run smoothly."
  },
  {
    icon: "🎯",
    title: "User-Centered",
    description: "Every decision we make is guided by user needs and business objectives for maximum impact."
  },
  {
    icon: "🔧",
    title: "Quality Code",
    description: "Clean, maintainable, and scalable code that stands the test of time and growth."
  },
  {
    icon: "🚀",
    title: "Innovation",
    description: "We stay ahead of the curve, using cutting-edge technologies and best practices."
  }
]

export default function AboutSection({ id }: AboutSectionProps) {
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
            <span className="text-sm text-white/80 uppercase tracking-wider">About Us</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gradient-white mb-6">
            Crafting Digital Excellence
          </h2>
          
          <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed">
            We are a passionate team of developers and designers dedicated to creating exceptional digital experiences. 
            Our mission is to transform ideas into powerful, scalable solutions that drive business growth.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-3xl font-bold text-gradient-primary mb-6">Our Story</h3>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between innovative technology and practical business solutions, 
                  Phantom Labs has grown from a small team of passionate developers into a trusted partner for businesses worldwide.
                </p>
                <p>
                  We believe that great software is not just about code – it's about understanding people, solving real problems, 
                  and creating experiences that make a difference. Every project we take on is an opportunity to push boundaries 
                  and deliver something extraordinary.
                </p>
                <p>
                  Our approach combines technical expertise with creative thinking, ensuring that every solution we deliver 
                  is not only functional but also beautiful, intuitive, and built to last.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gradient-primary mb-8">Our Values</h3>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 rounded-2xl cursor-pointer group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-2xl float-delayed">{value.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-white/60 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-12 rounded-3xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gradient-white mb-4">
              Numbers That Matter
            </h3>
            <p className="text-white/60 text-lg">
              Our track record speaks for itself
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center group cursor-pointer"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2 group-hover:text-shadow-glow transition-all">
                  {stat.number}
                </div>
                <div className="text-white font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-white/50 text-sm">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gradient-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-white/60 mb-8 text-lg">
              Let's discuss your project and see how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-button button-glow px-8 py-4 rounded-2xl font-semibold shadow-glow-hover group relative overflow-hidden"
              >
                <span className="relative z-10">View Our Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-button button-glow px-8 py-4 rounded-2xl font-semibold border-white/20 hover:border-white/40 group relative overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
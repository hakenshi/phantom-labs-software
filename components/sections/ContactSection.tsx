'use client'

import Section from '@/components/ui/section'
import { motion } from 'motion/react'

interface ContactSectionProps {
  id?: string
}

const contactMethods = [
  {
    icon: "📧",
    title: "Email Us",
    description: "Send us an email and we'll get back to you within 24 hours.",
    contact: "hello@phantomlabs.dev",
    action: "Send Email"
  },
  {
    icon: "💬",
    title: "Live Chat",
    description: "Chat with our team in real-time for immediate assistance.",
    contact: "Available 9AM - 6PM EST",
    action: "Start Chat"
  },
  {
    icon: "📞",
    title: "Schedule Call",
    description: "Book a free consultation call to discuss your project.",
    contact: "30-minute free consultation",
    action: "Book Call"
  }
]

const socialLinks = [
  { name: "GitHub", icon: "🐙", url: "#" },
  { name: "LinkedIn", icon: "💼", url: "#" },
  { name: "Twitter", icon: "🐦", url: "#" },
  { name: "Discord", icon: "🎮", url: "#" }
]

export default function ContactSection({ id }: ContactSectionProps) {
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
            <span className="text-sm text-white/80 uppercase tracking-wider">Get In Touch</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gradient-white mb-6">
            Let's Build Something Amazing
          </h2>
          
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? We'd love to hear about your project 
            and discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-3xl font-bold text-gradient-primary mb-8">Send us a message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-3">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full glass-button px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-3">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full glass-button px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full glass-button px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-3">
                    Project Type
                  </label>
                  <select className="w-full glass-button px-4 py-3 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all">
                    <option value="">Select a project type</option>
                    <option value="web">Web Application</option>
                    <option value="mobile">Mobile App</option>
                    <option value="design">UI/UX Design</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-3">
                    Project Budget
                  </label>
                  <select className="w-full glass-button px-4 py-3 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all">
                    <option value="">Select budget range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-3">
                    Tell us about your project
                  </label>
                  <textarea
                    rows={4}
                    className="w-full glass-button px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all resize-none"
                    placeholder="Describe your project, goals, and any specific requirements..."
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full glass-button button-glow py-4 rounded-xl font-semibold shadow-glow-hover group relative overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Methods & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gradient-primary mb-8">Other ways to reach us</h3>
              
              {contactMethods.map((method, index) => (
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
                    <div className="text-2xl float">{method.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {method.title}
                      </h4>
                      <p className="text-white/60 mb-3 leading-relaxed">
                        {method.description}
                      </p>
                      <div className="text-blue-400 font-medium text-sm mb-3">
                        {method.contact}
                      </div>
                      <div className="flex items-center text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>{method.action}</span>
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-3xl">
              <h4 className="text-2xl font-bold text-gradient-white mb-6">Follow Us</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-button p-4 rounded-xl text-center group transition-all duration-300"
                  >
                    <div className="text-2xl mb-2 float-delayed">{social.icon}</div>
                    <div className="text-white/80 text-sm group-hover:text-white transition-colors">
                      {social.name}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="glass-card p-8 rounded-3xl">
              <h4 className="text-2xl font-bold text-gradient-white mb-6">Quick Info</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white/80">Currently accepting new projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white/80">Response time: Within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-white/80">Free consultation available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-12 border-t border-white/10"
        >
          <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient-white mb-4">
              Phantom Labs Software
            </h3>
            <p className="text-white/60 mb-6">
              Transforming ideas into exceptional digital experiences since 2021.
            </p>
            <div className="text-white/40 text-sm">
              © 2024 Phantom Labs. All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
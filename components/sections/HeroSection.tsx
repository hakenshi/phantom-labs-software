'use client'

import Section from '@/components/ui/section'
import { Button } from '../ui/button'
import { motion } from 'motion/react'

interface HeroSectionProps {
  id?: string
}

export default function HeroSection({ id }: HeroSectionProps) {
  return (
    <Section className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className="glass px-8 py-4 rounded-2xl">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-bold text-gradient-primary">
              Phantom Labs
            </div>
            <div className="hidden md:flex space-x-6 text-sm">
              <a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a>
              <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
              <a href="#portfolio" className="text-white/70 hover:text-white transition-colors">Portfolio</a>
              <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </motion.nav>
      
      {/* Main Hero Content */}
      <div className="relative z-10 text-center space-y-12 px-6 max-w-6xl mx-auto">
        {/* Hero Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex items-center"
        >
          <div className="glass-card px-6 py-3 rounded-full">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-white/80">Available for new projects</span>
            </div>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
            <div className="text-gradient-white text-shadow-soft mb-4">
              PHANTOM
            </div>
            <div className="text-gradient-primary text-shadow-glow">
              LABS
            </div>
          </h1>
          
          <div className="text-2xl md:text-3xl font-light text-gradient-accent">
            SOFTWARE DEVELOPMENT
          </div>
        </motion.div>
        
        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light"
        >
          We craft exceptional digital experiences through innovative web applications, 
          focusing on cutting-edge design, clean architecture, and lightning-fast performance.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="glass-button button-glow px-10 py-6 text-lg font-semibold rounded-2xl shadow-glow-hover group relative overflow-hidden"
              size="lg"
            >
              <span className="relative z-10">View Our Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="glass-button button-glow px-10 py-6 text-lg font-semibold rounded-2xl border-white/20 hover:border-white/40 group relative overflow-hidden"
              variant="outline"
              size="lg"
            >
              <span className="relative z-10">Start a Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto"
        >
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-8 rounded-2xl text-center shadow-glow-hover cursor-pointer"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                {stat.number}
              </div>
              <div className="text-white/60 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="glass-card p-4 rounded-full cursor-pointer"
        >
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </Section>
  )
}
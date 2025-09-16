'use client'

import Section from '@/components/ui/section'
import { motion } from 'motion/react'

interface PortfolioSectionProps {
  id?: string
}

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with advanced features including real-time inventory, payment processing, and analytics dashboard.",
    image: "/project.png",
    tags: ["React", "Next.js", "Stripe", "PostgreSQL"],
    category: "Web Application",
    status: "Live"
  },
  {
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication, transaction history, and budget tracking features.",
    image: "/project.png",
    tags: ["React Native", "Node.js", "MongoDB", "JWT"],
    category: "Mobile App",
    status: "In Development"
  },
  {
    title: "SaaS Dashboard",
    description: "Comprehensive analytics dashboard for SaaS companies with real-time metrics, user management, and reporting tools.",
    image: "/project.png",
    tags: ["Vue.js", "TypeScript", "D3.js", "Firebase"],
    category: "Dashboard",
    status: "Live"
  },
  {
    title: "Healthcare Portal",
    description: "Patient management system with appointment scheduling, medical records, and telemedicine capabilities.",
    image: "/project.png",
    tags: ["Angular", "Python", "Django", "AWS"],
    category: "Web Application",
    status: "Live"
  },
  {
    title: "AI-Powered CRM",
    description: "Customer relationship management system with AI-driven insights, automated workflows, and predictive analytics.",
    image: "/project.png",
    tags: ["React", "Python", "TensorFlow", "Redis"],
    category: "AI/ML",
    status: "Beta"
  },
  {
    title: "Real Estate Platform",
    description: "Property listing and management platform with virtual tours, mortgage calculator, and agent portal.",
    image: "/project.png",
    tags: ["Next.js", "Prisma", "Tailwind", "Vercel"],
    category: "Web Application",
    status: "Live"
  }
]

const categories = ["All", "Web Application", "Mobile App", "Dashboard", "AI/ML"]

export default function PortfolioSection({ id }: PortfolioSectionProps) {
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
            <span className="text-sm text-white/80 uppercase tracking-wider">Our Portfolio</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gradient-white mb-6">
            Featured Projects
          </h2>
          
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Explore our latest work and see how we've helped businesses transform their digital presence 
            with innovative solutions and cutting-edge technology.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`glass-button px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0 
                  ? 'bg-blue-500/20 border-blue-400/50 text-blue-300' 
                  : 'border-white/20 text-white/70 hover:text-white hover:border-white/40'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group cursor-pointer"
            >
              <div className="glass-card rounded-3xl overflow-hidden shadow-glow-hover transition-all duration-300 relative">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`glass-card px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' 
                        ? 'text-green-300 border-green-400/30' 
                        : project.status === 'Beta'
                        ? 'text-yellow-300 border-yellow-400/30'
                        : 'text-blue-300 border-blue-400/30'
                    }`}>
                      {project.status}
                    </div>
                  </div>
                  
                  {/* Category */}
                  <div className="absolute bottom-4 left-4">
                    <div className="glass-card px-3 py-1 rounded-full text-xs text-white/80">
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gradient-primary mb-3 group-hover:text-shadow-glow transition-all">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="glass-card px-3 py-1 rounded-full text-xs text-white/60 border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* View Project Link */}
                  <div className="flex items-center text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Project</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gradient-white mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-white/60 mb-8 text-lg">
              Let's bring your vision to life with our expertise and passion for creating exceptional digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-button button-glow px-10 py-4 rounded-2xl font-semibold shadow-glow-hover group relative overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-button button-glow px-10 py-4 rounded-2xl font-semibold border-white/20 hover:border-white/40 group relative overflow-hidden"
              >
                <span className="relative z-10">View All Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
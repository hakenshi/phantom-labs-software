'use client'

import Section from '@/components/ui/section'
import GridBackground from '@/components/ui/GridBackground'
import { Button } from '../ui/button'
import { motion } from 'motion/react'

interface HeroSectionProps {
  id?: string
}

export default function HeroSection({ id }: HeroSectionProps) {
  return (
    <Section className="pt-32 min-h-screen flex items-center justify-center relative overflow-hidden">
      <GridBackground />
      
      <motion.div 
        initial={{ opacity: 0, y: 100, filter: 'blur(5px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative z-10 text-center space-y-8 px-6"
      >
        <div className="text-6xl md:text-7xl font-black space-y-4 uppercase">
          <h1 className="text-gradient-white text-shadow">
            Phantom Labs
          </h1>
          <h2 className="text-gradient-blue text-shadow">
            SOFTWARE
          </h2>
        </div>
        
        <p className="text-xl text-white/40 max-w-2xl mx-auto leading-relaxed">
          We build websites and applications.<br />
          Focusing on UX/UI, Good Design, Clean Code and Fast Delivery
        </p>
        
        <div className="flex gap-4 justify-center pt-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className='font-semibold px-12 py-8 rounded-full' size={'lg'} variant={"outline"}>
              Our Portfolio            
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className='font-semibold px-12 py-8 rounded-full' size={'lg'} variant={"outline"}>
              Contact Us            
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  )
}
'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about-section"
      ref={ref}
      className="relative py-20 lg:py-32 bg-gradient-to-b from-black via-veqlyx-gray-900 to-black border-t-2 border-veqlyx-red"
    >
      {/* Background decorative element */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-veqlyx-red/5 rounded-full blur-3xl opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              About <span className="text-gradient">Veqlyx</span>
            </h2>
            
            <div className="space-y-6 text-lg text-veqlyx-gray-300 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Veqlyx is the all-in-one content publishing and collaboration platform built for creators, 
                agencies, and teams who value speed, control, and security.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                With advanced workflows, multi-channel publishing, and rock-solid privacy, 
                we help you focus on creating — while we handle the rest.
              </motion.p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/about">
              <Button 
                variant="outline" 
                size="lg" 
                className="group hover:bg-veqlyx-red hover:border-veqlyx-red transition-all duration-300"
              >
                Read Our Story
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default AboutSection
    
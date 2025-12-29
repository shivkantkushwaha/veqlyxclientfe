'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Zap, Users, Target, Heart, Lightbulb } from 'lucide-react'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-veqlyx-gray-900 to-black">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-6xl font-bold text-white mb-6"
            >
              About <span className="text-gradient">Veqlyx</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-veqlyx-gray-300 leading-relaxed"
            >
              Building the future of secure content collaboration for creators worldwide
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 border-t-2 border-veqlyx-red">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Our Story</h2>
              
              <div className="space-y-6 text-lg text-veqlyx-gray-300 leading-relaxed text-left">
                <p>
                  Veqlyx was born from a real creator's frustration. As content creators grew their channels 
                  and started working with editors, a critical problem emerged: the impossible choice between 
                  productivity and security.
                </p>
                
                <p>
                  Creators faced a dilemma - either give full YouTube channel access to editors (risking 
                  their entire brand) or manually handle every upload themselves (wasting precious time and 
                  dealing with poor internet connections while traveling).
                </p>
                
                <p>
                  We realized that YouTube's native collaboration features weren't built for the modern 
                  creator economy. There was no secure middle ground - no way to enable seamless collaboration 
                  while maintaining absolute control over what gets published.
                </p>
                
                <p>
                  That's why we built Veqlyx - the secure approval-first platform that acts as a trusted 
                  middleware between creators and their teams. Now, editors can upload, creators can approve 
                  with a single click, and content gets published automatically - all without ever sharing 
                  channel access.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Our Mission & Values</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  description: "Empower creators to scale their content production without compromising security, privacy, or brand control."
                },
                {
                  icon: Shield,
                  title: "Security First",
                  description: "Every feature we build prioritizes creator privacy and content security. Your trust is our foundation."
                },
                {
                  icon: Zap,
                  title: "Workflow Excellence",
                  description: "Eliminate friction in content workflows. Focus on creating, not on logistics and file management."
                },
                {
                  icon: Users,
                  title: "Team Collaboration",
                  description: "Enable seamless team collaboration without sacrificing individual creator control and oversight."
                },
                {
                  icon: Heart,
                  title: "Creator-Centric",
                  description: "Built by creators, for creators. We understand your pain points because we've lived them."
                },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description: "Continuously pushing boundaries to solve problems that other platforms won't address."
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-veqlyx-gray-800/50 p-8 rounded-2xl border border-veqlyx-red/20 hover:border-veqlyx-red/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-red-black rounded-lg flex items-center justify-center mb-6">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-veqlyx-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-20 border-t-2 border-veqlyx-red">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">The Problem We Solve</h2>
              
              <div className="grid md:grid-cols-2 gap-12 text-left">
                <div>
                  <h3 className="text-2xl font-bold text-veqlyx-red mb-6">The Old Way (Broken)</h3>
                  <ul className="space-y-4 text-veqlyx-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Creators give full channel access to editors
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Risk of unauthorized uploads or deletions
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Manual download/upload processes
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      No approval workflow or audit trail
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Slow file transfers and upload issues
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-veqlyx-success mb-6">The Veqlyx Way (Fixed)</h3>
                  <ul className="space-y-4 text-veqlyx-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-veqlyx-success rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Zero channel access sharing required
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-veqlyx-success rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Approval-first publishing workflow
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-veqlyx-success rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Direct cloud-to-YouTube transfers
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-veqlyx-success rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Complete audit trail and notifications
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-veqlyx-success rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Optimized for large files (10-100GB)
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section (Future) */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Built with Passion</h2>
              
              <p className="text-lg text-veqlyx-gray-300 leading-relaxed mb-8">
                Veqlyx is crafted by a team of creators, developers, and security experts who understand 
                the unique challenges of content production at scale. We're not just building software - 
                we're solving real problems we've experienced ourselves.
              </p>
              
              <div className="bg-veqlyx-gray-800/30 border border-veqlyx-red/20 rounded-2xl p-8">
                <p className="text-veqlyx-red font-semibold text-lg mb-4">
                  "Privacy, security, and creator control aren't just features - they're our core principles."
                </p>
                <p className="text-veqlyx-gray-400">
                  — The Veqlyx Team
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
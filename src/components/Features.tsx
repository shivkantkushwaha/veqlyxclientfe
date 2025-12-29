'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Shield, 
  Zap, 
  Lock, 
  Clock, 
  Users, 
  FileVideo,
  Bell,
  BarChart3,
  ArrowRight,
  Sparkles,
  Globe,
  Database
} from 'lucide-react'

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4])

  const features = [
    {
      icon: Shield,
      title: "Military-Grade Security",
      description: "End-to-end AES-256 encryption with zero video storage policy. Your content never sits on our servers permanently - it's processed and forwarded instantly.",
      highlights: ["256-bit AES Encryption", "Zero Data Retention", "SOC 2 Compliant", "GDPR Ready"],
      gradient: "from-red-500 via-rose-500 to-pink-500",
      glowColor: "red-500/20",
      delay: 0
    },
    {
      icon: Zap,
      title: "Lightning-Fast Processing",
      description: "Upload and process videos up to 256GB at blazing speeds. Optimized infrastructure handles 4K/8K content without compression artifacts.",
      highlights: ["256GB File Support", "4K/8K Processing", "Sub-second Preview", "99.9% Uptime SLA"],
      gradient: "from-amber-500 via-orange-500 to-red-500",
      glowColor: "amber-500/20",
      delay: 0.1
    },
    {
      icon: Users,
      title: "Advanced Team Management",
      description: "Granular role-based access control with approval hierarchies. Perfect for agencies managing multiple creators and complex workflows.",
      highlights: ["Role-Based Access", "Team Workspaces", "Approval Hierarchies", "Activity Tracking"],
      gradient: "from-violet-500 via-purple-500 to-rose-500",
      glowColor: "violet-500/20",
      delay: 0.2
    },
    {
      icon: Bell,
      title: "Intelligent Notifications",
      description: "Multi-channel alert system with smart routing. Get notified via email, SMS, WhatsApp, or push notifications with customizable triggers.",
      highlights: ["Multi-Channel Alerts", "Smart Routing", "Custom Triggers", "Real-Time Updates"],
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      glowColor: "emerald-500/20",
      delay: 0.3
    },
    {
      icon: BarChart3,
      title: "Enterprise Analytics",
      description: "Comprehensive audit trails and performance insights. Track approval times, team efficiency, and content metrics with exportable reports.",
      highlights: ["Audit Trails", "Performance Insights", "Custom Reports", "Data Export"],
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      glowColor: "blue-500/20",
      delay: 0.4
    },
    {
      icon: Globe,
      title: "Multi-Platform Publishing",
      description: "Beyond YouTube - publish to Instagram, Facebook, LinkedIn, and TikTok with the same approval workflow. One platform, infinite reach.",
      highlights: ["Multi-Platform Support", "Unified Workflow", "Cross-Platform Sync", "Custom Integrations"],
      gradient: "from-rose-500 via-pink-500 to-red-500",
      glowColor: "rose-500/20",
      delay: 0.5
    }
  ]

  return (
    <section id="features" ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Premium Background with Parallax */}
      <div className="absolute inset-0">
        <motion.div 
          style={{ y: backgroundY, opacity }}
          className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 360, 720],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 -left-96 w-96 h-96 bg-gradient-to-r from-red-500/10 to-rose-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [720, 360, 0],
            opacity: [0.08, 0.18, 0.08]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 -right-96 w-80 h-80 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.4, 1],
            rotate: [0, -360, -720],
            opacity: [0.03, 0.12, 0.03]
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-r from-amber-500/8 to-orange-500/8 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-black/90 to-gray-900/90 backdrop-blur-2xl border border-rose-500/30 rounded-full px-8 py-4 mb-10 shadow-2xl"
          >
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-red-500 to-rose-500 rounded-full animate-pulse" />
            <Database className="w-5 h-5 text-rose-400" />
            <span className="text-sm font-bold text-gray-200 tracking-widest">ENTERPRISE FEATURES</span>
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full animate-pulse" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight"
          >
            Powerful Features to{' '}
            <span className="bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 bg-clip-text text-transparent">
              Elevate
            </span>
            <br />
            <span className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-300">
              Your Workflow
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Enterprise-grade infrastructure meets intuitive design. Built for creators who demand 
            security, speed, and scalability without compromising on user experience.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 max-w-8xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 1, 
                  delay: feature.delay,
                  ease: [0.23, 1, 0.32, 1]
                }}
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="group relative cursor-pointer perspective-1000"
              >
                {/* Glow Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ 
                    opacity: 0.4,
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                  className={`absolute -inset-6 bg-gradient-to-r ${feature.gradient} blur-2xl rounded-3xl opacity-0 group-hover:opacity-30 transition-all duration-500`}
                />
                
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 backdrop-blur-2xl border border-gray-700/50 hover:border-rose-500/50 rounded-3xl p-8 lg:p-10 h-full transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-rose-500/10">
                  
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: [1, 1.1, 1],
                      transition: { duration: 0.6 }
                    }}
                    className={`relative w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} p-0.5 mb-8 shadow-2xl group-hover:shadow-xl transition-all duration-500`}
                  >
                    <div className="w-full h-full bg-black/60 backdrop-blur-xl rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-9 h-9 text-white group-hover:text-gray-100 transition-colors duration-300" />
                    </div>
                    
                    {/* Icon Glow */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ 
                        opacity: 0.6,
                        scale: 1.2,
                        transition: { duration: 0.3 }
                      }}
                      className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} blur-xl rounded-2xl -z-10`}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 group-hover:text-rose-300 transition-colors duration-300 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-lg font-light group-hover:text-gray-200 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>

                    {/* Feature Highlights */}
                    <div className="space-y-3">
                      {feature.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: feature.delay + (0.1 * idx),
                            duration: 0.5 
                          }}
                          className="flex items-center gap-3 group/item"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 90 }}
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} shadow-lg flex-shrink-0`}
                          />
                          <span className="text-sm text-gray-400 group-hover/item:text-rose-300 transition-colors duration-300 font-medium">
                            {highlight}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: feature.delay + 0.5 }}
                      className="pt-4 border-t border-gray-800 group-hover:border-rose-500/30 transition-colors duration-500"
                    >
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-rose-400 group-hover:text-rose-300 transition-colors duration-300 cursor-pointer"
                      >
                        <span className="text-sm font-semibold">Learn more</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Hover State Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ 
                      opacity: 0.05,
                      transition: { duration: 0.3 }
                    }}
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl pointer-events-none`}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-24"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center justify-center gap-6 text-gray-400 text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-rose-400" />
              <span>Enterprise Security</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-rose-400" />
              <span>24/7 Support</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-400" />
              <span>99.9% Uptime SLA</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features

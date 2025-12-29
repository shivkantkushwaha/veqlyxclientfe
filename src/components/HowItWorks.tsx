'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { 
  Upload, 
  Shield, 
  CheckCircle, 
  Zap, 
  Eye, 
  Clock,
  ArrowRight,
  User,
  Youtube,
  Sparkles,
  Play,
  Bell,
  Lock,
  Settings2
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const HowItWorks = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const steps = [
    {
      id: 1,
      title: "Secure Upload",
      subtitle: "Editor uploads without channel access",
      description: "Your editors upload videos directly to our military-grade encrypted platform. Zero channel access needed, maximum security guaranteed.",
      icon: Upload,
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      glowColor: "emerald-500/20",
      features: ["256-bit AES Encryption", "Up to 256GB Files", "Real-time Progress", "Auto-compression"]
    },
    {
      id: 2,
      title: "Instant Preview",
      subtitle: "Lightning-fast notification & preview",
      description: "Get notified instantly across all your devices. Preview videos in HD without downloading a single byte. Mobile-optimized interface.",
      icon: Eye,
      gradient: "from-violet-500 via-purple-500 to-indigo-500",
      glowColor: "purple-500/20",
      features: ["Multi-channel Alerts", "HD Preview Stream", "Mobile Optimized", "Offline Notifications"]
    },
    {
      id: 3,
      title: "Smart Approval",
      subtitle: "One-click approval with full control",
      description: "Approve, reject, or request changes instantly. Advanced commenting system with timestamp precision. You control everything.",
      icon: CheckCircle,
      gradient: "from-rose-500 via-pink-500 to-red-500",
      glowColor: "rose-500/20",
      features: ["One-click Actions", "Timestamp Comments", "Revision Tracking", "Approval History"]
    },
    {
      id: 4,
      title: "Auto-Publish",
      subtitle: "Seamless YouTube integration",
      description: "Once approved, videos publish automatically to your YouTube channel with complete audit trails and scheduling options.",
      icon: Youtube,
      gradient: "from-amber-500 via-orange-500 to-red-500",
      glowColor: "orange-500/20",
      features: ["Auto Publishing", "Schedule Posts", "Audit Trails", "Multi-channel Support"]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView) return

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isInView, steps.length])

  const cardOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])
  const cardScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <section id="how-it-works" ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-64 w-96 h-96 bg-gradient-to-r from-red-500/10 to-rose-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-64 w-80 h-80 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-xl border border-red-500/20 rounded-full px-6 py-3 mb-8 shadow-2xl"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-rose-500 rounded-full animate-pulse" />
            <Sparkles className="w-5 h-5 text-red-400" />
            <span className="text-sm font-semibold text-gray-200 tracking-wide">ENTERPRISE WORKFLOW</span>
            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full animate-pulse" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
          >
            How{' '}
            <span className="bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 bg-clip-text text-transparent">
              Veqlyx
            </span>
            <br />
            <span className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-300">
              Transforms Your Workflow
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Four revolutionary steps to eliminate trust barriers, maintain complete control, 
            and accelerate your content pipeline with enterprise-grade security.
          </motion.p>
        </motion.div>

        {/* Premium Card Showcase */}
        <motion.div
          ref={cardsRef}
          style={{ opacity: cardOpacity, scale: cardScale }}
          className="relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isActive = currentStep === index
              const isNext = currentStep === (index - 1 + steps.length) % steps.length
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 100, rotateX: 45 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1, 
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className={`relative group cursor-pointer perspective-1000 ${
                    index % 2 === 1 ? 'lg:mt-16' : ''
                  }`}
                  onMouseEnter={() => setCurrentStep(index)}
                >
                  {/* Glow Effect */}
                  <motion.div
                    animate={isActive ? {
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    } : {}}
                    transition={{ duration: 3, repeat: Infinity }}
                    className={`absolute -inset-4 bg-gradient-to-r ${step.gradient} blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-500 rounded-3xl`}
                  />
                  
                  {/* Main Card */}
                  <div className={`relative bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 backdrop-blur-2xl border rounded-3xl p-8 lg:p-10 h-full transition-all duration-700 ${
                    isActive 
                      ? `border-red-500/60 shadow-2xl shadow-red-500/20` 
                      : isNext
                      ? `border-gray-600/60 shadow-xl shadow-gray-500/10`
                      : `border-gray-700/40 shadow-lg`
                  }`}>
                    
                    {/* Step Indicator */}
                    <div className="flex items-center justify-between mb-8">
                      <motion.div
                        animate={isActive ? { 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${step.gradient} p-0.5 shadow-2xl`}
                      >
                        <div className="w-full h-full bg-black/50 backdrop-blur-xl rounded-2xl flex items-center justify-center">
                          <span className="text-2xl font-black text-white">{step.id}</span>
                        </div>
                      </motion.div>
                      
                      <div className={`px-4 py-2 rounded-full text-xs font-bold tracking-widest ${
                        isActive 
                          ? 'bg-gradient-to-r from-red-500/20 to-rose-500/20 text-red-300 border border-red-500/30'
                          : 'bg-gray-800/50 text-gray-400 border border-gray-600/30'
                      }`}>
                        STEP {step.id}
                      </div>
                    </div>

                    {/* Icon */}
                    <motion.div
                      animate={isActive ? { 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${step.gradient} p-0.5 mb-8 mx-auto lg:mx-0 shadow-2xl`}
                    >
                      <div className="w-full h-full bg-black/50 backdrop-blur-xl rounded-3xl flex items-center justify-center">
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <h3 className="text-3xl lg:text-4xl font-black text-white mb-3 group-hover:text-red-300 transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-lg font-semibold text-red-400 mb-4 tracking-wide">
                          {step.subtitle}
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg font-light">
                          {step.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-4">
                        {step.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * idx + index * 0.2 }}
                            className="flex items-center gap-3 group/feature"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.gradient} shadow-lg`} />
                            <span className="text-sm text-gray-400 group-hover/feature:text-gray-200 transition-colors duration-300 font-medium">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Active State Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isActive ? 0.1 : 0 }}
                      transition={{ duration: 0.5 }}
                      className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-3xl pointer-events-none`}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Progress Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center mt-16 gap-3"
        >
          {steps.map((_, index) => (
            <motion.div
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                currentStep === index
                  ? 'bg-gradient-to-r from-red-500 to-rose-500 shadow-lg shadow-red-500/50'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="xl" 
              className="group relative bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 hover:from-red-500 hover:via-rose-500 hover:to-pink-500 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl border border-red-500/50 rounded-2xl overflow-hidden transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <Zap className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              Start Free Trial✨
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-gray-400 mt-6 text-lg font-light"
          >
            No credit card required • Enterprise-grade security • Setup in 60 Seconds
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
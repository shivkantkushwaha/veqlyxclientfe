'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Shield, Zap, Users, CheckCircle, Play, Clock, User, X, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Hero = () => {
  // ========== DEMO POPUP STATE MANAGEMENT ==========
  // State to control the visibility of the maintenance popup for demo button
  const [showDemoPopup, setShowDemoPopup] = useState(false)
  
  // Function to handle demo button click and show maintenance popup
  const handleDemoClick = () => {
    setShowDemoPopup(true)
  }
  
  // Function to close the maintenance popup
  const closeDemoPopup = () => {
    setShowDemoPopup(false)
  }
  // ===============================================

  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-20">
      {/* Background with animated blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-veqlyx-gray-900 to-black">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-veqlyx-red/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-32 w-80 h-80 bg-veqlyx-dark-red/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* FIXED: Better responsive grid - single column on tablet, two columns on desktop */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-12 xl:gap-16 items-center min-h-[70vh] lg:min-h-[75vh] max-w-7xl mx-auto -mt-1 lg:-mt-4">
          
          {/* Left Content - Preserved desktop positioning */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left md:text-center lg:text-left lg:pl-8 xl:pl-12 space-y-6 lg:space-y-8 order-1 lg:order-1"
          >
            {/* Main Heading - Preserved desktop sizing, improved mobile/tablet */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6 leading-tight"
            >
              #1 Secure{' '}
              <span className="text-gradient">
                Video Approval
              </span>
              <br />
              Platform for{' '}
              <span className="text-gradient">
                Creators
              </span>
            </motion.h1>

            {/* Subheading - Better responsive spacing */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-veqlyx-gray-300 mb-6 lg:mb-8 leading-relaxed max-w-xl md:mx-auto lg:mx-0"
            >
              Upload, approve, and publish 
              videos without ever sharing channel access. Privacy first, workflow optimized.
            </motion.p>

            {/* FIXED: Feature Boxes - Better mobile/tablet layout */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-3 mb-6 lg:mb-8 max-w-lg md:mx-auto lg:mx-0"
            >
              <div className="bg-veqlyx-gray-800/60 border border-veqlyx-gray-600/60 rounded-xl px-4 py-3.5 sm:py-3 backdrop-blur-sm hover:bg-veqlyx-gray-800/70 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-veqlyx-dark-red flex-shrink-0" />
                  <span className="text-xs sm:text-xs text-veqlyx-gray-200 font-medium">No Channel Access Required</span>
                </div>
              </div>
              
              <div className="bg-veqlyx-gray-800/60 border border-veqlyx-gray-600/60 rounded-xl px-4 py-3.5 sm:py-3 backdrop-blur-sm hover:bg-veqlyx-gray-800/70 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-veqlyx-dark-red flex-shrink-0" />
                  <span className="text-xs sm:text-xs text-veqlyx-gray-200 font-medium">Max 256 GB File Support</span>
                </div>
              </div>
              
              <div className="bg-veqlyx-gray-800/60 border border-veqlyx-gray-600/60 rounded-xl px-4 py-3.5 sm:py-3 backdrop-blur-sm hover:bg-veqlyx-gray-800/70 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-veqlyx-dark-red flex-shrink-0" />
                  <span className="text-xs sm:text-xs text-veqlyx-gray-200 font-medium">End-to-End Encryption</span>
                </div>
              </div>
              
              <div className="bg-veqlyx-gray-800/60 border border-veqlyx-gray-600/60 rounded-xl px-4 py-3.5 sm:py-3 backdrop-blur-sm hover:bg-veqlyx-gray-800/70 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-veqlyx-dark-red flex-shrink-0" />
                  <span className="text-xs sm:text-xs text-veqlyx-gray-200 font-medium">Real-time Notifications</span>
                </div>
              </div>
            </motion.div>

            {/* FIXED: CTA Buttons - Better responsive centering */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-center lg:justify-start gap-3 sm:gap-4 mb-6 lg:mb-8"
            >
              <Link href="/signup">
                <Button 
                  variant="gradient" 
                  size="xl" 
                  className="group w-full sm:w-auto bg-gradient-to-r from-veqlyx-red to-veqlyx-dark-red hover:from-veqlyx-red/90 hover:to-veqlyx-dark-red/90 px-6 py-3 sm:px-8 sm:py-3.5 text-base font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Started⚡
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              {/* ========== DEMO BUTTON WITH POPUP TRIGGER ========== */}
              {/* Updated demo button to trigger maintenance popup instead of navigation */}
              <Button 
                onClick={handleDemoClick}
                variant="outline" 
                size="xl" 
                className="w-full sm:w-auto border-2 border-veqlyx-gray-600 hover:border-veqlyx-red/50 hover:bg-veqlyx-red/5 px-6 py-3 sm:px-8 sm:py-3.5 text-base font-semibold transition-all duration-300"
              >
                <Play className="w-4 h-4 mr-2" />
                Book a Live Demo
              </Button>
              {/* ================================================= */}
            </motion.div>

            {/* Trust Indicators - Better responsive centering */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center md:justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-veqlyx-gray-400"
            >
              <div className="flex items-center gap-2 hover:text-veqlyx-dark-red transition-colors duration-300">
                <CheckCircle className="w-4 h-4 text-veqlyx-success" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2 hover:text-veqlyx-dark-red transition-colors duration-300">
                <Shield className="w-4 h-4 text-veqlyx-success" />
                <span>256-bit Encryption</span>
              </div>
              <div className="flex items-center gap-2 hover:text-veqlyx-dark-red transition-colors duration-300">
                <Zap className="w-4 h-4 text-veqlyx-success" />
                <span>99.9% Uptime SLA</span>
              </div>
            </motion.div>
          </motion.div>

          {/* FIXED: Right Side - Dashboard with responsive scaling and positioning */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative lg:pr-8 xl:pr-12 mt-8 md:mt-12 lg:mt-0 order-2 lg:order-2 scale-75 sm:scale-85 md:scale-90 lg:scale-100 md:mx-auto lg:mx-0"
          >
            {/* Floating notification badge - Better responsive positioning */}
            <motion.div
              animate={{ 
                y: [0, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 z-20 bg-gradient-to-r from-red-500 via-rose-500 to-veqlyx-dark-red text-white text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-2xl border border-white/20"
            >
              3 Pending
            </motion.div>

            {/* FIXED: Main Dashboard - Better responsive sizing */}
            <div className="bg-white/97 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/30 p-4 sm:p-6 lg:p-8 hover:shadow-3xl transition-all duration-500 max-w-md md:max-w-lg lg:max-w-none md:mx-auto lg:mx-0">
              {/* Dashboard Header - Better responsive spacing */}
              <div className="flex items-center justify-between mb-4 sm:mb-6 lg:mb-8">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-veqlyx-gray-900 tracking-tight">Video Approval Dashboard</h3>
                <div className="flex items-center gap-1 sm:gap-2 text-veqlyx-gray-500 bg-gray-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <Clock className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium hidden sm:inline lg:inline">Real-time</span>
                </div>
              </div>

              {/* FIXED: Video Items - Better responsive spacing and touch targets */}
              <div className="space-y-2.5 sm:space-y-3 lg:space-y-4">
                {/* Video 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center justify-between p-3 sm:p-4 lg:p-5 bg-gradient-to-r from-veqlyx-gray-50 to-white rounded-xl sm:rounded-2xl border border-veqlyx-gray-100 hover:shadow-lg hover:border-veqlyx-gray-200 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 lg:gap-4">
                    <div className="w-9 sm:w-10 lg:w-12 h-9 sm:h-10 lg:h-12 bg-gradient-to-br from-veqlyx-gray-200 to-veqlyx-gray-300 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Play className="w-3.5 sm:w-4 lg:w-5 h-3.5 sm:h-4 lg:h-5 text-veqlyx-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-veqlyx-gray-900 text-xs sm:text-sm mb-0.5 sm:mb-1">Product Launch Q4</h4>
                      <p className="text-xs text-veqlyx-gray-600 flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span className="hidden sm:inline">Edited by </span>John D.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
                    <Button 
                      size="sm" 
                      className="bg-veqlyx-red hover:bg-green-500 text-white text-xs px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 font-semibold shadow-md hover:shadow-lg transition-all duration-300 min-h-[32px] sm:min-h-[36px]"
                    >
                      Approve
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-veqlyx-gray-700 border-red-400 hover:bg-veqlyx-red hover:text-white hover:border-veqlyx-red text-xs px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 font-semibold transition-all duration-300 min-h-[32px] sm:min-h-[36px]"
                    >
                      Review
                    </Button>
                  </div>
                </motion.div>

                {/* Video 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex items-center justify-between p-3 sm:p-4 lg:p-5 bg-gradient-to-r from-veqlyx-gray-50 to-white rounded-xl sm:rounded-2xl border border-veqlyx-gray-100 hover:shadow-lg hover:border-veqlyx-gray-200 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 lg:gap-4">
                    <div className="w-9 sm:w-10 lg:w-12 h-9 sm:h-10 lg:h-12 bg-gradient-to-br from-veqlyx-gray-200 to-veqlyx-gray-300 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Play className="w-3.5 sm:w-4 lg:w-5 h-3.5 sm:h-4 lg:h-5 text-veqlyx-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-veqlyx-gray-900 text-xs sm:text-sm mb-0.5 sm:mb-1">Tutorial Series #5</h4>
                      <p className="text-xs text-veqlyx-gray-600 flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span className="hidden sm:inline">Edited by </span>Sarah M.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
                    <Button 
                      size="sm" 
                      className="bg-veqlyx-red hover:bg-green-500 text-white text-xs px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 font-semibold shadow-md hover:shadow-lg transition-all duration-300 min-h-[32px] sm:min-h-[36px]"
                    >
                      Approve
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-veqlyx-gray-700 border-red-400 hover:bg-veqlyx-red hover:text-white hover:border-veqlyx-red text-xs px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 font-semibold transition-all duration-300 min-h-[32px] sm:min-h-[36px]"
                    >
                      Review
                    </Button>
                  </div>
                </motion.div>

                {/* Video 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="flex items-center justify-between p-3 sm:p-4 lg:p-5 bg-gradient-to-r from-veqlyx-gray-50 to-white rounded-xl sm:rounded-2xl border border-veqlyx-gray-100 hover:shadow-lg hover:border-veqlyx-gray-200 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 lg:gap-4">
                    <div className="w-9 sm:w-10 lg:w-12 h-9 sm:h-10 lg:h-12 bg-gradient-to-br from-veqlyx-gray-200 to-veqlyx-gray-300 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Play className="w-3.5 sm:w-4 lg:w-5 h-3.5 sm:h-4 lg:h-5 text-veqlyx-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-veqlyx-gray-900 text-xs sm:text-sm mb-0.5 sm:mb-1">Brand Showcase</h4>
                      <p className="text-xs text-veqlyx-gray-600 flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span className="hidden sm:inline">Edited by </span>Mike R.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
                    <Button 
                      size="sm" 
                      className="bg-veqlyx-red hover:bg-green-500 text-white text-xs px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 font-semibold shadow-md hover:shadow-lg transition-all duration-300 min-h-[32px] sm:min-h-[36px]"
                    >
                      Approve
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-veqlyx-gray-700 border-red-400 hover:bg-veqlyx-red hover:text-white hover:border-veqlyx-red text-xs px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 font-semibold transition-all duration-300 min-h-[32px] sm:min-h-[36px]"
                    >
                      Review
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Preserved */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-veqlyx-red/50 rounded-full flex justify-center backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-veqlyx-red to-veqlyx-dark-red rounded-full mt-2"
          />
        </motion.div>
      </motion.div> */}

      {/* ========== MAINTENANCE POPUP MODAL ========== */}
      {/* Professional maintenance popup with smooth animations and brand styling */}
      <AnimatePresence>
        {showDemoPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeDemoPopup}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />
            
            {/* Popup Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative bg-white rounded-2xl shadow-2xl border border-gray-200/50 p-6 sm:p-8 max-w-md w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeDemoPopup}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-veqlyx-red/10 to-veqlyx-dark-red/10 rounded-2xl flex items-center justify-center">
                  <Settings className="w-8 h-8 text-veqlyx-red" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                  Under Maintenance
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  We're currently enhancing our live demo experience to provide you with the best possible showcase of our platform. We apologize any inconvenience caused.
                </p>

                <div className="pt-2">
                  <p className="text-sm text-gray-500 mb-4">
                    For any other assistance or inquiries, please visit our{' '}
                    <Link href="/help" className="text-veqlyx-red hover:text-veqlyx-dark-red font-medium transition-colors duration-200">
                      Help Center
                    </Link>
                  </p>
                  
                  <p className="text-xs text-gray-400 font-medium">
                    — Team Veqlyx
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 flex justify-center">
                <Button
                  onClick={closeDemoPopup}
                  className="bg-gradient-to-r from-veqlyx-red to-veqlyx-dark-red hover:from-veqlyx-red/90 hover:to-veqlyx-dark-red/90 text-white px-8 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  I Understood
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ============================================ */}
    </section>
  )
}

export default Hero
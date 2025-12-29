'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Help Center', href: '#help' },
    { name: 'Why Veqlyx', href: '#whyus' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out',
          isScrolled 
            ? 'backdrop-blur-xl border-b border-white/10 shadow-2xl' 
            : 'backdrop-blur-md border-b border-white/5'
        )}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo Section - Direct clickable home button */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <Link href="/" className="group">
                <div className="relative">
                  <motion.div 
                    className="relative w-24 h-24 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/logoveq.png"
                      alt="Veqlyx Logo"
                      width={96}
                      height={96}
                      className="object-contain w-full h-full"
                      priority
                    />
                  </motion.div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg -z-10"></div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation - Grey rounded background */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-8 backdrop-blur-sm bg-gray-800/60 rounded-2xl px-8 py-3 border border-gray-700/50">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    className="relative group"
                  >
                    <Link
                      href={item.href}
                      className="relative text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm group"
                    >
                      {item.name}
                      {/* Red line that appears on hover and disappears when pointer removed */}
                      <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-red-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Login Button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/login">
                  <Button 
                    variant="ghost" 
                    size="default" 
                    className="font-medium text-white/90 hover:text-white hover:bg-white/10 border border-transparent hover:border-red-500 transition-all duration-300 rounded-lg px-6 group"
                  >
                    Login
                  </Button>
                </Link>
              </motion.div>
              
              {/* Sign Up Button - Constantly highlighted with moving animation */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link href="/signup">
                  <motion.div className="relative overflow-hidden rounded-lg">
                    {/* Animated background gradient - constantly moving */}
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      animate={{
                        background: [
                          'linear-gradient(45deg, #dc2626, #be185d, #991b1b, #dc2626)',
                          'linear-gradient(90deg, #be185d, #dc2626, #be185d, #991b1b)',
                          'linear-gradient(135deg, #991b1b, #dc2626, #be185d, #dc2626)',
                          'linear-gradient(180deg, #dc2626, #991b1b, #be185d, #dc2626)',
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Shine effect overlay - constantly moving */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-lg"
                      animate={{
                        x: ["-100%", "100%"]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 0.5
                      }}
                    />
                    
                    <Button 
                      className="relative font-medium bg-transparent hover:bg-transparent text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg px-8 py-2.5 z-10"
                    >
                      Sign Up
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="lg:hidden p-3 rounded-xl text-white hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/20"
              aria-label="Toggle mobile menu"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1, 
              height: 'auto' 
            }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.25, 0.25, 0.75] }}
            className="lg:hidden fixed top-20 left-0 right-0 z-40 bg-gray-800/90 backdrop-blur-xl border-b border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8">
              <nav className="flex flex-col space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ 
                      x: 0, 
                      opacity: 1 
                    }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-3 text-white/90 hover:text-white transition-colors duration-300 font-medium text-lg border-b border-white/10 hover:border-red-400/50"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Auth Buttons */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ 
                    x: 0, 
                    opacity: 1 
                  }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.5,
                    ease: "easeOut"
                  }}
                  className="flex flex-col space-y-4 pt-6"
                >
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full font-medium text-white border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300 rounded-lg py-3"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                    <motion.div className="relative overflow-hidden rounded-lg">
                      {/* Animated background for mobile sign up */}
                      <motion.div
                        className="absolute inset-0 rounded-lg"
                        animate={{
                          background: [
                            'linear-gradient(45deg, #dc2626, #be185d, #991b1b)',
                            'linear-gradient(90deg, #be185d, #dc2626, #be185d)',
                            'linear-gradient(135deg, #991b1b, #dc2626, #be185d)',
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <Button 
                        size="lg"
                        className="relative w-full font-medium bg-transparent hover:bg-transparent text-white border-0 shadow-lg transition-all duration-300 rounded-lg py-3 z-10"
                      >
                        Sign Up
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-16"></div>
    </>
  )
}

export default Header
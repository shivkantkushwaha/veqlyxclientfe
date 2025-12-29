'use client'; // NEW LINE

import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import AboutSection from '@/components/AboutSection'
//import { AuthProvider, useAuth } from '@/context/AuthContext'; // NEW LINE
import Login from '@/components/Login'; // NEW LINE
import Dashboard from '@/components/Dashboard'; // NEW LINE

//NEW LINE


 
//NEW LINE
export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Features />
      <AboutSection />
    </div>
  )
}
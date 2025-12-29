import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'veqlyx-red': '#E50914',
        'veqlyx-dark-red': '#B81D24',
        'veqlyx-black': '#000000',
        'veqlyx-white': '#FFFFFF',
        'veqlyx-success': '#10B981',
        'veqlyx-warning': '#F59E0B',
        'veqlyx-gray': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        // Aliases for the About page (keeping your existing names + adding compatibility)
        'veqlyx': {
          'red': '#E50914',
          'success': '#10B981',
          'gray': {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
          }
        }
      },
      backgroundImage: {
        'gradient-red-black': 'linear-gradient(135deg, #E50914 0%, #B81D24 50%, #000000 100%)',
        'gradient-red-black-soft': 'linear-gradient(135deg, #E50914 0%, #B81D24 30%, rgba(0,0,0,0.8) 100%)',
        'gradient-black-red': 'linear-gradient(135deg, #000000 0%, #B81D24 50%, #E50914 100%)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'pulse-red': 'pulseRed 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseRed: {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.05)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
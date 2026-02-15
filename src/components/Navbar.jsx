import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/NoMayoLogo.svg'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed z-50 transition-all duration-300 ${
        scrolled
          ? 'top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md'
          : 'top-3 left-3 right-3 sm:top-5 sm:left-5 sm:right-5 md:top-6 md:left-6 md:right-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        <a href="#hero" className="flex items-center">
          <img
            src={logo}
            alt="No Mayo"
            className={`h-8 sm:h-10 transition-all duration-300 ${
              scrolled ? 'brightness-0' : 'brightness-0 invert'
            }`}
          />
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="#about"
            className={`hidden sm:block text-sm font-medium transition-colors ${
              scrolled ? 'text-mayo-black hover:text-mayo-orange' : 'text-white/90 hover:text-white'
            }`}
          >
            The Why
          </a>
          <a
            href="#menu"
            className={`hidden sm:block text-sm font-medium transition-colors ${
              scrolled ? 'text-mayo-black hover:text-mayo-orange' : 'text-white/90 hover:text-white'
            }`}
          >
            This Week's Drop
          </a>
          <a
            href="#feed"
            className={`hidden sm:block text-sm font-medium transition-colors ${
              scrolled ? 'text-mayo-black hover:text-mayo-orange' : 'text-white/90 hover:text-white'
            }`}
          >
            The Feed
          </a>
          <a
            href="https://order.storekit.com/no-mayo/menu"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm font-bold px-5 py-2.5 rounded-full transition-all ${
              scrolled
                ? 'bg-mayo-orange text-white hover:bg-mayo-dark'
                : 'bg-white text-mayo-orange hover:bg-mayo-cream'
            }`}
          >
            Order Now
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

import { motion } from 'framer-motion'
import logo from '../assets/NoMayoLogo.svg'
import heroImage from '../assets/DanielHoldingSambosApronAI.png'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen deli-check deli-check-lg flex items-center justify-center p-3 sm:p-5 md:p-6"
    >
      {/* Orange inner panel */}
      <div className="relative w-full h-full min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-40px)] md:min-h-[calc(100vh-48px)] bg-mayo-orange rounded-sm overflow-hidden flex items-center justify-center">
        {/* Background hero image — positioned right on desktop, centered on mobile */}
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          src={heroImage}
          alt="Daniel holding sandwiches"
          className="absolute bottom-0 h-[42vh] md:h-[65vh] object-contain select-none pointer-events-none drop-shadow-2xl left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[2%]"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center md:text-left w-full">
          <div className="md:max-w-2xl">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              src={logo}
              alt="No Mayo"
              className="h-36 sm:h-48 md:h-56 mx-auto md:mx-0 md:-ml-4 mb-4 sm:mb-5 block"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 leading-tight"
            >
              Banging sambos. Best ingredients.
              <br />
              No mayo. Ever.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-white/80 text-base sm:text-lg mb-8"
            >
              Fresh sandwiches for collection from Hackney.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 md:justify-start justify-center"
            >
              <a
                href="#menu"
                onClick={() => window.gtag('event', 'cta_click', { event_category: 'engagement', event_label: 'hero_order' })}
                className="bg-white text-mayo-orange font-display font-bold text-lg px-8 py-4 rounded-full hover:bg-mayo-cream transition-colors shadow-lg"
              >
                Order This Week's Drop
              </a>
              <a
                href="#about"
                onClick={() => window.gtag('event', 'cta_click', { event_category: 'engagement', event_label: 'hero_how_it_works' })}
                className="text-white/90 font-medium hover:text-white transition-colors underline underline-offset-4"
              >
                How it works &darr;
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

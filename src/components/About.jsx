import { motion } from 'framer-motion'
import danielImg from '../assets/Daniel_holding_bag_no_bg.png'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
}

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="font-display text-4xl sm:text-5xl font-extrabold text-mayo-black mb-6"
            >
              The Why
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-lg text-mayo-black/80 leading-relaxed mb-4"
            >
              I started No Mayo because I think sandwiches can be done so much
              better.
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-mayo-black/80 leading-relaxed mb-4"
            >
              Better bread. Better fillings. Packed with flavour. None of that
              lazy mayo-as-a-default nonsense. Every sandwich I make uses the
              best ingredients I can get my hands on — rustled up fresh in my
              kitchen in Hackney.
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-lg text-mayo-black/80 leading-relaxed mb-8"
            >
              Two different sandwiches every week. Order at the start of the
              week, collect on Friday or Saturday. That's it. Simple.
            </motion.p>

            <motion.a
              variants={fadeUp}
              custom={4}
              href="#menu"
              className="inline-block bg-mayo-orange text-white font-display font-bold text-lg px-8 py-4 rounded-full hover:bg-mayo-dark transition-colors shadow-lg"
            >
              See This Week's Menu
            </motion.a>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative overflow-hidden rounded-2xl -rotate-2">
              {/* Deli paper frame behind the photo */}
              <div className="absolute inset-0 deli-check deli-check-lg opacity-60" />
              <img
                src={danielImg}
                alt="Daniel holding a No Mayo bag"
                className="relative w-full max-w-lg scale-110 translate-y-6 rotate-2 mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

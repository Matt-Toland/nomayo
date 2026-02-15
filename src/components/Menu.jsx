import { motion } from 'framer-motion'
import sotw1 from '../assets/SOTW1.png'
import sotw2 from '../assets/SOTW2.png'

const steps = [
  { number: '1', title: 'Check the drop', desc: 'Two new sandwiches announced every week' },
  { number: '2', title: 'Order by Thursday', desc: 'Grab yours before they\'re gone' },
  { number: '3', title: 'Collect Fri / Sat', desc: 'Pick up from our collection point in Hackney' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
}

export default function Menu() {
  return (
    <section id="menu" className="py-20 sm:py-28 bg-mayo-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="font-display text-4xl sm:text-5xl font-extrabold text-mayo-black mb-4"
          >
            This Week's Drop
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="text-lg text-mayo-black/70 max-w-xl mx-auto"
          >
            Two sandwiches. Announced weekly. Order by Thursday.
            Collect Friday or Saturday from our collection point in Hackney.
          </motion.p>
        </motion.div>

        {/* How it works steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-16"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              custom={i}
              className="text-center"
            >
              <div className="w-12 h-12 bg-mayo-orange text-white font-display font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-3">
                {step.number}
              </div>
              <h3 className="font-display font-bold text-lg text-mayo-black mb-1">
                {step.title}
              </h3>
              <p className="text-mayo-black/60 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Sandwich preview cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 gap-6 mb-12"
        >
          <motion.img variants={fadeUp} custom={0} src={sotw1} alt="Sandwich of the Week #1" className="w-full rounded-2xl shadow-sm" />
          <motion.img variants={fadeUp} custom={1} src={sotw2} alt="Sandwich of the Week #2" className="w-full rounded-2xl shadow-sm" />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href="https://order.storekit.com/no-mayo/menu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-mayo-orange text-white font-display font-bold text-lg px-10 py-4 rounded-full hover:bg-mayo-dark transition-colors shadow-lg hover:shadow-xl"
          >
            Order This Week's Drop
          </a>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

export default function DeliDivider({ height = 'h-6 sm:h-8', className = '' }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`w-full deli-check origin-left ${height} ${className}`}
      role="separator"
      aria-hidden="true"
    />
  )
}

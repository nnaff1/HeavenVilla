'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phone = '6281213517208'
  const message = 'Halo HeavenVilla, saya ingin menanyakan tentang ketersediaan villa.'

  return (
    <motion.a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-black/20 hover:bg-[#20bd5a] transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} fill="white" />
    </motion.a>
  )
}
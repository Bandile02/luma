'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const images = [
  '/placeholder.svg?height=200&width=200',
  '/placeholder.svg?height=200&width=200',
  '/placeholder.svg?height=200&width=200',
  '/placeholder.svg?height=200&width=200',
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="w-full md:w-1/2 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {images.map((src, index) => (
              <Image key={index} src={src} alt={`Studio image ${index + 1}`} width={200} height={200} className="w-full h-auto" />
            ))}
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-4">WE ARE LUMA</h2>
            <p className="text-gray-300 mb-6">
              LUMA is a high-end animation and visual effects studio, creating stunning visuals for the entertainment industry. Our team of talented artists and technicians push the boundaries of what's possible in digital storytelling.
            </p>
            <button className="bg-yellow-400 text-black px-6 py-2 font-bold hover:bg-yellow-300 transition-colors duration-300">
              READ MORE
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


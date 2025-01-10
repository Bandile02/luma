'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const clients = [
  { name: 'Walt Disney', logo: '/placeholder.svg?height=50&width=100' },
  { name: 'Netflix', logo: '/placeholder.svg?height=50&width=100' },
  { name: 'Ogilvy', logo: '/placeholder.svg?height=50&width=100' },
]

export default function Clients() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center space-x-12">
          {clients.map((client) => (
            <motion.div
              key={client.name}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Image 
                src={client.logo} 
                alt={client.name} 
                width={100} 
                height={50} 
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


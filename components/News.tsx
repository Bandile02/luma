'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const newsItems = [
  { id: 1, title: 'Latest Project Announcement', image: '/placeholder.svg?height=200&width=300', description: 'Exciting new collaboration with major studio', date: '2023-06-01' },
  { id: 2, title: 'Award Nomination', image: '/placeholder.svg?height=200&width=300', description: 'LUMA nominated for Best Visual Effects', date: '2023-05-15' },
  { id: 3, title: 'New Technology Implementation', image: '/placeholder.svg?height=200&width=300', description: 'LUMA adopts cutting-edge rendering software', date: '2023-04-30' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
}

export default function News() {
  return (
    <section id="news" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Latest News</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {newsItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              variants={itemVariants}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


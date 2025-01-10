'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  { id: 1, title: 'Project 1', image: '/placeholder.svg?height=400&width=600', cols: 1 },
  { id: 2, title: 'Project 2', image: '/placeholder.svg?height=400&width=600', cols: 2 },
  { id: 3, title: 'Project 3', image: '/placeholder.svg?height=400&width=600', cols: 1 },
  { id: 4, title: 'Project 4', image: '/placeholder.svg?height=400&width=600', cols: 1 },
  { id: 5, title: 'Project 5', image: '/placeholder.svg?height=400&width=600', cols: 2 },
  { id: 6, title: 'Project 6', image: '/placeholder.svg?height=400&width=600', cols: 1 },
]

export default function Portfolio() {
  return (
    <section id="work" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`relative overflow-hidden rounded-lg shadow-lg md:col-span-${project.cols}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <motion.div 
                className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-yellow-400 text-xl font-bold">{project.title}</h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


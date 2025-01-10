'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'

function AnimatedBunny() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.5
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#FFFF00" emissive="#FFFF00" emissiveIntensity={0.5} />
    </mesh>
  )
}

export default function Hero() {
  return (
    <section className="h-screen relative overflow-hidden">
      <Canvas className="absolute inset-0">
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <AnimatedBunny />
      </Canvas>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <motion.h1 
          className="text-6xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to LUMA
        </motion.h1>
      </div>
    </section>
  )
}


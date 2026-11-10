'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei'
import type { Mesh } from 'three'

function Orb() {
  const ref = useRef<Mesh>(null)
  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.25
    ref.current.rotation.x += delta * 0.1
  })
  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={1}>
      <mesh ref={ref} scale={1.35}>
        <icosahedronGeometry args={[1, 12]} />
        <MeshDistortMaterial
          color="#8b6cff"
          emissive="#22d3ee"
          emissiveIntensity={0.22}
          roughness={0.2}
          metalness={0.8}
          distort={0.35}
          speed={1.6}
        />
      </mesh>
    </Float>
  )
}

export default function HeroScene() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={2} color="#a78bfa" />
      <directionalLight position={[-3, -2, 2]} intensity={1.5} color="#22d3ee" />
      <Orb />
      <Sparkles count={60} scale={7} size={2} speed={0.4} color="#a78bfa" />
    </Canvas>
  )
}

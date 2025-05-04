"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment, Html } from "@react-three/drei"
import { Badge } from "@/components/ui/badge"

function Model({ showDetails = false }) {
  const group = useRef()
  // In a real implementation, you would use an actual 3D model
  // For this example, we'll create a simple 3D representation of a charger

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.005
    }
  })

  return (
    <group ref={group}>
      {/* Base */}
      <mesh position={[0, -1.5, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 0.2, 32]} />
        <meshStandardMaterial color="#1A2142" />
      </mesh>

      {/* Main body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 1, 3, 32]} />
        <meshStandardMaterial color="#050A1F" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Top cap */}
      <mesh position={[0, 1.6, 0]}>
        <cylinderGeometry args={[1.1, 1, 0.2, 32]} />
        <meshStandardMaterial color="#1A2142" />
      </mesh>

      {/* Charging port */}
      <mesh position={[0, 0.5, 1]}>
        <boxGeometry args={[0.8, 0.8, 0.1]} />
        <meshStandardMaterial color="#1A2142" />
      </mesh>

      {/* LED ring */}
      <mesh position={[0, 1, 0]}>
        <torusGeometry args={[0.8, 0.05, 16, 100]} />
        <meshStandardMaterial color="#5C6BFF" emissive="#5C6BFF" emissiveIntensity={2} />
      </mesh>

      {/* Cable */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 3, 8]} />
        <meshStandardMaterial color="#222" />
      </mesh>

      {/* Connector */}
      <mesh position={[0, -1.8, 0]}>
        <cylinderGeometry args={[0.2, 0.15, 0.4, 16]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      {showDetails && (
        <>
          <Html position={[1.5, 1, 0]}>
            <Badge className="bg-[#5C6BFF]/80 text-white whitespace-nowrap">LED Status Ring</Badge>
          </Html>

          <Html position={[1.5, 0.5, 1]}>
            <Badge className="bg-[#5C6BFF]/80 text-white whitespace-nowrap">Type 2 Connector</Badge>
          </Html>

          <Html position={[-1.5, -1.5, 0]}>
            <Badge className="bg-[#5C6BFF]/80 text-white whitespace-nowrap">Weatherproof Base</Badge>
          </Html>
        </>
      )}
    </group>
  )
}

export function ChargerModel({ showDetails = false }) {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Model showDetails={showDetails} />
      <Environment preset="city" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </Canvas>
  )
}

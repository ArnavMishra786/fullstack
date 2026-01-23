"use client";

/**
 * ============================================
 * 3D COURTROOM SCENE - LIGHT THEME
 * ============================================
 * 
 * React Three Fiber + Drei for 3D rendering
 * Interactive courtroom with clickable elements
 * Light, elegant marble and wood theme
 */

import { useRef, useState, Suspense, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Text,
  Float,
  PerspectiveCamera,
  Sparkles,
  RoundedBox,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";

// ============================================
// FLOATING ORB - AI CONSULTANT (ANIMATED)
// ============================================
function AIConsultantOrb({ 
  onInteract, 
  isActive 
}: { 
  onInteract: () => void;
  isActive: boolean;
}) {
  const orbRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (orbRef.current) {
      orbRef.current.rotation.y += 0.015;
      orbRef.current.rotation.x = Math.sin(time * 0.5) * 0.15;
      orbRef.current.position.y = Math.sin(time * 0.8) * 0.3 + 3;
    }
    if (glowRef.current) {
      const scale = 1 + Math.sin(time * 2) * 0.2;
      glowRef.current.scale.setScalar(scale);
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.x += 0.025;
      ringsRef.current.rotation.z += 0.015;
      ringsRef.current.rotation.y += 0.008;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= 0.03;
      innerRef.current.rotation.z = Math.sin(time) * 0.3;
    }
  });

  const handleClick = useCallback((e: THREE.Event) => {
    e.stopPropagation();
    onInteract();
  }, [onInteract]);

  return (
    <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <group position={[0, 3, -2]}>
        {/* Core orb - gradient blue/purple */}
        <mesh 
          ref={orbRef} 
          onClick={handleClick}
          onPointerOver={() => {
            setHovered(true);
            document.body.style.cursor = 'pointer';
          }}
          onPointerOut={() => {
            setHovered(false);
            document.body.style.cursor = 'default';
          }}
        >
          <icosahedronGeometry args={[0.6, 3]} />
          <meshStandardMaterial
            color={hovered || isActive ? "#818cf8" : "#6366f1"}
            emissive={hovered || isActive ? "#a78bfa" : "#6366f1"}
            emissiveIntensity={hovered || isActive ? 2.5 : 1.5}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
        
        {/* Inner rotating crystal core */}
        <mesh ref={innerRef} scale={0.4}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#c4b5fd"
            emissiveIntensity={3}
            transparent
            opacity={0.9}
          />
        </mesh>
        
        {/* Outer glow sphere */}
        <mesh ref={glowRef} scale={1.6}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshBasicMaterial
            color="#a78bfa"
            transparent
            opacity={hovered ? 0.2 : 0.1}
          />
        </mesh>
        
        {/* Rotating rings - multiple layers */}
        <group ref={ringsRef}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1, 0.025, 16, 64]} />
            <meshBasicMaterial color="#6366f1" transparent opacity={0.8} />
          </mesh>
          <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
            <torusGeometry args={[1.2, 0.02, 16, 64]} />
            <meshBasicMaterial color="#8b5cf6" transparent opacity={0.6} />
          </mesh>
          <mesh rotation={[Math.PI / 6, Math.PI / 2, Math.PI / 3]}>
            <torusGeometry args={[1.4, 0.015, 16, 64]} />
            <meshBasicMaterial color="#a78bfa" transparent opacity={0.4} />
          </mesh>
          <mesh rotation={[0, Math.PI / 5, Math.PI / 4]}>
            <torusGeometry args={[1.6, 0.01, 16, 64]} />
            <meshBasicMaterial color="#c4b5fd" transparent opacity={0.3} />
          </mesh>
        </group>
        
        {/* Sparkles around orb */}
        <Sparkles
          count={80}
          scale={3}
          size={4}
          speed={1}
          color="#a78bfa"
        />
        
        {/* Point light from orb */}
        <pointLight 
          color={hovered || isActive ? "#a78bfa" : "#6366f1"} 
          intensity={hovered || isActive ? 8 : 5} 
          distance={12} 
        />
        
        {/* AI Label */}
        <Text
          position={[0, -1.4, 0]}
          fontSize={0.2}
          color="#6366f1"
          font="/fonts/Geist-Bold.ttf"
          anchorX="center"
          anchorY="middle"
        >
          AI LEGAL CONSULTANT
        </Text>
        <Text
          position={[0, -1.7, 0]}
          fontSize={0.12}
          color="#9ca3af"
          font="/fonts/Geist-Regular.ttf"
          anchorX="center"
          anchorY="middle"
        >
          {hovered ? "Click to chat!" : "Click to consult"}
        </Text>
      </group>
    </Float>
  );
}

// ============================================
// JUDGE'S BENCH (CONSTITUTIONAL RIGHTS)
// ============================================
function JudgeBench({ onClick }: { onClick: () => void }) {
  const benchRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const glowRef = useRef<THREE.PointLight>(null);
  
  useFrame((state) => {
    if (glowRef.current) {
      glowRef.current.intensity = hovered 
        ? 4 + Math.sin(state.clock.elapsedTime * 4) * 1.5 
        : 1;
    }
    if (benchRef.current && hovered) {
      benchRef.current.position.y = Math.sin(state.clock.elapsedTime * 3) * 0.02;
    }
  });

  const handleClick = useCallback((e: THREE.Event) => {
    e.stopPropagation();
    onClick();
  }, [onClick]);

  return (
    <group 
      ref={benchRef}
      position={[0, 0, -6]}
      onClick={handleClick}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'default';
      }}
    >
      {/* Main bench structure - marble */}
      <RoundedBox args={[5, 1.5, 1.2]} radius={0.08} position={[0, 0.75, 0]}>
        <meshStandardMaterial 
          color={hovered ? "#f5f5f5" : "#e8e4e0"} 
          roughness={0.3}
          metalness={0.1}
        />
      </RoundedBox>
      
      {/* Desk top - polished wood */}
      <mesh position={[0, 1.55, 0]}>
        <boxGeometry args={[5.2, 0.12, 1.3]} />
        <meshStandardMaterial 
          color={hovered ? "#8b5a2b" : "#6b4423"} 
          roughness={0.2} 
          metalness={0.3}
        />
      </mesh>
      
      {/* Elevated platform - marble */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[6, 0.2, 2.5]} />
        <meshStandardMaterial color="#d4d0c8" roughness={0.4} metalness={0.1} />
      </mesh>
      
      {/* Gavel */}
      <group position={[1.8, 1.68, 0]}>
        <mesh rotation={[0, 0, Math.PI / 6]}>
          <cylinderGeometry args={[0.04, 0.04, 0.45]} />
          <meshStandardMaterial color="#5c4033" roughness={0.4} />
        </mesh>
        <mesh position={[0.18, 0.12, 0]} rotation={[Math.PI / 2, 0, Math.PI / 6]}>
          <cylinderGeometry args={[0.1, 0.1, 0.22]} />
          <meshStandardMaterial color="#3d2914" roughness={0.3} />
        </mesh>
      </group>
      
      {/* Golden emblem */}
      <mesh position={[0, 1.2, 0.61]}>
        <circleGeometry args={[0.4, 32]} />
        <meshStandardMaterial 
          color="#d4af37" 
          metalness={0.95} 
          roughness={0.05}
          emissive={hovered ? "#d4af37" : "#8b7355"}
          emissiveIntensity={hovered ? 0.8 : 0.2}
        />
      </mesh>
      
      {/* Glow light */}
      <pointLight ref={glowRef} position={[0, 2.5, 0]} color="#d4af37" distance={6} />
      
      {/* Label */}
      <Text
        position={[0, 2.5, 0]}
        fontSize={0.25}
        color={hovered ? "#b8860b" : "#d4af37"}
        font="/fonts/Geist-Bold.ttf"
        anchorX="center"
      >
        CONSTITUTIONAL RIGHTS
      </Text>
      <Text
        position={[0, 2.15, 0]}
        fontSize={0.13}
        color={hovered ? "#6b4423" : "#9ca3af"}
        font="/fonts/Geist-Regular.ttf"
        anchorX="center"
      >
        {hovered ? "Click to explore!" : "Click to explore"}
      </Text>
    </group>
  );
}

// ============================================
// WITNESS STAND (CRIMINAL JUSTICE)
// ============================================
function WitnessStand({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  const standRef = useRef<THREE.Group>(null);
  const micRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (standRef.current && hovered) {
      standRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 3) * 0.04;
    }
    if (micRef.current) {
      micRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.08;
    }
  });

  const handleClick = useCallback((e: THREE.Event) => {
    e.stopPropagation();
    onClick();
  }, [onClick]);

  return (
    <group 
      ref={standRef}
      position={[-4.5, 0, -3]}
      onClick={handleClick}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'default';
      }}
    >
      {/* Stand base - wood */}
      <RoundedBox args={[1.8, 1.2, 1.8]} radius={0.06} position={[0, 0.6, 0]}>
        <meshStandardMaterial 
          color={hovered ? "#a0785a" : "#8b6914"} 
          roughness={0.4}
          metalness={0.1}
        />
      </RoundedBox>
      
      {/* Railing - polished wood */}
      <mesh position={[0, 1.4, 0.85]}>
        <boxGeometry args={[1.9, 0.5, 0.12]} />
        <meshStandardMaterial color="#6b4423" roughness={0.3} metalness={0.2} />
      </mesh>
      
      {/* Microphone */}
      <group ref={micRef} position={[0.4, 1.7, 0.6]}>
        <mesh>
          <cylinderGeometry args={[0.025, 0.025, 0.4]} />
          <meshStandardMaterial color="#444" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, 0.25, 0]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial 
            color="#333" 
            metalness={0.9}
            emissive={hovered ? "#22c55e" : "#111"}
            emissiveIntensity={hovered ? 1 : 0}
          />
        </mesh>
        {/* Mic LED */}
        <mesh position={[0, 0.25, 0.08]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color={hovered ? "#22c55e" : "#666"} />
        </mesh>
      </group>
      
      {/* Glowing indicator */}
      {hovered && (
        <pointLight position={[0, 2, 0]} color="#22c55e" intensity={4} distance={4} />
      )}
      
      {/* Label */}
      <Text
        position={[0, 2.2, 0]}
        fontSize={0.18}
        color={hovered ? "#16a34a" : "#22c55e"}
        font="/fonts/Geist-Bold.ttf"
        anchorX="center"
      >
        CRIMINAL JUSTICE
      </Text>
      <Text
        position={[0, 1.95, 0]}
        fontSize={0.11}
        color={hovered ? "#166534" : "#9ca3af"}
        font="/fonts/Geist-Regular.ttf"
        anchorX="center"
      >
        {hovered ? "Click to learn!" : "Click to learn"}
      </Text>
    </group>
  );
}

// ============================================
// LAWYER'S TABLE (EMPLOYMENT / CONSUMER)
// ============================================
function LawyerTable({ onClick, side }: { onClick: () => void; side: 'left' | 'right' }) {
  const [hovered, setHovered] = useState(false);
  const lampRef = useRef<THREE.PointLight>(null);
  const tableRef = useRef<THREE.Group>(null);
  const posX = side === 'left' ? -3.5 : 3.5;
  const label = side === 'left' ? 'EMPLOYMENT RIGHTS' : 'CONSUMER RIGHTS';
  const color = side === 'left' ? '#3b82f6' : '#f59e0b';
  const hoverColor = side === 'left' ? '#1d4ed8' : '#d97706';
  
  useFrame((state) => {
    if (lampRef.current && hovered) {
      lampRef.current.intensity = 5 + Math.sin(state.clock.elapsedTime * 5) * 2;
    }
    if (tableRef.current && hovered) {
      tableRef.current.position.y = Math.sin(state.clock.elapsedTime * 4) * 0.015;
    }
  });

  const handleClick = useCallback((e: THREE.Event) => {
    e.stopPropagation();
    onClick();
  }, [onClick]);
  
  return (
    <group 
      ref={tableRef}
      position={[posX, 0, 0.5]}
      onClick={handleClick}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'default';
      }}
    >
      {/* Table - elegant wood */}
      <RoundedBox args={[2.2, 0.85, 1.1]} radius={0.04} position={[0, 0.42, 0]}>
        <meshStandardMaterial 
          color={hovered ? "#a0785a" : "#8b6914"} 
          roughness={0.35}
          metalness={0.1}
        />
      </RoundedBox>
      
      {/* Table top - polished */}
      <mesh position={[0, 0.9, 0]}>
        <boxGeometry args={[2.3, 0.1, 1.2]} />
        <meshStandardMaterial 
          color={hovered ? "#5c4033" : "#4a3728"} 
          roughness={0.2} 
          metalness={0.2}
          emissive={hovered ? color : "#000"}
          emissiveIntensity={hovered ? 0.15 : 0}
        />
      </mesh>
      
      {/* Papers/Documents stack */}
      {[0, 0.015, 0.03].map((y, i) => (
        <mesh key={i} position={[0.4 + i * 0.04, 0.98 + y, 0.1]} rotation={[-Math.PI / 2, 0, 0.08 + i * 0.04]}>
          <planeGeometry args={[0.55, 0.75]} />
          <meshStandardMaterial color={i === 2 ? "#fafafa" : "#f0f0f0"} />
        </mesh>
      ))}
      
      {/* Lamp */}
      <group position={[side === 'left' ? 0.8 : -0.8, 0.95, 0.35]}>
        <mesh>
          <cylinderGeometry args={[0.06, 0.1, 0.45]} />
          <meshStandardMaterial color="#2d2d2d" metalness={0.85} roughness={0.15} />
        </mesh>
        <mesh position={[0, 0.35, 0]}>
          <coneGeometry args={[0.18, 0.22, 16]} />
          <meshStandardMaterial 
            color={hovered ? color : "#555"} 
            emissive={hovered ? color : "#000"}
            emissiveIntensity={hovered ? 1.5 : 0}
            metalness={0.4}
          />
        </mesh>
        <pointLight 
          ref={lampRef}
          position={[0, 0.15, 0]} 
          color={color} 
          intensity={hovered ? 5 : 0} 
          distance={5} 
        />
      </group>
      
      {/* Chair - leather style */}
      <group position={[0, 0, 1.2]}>
        <mesh position={[0, 0.35, 0]}>
          <boxGeometry args={[0.6, 0.7, 0.55]} />
          <meshStandardMaterial color="#2d2d2d" roughness={0.6} />
        </mesh>
        <mesh position={[0, 0.8, -0.22]}>
          <boxGeometry args={[0.6, 0.9, 0.12]} />
          <meshStandardMaterial color="#2d2d2d" roughness={0.6} />
        </mesh>
      </group>
      
      {/* Label */}
      <Text
        position={[0, 1.8, 0]}
        fontSize={0.16}
        color={hovered ? hoverColor : color}
        font="/fonts/Geist-Bold.ttf"
        anchorX="center"
      >
        {label}
      </Text>
      <Text
        position={[0, 1.55, 0]}
        fontSize={0.1}
        color={hovered ? hoverColor : "#9ca3af"}
        font="/fonts/Geist-Regular.ttf"
        anchorX="center"
      >
        {hovered ? "Click to explore!" : "Click to explore"}
      </Text>
    </group>
  );
}

// ============================================
// COURTROOM FLOOR - ELEGANT MARBLE
// ============================================
function CourtroomFloor() {
  return (
    <group>
      {/* Main floor - elegant marble look with standard material */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[35, 35]} />
        <meshStandardMaterial 
          color="#e8e4e0"
          roughness={0.15}
          metalness={0.4}
        />
      </mesh>
      
      {/* Subtle grid pattern */}
      <gridHelper 
        args={[35, 35, '#d4d0c8', '#e8e4e0']} 
        position={[0, 0.01, 0]}
      />
      
      {/* Center emblem/seal - gold */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 2]}>
        <ringGeometry args={[2, 2.5, 64]} />
        <meshStandardMaterial 
          color="#d4af37" 
          transparent 
          opacity={0.5}
          emissive="#d4af37"
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 2]}>
        <ringGeometry args={[1.5, 1.8, 64]} />
        <meshStandardMaterial 
          color="#b8860b" 
          transparent 
          opacity={0.4}
          emissive="#b8860b"
          emissiveIntensity={0.15}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
}

// ============================================
// COURTROOM WALLS & PILLARS - LIGHT ELEGANT
// ============================================
function CourtroomStructure() {
  return (
    <group>
      {/* Back wall - light with wood panels */}
      <mesh position={[0, 5, -8]}>
        <boxGeometry args={[22, 12, 0.5]} />
        <meshStandardMaterial color="#f5f0e8" roughness={0.7} />
      </mesh>
      
      {/* Wood panel on back wall */}
      <mesh position={[0, 3, -7.7]}>
        <boxGeometry args={[18, 6, 0.2]} />
        <meshStandardMaterial color="#8b6914" roughness={0.5} metalness={0.1} />
      </mesh>
      
      {/* Side walls */}
      <mesh position={[-11, 5, -1]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[18, 12, 0.5]} />
        <meshStandardMaterial color="#f5f0e8" roughness={0.7} />
      </mesh>
      <mesh position={[11, 5, -1]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[18, 12, 0.5]} />
        <meshStandardMaterial color="#f5f0e8" roughness={0.7} />
      </mesh>
      
      {/* Ornate pillars - marble */}
      {[-8, -4, 4, 8].map((x, i) => (
        <group key={i} position={[x, 0, -7]}>
          {/* Main pillar */}
          <mesh position={[0, 5, 0]}>
            <cylinderGeometry args={[0.4, 0.5, 10, 24]} />
            <meshStandardMaterial 
              color="#f0ebe4" 
              roughness={0.25} 
              metalness={0.1}
            />
          </mesh>
          {/* Pillar base */}
          <mesh position={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.6, 0.7, 0.4, 24]} />
            <meshStandardMaterial color="#e8e0d5" metalness={0.15} roughness={0.3} />
          </mesh>
          {/* Pillar capital */}
          <mesh position={[0, 9.8, 0]}>
            <cylinderGeometry args={[0.7, 0.4, 0.4, 24]} />
            <meshStandardMaterial color="#e8e0d5" metalness={0.15} roughness={0.3} />
          </mesh>
          {/* Gold ring decorations */}
          <mesh position={[0, 2.5, 0]}>
            <torusGeometry args={[0.5, 0.04, 12, 32]} />
            <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
          </mesh>
          <mesh position={[0, 7.5, 0]}>
            <torusGeometry args={[0.5, 0.04, 12, 32]} />
            <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
          </mesh>
        </group>
      ))}
      
      {/* Ceiling with detail */}
      <mesh position={[0, 10, -1]}>
        <boxGeometry args={[22, 0.4, 20]} />
        <meshStandardMaterial color="#f5f0e8" roughness={0.6} />
      </mesh>
    </group>
  );
}

// ============================================
// FLOATING PARTICLES - LIGHT DUST
// ============================================
function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <Sparkles
      ref={particlesRef}
      count={150}
      scale={25}
      size={2}
      speed={0.3}
      color="#d4af37"
      opacity={0.4}
    />
  );
}

// ============================================
// FLOATING LEGAL OBJECTS - DYNAMIC ELEMENTS
// ============================================
function FloatingLegalObjects() {
  const bookRef = useRef<THREE.Group>(null);
  const scaleRef = useRef<THREE.Group>(null);
  const scrollRef = useRef<THREE.Group>(null);
  const gavelFloatRef = useRef<THREE.Group>(null);
  const shieldRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Floating law book
    if (bookRef.current) {
      bookRef.current.position.y = 5 + Math.sin(time * 0.7) * 0.5;
      bookRef.current.rotation.y = Math.sin(time * 0.3) * 0.3;
      bookRef.current.rotation.z = Math.cos(time * 0.4) * 0.1;
    }
    
    // Scales of justice
    if (scaleRef.current) {
      scaleRef.current.position.y = 6 + Math.sin(time * 0.5 + 1) * 0.4;
      scaleRef.current.rotation.y = time * 0.2;
      scaleRef.current.rotation.z = Math.sin(time * 0.8) * 0.15;
    }
    
    // Scroll/document
    if (scrollRef.current) {
      scrollRef.current.position.y = 4.5 + Math.sin(time * 0.6 + 2) * 0.6;
      scrollRef.current.rotation.y = Math.sin(time * 0.4) * 0.4;
      scrollRef.current.rotation.x = Math.cos(time * 0.3) * 0.1;
    }
    
    // Floating gavel
    if (gavelFloatRef.current) {
      gavelFloatRef.current.position.y = 5.5 + Math.sin(time * 0.8 + 3) * 0.5;
      gavelFloatRef.current.rotation.z = Math.sin(time * 0.6) * 0.2;
      gavelFloatRef.current.rotation.y = time * 0.15;
    }
    
    // Shield/badge
    if (shieldRef.current) {
      shieldRef.current.position.y = 4 + Math.sin(time * 0.9 + 4) * 0.4;
      shieldRef.current.rotation.y = Math.sin(time * 0.5) * 0.3;
    }
  });

  return (
    <group>
      {/* Floating Law Book */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <group ref={bookRef} position={[-7, 5, -2]}>
          {/* Book body */}
          <mesh>
            <boxGeometry args={[0.8, 1.1, 0.15]} />
            <meshStandardMaterial color="#8b4513" roughness={0.7} />
          </mesh>
          {/* Book spine */}
          <mesh position={[-0.42, 0, 0]}>
            <boxGeometry args={[0.05, 1.1, 0.18]} />
            <meshStandardMaterial color="#654321" roughness={0.6} />
          </mesh>
          {/* Gold lettering */}
          <mesh position={[0, 0.2, 0.08]}>
            <boxGeometry args={[0.5, 0.08, 0.01]} />
            <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} emissive="#d4af37" emissiveIntensity={0.3} />
          </mesh>
          <mesh position={[0, 0, 0.08]}>
            <boxGeometry args={[0.4, 0.05, 0.01]} />
            <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
          </mesh>
          {/* Pages */}
          <mesh position={[0.02, 0, 0]}>
            <boxGeometry args={[0.72, 1.02, 0.12]} />
            <meshStandardMaterial color="#f5f5dc" roughness={0.9} />
          </mesh>
          <pointLight color="#d4af37" intensity={2} distance={4} />
        </group>
      </Float>
      
      {/* Scales of Justice */}
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <group ref={scaleRef} position={[7, 6, -3]}>
          {/* Center pole */}
          <mesh>
            <cylinderGeometry args={[0.03, 0.03, 1.2]} />
            <meshStandardMaterial color="#d4af37" metalness={0.95} roughness={0.05} />
          </mesh>
          {/* Top decoration */}
          <mesh position={[0, 0.65, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#d4af37" metalness={0.95} roughness={0.05} emissive="#d4af37" emissiveIntensity={0.5} />
          </mesh>
          {/* Balance beam */}
          <mesh position={[0, 0.5, 0]}>
            <boxGeometry args={[1.2, 0.04, 0.04]} />
            <meshStandardMaterial color="#d4af37" metalness={0.95} roughness={0.05} />
          </mesh>
          {/* Left pan */}
          <group position={[-0.5, 0.2, 0]}>
            <mesh>
              <cylinderGeometry args={[0.02, 0.02, 0.3]} />
              <meshStandardMaterial color="#b8860b" metalness={0.9} roughness={0.1} />
            </mesh>
            <mesh position={[0, -0.2, 0]}>
              <cylinderGeometry args={[0.15, 0.12, 0.05, 16]} />
              <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
            </mesh>
          </group>
          {/* Right pan */}
          <group position={[0.5, 0.2, 0]}>
            <mesh>
              <cylinderGeometry args={[0.02, 0.02, 0.3]} />
              <meshStandardMaterial color="#b8860b" metalness={0.9} roughness={0.1} />
            </mesh>
            <mesh position={[0, -0.2, 0]}>
              <cylinderGeometry args={[0.15, 0.12, 0.05, 16]} />
              <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
            </mesh>
          </group>
          <pointLight color="#ffd700" intensity={3} distance={5} />
        </group>
      </Float>
      
      {/* Scroll/Constitution Document */}
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
        <group ref={scrollRef} position={[-6, 4.5, 2]}>
          {/* Main scroll body */}
          <mesh rotation={[0, 0, Math.PI / 6]}>
            <cylinderGeometry args={[0.12, 0.12, 1, 16]} />
            <meshStandardMaterial color="#f5f5dc" roughness={0.8} />
          </mesh>
          {/* Top roll */}
          <mesh position={[0.35, 0.35, 0]} rotation={[Math.PI / 2, 0, Math.PI / 6]}>
            <cylinderGeometry args={[0.08, 0.08, 0.3, 12]} />
            <meshStandardMaterial color="#8b4513" roughness={0.6} />
          </mesh>
          {/* Bottom roll */}
          <mesh position={[-0.35, -0.35, 0]} rotation={[Math.PI / 2, 0, Math.PI / 6]}>
            <cylinderGeometry args={[0.08, 0.08, 0.3, 12]} />
            <meshStandardMaterial color="#8b4513" roughness={0.6} />
          </mesh>
          {/* Ribbon */}
          <mesh position={[0, 0, 0.1]}>
            <boxGeometry args={[0.8, 0.05, 0.01]} />
            <meshStandardMaterial color="#8b0000" roughness={0.5} />
          </mesh>
          <pointLight color="#fff8dc" intensity={1.5} distance={3} />
        </group>
      </Float>
      
      {/* Floating Gavel */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <group ref={gavelFloatRef} position={[6, 5.5, 1]}>
          {/* Handle */}
          <mesh rotation={[0, 0, Math.PI / 4]}>
            <cylinderGeometry args={[0.04, 0.04, 0.6]} />
            <meshStandardMaterial color="#5c4033" roughness={0.4} />
          </mesh>
          {/* Head */}
          <mesh position={[0.25, 0.25, 0]} rotation={[Math.PI / 2, 0, Math.PI / 4]}>
            <cylinderGeometry args={[0.12, 0.12, 0.3]} />
            <meshStandardMaterial color="#3d2914" roughness={0.3} metalness={0.1} />
          </mesh>
          {/* Metal bands */}
          <mesh position={[0.25, 0.25, 0]} rotation={[Math.PI / 2, 0, Math.PI / 4]}>
            <torusGeometry args={[0.12, 0.015, 8, 16]} />
            <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
          </mesh>
          <pointLight color="#8b4513" intensity={2} distance={4} />
        </group>
      </Float>
      
      {/* Shield/Badge */}
      <Float speed={1.3} rotationIntensity={0.3} floatIntensity={0.4}>
        <group ref={shieldRef} position={[-5, 4, -5]}>
          {/* Shield shape using multiple boxes */}
          <mesh>
            <boxGeometry args={[0.6, 0.8, 0.08]} />
            <meshStandardMaterial color="#1e3a5f" roughness={0.3} metalness={0.6} />
          </mesh>
          {/* Gold border */}
          <mesh position={[0, 0, 0.045]}>
            <boxGeometry args={[0.5, 0.7, 0.02]} />
            <meshStandardMaterial color="#d4af37" metalness={0.95} roughness={0.05} emissive="#d4af37" emissiveIntensity={0.2} />
          </mesh>
          {/* Center emblem */}
          <mesh position={[0, 0.1, 0.06]}>
            <circleGeometry args={[0.15, 32]} />
            <meshStandardMaterial color="#d4af37" metalness={0.95} roughness={0.05} />
          </mesh>
          {/* Star points */}
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <mesh key={i} position={[Math.sin(angle * Math.PI / 180) * 0.1, 0.1 + Math.cos(angle * Math.PI / 180) * 0.1, 0.07]} rotation={[0, 0, angle * Math.PI / 180]}>
              <boxGeometry args={[0.03, 0.08, 0.01]} />
              <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
            </mesh>
          ))}
          <pointLight color="#1e90ff" intensity={2} distance={4} />
        </group>
      </Float>
      
      {/* Additional floating paragraphs/documents */}
      {[
        { pos: [8, 4, -1], rot: 0.2 },
        { pos: [-8, 6, 0], rot: -0.3 },
        { pos: [5, 7, -4], rot: 0.15 },
      ].map((item, i) => (
        <Float key={i} speed={1 + i * 0.3} rotationIntensity={0.2} floatIntensity={0.3}>
          <group position={item.pos as [number, number, number]}>
            <mesh rotation={[0, item.rot, Math.sin(i) * 0.1]}>
              <planeGeometry args={[0.5, 0.7]} />
              <meshStandardMaterial 
                color="#fffef0" 
                roughness={0.9}
                transparent
                opacity={0.9}
              />
            </mesh>
            {/* Text lines */}
            {[0.2, 0.1, 0, -0.1, -0.2].map((y, j) => (
              <mesh key={j} position={[0, y, 0.01]} rotation={[0, item.rot, Math.sin(i) * 0.1]}>
                <planeGeometry args={[0.35, 0.02]} />
                <meshStandardMaterial color="#333" transparent opacity={0.3 + j * 0.1} />
              </mesh>
            ))}
          </group>
        </Float>
      ))}
    </group>
  );
}

// ============================================
// CAMERA CONTROLLER WITH SMOOTH MOVEMENT
// ============================================
function CameraController() {
  const { camera } = useThree();
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const targetX = useRef(0);
  const targetY = useRef(0);
  
  useFrame(() => {
    // Smooth camera movement following mouse
    targetX.current += (mouseX.current - targetX.current) * 0.03;
    targetY.current += (mouseY.current - targetY.current) * 0.03;
    
    camera.position.x = targetX.current * 3;
    camera.position.y = 3.5 + targetY.current * 1.5;
    camera.lookAt(0, 1.5, -2);
  });
  
  // Track mouse position
  if (typeof window !== 'undefined') {
    window.onmousemove = (e) => {
      mouseX.current = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY.current = -(e.clientY / window.innerHeight) * 2 + 1;
    };
  }
  
  return null;
}

// ============================================
// MAIN SCENE COMPONENT
// ============================================
interface CourtroomSceneProps {
  onSelectTopic: (topic: string) => void;
  onOpenAIChat: () => void;
  isAIChatOpen: boolean;
}

export default function CourtroomScene({ 
  onSelectTopic, 
  onOpenAIChat,
  isAIChatOpen,
}: CourtroomSceneProps) {
  
  const handleCanvasClick = useCallback(() => {
    // Empty handler - specific clicks are handled by child components
  }, []);

  return (
    <div className="w-100 h-100 position-absolute top-0 start-0">
      <Canvas
        shadows
        onClick={handleCanvasClick}
        gl={{ antialias: true, alpha: false }}
        style={{ background: 'linear-gradient(180deg, #e8f4fc 0%, #f5f0e8 50%, #e8e4e0 100%)' }}
      >
        <Suspense fallback={null}>
          {/* Camera */}
          <PerspectiveCamera makeDefault position={[0, 4, 10]} fov={55} />
          <CameraController />
          
          {/* Environment lighting */}
          <Environment preset="lobby" />
          
          {/* Main lights */}
          <ambientLight intensity={0.6} color="#fff8f0" />
          <directionalLight 
            position={[10, 15, 5]} 
            intensity={1.2} 
            color="#ffffff"
            castShadow
          />
          <directionalLight 
            position={[-10, 10, 5]} 
            intensity={0.5} 
            color="#f0f8ff"
          />
          
          {/* Warm accent lights */}
          <pointLight position={[0, 8, -5]} intensity={2} color="#d4af37" distance={20} />
          <pointLight position={[-6, 6, 2]} intensity={1} color="#ffd700" distance={15} />
          <pointLight position={[6, 6, 2]} intensity={1} color="#ffd700" distance={15} />
          
          {/* Courtroom elements */}
          <CourtroomFloor />
          <CourtroomStructure />
          <FloatingParticles />
          <FloatingLegalObjects />
          
          {/* Interactive elements */}
          <JudgeBench onClick={() => onSelectTopic('constitutional')} />
          <WitnessStand onClick={() => onSelectTopic('criminal')} />
          <LawyerTable onClick={() => onSelectTopic('employment')} side="left" />
          <LawyerTable onClick={() => onSelectTopic('consumer')} side="right" />
          
          {/* AI Consultant Orb */}
          <AIConsultantOrb 
            onInteract={onOpenAIChat}
            isActive={isAIChatOpen}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

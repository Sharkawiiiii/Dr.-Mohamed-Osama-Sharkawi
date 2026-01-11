"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function NeedleParticles() {
    const ref = useRef<THREE.Points>(null);

    // Generate needle-like particle positions
    const particles = useMemo(() => {
        const positions = new Float32Array(2000 * 3);
        const colors = new Float32Array(2000 * 3);

        // Brand colors
        const brandColors = [
            new THREE.Color("#F5A623"), // Gold
            new THREE.Color("#E85D04"), // Orange  
            new THREE.Color("#0D9488"), // Teal
            new THREE.Color("#2563EB"), // Blue
            new THREE.Color("#06B6D4"), // Cyan
        ];

        for (let i = 0; i < 2000; i++) {
            const i3 = i * 3;

            // Create spherical distribution with concentration toward center
            const radius = Math.random() * 4 + 1;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i3 + 2] = (Math.random() - 0.5) * 3;

            // Assign random brand color
            const color = brandColors[Math.floor(Math.random() * brandColors.length)];
            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;
        }

        return { positions, colors };
    }, []);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
            ref.current.rotation.y = state.clock.elapsedTime * 0.05;
        }
    });

    return (
        <Points ref={ref} positions={particles.positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                vertexColors
                size={0.02}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.8}
            />
        </Points>
    );
}

function FloatingNeedles() {
    const groupRef = useRef<THREE.Group>(null);

    const needles = useMemo(() => {
        return Array.from({ length: 15 }, (_, i) => ({
            position: [
                (Math.random() - 0.5) * 6,
                (Math.random() - 0.5) * 4,
                (Math.random() - 0.5) * 3,
            ] as [number, number, number],
            rotation: [
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI,
            ] as [number, number, number],
            speed: 0.2 + Math.random() * 0.3,
            phase: Math.random() * Math.PI * 2,
        }));
    }, []);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.children.forEach((child, i) => {
                const needle = needles[i];
                child.position.y += Math.sin(state.clock.elapsedTime * needle.speed + needle.phase) * 0.002;
                child.rotation.z += 0.001;
            });
        }
    });

    return (
        <group ref={groupRef}>
            {needles.map((needle, i) => (
                <mesh key={i} position={needle.position} rotation={needle.rotation}>
                    <cylinderGeometry args={[0.003, 0.001, 0.3, 8]} />
                    <meshBasicMaterial color={i % 2 === 0 ? "#0D9488" : "#F5A623"} transparent opacity={0.6} />
                </mesh>
            ))}
        </group>
    );
}

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 -z-10">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white z-10 opacity-40" />

            {/* 3D Canvas */}
            <Canvas
                camera={{ position: [0, 0, 5], fov: 60 }}
                dpr={[1, 2]}
                className="!absolute inset-0"
            >
                <ambientLight intensity={0.5} />
                <NeedleParticles />
                <FloatingNeedles />
            </Canvas>

            {/* Additional gradient overlays for depth */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/80 z-20" />
        </div>
    );
}

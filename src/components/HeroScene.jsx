import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const RotatingIcosahedron = () => {
    const meshRef = useRef();
    const materialRef = useRef();

    const geometry = useMemo(() => {
        return new THREE.IcosahedronGeometry(2.2, 1);
    }, []);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.002;
            meshRef.current.rotation.y += 0.003;

            const mouseX = state.mouse.x * 0.08;
            const mouseY = state.mouse.y * 0.08;

            meshRef.current.rotation.x += mouseY * 0.01;
            meshRef.current.rotation.z += mouseX * 0.01;
        }
    });

    return (
        <mesh ref={meshRef} geometry={geometry}>
            <meshBasicMaterial
                ref={materialRef}
                color="#4a7c59"
                wireframe={true}
                transparent={true}
                opacity={0.15}
            />
        </mesh>
    );
};

const HeroScene = () => {
    return (
        <div
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
        >
            <Canvas
                camera={{ position: [0, 0, 6], fov: 50 }}
                gl={{ alpha: true, antialias: true }}
                style={{ background: "transparent" }}
                dpr={[1, 1.5]}
            >
                <RotatingIcosahedron />
            </Canvas>
        </div>
    );
};

export default HeroScene;

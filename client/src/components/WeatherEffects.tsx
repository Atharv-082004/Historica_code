import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export type WeatherType = "none" | "rain" | "fog" | "dust" | "haze";

interface Props {
  type: WeatherType;
  intensity?: number;
}

const PARTICLE_COUNT = 800;

function RainEffect({ intensity = 1 }: { intensity?: number }) {
  const meshRef = useRef<THREE.Points>(null!);

  const { positions, velocities } = useMemo(() => {
    const count = Math.round(PARTICLE_COUNT * intensity);
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count);
    const spread = 12;
    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = Math.random() * 14 - 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread;
      velocities[i] = 0.06 + Math.random() * 0.04;
    }
    return { positions, velocities };
  }, [intensity]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions.slice(), 3));
    return geo;
  }, [positions]);

  useFrame(() => {
    if (!meshRef.current) return;
    const pos = meshRef.current.geometry.attributes.position.array as Float32Array;
    const count = pos.length / 3;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] -= velocities[i];
      pos[i * 3]     -= 0.008;
      if (pos[i * 3 + 1] < -2) {
        pos[i * 3 + 1] = 12;
        pos[i * 3]     = (Math.random() - 0.5) * 12;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
      }
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial color="#a8cfe0" size={0.04} transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}

function DustEffect({ intensity = 1 }: { intensity?: number }) {
  const meshRef = useRef<THREE.Points>(null!);

  const { positions, phases } = useMemo(() => {
    const count = Math.round(PARTICLE_COUNT * 0.6 * intensity);
    const positions = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      positions[i * 3]     = Math.cos(theta) * r;
      positions[i * 3 + 1] = Math.random() * 5;
      positions[i * 3 + 2] = Math.sin(theta) * r;
      phases[i] = Math.random() * Math.PI * 2;
    }
    return { positions, phases };
  }, [intensity]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions.slice(), 3));
    return geo;
  }, [positions]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.elapsedTime;
    const pos = meshRef.current.geometry.attributes.position.array as Float32Array;
    const count = pos.length / 3;
    for (let i = 0; i < count; i++) {
      pos[i * 3]     += Math.sin(t * 0.5 + phases[i]) * 0.015;
      pos[i * 3 + 2] += Math.cos(t * 0.4 + phases[i]) * 0.015;
      pos[i * 3 + 1] += Math.sin(t * 0.3 + phases[i] * 0.5) * 0.005;
      if (Math.abs(pos[i * 3]) > 11) pos[i * 3] *= -0.8;
      if (Math.abs(pos[i * 3 + 2]) > 11) pos[i * 3 + 2] *= -0.8;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial color="#c8a87a" size={0.09} transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

function FogMotes({ intensity = 1 }: { intensity?: number }) {
  const meshRef = useRef<THREE.Points>(null!);

  const { positions, phases } = useMemo(() => {
    const count = Math.round(400 * intensity);
    const positions = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = Math.random() * 3;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 16;
      phases[i] = Math.random() * Math.PI * 2;
    }
    return { positions, phases };
  }, [intensity]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions.slice(), 3));
    return geo;
  }, [positions]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.elapsedTime;
    const pos = meshRef.current.geometry.attributes.position.array as Float32Array;
    const count = pos.length / 3;
    for (let i = 0; i < count; i++) {
      pos[i * 3]     += Math.sin(t * 0.2 + phases[i]) * 0.006;
      pos[i * 3 + 2] += Math.cos(t * 0.15 + phases[i]) * 0.006;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial color="#d0d8e0" size={0.18} transparent opacity={0.22} sizeAttenuation />
    </points>
  );
}

export function getMonumentWeather(state: string): WeatherType {
  const dustStates = ["Rajasthan", "Gujarat"];
  const rainStates = ["Odisha", "West Bengal", "Kerala", "Tamil Nadu"];
  const hazeStates = ["Delhi", "Uttar Pradesh", "Telangana", "Maharashtra"];
  const fogStates = ["Punjab"];
  if (dustStates.includes(state)) return "dust";
  if (rainStates.includes(state)) return "rain";
  if (hazeStates.includes(state)) return "haze";
  if (fogStates.includes(state)) return "fog";
  return "none";
}

export function WeatherEffects({ type, intensity = 1 }: Props) {
  if (type === "none") return null;
  if (type === "rain") return <RainEffect intensity={intensity} />;
  if (type === "dust") return <DustEffect intensity={intensity} />;
  if (type === "fog" || type === "haze") return <FogMotes intensity={type === "haze" ? 0.6 : 1} />;
  return null;
}

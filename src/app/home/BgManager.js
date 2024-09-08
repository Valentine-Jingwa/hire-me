// BgManager.js
'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function BgManager({ children }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const starGeometry = new THREE.SphereGeometry(0.1, 24, 24);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const stars = [];

    // Create star field
    function addStar() {
      const star = new THREE.Mesh(starGeometry, starMaterial);
      const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100)); // Random position
      star.position.set(x, y, z);
      scene.add(star);
      stars.push(star);
    }

    Array(200).fill().forEach(addStar); // Create 200 stars

    camera.position.z = 5;

    // Animate the camera moving through space
    function animate() {
      requestAnimationFrame(animate);

      // Move the camera forward (deeper into space)
      camera.position.z -= 0.05;

      // Loop stars back around when they pass the camera
      stars.forEach(star => {
        if (star.position.z > camera.position.z) {
          star.position.z = THREE.MathUtils.randFloatSpread(100) - 50; // Reset stars behind the camera
        }
      });

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef}>{children}</div>;
}

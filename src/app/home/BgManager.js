'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function BgManager({ children }) {
  const mountRef = useRef(null);

  useEffect(() => {
    // Setup Three.js scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio); // Adjust for device pixel ratio
    renderer.setClearColor(0x000000, 1); // Set background to black

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Handle window resizing to adjust canvas size
    window.addEventListener('resize', () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    // Create stars with glowing material
    const starGeometry = new THREE.SphereGeometry(0.1, 24, 24);
    const starMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      emissive: 0x4444ff, // Faint blue glow
      emissiveIntensity: 0.5,
    });
    
    const stars = [];

    // Create star field
    function addStar() {
      const star = new THREE.Mesh(starGeometry, starMaterial);
      const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(500)); // Spread stars farther
      star.position.set(x, y, z);
      scene.add(star);
      stars.push(star);
    }

    Array(500).fill().forEach(addStar); // Create 500 stars for more depth

    camera.position.z = 5;

    // Animate the camera moving through space
    function animate() {
      requestAnimationFrame(animate);

      // Move the camera forward (deeper into space)
      camera.position.z -= 0.1; // Adjust speed for smoother travel

      // Loop stars back when they pass the camera
      stars.forEach(star => {
        if (star.position.z > camera.position.z) {
          star.position.z -= 500; // Reset stars behind the camera to create endless loop
        }
      });

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement); // Ensure cleanup
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'visible' }}>
      <div
        ref={mountRef}
        style={{
          position: 'fixed', // Keep the canvas fixed in place
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1, // Place the canvas behind other elements
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        {children}
      </div>
    </div>
  );
}

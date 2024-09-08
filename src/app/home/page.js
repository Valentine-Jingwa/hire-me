'use client';
import { FaUserAlt, FaTools, FaAddressCard, FaEnvelope, FaProjectDiagram } from 'react-icons/fa';
import BgManager from './BgManager';
import { motion } from 'framer-motion';

// Bubble positions in 3D space with color and depth properties
const bubbles = [
  { title: 'Experience', link: '/experience', icon: <FaUserAlt size={80} color="white" />, depth: 1.1, color: 'rgba(255, 100, 100, 0.7)', x: '-10vw', y: '-20vh' },
  { title: 'Skills', link: '/skills', icon: <FaTools size={80} color="white" />, depth: 1.5, color: 'rgba(100, 255, 100, 0.7)', x: '20vw', y: '20vh' },
  { title: 'Profile', link: '/profile', icon: <FaAddressCard size={80} color="white" />, depth: 0.6, color: 'rgba(100, 100, 255, 0.7)', x: '0vw', y: '0vh' }, // Centered bubble
  { title: 'Contact', link: '/contact', icon: <FaEnvelope size={80} color="white" />, depth: 2, color: 'rgba(255, 255, 100, 0.7)', x: '15vw', y: '-25vh' },
  { title: 'Projects', link: '/projects', icon: <FaProjectDiagram size={80} color="white" />, depth: 0.85, color: 'rgba(255, 100, 255, 0.7)', x: '-15vw', y: '15vh' },
];

// Dynamic Background Animation Effect (same as before)
function DynamicBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="w-full h-full bg-gradient-to-r from-purple-700 via-blue-500 to-indigo-800 opacity-30" />
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-pink-300 to-purple-500 opacity-40 blur-2xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{ top: '20%', left: '70%' }}
      />
      <motion.div
        className="absolute w-60 h-60 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 opacity-40 blur-2xl"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{ top: '60%', left: '20%' }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <BgManager>
      {/* Add Dynamic Background */}
      <DynamicBackground />

      <div
        className="relative w-full h-screen flex items-center justify-center"
        style={{ perspective: '1200px' }}
      >
        {/* Title and Description */}
        <div className="absolute top-10 w-full text-center z-10 text-white">
          <h1 className="text-5xl font-bold mb-6">Welcome to My Portfolio</h1>
          <p className="text-lg">Hover over the planets and click to explore!</p>
        </div>

        {/* Render Bubbles in 3D Space */}
        {bubbles.map((bubble, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.2, rotateY: 10, rotateX: 5 }} // Add 3D effect on hover
            whileTap={{ scale: 1.5, opacity: 0, transitionEnd: { display: 'none' } }} // Explosion effect
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: `calc(50% + ${bubble.y})`,
              left: `calc(50% + ${bubble.x})`,
              transform: `translateZ(${bubble.depth * 100}px)`, // Simulate 3D depth
              background: bubble.color,
            }}
            className="flex items-center justify-center w-32 h-32 sm:w-48 sm:h-48 rounded-full shadow-lg cursor-pointer"
          >
            <a href={bubble.link} className="text-white flex items-center justify-center flex-col">
              {bubble.icon}
              <span className="mt-4 text-lg sm:text-xl">{bubble.title}</span>
            </a>
          </motion.div>
        ))}
      </div>
    </BgManager>
  );
}

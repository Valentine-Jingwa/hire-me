// home/page.js
'use client';
import { FaUserAlt, FaTools, FaAddressCard, FaEnvelope, FaProjectDiagram } from 'react-icons/fa';
import BgManager from './BgManager';
import Bubble from './Bubble';

// Bubble positions in 3D space
const bubbles = [
  { title: 'Experience', link: '/experience', icon: <FaUserAlt size={80} color="white" />, depth: 1.1, x: '-10vw', y: '-20vh' },
  { title: 'Skills', link: '/skills', icon: <FaTools size={80} color="white" />, depth: 1.5, x: '20vw', y: '20vh' },
  { title: 'Profile', link: '/profile', icon: <FaAddressCard size={80} color="white" />, depth: 0.6, x: '0vw', y: '0vh' }, // Centered bubble
  { title: 'Contact', link: '/contact', icon: <FaEnvelope size={80} color="white" />, depth: 2, x: '15vw', y: '-25vh' },
  { title: 'Projects', link: '/projects', icon: <FaProjectDiagram size={80} color="white" />, depth: 0.85, x: '-15vw', y: '15vh' },
];

export default function Home() {
  return (
    <BgManager>
      <div
        className="absolute w-full h-screen"
        style={{ perspective: '1200px' }}
      >
        {bubbles.map((bubble, index) => (
          <Bubble
            key={index}
            title={bubble.title}
            link={bubble.link}
            icon={bubble.icon}
            depth={bubble.depth}
            x={bubble.x}
            y={bubble.y}
          />
        ))}
      </div>
    </BgManager>
  );
}

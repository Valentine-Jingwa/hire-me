'use client';
import { FaUserAlt, FaTools, FaAddressCard, FaEnvelope, FaProjectDiagram } from 'react-icons/fa';
import BgManager from './BgManager';
import Bubble from './Bubble';

// Position bubbles using vw (viewport width) and vh (viewport height) to ensure they stay on screen
const bubbles = [
  { title: 'Experience', link: '/experience', icon: <FaUserAlt size={80} color="white" />, depth: 2, x: '-30vw', y: '-20vh' },
  { title: 'Skills', link: '/skills', icon: <FaTools size={80} color="white" />, depth: 3, x: '25vw', y: '20vh' },
  { title: 'Profile', link: '/profile', icon: <FaAddressCard size={80} color="white" />, depth: 1, x: '0vw', y: '0vh' }, // Centered bubble
  { title: 'Contact', link: '/contact', icon: <FaEnvelope size={80} color="white" />, depth: 4, x: '35vw', y: '-25vh' },
  { title: 'Projects', link: '/projects', icon: <FaProjectDiagram size={80} color="white" />, depth: 1.5, x: '10vw', y: '15vh' },
];

export default function Home() {
  return (
    <BgManager>
      <div
        className="relative w-full h-screen"
        style={{ perspective: '1200px' }} // Set perspective to simulate 3D space
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

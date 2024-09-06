'use client';
import { FaUserAlt, FaTools, FaAddressCard, FaEnvelope, FaProjectDiagram } from 'react-icons/fa';
import BgManager from './BgManager';
import Bubble from './Bubble';

const bubbles = [
  { title: 'Experience', link: '/experience', icon: <FaUserAlt size={50} /> },
  { title: 'Skills', link: '/skills', icon: <FaTools size={50} /> },
  { title: 'Profile', link: '/profile', icon: <FaAddressCard size={50} /> },
  { title: 'Contact', link: '/contact', icon: <FaEnvelope size={50} /> },
  { title: 'Projects', link: '/projects', icon: <FaProjectDiagram size={50} /> },
];

export default function Home() {
  return (
    <BgManager>
      <div className="flex justify-center items-center min-h-screen flex-wrap gap-8 p-10">
        {bubbles.map((bubble, index) => (
          <Bubble key={index} title={bubble.title} link={bubble.link} icon={bubble.icon} />
        ))}
      </div>
    </BgManager>
  );
}

'use client';
import { IoArrowBack } from 'react-icons/io5';
import { FaRocket } from 'react-icons/fa';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import BgManager from '../home/BgManager';
import Image from 'next/image';

// Skill Data with Logos, Ratings, and Descriptions
const skills = [
  { name: 'HTML', rating: 4, comment: 'Better', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/html5.svg' },
  { name: 'CSS', rating: 5, comment: 'Advanced', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/css3.svg' },
  { name: 'JavaScript', rating: 6, comment: 'Expert', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/javascript.svg' },
  { name: 'Python', rating: 5, comment: 'Advanced', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/python.svg' },
  { name: 'React', rating: 4, comment: 'Better', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/react.svg' },
  { name: 'TypeScript', rating: 3, comment: 'Good', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/typescript.svg' },
  { name: 'C++', rating: 2, comment: 'Basic', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/cplusplus.svg' },
  { name: 'Java', rating: 3, comment: 'Good', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/java.svg' },
  { name: 'Node.js', rating: 4, comment: 'Better', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/nodedotjs.svg' },
];

// Colors for each rating level
const ratingColors = {
  1: 'bg-gray-400', // Not Acquired
  2: 'bg-blue-300', // Basic
  3: 'bg-green-400', // Good
  4: 'bg-yellow-400', // Better
  5: 'bg-orange-400', // Advanced
  6: 'bg-red-400',  // Expert
};

// Dynamic Background Animation Effect
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

export default function Skills() {
  const [score, setScore] = useState(0);
  const [rocketAnimation, setRocketAnimation] = useState(false);
  const [missiles, setMissiles] = useState([]);
  const [target, setTarget] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null); // State to handle hover on skill icons
  const [activeSkill, setActiveSkill] = useState(null); // State to handle active skill after missile attack

  // Control rocket and missile animation
  const rocketControls = useAnimation();

  // Handle skill click to fire missiles at clicked skill
  const handleSkillClick = (skill, e) => {
    e.preventDefault();

    setTarget(skill.name);
    setRocketAnimation(true);

    // Fire missiles
    setMissiles([...missiles, { id: skill.name, rating: skill.rating }]);

    // Add score based on skill rating
    setScore(score + skill.rating);

    // Activate skill card
    setActiveSkill(skill);

    // Clear animation after missile hits
    setTimeout(() => {
      setRocketAnimation(false);
      setMissiles([]);
    }, 1500);
  };

  return (
    <BgManager>
      {/* Interactive Background */}
      <DynamicBackground />

      {/* Back Button */}
      <Link className="fixed top-4 left-4 text-white p-2 rounded hover:bg-gray-700 z-10" href="/home">
        <IoArrowBack />
      </Link>

      {/* Skill Radar */}
      <div className="relative flex flex-col items-center justify-center min-h-screen z-10 text-white space-y-8">
        <h1 className="text-5xl font-bold">Skills & Progress</h1>
        <p className="text-lg mb-6">Hover over the radar and click a skill to fire missiles!</p>

        {/* Radar Chart */}
        <div className="relative w-96 h-96 rounded-full border border-blue-300 shadow-lg" id="radar">
          {/* Rocket Icon (moves around but doesn't rotate the whole radar) */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-4xl text-purple-400"
            animate={rocketControls}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          >
            <FaRocket />
          </motion.div>

          {/* Skill Bubbles - Perfect Circle Arrangement */}
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="absolute bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-full text-white cursor-pointer"
              style={{
                top: `${50 + Math.sin((index / skills.length) * 2 * Math.PI) * 40}%`,
                left: `${50 + Math.cos((index / skills.length) * 2 * Math.PI) * 40}%`,
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)} // Handle hover
              onMouseLeave={() => setHoveredSkill(null)} // Remove hover state
              onClick={(e) => handleSkillClick(skill, e)}
            >
              <img src={skill.logo} alt={skill.name} className="w-8 h-8" />
            </motion.div>
          ))}

          {/* Skill Name Popup on Hover */}
          {hoveredSkill && (
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2 rounded-md bg-black bg-opacity-75 text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              {hoveredSkill}
            </motion.div>
          )}
        </div>

        {/* Missile Animation */}
        {missiles.map((missile) => (
          <motion.div
            key={missile.id}
            className="absolute bg-red-500 w-4 h-4 rounded-full"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: Math.random() * 200 - 100, y: Math.random() * 200 - 100, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        ))}

        {/* Interactive Scoreboard */}
        <div className="fixed top-4 right-4 bg-gray-800 p-4 rounded-lg shadow-lg text-white z-10">
          <h2 className="text-xl font-bold">Score: {score}</h2>
        </div>

        {/* Skill Card (appears after clicking a skill) */}
        {activeSkill && (
          <motion.div
            className="absolute bottom-10 bg-gray-800 p-6 rounded-lg shadow-lg text-white w-72 z-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <h2 className="text-2xl font-bold mb-4">{activeSkill.name}</h2>
            <p className="mb-2">Rating: {activeSkill.rating} - {activeSkill.comment}</p>
            <div className="relative flex items-center h-4 bg-gray-500 rounded-full overflow-hidden">
              <div
                className={`absolute h-full ${ratingColors[activeSkill.rating]}`}
                style={{ width: `${(activeSkill.rating / 6) * 100}%` }}
              />
            </div>
          </motion.div>
        )}
      </div>
    </BgManager>
  );
}

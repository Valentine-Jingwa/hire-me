'use client';
import { IoArrowBack } from 'react-icons/io5';
import { FaBriefcase, FaUserGraduate } from 'react-icons/fa';
import BgManager from '../home/BgManager';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Experience() {
  return (
    <BgManager>
      <Link className="fixed top-4 left-4 text-white p-2 rounded" href="/home">
        <IoArrowBack />
      </Link>

      {/* Page Title */}
      <motion.div
        className="absolute top-10 left-0 right-0 text-center z-10 text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-6">Professional Experience</h1>
        <p className="text-lg">A timeline of my experience and accomplishments</p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="relative mt-28 z-10 w-full max-w-5xl mx-auto px-6">
        <div className="timeline">

          {/* Job 1 - Capstone Project */}
          <motion.div
            className="timeline-item bg-gray-800 p-6 rounded-lg shadow-lg mb-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4">
              <FaBriefcase className="text-yellow-400 text-3xl" />
              <h2 className="text-2xl font-semibold text-white">Software Developer (Capstone Project)</h2>
            </div>
            <p className="text-gray-400">Vita/SAIT — September 2023 – April 2024</p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>Engineered a comprehensive medical information collection application using the MERN stack.</li>
              <li>Managed project timelines using Gantt charts and facilitated client meetings.</li>
              <li>Delivered an application that exceeded client expectations through collaborative project management.</li>
            </ul>
          </motion.div>

          {/* Job 2 - Freelance Developer */}
          <motion.div
            className="timeline-item bg-gray-800 p-6 rounded-lg shadow-lg mb-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4">
              <FaBriefcase className="text-yellow-400 text-3xl" />
              <h2 className="text-2xl font-semibold text-white">Freelance Developer</h2>
            </div>
            <p className="text-gray-400">Self-Employed — October 2021 – June 2023</p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>Designed and developed dynamic websites and applications for various clients.</li>
              <li>Utilized a range of technologies, including HTML, CSS, and JavaScript, to create user-friendly interfaces.</li>
              <li>Ensured project completion within deadlines, delivering high-quality solutions.</li>
            </ul>
          </motion.div>

          {/* Education Section */}
          <motion.div
            className="timeline-item bg-gray-800 p-6 rounded-lg shadow-lg mb-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4">
              <FaUserGraduate className="text-blue-400 text-3xl" />
              <h2 className="text-2xl font-semibold text-white">Diploma in Software Development</h2>
            </div>
            <p className="text-gray-400">Southern Alberta Institute of Technology (SAIT) — September 2022 – April 2024</p>
            <p className="text-gray-300 mt-4">
              Relevant Coursework: Coding with Python, Networking Foundations, Web Development, Advanced Mathematics, and Technical Communications.
            </p>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            className="timeline-item bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4">
              <FaUserGraduate className="text-green-400 text-3xl" />
              <h2 className="text-2xl font-semibold text-white">Certifications</h2>
            </div>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>Certified ScrumMaster (CSM)</li>
              <li>AWS Certified Solutions Architect – Associate</li>
              <li>Google Associate Cloud Engineer</li>
              <li>Microsoft Certified: Azure Developer Associate</li>
              <li>CompTIA Security+</li>
              <li>Certified Kubernetes Application Developer (CKAD)</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Decorative Dots (Enhancing UX) */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute w-60 h-60 rounded-full bg-blue-500 opacity-20 blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '20%', left: '80%' }}
        />
        <motion.div
          className="absolute w-40 h-40 rounded-full bg-purple-500 opacity-20 blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ bottom: '10%', right: '40%' }}
        />
      </div>
    </BgManager>
  );
}

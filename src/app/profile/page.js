'use client';
import { IoArrowBack } from 'react-icons/io5';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import BgManager from '../home/BgManager';
import profileImage from './image.jpg';

// Skill Icons (You can replace with appropriate URLs or icon components)
const skillIcons = {
  html: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/html5.svg',
  css: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/css3.svg',
  javascript: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/javascript.svg',
  typescript: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/typescript.svg',
  react: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/react.svg',
  nodejs: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/nodedotjs.svg',
  python: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/python.svg',
  java: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/java.svg',
};

export default function Profile() {
  return (
    <BgManager>
      <div className="min-h-screen flex flex-col items-center justify-start max-w-4xl mx-auto py-10 px-6 space-y-10">
        {/* Back Button */}
        <Link
          className="fixed top-4 left-4 hover:bg-gray-800 active:bg-gray-800 text-white p-2 rounded"
          href="/home"
        >
          <IoArrowBack />
        </Link>

        {/* Profile Header */}
        <motion.div
          className="flex items-center space-x-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <Image
              src={profileImage}
              alt="Valentine Achalefi Jingwa"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="text-white">
            <h1 className="text-3xl font-bold">Valentine Achalefi Jingwa</h1>
            <h2 className="text-xl">Software Developer</h2>
            <p className="text-md text-gray-400">Calgary, AB, Canada</p>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="flex space-x-4 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a href="mailto:vallyjingwa@gmail.com" className="hover:text-gray-400">
            <FaEnvelope />
          </a>
          <a href="tel:+15876644681" className="hover:text-gray-400">
            <FaPhoneAlt />
          </a>
          <a
            href="https://linkedin.com/in/valentine-achalefi-jingwa-12607b252"
            target="_blank"
            className="hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg text-white shadow-lg w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="text-xl font-bold mb-4">Professional Summary</h2>
          <p>
          Driven and versatile software developer with a strong foundation in application development, configuration management, and database design. Adept at leveraging the latest technologies to create innovative, high-impact solutions. Known for my ability to streamline workflows, enhance user experiences, and deliver robust, scalable applications that exceed client expectations.
        </p>
        <p>
          With a proven track record of leading projects from concept to completion, I excel in fast-paced environments, working effectively both independently and within cross-functional teams. My ability to communicate technical ideas clearly and collaborate with diverse teams ensures the delivery of high-quality results.
          </p>
          <p>
          Eager to bring my blend of technical expertise and creative problem-solving skills to your team, I am dedicated to driving success and innovation in every project I undertake.


          </p>
        </motion.div>

        {/* Skills Section with Icons */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg text-white shadow-lg w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <h2 className="text-xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { name: 'HTML', icon: skillIcons.html },
              { name: 'CSS', icon: skillIcons.css },
              { name: 'JavaScript', icon: skillIcons.javascript },
              { name: 'TypeScript', icon: skillIcons.typescript },
              { name: 'React', icon: skillIcons.react },
              { name: 'Node.js', icon: skillIcons.nodejs },
              { name: 'Python', icon: skillIcons.python },
              { name: 'Java', icon: skillIcons.java },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-900 p-4 rounded text-center hover:bg-gray-700 transition duration-300"
              >
                <img src={skill.icon} alt={`${skill.name} Icon`} className="w-10 h-10 mb-2" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg text-white shadow-lg w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <h2 className="text-xl font-bold mb-4">Experience</h2>
          <div>
            <h3 className="text-lg font-semibold">Software Developer (Capstone Project)</h3>
            <p className="text-gray-400">Vita/SAIT - September 2023 – April 2024</p>
            <ul className="list-disc list-inside">
              <li>Engineered a comprehensive medical information collection application leveraging the MERN stack.</li>
              <li>Facilitated client meetings, scrums, and managed project timelines using Gantt charts.</li>
              <li>Ensured the application met and exceeded client specifications through diligent project management and teamwork.</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Freelance Developer</h3>
            <p className="text-gray-400">Self-Employed - October 2021 – June 2023</p>
            <ul className="list-disc list-inside">
              <li>Developed and maintained dynamic websites and web applications for a diverse clientele.</li>
              <li>Utilized a range of technologies, including HTML, CSS, and JavaScript, to create responsive, user-friendly interfaces.</li>
              <li>Managed project timelines meticulously, consistently delivering high-quality results on schedule.</li>
            </ul>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg text-white shadow-lg w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <h2 className="text-xl font-bold mb-4">Education</h2>
          <div>
            <h3 className="text-lg font-semibold">Diploma in Software Development</h3>
            <p className="text-gray-400">Southern Alberta Institute of Technology (SAIT) - September 2022 – April 2024</p>
            <p className="text-sm text-gray-400">
              Relevant Coursework: Coding with Python, Networking Foundations, Web Development, Advanced Mathematics, 
              Technical Communications
            </p>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg text-white shadow-lg w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <h2 className="text-xl font-bold mb-4">Certifications</h2>
          <ul className="list-disc list-inside">
            <li>Certified ScrumMaster (CSM)</li>
            <li>AWS Certified Solutions Architect – Associate</li>
            <li>Google Associate Cloud Engineer</li>
            <li>Microsoft Certified: Azure Developer Associate</li>
            <li>CompTIA Security+</li>
            <li>Certified Kubernetes Application Developer (CKAD)</li>
          </ul>
        </motion.div>
      </div>
    </BgManager>
  );
}

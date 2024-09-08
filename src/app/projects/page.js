'use client';
import { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import BgManager from '../home/BgManager';
import Image from 'next/image';
import Link from 'next/link';

// Dummy project data (replace with your own projects)
const projects = [
  {
    id: 1,
    title: 'Project One',
    category: 'React',
    year: 2023,
    description: 'This is a description for Project One. It showcases my skills in React and Tailwind CSS.',
    demoImages: ['/project1-1.png', '/project1-2.png'],
    demoVideos: ['/project1-demo.mp4'],
    link: '/project-one',
  },
  {
    id: 2,
    title: 'Project Two',
    category: 'Node.js',
    year: 2022,
    description: 'Project Two is focused on backend development using Node.js and MongoDB.',
    demoImages: ['/project2-1.png', '/project2-2.png'],
    demoVideos: ['/project2-demo.mp4'],
    link: '/project-two',
  },
  // Add more projects as needed
];

// Category options for filtering
const categories = ['All', 'React', 'Node.js', '2023', '2022'];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Filter projects based on the selected category
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(
          (project) =>
            project.category === filter || project.year.toString() === filter
        )
      );
    }
  }, [filter]);

  const openModal = (index) => {
    setIsLoading(true);
    setSelectedProject(filteredProjects[index]);
    setCurrentProjectIndex(index);

    setTimeout(() => {
      setIsLoading(false); // Simulate loading time
    }, 500);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextProject = () => {
    const nextIndex = (currentProjectIndex + 1) % filteredProjects.length;
    openModal(nextIndex);
  };

  const prevProject = () => {
    const prevIndex = (currentProjectIndex - 1 + filteredProjects.length) % filteredProjects.length;
    openModal(prevIndex);
  };

  return (
    <BgManager>
      <Link className="fixed top-4 left-4 text-white p-2 rounded" href="/home">
        <IoArrowBack />
      </Link>

      {/* Filter Options */}
      <div className="flex justify-center my-8">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-gray-700 text-white p-2 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10 max-w-6xl mx-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="relative group cursor-pointer"
            onClick={() => openModal(index)}
          >
            <Image
              src={project.demoImages[0]}
              alt={project.title}
              width={400}
              height={300}
              className="object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-bold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative bg-gray-900 text-white rounded-lg shadow-lg w-full max-w-4xl p-6 space-y-6">
            <button
              className="absolute top-4 right-4 text-white text-xl"
              onClick={closeModal}
            >
              <FaTimes />
            </button>

            <div className="flex items-center justify-between">
              <button onClick={prevProject} className="text-white text-xl">
                <FaArrowLeft />
              </button>

              <h2 className="text-3xl font-bold">{selectedProject.title}</h2>

              <button onClick={nextProject} className="text-white text-xl">
                <FaArrowRight />
              </button>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center h-40">
                <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
              </div>
            ) : (
              <>
                {/* Demo Images and Videos */}
                <div className="flex space-x-4 overflow-x-auto py-4">
                  {selectedProject.demoImages.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt={`${selectedProject.title} demo`}
                      width={200}
                      height={150}
                      className="rounded-lg"
                    />
                  ))}
                  {selectedProject.demoVideos.map((video, index) => (
                    <video
                      key={index}
                      controls
                      width="200"
                      className="rounded-lg"
                    >
                      <source src={video} type="video/mp4" />
                    </video>
                  ))}
                </div>

                {/* Project Description */}
                <p className="text-gray-400">{selectedProject.description}</p>

                {/* Go to Project Button */}
                <a
                  href={selectedProject.link}
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to Project
                </a>
              </>
            )}
          </div>
        </motion.div>
      )}
    </BgManager>
  );
}

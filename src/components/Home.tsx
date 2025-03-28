import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Skill, Project } from '../types';

const Home: React.FC = () => {
  const skills: Skill[] = [
    {
      name: 'Frontend Development',
      description: 'Description of your expertise in this area. Highlight your experience and achievements.',
    },
    {
      name: 'Backend Development',
      description: 'Description of your expertise in this area. Highlight your experience and achievements.',
    },
    {
      name: 'Database Management',
      description: 'Description of your expertise in this area. Highlight your experience and achievements.',
    },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Project Title 1',
      description: 'Brief description of the project and its key features.',
      imageUrl: '',
      link: '/projects',
    },
    {
      id: 2,
      title: 'Project Title 2',
      description: 'Brief description of the project and its key features.',
      imageUrl: '',
      link: '/projects',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-indigo-600">Your Name</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </p>
          <div className="space-x-4">
            <Link
              to="/projects"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg border border-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Skills */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Latest Projects Preview */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link
                  to={project.link}
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home; 
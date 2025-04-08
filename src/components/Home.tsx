import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Skill, Project } from '../types';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Home() {
  const skills: Skill[] = [
    {
      name: 'Full Stack Development',
      description: 'Experienced in building modern web applications using React, TypeScript, Node.js, and Express. Strong focus on type safety, maintainability, and performance optimization.',
    },
    {
      name: 'Cloud & DevOps',
      description: 'AWS Certified Cloud Practitioner with experience in cloud services. Proficient in Git, GitHub, and agile development methodologies using JIRA.',
    },
    {
      name: 'AI & Machine Learning',
      description: 'Research experience in Natural Language Processing and AI model fine-tuning. Published research in ACL on analyzing social relationships in digital communication.',
    },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Classic Pong Game',
      description: 'A modern implementation of the classic Pong game built with Phaser.js and React, featuring smooth animations and progressive difficulty.',
      imageUrl: '/portfolio/images/pong-game.png',
      link: '/projects/pong',
      technologies: ['React', 'TypeScript', 'Phaser.js']
    },
    {
      id: 2,
      title: 'TypeCoder',
      description: 'A web application that helps developers improve their typing speed and accuracy by practicing with real code snippets.',
      imageUrl: '/portfolio/images/type-coder.png',
      link: 'https://mgeraci19.github.io/Type-Coder/',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      isExternal: true
    },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4">
      {/* Hero Section */}
      <section className="text-center py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-2">
            Hi, I'm <span className="text-indigo-600">Michael Geraci</span>
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Software Engineering Analyst | Full Stack Developer | AI Enthusiast
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Mgeraci19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/michael-e-geraci/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Featured Skills */}
      <section className="py-6">
        <h2 className="text-3xl font-bold text-center mb-6">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Latest Projects Preview */}
      <section className="py-6">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-40 bg-gray-200">
                {project.imageUrl && (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies?.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
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


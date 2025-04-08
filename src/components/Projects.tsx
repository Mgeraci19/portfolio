import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Project } from '../types';

export function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Classic Pong Game',
      description: 'A modern implementation of the classic Pong game built with Phaser.js and React. Features include:\n- Two-player local gameplay\n- Progressive difficulty with increasing ball speed\n- Smooth animations and physics\n- Responsive design\n- Built with TypeScript for type safety\n- Uses Phaser.js for game engine and React for integration',
      imageUrl: '/portfolio/images/pong-game.png',
      link: '/projects/pong',
      technologies: ['React', 'TypeScript', 'Phaser.js', 'HTML5 Canvas'],
      isExternal: false
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
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-64 bg-gray-900">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
              <p className="text-gray-600 mb-4 whitespace-pre-line">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies?.map((tech: string, i: number) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                    {tech}
                  </span>
                ))}
              </div>
              {project.isExternal ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 inline-flex items-center"
                >
                  View Project →
                </a>
              ) : (
                <Link
                  to={project.link}
                  className="text-indigo-600 hover:text-indigo-800 inline-flex items-center"
                >
                  View Project →
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


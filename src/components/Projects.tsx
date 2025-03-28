import { motion } from 'framer-motion';
import { Project } from '../types';

export function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Project 1',
      description: 'A detailed description of your first project. Explain the technologies used and your role.',
      imageUrl: '',
      link: 'https://github.com/yourusername/project1',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'A detailed description of your second project. Explain the technologies used and your role.',
      imageUrl: '',
      link: 'https://github.com/yourusername/project2',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'A detailed description of your third project. Explain the technologies used and your role.',
      imageUrl: '',
      link: 'https://github.com/yourusername/project3',
    },
  ];

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


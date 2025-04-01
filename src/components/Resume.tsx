import { motion } from 'framer-motion';
import { 
  SiTypescript, 
  SiJavascript, 
  SiPython,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiCss3,
  SiHtml5,
  SiTailwindcss,
  SiFlask,
  SiRedux,
  SiPandas,
  SiGit,
  SiGithub,
  SiJira,
  SiLinkedin,
  SiGmail,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiPostgresql,
  SiMongodb,
  SiAmazon,
  SiGooglecloud,
  SiCoder,
  SiGitlab,
  SiScrumalliance,
  SiTrello,
  SiTableau,
  SiConfluence,
  SiSlack
} from 'react-icons/si';

interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string[];
}

interface Education {
  institution: string;
  degree: string;
  period: string;
}

interface Certification {
  category: string;
  items: string[];
}

export function Resume() {
  const experiences: Experience[] = [
    {
      company: 'Deloitte',
      position: 'Software Engineering Analyst',
      location: 'Arlington, Virginia',
      period: 'Aug 2023–Present',
      description: [
        'Maintained a web application with 400 Million Yearly page views, ensuring optimal performance and reliability.',
        'Migrated 10+ core components from React to TypeScript, increasing test coverage to 80%, significantly improving type safety and maintainability.',
        'Contributed to the development of the IRS\'s online notification system, supporting two major releases that improved account notifications and digital notices for a page with 5.7 million yearly views.',
        'Resolved 5+ accessibility defects to achieve Section 508 and WCAG 2.1AA compliance, improving screen user usability'
      ],
    },
    {
      company: 'Deloitte',
      position: 'Summer Scholar',
      location: 'Arlington, Virginia',
      period: 'Summer 2022',
      description: [
        'Conducted in-depth research and competitive analysis on emerging technology markets, evaluating high-growth opportunities in areas such as cloud solutions, AI, and cybersecurity to inform strategic investment decisions.',
        'Participated in workshops focused on technical consulting methodologies, stakeholder communication, and solution architecture, enhancing skills in client-facing technical discussions and presentations.'
      ],
    },
    {
      company: 'University of Michigan',
      position: 'Research Assistant',
      location: 'Ann Arbor, Michigan',
      period: 'Summer 2021',
      description: [
        'Co-authored a paper published in ACL, Your spouse needs professional help: Determining the Contextual Appropriateness of Messages through Modeling Social Relationships',
        'Fine-tuned Natural Language processing AI models to analyze social relationships in digital communication datasets.'
      ],
    },
  ];

  const education: Education[] = [
    {
      institution: 'University at Buffalo',
      degree: 'M.S. Computer Science',
      period: '2019–2023',
    },
    {
      institution: 'University at Buffalo',
      degree: 'B.S. Computer Science',
      period: '2021-2023',
    },
  ];

  const certifications: Certification[] = [
    {
      category: 'Cloud',
      items: [
        'AWS Certified Cloud Practitioner',
        'Google Cloud Cloud Digital Leader',
        'ROI Training Cloud Development'
      ],
    },
  ];

  const technologies = {
    languages: [
      { name: 'Typescript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Javascript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Python', icon: SiPython, color: '#3776AB' }
    ],
    technologies: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Express', icon: SiExpress, color: '#000000' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'CSS', icon: SiCss3, color: '#1572B6' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Flask', icon: SiFlask, color: '#000000' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
      { name: 'Pandas', icon: SiPandas, color: '#150458' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
    ],
    other: [
      { name: 'Github', icon: SiGithub, color: '#181717' },
      { name: 'JIRA', icon: SiJira, color: '#0052CC' },
      { name: 'DSA', icon: SiCoder, color: '#2496ED' },
      { name: 'Agile', icon: SiScrumalliance, color: '#FF6B6B' },
      { name: 'CI/CD', icon: SiGitlab, color: '#FF6B6B' },
      { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
      { name: 'SQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
      { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
    ]
  };

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 bg-white p-8 rounded-lg shadow-md"
      >
        <h1 className="text-4xl font-bold mb-4">Michael Geraci</h1>
        <div className="flex flex-col items-center space-y-4">
          <p className="text-xl text-gray-600">Software Engineering Analyst at Deloitte</p>

          <div className="flex items-center space-x-4">
            <a 
              href="https://linkedin.com/in/michael-e-geraci" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <SiLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/Mgeraci19" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <SiGithub className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
          <p className="text-gray-500">Washington DC, USA</p>
        </div>
      </motion.div>

      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold">{exp.position}</h3>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-gray-500 text-sm mb-4">{exp.location} | {exp.period}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Technologies and Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-4">Languages</h3>
            <div className="grid grid-cols-2 gap-4">
              {technologies.languages.map((lang, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <lang.icon className="w-6 h-6" style={{ color: lang.color }} />
                  <span className="text-gray-700">{lang.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-4">Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {technologies.technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <tech.icon className="w-6 h-6" style={{ color: tech.color }} />
                  <span className="text-gray-700">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-4">Other</h3>
            <div className="grid grid-cols-2 gap-4">
              {technologies.other.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  <span className="text-gray-700">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-gray-500 text-sm">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Certifications</h2>
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">{cert.category}</h3>
              <ul className="list-disc list-inside">
                {cert.items.map((item, i) => (
                  <li key={i} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

    
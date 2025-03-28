import { motion } from 'framer-motion';

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export function Resume() {
  const experiences: Experience[] = [
    {
      company: 'Company 1',
      position: 'Senior Developer',
      period: '2020 - Present',
      description: 'Description of your role and achievements at this company.',
    },
    {
      company: 'Company 2',
      position: 'Full Stack Developer',
      period: '2018 - 2020',
      description: 'Description of your role and achievements at this company.',
    },
  ];

  const education: Education[] = [
    {
      institution: 'University Name',
      degree: 'Bachelor of Science in Computer Science',
      period: '2014 - 2018',
      description: 'Relevant coursework and achievements during your studies.',
    },
  ];

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Resume</h1>
      
      {/* Download Resume Button */}
      <div className="text-center mb-12">
        <a
          href="/path-to-your-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors inline-block"
        >
          Download PDF Resume
        </a>
      </div>

      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
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
              <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
              <p className="text-gray-700">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
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
              <p className="text-gray-500 text-sm mb-4">{edu.period}</p>
              <p className="text-gray-700">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

    
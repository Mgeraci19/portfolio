import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>
      
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>

        {/* Additional Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Other Ways to Connect</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Email: <a href="mailto:your.email@example.com" className="text-indigo-600 hover:text-indigo-800">your.email@example.com</a>
            </p>
            <p className="text-gray-600">
              LinkedIn: <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">linkedin.com/in/yourusername</a>
            </p>
            <p className="text-gray-600">
              GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">github.com/yourusername</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


import { SocialLink } from '../types';

export function Footer() {
  const socialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/Mgeraci19' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/michael-e-geraci/' },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white text-sm"
              >
                {social.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-300 text-sm">
            <p>© {new Date().getFullYear()} Michael Geraci. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};


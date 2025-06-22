import React from 'react';
import { Heart, Mail, Phone, Linkedin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">Ayush Sharma</h2>
            <p className="mt-2">Developer. Learner. Storyteller.</p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {['about', 'projects', 'experience', 'skills', 'contact'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
        </div>

        <hr className="border-gray-800 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Ayush Sharma. All rights reserved.</p>

          {/* Social + Contact */}
          <div className="flex items-center gap-4 text-sm">
            <a
              href="mailto:ayush@example.com"
              className="flex items-center gap-1 hover:text-white"
            >
              <Mail size={16} /> Email
            </a>
            <a
              href="tel:+911234567890"
              className="flex items-center gap-1 hover:text-white"
            >
              <Phone size={16} /> Call
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://codolio.com/ayush"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white"
            >
              <Globe size={16} /> Codolio
            </a>
          </div>
        </div>

        {/* Signature */}
        <div className="flex justify-center items-center gap-2 mt-6 text-sm text-gray-500">
          <span>Made with</span>
          <Heart size={16} className="text-red-500 fill-red-500" />
          <span>using React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

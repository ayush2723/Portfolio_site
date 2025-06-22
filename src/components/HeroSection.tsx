import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const aboutElement = document.getElementById('about');
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center pt-16 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="animate-fadeIn">
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              Ayush Sharma
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-light mb-6">
              Developer. Learner. Storyteller.
            </h2>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={scrollToAbout}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                About Me
              </button>
              <a
                href="#contact"
                className="px-6 py-3 border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center animate-fadeIn">
            <div className="w-60 h-60 sm:w-68 sm:h-68 rounded-full bg-gray-50 dark:bg-gray-900 shadow-xl flex items-center justify-center overflow-hidden">
              <img
                src="/Ayush.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
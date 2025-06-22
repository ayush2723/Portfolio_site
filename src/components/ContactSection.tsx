import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-white dark:bg-gray-800 transition-colors"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">
          About <span className="text-blue-600 dark:text-blue-400">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6 text-lg">
            <p>
              Hello! I'm Ayush, a passionate developer who loves building meaningful projects that solve real problems. My journey in tech started with a simple curiosity about how things work, and it has evolved into a deep appreciation for clean code and thoughtful design.
            </p>
            <p>
              What excites me most about development is the constant opportunity to learn and grow. I believe in the power of technology to transform lives, and I strive to create solutions that are not just functional, but also accessible and user-friendly.
            </p>
            <p>
              When I'm not coding, you might find me exploring new hiking trails, diving into a good book, or experimenting with new recipes in the kitchen. I bring the same creativity and attention to detail to my projects as I do to my hobbies.
            </p>
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-medium text-xl mb-4">My Philosophy</h3>
              <p className="italic text-gray-700 dark:text-gray-300">
                "I believe in building things that matter, learning continuously, and sharing knowledge generously."
              </p>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-medium text-xl mb-4">Fun Fact</h3>
              <p className="text-gray-700 dark:text-gray-300">
                I once debugged code for 48 hours straight fueled by nothing but curiosity and coffee!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
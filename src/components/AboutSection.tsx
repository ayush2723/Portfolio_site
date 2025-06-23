import React from 'react';

const AboutSection: React.FC = () => {
  console.log("aboutsection rendered");
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
            Hello! I'm Ayush a Computer Science student at NIT Hamirpur (CGPA: 9.28), passionate about blending logic and creativity through code. I enjoy working with C++, Python, and full-stack tools like React, Next.js, Node.js, and MongoDB to build fast, functional, and meaningful tech.
            </p>
            <p>
            Some of my key projects include BioKit, a DNA analysis toolkit used by 50+ academic users, and Kudos, a task management platform for employee engagement. I focus on clean architecture, performance boosts, and intuitive UI—always aiming for real-world impact.
            </p>
            <p>
           Beyond code, I’m actively involved in tech communities. I led Hack 5.0, a national hackathon with 600+ participants, and helped organize major events like E-Summit and Hill’ffair. I love solving problems, leading teams, and building tools that matter.
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
                Once stayed up two nights not to meet a deadline, but because a GC-content bug didn’t sit right with me — and neither did leaving it broken
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
   

  );
};

export default AboutSection;
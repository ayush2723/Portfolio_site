import React from 'react';
import skills from '../data/skills';

const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold mb-12">
          My <span className="text-blue-600 dark:text-blue-400">Skills</span>
        </h2>

        <div className="grid gap-12">
          {skills.map(category => (
            <div key={category.id}>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map(skill => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-sm rounded-full text-gray-800 dark:text-gray-200"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

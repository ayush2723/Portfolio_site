import React from 'react';
import experiences from '../data/experience';
import { Calendar, MapPin } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-extrabold mb-14 text-center text-gray-900 dark:text-white">
          Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 h-full border-l border-gray-300 dark:border-gray-700"></div>

          <div className="space-y-16">
            {experiences.map((experience, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={experience.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-600 dark:bg-blue-400 rounded-full z-10 border-4 border-white dark:border-gray-900"></div>

                  <div
                    className={`flex flex-col md:flex-row ${
                      isEven ? '' : 'md:flex-row-reverse'
                    } items-start md:items-center gap-10`}
                  >
                    {/* Time & Location */}
                    <div className="w-full md:w-1/2 text-sm text-gray-600 dark:text-gray-400 px-2 md:px-6">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        {experience.startDate} - {experience.endDate || 'Present'}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {experience.location}
                      </div>
                    </div>

                    {/* Experience Content */}
                    <div
                      className={`w-full md:w-1/2 px-2 md:px-6 ${
                        isEven ? 'text-left' : 'text-right'
                      }`}
                    >
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
                        {experience.title}
                      </h3>
                      <h4 className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-3">
                        {experience.company}
                      </h4>

                      <ul
                        className={`text-gray-700 dark:text-gray-300 text-sm list-disc ${
                          isEven ? 'ml-5' : 'md:list-inside'
                        } space-y-2`}
                      >
                        {experience.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      {experience.technologies?.length && (
                        <div
                          className={`flex flex-wrap gap-2 mt-4 ${
                            isEven ? '' : 'md:justify-end'
                          }`}
                        >
                          {experience.technologies.map(tech => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-full text-gray-800 dark:text-gray-100 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

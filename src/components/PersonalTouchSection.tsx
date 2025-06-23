import React from 'react';
import { Mic, BrainCircuit, Sparkles, ScissorsSquare } from 'lucide-react';

const PersonalTouchSection: React.FC = () => {
  const currentlyLearning = [
    {
      icon: <BrainCircuit size={24} />,
      title: 'AI & Machine Learning',
      description: 'Designing ML-powered CRISPR tools and predictive models for BioKit 2.',
    },
    {
      icon: <Sparkles size={24} />,
      title: 'Prompt Engineering',
      description: 'Mastering Google’s prompt engineering course for efficient task automation.',
    },
    {
      icon: <Mic size={24} />,
      title: 'Public Speaking',
      description: 'Sharpening stage presence and storytelling for leadership and event hosting.',
    },
    {
      icon: <ScissorsSquare size={24} />,
      title: 'Video Editing',
      description: 'Creating visually engaging digital content for campus campaigns and storytelling.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-12 text-center">
          What I'm Currently Learning
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentlyLearning.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors hover:transform hover:-translate-y-1 hover:shadow-lg duration-300"
            >
              <div className="flex justify-center mb-4 text-white">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{item.title}</h3>
              <p className="text-center text-white/80">{item.description}</p>
            </div>
          ))}
        </div>
        
       </div>
    </section>
  );
};

export default PersonalTouchSection;

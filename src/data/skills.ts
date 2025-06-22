export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
}

const skills: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Programming Languages',
    skills: [
      { name: 'JavaScript', level: 5 },
      { name: 'TypeScript', level: 4 },
      { name: 'Python', level: 4 },
      { name: 'C++', level: 3 },
      { name: 'HTML/CSS', level: 5 },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend Technologies',
    skills: [
      { name: 'React', level: 5 },
      { name: 'Redux', level: 4 },
      { name: 'Vue.js', level: 3 },
      { name: 'Tailwind CSS', level: 5 },
      { name: 'SCSS', level: 4 },
    ],
  },
  {
    id: 'backend',
    name: 'Backend Technologies',
    skills: [
      { name: 'Node.js', level: 4 },
      { name: 'Express', level: 4 },
      { name: 'Django', level: 3 },
      { name: 'GraphQL', level: 3 },
      { name: 'RESTful APIs', level: 5 },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & Platforms',
    skills: [
      { name: 'Git', level: 5 },
      { name: 'Docker', level: 3 },
      { name: 'AWS', level: 3 },
      { name: 'Firebase', level: 4 },
      { name: 'MongoDB', level: 4 },
      { name: 'PostgreSQL', level: 3 },
    ],
  },
  {
    id: 'soft',
    name: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', level: 5 },
      { name: 'Communication', level: 4 },
      { name: 'Team Collaboration', level: 5 },
      { name: 'Adaptability', level: 4 },
      { name: 'Time Management', level: 4 },
    ],
  },
];

export default skills;
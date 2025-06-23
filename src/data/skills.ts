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
      { name: 'C', level: 4 },
      { name: 'C++', level: 5 },
      { name: 'Python', level: 5 },
      { name: 'JavaScript', level: 5 },
      { name: 'TypeScript', level: 4 },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend Technologies',
    skills: [
      { name: 'React.js', level: 5 },
      { name: 'Next.js', level: 4 },
      { name: 'Tailwind CSS', level: 5 },
      { name: 'Bootstrap', level: 4 },
      { name: 'EJS', level: 3 },
    ],
  },
  {
    id: 'backend',
    name: 'Backend Technologies',
    skills: [
      { name: 'Node.js', level: 4 },
      { name: 'Express.js', level: 4 },
      { name: 'MongoDB', level: 4 },
      { name: 'Mongoose', level: 4 },
      { name: 'REST APIs', level: 5 },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & Platforms',
    skills: [
      { name: 'VS Code', level: 5 },
      { name: 'Git & GitHub', level: 5 },
      { name: 'Postman', level: 4 },
      { name: 'Streamlit', level: 5 },
      { name: 'Biopython', level: 5 },
      { name: 'Matplotlib', level: 4 },
    ],
  },
  {
    id: 'cs-core',
    name: 'CS Fundamentals',
    skills: [
      { name: 'Data Structures & Algorithms', level: 5 },
      { name: 'Object Oriented Programming', level: 5 },
      { name: 'Operating Systems', level: 4 },
    ],
  },
  {
    id: 'soft',
    name: 'Soft Skills',
    skills: [
      { name: 'Leadership', level: 5 },
      { name: 'Team Collaboration', level: 5 },
      { name: 'Communication', level: 4 },
      { name: 'Event Management', level: 4 },
      { name: 'Public Speaking', level: 4 },
    ],
  },
];

export default skills;

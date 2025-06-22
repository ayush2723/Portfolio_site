export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  technologies?: string[];
}

const experiences: Experience[] = [
  {
    id: 'exp1',
    title: 'Software Engineer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    startDate: 'Jan 2023',
    endDate: null, // Current position
    description: [
      'Led the development of a customer-facing dashboard that improved client engagement by 35%',
      'Optimized database queries resulting in a 40% reduction in page load time',
      'Collaborated with cross-functional teams to implement new features and resolve critical bugs',
      'Mentored junior developers and conducted code reviews to ensure code quality'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
  },
  {
    id: 'exp2',
    title: 'Frontend Developer Intern',
    company: 'Digital Solutions Ltd.',
    location: 'Remote',
    startDate: 'May 2022',
    endDate: 'Dec 2022',
    description: [
      'Developed responsive UI components using React and Tailwind CSS',
      'Implemented state management using Redux for a complex e-commerce application',
      'Collaborated with UX designers to ensure pixel-perfect implementation of designs',
      'Participated in daily scrums and sprint planning meetings'
    ],
    technologies: ['React', 'Redux', 'Tailwind CSS', 'Jest', 'Figma']
  },
  {
    id: 'exp3',
    title: 'Web Development Freelancer',
    company: 'Self-employed',
    location: 'Remote',
    startDate: 'Sep 2021',
    endDate: 'Apr 2022',
    description: [
      'Built custom websites and web applications for small businesses and startups',
      'Designed and implemented responsive layouts optimized for all devices',
      'Integrated payment gateways and CMS solutions based on client requirements',
      'Provided ongoing maintenance and support for client websites'
    ],
    technologies: ['JavaScript', 'HTML/CSS', 'WordPress', 'Shopify', 'PHP']
  }
];

export default experiences;
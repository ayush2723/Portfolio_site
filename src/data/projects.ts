export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  liveLink?: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: 'biokit',
    title: 'BioKit',
    description: 'Interactive toolkit for DNA sequence analysis using Python and Biopython. Features 20+ tools, real-time plots, and optimized algorithms (KMP, DP, Prefix Arrays).',
    technologies: ['Python', 'Streamlit', 'Biopython', 'Matplotlib'],
    github: 'https://github.com/ayush2723/Biokit1',
    liveLink: 'https://biokit1-czeethtrggy5zbzwa7snpv.streamlit.app/', // Add if hosted
  },
  {
    id: 'designocrats',
    title: 'DesignOCrats Website',
    description: 'Official website for the NITH Architecture Club. Fully responsive with CMS-like edit capability and reusable components.',
    technologies: ['React', 'Tailwind CSS'],
    github: 'https://github.com/ayush2723/designOcrafts',
    liveLink: 'https://design-ocrafts.vercel.app/', // Add if hosted
  },
  {
    id: 'kudos',
    title: 'Kudos',
    description: 'Employee engagement and task management platform with task tracking, dashboards, and improved retention workflows.',
    technologies: ['Next.js', 'Tailwind CSS', 'Jeera'],
    github: 'https://github.com/ayush2723/KudosFrontEnd',
    liveLink: '', // Add if hosted
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React and Tailwind CSS showcasing projects, experience, and skills with a clean, responsive design.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/ayush2723/Portfolio_site', // Update if different
    liveLink: 'portfolio-site-roan-iota.vercel.app', // Replace with actual link if hosted
  }
];

export default projects;

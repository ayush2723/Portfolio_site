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
    id: 'project1',
    title: 'Smart Health Tracker',
    description: 'A comprehensive health tracking app that allows users to monitor vitals, set fitness goals, and receive personalized health insights.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
    github: 'https://github.com/username/health-tracker',
    liveLink: 'https://health-tracker-demo.netlify.app',
  },
  {
    id: 'project2',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce solution with product management, shopping cart, payment integration, and order tracking.',
    technologies: ['React', 'Redux', 'Firebase', 'Stripe API', 'Tailwind CSS'],
    github: 'https://github.com/username/ecommerce-platform',
    liveLink: 'https://ecommerce-demo.netlify.app',
  },
  {
    id: 'project3',
    title: 'Community Forum',
    description: 'An interactive forum application with real-time discussions, user profiles, and content moderation features.',
    technologies: ['Vue.js', 'Firebase', 'Algolia', 'Tailwind CSS'],
    github: 'https://github.com/username/community-forum',
  },
  {
    id: 'project4',
    title: 'Weather Dashboard',
    description: 'A dynamic weather application providing forecasts, historical data, and customizable alerts based on location.',
    technologies: ['JavaScript', 'OpenWeather API', 'Chart.js', 'Geolocation API'],
    github: 'https://github.com/username/weather-dashboard',
    liveLink: 'https://weather-dashboard-demo.netlify.app',
  },
];

export default projects;
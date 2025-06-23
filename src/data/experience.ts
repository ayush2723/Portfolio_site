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
    title: 'Secretary',
    company: 'Computer Science Engineers’ Community (CSEC), NIT Hamirpur',
    location: 'Hamirpur, Himachal Pradesh',
    startDate: 'Jan 2024',
    endDate: null, // Current position
    description: [
      'Spearheaded Hack 5.0, a national-level hackathon with 600+ participants from 30+ institutes.',
      'Organized coding contests and workshops, increasing developer engagement by 40%.'
    ],
    technologies: ['Event Management', 'Public Speaking', 'Team Collaboration']
  },
  {
    id: 'exp2',
    title: 'Corporate Relations Executive',
    company: 'Entrepreneurship Cell (E-Cell), NIT Hamirpur',
    location: 'Hamirpur, Himachal Pradesh',
    startDate: 'Jan 2024',
    endDate: null, // Current position
    description: [
      'Facilitated partnerships for E-Summit ’25, hosting 500+ attendees and 10+ startup speakers.',
      'Negotiated MOUs and sponsorships involving 50+ colleges and corporate stakeholders.'
    ],
    technologies: ['Corporate Outreach', 'Negotiation', 'Stakeholder Management']
  },
  {
    id: 'exp3',
    title: 'Executive Member – Public Relations',
    company: 'Team Public Relations, NIT Hamirpur',
    location: 'Hamirpur, Himachal Pradesh',
    startDate: 'Aug 2023',
    endDate: null,
    description: [
      'Directed digital outreach for Hill’ffair and Nimbus, attracting 2000+ and 1500+ attendees respectively.',
      'Strengthened institute visibility through curated social media campaigns.'
    ],
    technologies: ['Social Media Strategy', 'Digital Marketing', 'Content Coordination']
  }
];

export default experiences;

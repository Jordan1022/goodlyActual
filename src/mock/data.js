import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Goodly Development', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to Goodly', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Welcome to',
  name: 'Goodly Development',
  subtitle: ' ',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'greenLogo.jpg',
  paragraphOne: 'We love to build and solve problems',
  paragraphTwo: 'Technology solutions are our passion',
  paragraphThree: 'How can we help?',
  resume: 'https://www.linkedin.com', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'CRM.png',
    title: 'Microsoft Dynamics CRM',
    info:
      'A CRM built on the Microsoft Power Platform with Dynamics CRM. This was a 6 month project in which we built the product from concept to completion. This project is protected by an ICA and for this reason client details and live sample are withheld.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'joyallenwrites.png',
    title: 'Joy Allen Writes',
    info:
      'A Blog from writer Joy Allen with a focus on faith and encouragement. The site which we designed and currently maintain has e-commerce integrated as well.',
    info2: '',
    url: 'https://www.joyallenwrites.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email',
  email: 'sales@goodlydevelopment.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jordan-allen-125b628/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Jordan1022',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Goodly Development', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to Goodly', // e.g: Welcome to my website
};

//HEADER DATA
// export const headerData = {
//   img: 'Frame.png'
// };

// HERO DATA
export const heroData = {
  title: 'Welcome to',
  name: 'Goodly Development',
  subtitle: 'A Software Development & Web Services Company',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'Frame.png',
  paragraphOne: 'Goodly: (Old English) of good quality, abundant.',
  paragraphTwo: 'We love to build and solve problems.',
  paragraphThree: 'Technology solutions are our passion.',
  paragraphFour: 'What can we do for you?',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'OtherProjects.png',
    title: 'Previous Projects',
    info: 'These projects are protected by ICA Agreements and for this reason details are not given.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'CRM.png',
    title: 'Microsoft Dynamics CRM',
    info:
      'This was a 6 month project in which we built a CRM on the Microsoft Power Platform in coordination with another team. This project is protected by an ICA and for this reason client details and live sample are withheld.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'FDN.png',
    title: 'Family Date Night',
    info:
      'A React project in progress that is built to foster connection within families by offering suggestions for family date nights. This is a passion project.',
    info2: '',
    url: 'https://family-date-night.vercel.app/',
    repo: 'https://github.com/Goodly-Development/familyDateNight'
  },
  {
    id: nanoid(),
    img: 'SLV.png',
    title: 'SLVBHG',
    info:
      'We completed the re-build of the website for San Luis Valley Behavorial Health Group, a healthcare nonprofit.',
    info2: '',
    url: 'https://www.slvbhg.org/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'joyallenwrites.png',
    title: 'Joy Allen Writes',
    info: 'A Blog from writer Joy Allen with a focus on faith and encouragement. The site which we designed and currently maintain has an e-commerce feature.',
    info2: '',
    url: 'https://www.joyallenwrites.com',
    repo: '', // if no repo, the button will not show up
  }
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

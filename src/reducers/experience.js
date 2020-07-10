const initialState = [
  {
    company: 'BRFibra Telecomunicações',
    period: 'Nov 2017 - Nov 2018',
    jobTitle: 'Senior Network Administrator',
    acomplishments: [
      'Created Python scripts that improved daily network routines and assisted monitoring.',
      'Improved response time of incidents by generating scripts that run basic diagnostics on switches and attached the results on the specific ticket.',
      'Implemented OTRS as a ticket management system and network inventory system.',
    ],
  },
  {
    company: 'Maminfo',
    period: 'Jun 2016 - Dec 2016',
    jobTitle: 'Senior Support Analyst',
    acomplishments: [
      'Configured CISCO equipment to specific requirements.',
      'Performed signal stability checks, upgraded router firmware and optimized configurations.',
    ],
  },
  {
    company: 'SMB Tecnologia',
    period: 'Jun 2015 - Mar 2016',
    jobTitle: 'Information Technology Consultant',
    acomplishments: [
      'Implemented new software that improved ticket time response.',
      'Implemented an inventory system to help the support team find all the necessary information on servers and network assets.',
      'Internal processes and services constantly reviewed to reduce incident response time.',
    ],
  },
  {
    company: 'Polimaq Equipamentos Agroindustriais',
    period: 'Jun 2014 - May 2015',
    jobTitle: 'Senior Information Technology Analyst',
    acomplishments: [
      'Managed the IT technical support team.',
      'Refitted company servers and updated the network with open source software.',
      'Implemented workflow software that improved internal communications and efficiency in daily tasks.',
    ],
  },
];

const experience = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EXPERIENCE': {
      return state.push(action.experience);
    }
    default: {
      return state;
    }
  }
};

export default experience;

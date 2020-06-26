const initialState = [
  {
    company: 'BRFibra Telecomunicações',
    period: 'Nov 2017 - Nov 2018',
    jobTitle: 'Senior Network Administrator',
    acomplishments: [
      'Created Python scripts to improve daily network routines and assist monitoring.',
      'Improved response time of incidents by generating scripts that run basic diagnostics on switches and attached the results on the specific ticket.',
      'Helped implement OTRS as a ticket management system and network inventory system.',
    ],
  },
  {
    company: 'Maminfo',
    period: 'Jun 2016 - Dec 2016',
    jobTitle: 'Senior Support Analyst',
    acomplishments: [
      'Apply configurations in CISCO equipments.',
      'Performed signal stability checks, upgrade router firmware and reviewed current configurations.',
    ],
  },
  {
    company: 'SMB Tecnologia',
    period: 'Jun 2015 - Mar 2016',
    jobTitle: 'Information Technology Consultant',
    acomplishments: [
      'Helped implement a software suite to improve time response of tickets.',
      'Implemented an inventory system to help the support team find all the necessary information on servers and network assets.',
      'Constantly reviewed internal processes and services to decrease the service level agreement for customers.',
    ],
  },
  {
    company: 'Polimaq Equipamentos Agroindustriais',
    period: 'Jun 2014 - May 2015',
    jobTitle: 'Senior Information Technology Analyst',
    acomplishments: [
      'Managed the IT technical support team.',
      'Renewed the servers of the company and updated the network with open source software.',
      'Implemented a workflow software to improve internal communication and improve efficiency for daily tasks.',
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

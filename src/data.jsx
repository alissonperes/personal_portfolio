import { nanoid } from 'nanoid';
import {
  FaJs,
  FaReact,
  FaDocker,
  FaLinux,
} from 'react-icons/fa';
import {
  SiTerraform,
  SiAmazonaws,
  SiAzuredevops,
  SiChef,
  SiMicrosoftazure,
  SiPuppet,
  SiDotnet,
  SiCsharp,
  SiRubyonrails,
} from 'react-icons/si';
import { DiRuby, DiPython } from 'react-icons/di';


export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' }
];

export const skills = [
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-violet-700' />,
    text: 'Intermediate proficiency in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-violet-700' />,
    text: 'Intermediate proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <DiPython className='h-16 w-16 text-violet-700' />,
    text: 'Intermediate proficiency in Python, used in conjunction with other tools like Docker, Azure DevOps, and terraform to create a comprehensive CI/CD workflow with a safe planned rollback.',
  },
  {
    id: nanoid(),
    title: 'Ruby',
    icon: <DiRuby className='h-16 w-16 text-violet-700' />,
    text: 'Intermediate proficiency in  Ruby, managing all Chef components and nodes maintaining the chef-repo following code standards and concept of DRY code.',
  },
  {
    id: nanoid(),
    title: 'Ruby on Rails',
    icon: <SiRubyonrails className='h-16 w-16 text-violet-700' />,
    text: 'Intermediate proficiency in Ruby on Rails, building backend API applications with GraphQL, and RESTful API. ',
  },
  {
    id: nanoid(),
    title: 'C#',
    icon: <SiCsharp className='h-16 w-16 text-violet-700' />,
    text: 'Intermediate proficiency in C# writing server-side code, implementing business logic, and designing interactive web interfaces.',
  },
  {
    id: nanoid(),
    title: '.NET Core',
    icon: <SiDotnet className='h-16 w-16 text-violet-700' />,
    text: 'Intermediate proficiency in .NET Core, creating web applications, handling server-side logic, and integrating various components to deliver responsive and functional web solutions.',
  },
  {
    id: nanoid(),
    title: 'Linux',
    icon: <FaLinux className='h-16 w-16 text-violet-700' />,
    text: 'Advanced proficiency in  Linux system administration, configuration, and maintenance. My experience includes managing complex Linux-based environments, ensuring optimal performance, security, and reliability.',
  },
  {
    id: nanoid(),
    title: 'Docker',
    icon: <FaDocker className='h-16 w-16 text-violet-700' />,
    text: 'Intermediate proficiency in Docker, allowing me to create and manage containerized applications efficiently. I am capable of containerizing applications and services, orchestrating containers, and maintaining Docker environments to facilitate seamless deployment and scaling.',
  },
  {
    id: nanoid(),
    title: 'Terraform',
    icon: <SiTerraform className='h-16 w-16 text-violet-700' />,
    text: 'Intermediate proficiency in Terraform, enabling me to create and manage infrastructure as code (IaC) solutions. I am proficient in writing Terraform configurations, provisioning and orchestrating resources, and automating infrastructure deployment for improved efficiency and scalability.',
  },
  {
    id: nanoid(),
    title: 'AWS',
    icon: <SiAmazonaws className='h-16 w-16 text-violet-700' />,
    text: 'Advanced proficiency in AWS, including extensive experience in designing, deploying, and managing cloud-based solutions. My skills include a wide range of AWS services, enabling me to architect robust, scalable, and highly available cloud infrastructure.',
  },
  {
    id: nanoid(),
    title: 'Azure',
    icon: <SiMicrosoftazure className='h-16 w-16 text-violet-700' />,
    text: 'Intermediate proficiency in Azure, demonstrating my ability to work with various Azure services and solutions. I am proficient in creating and managing cloud resources, implementing Azure services, and contributing to the development of Azure-based applications and infrastructure.',
  },
  {
    id: nanoid(),
    title: 'Azure DevOps',
    icon: <SiAzuredevops className='h-16 w-16 text-violet-700' />,
    text: 'Intermediate proficiency in Azure DevOps, allowing me to effectively collaborate on software development projects, streamline workflows, and automate continuous integration and continuous deployment (CI/CD) pipelines. My expertise in Azure DevOps includes configuring build and release pipelines, managing source code repositories, and enhancing development processes.',
  },
  {
    id: nanoid(),
    title: 'Chef',
    icon: <SiChef className='h-16 w-16 text-violet-700' />,
    text: 'Intermediate proficiency in Chef, allowing me to effectively manage and automate infrastructure configurations. My experience includes creating and maintaining Chef cookbooks, implementing configuration management, and contributing to the provisioning of resources in various environments.',
  },
  {
    id: nanoid(),
    title: 'Puppet',
    icon: <SiPuppet className='h-16 w-16 text-violet-700' />,
    text: 'I have basic familiarity with Puppet and am in the early stages of developing my skills in automating configuration management. I have started working with Puppet manifests and exploring its capabilities for managing infrastructure, but I\'m in the early stages of gaining hands-on experience.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://repository-images.githubusercontent.com/252512891/0b4eaa00-7699-11ea-8fa8-4a9709d9de0d',
    url: 'https://alissonperes.com/weather/',
    github: 'https://github.com/alissonperes/mv_weatherapp',
    title: 'weatherapp',
    text: 'Location-based weather app that uses the Open Weather Map API to fetch current and forecasted weather data. User can search cities around the globe.',
  },
  {
    id: nanoid(),
    img: 'https://repository-images.githubusercontent.com/269102179/0a2c7400-ab45-11ea-855c-b6071566f0c7',
    url: 'https://meals.alissonperes.com/',
    github: 'https://github.com/alissonperes/mv_great_meals',
    title: 'great_meals',
    text: 'Meals catalogue app that uses TheMealDB API to fetch categories and meals. User can search meals from a list separated by categories.',
  },
  {
    id: nanoid(),
    img: 'https://repository-images.githubusercontent.com/263068478/384d3a80-b24e-11ea-886c-bed89e14cd5c',
    url: 'https://magicians-calculator.herokuapp.com/',
    github: 'https://github.com/alissonperes/mv_simple_react_calculator',
    title: 'simple_react_calculator',
    text: 'Math-magicians INC simple calculator APP with React components.',
  },
  {
    id: nanoid(),
    img: 'https://repository-images.githubusercontent.com/277908019/5d9beb80-c1f1-11ea-94e4-cce894563152',
    github: 'https://github.com/alissonperes/Pets-Images',
    title: 'Pets-Images',
    text: 'Basic App using React, React Native &amp; Redux fetching data from thedogapi and thecatapi.',
  }
];

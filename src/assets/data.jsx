import { nanoid } from 'nanoid';
import {
  FaJs,
  FaReact,
  FaDocker,
  FaLinux,
  FaGithubSquare, 
  FaLinkedin
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
import heroImg from '../assets/bitmap.svg';
import aboutSvg from '../assets/about.svg';

export const userData = {
  userName: 'alissonperes',
  heroTitle: '#AlissonPeres',
  position: 'DevOp/SRE',
  navTitle: <><span className='text-violet-600'>alissonperes</span>.com</>,
  userWebsiteURL: 'https://alissonperes.com',
  userImage: aboutSvg,
  heroImg: heroImg,
  userIntro: 'always learning new technologies and passionate about elegant code, good docs, beautiful server organization and pepperoni pizza.',
  userElevator: `Experienced DevOps professional proficient in automating, optimizing, and accelerating software development and IT operations. Adept at implementing CI/CD pipelines, managing cloud infrastructure, and fostering cross-functional collaboration. Skilled in a wide range of DevOps tools and methodologies, dedicated to ensuring the efficient and continuous delivery of high-quality software solutions.`,
  linkedin: {
    link: 'https://www.linkedin.com/in/alissonperes',
    icon: <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
  },
  github: {
    link: 'https://github.com/alissonperes/',
    icon: <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
  }
}

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
    text: "I'm pretty good at JavaScript, building interactive and dynamic web apps that focus on smooth user experiences and functionality.",
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-violet-700' />,
    text: "I'm fairly skilled with React, building efficient and interactive front-end apps that focus on a component-based structure for smooth development and performance.",
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <DiPython className='h-16 w-16 text-violet-700' />,
    text: "I'm pretty good with Python, and I use it along with Docker, Azure DevOps, and Terraform to build solid CI/CD pipelines, including smooth, safe rollback plans.",
  },
  {
    id: nanoid(),
    title: 'Ruby',
    icon: <DiRuby className='h-16 w-16 text-violet-700' />,
    text: "I'm pretty good with Ruby, handling all Chef components and nodes. I keep the chef-repo organized, sticking to coding standards and using the DRY (Don't Repeat Yourself) principle.",
  },
  {
    id: nanoid(),
    title: 'Ruby on Rails',
    icon: <SiRubyonrails className='h-16 w-16 text-violet-700' />,
    text: "I'm pretty comfortable with Ruby on Rails, building backend apps with GraphQL and RESTful APIs. I focus on keeping things efficient and smooth, ensuring the backend runs reliably and handles data well.",
  },
  {
    id: nanoid(),
    title: 'C#',
    icon: <SiCsharp className='h-16 w-16 text-violet-700' />,
    text: "I'm pretty good with C#, writing server-side code, handling business logic, and designing interactive web interfaces that work well together.",
  },
  {
    id: nanoid(),
    title: '.NET Core',
    icon: <SiDotnet className='h-16 w-16 text-violet-700' />,
    text: "I'm solid with .NET Core, building web apps, handling server-side logic, and pulling together different parts to deliver fast and functional web solutions.",
  },
  {
    id: nanoid(),
    title: 'Linux',
    icon: <FaLinux className='h-16 w-16 text-violet-700' />,
    text: "I'm really skilled with Linux system admin, handling setup, config, and maintenance. I've worked with complex Linux environments, making sure everything runs smoothly, securely, and reliably.",
  },
  {
    id: nanoid(),
    title: 'Docker',
    icon: <FaDocker className='h-16 w-16 text-violet-700' />,
    text: "I'm pretty good with Docker, creating and managing containerized apps. I can containerize services, orchestrate containers, and maintain Docker environments to make deployment and scaling smooth.",
  },
  {
    id: nanoid(),
    title: 'Terraform',
    icon: <SiTerraform className='h-16 w-16 text-violet-700' />,
    text: "I'm solid with Terraform, creating and managing infrastructure as code (IaC). I write Terraform configs, provision resources, and automate deployments to make infrastructure more efficient and scalable.",
  },
  {
    id: nanoid(),
    title: 'AWS',
    icon: <SiAmazonaws className='h-16 w-16 text-violet-700' />,
    text: "I'm highly skilled in AWS, with tons of experience designing, deploying, and managing cloud solutions. I'm comfortable with a wide range of AWS services, helping me build scalable, reliable, and robust cloud infrastructure.",
  },
  {
    id: nanoid(),
    title: 'Azure',
    icon: <SiMicrosoftazure className='h-16 w-16 text-violet-700' />,
    text: "I'm pretty good with Azure, working with its services and solutions. I can create and manage cloud resources, implement Azure services, and help develop Azure-based apps and infrastructure.",
  },
  {
    id: nanoid(),
    title: 'Azure DevOps',
    icon: <SiAzuredevops className='h-16 w-16 text-violet-700' />,
    text: "I'm solid with Azure DevOps, helping teams collaborate, streamline workflows, and automate CI/CD pipelines. I've worked on setting up build/release pipelines, managing repos, and improving development processes.",
  },
  {
    id: nanoid(),
    title: 'Chef',
    icon: <SiChef className='h-16 w-16 text-violet-700' />,
    text: "I'm pretty good with Chef, managing and automating infrastructure configs. I've worked on creating and maintaining Chef cookbooks, handling configuration management, and helping provision resources in different environments.",
  },
  {
    id: nanoid(),
    title: 'Puppet',
    icon: <SiPuppet className='h-16 w-16 text-violet-700' />,
    text: "I'm getting the hang of Puppet, just starting to work with manifests and exploring its config management features. I'm still in the early stages, but I'm learning how to use it for automating infrastructure.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://repository-images.githubusercontent.com/252512891/0b4eaa00-7699-11ea-8fa8-4a9709d9de0d',
    url: 'https://alissonperes.com/weather/',
    github: userData.github.link + '/mv_weatherapp',
    title: 'weatherapp',
    text: 'Location-based weather app that uses the Open Weather Map API to fetch current and forecasted weather data. User can search cities around the globe.',
  },
  {
    id: nanoid(),
    img: 'https://repository-images.githubusercontent.com/269102179/0a2c7400-ab45-11ea-855c-b6071566f0c7',
    url: 'https://meals.alissonperes.com/',
    github: userData.github.link + '/mv_great_meals',
    title: 'great_meals',
    text: 'Meals catalogue app that uses TheMealDB API to fetch categories and meals. User can search meals from a list separated by categories.',
  },
  {
    id: nanoid(),
    img: 'https://repository-images.githubusercontent.com/263068478/384d3a80-b24e-11ea-886c-bed89e14cd5c',
    url: 'https://magicians-calculator.herokuapp.com/',
    github: userData.github.link + '/mv_simple_react_calculator',
    title: 'simple_react_calculator',
    text: 'Math-magicians INC simple calculator APP with React components.',
  },
  {
    id: nanoid(),
    img: 'https://repository-images.githubusercontent.com/277908019/5d9beb80-c1f1-11ea-94e4-cce894563152',
    github: userData.github.link + '/Pets-Images',
    title: 'Pets-Images',
    text: 'Basic App using React, React Native & Redux fetching data from thedogapi and thecatapi.',
  }
];

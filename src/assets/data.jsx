import { nanoid } from 'nanoid';
import {
  FaGithubSquare, 
  FaLinkedin
} from 'react-icons/fa';
import heroImg from '../assets/bitmap.webp';
import aboutSvg from '../assets/about.webp';
import aliIco from '../assets/ali.webp';
import laliIco from '../assets/lali.webp';
import bibiIco from '../assets/biba.webp';
import floIco from '../assets/flor.webp';

export const userData = {
  userName: 'alissonperes',
  heroTitle: '#AlissonPeres',
  position: 'DevOp/SRE',
  navTitle: <><span className=''>AlissonPeres</span>.com</>,
  userWebsiteURL: 'https://alissonperes.com',
  userImage: aboutSvg,
  heroImg: heroImg,
  userIntro: 'always learning new technologies and passionate about elegant code, good docs, beautiful server organization and pepperoni pizza.',
  userElevator: `Experienced DevOps professional proficient in automating, optimizing, and accelerating software development and IT operations. Adept at implementing CI/CD pipelines, managing cloud infrastructure, and fostering cross-functional collaboration. Skilled in a wide range of DevOps tools and methodologies, dedicated to ensuring the efficient and continuous delivery of high-quality software solutions.`,
  linkedin: {
    link: 'https://www.linkedin.com/in/alissonperes',
    icon: <FaLinkedin className='' />
  },
  github: {
    link: 'https://github.com/alissonperes/',
    icon: <FaGithubSquare className='' />
  }
}

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#experience', text: 'experience' },
  { id: nanoid(), href: '#automation', text: 'automation' }
];

export const icons = [
  laliIco,
  bibiIco,
  floIco,
  aliIco,
]

export const skills = [
  {
    id: nanoid(),
    title: 'DevOps Expertise',
    text: "Experience in automating, managing, and optimizing infrastructure with tools like Docker, Terraform, Ansible, and Chef. Skilled in deploying, scaling, and managing applications on AWS and Azure.",
  },
  {
    id: nanoid(),
    title: 'CI/CD Pipelines & Automation',
    text: "Proven ability to design, implement, and maintain CI/CD pipelines, ensuring efficient software delivery and smooth deployment processes.",
  },
  {
    id: nanoid(),
    title: 'Cloud Infrastructure',
    text: "Proficient in managing cloud services, infrastructure as code, and automating cloud environments on AWS and Azure.",
  },
  {
    id: nanoid(),
    title: 'Programming Languages',
    text: "Experienced in development using .NET, Node.js, Python, JavaScript, and Ruby, with a strong foundation in coding and scripting for infrastructure and automation.",
  },
  {
    id: nanoid(),
    title: 'Cross-functional Collaboration',
    text: "Experience working closely with development, operations, and support teams to foster communication, improve workflows, and deliver high-quality solutions.",
  },
  {
    id: nanoid(),
    title: 'Previous Experience',
    text: "Diverse background in IT operations, infrastructure management, and software development, leveraging past roles to improve processes and drive innovation in current DevOps practices.",
  },
];

export const projects = [
  {
    id: nanoid(),
    period: '04/2022 - 04/2025',
    company: 'iSolutions SRL',
    title: 'iSolutions SRL',
    text: 'Automation & Cloud Migration: Developed and managed automation for fast product releases using Terraform, Chef, Azure DevOps, and AWS. The project began as a proof of concept, migrating a few applications to the cloud. Now, the majority of services and applications are fully cloud-based, driving scalability and efficiency.',
  },
  {
    id: nanoid(),
    period: '09/2021 - 04/2022',
    title: '',
    text: "Azure Environment & .NET Casino Development: Led the organization of the Azure environment and developed key features for an online casino using .NET Core. These efforts not only enhanced the system's overall performance but also introduced new functionalities, ensuring a more seamless and reliable user experience.",
  },
  {
    id: nanoid(),
    period: '09/2020 - 09/2021',
    title: 'Intelligenthack',
    text: "Junior Developer & Azure Learning: As a junior developer, I played a role in organizing the Azure environment while learning the intricacies of developing an online casino in .NET Core. This hands-on experience provided me with valuable development skills and a deeper understanding of cloud-based application deployment.",
  },
  {
    id: nanoid(),
    period: '06/2016 - 03/2020',
    title: 'Self-employed Consultant',
    text: "Infrastructure Expansion & Security Training: Expanded the structure of servers and network assets, applying robust security protocols and conducting thorough analyses of customer infrastructure. Additionally, I created and provided training to internal teams to improve overall operational efficiency and security awareness.",
  },
  {
    id: nanoid(),
    period: '06/2015 – 03/2016',
    title: 'SMB Tecnologia',
    text: "IT Consultant & Network Security POCs: Worked as an IT consultant with the pre-sales team to design and implement proof of concepts (POCs) focused on improving customer network security. Collaborated with the pentesting team to scan for vulnerabilities and conduct planned tests, using tools like PFSense, Cisco, and BitDefender to enhance security.",
  },
  {
    id: nanoid(),
    period: '05/2014 – 06/2015',
    title: 'Polimaq Equipamentos',
    text: "IT Team Management & Network Architecture: Managed the IT team, overseeing user support and handling the technological needs of the company. As the senior network architect, I was responsible for maintaining the headquarters' network and four branch offices, managing both support and infrastructure teams, while keeping the network secure and up to date.",
  },
  {
    id: nanoid(),
    period: '03/2006 — 03/2014',
    title: 'Donaroot Informatica',
    text: "Consultant in Networking & Virtualization: As a self-employed consultant, I analyzed, monitored, and implemented network and virtualization projects, primarily using Cisco and Xen Server. Later, I had the opportunity to work with OpenStack, starting from the Diablo version, and gained hands-on experience with large-scale virtualization solutions.",
  },
  {
    id: nanoid(),
    period: '',
    title: 'Past Experiences',
    text: "Career Journey & Passion for Networks: My first job at 16 was as an assistant mechanic, later becoming a mechanic at 17. At 19, I transitioned into tech support for car scanners and then into a call center at an ISP. It was there that I discovered my passion for networks, which I continue to pursue today, evolving with every advancement in the field.",
  },
];

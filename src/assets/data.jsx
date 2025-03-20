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
  userIntro: 'Accomplished DevOps and IT professional with a robust track record in automating infrastructure, optimizing cloud environments, and driving efficiency through innovative process improvements. Proven ability to quantify impact—from reducing system downtime to modernizing legacy systems—with a focus on measurable outcomes. Skilled in delivering tailored, secure, and scalable solutions that exceed organizational goals.',
  userElevator: `Started at 16 as an assistant mechanic and transitioned through various tech support roles, ultimately discovering a passion for networks while working at an ISP. Continuously pursued learning and career advancement to build a robust technical foundation.`,
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
  { id: nanoid(), href: '#experience', text: 'experience' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
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
    title: 'DevOps & Automation',
    text: "<p>Expertise in <strong>Terraform</strong>, <strong>Azure DevOps</strong>, <strong>Chef</strong>, and CI/CD pipelines in AWS environments.</p>",
  },
  {
    id: nanoid(),
    title: 'Cloud Management',
    text: "<p>Proficient in managing <strong>AWS</strong>, <strong>GCP</strong>, and <strong>OpenStack</strong> environments to optimize resource performance and cost.</p>",
  },
  {
    id: nanoid(),
    title: 'Network Management & Security',
    text: "<p>Skilled in designing secure network architectures using <strong>VPNs</strong>, <strong>firewalls</strong>, <strong>pfSense</strong>, <strong>Cisco</strong>, and <strong>Bitdefender</strong>.</p>",
  },
  {
    id: nanoid(),
    title: 'Software Delivery & Integration',
    text: "<p>Adept in <strong>C# .NET Core</strong> backend development and system integration to enhance user experiences.</p>",
  },
  {
    id: nanoid(),
    title: 'IT Support & Consulting',
    text: "<p>Experienced in providing comprehensive IT support, documentation, and client training.</p>",
  },
  {
    id: nanoid(),
    title: 'Programming & Scripting',
    text: "<p>Proficient in <strong>PowerShell</strong>, <strong>Python</strong>, and <strong>Bash</strong> for automating cloud resources and system integrations.</p>",
  },
  {
    id: nanoid(),
    title: 'Virtualization & Infrastructure',
    text: "<p>Managed virtualized environments with <strong>XenServer</strong> and <strong>OpenStack</strong> for improved scalability and system reliability.</p>",
  },
];

export const projects = [
  {
    id: nanoid(),
    period: '04/2022 - 04/2025',
    company: 'iSolutions SRL',
    title: 'DevOps/SRE',
    text: `<ul>
<li><strong>Engineered</strong> automated infrastructure deployment using <strong>Terraform</strong> across multiple AWS accounts, streamlining resource management.</li>
<li><strong>Leveraged</strong> Chef for configuration management to maintain consistent and secure systems.</li>
<li><strong>Orchestrated</strong> CI/CD pipelines with <strong>Azure DevOps</strong> and <strong>GitHub Actions</strong>, accelerating deployment cycles.</li>
<li><strong>Optimized</strong> EC2, RDS, and Redis management by implementing auto-scaling, enhancing system performance.</li>
<li><strong>Secured</strong> cross-account communications using <strong>Control Tower</strong>, reinforcing infrastructure integrity.</li>
</ul>`,
  },
  {
    id: nanoid(),
    period: '09/2021 - 04/2022',
    
    title: 'Fullstack Web Developer',
    text: `<ul>
<li><strong>Developed</strong> robust backend systems using <strong>C# .NET Core</strong> to support scalable applications.</li>
<li><strong>Integrated</strong> third-party data providers to ensure seamless data flow.</li>
<li><strong>Modernized</strong> legacy <strong>.NET Framework</strong> applications by incorporating <strong>Redis</strong> caching, significantly enhancing performance.</li>
<li><strong>Partnered</strong> with the UI/UX team to revamp application design and improve usability.</li>
</ul>`,
  },
  {
    id: nanoid(),
    period: '09/2020 - 09/2021',
    company: 'Intelligenthack',
    title: 'Fullstack Web Developer',
    text: `<ul>
<li><strong>Implemented</strong> key platform features with a focus on backend development, contributing to product robustness.</li>
<li><strong>Streamlined</strong> Azure cloud infrastructure for staging environments, reducing deployment time and enhancing reliability.</li>
<li><strong>Collaborated</strong> closely with senior developers throughout the full development lifecycle to deliver high-quality code.</li>
</ul>`,
  },
  {
    id: nanoid(),
    period: '06/2016 - 03/2020',
    company: 'Donaroot Informatica',
    title: 'Self-employed Consultant',
    text: `<ul>
<li><strong>Enhanced</strong> security posture by deploying <strong>CrowdStrike</strong>, <strong>Bitdefender</strong>, and <strong>pfSense</strong>, effectively reducing vulnerabilities.</li>
<li><strong>Customized</strong> software solutions (e.g., <strong>Redmine</strong>, <strong>OTRS</strong>) to optimize workflow and task management.</li>
<li><strong>Integrated</strong> OTRS with Zabbix to automate ticketing processes, significantly boosting operational efficiency.</li>
<li><strong>Facilitated</strong> hybrid cloud migrations using <strong>AWS</strong>, <strong>GCP</strong>, and <strong>OpenStack</strong>, ensuring seamless transitions and cost savings.</li>
</ul>`,
  },
  {
    id: nanoid(),
    period: '06/2015 – 03/2016',
    company: 'SMB Tecnologia',
    title: 'IT Consultant',
    text: `<ul>
<li><strong>Collaborated</strong> with pre-sales teams to deliver tailored network security solutions, enhancing client satisfaction.</li>
<li><strong>Conceptualized</strong> and executed PoC solutions that fortified network security and demonstrated clear value.</li>
<li><strong>Supported</strong> pentesting efforts by identifying and remediating vulnerabilities, reducing security risks.</li>
<li><strong>Implemented</strong> configurations for <strong>pfSense</strong>, <strong>Cisco firewalls</strong>, and <strong>Bitdefender</strong> to establish robust defenses.</li>
</ul>`,
  },
  {
    id: nanoid(),
    period: '05/2014 – 06/2015',
    company: 'Polimaq Equipamentos',
    title: 'Systems Administrator',
    text: `<ul>
<li><strong>Oversaw</strong> the internal IT support team while directing the management of the company's infrastructure.</li>
<li><strong>Implemented</strong> Zabbix for comprehensive monitoring and integrated it with the ticketing system, ensuring users received timely incident updates.</li>
<li><strong>Developed</strong> custom scripts to automate responses—such as restarting services and managing server storage—reducing incident response times.</li>
<li><strong>Deployed</strong> containerized web servers, significantly enhancing service responsiveness and scalability.</li>
</ul>`,
  },
  {
    id: nanoid(),
    period: '03/2006 — 03/2014',
    company: 'Donaroot Informatica',
    title: 'IT Consultant',
    text: `<ul>
<li><strong>Managed</strong> diverse projects focused on VM management and network optimization, enhancing overall system performance.</li>
<li><strong>Upgraded</strong> network infrastructure by integrating VPNs, firewalls, and virtualization to improve reliability.</li>
<li><strong>Engineered</strong> firewall and VPN configurations using <strong>pfSense</strong> and related technologies to fortify security.</li>
<li><strong>Provided</strong> detailed documentation and support to ensure smooth knowledge transfer and ongoing maintenance.</li>
</ul>`,
  },
];

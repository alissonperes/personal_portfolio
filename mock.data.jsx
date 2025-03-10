import { nanoid } from 'nanoid';
import {
  FaJs,
  FaGithubSquare, 
  FaLinkedin
} from 'react-icons/fa';
import heroImg from '../assets/bitmap.svg';
import aboutSvg from '../assets/about.svg';


export const userData = {
  userName: 'myFriend',
  heroTitle: '#MyFriend',
  position: 'bffs',
  navTitle: <><span>mywebsite</span>.io</>,
  userWebsiteURL: 'https://alissonperes.com',
  userImage: aboutSvg,
  heroImg: heroImg,
  userIntro: "You've got a friend in me",
  userElevator: `You've got a friend in me You've got a friend in me When the road looks rough ahead And you're miles and miles from your nice warm bed You just remember what your old pal said Boy, you've got a friend in me Yeah, you've got a friend in me`,
  linkedin: {
    link: 'https://www.linkedin.com/in/NaN',
    icon: <FaLinkedin />
  },
  github: {
    link: 'https://github.com/NaN/',
    icon: <FaGithubSquare />
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
    title: 'skill',
    icon: <FaJs />,
    text: "You've got a friend in me You've got a friend in me When the road looks rough ahead And you're miles and miles from your nice warm bed You just remember what your old pal said",
  },
  {
    id: nanoid(),
    title: 'skill',
    icon: <FaJs />,
    text: "You've got a friend in me You've got a friend in me When the road looks rough ahead And you're miles and miles from your nice warm bed You just remember what your old pal said",
  },
  {
    id: nanoid(),
    title: 'skill',
    icon: <FaJs />,
    text: "You've got a friend in me You've got a friend in me When the road looks rough ahead And you're miles and miles from your nice warm bed You just remember what your old pal said",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: heroImg,
    url: userData.userWebsiteURL,
    github: userData.github.link,
    title: 'project',
    text: "You've got a friend in me You've got a friend in me When the road looks rough ahead And you're miles and miles from your nice warm bed",
  },
  {
    id: nanoid(),
    img: heroImg,
    url: userData.userWebsiteURL,
    github: userData.github.link,
    title: 'project',
    text: "You've got a friend in me You've got a friend in me When the road looks rough ahead And you're miles and miles from your nice warm bed",
  },
  {
    id: nanoid(),
    img: heroImg,
    url: userData.userWebsiteURL,
    github: userData.github.link,
    title: 'project',
    text: "You've got a friend in me You've got a friend in me When the road looks rough ahead And you're miles and miles from your nice warm bed",
  },
];

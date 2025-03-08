# My Website

This is a simple website built using **Vite** and **Tailwind CSS**, featuring a **React** component structure. The website is dynamic and driven by a `data.jsx` file, which contains content in JSON format that is used to generate React components.

## Table of Contents

- [My Website](#my-website)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Setup](#setup)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Development](#development)
    - [Build](#build)
  - [Usage](#usage)
  - [Components](#components)
    - [Navbar](#navbar)
    - [Hero](#hero)
    - [Skills](#skills)
    - [About](#about)
    - [Projects](#projects)
  - [Data Structure](#data-structure)
  - [License](#license)

## Features

- Fast build and development using **Vite**.
- Styled with **Tailwind CSS**.
- Dynamic content powered by `data.jsx`.
- Reusable React components for layout and data rendering.

[Back to top](#table-of-contents)

## Setup

### Prerequisites

- **Node.js** and **npm** installed.

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This will start Vite's development server with hot module replacement.

### Build

To build the project for production, run:

```bash
npm run build
```

This will generate the optimized files in the `dist` folder.

[Back to top](#table-of-contents)

## Usage

All the content on the website is driven by `data.jsx`, where the necessary information is stored as JSON. The data is used by the following React components to dynamically render the website.

[Back to top](#table-of-contents)

## Components

### Navbar

The **Navbar** imports `links` from `data.jsx`. The `links` array contains the navigation items, and the **Navbar** component will generate the navigation menu from this array.

### Hero

The **Hero** component imports `userData` from `data.jsx`. This component displays information about the user, such as the name, title, and brief introduction.

### Skills

The **Skills** component imports `skills` from `data.jsx`. It maps over the `skills` array and displays each skill in a card.

### About

The **About** component imports `userData` from `data.jsx` and displays a longer text about the user. This section can be used to give a detailed introduction, biography, or background information.

### Projects

The **Projects** component imports `projects` from `data.jsx`. It maps over the `projects` array and displays each project as a card, including the project name, description, and any relevant links or details.

[Back to top](#table-of-contents)

## Data Structure

The `data.jsx` file holds all the content for the website, structured as follows:

```jsx
export const userData = {
  userName: 'sitename',
  heroTitle: '#SiteTitle',
  position: 'MyWebsite',
  userIntro: 'Short intro',
  userElevator: `lorem ipsum would be great here... if I where a bit less lazy`,
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
  { id: nanoid(), href: '#projects', text: 'projects' },
  { id: nanoid(), href: 'yoyoma.com', text: 'yoyoma' }
];

export const skills = [
  {
    id: nanoid(),
    title: 'This is a card title',
    icon: <FaJs className='h-16 w-16 text-violet-700' />,
    text: 'This is the text for the card. there is also an icon here',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://...',
    url: 'https://...',
    github: userData.github.link + '/myapp',
    title: 'myapp',
    text: 'A very nice descriptive text.',
  },
];

```

You can customize this file with your own content to dynamically update the components.

[Back to top](#table-of-contents)

## License

This project is open-source and available under the [MIT License](LICENSE).

[Back to top](#table-of-contents)

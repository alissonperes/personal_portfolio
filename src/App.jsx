import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { links, userData, skills, projects, icons } from './assets/data';

const App = () => {
  return (
    <div className='bg-violet-50 text-sm'>
      <Navbar links={links} {...userData} />
      <Hero {...userData}/>
      <Skills skills={skills} icons={icons}/>
      <About {...userData} />
      <Projects projects={projects}/>
    </div>
  );
};

export default App;

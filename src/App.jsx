import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';
import { links, userData, skills, projects, icons } from './assets/data';

const App = () => {
  return (
    <div className='text-bg-dark container-fluid' id='app' data-bs-theme="dark">
      <Navbar links={links} {...userData} />
      <Hero {...userData}/>
      <Skills skills={skills} icons={icons}/>
      <About {...userData} />
      <Projects projects={projects}/>
      <Footer {...userData} />
    </div>
  );
};

export default App;

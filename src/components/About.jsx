import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-28' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16 mt-20'>
        <img src={aboutSvg} className='w-full h-64 mt-20' />
        <article>
          <SectionTitle text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Experienced DevOps professional proficient in automating,
            optimizing, and accelerating software development and IT operations.
            Adept at implementing CI/CD pipelines, managing cloud
            infrastructure, and fostering cross-functional collaboration.
            Skilled in a wide range of DevOps tools and methodologies, dedicated
            to ensuring the efficient and continuous delivery of high-quality
            software solutions.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;

import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='bg-violet-200 py-10' id='home'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-5xl font-bold tracking-wider'>#AlissonPeres</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            DevOps
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            always learning new technologies and passionate about elegant code,
            good docs, beautiful server organization and pepperoni pizza.
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a
              href='https://github.com/alissonperes'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a
              href='https://www.linkedin.com/in/alissonperes'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='h-80 lg:h-96' />
        </article>
      </div>
    </div>
  );
};
export default Hero;

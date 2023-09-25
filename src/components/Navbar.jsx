import { links } from '../data';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='bg-violet-200 fixed top-0 left-0 right-0'>
      <div className='align-element py-4 flex justify-between flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
        <h2 className='text-3xl font-bold'>
          <span className='text-violet-700'>alissonperes</span>.com
        </h2>
        <div className='flex gap-x-3'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-lg tracking-wide rounded-lg hover:text-violet-400 duration-300'
              >
                {text}
              </a>
            );
          })}
        </div>
        <div className='flex gap-x-3'>
          <a
            href='https://github.com/alissonperes'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-violet-700 duration-300' />
          </a>
          <a
            href='https://www.linkedin.com/in/alissonperes'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-violet-700 duration-300' />
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

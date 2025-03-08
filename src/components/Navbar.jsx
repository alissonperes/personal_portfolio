import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Navbar = ({ links, navTitle, github, linkedin }) => {
  return (
    <nav className='z-40 hadow-lg bg-purple-400 sticky top-0 left-0 right-0'>
      <div className='align-element py-4 flex justify-between flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
        <h2 className='text-3xl font-bold'>
          { navTitle }
        </h2>
        <div className='flex gap-x-2'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-lg tracking-wide rounded-lg decoration-2 no-underline hover:underline decoration-violet-600 duration-300'
              >
                {text}
              </a>
            );
          })}
        </div>
        <div className='flex gap-x-2'>
          <a
            href={github.link}
            target='_blank'
            rel='noreferrer'
          >
            <FaGithubSquare className='h-8 w-8 text-violet-600 hover:text-violet-900 duration-300' />
          </a>
          <a
            href={linkedin.link}
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin className='h-8 w-8 text-violet-600 hover:text-violet-900 duration-300' />
          </a>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  links: PropTypes.array,
  navTitle: PropTypes.object,
  github: PropTypes.object,
  linkedin: PropTypes.object,
};

export default Navbar;

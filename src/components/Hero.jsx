import PropTypes from 'prop-types';

const Hero = ({ heroTitle, position, userIntro, github, linkedin, heroImg }) => {
  return (
    <div className='bg-violet-200 py-10 shadow-md shadow-violet-200 md:shadow-violet-300/60 md:shadow-2xl' id='home'>
      <div className='align-element flex justify-center items-center md:max-h-[60vh]'>
        <div className='md:max-w-[28rem]'>
          <h1 className='text-2xl font-bold'>{heroTitle}</h1>
          <p className='mt-4 text-xl text-slate-700 capitalize'>
            {position}
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize'>
            {userIntro}
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a
              href={github.link}
              target='_blank'
              rel='noreferrer'
            >
              {github.icon}
            </a>
            <a
              href={linkedin.link}
              target='_blank'
              rel='noreferrer'
            >
              {linkedin.icon}
            </a>
          </div>
        </div>
        <div className='hidden md:block '>
        <img src={heroImg} className='size-80 max-h-[67vh]' />
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  heroTitle: PropTypes.string,
  position: PropTypes.string,
  userIntro: PropTypes.string,
  serIntro: PropTypes.string,
  github: PropTypes.object,
  linkedin: PropTypes.object,
  heroImg: PropTypes.string,
};

export default Hero;

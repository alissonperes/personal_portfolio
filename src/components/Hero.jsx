import PropTypes from 'prop-types';

const Hero = ({ heroTitle, position, userIntro, github, linkedin, heroImg }) => {
  return (
    <div className='bg-violet-200 py-10' id='home'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-5xl font-bold tracking-wider'>{heroTitle}</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            {position}
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
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
        </article>
        <article className='hidden md:flex justify-end '>
          <img src={heroImg} className='h-80 lg:h-96' />
        </article>
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

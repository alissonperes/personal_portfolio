import PropTypes from 'prop-types';

const Hero = ({ heroTitle, position, userIntro, github, linkedin, heroImg }) => {
  return (
    <section id="home" className='container-fluid d-md-flex align-items-center justify-content-center'>
      <img src={heroImg} className='col-md-6 col-xl-5 img-fluid' />
      <div className='col-md-6 col-xl-4 m-5 p-3 text-bg-info rounded'>
        <h2 className=''>{heroTitle}</h2>
        <p className=''>
          {position}
        </p>
        <p className=''>
          {userIntro}
        </p>
        <div className='fs-1'>
          <a
            href={github.link}
            target='_blank'
            rel='noreferrer'
            className='text-dark'
          >
            {github.icon}
          </a>
          <a
            href={linkedin.link}
            target='_blank'
            rel='noreferrer'
            className='text-dark'
          >
            {linkedin.icon}
          </a>
        </div>
      </div>
    </section>
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

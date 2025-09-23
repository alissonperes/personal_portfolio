import PropTypes from 'prop-types';

const Hero = ({ heroTitle, position, userIntro, github, linkedin, heroImg }) => {
  return (
    <>
    <section id="home" className='container'>
      <div className='row h-100 align-items-center justify-content-center'>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={heroImg} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{heroTitle}</h5>
                <p className="card-text"><small className="text-body-secondary">{position}</small></p>
                <p className="card-text">{userIntro}</p>
                <div className='fs-1'>
                  <a
                    href={github.link}
                    target='_blank'
                    rel='noreferrer'
                    className='text-info'
                  >
                    {github.icon}
                  </a>
                  <a
                    href={linkedin.link}
                    target='_blank'
                    rel='noreferrer'
                    className='text-info'
                  >
                    {linkedin.icon}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
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

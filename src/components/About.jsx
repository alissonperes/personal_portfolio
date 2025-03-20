import SectionTitle from './SectionTitle';
import PropTypes from 'prop-types';

const About = ({ userImage, userElevator }) => {
  return (
    <section className='container' id='about'>
      <SectionTitle text='Early Career Journey' />
      <div className='d-sm-flex align-items-center justify-content-center'>
        <article className='text-bg-info rounded-4 p-2 py-md-3 px-md-5 col-sm-6 col-md-6 col-xl-4'>
          <p className=''>
            {userElevator}
          </p>
        </article>
        <img src={userImage} className='img-fluid col-sm-6 col-md-6 col-xl-5 p-0 p-md-5' />
      </div>
    </section>
  );
};

About.propTypes = {
  userImage: PropTypes.string,
  userElevator: PropTypes.string,
}

export default About;

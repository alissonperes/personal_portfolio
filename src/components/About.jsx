import SectionTitle from './SectionTitle';
import PropTypes from 'prop-types';

const About = ({ userImage, userElevator }) => {
  return (
    <section className='bg-white py-28' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16 mt-20'>
        <img src={userImage} className='w-full h-64 mt-20' />
        <article>
          <SectionTitle text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
            {userElevator}
          </p>
        </article>
      </div>
    </section>
  );
};

About.propTypes = {
  userImage: PropTypes.string,
  userElevator: PropTypes.string,
}

export default About;

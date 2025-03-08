import SectionTitle from './SectionTitle';
import PropTypes from 'prop-types';

const About = ({ userImage, userElevator }) => {
  return (
    <section className='md:align-element' id='about'>
      <SectionTitle text='code and coffee' />
      <div className='bg-white py-12 md:align-element grid md:grid-cols-2 items-center justify-items-stretch gap-16 '>
        <img src={userImage} className='h-64 md:h-auto' />
        <article className='px-4 md:h-full'>
          <p className='text-slate-600 text-[.9rem] mt-8 leading-loose'>
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

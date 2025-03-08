import PropTypes from 'prop-types';

const SectionTitle = ({ text }) => {
  return (
    <div className='border-b border-gray-200 mb-12 pt-20 md:pt-28'>
      <h2 className='text-3xl font-medium tracking-wider capitalize'>{text}</h2>
    </div>
  );
};

SectionTitle.propTypes = {
  text: PropTypes.string,
};

export default SectionTitle;

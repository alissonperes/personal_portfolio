import PropTypes from 'prop-types';

const SectionTitle = ({ text }) => {
  return (
    <div className='pt-5 sticky-top text-bg-dark'>
      <h1 className=''>{text}</h1>
      <hr />
    </div>
  );
};

SectionTitle.propTypes = {
  text: PropTypes.string,
};

export default SectionTitle;

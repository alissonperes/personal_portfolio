import PropTypes from 'prop-types';

const SkillsCard = ({ title, text, iteration, icons }) => {
  return (
    <article className='rounded-xl bg-white p-8 text-center shadow-md hover:shadow-lg hover:shadow-violet-700 delay-150 duration-700 transition cursor-pointer'>
      <div className='grid -translate-y-10 transform items-center justify-center '>
        <img src={icons[iteration%icons.length]} />
      </div>
      <div className='-mt-8'>
        <h6 className='font-bold '>{title}</h6>
        <p className='text-slate-500'>{text}</p>
      </div>
    </article>
  );
};

SkillsCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  iteration: PropTypes.number,
  icons: PropTypes.array,
};
export default SkillsCard;

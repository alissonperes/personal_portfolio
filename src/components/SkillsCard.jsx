import PropTypes from 'prop-types';

const SkillsCard = ({ icon, title, text }) => {
  return (
    <article className='rounded-xl bg-white p-6 text-center shadow-xl'>
      <div className='w-full grid h-16 w-16 -translate-y-10 transform items-center justify-center '>
        <span>{icon}</span>
        <h4 className='font-bold '>{title}</h4>
      </div>
      <p className='mt-2 text-slate-500'>{text}</p>
    </article>
  );
};

SkillsCard.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  text: PropTypes.string,
};
export default SkillsCard;

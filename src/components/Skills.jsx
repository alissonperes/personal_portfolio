import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';
import PropTypes from 'prop-types';

const Skills = ({skills, icons}) => {
  return (
    <section className='h-full min-h-screen w-auto m-auto md:align-element ' id='skills'>
      <SectionTitle text='tech stack' />
      <div className='grid gap-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4'>
        {skills.map((skill, i) => {
          return <SkillsCard key={skill.id} {...skill} iteration={i} icons={icons} />;
        })}
      </div>
    </section>
  );
};

Skills.propTypes = {
  skills: PropTypes.array,
  icons: PropTypes.array
};

export default Skills;

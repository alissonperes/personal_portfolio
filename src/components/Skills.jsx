import { skills } from '../assets/data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';

const Skills = () => {
  return (
    <section className='h-full min-h-screen w-full pt-12 p-4' id='skills'>
      <SectionTitle text='tech stack' />
      <div className='grid gap-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 xl:grid-cols-4'>
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;

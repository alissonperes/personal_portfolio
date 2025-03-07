import ProjectsCard from './ProjectsCard';
import SectionTitle from './SectionTitle';
import PropTypes from 'prop-types';

const Projects = ({ projects }) => {
  return (
    <section className='pt-28 mb-20 align-element' id='projects'>
      <SectionTitle text='web creations' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

Projects.propTypes = {
  projects: PropTypes.array,
};

export default Projects;

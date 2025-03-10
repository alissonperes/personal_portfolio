import SectionTitle from './SectionTitle';
import PropTypes from 'prop-types';

const Projects = ({ projects }) => {
  return (
    <section className='container pb-5' id='experience'>
      <SectionTitle text='Experience' />
      <div className="row justify-content-center ">
        <div className='col-12 col-sm-8 col-lg-6 text-body-tertiary rounded'>
          {projects.map((project) => {
            return (
              <div className='' key={project.id}>
                <h3>{project.title}</h3>
                <h5>{project.period}</h5>
                <p>{project.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  projects: PropTypes.array,
};

export default Projects;

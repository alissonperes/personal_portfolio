import SectionTitle from './SectionTitle';
import PropTypes from 'prop-types';

const Projects = ({ projects }) => {
  return (
    <section className='container' id='experience'>
      <SectionTitle text='Experience' />
      <div className="row justify-content-center ">
        <div className='col-12 col-sm-8 col-lg-6 text-body-tertiary rounded'>
          {projects.map((project) => {
            return (
              <div className='pt-2' key={project.id}>
                <h2>{project.company}</h2>
                {project.company ? <hr/> : ''}
                <h5>{project.title}</h5>
                <h6>{project.period}</h6>
                <div dangerouslySetInnerHTML={{ __html: project.text }}></div>
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

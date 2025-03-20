import SectionTitle from './SectionTitle';
import PropTypes from 'prop-types';

const Skills = ({skills}) => {
  return (
    <section className='container' id='skills'>
      <SectionTitle text='Skills & Competencies' />
      <div className='row pt-3 pb-2'>
          {skills.map((x) =>  {
              return (
                <div key={x.id} className='col-12 col-sm-8 col-lg-4'>
                  <li>
                    <h5>{x.title}</h5>
                    <div dangerouslySetInnerHTML={{ __html: x.text }}></div>
                  </li>
                </div>
              )
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

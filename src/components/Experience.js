import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../assets/Experience.scss';

const Experience = props => {
  const { experience } = props;

  const expContainer = experience.map(item => (
    <div className="col" key={item.company}>
      <div className="row">
        <div className="col-md-7">
          <h3>{item.company}</h3>
          <h5 className="alert p-0">{item.jobTitle}</h5>
        </div>
        <div className="col-md-5">
          <p className="text-right">{item.period}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul>
            {item.acomplishments.map(x => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
    </div>
  ));
  return (
    <div className="container-fluid bg-container text-white">
      <div className="container">
        <div className="row flex-column pt-4">
          <h1 className="h1 mb-5">Relevant Experience</h1>
          {expContainer}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = store => ({
  experience: store.experience,
});

Experience.propTypes = {
  experience: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps)(Experience);

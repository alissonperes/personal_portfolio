import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../assets/Projects.scss';

const Projects = props => {
  const [allProjects, setAllProjects] = useState();
  const { projects } = props;
  const {
    fetched, fetching, error, projectsList,
  } = projects;

  useEffect(() => {
    if (fetched) {
      setAllProjects(
        projectsList.map(x => (
          <div className="col-sm-10 col-md-6 pb-2 pb-md-4" key={x.name}>
            <div className="row rounded m-2 pt-3 pb-3 project-item">
              <div className="col text-white">
                <div className="card border-0 mb-3">
                  <div className="card-header">{x.name}</div>
                  <div className="card-body">
                    <h5 className="card-title">{x.primaryLanguage.name}</h5>
                    <p className="card-text">{x.shortDescriptionHTML}</p>
                    <div className="btn-group" role="group" aria-label="Project links">
                      <button type="button" className="btn btn-info">
                        <a
                          href={x.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-white stretched-link"
                        >
                          Github
                        </a>
                      </button>
                      {x.homepageUrl ? (
                        <button type="button" className="btn btn-info">
                          <a
                            href={x.homepageUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-white stretched-link"
                          >
                            Live
                          </a>
                        </button>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )),
      );
    }
  }, [projects, fetched, fetching, error, projectsList]);

  return (
    <div className="container-flid projects-main pt-5">
      <div className="container">
        <div className="row justify-content-center mt-5">{allProjects}</div>
      </div>
    </div>
  );
};

const mapStateToProps = store => ({
  projects: store.projects,
});

Projects.propTypes = {
  projects: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps)(Projects);

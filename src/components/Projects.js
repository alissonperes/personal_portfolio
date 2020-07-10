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
          <div className="col-sm-10 col-md-6 p-0 mt-3 mb-3" key={x.name}>
            <div className="row h-100 rounded m-3 pt-3 pb-3 project-item shadow">
              <div className="col text-white">
                <div className="card h-100 border-0 mb-3">
                  <img className="card-img-top" src={x.openGraphImageUrl} alt={x.name} />
                  <div className="card-header">{x.name}</div>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div className="d-none d-sm-inline">
                      {x.languages.edges.map(lang => (
                        <span key={lang.node.id} className="badge badge-light mr-1">
                          {lang.node.name}
                        </span>
                      ))}
                    </div>
                    <p className="card-text">{x.shortDescriptionHTML}</p>
                    <div>
                      <a
                        href={x.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-white h3 mr-3"
                      >
                        <i className="fa fa-github" />
                      </a>
                      {x.homepageUrl ? (
                        <a
                          href={x.homepageUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-white h3"
                        >
                          <i className="fa fa-link" />
                        </a>
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
    <div className="container-flid projects-main pt-5 pb-5">
      <div className="container projects-container rounded shadow">
        <div className="row">
          <div className="col">
            <h1 className="h1 text-center text-white pt-4">Projects</h1>
          </div>
        </div>
        <div className="row justify-content-center mt-5 pb-4">{allProjects}</div>
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

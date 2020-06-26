import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMainData, getAllProjects } from '../actions/index';
import Jumbotron from './Jumbotron';
import Projects from './Projects';
import Info from './Info';
import '../assets/App.scss';

const App = props => {
  const [projectsList, setProjectsList] = useState([]);

  const {
    user, getUserData, getProjects, projects, languages,
  } = props;
  const {
    fetched, fetching, error, userData,
  } = user;

  useEffect(() => {
    if (!fetched && !fetching && error === null) {
      getProjects();
      getUserData();
    }

    if (projects.projectsList.length > 0) {
      setProjectsList(
        projects.projectsList.map(project => (
          <a className="dropdown-item" href={project.homepageUrl} key={project.name}>
            {project.name}
          </a>
        )),
      );
    }
  }, [user, fetched, fetching, error, userData, getUserData, getProjects, projects]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <button
                type="button"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Live Projects
              </button>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {projectsList}
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <Jumbotron user={user} languages={languages} />
      <Projects projects={projects} />
      <Info user={user} />
    </div>
  );
};

const mapStateToProps = store => ({
  user: store.user,
  projects: store.projects,
  languages: store.languages,
});

const mapDispatchToProps = dispatch => ({
  getUserData: () => dispatch(getMainData()),
  getProjects: () => dispatch(getAllProjects()),
});

App.propTypes = {
  getUserData: PropTypes.func.isRequired,
  getProjects: PropTypes.func.isRequired,
  user: PropTypes.shape().isRequired,
  projects: PropTypes.shape().isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

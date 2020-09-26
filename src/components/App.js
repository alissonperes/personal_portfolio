import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMainData, getAllProjects } from '../actions/index';
import Jumbotron from './Jumbotron';
import Projects from './Projects';
import Info from './Info';
import '../assets/App.scss';

const App = props => {
  const {
    user, getUserData, getProjects, projects, languages,
  } = props;
  const { fetched, fetching, error } = user;

  useEffect(() => {
    if (!fetched && !fetching && error === null) {
      getProjects();
      getUserData();
    }
  }, [fetched, fetching, error, getProjects, getUserData]);

  return (
    <div>
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

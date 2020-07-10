import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import '../assets/Jumbotron.scss';

const Jumbotron = props => {
  const [jumbotronData, setJumbotronData] = useState();
  const { user, languages } = props;
  const {
    fetched, fetching, error, userData,
  } = user;

  useEffect(() => {
    if (fetching) {
      setJumbotronData(
        <div className="text-center">
          <div className="spinner-grow">
            <span className="sr-only">Loading...</span>
          </div>
        </div>,
      );
    } else if (fetched) {
      setJumbotronData(
        <div className="row align-items-center">
          <div className="jumbotron text-white mb-0 shadow">
            <div className="row justify-content-center">
              <div className="col-4 d-none d-sm-inline">
                <img className="img w-100 rounded" src={userData.avatarUrl} alt={userData.name} />
              </div>
              <div className="col-lg-8">
                <div className="">
                  <h1 className="h1">#AlissonPeres</h1>
                  <p className="lead">{userData.bio}</p>
                  <hr className="my-4" />
                </div>
                <div className="d-none d-sm-inline">
                  <h4>Skills</h4>
                  {languages.map(x => (
                    <span key={x} className="badge badge-light mr-1">
                      {x}
                    </span>
                  ))}
                  <hr className="my-4" />
                </div>

                <a
                  className="text-white card-link h1"
                  href={userData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  <i className="fa fa-github" />
                </a>

                <a
                  className="text-white card-link h1"
                  href={userData.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  <i className="fa fa-linkedin" />
                </a>

                <a
                  className="text-white card-link h1"
                  href="https://angel.co/u/alissonperes"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  <i className="fa fa-angellist" />
                </a>

                <div className="dropdown mt-3">
                  <button
                    className="btn btn-dark dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Download my CV
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a
                      className="dropdown-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://alissonperes.com/docs/CV_Alisson%20Peres_EN.pdf"
                    >
                      English
                    </a>
                    <a
                      className="dropdown-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://alissonperes.com/docs/CV_Alisson%20Peres_PT-br.pdf"
                    >
                      Portuguese Brazil
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }
  }, [user, fetched, fetching, error, userData, languages]);
  return (
    <div className="container-fluid jumbotron-main-container">
      <div className="container jumbotron-container">{jumbotronData}</div>
    </div>
  );
};

Jumbotron.propTypes = {
  user: PropTypes.shape().isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Jumbotron;

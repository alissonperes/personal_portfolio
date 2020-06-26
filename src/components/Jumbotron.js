import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
        <div className="jumbotron">
          <div className="row justify-content-center">
            <div className="col-4">
              <img className="img w-100 rounded" src={userData.avatarUrl} alt={userData.name} />
            </div>
            <div className="col-lg-8">
              <h1># AlissonPeres</h1>
              <p className="lead">{userData.bio}</p>
              <hr className="my-4" />
              <h4>Programming languages</h4>
              <ul className="list-group list-group-horizontal-sm">
                {languages.map(x => (
                  <li className="list-group-item" key={x}>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <hr className="my-4" />

              <div className="btn-group" role="group" aria-label="Social profiles">
                <button type="button" className="btn btn-info">
                  <a
                    className="text-white card-link stretched-link"
                    href={userData.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="button"
                  >
                    Github
                  </a>
                </button>

                <button type="button" className="btn btn-info">
                  <a
                    className="text-white card-link stretched-link"
                    href={userData.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="button"
                  >
                    Linkedin
                  </a>
                </button>
              </div>
              <div className="dropdown mt-3">
                <button
                  className="btn btn-info dropdown-toggle"
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
        </div>,
      );
    }
  }, [user, fetched, fetching, error, userData, languages]);
  return <div className="container mt-5 p-6">{jumbotronData}</div>;
};

Jumbotron.propTypes = {
  user: PropTypes.shape().isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Jumbotron;

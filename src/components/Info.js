import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import '../assets/Info.scss';

const Info = props => {
  const { user } = props;
  const { fetched, userData } = user;
  const [userContactInfo, setUserContactInfo] = useState([]);

  useEffect(() => {
    if (fetched) {
      setUserContactInfo(
        <div className="container pt-5 pb-3">
          <h1 className="h1 text-center text-white text-shadow">Contact me!</h1>
          <div className="row mt-5">
            <div className="col-md-3 text-center">
              <h4>
                <a
                  href={userData.websiteUrl}
                  className="text-white text-shadow h1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin" />
                </a>
              </h4>
            </div>
            <div className="col-md-3 text-center">
              <h4>
                <a
                  href={`mailto:${userData.email}`}
                  className="text-white text-shadow h1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-envelope" />
                </a>
              </h4>
            </div>
            <div className="col-md-3 text-center">
              <h4>
                <a
                  href={userData.url}
                  className="text-white text-shadow h1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github" />
                </a>
              </h4>
            </div>
            <div className="col-md-3 text-center">
              <h4>
                <a
                  href="https://angel.co/u/alissonperes"
                  className="text-white text-shadow h1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-angellist" />
                </a>
              </h4>
            </div>
          </div>
        </div>,
      );
    }
  }, [userData, fetched]);

  return <div className="container-fluid Info-main">{userContactInfo}</div>;
};

Info.propTypes = {
  user: PropTypes.shape().isRequired,
};

export default Info;

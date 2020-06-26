import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../assets/Info.scss';

const Info = props => {
  const { user } = props;
  const { fetched, userData } = user;
  const [userContactInfo, setUserContactInfo] = useState([]);

  useEffect(() => {
    if (fetched) {
      setUserContactInfo(
        <div className="container mt-5 mb-5">
          <h1 className="text-center text-white text-shadow">Contact me!</h1>
          <div className="row mt-5">
            <div className="col-md-4 text-center">
              <h4>
                <a
                  href={userData.websiteUrl}
                  className="text-white text-shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </h4>
            </div>
            <div className="col-md-4 text-center">
              <h4>
                <a
                  href={`mailto:${userData.email}`}
                  className="text-white text-shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {userData.email}
                </a>
              </h4>
            </div>
            <div className="col-md-4 text-center">
              <h4>
                <a
                  href={userData.url}
                  className="text-white text-shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </h4>
            </div>
          </div>
          <div className="row">
            <span className="w-100 text-center">Made by Alisson Peres</span>
          </div>
        </div>,
      );
    }
  }, [userData, fetched]);

  return <div>{userContactInfo}</div>;
};

Info.propTypes = {
  user: PropTypes.shape().isRequired,
};

export default Info;

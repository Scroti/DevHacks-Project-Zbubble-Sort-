import React from 'react';
import './InfoPage.css';
const InfoPage = ({ img, description }) => {
  const profilePic = img;
  return (
    <div className="d-flex flex-column align-items-center">
      <img className="avatar" src={profilePic} />
      <p className="description">{description}</p>
    </div>
  );
};

export default InfoPage;

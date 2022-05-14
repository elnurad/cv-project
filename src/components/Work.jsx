/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import '../styles/work.css';

function Work({ id, handleDeleteWorkItem }) {
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [displayWorkInfo, setWorkInfo] = useState(false);

  const handleCompanyName = (e) => {
    setCompanyName(e.target.value);
  };

  const handlePosition = (e) => {
    setPosition(e.target.value);
  };

  const handleFrom = (e) => {
    setTimeFrom(e.target.value);
  };

  const handleTo = (e) => {
    setTimeTo(e.target.value);
  };

  const handleJobDescription = (e) => {
    setJobDescription(e.target.value);
  };

  const flipWorkInfo = () => {
    setWorkInfo(!displayWorkInfo);
  };

  return (
    <div className="work-container">
      {displayWorkInfo
        ? (
          <div className="work-information">
            <div className="saved-work-details">
              <div className="saved-work-item-title">
                <p>Company Name:</p>
                <p>Position:</p>
                <p>From:</p>
                <p>To:</p>
              </div>

              <div className="saved-work-item-info">
                <p>{companyName}</p>
                <p>{position}</p>
                <p>{timeFrom}</p>
                <p>{timeTo}</p>
              </div>
            </div>
            <div className="job-description">
              <p className="job-description-title">
                Description:
              </p>
              <p className="job-description-body">
                {jobDescription}
              </p>
            </div>
          </div>
        )
        : (
          <form onSubmit={(e) => e.preventDefault()} className="work-form">
            <div className="company">
              <label>
                Company Name:
                <div className="work-input">
                  <input value={companyName} onChange={handleCompanyName} />
                </div>
              </label>
              <label>
                Position:
                <div className="work-input">
                  <input value={position} onChange={handlePosition} />
                </div>
              </label>
            </div>
            <div className="work-duration">
              <label>
                From:
                <div className="work-input">
                  <input value={timeFrom} onChange={handleFrom} type="date" />
                </div>
              </label>

              <label>
                To:
                <div className="work-input">
                  <input value={timeTo} onChange={handleTo} type="date" />
                </div>
              </label>
            </div>

            <label>
              Description:
              <div className="work-description">
                <textarea
                  value={jobDescription}
                  onChange={handleJobDescription}
                  rows={7}
                  cols={50}
                />
              </div>
            </label>

          </form>
        )}

      <button onClick={flipWorkInfo}>{displayWorkInfo ? 'edit' : 'save'}</button>
      <button onClick={() => handleDeleteWorkItem(id)}>delete</button>

    </div>
  );
}

export default Work;
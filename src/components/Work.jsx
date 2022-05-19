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

  const flipWorkInfo = () => {
    setWorkInfo(!displayWorkInfo);
  };

  const handleSave = (e) => {
    e.preventDefault();
    flipWorkInfo();
  };
  const handleDeleteWorkInfo = () => {
    handleDeleteWorkItem(id);
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

            <button onClick={flipWorkInfo}>edit</button>
          </div>
        )
        : (
          <form onSubmit={handleSave} className="work-form">
            <div className="company">
              <label>
                Company Name:
                <div className="work-input">
                  <input
                    placeholder="Type company name"
                    value={companyName}
                    onChange={handleCompanyName}
                    type="text"
                    required
                  />
                </div>
              </label>
              <label>
                Position:
                <div className="work-input">
                  <input
                    placeholder="Position"
                    value={position}
                    onChange={handlePosition}
                    type="text"
                    required
                  />
                </div>
              </label>
            </div>
            <div className="work-duration">
              <label>
                From:
                <div className="work-input">
                  <input
                    value={timeFrom}
                    onChange={handleFrom}
                    type="date"
                    required
                  />
                </div>
              </label>

              <label>
                To:
                <div className="work-input">
                  <input
                    value={timeTo}
                    onChange={handleTo}
                    type="date"
                    required
                  />
                </div>
              </label>
            </div>
            <button type="submit">save</button>
            <button className="delete-button" onClick={handleDeleteWorkInfo}>delete</button>
          </form>
        )}
    </div>
  );
}

export default Work;

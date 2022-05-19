/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import '../styles/education.css';

function Education({ id, handleDeleteEduItem }) {
  const [schoolName, setSchoolName] = useState('');
  const [major, setMajor] = useState('');
  const [studyFrom, setStudyFrom] = useState('');
  const [studyTo, setStudyTo] = useState('');
  const [degree, setDegree] = useState('');
  const [displayEducationSection, setEducationSection] = useState(false);

  const handleDeleteItem = () => {
    handleDeleteEduItem(id);
  };

  const changeSchoolName = (e) => {
    setSchoolName(e.target.value);
  };
  const changeMajor = (e) => {
    setMajor(e.target.value);
  };
  const changeStudyFrom = (e) => {
    setStudyFrom(e.target.value);
  };
  const changeStudyTo = (e) => {
    setStudyTo(e.target.value);
  };
  const changeDegree = (e) => {
    setDegree(e.target.value);
  };
  const flipEducationSection = () => {
    setEducationSection(!displayEducationSection);
  };
  const handleSaveEdu = (e) => {
    e.preventDefault();
    flipEducationSection();
  };

  return (
    <div className="education-section">
      {displayEducationSection
        ? (
          <div className="saved-education-details-container">
            <div className="saved-education-details">
              <div className="saved-education-details-title">
                <p>
                  School Name:
                </p>
                <p>
                  Major:
                </p>
                <p>
                  From:
                </p>
                <p>
                  To:
                </p>
                <p>
                  Degree:
                </p>
              </div>
              <div className="saved-education-details-info">
                <p>
                  {schoolName}
                </p>
                <p>
                  {major}
                </p>
                <p>
                  {studyFrom}
                </p>
                <p>
                  {studyTo}
                </p>
                <p>
                  {degree}
                </p>
              </div>
            </div>
            <div id="education-edit-button">
              <button type="button" onClick={flipEducationSection}>edit</button>
            </div>
          </div>
        )
        : (
          <form onSubmit={handleSaveEdu} className="education-form">
            <label>
              School Name:
              <div className="school-name">
                <input
                  placeholder="Type your school name"
                  value={schoolName}
                  onChange={changeSchoolName}
                  type="text"
                  required
                />
              </div>
            </label>
            <label>
              Major:
              <div className="school-major">
                <input
                  placeholder="Type your major"
                  value={major}
                  onChange={changeMajor}
                  required
                  type="text"
                />
              </div>
            </label>
            <label>
              Degree:
              <div className="degree-input">
                <input
                  placeholder="Type your degree"
                  value={degree}
                  onChange={changeDegree}
                  required
                  type="text"
                />
              </div>
            </label>
            <div className="school-duration">
              <label>
                From:
                <div className="education-input">
                  <input
                    type="date"
                    value={studyFrom}
                    onChange={changeStudyFrom}
                    required
                  />
                </div>
              </label>
              <label>
                To:
                <div className="education-input">
                  <input
                    type="date"
                    value={studyTo}
                    onChange={changeStudyTo}
                    required
                  />
                </div>
              </label>
            </div>
            <button type="submit">save</button>
            <button className="delete-button" onClick={handleDeleteItem}>delete</button>
          </form>
        )}
    </div>
  );
}

export default Education;

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
  return (
    <div className="education-section">
      {displayEducationSection
        ? (
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
        )
        : (
          <form onSubmit={(e) => e.preventDefault()} className="education-form">
            <label>
              School Name:
              <div className="school-name">
                <input required placeholder="type your school name" value={schoolName} onChange={changeSchoolName} />
              </div>
            </label>
            <label>
              Major:
              <div className="school-major">
                <input placeholder="type your major" value={major} onChange={changeMajor} />
              </div>
            </label>
            <label>
              Degree:
              <div className="degree-input">
                <input placeholder="type your degree" value={degree} onChange={changeDegree} />
              </div>
            </label>
            <div className="school-duration">
              <label>
                From:
                <div className="education-input">
                  <input type="date" value={studyFrom} onChange={changeStudyFrom} />
                </div>
              </label>
              <label>
                To:
                <div className="education-input">
                  <input type="date" value={studyTo} onChange={changeStudyTo} />
                </div>
              </label>
            </div>
          </form>
        )}
      <button onClick={flipEducationSection}>{displayEducationSection ? 'edit' : 'save'}</button>
      <button onClick={handleDeleteItem}>delete</button>
    </div>
  );
}

export default Education;
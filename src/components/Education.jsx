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
          <div>
            <p>
              School Name:
              {' '}
              {schoolName}
            </p>
            <p>
              Major:
              {' '}
              {major}
            </p>
            <p>
              from:
              {' '}
              {studyFrom}
            </p>
            <p>
              to:
              {' '}
              {studyTo}
            </p>
            <p>
              Degree:
              {' '}
              {degree}
            </p>
          </div>
        )
        : (
          <form onSubmit={(e) => e.preventDefault()} className="education-form">
            <label>
              School Name:
              <div className="school-name">
                <input value={schoolName} onChange={changeSchoolName} />
              </div>
            </label>
            <label>
              Major:
              <div className="school-major">
                <input value={major} onChange={changeMajor} />
              </div>
            </label>
            <div className="school-duration">
              <label>
                From:
                <div className="education-input">
                  <input value={studyFrom} onChange={changeStudyFrom} />
                </div>
              </label>
              <label>
                To:
                <div className="education-input">
                  <input value={studyTo} onChange={changeStudyTo} />
                </div>
              </label>
            </div>
            <label>
              Degree:
              <div className="degree-input">
                <input value={degree} onChange={changeDegree} />
              </div>
            </label>
          </form>
        )}
      <button onClick={flipEducationSection}>{displayEducationSection ? <i className="fa fa-edit" /> : 'save'}</button>
      <span onClick={handleDeleteItem}><i className="fa fa-remove" /></span>
    </div>
  );
}

export default Education;

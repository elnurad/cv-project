/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import '../styles/skills.css';

// write a function to add/delete  skills dynamically
function Skills() {
  const [skill, setSkill] = useState('');
  const [skillsArray, setSkillsArray] = useState([]);
  // const [saveMode, setSaveMode] = useState(false)
  const [displaySkills, flipDisplaySkills] = useState(false);

  const changeSkill = (e) => {
    setSkill(e.target.value);
  };

  const removeSkill = (id) => {
    const newArray = skillsArray.filter((item) => item.id !== id);
    setSkillsArray(newArray);
  };

  const addSkill = () => {
    setSkillsArray((prevState) => [...prevState, { skill, id: skillsArray.length }]);
    setSkill('');
  };

  const handleDisplaySkills = () => {
    flipDisplaySkills(!displaySkills);
  };

  const renderSkillsArray = skillsArray.map((item) => (
    <li key={skillsArray.length}>
      {item.skill}
      <span onClick={() => removeSkill(item.id)}> delete</span>
    </li>
  ));

  return (
    <div className="skills-section">
      {displaySkills ? <ul>{renderSkillsArray}</ul>
        : (
          <div>
            <label>
              <input value={skill} onChange={changeSkill} />

            </label>
            <button onClick={addSkill}>add skill</button>
            <ul>{renderSkillsArray}</ul>

          </div>
        )}
      <button onClick={handleDisplaySkills}>{displaySkills ? 'edit' : 'save'}</button>

    </div>
  );
}

export default Skills;

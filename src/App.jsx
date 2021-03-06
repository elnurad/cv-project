/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import './styles/App.css';
import Education from './components/Education';
import Work from './components/Work';
import Name from './components/Name';

function App() {
  const [eduId, setEduId] = useState([]);

  const addEducationComp = () => {
    setEduId((prevState) => [...prevState, Math.floor(Math.random() * Date.now())]);
  };

  const [workId, setWorkId] = useState([]);
  const addWorkComp = () => {
    setWorkId((prevState) => [...prevState, Math.floor(Math.random() * Date.now())]);
  };

  function handleDeleteWorkItem(id) {
    const filteredWorkIdCopy = workId.filter((item) => item !== id);
    setWorkId(filteredWorkIdCopy);
  }

  const handleDeleteEduItem = (id) => {
    const filteredEduIdCopy = eduId.filter((item) => item !== id);
    setEduId(filteredEduIdCopy);
  };

  const renderWorkComponents = workId.map((item) => (
    <Work
      id={item}
      key={item}
      handleDeleteWorkItem={handleDeleteWorkItem}
    />
  ));
  const renderEducationComponents = eduId.map((item) => (
    <Education
      id={item}
      key={item}
      handleDeleteEduItem={handleDeleteEduItem}
    />
  ));

  return (
    <div className="App">
      <div className="edit-mode">
        <h4>Personal Details</h4>
        <Name />
        <h4>Experience</h4>
        <div>
          {renderWorkComponents}
        </div>
        <button className="add-new-button" onClick={addWorkComp}>
          add new
        </button>
        <h4>Education</h4>
        <div>{renderEducationComponents}</div>
        <button className="add-new-button" onClick={addEducationComp}>add new</button>
      </div>
    </div>
  );
}

export default App;

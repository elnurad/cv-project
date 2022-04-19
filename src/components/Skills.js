import React, { useState } from 'react';

//write a function to add/delete  skills dynamically 
function Skills() {

  const [skill, setSkill] = useState('');
   const changeSkill =(e) => {
    setSkill(e.target.value);
  }
    return(
        <div className="skills-section">
            <label>
                   Add Skills:<input value={skill} onChange={changeSkill} />
            </label>

        </div>
    )
}


export default Skills;
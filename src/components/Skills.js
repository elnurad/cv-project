import React from 'react';


function Skills({ skill, changeSkill }) {
    return(
        <div className="skills-section">
            <label>
                   Add Skills:<input value={skill} onChange={changeSkill} />
            </label>

        </div>
    )
}


export default Skills;
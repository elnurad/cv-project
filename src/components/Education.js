import React from 'react';

function Education({
    schoolName, changeSchoolName, 
    major, changeMajor, 
    studyFrom, studyTo, 
    changeStudyFrom, changeStudyTo,
    degree, changeDegree,
    displayEducationSection, flipEducationSection
}) {
    return(
        <div className="education-section">
            {displayEducationSection ? 
            <div>
              School Name: {schoolName}
              Major: {major}
              from: {studyFrom}
              to: {studyTo}
              Degree: {degree}

            </div>
            :
            <form onSubmit={(e)=>e.preventDefault()} className="education-form">
            <label>
                   School Name:<input value={schoolName} onChange={changeSchoolName} />
            </label>
            <label>
                   Major:<input value={major} onChange={changeMajor} />
            </label>
            <label>
                   From:<input value={studyFrom} onChange={changeStudyFrom} />
            </label>
            <label>
                   To:<input value={studyTo} onChange={changeStudyTo} />
            </label>
            <label>
                   Degree:<input value={degree} onChange={changeDegree} />
            </label>

                
            </form>}
            <button onClick={flipEducationSection}>{displayEducationSection ? 'edit' : 'save'}</button>
        </div>
    )

}



export default Education;
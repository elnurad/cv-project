import React, { useState} from 'react';

function Education(props)

 {
       const [schoolName, setSchoolName] = useState('');
       const [major, setMajor] = useState('');
       const [studyFrom, setStudyFrom] = useState('')
       const [studyTo, setStudyTo] = useState('');
       const [degree, setDegree] = useState('');
       const [displayEducationSection, setEducationSection] = useState(false)

      
    
       const handleDeleteEduItem = () => {
              console.log(props.id)
              props.handleDeleteEduItem(props.id)
       }

       const changeSchoolName = (e) => {
              setSchoolName(e.target.value);
            };
          
       const changeMajor = (e) => {
              setMajor(e.target.value);
            };
       const changeStudyFrom =(e)=> {
              setStudyFrom(e.target.value);
            };
       const changeStudyTo =(e)=> {
              setStudyTo(e.target.value)
            };
       const changeDegree =(e) => {
              setDegree(e.target.value);
            };
       const flipEducationSection =()=> {
              setEducationSection(!displayEducationSection)
            };
   

          
          
    return(
        <div className="education-section">
            {displayEducationSection ? 
            <div>
              <p>School Name: {schoolName}</p>
              <p>Major: {major}</p>
              <p>from: {studyFrom}</p>
              <p>to: {studyTo}</p> 
              <p>Degree: {degree}</p> 

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
            <button onClick={handleDeleteEduItem}>delete</button>
        </div>
    )

}



export default Education;
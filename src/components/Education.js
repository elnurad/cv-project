import React, { useState} from 'react';

function Education(props)
//     schoolName, changeSchoolName, 
//     major, changeMajor, 
//     studyFrom, studyTo, 
//     changeStudyFrom, changeStudyTo,
//     degree, changeDegree,
//     displayEducationSection, flipEducationSection
 {
       const [schoolName, setSchoolName] = useState('');
       const [major, setMajor] = useState('');
       const [studyFrom, setStudyFrom] = useState('')
       const [studyTo, setStudyTo] = useState('');
       const [degree, setDegree] = useState('');
       const [displayEducationSection, setEducationSection] = useState(false)
       const [clicked, setClicked] = useState(false)
       const [count, setCount] = useState(0)
    

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
       // const handleClicked =()=>{
       //        // setClicked(!clicked)
       //        // setCount(count+1)
       //        props.handleDeleteButton()
       // }


          
          
    return(
        <div id={props.id} className="education-section" data-count={count}>
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
            <button onClick={()=>props.handleDeleteButton(props.id)}>delete</button>
        </div>
    )

}



export default Education;
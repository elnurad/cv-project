import React, { useState } from 'react';
import Name from './components/Name';
import Work from './components/Work'
import Education from './components/Education';
import Skills from './components/Skills'

function App() {
 
  const [firstName, setFirstName] = useState('First Name');
  const [lastName, setLastName] = useState('Last Name');
  const [currentRole, setCurrentRole] = useState('Current Role')
  const [addressOne, setAddressOne] = useState('Addres Line 1');
  const [addressTwo, setAddressTwo] = useState('Address Line 2');
  const [phoneNumber, setPhoneNumber] = useState('508-345-2233')
  const [email, setEmail] = useState('johnsmith@email.com')
  const [companyName, setCompanyName] = useState('')
  const [location, setLocation] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [major, setMajor] = useState('');
  const [studyFrom, setStudyFrom] = useState('')
  const [studyTo, setStudyTo] = useState('');
  const [degree, setDegree] = useState('');
  const [skill, setSkill] = useState('');
  const [displayPersonalDetails, setPersonalDetails] = useState(false)
  const [displayWorkInfo, setWorkInfo] = useState(false)
  const [displayEducationSection, setEducationSection] = useState(false)

  const flipEducationSection =(e)=> {
    setEducationSection(!displayEducationSection)
  }

  const flipWorkInfo =(e) => {
    setWorkInfo(!displayWorkInfo)
  };
  const flipPersonalDetails =(e)=> {
    setPersonalDetails(!displayPersonalDetails)
  };

  const changeSkill =(e) => {
    setSkill(e.target.value);
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
  }
  
  const handleCompanyName = (e) => {
    setCompanyName(e.target.value)
  };

  const handleLocation = (e) => {
    setLocation(e.target.value)
  };

  const handleFrom = (e) => {
    setTimeFrom(e.target.value)
  };

  const handleTo = (e) => {
    setTimeTo(e.target.value)
  };

  const handleJobDescription = (e) => {
    setJobDescription(e.target.value)
  }


  const handleFirstNameOnChange =(e)=> {
    setFirstName(e.target.value)
  };

  const handleLastNameOnChange =(e)=> {
    setLastName(e.target.value)
  };

  const handleCurrentRole =(e)=> {
    setCurrentRole(e.target.value)
  }

  const handleAddressOne =(e)=> {
    setAddressOne(e.target.value)
  }

  const handleAddressTwo =(e)=> {
    setAddressTwo(e.target.value)
  }

  const handlePhoneNumber =(e)=> {
    setPhoneNumber(e.target.value)
  }

  const handleEmail =(e)=> {
    setEmail(e.target.value)
  }

 
  return (
    <div className="App">
       <div className="edit-mode">
  
       <Name firstName={firstName} onChangeFirstName={handleFirstNameOnChange}
       lastName={lastName} onChangeLastName={handleLastNameOnChange}
       currentRole={currentRole} handleCurrentRole={handleCurrentRole} 
       addressOne={addressOne} handleAddressOne={handleAddressOne}
       addressTwo={addressTwo} handleAddressTwo={handleAddressTwo}
       phoneNumber={phoneNumber} handlePhoneNumber={handlePhoneNumber}
       email={email} handleEmail={handleEmail} 
       displayPersonalDetails={displayPersonalDetails} flipPersonalDetails={flipPersonalDetails}
       />
       <h4>Experience</h4>
       <Work
       companyName={companyName} handleCompanyName={handleCompanyName}
       location={location} handleLocation={handleLocation}
       timeFrom={timeFrom} handleFrom={handleFrom} 
       timeTo={timeTo} handleTo={handleTo}
       jobDescription={jobDescription} handleJobDescription={handleJobDescription}
       displayWorkInfo={displayWorkInfo} flipWorkInfo={flipWorkInfo}
       />
       <h4>Education</h4>
       <Education 
       schoolName={schoolName} changeSchoolName={changeSchoolName}
       major={major} changeMajor={changeMajor}
       studyFrom={studyFrom} studyTo={studyTo}
       changeStudyFrom={changeStudyFrom} changeStudyTo={changeStudyTo}
       degree={degree} changeDegree={changeDegree}
       displayEducationSection={displayEducationSection} flipEducationSection={flipEducationSection}
       />
       <h4>Skills</h4>
       <Skills 
       skill={skill}
       changeSkill={changeSkill}
       
       />
        
    
       </div>
      </div>
  );
}

export default App;

import React, { useState } from 'react';
import './styles/App.css'
import Education from './components/Education';
import Work from './components/Work';
import Name from './components/Name'
import Skills from './components/Skills'

function App() {

 
  const [eduId, setEduId] = useState([]); 
 
  const addEducationComp =()=> {
    setEduId((prevState) =>[...prevState, Math.floor(Math.random() * Date.now())])
    console.log(eduId)
  }

  const [workId, setWorkId] = useState([]);
  const addWorkComp =()=> {
    setWorkId((prevState) =>[...prevState, Math.floor(Math.random() * Date.now())])
    console.log(workId)
  }

  const [skillsId, setSkillsId] = useState([]);
  
 

function handleDeleteWorkItem(id){
  const filteredWorkIdCopy = workId.filter(item=>item != id)
  setWorkId(filteredWorkIdCopy)
}

const handleDeleteEduItem =(id)=>{
  const filteredEduIdCopy = eduId.filter(item=>item != id)
  setEduId(filteredEduIdCopy)

}

const renderWorkComponents = workId.map(item => <Work id={item} key={item} handleDeleteWorkItem={handleDeleteWorkItem}/>)
const renderEducationComponents = eduId.map((item) => <Education id={item} key={item} handleDeleteEduItem={handleDeleteEduItem} />)

  return (
    <div className="App">
       <div className="edit-mode"> 
      <Name />
       <h4>Experience</h4>
       <button onClick={addWorkComp}>
        add new
      </button>
      <div>
        {renderWorkComponents}
      </div>
        

       <h4>Education</h4>
     
          <button onClick={addEducationComp}>add new</button>
          <div>{renderEducationComponents}</div>
     
       <h4>Skills</h4>
       
       <Skills />

        
    
       </div>
      </div>
  );
}

export default App;

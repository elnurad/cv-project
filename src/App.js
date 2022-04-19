import React, { useState } from 'react';
import './styles/App.css'
import Education from './components/Education';
import Work from './components/Work';
import Name from './components/Name'
import Skills from './components/Skills'

function App() {

  const uniqueId =()=>{
    return Math.floor(Math.random() * Date.now())
  }
  const eduId = uniqueId()
 
  
  const [educationArray, setEducationArray] = useState([]);
  const [count, setCount] = useState(0)
  const [workArray, setWorkArray] = useState([]);
  
 
//   function handleDeleteEduItem(id){
  
//   const newEduArray = educationArray.filter((item)=>item.id !== id)
   
//   setEducationArray(newEduArray)
//   console.log(newEduArray)
// }

 
function handleDeleteEduItem(id){
  
  const newEduArray = educationArray.map((item)=>`item.id:${item.id}, id:${id}`)
   
  
  console.log(newEduArray)
}

function handleDeleteWorkItem(id){
  const newWorkArray = workArray.filter(item=>item.id != id)
  console.log(newWorkArray)
}

// const handleDeleteEduItem =(id)=>{
  
//   const eduArrayToSplice = [...educationArray]
//   const newEduArray = eduArrayToSplice.splice(id, 1)
  
//   setEducationArray(newEduArray)
//   console.log(id)
// }


  return (
    <div className="App">
       <div className="edit-mode">
      <h4>Personal Details</h4>  
      <Name />
       <h4>Experience</h4>
       <button onClick={()=>setWorkArray([...workArray, {comp: <Work id={workArray.length} handleDeleteWorkItem={handleDeleteWorkItem} />, id: workArray.length}])}>
        add new
      </button>
      <button onClick={()=>console.log(workArray)}>click</button>
       {workArray.map((workItem, i)=>
         <div key={i}>{workItem.comp}</div>
        )}
        

       <h4>Education</h4>
       <button onClick={()=>
        {setEducationArray([...educationArray, {comp: <Education id={eduId} handleDeleteButton={handleDeleteEduItem}/>, id: eduId}])}}>
          add new
        </button>
       {educationArray.map((eduItem, i)=><div className="eduItem" key={i}>{eduItem.comp}</div>)}
       
       <h4>Skills</h4>
       <Skills  
       />
        
    
       </div>
      </div>
  );
}

export default App;

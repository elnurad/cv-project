import React, { useState } from 'react';
import '../styles/work.css'

const Work =(props)=> {

    const [companyName, setCompanyName] = useState('')
    const [location, setLocation] = useState('');
    const [timeFrom, setTimeFrom] = useState('');
    const [timeTo, setTimeTo] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [displayWorkInfo, setWorkInfo] = useState(false)

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


    const flipWorkInfo =(e) => {
      setWorkInfo(!displayWorkInfo)
    };


    return(
        <div className="work-container">
            {displayWorkInfo ? 
            <div>
                <p>Company Name: {companyName}</p>
                <p>Location: {location}</p>
                <p>From: {timeFrom}</p>
                <p>To: {timeTo}</p>
                <p>Description: {jobDescription}</p>
            </div>
              :
            <form onSubmit={(e)=>e.preventDefault()} className="work-form">
               <label>
                   Company Name:<input value={companyName} onChange={handleCompanyName} />
               </label>
               <label>
                   Location:<input value={location} onChange={handleLocation} />
               </label>
               <label>
                   From:<input value={timeFrom} onChange={handleFrom} type="date" />
               </label>
               <label>
                   To:<input value={timeTo} onChange={handleTo} type="date" />
               </label>
               <label>
                   Description:<textarea value={jobDescription} onChange={handleJobDescription} rows={7} cols={50}></textarea>
               </label>


            </form>}

         
            <button onClick={flipWorkInfo}>{displayWorkInfo ? 'edit' : 'save'}</button>
            <button onClick={()=>props.handleDeleteWorkItem(props.id)}>delete</button>

        </div>
    )
}


export default Work;
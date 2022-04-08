import React from 'react';
import '../styles/work.css'

const Work =({ companyName, handleCompanyName,
               location, handleLocation,
               timeFrom, handleFrom, timeTo, handleTo,
               jobDescription, handleJobDescription,
             

})=> {
    return(
        <div className="work-container">
    
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


            </form>
            <button>Edit</button>
            <button>Add</button>
            <button>Save</button>

        </div>
    )
}


export default Work;
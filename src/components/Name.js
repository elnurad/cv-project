import React, { useState } from 'react';

import '../styles/name.css'


const Name =(props) => {
    const [firstName, setFirstName] = useState('First Name');
    const [lastName, setLastName] = useState('Last Name');
    const [currentRole, setCurrentRole] = useState('Current Role')
    const [address, setAddress] = useState('Addres Line 1');
    const [phoneNumber, setPhoneNumber] = useState('508-345-2233')
    const [email, setEmail] = useState('johnsmith@email.com')
    const [displayPersonalDetails, setPersonalDetails] = useState(false)

    const handleFirstNameOnChange =(e)=> {
        setFirstName(e.target.value)
      };
    
      const handleLastNameOnChange =(e)=> {
        setLastName(e.target.value)
      };
    
      const handleCurrentRole =(e)=> {
        setCurrentRole(e.target.value)
      }
    
      const handleAddress =(e)=> {
        setAddress(e.target.value)
      }
    
      const handlePhoneNumber =(e)=> {
        setPhoneNumber(e.target.value)
      }
    
      const handleEmail =(e)=> {
        setEmail(e.target.value)
      }
      const flipPersonalDetails =(e)=> {
        setPersonalDetails(!displayPersonalDetails)
      };
    
   return( 
    <div>
      {displayPersonalDetails ? 
      <div>
          Personal Details
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Current Role: {currentRole}</p>
          <p>Address: {address}</p>
          <p>Phone Number: {phoneNumber}</p>
          <p>Email: {email}</p>
      </div>
      :
      <div>
           <h4>Personal Details</h4>
           <form onSubmit={e=>e.preventDefault()} className="name">
           
             <div className="nameAndRole">
           <label>
               First Name:
               <input value={firstName} onChange={handleFirstNameOnChange}/>
           </label>
           <label>
               Last Name:
               <input value={lastName} onChange={handleLastNameOnChange}/>
           </label>
           <label>
               Current Role:
               <input value={currentRole} onChange={handleCurrentRole}/>
           </label>
           </div>
           <div className="address">
           <label>
               Address 1:
               <input value={address} onChange={handleAddress}/>
           </label>
           <label>
               Phone Number:
               <input value={phoneNumber} onChange={handlePhoneNumber}/>
           </label>
           <label>
           E-mail:
               <input value={email} onChange={handleEmail}/>
           </label>

           </div>
       </form>
      </div>}

        <button onClick={flipPersonalDetails}>{displayPersonalDetails ? `edit` : `save`}</button>
        </div>
     
    );
    

  };

export default Name;
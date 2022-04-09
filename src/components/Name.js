import React from 'react';
import '../styles/name.css'


const Name =({ firstName, lastName, 
  onChangeFirstName, onChangeLastName, 
  currentRole, handleCurrentRole,
  addressOne, handleAddressOne,
  addressTwo, handleAddressTwo,
  phoneNumber, handlePhoneNumber,
  email, handleEmail, flipPersonalDetails, displayPersonalDetails
}) => {
   return( 
    <div>
      {displayPersonalDetails ? 
      <div>
          Personal Details
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Current Role: {currentRole}</p>
          <p>Address: {addressOne}, {addressTwo}</p>
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
               <input value={firstName} onChange={onChangeFirstName}/>
           </label>
           <label>
               Last Name:
               <input value={lastName} onChange={onChangeLastName}/>
           </label>
           <label>
               Current Role:
               <input value={currentRole} onChange={handleCurrentRole}/>
           </label>
           </div>
           <div className="address">
           <label>
               Address 1:
               <input value={addressOne} onChange={handleAddressOne}/>
           </label>
           <label>
               Address 2:
               <input value={addressTwo} onChange={handleAddressTwo}/>
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
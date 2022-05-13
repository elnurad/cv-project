/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import '../styles/name.css';

function Name() {
  const [firstName, setFirstName] = useState('First Name');
  const [lastName, setLastName] = useState('Last Name');
  const [currentRole, setCurrentRole] = useState('Current Role');
  const [address, setAddress] = useState('Addres Line 1');
  const [phoneNumber, setPhoneNumber] = useState('508-345-2233');
  const [email, setEmail] = useState('johnsmith@email.com');
  const [displayPersonalDetails, setPersonalDetails] = useState(false);

  const handleFirstNameOnChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameOnChange = (e) => {
    setLastName(e.target.value);
  };

  const handleCurrentRole = (e) => {
    setCurrentRole(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const flipPersonalDetails = () => {
    setPersonalDetails(!displayPersonalDetails);
  };

  return (
    <div>
      {displayPersonalDetails
        ? (
          <div className="saved-personal-details">

            <div className="saved-personal-item-title">
              <p>First Name:</p>
              <p>Last Name:</p>
              <p>Current Role:</p>
              <p>Address:</p>
              <p>Phone Number:</p>
              <p>Email:</p>
            </div>
            <div className="saved-personal-item-info">
              <p>{firstName}</p>
              <p>{lastName}</p>
              <p>{currentRole}</p>
              <p>{address}</p>
              <p>{phoneNumber}</p>
              <p>{email}</p>
            </div>
          </div>
        )
        : (
          <div>

            <form onSubmit={(e) => e.preventDefault()} className="name">

              <div className="nameAndRole">
                <label>
                  First Name:
                  <div className="nameInput">
                    <input value={firstName} onChange={handleFirstNameOnChange} />
                  </div>
                </label>
                <label>

                  Last Name:
                  <div className="name-input">
                    <input value={lastName} onChange={handleLastNameOnChange} />
                  </div>
                </label>
                <label>
                  Current Role:
                  <div className="name-input">
                    <input value={currentRole} onChange={handleCurrentRole} />
                  </div>
                </label>
              </div>
              <div className="address">
                <label>
                  Address 1:
                  <div className="name-iInput">
                    <input value={address} onChange={handleAddress} />
                  </div>
                </label>
                <label>
                  Phone Number:
                  <div className="name-input">
                    <input value={phoneNumber} onChange={handlePhoneNumber} />
                  </div>
                </label>
                <label>
                  E-mail:
                  <div className="name-input">
                    <input value={email} onChange={handleEmail} />
                  </div>
                </label>

              </div>
            </form>
          </div>
        )}

      <button onClick={flipPersonalDetails}>{displayPersonalDetails ? 'edit' : 'save'}</button>
    </div>

  );
}

export default Name;

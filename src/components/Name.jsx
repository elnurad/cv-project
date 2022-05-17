/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import '../styles/name.css';

function Name() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [currentRole, setCurrentRole] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
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
  const handleSubmit = (e) => {
    e.preventDefault();
    flipPersonalDetails();
  };

  return (
    <div className="personal-details-section">
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
              <button onClick={flipPersonalDetails}>edit</button>
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

            <form onSubmit={handleSubmit} className="name">

              <div className="nameAndRole">
                <label>
                  First Name:
                  <div className="name-input">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={handleFirstNameOnChange}
                      required
                    />
                  </div>
                </label>
                <label>

                  Last Name:
                  <div className="name-input">
                    <input placeholder="Last Name" value={lastName} onChange={handleLastNameOnChange} required />
                  </div>
                </label>
                <label>
                  Current Role:
                  <div className="name-input">
                    <input placeholder="Current Role" value={currentRole} onChange={handleCurrentRole} required />
                  </div>
                </label>
              </div>
              <div className="address">
                <label>
                  Address 1:
                  <div className="name-iInput">
                    <input placeholder="Type address" value={address} onChange={handleAddress} required />
                  </div>
                </label>
                <label>
                  Phone Number:
                  <div className="name-input">
                    <input placeholder="Type phone number" value={phoneNumber} onChange={handlePhoneNumber} required />
                  </div>
                </label>
                <label>
                  E-mail:
                  <div className="name-input">
                    <input placeholder="Type email" value={email} onChange={handleEmail} required />
                  </div>
                </label>

              </div>
              <button type="submit">save</button>
              {/* <button
              onClick={flipPersonalDetails}>{displayPersonalDetails ? 'edit' : 'save'}</button> */}
            </form>
          </div>
        )}
    </div>

  );
}

export default Name;

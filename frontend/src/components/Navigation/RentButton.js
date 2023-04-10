import React, { useState } from 'react';
import { FormModal } from '../ListingForm';
import { useSelector } from 'react-redux';

function RentButton() {
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  let myButton; 

  if (sessionUser) {
    myButton = <button id="myRentButton" onClick={() => setShowModal(true)} className="navButtons">
                  Rent
               </button>
  } else {
    myButton = <button id="myRentButton" className="navButtons" onClick={() => document.getElementById('myButton').click()} >
                  Rent
              </button>
  }
  
  return (
    <>
      {myButton}
      {showModal && <FormModal onClose={() => setShowModal(false)}/>}
    </>
  );
}

export default RentButton;
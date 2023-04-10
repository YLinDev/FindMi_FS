import React, { useState } from 'react';
import { FormModal } from '../ListingForm';
import { useSelector } from 'react-redux';

function SellButton() {
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  let myButton; 

  if (sessionUser) {
    myButton = <button id="mySellButton" onClick={() => setShowModal(true)} className="navButtons">
                  Sell
               </button>
  } else {
    myButton = <button id="mySellButton" className="navButtons" onClick={() => document.getElementById('myButton').click()} >
                  Sell
              </button>
  }
  
  return (
    <>
      {myButton}
      {showModal && <FormModal onClose={() => setShowModal(false)}/>}
    </>
  );
}

export default SellButton;
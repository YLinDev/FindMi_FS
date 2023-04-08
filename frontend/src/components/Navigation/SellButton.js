import React, { useState } from 'react';
import { FormModal } from '../ListingForm';

function SellButton() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <button onClick={() => setShowModal(true)} className="navButtons">
        Sell
      </button>
      {showModal && <FormModal onClose={() => setShowModal(false)}/>}
    </>
  );
}

export default SellButton;
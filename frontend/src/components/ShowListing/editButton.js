import React, { useState } from 'react';
import { FormModal } from '../ListingForm';

function EditButton() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <button onClick={() => setShowModal(true)} className="editListing">
        Edit Listing
      </button>
      {showModal && <FormModal onClose={() => setShowModal(false)}/>}
    </>
  );
}

export default EditButton;
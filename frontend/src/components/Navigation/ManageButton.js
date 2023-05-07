import React, { useState } from 'react';
import { FormModal } from '../ListingForm';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ManageButton() {
    const history = useHistory(); 
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);

    const manageClick = (e) => {
        e.preventDefault(); 
        history.push(`/userListing/${sessionUser.id}`)
    }

    let myButton; 

    if (sessionUser) {
        myButton = <button className='navButtons' onClick={manageClick}>Manage Listings</button>
    } else {
        myButton = <button id="myRentButton" className="navButtons" onClick={() => document.getElementById('myButton').click()} >
                    Manage Listings
                </button>
    }
  
    return (
        <>
        {myButton}
        {showModal && <FormModal onClose={() => setShowModal(false)}/>}
        </>
    );
}

export default ManageButton;
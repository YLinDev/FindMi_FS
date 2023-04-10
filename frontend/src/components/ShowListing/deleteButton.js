import React, { useState } from 'react';
import { deleteListing } from '../../store/listings';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';


function DeleteButton() {
    const dispatch = useDispatch(); 
    const history = useHistory(); 
    const { listingId } = useParams(); 

    const handleClick = (e) => {
        e.preventDefault(); 
        dispatch(deleteListing(listingId))
        history.push("/");
    }
    
    return (
        <>
            <button 
                onClick={(e) => handleClick(e)}
                className='deleteListing'
            >Delete Button</button>
        </>
    );
}

export default DeleteButton;
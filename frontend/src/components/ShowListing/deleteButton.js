import React from 'react';
import { deleteListing } from '../../store/listings';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function DeleteButton() {
    const dispatch = useDispatch(); 
    const history = useHistory(); 
    const { listingId } = useParams(); 
    const sessionUser = useSelector(state => state.session.user)

    const handleClick = (e) => {
        e.preventDefault(); 
        dispatch(deleteListing(listingId))
        history.push(`/userListing/${sessionUser.id}`);
    }
    
    return (
        <>
            <button 
                onClick={(e) => handleClick(e)}
                className='deleteListing'
            >Delete Listing</button>
        </>
    );
}

export default DeleteButton;
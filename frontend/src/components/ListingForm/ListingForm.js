import React, { useState } from 'react';
import * as listingActions from '../../store/listings'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function ListingForm() {
    const { listingId } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const [address, setAddress] = useState("");
    const [airCond, setAirCond] = useState("");
    const [bathrooms, setBathrooms] = useState(0);
    const [bedrooms, setBedrooms] = useState(0);
    const [condo, setCondo] = useState(false);
    const [description, setDescription] = useState("");
    const [listingType, setListingType] = useState('sale');
    const [monthlyHoaFee, setMonthlyHoaFee] = useState(0);
    const [overview, setOverview] = useState("");
    const [ownerId, setOwnerId] = useState(0);
    const [parking, setParking] = useState('');
    const [price, setPrice] = useState(0);
    const [sqft, setSqft] = useState(0);
    const [yearBuilt, setYearBuilt] = useState('');

    
    return(
        <>
            <h1>Create A New Listing</h1>
            <form className="listingForm">
                <label>
                    Listing for:
                    <label>
                        Sale
                        <input type='radio' name="listingFor" value="sale"></input>
                    </label>
                    <label>
                        Rent
                        <input type='radio' name="listingFor" value="rent"></input>
                    </label>
                </label>
                <label>
                    Bedrooms 
                    <input type='number' min='0'></input>
                </label>
                <label>
                    Bathrooms
                    <input type='number' min='0'></input>
                </label>
                <label>
                    Address
                    <input type='text'></input>
                </label>
                <label>
                    Price
                    <input type='number' min='1'></input>
                </label>
                <label>
                    Year Built
                    <input type='text'></input>
                </label>
                <label>
                    Square Feet
                    <input type='number' min='0'></input>
                </label>
                <label>
                    Building Type
                    <label>
                        Condo
                        <input type='radio' name="condo" value='true'></input>
                    </label>
                    <label>
                        House
                        <input type='radio' name='condo' value='false'></input>
                    </label>
                </label>
                <label>
                    Type of Air Condition
                    <input type='text'></input>
                </label>
                <label>
                    Homeowners Association Fees if any
                    <input type='number' min='0'></input>
                </label>
                <label>
                    Parking
                    <input type='text'></input>
                </label>
                <label>
                    Pictures
                    <input type='file'></input>
                </label>
                <label>
                    Description
                    <input type='textarea'></input>
                </label>
                <label>
                    Overview
                    <input type='textarea'></input>
                </label>
            </form>
        </>
    )
}

export default ListingForm; 
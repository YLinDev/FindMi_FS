import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings, getListings } from "../../store/listings";
import ListingsList from "./ListingsList";
import './FirstCollection.css';

function FirstCollection() {
    const dispatch = useDispatch();
    const listings = useSelector(getListings)

    useEffect(() => {
        dispatch(fetchListings())
    }, [])


    return (
        <div className="firstCollection">
            <div className="header">
                <h2>Trending Homes</h2>
            </div>
            <ListingsList 
                listings={listings}
            />
        </div>
    )
}

export default FirstCollection; 
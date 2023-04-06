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
                <div className="arrowButtons">
                    <button onClick={() => document.getElementById('scrollCollection').scrollLeft -= 1080}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button onClick={() => document.getElementById('scrollCollection').scrollLeft += 1080}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
            <ListingsList 
                listings={listings}
            />
        </div>
    )
}

export default FirstCollection; 
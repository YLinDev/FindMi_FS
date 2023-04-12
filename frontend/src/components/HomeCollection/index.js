import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings, getListings } from "../../store/listings";
import HomeListingsList from "./HomeListingsList";
import './HomeCollection.css';

function HomeCollection({listings}) {
    // const dispatch = useDispatch();
    // const listings = useSelector(getListings)

    // useEffect(() => {
    //     dispatch(fetchListings())
    // }, [])


    return (
        <div className="homeCollection">
            <div className="HC_header">
                <h2>Trending Homes</h2>
                {/* <div className="HC_arrowButtons">
                    <button onClick={() => document.getElementById('scrollCollection').scrollLeft -= 1080}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button onClick={() => document.getElementById('scrollCollection').scrollLeft += 1080}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div> */}
            </div>
            <HomeListingsList 
                listings={listings}
            />
        </div>
    )
}

export default HomeCollection; 
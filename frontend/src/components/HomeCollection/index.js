import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings, getListings } from "../../store/listings";
import HomeListingsList from "./HomeListingsList";
import './HomeCollection.css';

function HomeCollection({listings}) {

    return (
        <div className="homeCollection">
            <div className="HC_header">
                <h2>Trending Homes</h2>
            </div>
            <HomeListingsList 
                listings={listings}
            />
        </div>
    )
}

export default HomeCollection; 
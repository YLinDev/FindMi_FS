import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings, getListings } from "../../store/listings";
import ListingsList from "./ListingsList";
import { getFavorites, fetchFavorites } from "../../store/favorites";
import './FirstCollection.css';

function FirstCollection() {
    const dispatch = useDispatch();
    const listings = useSelector(getListings)
    const sessionUser = useSelector(state => state.session.user)
    const favorites = useSelector(getFavorites)
 
    useEffect(() => {
        if (sessionUser){
            dispatch(fetchFavorites())
        }
    }, [dispatch, sessionUser])

    useEffect(() => {
        dispatch(fetchListings())
    }, [])

    return (
        <div className="firstCollection">
            <div className="header">
                <h2>Trending Homes</h2>
                <div className="arrowButtons">
                    <button className="arrowButton" onClick={() => document.getElementById('scrollCollection').scrollLeft -= 1080}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button className="arrowButton" onClick={() => document.getElementById('scrollCollection').scrollLeft += 1080}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
            <ListingsList 
                listings={listings}
                sessionUser={sessionUser}
                favorites={favorites}
            />
        </div>
    )
}

export default FirstCollection; 
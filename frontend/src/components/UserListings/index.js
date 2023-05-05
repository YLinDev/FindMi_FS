import React, { useEffect } from "react"
import { useParams } from "react-router-dom";
import { getListings, fetchListings } from "../../store/listings";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import UserListingsList from "./UserListingsList";
import './UserListings.css';
import { useState } from "react";


function UserListings() {
    const { userId } = useParams(); 
    const listings = useSelector(getListings);
    const dispatch = useDispatch();
    const [filter, setFilter] = useState("");
    let userList 
    let header
    if (filter === "rent") {
        header = "All your listings for Rent"
        userList = listings.filter((listing) => (
            listing.ownerId === parseInt(userId) && listing.listingType === "rent"
        ));
    } else if (filter === "sale") {
        header = "All your listings for Sale"
        userList = listings.filter((listing) => (
            listing.ownerId === parseInt(userId) && listing.listingType === "sale"
        ));
    } else {
        header = "Here are All of your Listings"
        userList = listings.filter((listing) => 
            listing.ownerId === parseInt(userId)
        )
    };

    useEffect(() => {
        dispatch(fetchListings())
    }, [dispatch])

    if (listings) {
        return (
            <div className="user-list">
                <h1 className="YC_header">{header}</h1>
                <select className="filter-dropdown" onChange={(e) => setFilter(e.target.value)}>
                    <option default>All</option>
                    <option value={"rent"}>Rent</option>
                    <option value={"sale"}>Sell</option>
                </select>
                <UserListingsList listings={userList}/>
            </div>
        )
    } else {
        return null;
    }

}

export default UserListings;
import React, { useEffect } from "react"
import { useParams } from "react-router-dom";
import { getListings, fetchListings } from "../../store/listings";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import UserListingsList from "./UserListingsList";
import './UserListings.css';


function UserListings() {
    const { userId } = useParams(); 
    const listings = useSelector(getListings);
    const dispatch = useDispatch();
    const userList = listings.filter((listing) => 
        listing.ownerId === parseInt(userId)
    )

    useEffect(() => {
        dispatch(fetchListings())
    }, [dispatch])

    if (userList) {
        return (
            <div>
                <h1 className="YC_header">Here are All of your Listings</h1>
                <UserListingsList listings={userList}/>
            </div>
        )
    } else {
        return null;
    }

}

export default UserListings;
import React, { useEffect } from "react"
import { useParams } from "react-router-dom";
import { getListings, fetchListings } from "../../store/listings";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import SavedHomeList from "./SavedHomeList";
import { getFavorites } from "../../store/favorites";

function SavedHomes() {
    const { userId } = useParams(); 
    const listings = useSelector(getListings);
    const dispatch = useDispatch();
    const favorites = useSelector(getFavorites)
    const sessionUser = useSelector(state => state.session.user)

    const userList = listings.filter((listing) => 
        listing.saverId.includes(parseInt(userId))
    )

    useEffect(() => {
        dispatch(fetchListings())
    }, [dispatch])

    if (listings && userList) {
        return (
            <div>
                <h1 className="YC_header">Saved Homes</h1>
                <SavedHomeList 
                    listings={userList}
                    favorites={favorites}
                    sessionUser={sessionUser}
                />
            </div>
        )
    } else {
        return null;
    }

}

export default SavedHomes;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings} from "../../store/listings";
import { getFavorites, fetchFavorites } from "../../store/favorites";
import HomeListingsList from "./HomeListingsList";
import './HomeCollection.css';
import HomeSearch from "./HomeSearch";

function HomeCollection({listings}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const favorites = useSelector(getFavorites)

    useEffect(() => {
        if (sessionUser) {
            dispatch(fetchFavorites())
        }
    }, [dispatch, sessionUser])

    // useEffect(() => {
    //     dispatch(fetchListings())
    // }, [dispatch])

    return (
        <div className="homeCollection">
            <div className="HC_header">
                <HomeSearch />
                <h2>Trending Homes: </h2>
            </div>
            <HomeListingsList 
                listings={listings}
                sessionUser={sessionUser}
                favorites={favorites}
            />
        </div>
    )
}

export default HomeCollection; 
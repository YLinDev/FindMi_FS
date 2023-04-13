import React from "react";
import HomeListingItem from "./HomeListingItem";

function HomeListingsList({listings, sessionUser, favorites}) {
    return (
        <ul id="HC_scrollCollection">
            {listings.map((listing) => (
                <HomeListingItem
                    listing={listing}
                    sessionUser={sessionUser}
                    favorites={favorites}
                    key={listing.id}
                />
            ))}
        </ul>
    )
}

export default HomeListingsList; 
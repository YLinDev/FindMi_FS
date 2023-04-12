import React from "react";
import ListingItem from "./ListingItem";

function ListingsList({listings, sessionUser, favorites}) {
    return (
        <ul id="scrollCollection">
            {listings.map((listing) => (
                <ListingItem
                    listing={listing}
                    sessionUser={sessionUser}
                    favorites={favorites}
                    key={listing.id}
                />
            ))}
        </ul>
    )
}

export default ListingsList; 
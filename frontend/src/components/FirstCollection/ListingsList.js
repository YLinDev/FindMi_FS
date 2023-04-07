import React from "react";
import ListingItem from "./ListingItem";

function ListingsList({listings}) {
    return (
        <ul id="scrollCollection">
            {listings.map((listing) => (
                <ListingItem
                    listing={listing}
                    key={listing.id}
                />
            ))}
        </ul>
    )
}

export default ListingsList; 
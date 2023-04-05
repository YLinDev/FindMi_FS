import React from "react";
import ListingItem from "./ListingItem";

function ListingsList({listings}) {
    console.log(listings)
    return (
        <ul className="scrollCollection">
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
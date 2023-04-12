import React from "react";
import HomeListingItem from "./HomeListingItem";

function HomeListingsList({listings}) {
    console.log(listings)
    return (
        <ul id="HC_scrollCollection">
            {listings.map((listing) => (
                <HomeListingItem
                    listing={listing}
                    key={listing.id}
                />
            ))}
        </ul>
    )
}

export default HomeListingsList; 
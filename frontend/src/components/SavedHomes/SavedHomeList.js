import React from "react";
import SavedHomeItem from "./SavedHomeItem";

function SavedHomeList({listings, favorites, sessionUser}) {
    return (
        <ul id="YC_scrollCollection">
            {listings.map((listing) => (
                <SavedHomeItem
                    listing={listing}
                    favorites={favorites}
                    sessionUser={sessionUser}
                    key={listing.id}
                />
            ))}
        </ul>
    )
}

export default SavedHomeList; 
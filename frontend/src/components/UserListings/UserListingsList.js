import React from "react";
import UserListingItem from "./UserListingItem";

function UserListingsList({listings}) {
    return (
        <ul id="YC_scrollCollection">
            {listings.map((listing) => (
                <UserListingItem
                    listing={listing}
                    key={listing.id}
                />
            ))}
        </ul>
    )
}

export default UserListingsList; 
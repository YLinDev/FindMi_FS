import React from "react";
import { useHistory } from "react-router-dom";

function UserListingItem({listing}) {
    const { id, price, condo, bedrooms, bathrooms, sqft, address, photosUrl, listingType } = listing
    const history = useHistory(); 

    let text;
    if (condo) {
        text = "Condo"
    } else {
        text = "House"
    }
    let pictures;
    if (photosUrl && Array.isArray(photosUrl)) {
        pictures = <img className="cardPic" src={photosUrl[0]} alt=""/>
    } 

    return (
            <li className="YC_cardDiv" 
                onClick={() => history.push(`/show/${id}`)}
            >
                    <div className="card"> 
                        <div className="cardTop">
                            {pictures}
                        </div>
                        <div className="cardBottom">
                            <div className="cardPrice">
                                ${price.toLocaleString('en-US')}
                            </div>
                            <div className="cardInfo">
                                {bedrooms} bds |&nbsp;
                                {bathrooms} ba |&nbsp;
                                {sqft.toLocaleString('en-US')} sqft |&nbsp;
                                {text} for {listingType}
                            </div>
                            <div className="cardAddress">
                                {address}
                            </div>
                        </div>
                    </div>
            </li>
    )
}

export default UserListingItem; 
import React from "react";
import { useHistory } from "react-router-dom";
import FavButton from "../FavButton";

function SavedHomeItem({listing, favorites, sessionUser}) {
    const { id, price, condo, bedrooms, bathrooms, sqft, address, photosUrl, listingType } = listing
    const history = useHistory(); 

    let text;
    if (condo) {
        text = "Condo"
    } else {
        text = "House"
    }
    // let pictures;
    // if (photosUrl && Array.isArray(photosUrl)) {
    //     pictures = <img className="cardPic" src={photosUrl[0]} alt=""/>
    // } 

    return (
            <li className="YC_cardDiv" 
                onClick={() => history.replace(`/show/${id}`)}
            >
                    <div className="card"> 
                        <div className="cardTop" style={{ 
                            backgroundImage: `url(${photosUrl[0]})` 
                            }}>
                            {/* {pictures} */}
                            <FavButton sessionUser={sessionUser} listing={listing} favorites={favorites}/>
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

export default SavedHomeItem; 
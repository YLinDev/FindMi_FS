import React from "react";
import { useHistory } from "react-router-dom";
import FavButton from "../FavButton";

function HomeListingItem({listing, sessionUser, favorites}) {
    const { id, price, condo, bedrooms, bathrooms, sqft, address, photosUrl } = listing
    const history = useHistory(); 

    let text;
    if (condo) {
        text = "Condo for sale"
    } else {
        text = "House for sale"
    }
    // let pictures;
    // if (photosUrl && Array.isArray(photosUrl)) {
    //     pictures = <img className="cardPic" src={photosUrl[0]} alt=""/>
    // } else {
    //     pictures = <img className="cardPic" src={require('./assets/stock-image.jpeg')} alt=""/>
    // }

    return (
            <li id={`HC_${id}`} className="HC_cardDiv" 
                onClick={() => history.push(`show/${id}`)}
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
                                {text}
                            </div>
                            <div className="cardAddress">
                                {address}
                            </div>
                        </div>
                    </div>
            </li>
    )
}

export default HomeListingItem; 
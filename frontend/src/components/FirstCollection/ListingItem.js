import React, { useState } from "react";
import ShowListing from "../ShowListing";
import { NavLink, useHistory } from "react-router-dom";
import { ShowLModal } from "../../context/ShowModal/ShowLModal";

function ListingItem({listing}) {
    const { id, price, condo, bedrooms, bathrooms, sqft, address, listing_type } = listing
    const [showModal, setShowModal] = useState(false);
    const history = useHistory(); 

    let text;
    if (condo) {
        text = "Condo for sale"
    } else {
        text = "House for sale"
    }

    return (
            <li className="cardDiv" 
                onClick={() => history.push(`show/${id}`)}
            >
                    <div className="card"> 
                        <div className="cardTop">
                            <img className="cardPic" src={require('././assets/stock-image.jpeg')} alt=""/>
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

export default ListingItem; 
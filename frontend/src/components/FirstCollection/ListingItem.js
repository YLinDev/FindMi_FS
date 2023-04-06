import React from "react";

function ListingItem({listing}) {
    const { id, price, condo, bedrooms, bathrooms, sqft, address, listing_type } = listing
    
    let text;
    if (condo) {
        text = "Condo for sale"
    } else {
        text = "House for sale"
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    return (
        <li className="cardDiv">
        <div className="card"> 
                <div className="cardTop">
                    <img className="cardPic" src={require('././assets/stock-image.jpeg')} alt=""/>
                </div>
                <div className="cardBottom">
                    <div className="cardPrice">
                        {formatter.format(price)}
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
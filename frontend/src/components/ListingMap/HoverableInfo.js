import React, { useState } from "react";

const InfoWindow = ({listing}) => {

    const infoWindowStyle = {
      position: 'relative',
      bottom: 150,
      left: '-45px',
      width: 220,
      backgroundColor: 'white',
      boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
      padding: 10,
      fontSize: 14,
      zIndex: 100,
    };
  
    return (
      <div className={`${listing.id}infoWindow`} style={infoWindowStyle}>
        <div style={{ fontSize: 16 }}>
          {listing.price}
        </div>
        <div style={{ fontSize: 14, color: 'grey' }}>
          {listing.bedrooms}
        </div>
        <div style={{ fontSize: 14, color: 'grey' }}>
          {listing.bathrooms}
        </div>
        <div style={{ fontSize: 14, color: 'grey' }}>
          {listing.sqft}
        </div>
        <div >
          <img src={listing.photosUrl[0]}/>
        </div>
      </div>
    );
  };

export default InfoWindow; 
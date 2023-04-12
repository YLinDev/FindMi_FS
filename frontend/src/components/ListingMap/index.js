import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListings, getListings } from '../../store/listings';
import GoogleMapReact from 'google-map-react';
import './ListingMap.css'


function ListingMap({listings}) {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    // const listings = useSelector(state => Object.values(state.listings))
    // const dispatch = useDispatch(); 
    // const listings = useSelector(getListings)

    // useEffect(() => {
    //     dispatch(fetchListings())
    // }, [])

    const getInfoWindowString = (listing) => 
    `<div>
      <div style="font-size: 16px;">
        ${listing.price}
      </div>
      <div style="font-size: 14px; color: grey;">
        ${listing.bedrooms}
      </div>
      <div style="font-size: 14px; color: grey;">
        ${listing.bathrooms}
      </div>
      <div style="font-size: 14px; color: grey;">
        ${listing.sqft}
      </div>
      <div style="font-size: 14px; color: grey;">
        <img src=${listing.photosUrl[0]}/>
      </div>
    </div>`;

    const handleApiLoaded = (map, maps, listings) => {
      const markers = [];
      const infowindows = [];
    
      listings.forEach((listing) => {
        markers.push(new maps.Marker({
          position: {
            lat: listing.lat,
            lng: listing.lng,
          },
          map,
        }));
    
        infowindows.push(new maps.InfoWindow({
          content: getInfoWindowString(listing),
        }));
      });
    
      markers.forEach((marker, i) => {
        marker.addListener('click', () => {
          infowindows[i].open(map, marker);
        });
      });
    };

    const defaultProps = {
        center: {
          lat: 40.727376578269435,
          lng: -73.99823209275158
        },
        zoom: 11
      };

    return(
        <div className="pins" style={{ height: '80vh', width: '40%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps, listings)}
            >
            </GoogleMapReact>
      </div>
    )
}

export default ListingMap; 

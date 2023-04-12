import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListings, getListings } from '../../store/listings';
import GoogleMapReact from 'google-map-react';
import InfoWindow from './HoverableInfo';
import './ListingMap.css'


function ListingMapp() {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const listings = useSelector(state => Object.values(state.listings))
    const [showInfo, setShowInfo] = useState(false); 

    // const dispatch = useDispatch(); 
    // const listings = useSelector(getListings)

    // useEffect(() => {
    //     dispatch(fetchListings())
    // }, [])

    const Marker = ({ listing }) => {
        let showPrice; 
        if (listing.price > 1000000) {
            showPrice = `${(listing.price/1000000).toFixed(2)}M`
        } else {
            showPrice = `${(listing.price/1000).toFixed(0)}K`
        }

        // const showInfo = (e) => {
        //     e.preventDefault(); 
        //     <InfoWindow listing={listing} />
        // }

        const markerStyle = {
            border: '1px solid white',
            borderRadius: '5px',
            height: 13,
            width: 40,
            backgroundColor: 'red',
            color: 'white',
            cursor: 'pointer',
            zIndex: 10,
            textAlign: 'center',
        };
    
        return (
            <>
                <div style={markerStyle} onClick={() => document.getElementById(`HC_${listing.id}`).click()}>{showPrice}</div>
            </>
        );
    };
      

    const defaultProps = {
        center: {
          lat: 40.727376578269435,
          lng: -73.99823209275158
        },
        zoom: 13
    };

    return(
        <div className="pins" style={{ height: '80vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                {listings.map((listing) => (
                    <Marker
                        key={listing.id}
                        lat={listing.lat}
                        lng={listing.lng}
                        listing={listing}
                    />
                ))}
            </GoogleMapReact>
      </div>
    )
}

export default ListingMapp;

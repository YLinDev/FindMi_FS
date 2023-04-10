import React, {useState} from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

function ListingMap() {

    const defaultProps = {
        center: {
          lat: 40.727376578269435,
          lng: -73.99823209275158
        },
        zoom: 11
      };

    return(
        <div style={{ height: '80vh', width: '40%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            >
            <AnyReactComponent
                lat={40.727376578269435}
                lng={-73.99823209275158}
                text="My Marker"
            />
            </GoogleMapReact>
      </div>
    )
}

export default ListingMap; 

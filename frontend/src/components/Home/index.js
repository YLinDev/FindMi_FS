import React, {useState, useEffect} from 'react';
import ListingMap from '../ListingMap';
import ListingMapp from '../ListingMap/index2';
import HomeCollection from '../HomeCollection';
import FirstCollection from '../FirstCollection';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListings, getListings } from '../../store/listings';
import './Home.css'
import HomeSearch from '../HomeCollection/HomeSearch';

function Home() {
    const dispatch = useDispatch();
    const listings = useSelector(getListings)
    // console.log(listings[0])

    // useEffect(() => {
    //     if (!listings) {
    //         dispatch(fetchListings())
    //     };
    // }, [])

    if (listings) {
        return(
            <>
                <div className='homePage'>
                    <ListingMapp listings={listings} lat={listings[0] ? listings[0].lat : null} lng={listings[0] ? listings[0].lng : null}/>
                    <HomeCollection listings={listings}/>
                </div>
            </>
        )
    } else {
        return null; 
    }
}

export default Home; 

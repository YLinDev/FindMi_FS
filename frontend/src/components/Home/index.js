import React, {useState, useEffect} from 'react';
import ListingMap from '../ListingMap';
import ListingMapp from '../ListingMap/index2';
import HomeCollection from '../HomeCollection';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListings, getListings } from '../../store/listings';
import './Home.css'

function Home() {
    const dispatch = useDispatch();
    const listings = useSelector(getListings)

    useEffect(() => {
        dispatch(fetchListings())
    }, [])

    return(
        <div className='homePage'>
            <ListingMapp listings={listings}/>
            <HomeCollection listings={listings}/>
        </div>
    )
}

export default Home; 

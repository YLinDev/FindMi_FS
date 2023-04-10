import React, {useState} from 'react';
import ListingMap from '../ListingMap';
import HomeCollection from '../HomeCollection';
import './Home.css'

function Home() {


    return(
        <div className='homePage'>
            <ListingMap />
            <HomeCollection />
        </div>
    )
}

export default Home; 

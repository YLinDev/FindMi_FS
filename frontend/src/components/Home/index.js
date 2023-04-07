import ShowListing from '../ShowListing';
import React, {useState} from 'react';

function Home() {
    const [showModal, setShowModal] = useState(true);
    
    return(
        <>
            <img className="cardPic" src={require('../FirstCollection/assets/stock-image.jpeg')} alt=""/>
        </>
    )
}

export default Home; 
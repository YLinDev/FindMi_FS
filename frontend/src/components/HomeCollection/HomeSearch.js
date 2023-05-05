import { fetchListings, searchListing } from '../../store/listings';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function HomeSearch() {
    const dispatch = useDispatch(); 
    const history = useHistory(); 
    const [searchInput, setSearchInput] = useState(""); 

    const handleClick = (e) => {
        e.preventDefault(); 
        if (searchInput === "") {
            dispatch(fetchListings())
        } else {
            dispatch(searchListing(searchInput))
        };
    };

    return (
        <>
            <form className="home-search" onSubmit={handleClick}>
                <input
                    type='text'
                    className='home-search-input'
                    placeholder="Enter an address, neighborhood, city, or ZIP code"
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button className="home-search-button" onClick={handleClick}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </>
    )
}

export default HomeSearch; 
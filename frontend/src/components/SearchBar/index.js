import './SearchBar.css';
import { fetchListings, searchListing } from '../../store/listings';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function SearchBar() {
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
        <div className="searchDiv">
            <h1>Find it. Tour it. Own it.</h1>
                <form className='searchBar' onSubmit={handleClick}>
                    <input
                        type='text'
                        className="searchInput"
                        placeholder="Enter an address, neighborhood, city, or ZIP code"
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button className='searchButton' onClick={handleClick}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
        </div>
    )
}

export default SearchBar; 
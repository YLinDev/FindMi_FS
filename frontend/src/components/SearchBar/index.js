import './SearchBar.css';

function SearchBar() {

    return (
        <div className="searchDiv">
            <h1>Find it. Tour it. Own it.</h1>
                <div className='searchBar'>
                    <input
                        type='text'
                        className="searchInput"
                        placeholder="Enter an address, neighborhood, city, or ZIP code"
                    />
                    <button className='searchButton'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
        </div>
    )
}

export default SearchBar; 
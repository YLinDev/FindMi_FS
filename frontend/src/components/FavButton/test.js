import { useSelector } from "react-redux";
import { fetchFavorites, getFavorites, setupFav, deleteFav } from "../../store/favorites";
import { fetchListing } from "../../store/listings";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./FavButton.css"


function FavButton({listing, sessionUser, favorites}) {
    // const favorites = useSelector(getFavorites)
    const dispatch = useDispatch();
    const listingId = String(listing.id)

    let favoriteId

    if (!sessionUser) {
        const handleClick =(e) => {
            e.preventDefault();
            e.stopPropagation();
            document.getElementById('myButton').click()
        }
        return (
            <button className="favButton" onClick={handleClick}>
                <i className="fa-regular fa-heart"></i>
            </button>
        )
    } else if (sessionUser && Object.keys(favorites).includes(String(listing.id))) {
        favoriteId = favorites[String(listingId)].id

        const handleDeleteFav = (e) => {
            e.preventDefault(); 
            e.stopPropagation();
        }
        
        return (
            <button className="favButton" type='submit' onClick={handleDeleteFav}>
                <i className="fa-solid fa-heart"></i>
            </button>
        )
    } else {
        const handleCreateFav = (e) => {
            e.preventDefault(); 
            e.stopPropagation();
            const formData = new FormData();
            formData.append("favorite[saverId]", sessionUser.id)
            formData.append("favorite[listingId]", listing.id)
            return dispatch(setupFav(formData))
        }

        return (
            <button className="favButton" type='submit' onClick={handleCreateFav}>
                <i className="fa-regular fa-heart"></i>
            </button>
        )
    }
    
    // let favoriteId;
    // if (Object.keys(favorites).includes(String(listing.id))) {
    //     favoriteId = favorites[String(listingId)].id
    // } 

    // let showFavType;
    // if (!sessionUser || !Object.keys(favorites).includes(String(listing.id))){
    //     showFavType = <button className="favButton" type='submit' onClick={handleCreateFav}><i className="fa-regular fa-heart"></i></button>
    // } else {
    //     showFavType = <button className="favButton" type='submit' onClick={handleDeleteFav}><i className="fa-solid fa-heart"></i></button>
    // }
    

    // return (
    //     <>
    //         {showFavType}
    //     </>
    // )
}

export default FavButton; 
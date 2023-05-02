import { fetchFavorites, fetchFavorite ,setupFav, deleteFav } from "../../store/favorites";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./FavButton.css"
import { fetchListing } from "../../store/listings";


function FavButton({listing, sessionUser, favorites}) {
    // const favorites = useSelector(getFavorites)
    const dispatch = useDispatch();
    
    const listingId = String(listing.id)
    let userId;
    if (sessionUser) {
        userId = sessionUser.id
    };

    // const obj = listing.saverId
    
    // console.log(obj)
    let favoriteId;
    if (Object.keys(favorites).includes(String(listing.id))) {
        favoriteId = favorites[String(listingId)].id
    } 

    useEffect(() => {
        if (sessionUser){
            dispatch(fetchFavorites())
            // dispatch(fetchListing(listingId))
        }
    }, [dispatch, favoriteId])

    // useEffect(() => {
    //     dispatch(fetchListing(listing.id))
    // }, [listing])

    const handleCreateFav = (e) => {
        e.preventDefault(); 
        e.stopPropagation();
        const formData = new FormData();
        formData.append("favorite[saverId]", userId)
        formData.append("favorite[listingId]", listing.id)
        return dispatch(setupFav(formData, listing))
    }

    const handleDeleteFav = (e) => {
        e.preventDefault(); 
        e.stopPropagation();
        return dispatch(deleteFav(favoriteId, listing))
    }

    let showFavType;
    if (!sessionUser || !Object.keys(favorites).includes(String(listing.id))){
        showFavType = <button className="favButton" type='submit' onClick={handleCreateFav}><i className="fa-regular fa-heart"></i></button>
    } else {
        showFavType = <button className="favButton" type='submit' onClick={handleDeleteFav}><i className="fa-solid fa-heart"></i></button>
    }

    // let showFavType;
    // if (!sessionUser || !listing.saverId.includes(userId)){
    //     showFavType = <button className="favButton" type='submit' onClick={handleCreateFav}><i className="fa-regular fa-heart"></i></button>
    // } else {
    //     showFavType = <button className="favButton" type='submit' onClick={handleDeleteFav}><i className="fa-solid fa-heart"></i></button>
    // }
    

    return (
        <>
            {showFavType}
        </>
    )
}

export default FavButton; 
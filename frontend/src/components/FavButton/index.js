import { useSelector } from "react-redux";
import { fetchFavorites, getFavorites, setupFav, deleteFav } from "../../store/favorites";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


function FavButton({listing, sessionUser, favorites}) {
    const listingId = String(listing.id)
    const userId = sessionUser.id
    const dispatch = useDispatch();
    // const favorites = useSelector(getFavorites)

    // useEffect(() => {
    //     dispatch(fetchFavorites())
    // }, [dispatch, sessionUser])
    let favoriteId;
    if (Object.keys(favorites).includes(String(listing.id))) {
        favoriteId = favorites[String(listingId)].id
    } 

    const handleCreateFav = (e) => {
        e.preventDefault(); 
        const formData = new FormData();
        formData.append("favorite[saverId]", userId)
        formData.append("favorite[listingId]", listing.id)
        return dispatch(setupFav(formData))
    }

    const handleDeleteFav = (e) => {
        e.preventDefault(); 
        return dispatch(deleteFav(favoriteId))
    }

    let showFavType;
    if (!sessionUser || !Object.keys(favorites).includes(String(listing.id))){
        showFavType = <button className="favButton" type='submit' onClick={handleCreateFav}><i className="fa-regular fa-heart"></i></button>
    } else {
        showFavType = <button className="favButton" type='submit' onClick={handleDeleteFav}><i className="fa-solid fa-heart"></i></button>
    }
    

    return (
        <>
            {showFavType}
        </>
    )
}

export default FavButton; 
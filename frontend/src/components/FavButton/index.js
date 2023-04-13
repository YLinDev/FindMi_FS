import { fetchFavorites, setupFav, deleteFav } from "../../store/favorites";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./FavButton.css"


function FavButton({listing, sessionUser, favorites}) {
    // const favorites = useSelector(getFavorites)
    const dispatch = useDispatch();
    
    const listingId = String(listing.id)
    let userId;
    if (sessionUser) {
        userId = sessionUser.id
    };
    
    let favoriteId;
    if (Object.keys(favorites).includes(String(listing.id))) {
        favoriteId = favorites[String(listingId)].id
    } 

    useEffect(() => {
        if (sessionUser){
            dispatch(fetchFavorites())
        }
    }, [dispatch, favoriteId])

    const handleCreateFav = (e) => {
        e.preventDefault(); 
        e.stopPropagation();
        const formData = new FormData();
        formData.append("favorite[saverId]", userId)
        formData.append("favorite[listingId]", listing.id)
        return dispatch(setupFav(formData))
    }

    const handleDeleteFav = (e) => {
        e.preventDefault(); 
        e.stopPropagation();
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
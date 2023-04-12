import { useSelector } from "react-redux";
import { fetchFavorites, getFavorites } from "../../store/favorites";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function FavButton({listing, sessionUser, favorites}) {
    // const dispatch = useDispatch();
    // const favorites = useSelector(getFavorites)

    // useEffect(() => {
    //     dispatch(fetchFavorites())
    // }, [dispatch, sessionUser])

    console.log(favorites)
    console.log(listing.id)

    let showFavType;
    if (!sessionUser || !Object.keys(favorites).includes(String(listing.id))){
        showFavType = <i className="fa-regular fa-heart"></i>
    } else {
        showFavType = <i className="fa-solid fa-heart"></i>
    }
    

    return (
        <button >
            {showFavType}
        </button>
    )
}

export default FavButton; 
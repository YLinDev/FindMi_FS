import csrfFetch from "./csrf";

export const RECEIVE_FAVORITES = 'favorites/RECEIVE_FAVORITES';
export const RECEIVE_FAVORITE = 'favorites/RECEIVE_FAVORITE';
export const REMOVE_FAVORITE = 'favorites/REMOVE_FAVORITE';

const receiveFavorites = (favorites) => ({
    type: RECEIVE_FAVORITES,
    favorites
});

const receiveFavorite = (favorite) => ({
    type: RECEIVE_FAVORITE,
    favorite
})

const removeFavorite = (favoriteId) => ({
    type: REMOVE_FAVORITE,
    favoriteId
});

export const getFavorite = (favoriteId) => state => {
    // console.log(state.listings)
    return state?.favorites ? state.favorites[favoriteId] : null; 
};

export const getFavorites = state => {
    return state?.favorites ? state.favorites : [];
};

export const fetchFavorites = () => async (dispatch) => {
    const res = await csrfFetch('/api/favorites')
    if (res.ok) {
        const data = await res.json();
        dispatch(receiveFavorites(data))
    };
};

export const fetchFavorite = (favoriteId) => async (dispatch) => {
    const res = await csrfFetch(`/api/favorites/${favoriteId}`)
    if  (res.ok) {
        const data = await res.json();
        dispatch(receiveFavorite(data))
    };
};

export const setupFav = (formData) => async (dispatch) => {
    const res = await csrfFetch('/api/favorites', {
        method: 'POST',
        body: formData
    })
    // if (res.ok) {
    //     const data = await res.json();
    //     dispatch(receiveFavorite(data.favorite))
    // }
}

export const deleteFav = (favoriteId) => async (dispatch) => {
    const res = await csrfFetch(`/api/favorites/${favoriteId}`, {
        method: 'DELETE'
    })
    dispatch(removeFavorite(favoriteId))
}

function favoritesReducer(state = {}, action) {
    switch(action.type) {
        case RECEIVE_FAVORITES:
            return { ...action.favorites }
        case RECEIVE_FAVORITE:
            return { ...state, [action.favorite.id]: action.favorite}
        case REMOVE_FAVORITE:
            const newFavorite = { ...state }
            delete newFavorite[action.favoriteId]
            return newFavorite
        default:
            return state 
    };
};

export default favoritesReducer; 

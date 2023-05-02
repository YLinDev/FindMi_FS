import csrfFetch from "./csrf";

export const RECEIVE_LISTINGS = 'listings/RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'listings/RECEIVE_LISTING';
export const REMOVE_LISTING = 'listings/REMOVE_LISTING'

const receiveListings = (listings) => ({
    type: RECEIVE_LISTINGS,
    listings
});

const receiveListing = (listing) => ({
    type: RECEIVE_LISTING,
    listing
});

const removeListing = (listingId) => ({
    type: REMOVE_LISTING,
    listingId
});

export const getListing = (listingId) => state => {
    // console.log(state.listings)
    return state?.listings ? state.listings[listingId] : null; 
};

export const getListings = state => {
    return state?.listings ? Object.values(state.listings) : [];
};

export const fetchListings = () => async (dispatch) => {
    const res = await csrfFetch('/api/listings')
    if (res.ok) {
        const data = await res.json();
        dispatch(receiveListings(data.listings))
    };
};

export const fetchListing = (listingId) => async (dispatch) => {
    const res = await csrfFetch(`/api/listings/${listingId}`)
    if (res.ok) {
        const data = await res.json(); 
        dispatch(receiveListing(data.listing))
    };
};

export const createListing = (formData) => async (dispatch) => {
    const res = await csrfFetch('/api/listings', {
        method: 'POST',
        body: formData
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(receiveListing(data.listing))
        return data.listing.id;
    };
};

export const updateListing = (formData, listingId) => async (dispatch) => {
    const res = await csrfFetch(`/api/listings/${listingId}`, {
        method: 'PATCH',
        body: formData
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(receiveListing(data.listing))
        return data.listing.id;
    };
};

export const deleteListing = (listingId) => async (dispatch) => {
    const res = await csrfFetch(`/api/listings/${listingId}`, {
        method: 'DELETE'
    })
    dispatch(removeListing(listingId))
}

// export const setupFav = (formData, listing) => async (dispatch) => {
//     const res = await csrfFetch('/api/favorites', {
//         method: 'POST',
//         body: formData
//     })
//     if (res.ok) {
//         const data = await res.json();
//         dispatch(receiveListing(listing))
//     }
// }

// export const deleteFav = (favoriteId, listing) => async (dispatch) => {
//     const res = await csrfFetch(`/api/favorites/${favoriteId}`, {
//         method: 'DELETE'
//     })
//     dispatch(receiveListing(listing))
// }

function listingsReducer(state = {}, action) {
    switch(action.type) {
        case RECEIVE_LISTINGS:
            return { ...action.listings }
        case RECEIVE_LISTING:
            return { ...state, [action.listing.id]: action.listing}
        case REMOVE_LISTING:
            const newListing = { ...state }
            delete newListing[action.listingId]
            return newListing
        default:
            return state
    };
};

export default listingsReducer; 
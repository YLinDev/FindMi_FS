import csrfFetch, { storeCSRFToken } from './csrf';

//Action Types
export const LOGIN_USER = 'users/LOGIN_USER';
export const LOGOFF_USER = 'users/LOGOFF_USER';

//Action Creators
const loginUserAction = user => ({
    type: LOGIN_USER,
    user
});

const logoutUserAction = () => ({
    type: LOGOFF_USER
});

//Thunk Action Creators
export const loginUser = ({email, password}) => async (dispatch) => {
    const res = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        })
    });
    const data = await res.json();
    // sessionStorage.setItem('currentUser', JSON.stringify(data.user));
    storeCurrentUser(data.user)
    dispatch(loginUserAction(data.user))
    return res;
}

export const logoutUser = (userId) => async (dispatch) => {
    const res = await csrfFetch('/api/session', {
        method: 'DELETE',
    })
    storeCurrentUser(null);
    return dispatch(logoutUserAction());
};

//helper function to set user to sessionStorage
const storeCurrentUser = user => {
    if (user) sessionStorage.setItem('currentUser', JSON.stringify(user));
    else sessionStorage.setItem('currentUser', user);
}

export const restoreSession = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    storeCSRFToken(response);
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(loginUserAction(data.user));
    return response; 
};

export const signUp = ({email, password}) => async (dispatch) => {
    const res = await csrfFetch('/api/users', {
        method: "POST",
        body: JSON.stringify({
            email,
            password
        })
    });
    const data = await res.json();
    storeCurrentUser(data.user);
    dispatch(loginUserAction(data.user))
    // console.log(res)
    return res;
}

const initialState = { user: JSON.parse(sessionStorage.getItem("currentUser")) };

const sessionReducer = (state = initialState, action) => {
    const nextState = { ...state }
    switch(action.type) {
        case LOGIN_USER:
            nextState.user = action.user;
            return nextState;
        case LOGOFF_USER:
            nextState.user = null;
            return nextState;
        default:
            return state; 
    }
}

export default sessionReducer; 
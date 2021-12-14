import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/index';

export const initialState = {
    credentials: {
        username: '',
        password: ''
    },
    isLoggedIn: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoggedIn: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                credentials: action.payload
            }
        case LOGIN_ERROR:
            return {
                ...state,
                isLoggedIn: false,
                error: action.payload
            }
    }
}

export default reducer;
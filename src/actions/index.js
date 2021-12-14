import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const loginStart = () => {
    return ({ type: LOGIN_START });
}

export const loginSuccess = (credentials) => {
    return ({ type: LOGIN_SUCCESS, payload: credentials });
}

export const loginError = (err) => {
    return ({ type: LOGIN_ERROR, payload: err });
}
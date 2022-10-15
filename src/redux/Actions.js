import axios from "axios";
import {
    GET_USER_DETAIL, REGISTER_USER, BASE_URL_USERS, BASE_URL_CART, BASE_URL_PRODUCTS, GET_USER_ERROR
} from "./Constants";


export function getUserDetail() {
    return async (dispatch) => {
        try {
            let response = await axios.get(BASE_URL_USERS)
            response = await response.data
            dispatch({ type: GET_USER_DETAIL, payload: response })
            dispatch()
        } catch (err) {
            dispatch({ type: GET_USER_ERROR, payload: err })
        }
    }
}


export function registerUser(email, password) {
    return async (dispatch) => {
        try {
            let response = await axios.post(BASE_URL_USERS, { "id": email, "password": password, "cart": [] })
            response = await response.data
        } catch (err) {
            // dispatch({ type: 'REGISTER_USER_FAIL' })
            alert("user id / email already exist")
        }
    }
}
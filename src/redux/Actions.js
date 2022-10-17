import axios from "axios";
import {
    GET_USER_DETAIL, REGISTER_USER, BASE_URL_USERS, BASE_URL_PRODUCTS, GET_USER_ERROR, GET_PRODUCTS, BASE_URL_CART, ADD_TO_CARD, GET_CART_DETAIL
} from "./Constants";


export function getUserDetail(id, code) {
    return async (dispatch) => {
        try {
            let response = await axios.get(`${BASE_URL_USERS}/${id}`)
            response = await response.data
            if (response.password === code) {
                dispatch({ type: GET_USER_DETAIL, payload: response })
            } else {
                alert("Wrong Password")
            }
        } catch (err) {
            alert("User id not registered.")
        }
    }
}

export function getCartDetail(userId) {
    console.log(userId);
    return async (dispatch) => {
        try {
            let response = await axios.get(`${BASE_URL_USERS}/${userId}/cart`)
            response = await response.data
            dispatch({ type: GET_CART_DETAIL, payload: response })
        } catch (err) {
            alert("User id not registered.")
        }
    }
}

export function registerUser(email, password) {
    return async () => {
        try {
            await axios.post(BASE_URL_USERS, { "id": email, "password": password })
            alert("Registration successfull.")
        } catch (err) {
            // dispatch({ type: 'REGISTER_USER_FAIL' })
            alert("user id / email already exist")
        }
    }
}

export function getProducts() {
    return async (dispatch) => {
        try {
            let response = await axios.get(BASE_URL_PRODUCTS);
            response = await response.data;
            dispatch({ type: GET_PRODUCTS, payload: response })
        } catch (err) {
            console.log("ERROR in GET PRODUCTS : ", err.message)
        }


    }
}

export function addToCart(userId, product) {
    let newProduct = { "userId": userId, ...product }
    return async (dispatch) => {
        let finalQuery = `${BASE_URL_USERS}/${userId}/cart`
        let response = await axios.post(finalQuery, newProduct)
        response = await response.data
        dispatch({ type: ADD_TO_CARD, payload: newProduct })
    }
}
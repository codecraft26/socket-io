/**
 * Logs in a user with the given email and password.
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 * @returns {function} - A function that dispatches an action to log in the user.
 */
import {
  USER_REGISTER_REQUEST,
  USER_DETAILS_FAIL,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  CLEAR_ERRORS
} from "../constants/userConstant";
import axios from 'axios'



export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })


    const config = { headers: { 'Content-Type': 'application/json' } }

    const { data } = await axios.post('http://localhost:5000/api/v1/login', { email, password }, config)

    if(data.user){

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data.user })
    }
  }
  catch (error) {

    dispatch({ type: USER_LOGIN_FAIL, payload: error.response.data.message})

  }



}


export const register = (username, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST })

     const config = { headers: { 'Content-Type': 'application/json' } }
    const { data } = await axios.post('http://localhost:5000/api/v1/signup', { username, email, password }, config)
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data.user })
  }

  catch(error){
    dispatch({ type: USER_REGISTER_FAIL,payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
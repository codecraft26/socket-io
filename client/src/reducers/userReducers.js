import {
  USER_REGISTER_REQUEST,
  USER_DETAILS_FAIL,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_REGISTER_SUCCESS,
  CLEAR_ERRORS
} from "../constants/userConstant";


export const userReducer=(state = { user: {} }, action)=>{
    switch(action.type){
        case USER_REGISTER_REQUEST:
        case USER_LOGIN_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            }
        case USER_LOGIN_SUCCESS:
        case USER_REGISTER_SUCCESS:
            return{
                ...state,
                loading:false,
                isAuthenticated:true,
                user:action.payload
            }
        case CLEAR_ERRORS:
                return {
                  ...state,
                  error: null,
                };


        default :
            return state;



            
        
        
    }

};
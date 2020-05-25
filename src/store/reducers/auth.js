import {SIGN_IN} from '../actions/actionTypes'
import {SIGN_UP} from '../actions/actionTypes'
import {AUTO_LOGIN} from '../actions/actionTypes'
import {LOG_OUT} from '../actions/actionTypes'

const initialState = {
  isLogin: false,
  authType: null,
  token: null
}

export default function authReducer(state = initialState, action){
  switch (action.type) {
    case AUTO_LOGIN:
      return {
        ...state,
        isLogin: action.isLogin
      }
    case SIGN_IN:
    console.log(action.token)
      return {
        ...state,
        isLogin: action.isLogin,
        token: action.token
      }
    case SIGN_UP:
      return {
        ...state,
        isLogin: action.isLogin,
        token: action.token
      }
    case LOG_OUT:
      return {
        ...state,
        isLogin: action.isLogin,
        token: action.token
      }
    default:
      return state
  }
}

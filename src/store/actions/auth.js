import api from '../../net/api'
import {SIGN_IN} from '../actions/actionTypes'
import {SIGN_UP} from '../actions/actionTypes'
import {AUTO_LOGIN} from '../actions/actionTypes'
import {LOG_OUT} from '../actions/actionTypes'

export function autoLogin(){
  let isLogin = Boolean(localStorage.getItem('isLogin'));
  return {
    type: AUTO_LOGIN,
    isLogin
  }
}

export const signIn = (nick, pass) => async dispatch => {
  let user = {
    username: nick,
    password: pass
  }
  api({
    url:'signin',
    method:'POST',
    data: JSON.stringify(user)
  }).then(response => {
    let data = response.data.jwt;
    console.log('ooooooooooooooooooooooooooooooooooooooooooooooooooooooooo')
    console.log(data);
    localStorage.setItem('jwt', data);
    localStorage.setItem('isLogin', '1');
    return dispatch ({
      type: SIGN_IN,
      isLogin: true,
      token: data
    });
  });
}

export const signUp = (nick, pass) => async dispatch => {
  let user = {
    username: nick,
    password: pass
  }
  api({
    url:'signup',
    method:'POST',
    data: JSON.stringify(user)
  }).then(response => {
    let data = response.data.jwt;
    localStorage.setItem('jwt', data);
    localStorage.setItem('isLogin', '1');
    return dispatch ({
        type: SIGN_UP,
        isLogin: true,
        token: data
    });
  });
}

export function logOut(){
  localStorage.clear('isLogin');
  localStorage.clear('jwt');
  return {
    type: LOG_OUT,
    isLogin: false,
    token: null
  }
}

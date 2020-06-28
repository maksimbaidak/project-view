import api from '../../net/api'
import {FETCH_NOTE_LIST} from './actionTypes'
import {SAVE_NOTE} from '../actions/actionTypes';

export const fetchNotes = () => async dispatch => {
  let token = 'Bearer ' + localStorage.getItem('jwt');
  console.log(FETCH_NOTE_LIST + ' ' + token);
  api({
    url:'home',
    method:'GET',
    headers: {
      'Authorization': token
    }
  }).then(response => {
    let data = response.data;
    return dispatch ({
      type: FETCH_NOTE_LIST,
      notes: data
    });
  });
}

export const saveNote = (note) => dispatch => {
  console.log(SAVE_NOTE + ' ' + note.contents);
  return dispatch ({
    type: SAVE_NOTE,
    isOpen: false,
    note: note
  });
}

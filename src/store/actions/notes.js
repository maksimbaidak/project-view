import api from '../../net/api'
import {FETCH_NOTE_LIST} from './actionTypes'

export const fetchNotes = () => async dispatch => {
  let token = 'Bearer ' + localStorage.getItem('jwt');
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

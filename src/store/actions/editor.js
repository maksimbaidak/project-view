import {OPEN_EDITOR} from '../actions/actionTypes';
import {CLOSE_EDITOR} from '../actions/actionTypes';
import {OPEN_NOTE} from '../actions/actionTypes';
import {SAVE_NOTE} from '../actions/actionTypes';


export function openEditor(){
  return {
    type: OPEN_EDITOR,
    isOpen: true
  }
}

export function closeEditor(){
  return {
    type: CLOSE_EDITOR,
    isOpen: false
  }
}

export const openNote = (note) => dispatch => {
  console.log(OPEN_NOTE + ' ' + note.contents);
  return dispatch ({
    type: OPEN_NOTE,
    isOpen: true,
    note: note
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

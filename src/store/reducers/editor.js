import {OPEN_EDITOR} from '../actions/actionTypes';
import {CLOSE_EDITOR} from '../actions/actionTypes';
import {OPEN_NOTE} from '../actions/actionTypes';
import {SAVE_NOTE} from '../actions/actionTypes';

const initialState = {
  isOpen: false,
  note: [{
      note_id: '0',
      contents: ''
  }]
}

export default function editorReducer(state = initialState, action){
  switch (action.type) {
    case OPEN_EDITOR:
      return {
        ...state,
        isOpen: action.isOpen
      }
    case CLOSE_EDITOR:
      return {
        ...state,
        isOpen: action.isOpen
      }
    case OPEN_NOTE:
      return {
        ...state,
        isOpen: action.isOpen,
        note: action.note
      }
    case SAVE_NOTE:
      return {
        ...state,
        isOpen: action.isOpen,
        note: action.note
      }
    default:
      return state
  }
}

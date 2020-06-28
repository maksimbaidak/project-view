import {FETCH_NOTE_LIST} from '../actions/actionTypes'
import {SAVE_NOTE} from '../actions/actionTypes';

const initialState = {
  notes: [{
      note_id: '1',
      contents: 'sadf'
  }]
}

export default function noteListReducer(state = initialState, action){
  switch (action.type) {
    case FETCH_NOTE_LIST:
      return {
        ...state,
        notes: action.notes
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

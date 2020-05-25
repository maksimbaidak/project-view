import {FETCH_NOTE_LIST} from '../actions/actionTypes'

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
    default:
      return state
  }
}
